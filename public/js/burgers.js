$(function() {
  //when the Eat-Da-Burger button is clicked, update the burgers devoured boolean so it appears in the Make-Da-Burger div
  // =============================================================
  $(".eat-burger-btn").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    //save the id of the burger selected to a variable
    var burgerId = $(this).data("id");
    //the new data with which to update the DB
    var burgerUpdate = {
      id: burgerId,
      devoured: 1
    };
    // send the PUT request with the update data
    $.ajax("/", {
      type: "PUT",
      data: burgerUpdate
    }).then(function() {
      console.log("Burger Eaten!");
      // Reload the page to get the updated list
      location.reload();
    });
  }); // end eat-a-burger event handler


  //when the Make-Da-Burger button is clicked, update the burgers devoured boolean so it appears in the Eat-Da-Burger div
  // =============================================================
  $(".make-burger-btn").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    //save the id of the burger selected to a variable
    var burgerId = $(this).data("id");
    //the new data with which to update the DB
    var burgerUpdate = {
      id: burgerId,
      devoured: 0
    };
    // send the PUT request with the update data
    $.ajax("/", {
      type: "PUT",
      data: burgerUpdate
    }).then(function() {
      console.log("Burger Made!");
      // Reload the page to get the updated list
      location.reload();
    });
  }); // end make-a-burger event handler

  //Create-da-burger event handler
  // =============================================================
  $(".burger-create-btn").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    // save the burger name entered in the form and default devoured value of 0 (uneaten) to an object
    var newBurger = {
      burger_name: $("#burger-text").val().trim(),
      devoured: 0
    };

    // Send the POST request with the new data
    $.ajax("/", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("Created new burger!");
      // Reload the page to get the updated list
      location.reload();
    });
  });
}); //end main function
