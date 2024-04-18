const typingText = document.querySelector('.typing-text p');
const input = document.querySelector('.wrapper .input-field');
const time = document.querySelector('.time span b');
const mistakes = document.querySelector('.mistake span');
const wpm = document.querySelector('.wap span');
const cpm = document.querySelector('.cpm span');
const btn = document.querySelector('button');

//set values
let timer;
let maxTime = 30;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;

function loadParagraph(){
    const paragraph = ["Hey everyone, its me typing test. I am here to help you to improve your typing speed. Just start typing and see the magic. Good Luck!The quick brown fox jumps over the lazy dog","Its HRS and I am here to help you to improve your typing speed. Just start typing and see the magic. Good Luck!The quick brown fox jumps over the lazy dog","chess is a two-player strategy board game played on a checkered board with 64 squares arranged in an 8×8 grid. The game is played by millions of people worldwide. ","This is made by HRS and I am here to help you to improve your typing speed. Just start typing and see the magic. Good Luck!", "You can follow me on linkedin as Harsh Kumar and on github as HrsFlex.","Web development is a skill that is in high demand. It is a skill that is used in many industries, including marketing, design, and software development. If you are interested in learning web development, there are many resources available to help you get started."];
    
    
    const randomIndex = Math.floor(Math.random() * paragraph.length);
    typingText.innerHTML='';
    for(const char of paragraph[randomIndex]){
        console.log(char);
        typingText.innerHTML+= `<span>${char}</span>` ;

    }
    typingText.querySelectorAll('span')[0].classList.add('active');
    document.addEventListener('keydown',()=>{input.focus()});
    
}

//Handle user input

function initTyping(){
    const char = typingText.querySelectorAll('span');
    const typedChar= input.value.charAt(charIndex);
    if(charIndex < char.length && timeLeft >0){

        if(!isTyping){
            timer = setInterval(initTime,1000);
            isTyping = true;
        }

        if(char[charIndex].innerText === typedChar){
            char[charIndex].classList.add('correct');
        }else{
            mistake ++;
        char[charIndex].classList.add('incorrect');
        }
    charIndex++;
    char[charIndex].classList.add('active');
    mistakes.innerText = mistake;
    cpm.innerText = charIndex-mistake;
    }else{
        clearInterval(timer);
        input.value='';
    }
}

function initTime(){
    if(timeLeft > 0){
        timeLeft--;
        time.innerText = timeLeft;
        let wpmVal = Math.round(((charIndex - mistake)/5 )/(maxTime - timeLeft)*60);
        wpm.innerText = wpmVal;
    }
    else{
        clearInterval(timer);
    }

    const char = typingText.querySelectorAll('span');
    const typedChar = input.value.charAt(charIndex);

    if (charIndex < char.length && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTime, 1000);
            isTyping = true;
        }

        if (char[charIndex].innerText === typedChar) {
            char[charIndex].classList.add('correct');
            char[charIndex].classList.remove('incorrect');
        } else {
            mistake++;
            char[charIndex].classList.add('incorrect');
            char[charIndex].classList.remove('correct');
        }

        charIndex++;
        char[charIndex].classList.add('active');
        mistakes.innerText = mistake;
        cpm.innerText = charIndex - mistake;
    } else {
        clearInterval(timer);
        input.value = '';
    }
}

function reset(){
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    time.innerText = timeLeft;
    input.value='';
    charIndex = 0;
    mistake=0;
    isTyping= false;
    wpm.innerText=0;
    cpm.innerText=0;
    mistakes.innerText=0;
}

input.addEventListener("input", initTyping);
btn.addEventListener("click", reset);
loadParagraph();