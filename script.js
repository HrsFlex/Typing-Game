const typingText = document.querySelector('.typing-text p');
const input = document.querySelector('.wrapper .input-field');
const time = document.querySelector('.time span b');
const mistakes = document.querySelector('.mistakes span');
const wpm = document.querySelector('.wap span');
const cpm = document.querySelector('.cpm span');
const btn = document.querySelector('button');

//set values
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;

function loadParagraph(){
    const paragraph = ["Use a low flow shower head, aerators, or a cistern that measures how much water is flushed"];
    
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
    const char = typingText.querySelector('span');
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
}

function reset(){
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    time.innerText = timeLeft;
    input.value='';
    charIndex = 0;
    mistake=0;
    isTyping=false;
    wpm.innerText=0;
    cpm.innerText=0;
    mistakes.innerText=0;
}

input.addEventListener("input", initTyping);
btn.addEventListener("click", reset);
loadParagraph();