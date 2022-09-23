let choices=document.querySelectorAll('.step');



choices.forEach(choice=>choice.addEventListener('click',(e)=>console.log(e.target.classList.contains('steps__paper'))));

