/** @format */

import { useEffect, useRef, useState } from "react";
import classes from "./styles.module.css";
import { isValid } from "../config/validationRules";

const Form = () => {
  const ref = useRef<HTMLButtonElement>(null);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleName = (e: React.FormEvent<HTMLInputElement>) => {
    const name = (e.target as HTMLInputElement).value;

    if (isValid("name", name)) {
      setUserInfo((prev) => ({
        ...prev,
        name,
      }));
      setErrorMessage((prev) => ({
        ...prev,
        name: "",
      }));
    } else {
      setErrorMessage((prevValue) => ({
        ...prevValue,
        name: "Invalid name format",
      }));
      setUserInfo((prev) => ({
        ...prev,
        name: "",
      }));
    }
  };

  const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
    const email = (e.target as HTMLInputElement).value;

    if (isValid("email", email)) {
      setUserInfo((prev) => ({
        ...prev,
        email,
      }));
      setErrorMessage((prev) => ({
        ...prev,
        email: "",
      }));
    } else {
      setErrorMessage((prev) => ({
        ...prev,
        email: "Invalid email",
      }));
      setUserInfo((prev) => ({
        ...prev,
        email: "",
      }));
    }
  };

  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    const password = (e.target as HTMLInputElement).value;
    if (isValid("password", password)) {
      setUserInfo((prev) => ({
        ...prev,
        password,
      }));
      setErrorMessage((prev) => ({
        ...prev,
        password: "",
      }));
    } else {
      setUserInfo((prev) => ({
        ...prev,
        password: "",
      }));
      setErrorMessage((prev) => ({
        ...prev,
        password: "The password is not secure",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (ref.current && userInfo.email && userInfo.name && userInfo.password) {
      ref.current.disabled = false;
    }
  }, [userInfo]);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={classes.form}
        action="martagolov4ak@gmail.com"
      >
        <input
          required
          className={
            (userInfo.name && classes.valid) ||
            (errorMessage.name && classes.invalid) ||
            ""
          }
          onChange={handleName}
          type="text"
          placeholder="name"
        />
        <span>{errorMessage.name}</span>
        <input
          required
          className={
            (userInfo.email && classes.valid) ||
            (errorMessage.email && classes.invalid) ||
            ""
          }
          onChange={handleEmail}
          type="email"
          placeholder="email"
        />
        <span>{errorMessage.email}</span>
        <input
          required
          className={
            (userInfo.password && classes.valid) ||
            (errorMessage.password && classes.invalid) ||
            ""
          }
          onChange={handlePassword}
          type="password"
          placeholder="password"
          maxLength={10}
        />
        <span>{errorMessage.password}</span>
        <button
          ref={ref}
          disabled
          className={
            ref.current?.disabled === false
              ? classes.formButton
              : classes.formButtonDisabled
          }
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
