// Here we use 'Default Operator || ' 2nd condition is default condition it will run if score becomes 'NULL' due to the Reset button
let score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  loss: 0,
  tie: 0
};

gameScore(); 


//AutoPlay Function
let isAutoPlaying = false; // It tracks whether the autoplay feature is currently running.
let intervalID; // ID of the timer 'setInterval()' is stored here

function autoPlay(){
  // Starting the autoplay: When you call the autoPlay() function, it checks the 'isAutoPlaying' variable. If 'isAutoPlaying' is 'false' (meaning autoplay is off), the function sets up an interval to run the game every second and changes 'isAutoPlaying' to true. This means autoplay is now on and it will keep running the game at the specified interval.
  if(!isAutoPlaying){
    intervalID = setInterval(function(){
      const autoPlayerMove = pickComputerMove();
      playGame(autoPlayerMove);
    },1000);
    isAutoPlaying = true; // indicates that autoplay is now running.
  }
  else{
     //Stopping the autoplay: If you call the autoPlay() function again while isAutoPlaying is true, it will go to the else block, which clears the interval (stopping the repeated game execution) and sets isAutoPlaying back to false. This means autoplay is now off and it will stop running the game.
    clearInterval(intervalID); // The clearInterval function is like hitting the stop button on a timer. When you call setInterval, it starts a timer that runs a function at regular intervals. Each timer gets a unique ID. By passing this ID to clearInterval, you stop that timer and prevent the function from running repeatedly.
    isAutoPlaying = false; //After stopping the interval, it sets isAutoPlaying to false, indicating that autoplay has been stopped.
  }
}

//All Magic Happens here
function playGame(userMove){

  // saves computer move
  let computersChoice = pickComputerMove();
  
  let result = '';

    if(userMove === 'rock'){
      if(computersChoice === userMove){
        result = 'Tie';
      } else if(computersChoice === 'paper'){
        result = 'You Loose';
      } else if(computersChoice === 'scissors'){
        result = 'You Won';
      }
    }

    else if(userMove === 'paper'){
      if(computersChoice === userMove){
        result = 'Tie';
      } else if(computersChoice === 'scissors'){
        result = 'You Loose';
      } else if(computersChoice === 'rock'){
        result = 'You Won';
      }
    }

    else if(userMove === 'scissors'){
      if(computersChoice === userMove){
        result = 'Tie';
      } else if(computersChoice === 'rock'){
        result = 'You Loose';
      } else if(computersChoice === 'paper'){
        result = 'You Won';
      }
    }

    // Updating the Score based on the Result
    if(result === 'Tie'){
      score.tie += 1;
    }else if(result === 'You Won'){
      score.win += 1;
    }else if(result === 'You Loose'){
      score.loss += 1;
    }
   
    // Saving the score in Local Storage & using JSON stringify bcz. local storage only take 'String' input 
    localStorage.setItem('score', JSON.stringify(score));
    
    gameScore();

    document.querySelector('.js-result').innerText = result;

    document.querySelector('.js-moves').innerHTML =
    `You
    <img src="./${userMove}-emoji.png" class="move-icon">
    <img src="./${computersChoice}-emoji.png" class="move-icon">
    Computer`;

}

  // Function for Computer Move
  function pickComputerMove(){
    let randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber < 1/3){
      computerMove = 'rock';
    } else if(randomNumber >= 1/3 && randomNumber < 2/3){
      computerMove = 'paper';
    } else if(randomNumber >= 2/3 && randomNumber <= 1){
      computerMove = 'scissors';
    }
    return computerMove;
  }

 //Function for showing score on webpage
 function gameScore(){
      document.querySelector('.js-score')
        .innerHTML = `Win: ${score.win}, Loss: ${score.loss}, Tie: ${score.tie}`;
  }