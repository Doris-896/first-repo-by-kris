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

function Content() {
  /**
   Syntax
   1. useEffect(callback) => rất ít dùng
     - gọi callback mỗi khi component re-render
     - gọi callback sau khi component thêm element vào DOM4
     - tất cả các state cập nhật đều chạy vào đây
     2. useEffect(callback, []) 
   3. useEffect(callback, [deps])
   */
  const [tittle, setTittle] = useState("");

  useEffect(() => {                     //sẽ chạy code ở dưới trước, đưa element vào trong DOM, rồi quay trở lại gọi callback
    console.log("Mounted");
  })
  
  return (
    <div>
      <input 
        value={tittle} 
        onChange={(e) => setTittle(e.target.value)} 
      />
      {console.log('Render')}                       {/*nhớ bỏ vào trong dấu ngoặc nhọn không nó sẽ render ra màn hình */}
    </div>
  );
}

export default Content;
