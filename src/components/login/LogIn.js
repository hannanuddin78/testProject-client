import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";

const LogIn = () => {
  const [loggedInUser, setLoggedInUser, searchValue, setSearchValue, login, setLogin] = useContext(
    UserContext
  );
  const [ifNewUser, setIfNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    email: "",
    password: "",
    error: "",
    success: "",
  });

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleBlur = (e) => {
    //collection from information when i creat account
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const ifPasswordLength = e.target.value.length >= 5;
      const needsPasswordNumber = /\d{1}/.test(e.target.value);
      isFieldValid = ifPasswordLength && needsPasswordNumber;
    }
    if (isFieldValid) {
      const isNewUser = { ...user };
      isNewUser[e.target.name] = e.target.value;
      setUser(isNewUser);
    }
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    //this function collects data from and send data to firebase
    if (ifNewUser && user.email && user.name && user.password) {
      //create new user who sign in
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserInfo(user.name);
          setLogin(newUserInfo);
        })
        .catch((err) => {
          const newUserInfo = { ...user };
          newUserInfo.error = err.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    if (!ifNewUser && user.email && user.password) {
      //sign in user email and password
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          newUserInfo.name = res.user.displayName;
          setUser(newUserInfo);
          setLogin(newUserInfo);
          storeAuthToken();
          sessionStorage.setItem("gmail", res.user.email);
        })
        .catch((err) => {
          console.log(err);
          const newUserInfo = { ...user };
          newUserInfo.error = err.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  };
  const updateUserInfo = (name) => {
    var user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then((res) => {
        console.log("user name update successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignInBtn = () => {
    //google Sign In function
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, email } = res.user;
        const signInUser = {
          isSignIn: true,
          name: displayName,
          email: email,
        };
        setUser(signInUser);
        setLogin(signInUser);
        storeAuthToken();
        sessionStorage.setItem("gmail", res.user.email);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="login-page container">
      <h1>Admin Penal</h1>
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-md-12">
          <div className="loginForm shadow p-4">
            <form onSubmit={handleSubmit}>
              {ifNewUser && (
                <div className="form-group">
                  <label>User Name</label>
                  <input onBlur={handleBlur} name="name" type="text" className="form-control" />
                </div>
              )}
              <div className="form-group">
                <label>User email</label>
                <input onBlur={handleBlur} name="email" type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  onBlur={handleBlur}
                  name="password"
                  type="password"
                  className="form-control"
                />
              </div>
              {ifNewUser && (
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    onBlur={handleBlur}
                    name="password"
                    type="password"
                    className="form-control"
                  />
                </div>
              )}
              <div className="form-group loginFormBtn user-error">
                <p>{user.error}</p>
                {login.email && (
                  <p className="user-success">
                    User {ifNewUser ? "Created" : "Logged In"} Successfully Done
                  </p>
                )}
              </div>
              <div className="form-group loginFormBtn">
                <button type="submit" className="text-danger">
                  {ifNewUser ? "Sign Up" : "Sign In"}
                </button>
              </div>
              <div
                onClick={() => setIfNewUser(!ifNewUser)}
                className="form-group loginFormBtn newUser-btn"
              >
                {ifNewUser ? (
                  <p>Already have an account? Login</p>
                ) : (
                  <p>
                    Don’t have an account? <br /> Create an account
                  </p>
                )}
              </div>
            </form>
            <div className="d-flex justify-content-center">
              <button onClick={handleGoogleSignInBtn} type="button" className="btn btn-success">
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
