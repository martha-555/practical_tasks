/** @format */

type Validator = {
  minLength?: number;
  regex: RegExp;
};

const start = "[^\\.\\-]";
const prohibitedCharacters = "(?!.*\\.{2}|--|\\.-|\\-\\.)";
const localPart = "[a-zA-Z0-9._%+!$'*=+-]";
const beforeTheDomain = "(?![\\.\\-])";
const allowedInTheDomain = "[a-zA-Z0-9.-]";

export const validators: Record<"name" | "email" | "password", Validator> = {
  name: {
    minLength: 2,
    regex: /^[A-Za-z]+$/,
  },
  email: {
    minLength: 6,
    regex: new RegExp(
      `^${start}${prohibitedCharacters}${localPart}{0,}\\@${beforeTheDomain}${allowedInTheDomain}+\\w\\.\\w{2,}$`
    ),
  },
  password: {
    minLength: 5,
    regex: /^(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*\W)\S+$/,
  },
};

export const isValid = (
  parameter: keyof typeof validators,
  value: string
): boolean => {
  const validator = validators[parameter];
  const { regex, minLength } = validator;

  if (!regex?.test(value)) {
    return false;
  }

  if (minLength && value.length < minLength) {
    return false;
  }

  return true;
};
