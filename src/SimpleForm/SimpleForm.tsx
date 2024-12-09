/** @format */

import { useState } from "react";
import classes from "./styles.module.css";
import { isValid } from "../config/validationRules";
import PageWrapper from "../PageWrapper/PageWrapper";
import InputField from "../InputField/InputField";

const SimpleForm = () => {
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

  const disabledButton = userInfo.email && userInfo.name && userInfo.password;

  return (
    <PageWrapper>
      <div className={classes.simpleFormContainer}>
        <form
          onSubmit={handleSubmit}
          className={classes.form}
          action="martagolov4ak@gmail.com"
        >
          <InputField
            placeholder="name"
            onChange={handleName}
            type="text"
            value={userInfo.name}
            errorMessage={errorMessage.name}
          />
          <span>{errorMessage.name}</span>
          <InputField
            placeholder="email"
            onChange={handleEmail}
            type="email"
            value={userInfo.email}
            errorMessage={errorMessage.email}
          />
          <span>{errorMessage.email}</span>
          <InputField
            placeholder="password"
            onChange={handlePassword}
            type="password"
            value={userInfo.password}
            errorMessage={errorMessage.password}
          />
          <span>{errorMessage.password}</span>
          <button
            disabled={!disabledButton}
            className={
              !disabledButton === false
                ? classes.formButton
                : classes.formButtonDisabled
            }
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </PageWrapper>
  );
};

export default SimpleForm;
