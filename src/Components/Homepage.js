import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GoogleLogin from "react-google-login";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../features/userSlice";

import "../styling/home.css";

const Homepage = () => {
  const dispatch = useDispatch();
  const login = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };

  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="home__page" style={{ display: isSignedIn ? "none" : "" }}>
      {!isSignedIn && (
        <div className="login__message">
          <h1> 📘 </h1>
          <h3> ASK | READ | LEARN | REPEAT </h3>
          <p>WE HOPE YOU MIGHT LIKE AND EXPLORE IT.</p>
          <GoogleLogin
            clientId="1044562252307-gh5svscu290mr3f918063l6oge5t3e5v.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login__button"
              >
                Login with GOOGLE
              </button>
            )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      )}
    </div>
  );
};

export default Homepage;
