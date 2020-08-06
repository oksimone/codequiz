// var startScreen = document.querySelector('.startscreencontainer');
var highScore = document.querySelector('.highscore');
var timerEl = document.querySelector('.timer');
var answerbtn = document.querySelector("#answer-questions");
var startbtn = document.querySelector("#start");
var questionContain = document.querySelector('.question-container')
var startScreen = document.querySelector(".startscreen");
var currentIndex = 0


var timerInterval;
var time = 0;
var timeCap = 45;
var myQuestionsArrofObj = 0;
// hide display from the start screen



var myQuestionsArrofObj = [
    {
        question: "Finish the senctence: Kim, there's people that are _____.",
        answer: "Dying",
        answerList: ["Eating", "Sleeping", "Crying", "Dying"],
        
    },

    {
        question: "Whose Instagram handle is: &commat;letthelordbewithyou?",
        answer: "Scott Disick",
        answerList: ["Kourtney Kardashian", "Kylie Jenner", "Scott Disick", "Sofia Richie."],
        

    },
    {
        question: "What's Kylie Jenners daughters name? ",
        answer: "Stormi",
        answerList: ["Reign", "Chicago", "Dream", "Stormi"],
       
    },
    {
        question: "Who said this iconic line?: You&apos;re doing amazing sweetie.",
        answer: "Kim",
        answerList: ["Kourtney", "Kim", "Kris", "Kylie"],
        
    },
    {
        question: "Finish that line:, Kim, would you stop taking pictures of yourself. Your sister's going to ____?",
        answers: "Jail",
        answerList: ["Jail", "School", "The Mall", "Paris"],
        
    }

];

startbtn.addEventListener("click", begin)


function begin() {
    if (event.target.matches("button")) {
        startScreen.setAttribute("style", "display: none !important");
        questionContain.setAttribute("style", "display: block !important");


        var secondsLeft = 45
        var timeInterval = setInterval(function () {

            timerEl.textContent = "Time: " + secondsLeft;
            secondsLeft--;
            
            if (secondsLeft === 0) {
                timerEl.textContent = "Time: 0";
                clearInterval(timerInterval);
            }

        }, 1000);

        var currentQuestion = myQuestionsArrofObj[currentIndex]
        var questionTitle = document.querySelector("#question");
        questionTitle.textContent = currentQuestion.question;
        for (var i =0; i < currentQuestion.answerList.length; i++){
            var answers = document.createElement("button");
            answers.setAttribute('value', currentQuestion.answerList[i])
            var answerbtn = document.querySelector("#answer-buttons");
            answers.textContent = currentQuestion.answerList[i];
            answerbtn.appendChild(answers);
            answers.onclick = answerClick;
        }

    }
}
   function answerClick(){

   }
begin();

