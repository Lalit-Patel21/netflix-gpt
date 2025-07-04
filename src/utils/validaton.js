export const checkValidData = (email, password, name, isSignUp) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  const isNameValid = !isSignUp || (name && name.trim().length > 2);

  if (!isEmailValid) return "EmailID is not valid";
  if (!isPasswordValid) return "Password is not valid";
  if (!isNameValid) return "Name must be at least 3 characters long";

  return null;
};
