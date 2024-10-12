const options = document.querySelectorAll('.options');
const computerImage = document.getElementById('computer-image');
const computerResponse = document.getElementById('computer-response');
const userImage = document.getElementById('user-image')
const userResponse = document.getElementById('user-response');
const result = document.querySelector('.result');
let selection;

function computerResult() {
    selection = Math.floor(Math.random() * (options.length));
    computerImage.src = options[selection].src;
    const computerParentClass = computerImage.parentElement;
    computerParentClass.style.display = 'block';
    computerResponse.innerText = options[selection].alt;
}

options.forEach(option=>{
    option.onclick = ()=>{
        userResponse.innerText = option.alt;
        const parentClass = userImage.parentElement;
        parentClass.style.display = 'block';
        userImage.src = option.src;
        computerResult();
        resultCheck();
    }
})


function resultCheck() {
    const computerResponseText = computerResponse.innerText;
    const userResponseText = userResponse.innerText;
    if(computerResponseText == userResponseText){
        result.innerText = "Draw";
    }
    else if(computerResponseText=="Stone"&&userResponseText=="Paper"){
        result.innerText = "You Won";
    }
    else if(computerResponseText=="Paper"&&userResponseText=="Stone"){
        result.innerText = "Computer Wins"; 
    }
}