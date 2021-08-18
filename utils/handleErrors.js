// Error Handling
const handleErrors = (error) => {
    let refErrors = {
      email: "",
      username: "",
      password: "",
    };
  
    if (error.code === 11000) {
      error.keyValue.username && (
        refErrors.username = "Username has already been taken!"
      )
      error.keyValue.email && (
      refErrors.email = "This email is already registered!"
      )
    }
  
    if (error.message.includes("Customer validation failed")) {
      // log(Object.values(error.errors))
      Object.values(error.errors).forEach(({ properties }) => {
        refErrors[properties.path] = properties.message;
      });
    }
    return refErrors;
};

module.exports = handleErrors