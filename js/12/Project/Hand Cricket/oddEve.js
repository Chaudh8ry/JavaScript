let score = 0;

function oddEven(userMove){
    let computerMove = computerRandomMove();

    if(userMove === computerMove){
      displayResult(score);
      score = 0;
    }else{
      score += userMove;
      console.log(score);
      renderScore(score);
    }
}

//To Display Current Score
function renderScore(score){
  let html = `<p>Current Score: ${score}</p>`;

  document.querySelector('.display-score').innerHTML = html;
}

//To Display Final Score After Getting Out
function displayResult(score){
  let resultHTML = `
  <p>
  !!!!----OUT----!!!!
  Final Score: ${score}
  </p>
  `;
  document.querySelector('.final-result').innerHTML = resultHTML;
}

//Autoplay for Computer Batting
let isAutoPlaying = false;
let intervalID;
function autoPlay(){
  if(!isAutoPlaying){
    intervalID = setInterval(function(){
      const autoPlayerMove = computerRandomMove();
      oddEven(autoPlayerMove);
    },1000);
    isAutoPlaying = true;
  }
}

//For Picking Computer Move
function computerRandomMove(){
  let randomMove = Math.random();
  let computerChoose=0;
  if(randomMove < 1/6){
    computerChoose = 1;
  }else if(randomMove > 1/6 && randomMove < 2/6){
    computerChoose = 2;
  }else if(randomMove > 2/6 && randomMove < 3/6){
    computerChoose = 3;
  }else if(randomMove > 3/6 && randomMove < 4/6){
    computerChoose = 4;
  }else if(randomMove > 4/6 && randomMove < 5/6){
    computerChoose = 5;
  }else if(randomMove > 5/6 && randomMove < 6/6){
    computerChoose = 6;
  }

  return computerChoose;
}