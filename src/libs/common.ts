export const validateLogin = (values: { email: string; password: string }) => {
    const errors: Record<string, string> = {};
  
    if (!values.email) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Please provide a valid email address.";
    }
  
    if (!values.password) {
      errors.password = "Password is required.";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
    }
  
    return errors;
  };
  