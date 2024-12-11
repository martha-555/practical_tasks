/** @format */

import { ChangeEventHandler, useState } from "react";
import classes from "./styles.module.css";

type HookFormInputProps = {
  name: string;
  type?: string;
  placeholder: string;
  register: any;
  errors: string | undefined;
  currentValue: string | undefined;
  onSubmitClick: boolean;
};

const InputValidationWithZod: React.FC<HookFormInputProps> = ({
  name,
  type = "text",
  register,
  placeholder,
  errors,
  currentValue,
  onSubmitClick,
}) => {
  const [isEmptyMessage, setIsEmptyMessage] = useState("");
  const onBlur: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!currentValue) setIsEmptyMessage("This field is required");
  };

  return (
    <div>
      <input
        className={
          (errors && classes.invalid) || (currentValue && classes.isValid) || ""
        }
        {...register(name, { onBlur: onBlur })}
        placeholder={placeholder}
        type={type}
      />
      {errors && <span className={classes.errorMessage}>{errors}</span>}
      {!currentValue && !onSubmitClick && (
        <span className={classes.errorMessage}>{isEmptyMessage}</span>
      )}
    </div>
  );
};

export default InputValidationWithZod;
