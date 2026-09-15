const DATA={
 alphabet:{
  name:"Alphabet",
  icon:"🔤",
  items:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(x=>({
   label:x,
   speak:x,
   image:`images/alphabet/${x.toLowerCase()}.png`
  }))
 },

 numbers:{
  name:"Numbers",
  icon:"🔢",
  items:Array.from({length:101},(_,i)=>({
   label:String(i),
   speak:numberWord(i),
   hi:numberHindi(i),
   image:`images/numbers/${i}.png`
  }))
 },

 animals:{
  name:"Animals",
  icon:"🐾",
  items:[
   ["Lion","शेर"],["Tiger","बाघ"],["Elephant","हाथी"],
   ["Giraffe","जिराफ़"],["Zebra","ज़ेब्रा"],["Monkey","बंदर"],
   ["Dog","कुत्ता"],["Cat","बिल्ली"],["Cow","गाय"],
   ["Horse","घोड़ा"],["Goat","बकरी"],["Sheep","भेड़"],
   ["Rabbit","खरगोश"],["Deer","हिरण"],["Bear","भालू"],
   ["Fox","लोमड़ी"],["Wolf","भेड़िया"],["Camel","ऊंट"],
   ["Rhinoceros","गैंडा"],["Hippopotamus","दरियाई घोड़ा"],
   ["Crocodile","मगरमच्छ"],["Panda","पांडा"],["Kangaroo","कंगारू"],
   ["Monkey","बंदर"]
  ].map(([label,hi])=>({
   label,
   hi,
   speak:label,
   image:`images/animals/${slug(label)}.jpg`
  }))
 },

 birds:{
  name:"Birds",
  icon:"🐦",
  items:[
   ["Peacock","मोर"],["Parrot","तोता"],["Sparrow","गौरैया"],
   ["Crow","कौआ"],["Pigeon","कबूतर"],["Eagle","गरुड़"],
   ["Owl","उल्लू"],["Swan","हंस"],["Duck","बत्तख"],
   ["Hen","मुर्गी"],["Rooster","मुर्गा"],["Kingfisher","रामचिरैया"],
   ["Woodpecker","कठफोड़वा"],["Cuckoo","कोयल"],["Flamingo","राजहंस"],
   ["Partridge","तीतर"],["Myna","मैना"],["Heron","बगुला"],
   ["Vulture","गिद्ध"],["Crane","सारस"],["Bulbul","बुलबुल"],
   ["Koel","कोयल"]
  ].map(([label,hi])=>({
   label,
   hi,
   speak:label,
   image:`images/birds/${slug(label)}.jpg`
  }))
 },

 fruits:{
  name:"Fruits",
  icon:"🍎",
  items:[
   ["Apple","सेब"],["Banana","केला"],["Mango","आम"],
   ["Orange","संतरा"],["Grapes","अंगूर"],["Pomegranate","अनार"],
   ["Guava","अमरूद"],["Papaya","पपीता"],["Watermelon","तरबूज"],
   ["Muskmelon","खरबूजा"],["Pineapple","अनानास"],["Coconut","नारियल"],
   ["Papaya","पपीता"],["Litchi","लीची"],["Jackfruit","कटहल"],
   ["Custard Apple","सीताफल"],["Pear","नाशपाती"],
   ["Strawberry","स्ट्रॉबेरी"],["Lemon","नींबू"],["Kiwi","कीवी"],
   ["Peach","आड़ू"],["Plum","आलूबुखारा"],["Chikoo","चीकू"]
  ].map(([label,hi])=>({
   label,
   hi,
   speak:label,
   image:`images/fruits/${slug(label)}.jpg`
  }))
 },

 vegetables:{
  name:"Vegetables",
  icon:"🥕",
  items:[
   ["Potato","आलू"],["Tomato","टमाटर"],["Onion","प्याज़"],
   ["Carrot","गाजर"],["Cabbage","पत्तागोभी"],["Cauliflower","फूलगोभी"],
   ["Spinach","पालक"],["Brinjal","बैंगन"],["Okra","भिंडी"],
   ["Peas","मटर"],["Pumpkin","कद्दू"],["Bottle Gourd","लौकी"],
   ["Bitter Gourd","करेला"],["Cucumber","खीरा"],
   ["Capsicum","शिमला मिर्च"],["Radish","मूली"],["Beetroot","चुकंदर"],
   ["Corn","मक्का"],["Garlic","लहसुन"],["Ginger","अदरक"],
   ["Green Beans","हरी फली"],["Drumstick","सहजन"]
  ].map(([label,hi])=>({
   label,
   hi,
   speak:label,
   image:`images/vegetables/${slug(label)}.jpg`
  }))
 },

 colors:{
  name:"Colors",
  icon:"🎨",
  items:[
   ["Red","लाल"],["Blue","नीला"],["Green","हरा"],
   ["Yellow","पीला"],["Orange","नारंगी"],["Purple","बैंगनी"],
   ["Pink","गुलाबी"],["Brown","भूरा"],["Black","काला"],
   ["White","सफेद"],["Grey","स्लेटी"],["Gold","सुनहरा"],
   ["Silver","चांदी"]
  ].map(([label,hi])=>({
   label,
   hi,
   speak:label,
   image:`images/colors/${slug(label)}.jpg`
  }))
 },

 shapes:{
  name:"Shapes",
  icon:"🔷",
  items:[
   ["Circle","वृत्त"],["Square","वर्ग"],["Triangle","त्रिभुज"],
   ["Rectangle","आयत"],["Oval","अंडाकार"],["Star","तारा"],
   ["Heart","दिल"],["Diamond","हीरा"],["Pentagon","पंचभुज"],
   ["Hexagon","षट्भुज"]
  ].map(([label,hi])=>({
   label,
   hi,
   speak:label,
   image:`images/shapes/${slug(label)}.jpg`
  }))
 },

 countries:{
  name:"Countries",
  icon:"🌍",
  items:[
   ["India","भारत"],["United States","अमेरिका"],
   ["United Kingdom","यूनाइटेड किंगडम"],["Japan","जापान"],
   ["France","फ्रांस"],["Germany","जर्मनी"],["Brazil","ब्राज़ील"],
   ["China","चीन"],["Australia","ऑस्ट्रेलिया"],["Canada","कनाडा"],
   ["Italy","इटली"],["Spain","स्पेन"],["Russia","रूस"],
   ["South Africa","दक्षिण अफ्रीका"],["UAE","संयुक्त अरब अमीरात"],
   ["Nepal","नेपाल"],["Bhutan","भूटान"],["Bangladesh","बांग्लादेश"],
   ["Sri Lanka","श्रीलंका"],["Singapore","सिंगापुर"],
   ["Thailand","थाईलैंड"],["Malaysia","मलेशिया"],
   ["Indonesia","इंडोनेशिया"],["South Korea","दक्षिण कोरिया"]
  ].map(([label,hi])=>({
   label,
   hi,
   speak:label,
   image:`images/countries/${slug(label)}.jpg`
  }))
 },

 india:{
  name:"India",
  icon:"🇮🇳",
  items:[
   ["India Gate","इंडिया गेट"],
   ["Taj Mahal","ताज महल"],
   ["Red Fort","लाल किला"],
   ["Gateway of India","गेटवे ऑफ इंडिया"],
   ["Lotus Temple","लोटस टेंपल"],
   ["Qutub Minar","कुतुब मीनार"],
   ["Charminar","चारमीनार"],
   ["Hawa Mahal","हवा महल"],
   ["India Flag","भारत का झंडा"],
   ["Indian Elephant","भारतीय हाथी"]
  ].map(([label,hi])=>({
   label,
   hi,
   speak:label,
   image:`images/india/${slug(label)}.jpg`
  }))
 },

 personalities:{
  name:"Famous Indians",
  icon:"⭐",
  items:[
   ["A.P.J. Abdul Kalam","ए. पी. जे. अब्दुल कलाम"],
   ["Mahatma Gandhi","महात्मा गांधी"],
   ["Bhagat Singh","भगत सिंह"],
   ["Subhas Chandra Bose","सुभाष चंद्र बोस"],
   ["Rani Lakshmibai","रानी लक्ष्मीबाई"],
   ["Sardar Vallabhbhai Patel","सरदार वल्लभभाई पटेल"],
   ["C.V. Raman","सी. वी. रमन"],
   ["Rabindranath Tagore","रवींद्रनाथ टैगोर"],
   ["Kalpana Chawla","कल्पना चावला"],
   ["Homi J. Bhabha","होमी जे. भाभा"],
   ["Vikram Sarabhai","विक्रम साराभाई"],
   ["Srinivasa Ramanujan","श्रीनिवास रामानुजन"]
  ].map(([label,hi])=>({
   label,
   hi,
   speak:label,
   image:`images/personalities/${slug(label)}.jpg`
  }))
 }
};


function slug(s){
 return s.toLowerCase()
  .replace(/[^a-z0-9]+/g,"-")
  .replace(/^-|-$/g,"");
}


function numberWord(n){
 const a=[
  "zero","one","two","three","four","five","six","seven",
  "eight","nine","ten","eleven","twelve","thirteen","fourteen",
  "fifteen","sixteen","seventeen","eighteen","nineteen"
 ];

 if(n<20)return a[n];

 if(n<100){
  const t=[
   "","","twenty","thirty","forty","fifty",
   "sixty","seventy","eighty","ninety"
  ];

  return t[Math.floor(n/10)]+
   (n%10?"-"+a[n%10]:"");
 }

 return "one hundred";
}


function numberHindi(n){
 const a=[
  "शून्य","एक","दो","तीन","चार","पांच","छह","सात","आठ","नौ",
  "दस","ग्यारह","बारह","तेरह","चौदह","पंद्रह","सोलह","सत्रह",
  "अठारह","उन्नीस","बीस","इक्कीस","बाईस","तेईस","चौबीस",
  "पच्चीस","छब्बीस","सत्ताईस","अट्ठाईस","उनतीस","तीस",
  "इकतीस","बत्तीस","तैंतीस","चौंतीस","पैंतीस","छत्तीस",
  "सैंतीस","अड़तीस","उनतालीस","चालीस","इकतालीस","बयालीस",
  "तैंतालीस","चवालीस","पैंतालीस","छियालीस","सैंतालीस",
  "अड़तालीस","उनचास","पचास","इक्यावन","बावन","तिरेपन",
  "चौवन","पचपन","छप्पन","सत्तावन","अट्ठावन","उनसठ","साठ",
  "इकसठ","बासठ","तिरसठ","चौंसठ","पैंसठ","छिहत्तर","सतहत्तर",
  "अठहत्तर","उन्यासी","अस्सी","इक्यासी","बयासी","तिरासी",
  "चौरासी","पचासी","छियासी","सत्तासी","अट्ठासी","नवासी",
  "नब्बे","इक्यानवे","बानवे","तिरानवे","चौरानवे","पचानवे",
  "छियानवे","सत्तानवे","अट्ठानवे","निन्यानवे","एक सौ"
 ];

 return a[n]||"";
}


/* =========================
   STORAGE / STATE
========================= */

let stars=Number(localStorage.getItem("ll_stars")||0);
let quizzes=Number(localStorage.getItem("ll_quizzes")||0);
let learned=Number(localStorage.getItem("ll_learned")||0);

let currentCatKey="alphabet";
let currentIndex=0;

let quizPool=[];
let quizIndex=0;
let quizScore=0;
let quizAnswered=false;
let currentQuizAnswer=null;


/* =========================
   SAVE
========================= */

function save(){
 localStorage.setItem("ll_stars",stars);
 localStorage.setItem("ll_quizzes",quizzes);
 localStorage.setItem("ll_learned",learned);

 const starEl=document.getElementById("starCount");
 if(starEl)starEl.textContent=stars;
}


/* =========================
   SCREEN
========================= */

function showScreen(id){

 document.querySelectorAll(".screen")
  .forEach(x=>x.classList.remove("active"));

 const target=document.getElementById(id);

 if(target){
  target.classList.add("active");
 }

 window.scrollTo({
  top:0,
  behavior:"smooth"
 });

 document.querySelectorAll(".bottom-nav button")
  .forEach(x=>x.classList.remove("active"));
}


function goHome(){
 showScreen("home");

 const firstNav=document.querySelector(".bottom-nav button");

 if(firstNav){
  firstNav.classList.add("active");
 }
}


/* =========================
   HOME
========================= */

function buildHome(){

 const grid=document.getElementById("catGrid");

 if(!grid)return;

 grid.innerHTML="";

 Object.entries(DATA).forEach(([key,cat])=>{

  const el=document.createElement("button");

  el.className="cat-card";

  el.innerHTML=`
   <div class="cat-icon">${cat.icon}</div>
   <h3>${cat.name}</h3>
   <p>${cat.items.length} learning cards</p>
   <span class="arrow">→</span>
  `;

  el.onclick=()=>openCategory(key);

  grid.appendChild(el);
 });
}


function showAllCategories(){
 buildHome();
 toast("All learning worlds are ready to explore.");
}


/* =========================
   LEARNING
========================= */

function openCategory(key){

 currentCatKey=key;
 currentIndex=0;

 showScreen("learn");

 renderLearn();
}


function continueLearning(){

 showScreen("learn");

 renderLearn();
}


function renderLearn(){

 const cat=DATA[currentCatKey];

 if(!cat)return;

 const item=cat.items[currentIndex];

 document.getElementById("learnCatTitle").textContent=
  cat.name.toUpperCase();

 document.getElementById("lessonCounter").textContent=
  `${currentIndex+1} / ${cat.items.length}`;

 document.getElementById("wordLabel").textContent=
  item.speak||item.label;

 document.getElementById("wordLabelHi").textContent=
  item.hi||"";

 const stage=document.getElementById("imageStage");
 const img=document.getElementById("lessonImage");
 const fallback=document.getElementById("imageFallbackText");

 if(stage){
  stage.classList.remove("no-image");
 }

 if(fallback){
  fallback.textContent=
   item.label.length>4
    ?item.label.slice(0,1)
    :item.label;
 }

 if(img){
  img.style.display="block";
  img.src=item.image;
  img.alt=item.label;
 }

 const dots=document.getElementById("progressDots");

 if(dots){

  const total=Math.min(cat.items.length,30);

  dots.innerHTML=Array.from(
   {length:total},
   (_,i)=>`<span class="dot ${i<=currentIndex?"done":""}"></span>`
  ).join("");
 }

 /*
  Only count a card once per category/index session.
  This avoids learned count increasing every time
  the same card is rendered.
 */
 const learnKey=`${currentCatKey}_${currentIndex}`;

 if(!window._learnedCards){
  window._learnedCards=new Set();
 }

 if(!window._learnedCards.has(learnKey)){
  window._learnedCards.add(learnKey);
  learned++;
  save();
 }

 speakCurrent();

 /*
  Add game button only where a game currently exists.
 */
 updateGameButton();
}


function imageFallback(img){

 const stage=img.closest(".image-stage");

 if(stage){
  stage.classList.add("no-image");
 }
}


function nextItem(){

 const cat=DATA[currentCatKey];

 currentIndex=
  (currentIndex+1)%cat.items.length;

 renderLearn();
}


function prevItem(){

 const cat=DATA[currentCatKey];

 currentIndex=
  (currentIndex-1+cat.items.length)%cat.items.length;

 renderLearn();
}


/* =========================
   SPEECH
========================= */

function speakOne(text,lang){

 if(!("speechSynthesis" in window))return;

 try{

  window.speechSynthesis.cancel();

  const u=new SpeechSynthesisUtterance(text);

  u.lang=lang;
  u.rate=.82;
  u.pitch=1.05;

  window.speechSynthesis.speak(u);

 }catch(e){}
}


function speakCurrent(){

 if(!("speechSynthesis" in window))return;

 try{
  window.speechSynthesis.cancel();
 }catch(e){}

 const x=DATA[currentCatKey].items[currentIndex];

 speakOne(
  x.speak||x.label,
  "en-IN"
 );

 if(x.hi){

  setTimeout(()=>{
   speakOne(x.hi,"hi-IN");
  },700);

 }
}


/* =========================
   QUIZ
========================= */

function startRandomQuiz(){

 const keys=Object.keys(DATA);

 currentCatKey=
  keys[Math.floor(Math.random()*keys.length)];

 startQuiz();
}


function startQuiz(){

 const cat=DATA[currentCatKey];

 quizPool=
  shuffle(cat.items)
  .slice(0,Math.min(6,cat.items.length));

 quizIndex=0;
 quizScore=0;

 showScreen("quiz");

 document.getElementById("quizCatLabel").textContent=
  cat.name.toUpperCase()+" QUIZ";

 renderQuizQuestion();
}


function renderQuizQuestion(){

 quizAnswered=false;

 const cat=DATA[currentCatKey];

 const answer=quizPool[quizIndex];

 currentQuizAnswer=answer;

 const others=
  cat.items.filter(x=>x.label!==answer.label);

 const distractors=
  shuffle(others).slice(0,3);

 const options=
  shuffle([answer,...distractors]);

 document.getElementById("quizQuestion").innerHTML=`
  Which one is <b>${answer.speak||answer.label}</b>?
  ${
   answer.hi
    ?`<span style="
       display:block;
       color:var(--gold2);
       font:500 14px 'Noto Sans Devanagari';
       margin-top:5px;
      ">
       इनमें से ${answer.hi} कौन सा है?
      </span>`
    :""
  }
 `;

 document.getElementById("scoreText").textContent=
  `Question ${quizIndex+1} of ${quizPool.length}`;

 document.getElementById("quizLiveScore").textContent=
  quizScore;

 /*
  Next button is kept hidden because
  correct answers now move automatically.
 */
 const nextBtn=document.getElementById("nextBtn");

 if(nextBtn){
  nextBtn.style.display="none";
 }

 const grid=document.getElementById("quizGrid");

 grid.innerHTML="";

 options.forEach(opt=>{

  const el=document.createElement("button");

  el.className="quiz-opt";

  el.innerHTML=`
   <img
    src="${opt.image}"
    alt=""
    onerror="
     this.style.display='none';
     this.nextElementSibling.style.display='block'
    "
   >

   <span
    class="fallback"
    style="display:none"
   >
    ${opt.label.slice(0,2)}
   </span>

   <span class="opt-label">
    ${opt.speak||opt.label}
   </span>

   ${
    opt.hi
     ?`<span class="hi">${opt.hi}</span>`
     :""
   }
  `;

  el.onclick=()=>{
   selectAnswer(el,opt,answer);
  };

  grid.appendChild(el);
 });

 setTimeout(()=>{
  speakOne(
   `Which one is ${answer.speak||answer.label}?`,
   "en-IN"
  );
 },200);
}


function replayQuestion(){

 if(!currentQuizAnswer)return;

 speakOne(
  `Which one is ${
   currentQuizAnswer.speak||
   currentQuizAnswer.label
  }?`,
  "en-IN"
 );
}


/*
 IMPORTANT:
 Correct answer:
    show green
    add star
    wait 900ms
    automatically next

 Wrong answer:
    show red
    reveal correct answer
    stay on question
*/
function selectAnswer(el,opt,answer){

 if(quizAnswered)return;

 quizAnswered=true;

 const allOpts=
  document.querySelectorAll(".quiz-opt");

 allOpts.forEach(x=>{
  x.style.pointerEvents="none";
 });

 if(opt.label===answer.label){

  el.classList.add("correct");

  quizScore++;
  stars++;

  toast("Correct! ⭐ +1 star");

  speakOne(
   "Correct! Great job!",
   "en-IN"
  );

  document.getElementById(
   "quizLiveScore"
  ).textContent=quizScore;

  save();

  /*
   AUTO NEXT
  */
  setTimeout(()=>{

   quizIndex++;

   if(quizIndex>=quizPool.length){

    finishQuiz();

   }else{

    renderQuizQuestion();

   }

  },900);

 }else{

  el.classList.add("wrong");

  allOpts.forEach(x=>{

   const label=
    x.querySelector(".opt-label");

   if(
    label &&
    (
     label.textContent===
      (answer.speak||answer.label)
    )
   ){
    x.classList.add("correct");
   }
  });

  toast("Good try! Look at the correct answer.");

  speakOne(
   `Not quite. It's ${
    answer.speak||answer.label
   }.`,
   "en-IN"
  );

  /*
   Wrong answer does NOT auto-next.
   Allow child to continue manually.
  */
  setTimeout(()=>{

   allOpts.forEach(x=>{
    x.style.pointerEvents="auto";
   });

   quizAnswered=false;

  },1100);
 }
}


function nextQuestion(){

 quizIndex++;

 if(quizIndex>=quizPool.length){

  finishQuiz();

 }else{

  renderQuizQuestion();

 }
}


function finishQuiz(){

 quizzes++;

 save();

 showScreen("done");

 document.getElementById("doneTitle").textContent=
  quizScore===quizPool.length
   ?"Perfect score!"
   :"Well done!";

 document.getElementById("doneText").textContent=
  `You got ${quizScore} out of ${quizPool.length} correct.`;

 document.getElementById("resultStars").textContent=
  "★".repeat(quizScore)+
  "☆".repeat(quizPool.length-quizScore);
}


/* =========================
   PROGRESS
========================= */

function showProgress(){

 showScreen("progress");

 document.getElementById("statStars").textContent=
  stars;

 document.getElementById("statQuizzes").textContent=
  quizzes;

 document.getElementById("statLearned").textContent=
  learned;

 document.getElementById("achievementProgress").textContent=
  Math.min(
   100,
   Math.round(stars/50*100)
  )+"%";
}


/* =========================
   GAME SYSTEM
========================= */

function updateGameButton(){

 /*
  Existing HTML doesn't need to be changed.
  We create the button beside the quiz button.
 */

 const quizCta=document.querySelector(".quiz-cta");

 if(!quizCta)return;

 let gameBtn=document.getElementById("cardGameBtn");

 if(!gameBtn){

  gameBtn=document.createElement("button");

  gameBtn.id="cardGameBtn";
  gameBtn.className="game-btn";

  quizCta.insertAdjacentElement(
   "afterend",
   gameBtn
  );
 }

 /*
  Only Fruits currently has a real game.
 */
 if(currentCatKey==="fruits"){

  gameBtn.style.display="block";

  gameBtn.innerHTML=
   "🎮 Play Fruit Game";

  gameBtn.onclick=()=>{
   openFruitGame();
  };

 }else{

  gameBtn.style.display="none";
 }
}


/* =========================
   CREATE GAME UI
========================= */

function createGameUI(){

 if(document.getElementById("fruitGameOverlay")){
  return;
 }

 const overlay=document.createElement("div");

 overlay.id="fruitGameOverlay";
 overlay.className="game-overlay";

 overlay.innerHTML=`

  <div class="game-panel">

   <div class="game-head">

    <div>
     <h2>🍎 Fruit Fun</h2>
     <p>Catch the fruit shown above!</p>
    </div>

    <button
     class="game-close"
     id="closeFruitGame"
    >
     ×
    </button>

   </div>

   <div
    class="fruit-game-area"
    id="fruitGameArea"
   >

    <div class="fruit-game-info">

     <div
      class="fruit-score"
      id="fruitScore"
     >
      ⭐ 0
     </div>

     <div
      class="fruit-target"
      id="fruitTarget"
     >
      🍎 Apple
     </div>

    </div>

    <div
     class="game-message"
     id="fruitGameMessage"
    >
     <div class="game-message-card">

      <strong id="fruitMessageTitle">
       Great!
      </strong>

      <span id="fruitMessageText">
       Nice work!
      </span>

     </div>
    </div>

   </div>

   <div class="game-controls">

    <button
     class="game-control-btn"
     id="restartFruitGame"
    >
     🔄 Restart
    </button>

    <button
     class="game-control-btn main"
     id="nextFruitRound"
    >
     Next Fruit →
    </button>

   </div>

  </div>
 `;

 document.body.appendChild(overlay);

 document.getElementById(
  "closeFruitGame"
 ).onclick=closeFruitGame;

 document.getElementById(
  "restartFruitGame"
 ).onclick=startFruitRound;

 document.getElementById(
  "nextFruitRound"
 ).onclick=startFruitRound;
}


/* =========================
   FRUIT GAME
========================= */

let fruitGameScore=0;
let fruitGameTarget=null;
let fruitGameTimer=null;
let fruitRoundLocked=false;


/*
  Emoji are used ONLY inside the game as
  quick game visuals.

  Your actual learning card still uses
  your uploaded images.
*/
const FRUIT_GAME_ICONS={
 Apple:"🍎",
 Banana:"🍌",
 Mango:"🥭",
 Orange:"🍊",
 Grapes:"🍇",
 Pomegranate:"🔴",
 Guava:"🍐",
 Papaya:"🟠",
 Watermelon:"🍉",
 Muskmelon:"🍈",
 Pineapple:"🍍",
 Coconut:"🥥",
 Litchi:"🔴",
 Jackfruit:"🟢",
 "Custard Apple":"🟢",
 Pear:"🍐",
 Strawberry:"🍓",
 Lemon:"🍋",
 Kiwi:"🥝",
 Peach:"🍑",
 Plum:"🟣",
 Chikoo:"🟤"
};


function openFruitGame(){

 createGameUI();

 const overlay=
  document.getElementById(
   "fruitGameOverlay"
  );

 overlay.classList.add("active");

 fruitGameScore=0;

 startFruitRound();
}


function closeFruitGame(){

 const overlay=
  document.getElementById(
   "fruitGameOverlay"
  );

 if(overlay){
  overlay.classList.remove("active");
 }

 clearTimeout(fruitGameTimer);
}


/*
  Start a round using the CURRENT fruit card.
  Example:
  current card = Apple
  game target = Apple
*/
function startFruitRound(){

 clearTimeout(fruitGameTimer);

 const cat=DATA.fruits;

 const currentItem=
  cat.items[currentIndex];

 /*
  If current category isn't fruits,
  use a random fruit.
 */
 if(currentCatKey==="fruits"){
  fruitGameTarget=currentItem;
 }else{
  fruitGameTarget=
   cat.items[
    Math.floor(
     Math.random()*cat.items.length
    )
   ];
 }

 fruitRoundLocked=false;

 const icon=
  FRUIT_GAME_ICONS[
   fruitGameTarget.label
  ]||"🍎";

 document.getElementById(
  "fruitTarget"
 ).textContent=
  `${icon} ${fruitGameTarget.label}`;

 document.getElementById(
  "fruitScore"
 ).textContent=
  `⭐ ${fruitGameScore}`;

 document.getElementById(
  "fruitGameMessage"
 ).classList.remove("show");

 const area=
  document.getElementById(
   "fruitGameArea"
  );

 /*
  Remove old fruits but preserve
  score/target/message elements.
 */
 area.querySelectorAll(
  ".fruit-item"
 ).forEach(x=>x.remove());

 /*
  Create target + distractor fruits.
 */
 const targetIcon=
  FRUIT_GAME_ICONS[
   fruitGameTarget.label
  ]||"🍎";

 const otherItems=
  shuffle(
   cat.items.filter(
    x=>x.label!==fruitGameTarget.label
   )
  ).slice(0,4);

 const fruits=[
  {
   label:fruitGameTarget.label,
   icon:targetIcon,
   correct:true
  },
  ...otherItems.map(x=>({
   label:x.label,
   icon:FRUIT_GAME_ICONS[x.label]||"🍎",
   correct:false
  }))
 ];

 shuffle(fruits).forEach((fruit,i)=>{

  const btn=
   document.createElement("button");

  btn.className="fruit-item";

  btn.type="button";

  btn.textContent=fruit.icon;

  /*
   Different random starting positions.
  */
  const left=
   7+
   Math.random()*78;

  const top=
   18+
   Math.random()*68;

  btn.style.left=left+"%";
  btn.style.top=top+"%";

  /*
   Slight animation delay.
  */
  btn.style.animationDelay=
   (i*.08)+"s";

  btn.onclick=()=>{

   if(fruitRoundLocked)return;

   if(fruit.correct){

    fruitRoundLocked=true;

    btn.classList.add("hit");

    fruitGameScore++;

    document.getElementById(
     "fruitScore"
    ).textContent=
     `⭐ ${fruitGameScore}`;

    showFruitMessage(
     "Great! ⭐",
     `${fruit.label} found!`
    );

    speakOne(
     `Great! You found the ${fruit.label}.`,
     "en-IN"
    );

    fruitGameTimer=setTimeout(
     startFruitRound,
     1100
    );

   }else{

    /*
     Wrong fruit:
     small shake + gentle feedback.
    */
    btn.animate(
     [
      {transform:"translateX(0)"},
      {transform:"translateX(-8px)"},
      {transform:"translateX(8px)"},
      {transform:"translateX(0)"}
     ],
     {
      duration:300
     }
    );

    showFruitMessage(
     "Try again!",
     "Find the fruit shown above."
    );

    setTimeout(()=>{

     document.getElementById(
      "fruitGameMessage"
     ).classList.remove("show");

    },650);

   }
  };

  area.appendChild(btn);
 });
}


function showFruitMessage(title,text){

 const message=
  document.getElementById(
   "fruitGameMessage"
  );

 document.getElementById(
  "fruitMessageTitle"
 ).textContent=title;

 document.getElementById(
  "fruitMessageText"
 ).textContent=text;

 message.classList.add("show");
}


/* =========================
   SHUFFLE
========================= */

function shuffle(a){

 return [...a].sort(
  ()=>Math.random()-.5
 );
}


/* =========================
   TOAST
========================= */

function toast(msg){

 const t=document.getElementById("toast");

 if(!t)return;

 t.textContent=msg;

 t.classList.add("show");

 clearTimeout(window._toast);

 window._toast=setTimeout(()=>{
  t.classList.remove("show");
 },1800);
}


/* =========================
   INIT
========================= */

document.addEventListener(
 "DOMContentLoaded",
 ()=>{

  buildHome();

  save();

  /*
   Game UI is created once,
   but remains hidden until needed.
  */
  createGameUI();

 }
);
