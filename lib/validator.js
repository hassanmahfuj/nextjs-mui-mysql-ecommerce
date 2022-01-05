const validator = {};

validator.string = (string) => {
  let verifiedString = string;
  verifiedString =
    typeof verifiedString === "string" && verifiedString.trim().length > 0
      ? verifiedString.trim()
      : false;
  return verifiedString;
};

validator.float = (float) => {
  let verifiedFloat = float;
  verifiedFloat = typeof verifiedFloat === "number" ? verifiedFloat : false;
  console.log(typeof verifiedFloat);
  return verifiedFloat;
};

validator.email = (email) => {
  let verifiedEmail = email;
  verifiedEmail =
    typeof verifiedEmail === "string" && verifiedEmail.trim().length > 0
      ? verifiedEmail.trim()
      : false;
  return verifiedEmail;
};

validator.password = (password) => {
  let verifiedPassword = password;
  verifiedPassword =
    typeof verifiedPassword === "string" && verifiedPassword.trim().length > 0
      ? verifiedPassword.trim()
      : false;
  return verifiedPassword;
};

module.exports = validator;
