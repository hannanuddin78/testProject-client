import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser, searchValue, setSearchValue, login, setLogin] = useContext(
    UserContext
  );
  const user = sessionStorage.getItem("user");
  console.log(user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        login.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
