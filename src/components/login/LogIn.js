import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";

const LogIn = () => {
  const [loggedInUser, setLoggedInUser, searchValue, setSearchValue, login, setLogin] = useContext(
    UserContext
  );
  console.log(loggedInUser);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleNewUser = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (result) {
        setLogin(result);
        history.replace(from);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="login-page container">
      <h1>Admin Penal</h1>
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-md-12">
          <div className="loginForm shadow p-4">
            <div className="form-group">
              <label>User Name</label>
              <input id="email" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input id="password" type="password" className="form-control" />
            </div>
            <div className="form-group loginFormBtn">
              <button onClick={handleNewUser} className="text-danger">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
