let choicesArray=Array.from(document.querySelectorAll('.step'));
let choices=document.querySelectorAll('.step');
let container=document.querySelector('.steps-container');
let counterNumber=document.querySelector('.counter__number')
let resultTitle=document.querySelector('.result__title');
let resultBox=document.querySelector('.result-box')
let score=document.querySelector('.header__score-number');
let playAgain=document.querySelector('.btn__playAgain');


choices.forEach(choice=>choice.addEventListener('click',(e)=>{
    hideAllChoices();
    updateClass(choice,false,'hidden');
    updateClass(container,true,'flexCenter');
    updateClass(counterNumber.parentElement,false,'hidden');
    setInterval(decreaseCount,1000);
  setTimeout(()=>{
    selectWinner(e.target)
  },4000)
}))

playAgain.addEventListener('click',restartGame);


function hideAllChoices(){
    return  choices.forEach(element=>{
      updateClass(element,true,'hidden');
      updateClass(element,true,'hidePseudo');
    });
}
  
  
function updateClass(element,isAdd,className){
   return isAdd ? element.classList.add(`${className}`):element.classList.remove(`${className}`)
}

function decreaseCount(){
  if (counterNumber.textContent>0) counterNumber.textContent--;
}

function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

 function pickRandomeChoice(){
 updateClass(counterNumber.parentElement,true,'hidden');
  let randomNumber=randomIntFromInterval(0,choices.length-1);
  updateClass( choices[randomNumber],false,'hidden')  ;

 }

 function selectWinner(selectedChoice){
// remove the hidden  class from the result box
  updateClass(resultBox,false,'hidden');

 let unselectedChoices=choicesArray.filter(choice=>choice!==selectedChoice)
let randomChoice=unselectedChoices[randomIntFromInterval(0,1)];
updateClass(counterNumber.parentElement,true,'hidden');
updateClass(randomChoice,false,'hidden');
// //   checkin winner according to the random choices
if (checkClassContaining(selectedChoice,'steps__paper') && checkClassContaining(randomChoice,'steps__rock')){
        desplayResult('win');
       updateScore('win');
}

if (checkClassContaining(selectedChoice,'steps__paper') && checkClassContaining(randomChoice,'steps__scissors')){
       desplayResult('lost');
       updateScore('lost');
}

 if ( checkClassContaining(selectedChoice,'steps__rock') && checkClassContaining(randomChoice,'steps__paper')){
       desplayResult('lost');
       updateScore('lost');
}

 if (checkClassContaining(selectedChoice,'steps__rock') && checkClassContaining(randomChoice,'steps__scissors')){
        desplayResult('win') ;
        updateScore('win');
}


 if(checkClassContaining(selectedChoice,'steps__scissors') && checkClassContaining(randomChoice,'steps__rock')){
        desplayResult('lost') 
        updateScore('lost');
}


if(checkClassContaining(selectedChoice,'steps__scissors')  && checkClassContaining(randomChoice,'steps__paper')){
        desplayResult('win') ;
        updateScore('win');
}

}

 function checkClassContaining(element,className){
  return element.classList.contains(`${className}`)
 }



 function desplayResult(result){
      return resultTitle.querySelector('strong').textContent=` ${result}`;
 }

 function updateScore(value){
   return  value ==="lost" ? score.textContent-- :score.textContent++;
 }



 function restartGame(){
 return window.location.reload();
 }








