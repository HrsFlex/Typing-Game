const typingText = document.querySelector('.typing-text p');
const input = document.querySelector('.wrapper .input-field');
const time = document.querySelector('.time span b');
const mistakes = document.querySelector('.mistakes span');
const wpm = document.querySelector('.wap span');
const cpm = document.querySelector('.cpm span');
const btn = document.querySelector('button');

function loadParagraph(){
    const paragraph = [" lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum."];
    
    const randomIndex = Math.floor(Math.random() * paragraph.length);
    typingText.innerHtml='';
    for(const char of paragraph(randomIndex)){
        console.log(char);
        typingText.innerHtml+= `<span>
        ${char} </span>` ;

    }
    typingText.querySelectorAll('span')[0].classList.add('active');
}
loadParagraph();