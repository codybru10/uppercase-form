$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var wordInput = $("input#word").val().toUpperCase();

    $(".word").text(wordInput);

    $("#story").show();

    event.preventDefault();
  });
});
