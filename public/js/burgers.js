$(function(){
    $('.eat-burger-btn').on('click', function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var burgerId = $(this).data("id");

        var burgerUpdate = {
            id: burgerId,
            devoured: 1
        };
        // $.ajax("/api/burgers/" + burgerId, {
        $.ajax("/burgers", {
            type: "PUT",
            data: burgerUpdate
        }).then(
            function(){
                console.log("Burger Eaten!")
                location.reload();
                //location.assign("/");
            }
        )
    }) // end eat-a-burger

    $('.make-burger-btn').on('click', function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var burgerId = $(this).data("id");

        var burgerUpdate = {
            id: burgerId,
            devoured: 0
        };
        // $.ajax("/api/burgers/" + burgerId, {
        $.ajax("/burgers", {
            type: "PUT",
            data: burgerUpdate
        }).then(
            function(){
                console.log("Burger Eaten!")
                location.reload();
                //location.assign("/");
            }
        )
    }) // end eat-a-burger


    //Create-da-burder
    $(".burger-create-btn").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#burger-text").val().trim(),
          devoured: 0
        };
    
        // Send the POST request.
        $.ajax("/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("Created new burger!");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });


})//end main function