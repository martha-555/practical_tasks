/** @format */

import * as React from "react";
import {
  Control,
  Controller,
  RegisterOptions,
  useController,
} from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  password: string;
  type: string;
};

interface HookFormInputProps {
  control: Control<any>;
  name: keyof FormValues;
  type?: string;
  rules?: RegisterOptions;
}

const HookFormInput: React.FC<HookFormInputProps> = ({
  control,
  name,
  type = "text",
  rules,
}) => {
  const { fieldState } = useController({ control, name, rules });

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <>
          <input {...field} type={type} placeholder={name} />
          <span>{fieldState.error?.message}</span>
        </>
      )}
    />
  );
};

export default HookFormInput;
