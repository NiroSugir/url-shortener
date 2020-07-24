import React from "react";
import { useForm } from "react-hook-form";
import { useStyles } from "../theme";
import { TextField, Button } from "@material-ui/core";

const SlugCreator = ({ onSubmit }) => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  // TODO: show appropriate error message on screen when there are any
  if (Object.keys(errors).length) {
    console.log("errors", errors);
  }
  console.log("hi");

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="url"
        name="url"
        label="Url"
        autoFocus
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        ref={register({ required: true, minLength: 11, maxLength: 1024 })}
      />

      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="slug"
        name="slug"
        label="customize (optional)"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        ref={register({
          minLength: 1,
          maxLength: 21,
          pattern: /[a-zA-Z0-9_-]/i,
        })}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Generate
      </Button>
    </form>
  );
};

export default SlugCreator;
