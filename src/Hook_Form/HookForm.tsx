/** @format */

import { SubmitHandler, useForm } from "react-hook-form";
import PageWrapper from "../PageWrapper/PageWrapper";
import classes from "./styles.module.css";
import { validators } from "../config/validationRules";
import HookFormInput from "./Hook_Form_Input/HookFormInput";

type Inputs = {
  name: string;
  email: string;
  password: string;
  text: string;
};

const HookForm = () => {
  const { name, email, password } = validators;
  const { handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (e) => {
    console.log(e);
  };

  const { control } = useForm<Inputs>({
    defaultValues: {
      name: "",
      text: "",
      password: "",
      email: "",
    },
    mode: "onChange",
  });

  return (
    <PageWrapper>
      <div className={classes.hookFormContainer}>
        <form className={classes.hookForm} onSubmit={handleSubmit(onSubmit)}>
          <HookFormInput
            control={control}
            type="text"
            name="name"
            rules={{
              required: "The name field is required",

              minLength: {
                value: name.minLength || 0,
                message: `The name must consist of a least ${name.minLength} characters!`,
              },
            }}
          />
          <HookFormInput
            control={control}
            name="email"
            type="email"
            rules={{
              required: "The email field is required!",
              pattern: {
                value: email.regex,
                message: "Invalid email format!",
              },
              minLength: {
                value: email.minLength || 0,
                message: ` The email must exceed ${email.minLength} characters!`,
              },
            }}
          />
          <HookFormInput
            control={control}
            name="password"
            type="password"
            rules={{
              required: "The password field is required!",
              pattern: {
                value: password.regex,
                message:
                  "The password must contain an uppercase letter, a lowercase letter, a number and a symbol!",
              },
              minLength: {
                value: password.minLength || 0,
                message: ` The password must exceed ${password.minLength} characters!`,
              },
            }}
          />
          <input type="submit" />
        </form>
      </div>
    </PageWrapper>
  );
};
export default HookForm;
