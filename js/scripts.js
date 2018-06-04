const MAX_WORD_LENGTH = 3;

function createGibberish(input) {
  var words = input.split(" ");
  var newWords = words.map(function(word) {
    if (word.length >= MAX_WORD_LENGTH) return word;
  });
  var newSentence = newWords.reverse().join(" ");
  $("#output").text(newSentence);
}

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();

    var input = $("#sentence").val();
    createGibberish(input);
  });
});
