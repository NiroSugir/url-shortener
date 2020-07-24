import React from "react";
import { useForm } from "react-hook-form";

const SlugCreator = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  // TODO: show appropriate error message on screen when there are any
  if (Object.keys(errors).length) {
    console.log("errors", errors);
  }
  console.log("hi");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="url"
        name="url"
        ref={register({ required: true, minLength: 11, maxLength: 1024 })}
      />

      <input
        type="text"
        placeholder="slug"
        name="slug"
        ref={register({
          minLength: 1,
          maxLength: 21,
          pattern: /[a-zA-Z0-9_-]/i,
        })}
      />

      <button type="submit">Generate</button>
    </form>
  );
};

export default SlugCreator;
