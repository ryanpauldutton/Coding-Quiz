

console.log(quizQuestions[0]['question']);

let startButton = document.querySelector('#start');
let timerElement = document.querySelector('#time');
let startScreenEl = document.querySelector('#start-screen');
let questionsScreenEl = document.querySelector('#questions');
let choicesEl = document.querySelector('#choices')
let questionTitleEl = document.querySelector('#question-title')

// let questions1 = [big, small, medium, large];
// let questions2 = [big, small, medium, large];
// let questions3 = [big, small, medium, large];
// let questions4 = [big, small, medium, large];

let timer;
let timerCount;

function startGame() {
  timerCount = 50;
  // Prevents start button from being clicked when round is in progress
  startScreenEl.classList.add('hide')
  questionsScreenEl.classList.remove('hide')
  startTimer();

  questionTitleEl.textContent = quizQuestions[0]['question'];

  let quizCorrect = quizQuestions[0]['correctAnswerIndex'];
  console.log(quizCorrect)

  for (var x = 0; x < 4; x++) {
    var button = document.createElement('button');
    button.textContent = quizQuestions[0]['choices'][x];
    if (x === quizCorrect) {
      choicesEl.appendChild(button).classList.add('correct');
    }
    choicesEl.appendChild(button);

  };
  console.log(choicesEl)
  nextQuestion();

}

// function nextQuestion(){
//     console.log('Herro')
// }
// correctAnswer();

function nextQuestion() {
  var correct = choicesEl.querySelector('.correct');
  correct.addEventListener('click', questionGet());
}

function questionGet() {
  questionTitleEl.textContent = quizQuestions[1]['question'];

  for (var x = 0; x < 4; x++) {
    choicesEl.button[x].textContent = quizQuestions[1]['choices'][x];
    if (x === quizCorrect) {
      choicesEl.appendChild(button).classList.add('correct');
    }
    choicesEl.appendChild(button);

  };
  nextQuestion();
};
// function correctAnswer(){
//     // BUTTON CLICKED === CORRECT ANSWER INDEX
//     if(document.querySelector('.correct').clicked == true)
// {
//    alert("correct")}};

// }
//     nextQuestion();
//   }}



function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    //   if (timerCount >= 0) {
    //     // Tests if win condition is met
    //     if (isWin && timerCount > 0) {
    //       // Clears interval and stops timer
    //       clearInterval(timer);
    //       winGame();
    //     }
    //   }
    //   // Tests if time has run out
    //   if (timerCount === 0) {
    //     // Clears interval
    //     clearInterval(timer);
    //     loseGame();
    //   }
  }, 1000);
}


startButton.addEventListener("click", startGame);





// Button to CHANGE PAGE LOCATION

// <button id="myButton" class="float-left submit-button" >Home</button>

// <script type="text/javascript">
//     document.getElementById("myButton").onclick = function () {
//         location.href = "www.yoursite.com";
//     };
// </script>