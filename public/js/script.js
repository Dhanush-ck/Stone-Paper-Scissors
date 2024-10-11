const options = document.querySelectorAll('.options');
const userImage = document.getElementById('user-image')
const  userResponse = document.getElementById('user-response');

options.forEach(option=>{
    option.onclick = ()=>{
        userResponse.innerText = option.alt;
        const parentClass = userImage.parentElement;
        parentClass.style.display = 'block';
        userImage.src = option.src;
    }
})
