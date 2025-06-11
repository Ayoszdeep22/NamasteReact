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
const heading1=React.createElement("div",{id:"parent"},
  [React.createElement("div",{id:"child"},
    [React.createElement("h1",{id:"heading"},"this is the heading tag"),
      React.createElement("h2",{id:"heading"},"this is the heading2 tag")]),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{id:"heading"},"this is the heading tag"),
      React.createElement("h2",{id:"heading"},"this is the heading2 tag")])]);

















const heading = React.createElement(
  "h1",
  { id: "helloId" },  // Note the quotes around "helloId"
  "Hello from the Namaste React"
);

// it is basically creating a object not an element it have three things props attributes and elements
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);///object->element