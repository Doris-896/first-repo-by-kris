import { useReducer } from 'react'

//Các bước của useState (đơn giản hơn)
// 1. Init state: 0
// 2. Action: Up (state + 1) / Down (state - 1)

//Các bước của useReducer (phức tạp hơn)
// 1. Init state: 0
const iniState = 0
// 2. Action: Up (state + 1) / Down (state - 1)
const UP_ACTION = 'up'           // nguyên tắc đặt tên constant
const DOWN_ACTION = 'down'    
// 3. Reducer
const reducer = (state, action) => {
  console.log('reducer running')                    //lần đầu tiên useReducer không gọi đến cái này
  switch(action) {
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default:
        throw new Error('Invalid action')
  }
}
// 4. Dispatch


function App() {
  const [count, dispatch] = useReducer(reducer, iniState)             
  //dispatch là một hành động kích hoạt action, dẫn đến việc statr bị thay đổi => dẫn đến việc re-render component app 
  //Nguyên lý hoạt động của useReducer: dispatch được gọi => truyền vào action => useReducer xử lý để lấy action, đi gọi hàm reducer, lấy state hiện tại trả ra (initState = 0), lấy action (down) truyền vào => match với case sau -1, update lại và render lại App  
  return (
    <div style={{ padding: '0 20px' }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  )
}

export default App