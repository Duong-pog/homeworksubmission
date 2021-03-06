const controller = {};
controller.register = (data) => {

  if (data.firstName.trim() === "") {
    
      
  } else {
    
  }

  if (data.lastName.trim() === "") {
    
  } else {
    
  }

  if (data.email.trim() === "") {
    document.getElementById("email-error").innerText =
      "Please input your email";
  } else {
    document.getElementById("email-error").innerText = "";
  }

  if (data.password.trim() === "") {
    document.getElementById("password-error").innerText =
      "Please input your password";
  } else {
    document.getElementById("password-error").innerText = "";
  }
  if (data.confirmPassword.trim() === "") {
    document.getElementById("confirm-password-error").innerText =
      "Please input confirm password";
  } else if (data.confirmPassword.trim() !== data.password.trim()) {
    document.getElementById("confirm-password-error").innerText =
      "Password didn't match";
  } else {
    document.getElementById("confirm-password-error").innerText = "";
  }
  if (data.firstName !== "" &&
    data.lastName !== "" &&
    data.email !== "" &&
    data.password !== "" &&
    data.confirmPassword !== "" &&
    data.password === data.confirmPassword) {
    model.register(data); 
  }
};


controller.login = (dataLogin) => {
  if (dataLogin.email.trim() === "") {
      document.getElementById("email-error").
          innerText = `*Please input email`
  }
  else {
      document.getElementById("email-error").
          innerText = '';
  }
  if (dataLogin.password === "") {
      document.getElementById("password-error").
          innerText = `*Please type password`
  }
  else {
      document.getElementById("password-error").
          innerText = '';
  }


  if (dataLogin.email !== "" &&
      dataLogin.password !== "") {
      model.login(dataLogin);
  }

};