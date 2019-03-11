// questions in a object of arrays
var questions = [
  {
    question: "The last time the Cubs won the World Series was in 1908?",
    answer: ["True", "False"],
    correct: "False"
  },
  {
    question: "The original name of the ball park was Weeghman Park?",
    answer: ["True", "False"],
    correct: "True"
  },
  {
    question:
      "The first night game for the Chicago cubs was on August 8, 1988?",
    answer: ["True", "False"],
    correct: "True"
  },
  {
    question: "Does the 'W' on the flag mean WILD?",
    answer: ["True", "False"],
    correct: "False"
  },
  {
    question: "The largest crowd the Cubs had at the ballpark was 51,556?",
    answer: ["True", "False"],
    correct: "True"
  }
];

//Begin trivia game and hide the welcome screen to show the trivia questions
$(document).ready(function() {
  $("#begin").on("click", function() {
    $(this).hide(".jumbotron");
    gameInformation.beginGame();
    console.log("hello");
  });
});
//Setting up the game with timer and display questions

var gameInformation = {
  right: 0,
  wrong: 0,
  unanswered: 0,
  timer: 60,
  //function to start timer and end timer if the user clicks done button or if time runs out
  startTimer: function() {
    gameInformation.timer--;
    $("#time").text(gameInformation.timer);
    if (gameInformation.timer <= 0) {
      gameInformation.finalScore();
    }
    $("#finish").on("click", function() {
      gameInformation.finalScore();
    });
  },
  //function to begin the game and show the questions and question choice
  beginGame: function() {
    timer = setInterval(gameInformation.startTimer, 1000);
    $("#special").prepend("<p>Time Remaining: <div id='time'>60</div></p>");
    // $("#begin").remove();
    for (var i = 0; i < questions.length; i++) {
      // console.log(questions[i]);

      $("#special").append("<h3>" + questions[i].question + "</h3>");

      for (var j = 0; j < questions[i].answer.length; j++) {
        // console.log(questions[i].answer);
        // console.log(questions[i].answer[j]);
        //radio input was put in by using examples found on Stackflow, using the examples from BootStrap, and trying different thing by going testing it out.
        $("#special").append(
          '<div class="form-check"><input class="form-check-input" type="radio" name="exampleRadios' +
            i +
            '" id="exampleRadios1' +
            i +
            '"<label class="form-check-label"  id="exampleRadios1' +
            i +
            'label">' +
            questions[i].answer[j] +
            "</label></div>"
        );
      }
    }
    //a end game button was created to show the user results
    $("#special").append("<br>");
    var endGame =
      "<button class='btn btn-primary' id='finish' type='submit'>END BALL GAME</button>";
    $("#special").append(endGame);
  },
  //Here is a function to show final score of user. However I tried to get the results but it is not working. I need more help on this portion
  finalScore: function() {
    var answerCorrect;
    var userInput;

    for (var i = 0; i < questions[i].correct.length; i++) {
      answerCorrect = questions[i].correct;
      // console.log(answer);
      userInput = $("input[id=exampleRadios1" + i + "]:checked");
      console.log("input", userInput);
      if (userInput == answerCorrect) {
        gameInformation.right++;
      } else if (userInput === "") {
        gameInformation.unanswered++;
      } else if (userInput !== answerCorrect) {
        {
          gameInformation.wrong++;
        }
      }
    }
    clearInterval(timer);
    $("#special").html("Game Over!!");
    $("#special").append("<h3>Correct Answers:", gameInformation.right);
    $("#special").append("<h3>Incorrect Answers:", gameInformation.wrong);
    $("#special").append("<h3>Unanswered:", gameInformation.unanswered);
  }
};

//on click button to fire up the final score screen
$("#finish").on("click", function() {
  gameInformation.finalScore();
});
