import "./App.css";
import YoutubeList from "./components/youtube/YoutubeList";

// shift + alt + F -> format
function App() {
  const name = 'Dolly chinhh'
  return (
    <div>
      <YoutubeList>                 
        {name}
      </YoutubeList>
    </div>
  );
}
export default App;
