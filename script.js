var startScreen = document.querySelector('.startscreencontainer');
var highscore = document.querySelector('.highscore');
var timer = document.querySelector('.timer');
var answerbtn = document.querySelector("answer-questions");
var startbtn = document.querySelector(".start");


var timerInterval;
var time = 0;
var timeCap = 45;
var myQuestion = 0;
// hide display from the start screen

document.getElementById("question-container").style.display = "none";

// var timer = localStorage.getItem("timer");
// timer.textContext = timer;



// class - .
// id #

startbtn.addEventListener ("click", begin) 
function begin () {
    // set timer
}



var myQuestions = [
    {
      question: "Finish the senctence: Kim, there's people that are _____.",
      answer: "Dying",
      answerList: ["Eating", "Sleeping", "Crying","Dying"],
      correctAnswer: 3
      },

    {
      question: "Whose Instagram handle is: &commat;letthelordbewithyou?",
      answer: "Scott Disick" ,
      answerList: [ "Kourtney Kardashian", "Kylie Jenner", "Scott Disick", "Sofia Richie."],
      correctAnswer: 2
     
      },
    {
      question: "What's Kylie Jenners daughters name? ",
      answer: "Stormi",
      answerList: ["Reign", "Chicago", "Dream", "Stormi"],
      correctAnswer: 3
      },
    {
        question: "Who said this iconic line?: You&apos;re doing amazing sweetie.",
        answer: "Kim",
        answerList: ["Kourtney", "Kim", "Kris", "Kylie"],
        correctAnswer: 2
      },
      {
        question: "Finish that line:, Kim, would you stop taking pictures of yourself. Your sister's going to ____?",
        answers: "Jail",
        answerList: ["Jail", "School", "The Mall", "Paris"], 
        correctAnswer: 0 
      }
    
  ];

 