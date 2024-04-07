const score={
    wins : 0,
    losses : 0,
    ties :0
};

updateScoreElement();

function playGame(playerMove){
    const computerMove=pickcomputerMove();
    let result='';
    if(playerMove==='rock'){
        if(computerMove==='rock'){
            result='Tie';
        }
        else if(computerMove==='paper'){
            result='You Lose';
        }
        else{
            result='You Win';
        }
    }
    else if(playerMove==='paper'){
        if(computerMove==='rock'){
            result='You Win';
        }
        else if(computerMove==='paper'){
            result='Tie';
        }
        else{
            result='You Lose';
        }
    }
    else if(playerMove==='scissors'){
        if(computerMove==='rock'){
            result='You Lose';
        }
        else if(computerMove==='paper'){
            result='You Win';
        }
        else{
            result='Tie';
        }
    }

    if(result==='You Win'){
        score.wins+=1;
    }
    else if(result==='You Lose'){
        score.losses+=1;
    }
    else if(result==='Tie'){
        score.ties+=1;
    }

    document.querySelector('.js-result').innerHTML=result;

    document.querySelector('.js-moves').innerHTML=`You : ${getIcon(playerMove)}  Computer : ${getIcon(computerMove)}`;


    updateScoreElement();
}
function pickcomputerMove(){
    const randomNum=Math.random();              
    if(randomNum>=0 && randomNum<1/3){
        return 'rock';
    }
    else if(randomNum>=1/3 && randomNum<2/ 3){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}
function updateScoreElement(){
    document.querySelector('.js-score').innerHTML=`Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`;
}
function scoreReset(){
    document.querySelector('.js-result').innerHTML='';
    document.querySelector('.js-moves').innerHTML='';
}
function getIcon(move){
    if(move==='rock'){
        return '&#9994;' ;
    }
    else if(move==='paper'){
        return '&#128400;';
    }
    else{
        return '&#9996;';
    }
}