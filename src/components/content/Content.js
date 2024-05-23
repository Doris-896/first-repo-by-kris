import { useEffect, useState } from "react";

/**
Cần nắm các kiến thức: 
1. Events: Add/ remove event listener
2. Observer pattern: Subscribe/ unsubscribe
3. Closure
4. useState
5. Mounted, unmounted
6. ===
7. Call API
 */

/**
Mounted: ấn toggle thì hiện lên "Hi everyone" 
Unmounted: ấn toggle lần nữa thì chữ biến mất
*/

/**
useEffect dùng cho các trường hợp
1. Update DOM
2. Call API
3. Listen DOM events (scroll, resize)
4. Clean up (remove listener/ unsubscribe, clear timer)
*/

/**
 Syntax
 1. useEffect(callback) => rất ít dùng
 - callback luôn được gọi sau khi component mounted
 - gọi callback mỗi khi component re-render
 - gọi callback sau khi component thêm element vào DOM4
 - tất cả các state cập nhật đều chạy vào đây
 - cleanup function luôn được gọi trước khi component unmount
 2. useEffect(callback, []) 
 - callback luôn được gọi sau khi component mounted
 - chỉ gọi callback 1 lần sau khi component mounted
 - cleanup function luôn được gọi trước khi component unmount
 3. useEffect(callback, [deps])
 - callback luôn được gọi sau khi component mounted
 - deps là 1 biến, chứa giá trị dữ liệu, có thể là props truyền từ bên ngoài vào, có thể là state trong component
 - callback sẽ được gọi lại mỗi khi deps thay đổi (sử dụng toán tử === xem deps trước và sau thay đổi giống nhau không để render lại)
 - cleanup function luôn được gọi trước khi component unmount
 */

 /**
useEffect with DOM event
B1: cách làm
B2: vấn đề có thể xảy ra
  - component luôn có thể bị mounted/ unmounted bởi thao tác của người dùng
B3: giải quyết
 */
const tabs = ["posts", "comments", "albums"];

function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    //sẽ chạy code ở dưới trước, đưa element vào trong DOM, rồi quay trở lại gọi callback
    //không render component lại nhiều lần, gọi API 1 lần thôi
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts); //gọi fetch 1 lần, setState 1 lần nữa => in ra 2 lần
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGoToTop(true); //liên tục set = true khi kéo xuống. tuy nhiên liên tục setState như này không liên quan đến việc liên tục re-render component. Lý do: nó so sánh bằng ===
      } else {
        setShowGoToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);          //khi tắt cái button toggle thì tưởng là unmounted nhưng bản chất cái listener này không bị vì nó là phạm vi toàn window, chỉ bị mất khi tắt tab trình duyệt. => khi unmounted component thì sự kiện này vẫn còn (gọi là dò dỉ bộ nhớ)
    console.log('addEventListener')

    //cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);      
      console.log('removeEventListener')
    }
  }, []);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "#333",
                }
              : {}
          }
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}

      {posts.map((post) => (
        <li key={post.id}>{post.title || post.name}</li>
      ))}
      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
          }}
        >
          Go to top
        </button>
      )}
    </div>
  );
}

export default Content;
