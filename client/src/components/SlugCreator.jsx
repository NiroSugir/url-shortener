import React from "react";
import { useForm } from "react-hook-form";
import { useStyles } from "../theme";
import { TextField, Button, Typography } from "@material-ui/core";

const SlugCreator = ({ onSubmit }) => {
  const classes = useStyles();
  const { register, handleSubmit, errors, watch } = useForm();

  // TODO: show appropriate error message on screen when there are any
  if (Object.keys(errors).length) {
    console.log("errors", errors);
  }

  // get the value of slug as it changes (if it ever does). an empty slug means,
  // the server will have to generate one.
  const slug = watch("slug", "");

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <Typography variant="overline" color="error">
        {errors.url && errors.url.message}
      </Typography>

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
        inputRef={register({
          required: "An address is required!",
          minLength: 11,
          maxLength: 1024,
        })}
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
        inputRef={register({
          minLength: 1,
          maxLength: 21,
          pattern: /[a-zA-Z0-9_-]/i,
        })}
      />

      <Typography variant="caption" display="block">
        new alias: https://nirosugir.com/
        {slug === "" ? <em>random</em> : <u>{slug}</u>}
      </Typography>

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
