// userContext.js
import { createContext } from "react";

export default createContext({
  loggedInUser: "Guest",
  setUserInfo: () => {}
});
