/* global moment */

// When user clicks add-btn
$("#create-btn").on("click", function(event) {
    event.preventDefault();
  
    // Make a newChirp object
    var character = {
      name: $("#char-name").val().trim(),
      attack: $("#attack").val().trim(),
    //   hitpoints: req.body.hitpoints,
    //   strength: req.body.strength,
    //   character_img: req.body.character_img
    };
  
    console.log(character);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/characters", character)
      // On success, run the following code
      .then(function() {
  
        var row = $("<div>");
  
        row.append("<p>" + charecter.name + " chirped: </p>");
        row.append("<p>" + character.attack + "</p>");

        $("#chirp-area").prepend(row);
  
      });
  });
  