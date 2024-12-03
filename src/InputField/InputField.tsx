/** @format */
import classes from "./styles.module.css";

type Input = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  errorMessage: string;
  placeholder: string;
  type: string;
};

const InputField = ({
  onChange,
  value,
  errorMessage,
  placeholder,
  type,
}: Input) => {
  const inputClass =
    (value && classes.valid) || (errorMessage && classes.invalid) || undefined;
  return (
    <>
      <input
        required
        placeholder={placeholder}
        onChange={onChange}
        className={inputClass}
        type={type}
      />
    </>
  );
};
export default InputField;
