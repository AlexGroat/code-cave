import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../../utils/mutations";
import Auth from "../../utils/auth";

const PostForm = (props) => {
  const [formState, setFormState] = useState({ body: "" });

  const [createPost, { error }] = useMutation(CREATE_POST);

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
      const { data } = await createPost({
        variables: { ...formState },
      });
    } catch (err) {
      console.log(error);
    }

    setFormState({
      body: "",
    });
  };

  return (
    <>
    {Auth.loggedIn() ? (
      <>
      <form className="post-form" onSubmit={handleFormSubmit}>
      <h2>Create a post:</h2>
      <input
        placeholder="Hi World!"
        name="body"
        onChange={handleChange}
        value={formState.body}
        error={error ? true : false}
      />
      <button className="btn btn-primary">Submit</button>
    </form>
      </>
    ) : (
      <></>
    )}
    
    </>
  );
};

export default PostForm;
