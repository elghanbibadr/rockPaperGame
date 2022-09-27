let choicesArray=Array.from(document.querySelectorAll(".step")),choices=document.querySelectorAll(".step"),container=document.querySelector(".steps-container"),counterNumber=document.querySelector(".counter__number"),resultTitle=document.querySelector(".result__title"),resultBox=document.querySelector(".result-box"),score=document.querySelector(".header__score-number"),playAgain=document.querySelector(".btn__playAgain");function hideAllChoices(){return choices.forEach((e=>{updateClass(e,!0,"hidden"),updateClass(e,!0,"hidePseudo")}))}function updateClass(e,t,s){return t?e.classList.add(`${s}`):e.classList.remove(`${s}`)}function decreaseCount(){counterNumber.textContent>0&&counterNumber.textContent--}function randomIntFromInterval(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function pickRandomeChoice(){updateClass(counterNumber.parentElement,!0,"hidden");let e=randomIntFromInterval(0,choices.length-1);updateClass(choices[e],!1,"hidden")}function selectWinner(e){updateClass(resultBox,!1,"hidden");let t=choicesArray.filter((t=>t!==e))[randomIntFromInterval(0,1)];updateClass(counterNumber.parentElement,!0,"hidden"),updateClass(t,!1,"hidden"),checkClassContaining(e,"steps__paper")&&checkClassContaining(t,"steps__rock")&&(desplayResult("win"),updateScore("win")),checkClassContaining(e,"steps__paper")&&checkClassContaining(t,"steps__scissors")&&(desplayResult("lost"),updateScore("lost")),checkClassContaining(e,"steps__rock")&&checkClassContaining(t,"steps__paper")&&(desplayResult("lost"),updateScore("lost")),checkClassContaining(e,"steps__rock")&&checkClassContaining(t,"steps__scissors")&&(desplayResult("win"),updateScore("win")),checkClassContaining(e,"steps__scissors")&&checkClassContaining(t,"steps__rock")&&(desplayResult("lost"),updateScore("lost")),checkClassContaining(e,"steps__scissors")&&checkClassContaining(t,"steps__paper")&&(desplayResult("win"),updateScore("win"))}function checkClassContaining(e,t){return e.classList.contains(`${t}`)}function desplayResult(e){return resultTitle.querySelector("strong").textContent=` ${e}`}function updateScore(e){return"lost"===e?score.textContent--:score.textContent++}function restartGame(){return window.location.reload()}choices.forEach((e=>e.addEventListener("click",(t=>{hideAllChoices(),updateClass(e,!1,"hidden"),updateClass(container,!0,"flexCenter"),updateClass(counterNumber.parentElement,!1,"hidden"),setInterval(decreaseCount,1e3),setTimeout((()=>{selectWinner(t.target)}),4e3)})))),playAgain.addEventListener("click",restartGame);
//# sourceMappingURL=index.e48dabff.js.map
