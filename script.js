$(document).ready(function() {

var magic8Ball = {};

magic8Ball.answer = ["yes", "no", "maybe", "keep dreaming", "100%", "maybe tomorrow", "don't get your hopes up", "in the near future"];

$("#answer").hide();
  $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

magic8Ball.askquestion = function(question){
$("#8ball").effect("shake");
$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
$("#answer").hide();
$("#answer").fadeIn(4000);
var random = Math.random();
var randomNumberArray = random * magic8Ball.answer.length;
var randomIndex = Math.floor(randomNumberArray);
var randomAnswer = magic8Ball.answer[randomIndex];
  
$("#answer").text(randomAnswer);

  console.log("Question: " + question + "   Answer: " + randomAnswer + ".");
};
  
var answerQ = function () {
setTimeout (
  function () {
  var question = prompt("ASK A YES/NO QUESTION");
  magic8Ball.askquestion(question);
  }, 500);
};
$("#questionButton").click(answerQ);

});