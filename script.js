/* script.js
   Put this file in same folder and open index.html
*/

/* ========== Quiz Data (70 items) ========== */
const quizData = [
  // A. Basics (Q1-Q15)
  {q:'Q1. Which variable name is legal in JavaScript?', opts:['var _count;','var 99num;','var my-num;','var class;'], ans:0},
  {q:'Q2. What is the output of 5 + "5"?', opts:['10','"55"','Error','NaN'], ans:1},
  {q:'Q3. What will typeof NaN return?', opts:['"undefined"','"number"','"NaN"','"object"'], ans:1},
  {q:'Q4. Which operator has the highest precedence?', opts:['*','+','=','=='], ans:0},
  {q:'Q5. Fill in the blank: The operator used to check both value and type is ______.', opts:['==','===','!=','='], ans:1},
  {q:'Q6. True/False: if (0) will execute the block.', opts:['True','False'], ans:1},
  {q:'Q7. What is the output of: if ("0") { console.log("Yes"); } else { console.log("No"); }', opts:['Yes','No','Error','Undefined'], ans:0},
  {q:'Q8. Which loop guarantees at least one execution?', opts:['for','while','do…while','foreach'], ans:2},
  {q:'Q9. How many times will this loop run? for (let i = 0; i < 5; i++) { }', opts:['4','5','6','Infinite'], ans:1},
  {q:'Q10. Fill in the blank: To stop a loop immediately we use the ______ statement.', opts:['stop','return','break','continue'], ans:2},
  {q:'Q11. True/False: continue statement ends the loop completely.', opts:['True','False'], ans:1},
  {q:'Q12. What is the output of true && false || true?', opts:['true','false','null','undefined'], ans:0},
  {q:'Q13. Which operator in JS returns true only if both sides are true?', opts:['||','&&','??','=='], ans:1},
  {q:'Q14. What will Boolean("") return?', opts:['true','false','null','0'], ans:1},
  {q:'Q15. Fill in the blank: A loop inside another loop is called a ______ loop.', opts:['recursive','nested','infinite','block'], ans:1},

  // B. Arrays & Strings (Q16-Q25)
  {q:'Q16. Which method adds an element to the end of an array?', opts:['push()','pop()','shift()','slice()'], ans:0},
  {q:'Q17. What is the output of ["a","b"].length?', opts:['1','2','3','undefined'], ans:1},
  {q:'Q18. True/False: slice() changes the original array.', opts:['True','False'], ans:1},
  {q:'Q19. Which method removes the first element of an array?', opts:['shift()','unshift()','pop()','push()'], ans:0},
  {q:'Q20. Fill in the blank: To join two strings, we use the ______ method.', opts:['merge()','concat()','add()','join()'], ans:1},
  {q:'Q21. Which function converts string "123" into a number?', opts:['parseInt("123")','Number("123")','Both A and B','String("123")'], ans:2},
  {q:'Q22. What is the output of "Hello".charAt(1)?', opts:['H','e','l','o'], ans:1},
  {q:'Q23. Fill in the blank: To replace text inside a string we use ______ method.', opts:['replace()','substitute()','change()','splice()'], ans:0},
  {q:'Q24. True/False: Strings in JavaScript are mutable.', opts:['True','False'], ans:1},
  {q:'Q25. What is the output of "abc".toUpperCase()? ', opts:['abc','Abc','ABC','error'], ans:2},

  // C. Functions & Scope (Q26-Q35)
  {q:'Q26. Which keyword defines a function?', opts:['func','function','method','def'], ans:1},
  {q:'Q27. Fill in the blank: A function defined inside another is called a ______ function.', opts:['private','local','nested','block'], ans:2},
  {q:'Q28. True/False: Variables declared inside a function are global.', opts:['True','False'], ans:1},
  {q:'Q29. What will this code log? function test(a=5) { console.log(a); } test();', opts:['undefined','0','5','error'], ans:2},
  {q:'Q30. Which statement returns a value from a function?', opts:['break','return','exit','stop'], ans:1},
  {q:'Q31. True/False: JavaScript allows multiple return values.', opts:['True','False'], ans:1},
  {q:'Q32. What is the result? let x = 10; function foo() { let x = 20; return x; } console.log(foo());', opts:['10','20','undefined','error'], ans:1},
  {q:'Q33. Fill in the blank: If a variable is declared outside all functions, it is a ______ variable.', opts:['local','global','constant','block'], ans:1},
  {q:'Q34. What happens if a function is called before it is declared (using function declaration)?', opts:['Error','Works (hoisting)','Undefined','NaN'], ans:1},
  {q:'Q35. Which function converts decimal 4.9 to 5?', opts:['Math.floor(4.9)','Math.round(4.9)','Math.ceil(4.9)','Both B and C'], ans:2},

  // D. Events & Date/Time (Q36-Q50)
  {q:'Q36. Which event is triggered when a button is clicked?', opts:['onmouse','onclick','onhover','onchange'], ans:1},
  {q:'Q37. True/False: onmouseover fires when the mouse pointer enters an element.', opts:['True','False'], ans:0},
  {q:'Q38. Fill in the blank: To read a value from an input field, we use document.getElementById("id").______.', opts:['innerHTML','value','text','get'], ans:1},
  {q:'Q39. Which method sets text of a paragraph?', opts:['innerHTML','value','text()','write()'], ans:0},
  {q:'Q40. What will new Date().getFullYear() return?', opts:['Current year','Month','Day','Time'], ans:0},
  {q:'Q41. True/False: Months in JavaScript’s Date object start from 1.', opts:['True','False'], ans:1},
  {q:'Q42. Fill in the blank: setFullYear(2025) will change the ______ of the date object.', opts:['day','month','year','hour'], ans:2},
  {q:'Q43. What is the output of new Date("2025-09-07").getMonth()? ', opts:['8','9','7','0'], ans:0},
  {q:'Q44. Which event is triggered when text in a field is changed and focus leaves?', opts:['oninput','onchange','onblur','onclick'], ans:1},
  {q:'Q45. Fill in the blank: To run a function after a delay we use ______.', opts:['wait()','setTimeout()','delay()','setInterval()'], ans:1},
  {q:'Q46. True/False: setInterval runs the code once after the delay.', opts:['True','False'], ans:1},
  {q:'Q47. Which event fires when a form is submitted?', opts:['onsubmit','onchange','onclick','onload'], ans:0},
  {q:'Q48. Which statement is correct for stopping event bubbling?', opts:['event.stop()','event.stopPropagation()','stopEvent()','preventBubble()'], ans:1},
  {q:'Q49. Which property gives the current day of the week (0–6)?', opts:['getDay()','getDate()','getFullYear()','getWeek()'], ans:0},
  {q:'Q50. Fill in the blank: new Date().toLocaleTimeString() returns the ______.', opts:['full date','only time','timestamp','timezone'], ans:1},

  // E. DOM (Q51-Q70)
  {q:'Q51. Fill in the blank: To get element by id we use ______.', opts:['document.getId()','document.getElementById()','document.querySelectorAll()','document.innerHTML()'], ans:1},
  {q:'Q52. Which method selects all <p> tags?', opts:['document.getElementsByTagName("p")','document.getTag("p")','document.query("p")','document.select("p")'], ans:0},
  {q:'Q53. True/False: getElementsByTagName returns a live HTMLCollection.', opts:['True','False'], ans:0},
  {q:'Q54. Which property is used to change CSS of an element?', opts:['style','css','changeStyle','setCSS'], ans:0},
  {q:'Q55. What will document.querySelector("#demo") select?', opts:['All elements with id demo','First element with id demo','Elements with class demo','Error'], ans:1},
  {q:'Q56. Fill in the blank: To get the parent node of an element, we use ______.', opts:['parent()','parentNode','getParent()','ancestor()'], ans:1},
  {q:'Q57. Which method creates a new element?', opts:['createNode()','createElement()','newElement()','addElement()'], ans:1},
  {q:'Q58. True/False: appendChild() can only add text, not elements.', opts:['True','False'], ans:1},
  {q:'Q59. Which property gives all children of an element?', opts:['childNodes','children','getChilds','Both A and B'], ans:3},
  {q:'Q60. What will document.getElementById("x").innerText = "Hi"; do?', opts:['Add attribute','Change text','Change style','Delete element'], ans:1},
  {q:'Q61. Fill in the blank: To remove a child element we use ______.', opts:['deleteChild()','removeChild()','destroy()','removeNode()'], ans:1},
  {q:'Q62. Which DOM method replaces one child with another?', opts:['replaceChild()','changeChild()','swapChild()','newChild()'], ans:0},
  {q:'Q63. True/False: innerHTML can insert HTML tags inside an element.', opts:['True','False'], ans:0},
  {q:'Q64. Which method finds the first matching element?', opts:['querySelector()','querySelectorAll()','getElementsByClassName()','getElement()'], ans:0},
  {q:'Q65. Fill in the blank: classList.add("newClass") ______.', opts:['changes style','adds a class','deletes a class','replaces innerHTML'], ans:1},
  {q:'Q66. Which is faster: getElementById or querySelector (for id)?', opts:['querySelector','getElementById','both same','none'], ans:1},
  {q:'Q67. What does element.remove() do?', opts:['Removes the element itself','Removes children','Removes parent','Error'], ans:0},
  {q:'Q68. True/False: DOM treats everything in an HTML page as a node.', opts:['True','False'], ans:0},
  {q:'Q69. Which property can be used to access the first child element?', opts:['firstChild','firstElementChild','childFirst','firstNode'], ans:1},
  {q:'Q70. Fill in the blank: The root node of any HTML document is ______.', opts:['head','body','document','window'], ans:2}
];

/* ========== Build UI ========== */
const questionsContainer = document.getElementById('questionsContainer');
const miniNav = document.getElementById('miniNav');
const answeredCountEl = document.getElementById('answeredCount');
const sideAnswered = document.getElementById('sideAnswered');
const resultPanel = document.getElementById('resultPanel');

function makeQuestionBlock(item, idx){
  const qWrap = document.createElement('div');
  qWrap.className = 'q';
  qWrap.id = 'qBlock' + idx;

  const title = document.createElement('strong');
  title.textContent = item.q;
  qWrap.appendChild(title);

  const optsDiv = document.createElement('div');
  optsDiv.className = 'options';

  item.opts.forEach((optText,optIdx) => {
    const label = document.createElement('label');
    label.className = 'opt';
    label.setAttribute('data-q', idx);
    label.setAttribute('data-opt', optIdx);

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'q' + idx;
    input.value = optIdx;
    input.id = `q${idx}o${optIdx}`;

    const span = document.createElement('span');
    span.innerHTML = optText;

    label.appendChild(input);
    label.appendChild(span);
    optsDiv.appendChild(label);

    // ensure touch selects radio
    label.addEventListener('click', () => {
      input.checked = true;
      updateCounts();
      label.classList.add('active');
      setTimeout(()=> label.classList.remove('active'), 160);
    });
  });

  qWrap.appendChild(optsDiv);
  return qWrap;
}

function buildQuestions(){
  const sections = [
    {title:'A. Basics (1-15)', from:1, to:15},
    {title:'B. Arrays & Strings (16-25)', from:16, to:25},
    {title:'C. Functions & Scope (26-35)', from:26, to:35},
    {title:'D. Events & Date/Time (36-50)', from:36, to:50},
    {title:'E. DOM (51-70)', from:51, to:70}
  ];

  sections.forEach(sec => {
    const secTitle = document.createElement('div');
    secTitle.className = 'section-title';
    secTitle.innerHTML = `<span class="sec-pill">${sec.title.split(' ')[0]}</span> <div style="font-weight:700">${sec.title}</div>`;
    questionsContainer.appendChild(secTitle);

    for(let i = sec.from; i <= sec.to; i++){
      const block = makeQuestionBlock(quizData[i-1], i);
      questionsContainer.appendChild(block);

      // mini nav button
      const navBtn = document.createElement('button');
      navBtn.textContent = i;
      navBtn.title = `Go to Q${i}`;
      navBtn.addEventListener('click', ()=> {
        document.getElementById('qBlock' + i).scrollIntoView({behavior:'smooth', block:'center'});
      });
      miniNav.appendChild(navBtn);
    }
  });
}
buildQuestions();

/* ========== Interactions ========== */
function updateCounts(){
  let answered = 0;
  for(let i=1;i<=quizData.length;i++){
    const radios = document.getElementsByName('q'+i);
    if(Array.from(radios).some(r=>r.checked)) answered++;
  }
  answeredCountEl.textContent = answered;
  sideAnswered.textContent = answered;
}
document.addEventListener('change', updateCounts);
updateCounts();

/* Submit logic */
document.getElementById('submitBtn').addEventListener('click', function(){
  const total = quizData.length;
  let score = 0;

  // remove previous highlights
  document.querySelectorAll('.opt').forEach(el=> el.classList.remove('correct','wrong'));

  for(let i=1;i<=total;i++){
    const radios = Array.from(document.getElementsByName('q'+i));
    const selected = radios.find(r=>r.checked);
    const correctIndex = quizData[i-1].ans;

    // highlight correct option
    radios.forEach(r => {
      const label = r.closest('label');
      if(!label) return;
      const optIdx = Number(r.value);
      if(optIdx === correctIndex){
        label.classList.add('correct');
      }
    });

    if(selected){
      if(Number(selected.value) === correctIndex){
        score++;
      } else {
        const chosenLabel = selected.closest('label');
        if(chosenLabel) chosenLabel.classList.add('wrong');
      }
    }
  }

  const pct = Math.round((score/total)*100);
  resultPanel.className = 'result-box show ' + (pct >= 50 ? 'result-good' : 'result-bad');
  resultPanel.innerHTML = `<strong>Score: ${score} / ${total}</strong> — ${pct}%<br><small class="muted">Green = correct • Red = your wrong choices</small>`;
  resultPanel.scrollIntoView({behavior:'smooth', block:'center'});
});

/* Reset */
document.getElementById('clearBtn').addEventListener('click', function(){
  if(!confirm('Reset all answers?')) return;
  for(let i=1;i<=quizData.length;i++){
    const radios = document.getElementsByName('q'+i);
    radios.forEach(r => r.checked = false);
  }
  document.querySelectorAll('.opt').forEach(el=> el.classList.remove('correct','wrong'));
  updateCounts();
  resultPanel.className = 'result-box';
  resultPanel.innerHTML = '';
  window.scrollTo({top:0,behavior:'smooth'});
});

/* Export results (CSV) */
document.getElementById('exportBtn').addEventListener('click', () => {
  let rows = [['Question','Your Answer','Correct Answer','Result']];
  for(let i=1;i<=quizData.length;i++){
    const radios = Array.from(document.getElementsByName('q'+i));
    const selected = radios.find(r=>r.checked);
    const your = selected ? quizData[i-1].opts[Number(selected.value)] : '';
    const correct = quizData[i-1].opts[quizData[i-1].ans];
    const result = your === correct ? 'Correct' : 'Wrong';
    rows.push([`Q${i}`, your, correct, result]);
  }
  const csv = rows.map(r=> r.map(c => `"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], {type:'text/csv'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'js_quiz_results.csv';
  a.click();
  URL.revokeObjectURL(url);
});

/* Timer feature (60 minutes default) */
let timerInterval = null;
document.getElementById('startTimerBtn').addEventListener('click', () => {
  if(timerInterval){
    clearInterval(timerInterval);
    timerInterval = null;
    document.getElementById('startTimerBtn').textContent = 'Start 60m Timer';
    document.getElementById('timer').textContent = '—';
    return;
  }
  let seconds = 60 * 60; // 60 minutes
  document.getElementById('startTimerBtn').textContent = 'Stop Timer';
  timerInterval = setInterval(() => {
    seconds--;
    const m = String(Math.floor(seconds/60)).padStart(2,'0');
    const s = String(seconds%60).padStart(2,'0');
    document.getElementById('timer').textContent = `${m}:${s}`;
    if(seconds <= 0){
      clearInterval(timerInterval);
      timerInterval = null;
      document.getElementById('startTimerBtn').textContent = 'Start 60m Timer';
      alert('Time is up! Submitting answers automatically.');
      document.getElementById('submitBtn').click();
    }
  }, 1000);
});

/* load year in footer */
document.getElementById('year').textContent = new Date().getFullYear();
