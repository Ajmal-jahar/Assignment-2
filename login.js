var em = document.getElementById("em");
var err1 = document.getElementById("err1");


function regExVal() {
  let RegExp =
    /^([a-zA-z0-9.-]+)@([a-zA-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  if (RegExp.test(em.value)) {
    err1.innerText = "email is valid";
    em.style.border = "2px solid green";
    return true;
  } else {
    err1.innerText = "email is invalid";
    em.style.border = "2px solid red";

    return false;
  }
}
