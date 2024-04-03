import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import { YoutubeData } from "./components/YoutubeData";

function Feature() {
  return (
    <div className="App">
      <Greet name="Shiba" heroName="Batman">
        <p>This is children props</p>
        <button>Action</button>
        <h3 className="feature-title">Title</h3>
        <p className="feature-desc">
          bvihjlefqripqgheoiffjelnoeislhfskjdflrwjsgkerhgjlkedpowljgilehgljkfssfor
          egifldbuhrijlkenfjdvuohiljwefphiowefdpjiengrehofwdsipjvfbihegjrpfjdsiegh?
        </p>
      </Greet>
    </div>
  );
}

// shift + alt + F -> format
function App() {
  console.log({YoutubeData})
  return (
    <div className="youtube-list">
      {YoutubeData.map((item, index) => (
        <YoutubeItem
          key={item.id}
          image={item.image}
          avatar={item.avatar}
          title={item.title}
          author={item.author}
        ></YoutubeItem>
      ))} 
    </div>
  )
}

export default App;

function YoutubeItem(props) {
  return (
    <div className="youtube-item">
      <div
        className="youtube-image"
        // style={{height: '200px'}}
      >
        <img src={props.image1} alt="" />
      </div>
      <div className="youtube-footer">
        <img src={props.image2} alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-item youtube-title">{props.title}</h3>
          <h4 className="youtube-author">{props.author}</h4>
        </div>
      </div>
    </div>
  );
}
