$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var verbPresentInput = $("input#verbPresent").val();
    var person1Input = $("input#person1").val();
    var nounInput= $("input#noun").val();
    var verbPastInput = $("input#verbPast").val();
    var person2Input = $("input#person2").val();
    var verbPresentTwoInput = $("input#verbPresentTwo").val();
    var animalInput = $("input#animal").val();

    $(".name").text(nameInput);
    $(".verbPresent").text(verbPresentInput);
    $(".person1").text(person1Input);
    $(".noun").text(nounInput);
    $(".verbPast").text(verbPastInput);
    $(".person2").text(person2Input);
    $(".verbPresentTwo").text(verbPresentTwoInput);
    $(".animal").text(animalInput);

    $("#story").show();

    event.preventDefault();
  });
});
