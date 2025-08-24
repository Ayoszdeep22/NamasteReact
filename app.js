/**
 * 
 * <div id="parent">
 * <div id ="child">
 * <h1>this is the heading tag</h1>
 * <h2>this is the heading 2 tag</h2>
 * </div>
 *  <div id ="child2">
 * <h1>this is the heading tag</h1>
 * <h2>this is the heading 2 tag</h2>
 * </div>
 * 
 * 
 */
// nested div in react including 

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" },
    React.createElement("h1", { id: "heading1" }, "This is the H1 heading"),
    React.createElement("h2", { id: "heading2" }, "This is the H2 heading")
  ),
  React.createElement("div", { id: "child2" },  
    React.createElement("h1", { id: "heading3" }, "This is another H1 heading"),
    React.createElement("h2", { id: "heading4" }, "This is another H2 heading")
  )
);

const heading = React.createElement("h1", { id: "helloId" }, "Hello from Namaste React");


// it is basically creating a object not an element it have three things props attributes and elements above one
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);///object->element