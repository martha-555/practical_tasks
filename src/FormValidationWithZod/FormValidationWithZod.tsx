/** @format */

import PageWrapper from "../PageWrapper/PageWrapper";
import { z } from "zod";
import classes from "./styles.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { ChangeEventHandler, FocusEventHandler, useState } from "react";
import InputValidationWithZod from "./InputValidationWithZod/InputValidationWithZod";

type FieldValues = {
  user_name: string;
  user_email: string;
  user_password: string;
  text: string;
  email: string;
  password: string;
  name: string;
};

const FormValidationWithZod = () => {
  const { handleSubmit } = useForm<FieldValues>();

  const rules = {
    rulesForEmail: [
      z.string().email({ message: "Invalid email address!!!!!" }),
    ],
    rulesForName: [
      z.string().regex(/^[A-Za-z]*$/, {
        message: "The name must consist of only letters!",
      }),
      z
        .string()
        .min(2, { message: "The name must consist of a least 2 characters!" }),
    ],
    rulesForPassword: [
      z.string().regex(/^(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*\W)\S+$/, {
        message:
          "The password must contain an uppercase letter, a lowercase letter, a number and a symbol!",
      }),
      z.string().min(5, {
        message: "The password must exceed 5 characters!",
      }),
    ],
  };

  const { rulesForName, rulesForEmail, rulesForPassword } = rules;

  const onSubmit: SubmitHandler<FieldValues> = (e) => {};

  const { control } = useForm<FieldValues>({
    mode: "onChange",
  });

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {};

  const handleValidation = (name: string, currentRules: z.ZodString[]) => {
    const result = currentRules
      .map((i) => {
        const isValid = i.safeParse(name);
        return isValid.error?.errors[0].message;
      })
      .filter((i) => i !== undefined);

    return result.join("|--|");
  };
  return (
    <PageWrapper>
      <div className={classes.zodContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.zodForm}>
          <InputValidationWithZod
            onChange={onChange}
            name="user_name"
            placeholder="name"
            control={control}
            type="text"
            rules={{
              validate: (nameValue) =>
                handleValidation(nameValue, rulesForName),
            }}
          />
          <InputValidationWithZod
            onChange={onChange}
            name="user_email"
            placeholder="email"
            control={control}
            type="email"
            rules={{
              validate: (emailValue) =>
                handleValidation(emailValue, rulesForEmail),
            }}
          />
          <InputValidationWithZod
            onChange={onChange}
            name="user_passwod"
            placeholder="password"
            control={control}
            type="password"
            rules={{
              validate: (passwordValue) =>
                handleValidation(passwordValue, rulesForPassword),
            }}
          />
          <input type="submit" />
        </form>
      </div>
    </PageWrapper>
  );
};
export default FormValidationWithZod;
