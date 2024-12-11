/** @format */

import PageWrapper from "../PageWrapper/PageWrapper";
import { z } from "zod";
import classes from "./styles.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import InputValidationWithZod from "./InputValidationWithZod/InputValidationWithZod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormValidationWithZod = () => {
  type ZodRulesType = z.infer<typeof rules>;
  const emptyMessage = "This field cannot be empty!";

  const rules = z.object({
    rulesForEmail: z
      .string()
      .min(1, { message: emptyMessage })
      .email({ message: "Invalid email address!!!!!" }),
    rulesForName: z
      .string()
      .min(1, { message: emptyMessage })
      .regex(/^[A-Za-z]*$/, {
        message: "The name must consist of only letters!",
      })
      .min(2, { message: "The name must consist of a least 2 characters!" }),

    rulesForPassword: z
      .string()
      .min(1, { message: emptyMessage })
      .regex(/^(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*\W)\S+$/, {
        message:
          "The password must contain an uppercase letter, a lowercase letter, a number and a symbol!",
      })
      .min(5, {
        message: "The password must exceed 5 characters!",
      }),
  });

  const {
    handleSubmit,
    register,
    watch,

    formState: { errors },
  } = useForm<ZodRulesType>({
    resolver: zodResolver(rules),
    mode: "onChange",
  });

  const [onSubmitClick, setOnSubmitClick] = useState<boolean>(false);
  const nameValue = watch("rulesForName");
  const emailValue = watch("rulesForEmail");
  const passwordValue = watch("rulesForPassword");

  const onSubmit: SubmitHandler<ZodRulesType> = async (e) => {
    console.log("Form data");
  };

  const onInvalid = (errors: any) => {
    setOnSubmitClick(true);
  };

  return (
    <PageWrapper>
      <div className={classes.zodContainer}>
        <form
          onSubmit={handleSubmit(onSubmit, onInvalid)}
          className={classes.zodForm}
        >
          <InputValidationWithZod
            onSubmitClick={onSubmitClick}
            currentValue={nameValue}
            name="rulesForName"
            placeholder="name"
            type="text"
            register={register}
            errors={errors.rulesForName?.message}
          />
          <InputValidationWithZod
            onSubmitClick={onSubmitClick}
            currentValue={emailValue}
            name="rulesForEmail"
            placeholder="email"
            register={register}
            type="email"
            errors={errors.rulesForEmail?.message}
          />
          <InputValidationWithZod
            onSubmitClick={onSubmitClick}
            currentValue={passwordValue}
            name="rulesForPassword"
            placeholder="password"
            errors={errors.rulesForPassword?.message}
            type="password"
            register={register}
          />
          <input type="submit" />
        </form>
      </div>
    </PageWrapper>
  );
};
export default FormValidationWithZod;
