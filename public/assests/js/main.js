$(document).ready(function () {
  var $newItemInput = $("input.new-item");
  $(document).on("submit", "#email", start);


  function start() {
    console.log("clicked");
   
    var emailInput = $newItemInput.val();
    console.log('email output = ', emailInput);
    
   isEmail(emailInput);
    addEmailToDatabase(emailInput);

  }

  // Validates email on front end
  function isEmail(email) {
    if (/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
      return
    } else {
      alert("Not valid email");
    }
  }

  // This function inserts a new email into our database
  function addEmailToDatabase(emailAdd) {   

    var emailAdd = {
      text: $newItemInput.val().trim(),
      complete: false
    };
    $.ajax({
      method: "POST",
      url:"/api/email",
      data: emailAdd
    })
    // $.post("/api/email", emailAdd, function (result) {
    //   alert(result);

    // });
  }

});


