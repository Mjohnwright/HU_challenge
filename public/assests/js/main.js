const textForm = document.querySelector("form");
// console.log(textForm);

// Email form submit
const x = document.getElementById("submit")
x.addEventListener("click", start);


function start() {
  const emailInput = document.getElementById("text-input").value
  console.log('email output = ', emailInput);
  isEmail(emailInput);
  

}

// Validates email on front end
function isEmail(email) {
  if( /(.+)@(.+){2,}\.(.+){2,}/.test(email) ) {
    return
  } else {
    alert("Not valid email");
  }
}




