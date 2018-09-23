$(document).ready(function () {
  var $newItemInput = $("input.new-item");
  // Event listener
  $(document).on("submit", "#email", start);

  // Function to start program
  function start() {
  console.log("clicked");
  
  // Grabs the DOM input value 
  var emailInput = $newItemInput.val();
  console.log('email output = ', emailInput);

  // Validation function launch
  isEmail(emailInput);

  // Add to database function launch
  addEmailToDatabase(emailInput);
  }


// FUNCTIONS **************************************************
  // Validates email on front end
  function isEmail(email) {
    if (/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
      return
    } else {
      alert("Not valid email");
    }
  }

  // Inserts a new email into our database
  function addEmailToDatabase(emailAdd) {   

    var emailAdd = {
      text: $newItemInput.val().trim(),
      complete: false
    };
  
    $.ajax({
      method: "POST",
      url:"/email",
      data: emailAdd
    })
    $.post("/api/email", emailAdd, function (result) {
      alert(result);

    });
  }

});


