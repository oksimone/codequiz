// var startScreen = document.querySelector('.startscreencontainer');
var highScore = document.querySelector('.highscore');
var timerEl = document.querySelector('.timer');
var answerbtn = document.querySelector("#answer-questions");
var startbtn = document.querySelector("#start");
var questionContain = document.querySelector('.question-container')
var startScreen = document.querySelector(".startscreen");
var currentIndex = 0

var timeInterval
var secondsLeft = 45
var timerInterval;
var time = 0;
var timeCap = 45;
var myQuestionsArrofObj = 0;
// hide display from the start screen



var myQuestionsArrofObj = [
    {
        question: "Finish the sentence: Kim, there's people that are _____.",
        answer: "Dying",
        answerList: ["Eating", "Sleeping", "Crying", "Dying"],

    },

    {
        question: "Whose Instagram handle is: @letthelordbewithyou?",
        answer: "Scott Disick",
        answerList: ["Kourtney Kardashian", "Kylie Jenner", "Scott Disick", "Sofia Richie."],


    },
    {
        question: "What's Kylie Jenners daughters name? ",
        answer: "Stormi",
        answerList: ["Reign", "Chicago", "Dream", "Stormi"],

    },
    {
        question: "Who said this iconic line?: You're doing amazing sweetie.",
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

function startTime() {

    timeInterval = setInterval(function () {

        timerEl.textContent = "Time: " + secondsLeft;
        secondsLeft--;

        if (secondsLeft <= 0) {
            timerEl.textContent = "Time: 0";
            secondsLeft = 0
            clearInterval(timeInterval);
            console.log('end game')
        }

    }, 1000);
}
function writeQuestion() {
    
    var currentQuestion = myQuestionsArrofObj[currentIndex]
    var questionTitle = document.querySelector("#question");
    questionTitle.textContent = currentQuestion.question;
    var answerbtn = document.querySelector("#answer-buttons");
    answerbtn.innerHTML =""
    for (var i = 0; i < currentQuestion.answerList.length; i++) {
        var answers = document.createElement("button");
        answers.setAttribute('value', currentQuestion.answerList[i])
        answers.textContent = currentQuestion.answerList[i];
        answerbtn.appendChild(answers);
        answers.onclick = answerClick;

    }
}
function begin() {

    startScreen.setAttribute("style", "display: none !important");
    questionContain.setAttribute("style", "display: block !important");
    startTime()
    writeQuestion()



}

function answerClick() {
    console.log(this.value)
    //    if function saying if the answer is incorrect
    if (this.value !== myQuestionsArrofObj[currentIndex].answer) {
        secondsLeft = secondsLeft - 15
        //time will be substracted
        //create another if statement, if time <= 0. Then take you to the submit page
        //display "incorrect"
    }


    currentIndex++;

    if(currentIndex === myQuestionsArrofObj.length){
        console.log('end game')
    }else{

        writeQuestion()
    }
}

// if ()
// myQuestionsArrofObj[currentIndex] = myQuestionsArrofObj.
//    } 
// //    take you to the submit page



