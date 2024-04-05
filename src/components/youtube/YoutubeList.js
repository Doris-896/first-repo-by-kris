import React from "react";
import YoutubeItem from "./YoutubeItem";
import { YoutubeData } from "./data";

const YoutubeList = (props) => {
  console.log(props);
  return (
    <div className="youtube-list">
    {props.children}
      {YoutubeData.map((item, index) => {
        let newClass = "";
        if (index === 1) newClass = "abc";
        return (
          <YoutubeItem
            key={item.id}
            image={item.image || item.avatar}
            avatar={item.avatar}
            title={item.title}
            author={item.author || "Dolly Kattier"}
            className={index === 1 ? "abc" : ""} //Ternary operator
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
