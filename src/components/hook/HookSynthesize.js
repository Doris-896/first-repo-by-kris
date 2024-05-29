import React, { useMemo, useCallback, useEffect, useReducer } from 'react';

//useCallback, useMemo
const RandomNumberList = ({ count }) => {                                                       //hiển thị  danh sách các số ngẫu nhiên
  const generateRandomNumbers = useCallback(() => {                                             //tối ưu hóa việc tạo ra hàm generateRandomNumbers (generateRandomNumbers sẽ được tạo lại nếu giá trị của count thay đổi.)
    console.log('Generating random numbers');                                                   //nhiệm vụ sinh ra một mảng các số ngẫu nhiên dựa trên giá trị của prop count.
    const numbers = [];                                                                         //khởi tạo mảng rỗng, lưu trữ các số ngẫu nhiên được tạo ra.
    for (let i = 0; i < count; i++) {numbers.push(Math.floor(Math.random() * 100));}            //Vòng lặp chạy count lần, Math.random lần tạo 1 số ngẫu nhiên khoảng 0-99, Math.floor làm tròn xuống thành số nguyên. 
    return numbers;                                                                             //numbers chứa tập hợp số ngẫu nhiên được tạo ra & trả về từ hàm generateRandomNumbers.                                                                             
  }, [count]);

  const randomNumbers = useMemo(() => generateRandomNumbers(), [generateRandomNumbers]);        //nếu hàm generateRandomNumbers thay đổi (do count thay đổi), React sẽ gọi lại hàm này để tạo ra một kết quả mới.
  return (                                                                                      //Nếu generateRandomNumbers không thay đổi giữa các lần render, React sẽ sử dụng lại kết quả được memoized từ lần render trước đó.
    <ul>
      {randomNumbers.map((number, index) => (                                                   //kết xuất ra number tương ứng với index
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
};

//useReducer, useEffect

const randomNumberReducer = (state, action) => {                                                //hàm reducer, nhận vào hai tham số: state, action (INCREMENT, DECREMENT)
    switch (action.type) {                                                                      //It takes the current state and an action, and returns the new state based on the action type.
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        throw new Error('Invalid action type');
    }
  };
  
const Counter = () => {
  const [state, dispatch] = useReducer(randomNumberReducer, { count: 5 });                      //hàm reducer là randomNumberReducer, và trạng thái khởi đầu là { count: 5 }.
 
  useEffect(() => {                                                                             //ghi log, mỗi khi state của count trong component Counter thay đổi
    console.log('Counter updated');
  }, [state.count]);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <RandomNumberList count={state.count} />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>React Hooks Demo</h1>
      <Counter />
    </div>
  );
};

export default App;