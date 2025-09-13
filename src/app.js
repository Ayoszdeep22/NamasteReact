  import React from "react";
  import ReactDOM from "react-dom/client";
  import Header from "./compaonents/Header.jsx";
  import Body from "./compaonents/Body.jsx";
  import About from "./compaonents/about.jsx";
  import Contact from "./compaonents/Contact.jsx";
  import Error from "./compaonents/Error.jsx";
  import { createBrowserRouter ,RouterProvider} from "react-router-dom";
const AppLayout=()=>{
    return (
      <div className="app">
        <Header/> 
        <Body/>
        </div> 
);}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
  },
  {
    path:"/about",
    element: <About/>,
  },{
    path:"/contact",
    element: <Contact/>,
  }
])




      // it is basically creating a object not an element it have three things props attributes and elements above one
const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter}/>);///object->element

























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
  // const heading1 = React.createElement(
  //   "div",
  //   { id: "parent" },
  //   React.createElement("div", { id: "child" },
  //     React.createElement("h1", { id: "heading1" }, "This is the H1 heading"),
  //     React.createElement("h2", { id: "heading2" }, "This is the H2 heading")
  //   ),
  //   React.createElement("div", { id: "child2" },  
  //     React.createElement("h1", { id: "heading3" }, "This is another H1 heading"),
  //     React.createElement("h2", { id: "heading4" }, "This is another H2 heading")
  //   )
  // );
  // react element
  // const heading1=(<h1 id="helloId" className="helloo">how are u</h1>);
  // const element=<span>heheh react element in function </span>
  // const num=10000;
  // const Title=function(){
  // return (<h1>react component compostion</h1> );
  //   }

  // //react  functional compoents
  // const HeadingComponent=()=>(

  //   <div>
  //     <Title/>
  //     {/* passing one function in another func compnent  */}
  //     <Title></Title>
  //     {Title()}


  //     {heading1}
  //     {element}
  //      <h1>{num}</h1>
  //     <h1>u are returning a function </h1>
  //   </div>
  // )

