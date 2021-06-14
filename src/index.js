//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

var greetingText = "";

const currentTime = new Date(2021, 6, 14, 23);
const hours = currentTime.getHours();
var myStyle = { color: "red" };

if (hours < 12) {
  greetingText = "Good Morning";
  myStyle.color = "red";
} else if (hours < 18) {
  greetingText = "Good Afternoon";
  myStyle.color = "green";
} else {
  greetingText = "Good Evening";
  myStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={myStyle}>
    {greetingText}
  </h1>,
  document.getElementById("root")
);
