import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import "./login.css";

import Auth from "../../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Code Cave</h3>
          <span className="loginDesc">
            Have all your coding problems solved!
          </span>
          <div className="left-side-login">
          <Link to="/">
            <button className="back-to-home btn btn-primary text-white">
              {" "}
              Back to Home
            </button>
          </Link>
          
            <p>Dont have an account?</p>
            <Link to="/signup">
            <button className="back-to-home btn btn-primary text-white">
              {" "}
               Signup
            </button>
          </Link>
          </div>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            {data ? (
              <p>
                Success!
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <>
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="loginInput"
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <input
                    className="passwordInput"
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <button
                    className="loginButton"
                    style={{ curser: "pointer" }}
                    type="submit"
                  >
                    Log In
                  </button>
                </form>
              </>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
