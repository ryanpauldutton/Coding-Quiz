

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

    // var choiceOne = document.createElement("button");
    // choicesEl.append(choiceOne);
    // choiceOne.textContent = quizQuestions[0]['choices'][0];

    // var choiceTwo = document.createElement("button");

    // choicesEl.append(choiceTwo);
    // choiceTwo.textContent = quizQuestions[0]['choices'][1];

    // var choiceThree = document.createElement("button");

    // choicesEl.append(choiceThree);
    // choiceThree.textContent = quizQuestions[0]['choices'][2];

    // var choiceFour = document.createElement("button");

    
    //   choicesEl.append(choiceFour);
    //   choiceFour.textContent = quizQuestions[0]['choices'][3];

      for(var x = 0; x < 4; x++){
        var button = document.createElement('button');
        button.textContent = quizQuestions[0]['choices'][x];
        choicesEl.appendChild(button);
      }

    // var addButton1 = document.createElement("button");
    // choicesEl.append(addButton1);
    // addButton1.textContent = quizQuestions[0]['choices'][0];



  }

  function startTimer() {
    // Sets timer
    timer = setInterval(function() {
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