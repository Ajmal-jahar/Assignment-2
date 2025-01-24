var em = document.getElementById("em");
var err1 = document.getElementById("err1");
var no = document.getElementById("no");
var err2 = document.getElementById("err2");
var err4 = document.getElementById("err4");

function regExVal() {
  let RegExp =
    /^([a-zA-z0-9.-]+)@([a-zA-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  if (RegExp.test(em.value)) {
    err1.innerText = "Email is valid";
    em.style.border = "2px solid green";
    return true;
  } else {
    err1.innerText = "Email is invalid";
    em.style.border = "2px solid red";

    return false;
  }
}

function number() {
  let RegExp =
  /^(?:\d{10}|(?:\d{3}[-. ]\d{3}[-. ]\d{4}))$/;

  if (RegExp.test(no.value)) {
    err2.innerText = "Number is valid";
    no.style.border = "2px solid green";
    return true;
  } else {
    err2.innerText = "Number is invalid";
    no.style.border = "2px solid red";

    return false;
  }
}

function validatePassword() {
  const password = document.getElementById("password").value;
  const color = document.getElementById("password");
  const err3 = document.getElementById("err3");

 
  const strongRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/

  if (strongRegex.test(password)) {
    
    if (password.length > 8) {
      err3.innerText = " Strong password";
      err3.style.color = "green";
      color.style.border = "2px solid green";
    } else {
     
      err3.innerText = " Medium Password";
      err3.style.color = "orange";
      color.style.border = "2px solid orange";
    }
    return true;
  } else {
  
    err3.innerText = "Weak password";
    err3.style.color = "red";
    color.style.border = "2px solid red";
    return false;
  }
}

function isEqual(){
  const password = document.getElementById("password").value;
  const password1 = document.getElementById("password1").value;
  if(password !=password1){
    err4.innerText = "Password is not same";
    err4.style.color = "red";
    return false;
  }
  else{
    return true;
  }
}


function validateRegister() {
  const isPasswordValid = validatePassword();
  const isNumber = number();
  const isEmail = regExVal();
  const equal = isEqual();

  return isPasswordValid && isNumber && isEmail && equal;
}