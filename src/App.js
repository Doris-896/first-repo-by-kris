import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import { YoutubeData } from "./components/YoutubeData";

// shift + alt + F -> format
function App() {
  console.log({ YoutubeData });
  return (
    <div className="youtube-list">
      {YoutubeData.map((item, index) => {
        if (index === 1) {
          console.log("middle item");
        }
        return (
          <YoutubeItem
            key={item.id}
            image={item.image || item.avatar}
            avatar={item.avatar}
            title={item.title}
            author={item.author || "Dolly Kattier"}
          ></YoutubeItem>
        );
      })}
    </div>
  );
}
export default App;

function YoutubeItem(props) {
  return (
    <div className="youtube-item">
      <div
        className="youtube-image"
        // style={{height: '200px'}}
      >
        <img src={props.image} alt="" />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-item youtube-title">{props.title}</h3>
          <h4 className="youtube-author">{props.author}</h4>
        </div>
      </div>
    </div>
  );
}
