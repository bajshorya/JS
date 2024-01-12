let Score=JSON.parse(localStorage.getItem('Score')) || {
    Wins:0,
    Losses:0,
    Ties:0
    };
    updateScoreElement();
// if(!Score){
//     Score={ 
//         Wins:0,
//         Losses:0,
//         Ties:0
//     };
// }
let isAutoPlaying=false;
let intervalID;

// const autoplay = () =>{

// }
function autoplay(){
    if(!isAutoPlaying){
        intervalID=setInterval(()=>{
        const playerMove=pickComputerMove();
        playGame(playerMove);
        },1000);
        isAutoPlaying=true;
    }else{
        clearInterval(intervalID);
        isAutoPlaying=false;
    }
    
}

document.querySelector('.js-rock-button').addEventListener('click',()=>{
    playGame('rock')
});
document.querySelector('.js-paper-button').addEventListener('click',()=>{
    playGame('paper')
});
document.querySelector('.js-scissors-button').addEventListener('click',()=>{
    playGame('scissors')
});

// Add event listener for Reset Score button

document.querySelector('.js-reset-score-button').addEventListener('click', () => {
    Score.Wins = 0;
    Score.Losses = 0;
    Score.Ties = 0;
    localStorage.removeItem('Score');
    updateScoreElement();
});


// Add event listener for Auto Play button
document.querySelector('.js-auto-play-button').addEventListener('click', autoplay);

function playGame(playerMove){
const computerMove=pickComputerMove();
    let result='';
    if (playerMove==='scissors'){
        if(computerMove==='rock'){
            result='You Lose';
        }else if(computerMove==='paper'){
            result='You Win';
        }else if(computerMove==='scissors'){
            result='Tie';
        }
    }else if (playerMove==='rock'){
        if(computerMove==='rock'){
            result='Tie';
        }else if(computerMove==='paper'){
            result='You Lose';
        }else if(computerMove==='scissors'){
            result='You Win';
        }
    }else if (playerMove==='paper'){
        if(computerMove==='rock'){
            result='You Win';
        }else if(computerMove==='paper'){
            result='Tie';
        }else if(computerMove==='scissors'){
            result='You Lose';
        }
    }
    if(result==='You Win'){
        Score.Wins++;
    }else if(result==='You Lose'){
        Score.Losses++;
    }else if(result==='Tie'){
        Score.Ties++;
    }
    localStorage.setItem('Score',JSON.stringify(Score));

    updateScoreElement();
    
    document.querySelector('.js-result').innerHTML=result;

        document.querySelector('.js-moves').innerHTML=` You <img src="images/${playerMove}-emoji.png"
        class="move-icon" >
        <img src="images/${computerMove}-emoji.png"
        class="move-icon" >
        Computer`;

    }
function updateScoreElement(){
    document.querySelector('.js-score').innerHTML= `Wins:${Score.Wins},Losses:${Score.Losses},Ties:${Score.Ties}`; 
}   
let computerMove='';

function pickComputerMove(){
const randomNumber=Math.random();
if(randomNumber>=0 && randomNumber<1/3){
    computerMove='rock';
}else if(randomNumber>=1/3 && randomNumber<=2/3){
    computerMove='paper';
}else if(randomNumber>=2/3 && randomNumber<1){
    computerMove='scissors';
}
return computerMove;
}