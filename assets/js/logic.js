

console.log(quizQuestions[0]['question']);

let startButton = document.querySelector('#start');
let timerElement = document.querySelector('#time');
let startScreenEl = document.querySelector('#start-screen');
let questionsScreenEl = document.querySelector('#questions');
let choicesEl = document.querySelector('#choices')
let questionTitleEl = document.querySelector('#question-title')
let endScreenEl = document.querySelector('#end-screen')


// let questions1 = [big, small, medium, large];
// let questions2 = [big, small, medium, large];
// let questions3 = [big, small, medium, large];
// let questions4 = [big, small, medium, large];

let timer;
let timerCount;
let shuffledQuestions, currentQuestionIndex ;
let answeredCorrect = 0
const NO_OF_HIGH_SCORES = 10;
const HIGH_SCORES = 'highScores';

startButton.addEventListener("click", startGame);

function startGame() {
  timerCount = 5;
  // Prevents start button from being clicked when round is in progress
  startScreenEl.classList.add('hide')
  
  currentQuestionIndex = 0;
  questionsScreenEl.classList.remove('hide')
  startTimer();

getQuestion();

  };
 

function getQuestion() {
  shuffledQuestions = quizQuestions.sort(() => Math.random() - .5)
  showQuestion(shuffledQuestions[currentQuestionIndex])

};

function showQuestion(quizQuestion) {

  questionTitleEl.textContent = quizQuestion.question;
  quizQuestion.choices.forEach(choice => {
    let button = document.createElement('button')
    button.textContent = choice.text
    button.classList.add('btn')
    if (choice.correct){
      button.dataset.correct = choice.correct
    }
    button.addEventListener('click', selectAnswer)
    choicesEl.appendChild(button)
  })

}

function newQuestions(){

}

function selectAnswer(e) {
  let selectedButton = e.target;
  let correct = selectedButton.dataset.correct;
  if (correct == 'true'){
    removeQuestion();
    choicesEl.classList.add('green')
    getQuestion(shuffledQuestions[currentQuestionIndex]);
    answeredCorrect ++
    if(answeredCorrect == 4){
      winGame();
    }
  } else {
    timerCount -= 2;
  }
}


function removeQuestion() {
  let element = document.getElementById("choices");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
}





function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
      // if (timerCount >= 0) {
        // Tests if win condition is met
      //   if (isWin && timerCount > 0) {
      //     // Clears interval and stops timer
      //     clearInterval(timer);
      //     winGame();
      //   }
      // }
      // Tests if time has run out
      if (timerCount <= 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
  }, 1000);
}


function winGame(){
let score = `${timerCount}`
  clearInterval(timer);
  let scoreEl = document.getElementById("final-score")
  scoreEl.innerHTML= score;
  localStorage.setItem('highscores', 'Tesla');
  var winnerText = document.createElement('h1')
  winnerText.textContent = 'YOU WIN!';
  endScreenEl.appendChild(winnerText)
  questionsScreenEl.classList.add('hide')
  endScreenEl.classList.remove('hide')
}

function loseGame() {
  var loserText = document.createElement('h1')
  loserText.textContent = 'YOU LOSE!';
  endScreenEl.appendChild(loserText)
  questionsScreenEl.classList.add('hide')
  endScreenEl.classList.remove('hide')
}

//HIGHSCORES
function checkHighScore(score) {
  const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
  const lowestScore = highScores[NO_OF_HIGH_SCORES - 1]?.score ?? 0;
  
  if (score > lowestScore) {
    saveHighScore(score, highScores); // TODO
    showHighScores(); // TODO
  }
}
// Button to CHANGE PAGE LOCATION

// <button id="myButton" class="float-left submit-button" >Home</button>

// <script type="text/javascript">
//     document.getElementById("myButton").onclick = function () {
//         location.href = "www.yoursite.com";
//     };
// </script>