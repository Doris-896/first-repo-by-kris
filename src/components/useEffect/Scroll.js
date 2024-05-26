import { useEffect, useState } from "react";

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
