import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="signup">
    <div className="signupWrapper">
      <div className="signupLeft">
        <h3 className="signupLogo">Code Cave</h3>
        <span className="signupDesc">
          Have all your coding problems solved!
        </span>
        <Link to="/">
          <button className="back-to-home btn btn-primary text-white">
            {" "}
            Back to Home
          </button>
        </Link>
      </div>
      <div className="signupRight">
        <div className="signupBox">
          {data ? (
            <p>
              Success!
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <>
              <form className='signup-form' onSubmit={handleFormSubmit}>
              <input
                className="signupInput"
                placeholder="Your username"
                name="username"
                type="text"
                value={formState.name}
                onChange={handleChange}
              />
                <input
                  className="signupInput"
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
                  className="signupButton"
                  style={{ curser: "pointer" }}
                  type="submit"
                >
                 Signup
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

export default Signup;