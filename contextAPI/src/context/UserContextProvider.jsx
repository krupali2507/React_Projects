import React from "react";
import userContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [data, setData] = React.useState(null);
  return (
    <userContext.Provider value={{ data, setData }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
