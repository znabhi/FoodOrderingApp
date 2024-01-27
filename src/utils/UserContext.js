import { createContext, useContext } from "react";

const UserContext = createContext({
  loggedInUser: "Admin",
  name: "Guest",
});
export default UserContext;
