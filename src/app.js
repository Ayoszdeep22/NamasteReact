import React, { lazy, Suspense,useEffect,useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./compaonents/Header.jsx";
import Body from "./compaonents/Body.jsx";
import About from "./compaonents/about.jsx";
import Contact from "./compaonents/Contact.jsx";
import RestaurantMenu from "./compaonents/RestaurantMenu.jsx";
import Error from "./compaonents/Error.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import  {Provider} from "react-redux";
import appStore from "./feature/appStore.js";
import Cart from "./compaonents/cart.jsx";
import userContext from "./utils/userContext.js";


// Lazy-load only the Grocery component
const Grocery = lazy(() => import("./compaonents/Grocery"));

const AppLayout = () => {
//authnetication
const [userInfo,setUserInfo]=useState();
const data=useEffect(()=>{
  // make an api call and send user info
  const user={
    name:"Ayomide",};
  setUserInfo(user);
  },[]);

  return (
      <Provider store={appStore}> 
      <userContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
         <div className="app">
      <Header />
      <Outlet />
    </div>  
    </userContext.Provider>
   
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
       {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        // Wrap Grocery in Suspense to handle loading state
        element: (
          <Suspense fallback={<div>Loading Grocery Page…</div>}>
            <Grocery />
          </Suspense>
        )
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ] 
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
