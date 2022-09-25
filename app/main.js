let choicesArray=Array.from(document.querySelectorAll('.step'));
let choices=document.querySelectorAll('.step');
let container=document.querySelector('.steps-container');
let counterNumber=document.querySelector('.counter__number')

choices.forEach(choice=>choice.addEventListener('click',(e)=>{
    hideAllChoices();
    updateClass(choice,false,'hidden');
    updateClass(container,true,'flexCenter');
    updateClass(counterNumber.parentElement,false,'hidden');
    setInterval(decreaseCount,1000);
    setTimeout(pickRandomeChoice,3000);
  setTimeout(()=>{
    selectWinner(e.target)
  },4000)

}))

function hideAllChoices(){
    return  choicesArray.forEach(element=>updateClass(element,true,'hidden'));
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
  let filteredChoices=choicesArray.filter(choice=>!choice.classList.contains('hidden'));
  
let randomChoice=filteredChoices.pop();
 if (checkClassContaining(selectedChoice,'steps__paper') && checkClassContaining(randomChoice,'steps__rock')){
         console.log('you win')
 }
 if (checkClassContaining(selectedChoice,'steps__paper') && checkClassContaining(randomChoice,'steps__scissors')){
         console.log('you lost')
 }
 if ( checkClassContaining(selectedChoice,'steps__rock') && checkClassContaining(randomChoice,'steps__paper')){
         console.log('you lost')
 }
 if (checkClassContaining(selectedChoice,'steps__rock') && checkClassContaining(randomChoice,'steps__scissors'))
         console.log('you win')
 
 if (checkClassContaining(selectedChoice,'steps__scissors') && checkClassContaining(randomChoice,'steps__rock'))
         console.log('you lost')
 
 if (checkClassContaining(selectedChoice,'steps__scissors')  && checkClassContaining(randomChoice,'steps__paper'))
         console.log('you  win')
  
}

 function checkClassContaining(element,className){
  return element.classList.contains(`${className}`)
 }


