const options = document.querySelectorAll('.options');
const computerImage = document.getElementById('computer-image');
const computerResponse = document.getElementById('computer-response');
const userImage = document.getElementById('user-image')
const userResponse = document.getElementById('user-response');
const result = document.querySelector('.result');
const computerScore = document.getElementById('computer-score');
const userScore = document.getElementById('user-score');
const reset = document.getElementById('reset');
var CScore = 0;
var UScore = 0;
let selection;

function computerResult() {
    selection = Math.floor(Math.random() * (options.length));
    computerImage.src = options[selection].src;
    const computerParentClass = computerImage.parentElement;
    computerParentClass.style.display = 'flex';
    computerResponse.innerText = options[selection].alt;
}

options.forEach(option=>{
    option.onclick = ()=>{
        userResponse.innerText = option.alt;
        const parentClass = userImage.parentElement;
        parentClass.style.display = 'flex';
        userImage.src = option.src;
        computerResult();
        resultCheck();
    }
})

function updateScore(){
    computerScore.innerText = CScore;
    userScore.innerText = UScore;
}


function resultCheck() {
    const computerResponseText = computerResponse.innerText;
    const userResponseText = userResponse.innerText;
    if(computerResponseText == userResponseText){
        result.innerText = "Draw";
        // CScore++;
        // UScore++;
    }
    else if(computerResponseText=="Stone"&&userResponseText=="Paper"){
        result.innerText = "You Won";
        UScore++;
    }
    else if(computerResponseText=="Paper"&&userResponseText=="Stone"){
        result.innerText = "Computer Wins"; 
        CScore++;
    }
    else if(computerResponseText=="Stone"&&userResponseText=="Scissors"){
        result.innerText = "Computer Wins"; 
        CScore++;
    }
    else if(computerResponseText=="Scissors"&&userResponseText=="Stone"){
        result.innerText = "You Won";
        UScore++;
    }
    else if(computerResponseText=="Paper"&&userResponseText=="Scissors"){
        result.innerText = "You Won";
        UScore++;
    }
    else if(computerResponseText=="Scissors"&&userResponseText=="Paper"){
        result.innerText = "Computer Wins"; 
        CScore++;
    }
    updateScore();
}

reset.onclick = ()=>{
    CScore = 0;
    UScore = 0;
    updateScore();
    document.querySelector('.computer').style.display = 'none';
    document.querySelector('.user').style.display = 'none';
    result.innerText = "Select your choice";
}