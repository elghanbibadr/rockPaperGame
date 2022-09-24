let choicesArray=Array.from(document.querySelectorAll('.step'));
let choices=document.querySelectorAll('.step');
let container=document.querySelector('.steps-container');
let counterNumber=document.querySelector('.counter__number')

choices.forEach(choice=>choice.addEventListener('click',(e)=>{
    hideAllChoices();
    updateClass(choice,false,'hidden');
    updateClass(container,true,'flexCenter');
    updateClass(counterNumber.parentElement,false,'hidden');
    // decreasing the count number
    setInterval(decreaseCount,1000)
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