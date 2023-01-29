let startButton = document.querySelector('#start');
let timerElement = document.querySelector('#time');
let startScreenEl = document.querySelector('#start-screen');
let questionsScreenEl = document.querySelector('#questions');


let timer;
let timerCount;

function startGame() {
    timerCount = 10;
    // Prevents start button from being clicked when round is in progress
    startScreenEl.classList.add('hide')
    questionsScreenEl.classList.remove('hide')
    startTimer();

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