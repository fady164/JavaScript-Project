var namee = document.getElementById("fname");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var msg = document.getElementById("subject");
var errorMsg = document.getElementById("errorMsg");
var form = document.getElementById("form");
var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var emailmatch = email.value.match(regEx);
var msgs = [];

document.forms[0].addEventListener("submit", function (e) {
  var validName = false;
  var validEmail = false;
  var validPhone = false;
  msgs = [];

  if (namee.value !== "" && namee.value.length <= 10) {
    validName = true;
    console.log("valid name");
    errorMsg.style.display = "none";
  } else {
    console.log("not valid name");
    msgs.push("Please Enter Valid Name");
  }

  // if (email.value !== "" && email.value.length <= 10) {
  if (regEx.test(email.value)) {
    validEmail = true;
    console.log("valid email");
    errorMsg.style.display = "none";
  } else {
    console.log("not valid email");

    msgs.push("Please Enter Valid Email");
  }

  if (phone.value !== "" && phone.value.length == 11) {
    validPhone = true;
    console.log("valid phone");
    errorMsg.style.display = "none";
  } else {
    console.log("not valid phone");

    msgs.push("Please Enter Valid Phone");
  }

  if (validName === false || validEmail === false || validPhone === false) {
    e.preventDefault();
    console.log(msgs);
    console.log(msgs.length);
    if (msgs.length > 0) {
      errorMsg.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>  ${msgs[0]}`;
      errorMsg.style.display = "block";
      errorMsg.style.padding = "10px";
      msgs.shift();
    } else {
      console.log("none");
      errorMsg.style.display = "none";
    }
  }
});
