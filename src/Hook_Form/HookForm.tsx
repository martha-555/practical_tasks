/** @format */

import { SubmitHandler, useForm } from "react-hook-form";
import PageWrapper from "../PageWrapper/PageWrapper";
import classes from "./styles.module.css";

// import { ErrorMessage } from "@hookform/error-message";

import { validators } from "../config/validationRules";
type Inputs = {
  name: string;
  email: string;
  password: string;
};
const HookForm = () => {
  const { name, email, password } = validators;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (e) => {
    console.log(e);
  };

  return (
    <PageWrapper>
      <form className={classes.hookForm} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="name"
          {...register("name", {
            required: "The name field is required",
            pattern: {
              value: name.regex,
              message: "The name must consist of only letters!",
            },
            minLength: {
              value: name.minLength || 0,
              message: `The name must consist of a least ${name.minLength} characters!`,
            },
          })}
        />
        {errors.name && <span>{errors.name.message}</span>}
        <input
          type="email"
          placeholder="email"
          {...register("email", {
            required: "The email field is required!",
            pattern: {
              value: email.regex,
              message: "Invalid email format!",
            },
            minLength: {
              value: email.minLength || 0,
              message: ` The email must exceed ${email.minLength} characters!`,
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <input
          type="password"
          placeholder="password"
          {...register("password", {
            required: "The password field is required!",
            pattern: {
              value: password.regex,
              message:
                "The password must contain an uppercase letter, a lowercase letter, a number and a symbol!",
            },
            minLength: {
              value: password.minLength || 0,
              message: ` The email must exceed ${password.minLength} characters!`,
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <input type="submit" />
      </form>
    </PageWrapper>
  );
};
export default HookForm;
