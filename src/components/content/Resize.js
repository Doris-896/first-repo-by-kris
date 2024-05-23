//mục đích: biết kích thước cửa sổ trình duyệt theo bề ngang
import { useEffect, useState } from "react";


function Content() {
  

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
