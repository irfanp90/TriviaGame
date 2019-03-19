// questions in a object of arrays
var questions = [
  {
    question: "The last time the Cubs won the World Series was in 1908?",
    answer: ["True", "False"],
    correctAns: "False"
  },
  {
    question: "The original name of the ball park was Weeghman Park?",
    answer: ["True", "False"],
    correctAns: "True"
  },
  {
    question:
      "The first night game for the Chicago cubs was on August 8, 1988?",
    answer: ["True", "False"],
    correctAns: "True"
  },
  {
    question: "Does the 'W' on the flag mean WILD?",
    answer: ["True", "False"],
    correctAns: "False"
  },
  {
    question: "The largest crowd the Cubs had at the ballpark was 51,556?",
    answer: ["True", "False"],
    correctAns: "True"
  }
];

//Begin trivia game and hide the welcome screen to show the trivia questions

$("#begin").on("click", function() {
  game.start();
});
$(document).on("click", "#end", function() {
  game.done();
});
var game = {
  correct: 0,
  incorrect: 0,
  counter: 30,
  countdown: function() {
    game.counter--;
    $("#counter").html(game.counter);
    if (game.counter === 0) {
      console.log("Game Over");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#board").prepend(
      "<h2 id='remaining'>Time Remaining: <span id='counter'>30</span> Seconds</h2>"
    );
    $("#begin").remove();
    for (var i = 0; i < questions.length; i++) {
      $("#board").append("<h1>" + questions[i].question + "</h1>");
      for (var j = 0; j < questions[i].answer.length; j++) {
        $("#board").append(
          "<input type='radio' name='question-" +
            i +
            "' value='" +
            questions[i].answer[j] +
            "'>" +
            questions[i].answer[j]
        );
      }
    }
    $("#board").append("<br><button id= end>GAME OVER</button>");
  },
  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAns) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAns) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAns) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAns) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAns) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
  result: function() {
    clearInterval(timer);
    $("#board h2").remove();
    $("#board").html("<h2>Its all over</h2>");
    $("#board").append("<h3>Correct Answers: " + this.correct + "</h3>");
    $("#board").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    $("#board").append(
      "<h3>Unanswered: " +
        (questions.length - (this.incorrect + this.correct)) +
        "</h3>"
    );
  }
};
