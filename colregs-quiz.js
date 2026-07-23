const questions=window.quizQuestions||[];
const host=document.getElementById("quiz-questions");
function renderQuiz(){
  host.innerHTML=questions.map((x,i)=>`<fieldset class="quiz-card"><legend><span>${i+1}</span>${x.q}</legend>${x.o.map((v,j)=>`<label><input type="radio" name="q${i}" value="${j}"> <span>${v}</span></label>`).join("")}<div class="answer-review" id="review-${i}" hidden></div></fieldset>`).join("");
  document.getElementById("quiz-progress").textContent=`${questions.length} questions`;
  document.getElementById("quiz-result").hidden=true;
}
document.getElementById("quiz-form").addEventListener("submit",e=>{
  e.preventDefault();let score=0,answered=0;
  questions.forEach((x,i)=>{
    const selected=document.querySelector(`input[name="q${i}"]:checked`);
    const box=document.getElementById(`review-${i}`);
    if(selected){answered++;if(Number(selected.value)===x.a)score++;}
    const correct=selected&&Number(selected.value)===x.a;
    box.hidden=false;box.className="answer-review "+(correct?"correct":"incorrect");
    box.innerHTML=`<strong>${correct?"Correct":"Review"} — ${x.r}</strong><p>${x.e}</p><p>Best answer: ${x.o[x.a]}</p>`;
  });
  const result=document.getElementById("quiz-result");result.hidden=false;
  result.innerHTML=`<p class="eyebrow">Your result</p><h2>${score} / ${questions.length}</h2><p>You answered ${answered} questions. Review each explanation, then verify weak areas in the current official text.</p>`;
  result.scrollIntoView({behavior:"smooth",block:"center"});
  if(typeof gtag==="function")gtag("event","quiz_complete",{quiz_name:document.title,score:score,total_questions:questions.length});
});
document.getElementById("reset-quiz").addEventListener("click",()=>{document.getElementById("quiz-form").reset();renderQuiz();window.scrollTo({top:0,behavior:"smooth"});});
renderQuiz();

