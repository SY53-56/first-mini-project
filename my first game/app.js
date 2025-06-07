let scoreYou = 0;
let scoreComp = 0;
let maxScore = 10;

const choices = document.querySelectorAll('.choice')
const userScroe = document.querySelector('#scroe-you')
const compScroe = document.querySelector('#score-comp')
const msg = document.querySelector('#msg')
const drawGame = ()=>{
    console.log('game draw.')
    msg.innerText = 'game draw'
    msg.style.backgroundColor = 'black'
};
const mainWinner=()=>{
    if(scoreYou ==='user'){
    msg.innerText='You are the winner and you win $50!'
    msg.style.backgroundColor= 'gold'
    }else{
        msg.innerText= 'Computer wins! Better luck next time!'
        msg.style.backgroundColor='blue'
    }
    choices.forEach(choice => choice.removeEventListener('click', handleClick));
}
const showWinner = (userwin , userChoice, compUser)=>{
    if(userwin){
        scoreYou++;
        userScroe.innerText =scoreYou
        msg.innerText = `you win! ${userChoice} beats ${compUser}`
        msg.style.backgroundColor='green'
       
    }else{
        scoreComp++;
        compScroe.innerText= scoreComp
        msg.innerText=`you lose. ${userChoice} beats ${compUser}`
        msg.style.backgroundColor ='red'
    }
    if(scoreYou===maxScore){
        mainWinner('user')
}if(scoreComp===maxScore)
    mainWinner('computer')
}

const genCompChoice = ()=>{
    const option =['rock','paper','scissor'];
    const randomIdx = Math.floor(Math.random()*3);
    return option[randomIdx]
};
const playGames =(userChoice) =>{
    if(scoreYou>=maxScore  || scoreComp>=maxScore){
        return
    }
    console.log('user choice',userChoice)
    const compUser=genCompChoice();
    console.log ('comp user',compUser)
    if(userChoice===compUser){
     drawGame()
    }
    else{
        userwin = true;
        if(userChoice==='rock'){
            userwin= compUser === 'paper' ? false : true;
        }else if(userChoice === 'paper'){
            userwin=  compUser ==='scissor'? false : true;
        }else{
            userwin=compUser=== 'rock' ? false: true;
        }
        showWinner(userwin, userChoice,compUser)
    }
};
choices.forEach((choice) =>{
    console.log(choice)
    choice.addEventListener('click' , () =>{
        const userChoise = choice.getAttribute('id')
        playGames(userChoise)
    });
});
choices.forEach(choice => {
    choice.addEventListener('click', handleClick);
});