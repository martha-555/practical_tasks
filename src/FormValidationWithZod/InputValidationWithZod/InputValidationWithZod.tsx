/** @format */

import { ChangeEventHandler, FocusEventHandler, useState } from "react";
import classes from "./styles.module.css";
import {
  Control,
  Controller,
  RegisterOptions,
  useController,
} from "react-hook-form";
import { z } from "zod";

type HookFormInputProps = {
  name: string;
  type?: string;
  control: Control<any>;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  rules: RegisterOptions;
};

const InputValidationWithZod: React.FC<HookFormInputProps> = ({
  name,
  type = "text",
  control,
  placeholder,
  rules,
}) => {
  const [isEmpty, setIsEmpty] = useState<string>("");
  const { field, fieldState } = useController({ control, name, rules });
  const errors = fieldState.error?.message;
  const arrayOfErrors = errors?.split("|--|");

  const onBlurHandler: FocusEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    const isEmpty = z
      .string()
      .min(1, { message: "This field must be filled!" });
    const result = isEmpty.safeParse(value);

    if (!result.success) {
      setIsEmpty(result.error.errors[0].message);
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, name, onChange } }) => (
        <div>
          <input
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            onBlur={onBlurHandler}
            type={type}
            className={
              (errors && classes.invalid) ||
              (field.value && classes.isValid) ||
              ""
            }
          />
          {isEmpty && !field.value && <span>{isEmpty}</span>}
          {arrayOfErrors?.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      )}
    />
  );
};

export default InputValidationWithZod;
