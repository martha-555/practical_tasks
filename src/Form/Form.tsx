import { useEffect, useRef, useState } from 'react'
import classes from './styles.module.css'

const Form = () => {
  const ref = useRef<HTMLButtonElement>(null);
  
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleName = (e: React.FormEvent<HTMLInputElement>) => {
    const name = (e.target as HTMLInputElement).value;
    const regex = /^[A-Za-z]+$/;
    
    if (regex.test(name)) {
      setUserInfo((prev) => ({
        ...prev,
        name
      }));
      setErrorMessage((prev) => ({
        ...prev,
        name: ''
      }));
    }
    
    if (!regex.test(name)) {
      setErrorMessage((prevValue) => ({
        ...prevValue,
        name: "Invalid name format"
      }));
      setUserInfo((prev) => ({
        ...prev,
        name: ''
      }));
    }
  };

  const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
    const start = '[^\\.\\-]';
    const prohibitedCharacters = '(?!.*\\.{2}|--|\\.-|\\-\\.)';
    const localPart = "[a-zA-Z0-9._%+!$'*=+-]";
    const beforeTheDomain = '(?![\\.\\-])';
    const allowedInTheDomain = '[a-zA-Z0-9.-]';
    
    const validEmail = new RegExp(`^${start}${prohibitedCharacters}${localPart}+\\w@${beforeTheDomain}${allowedInTheDomain}+\\w\\.\\w{2,}$`);
    const email = (e.target as HTMLInputElement).value;

    if (validEmail.test(email)) {
      setUserInfo((prev) => ({
        ...prev,
        email
      }));
      setErrorMessage((prev) => ({
        ...prev,
        email: ''
      }));
    }

    if (!validEmail.test(email)) {
      setErrorMessage((prev) => ({
        ...prev,
        email: 'Invalid email'
      }));
      setUserInfo((prev) => ({
        ...prev,
        email: ''
      }));
    }
  };

  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    const regex = /^(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*\W)\S{5,}$/;
    const password = (e.target as HTMLInputElement).value;

    if (regex.test(password)) {
      setUserInfo((prev) => ({
        ...prev,
        password
      }));
      setErrorMessage((prev) => ({
        ...prev,
        password: ''
      }));
    }

    if (!regex.test(password)) {
      setUserInfo((prev) => ({
        ...prev,
        password: ''
      }));
      setErrorMessage((prev) => ({
        ...prev,
        password: 'The password is not secure'
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
      <form onSubmit={handleSubmit} className={classes.form} action="martagolov4ak@gmail.com">
        <input
          required
          className={userInfo.name && classes.valid || errorMessage.name && classes.invalid || ''}
          onChange={handleName}
          type="text"
          placeholder="name"
        />
        <span>{errorMessage.name}</span>
        <input
          required
          className={userInfo.email && classes.valid || errorMessage.email && classes.invalid || ''}
          onChange={handleEmail}
          type="email"
          placeholder="email"
        />
        <span>{errorMessage.email}</span>
        <input
          required
          className={userInfo.password && classes.valid || errorMessage.password && classes.invalid || ''}
          onChange={handlePassword}
          type="password"
          placeholder="password"
          maxLength={10}
        />
        <span>{errorMessage.password}</span>
        <button
          ref={ref}
          disabled
          className={ref.current?.disabled === false ? classes.formButton : classes.formButtonDisabled}
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;