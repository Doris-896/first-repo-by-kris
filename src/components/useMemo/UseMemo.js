import { useState, useMemo, } from "react";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = () => {
    setProducts([...products, {             //truyền products cũ vào
        name,                               //do input trả chuỗi lên name, price là kiểu chuỗi
        price: +price,                      //Number(price) or parseInt(price): chuyển dữ liệu qua kiểu số
      }]);
      setName('')                           //sau khi ấn add thì box chuyển thành rỗng
      setPrice('')
  }

  // const total = products.reduce((result, prod) => {
  //   console.log('Tính toán lại ...')            //viết như này mỗi lần nhập chữ thôi nó cũng gọi hàm total => Vô nghĩa, chỉ cần thiết khi ấn nút add
  //   return result + prod.price
  // }, 0)

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log('Tính toán lại ...')   
      return result + prod.price
    }, 0)
    return result
  }, [products])                        //nếu để rỗng thì hàm chỉ tính toán 1 lần thôi, ngược lại truyền depens vào, nếu thay đổi => tính toán lại
  
  return (
    <div style={{ padding: "10px 32px" }}>
      <input 
        value={name}
        placeholder="Enter name ..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter name ..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
