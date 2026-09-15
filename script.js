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
   ["Lion","शेर"],
   ["Tiger","बाघ"],
   ["Elephant","हाथी"],
   ["Giraffe","जिराफ़"],
   ["Zebra","ज़ेब्रा"],
   ["Monkey","बंदर"],
   ["Dog","कुत्ता"],
   ["Cat","बिल्ली"],
   ["Cow","गाय"],
   ["Horse","घोड़ा"],
   ["Goat","बकरी"],
   ["Sheep","भेड़"],
   ["Rabbit","खरगोश"],
   ["Deer","हिरण"],
   ["Bear","भालू"],
   ["Fox","लोमड़ी"],
   ["Wolf","भेड़िया"],
   ["Camel","ऊंट"],
   ["Rhinoceros","गैंडा"],
   ["Hippopotamus","दरियाई घोड़ा"],
   ["Crocodile","मगरमच्छ"],
   ["Panda","पांडा"],
   ["Kangaroo","कंगारू"]
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
   ["Peacock","मोर"],
   ["Parrot","तोता"],
   ["Sparrow","गौरैया"],
   ["Crow","कौआ"],
   ["Pigeon","कबूतर"],
   ["Eagle","गरुड़"],
   ["Owl","उल्लू"],
   ["Swan","हंस"],
   ["Duck","बत्तख"],
   ["Hen","मुर्गी"],
   ["Rooster","मुर्गा"],
   ["Kingfisher","रामचिरैया"],
   ["Woodpecker","कठफोड़वा"],
   ["Cuckoo","कोयल"],
   ["Flamingo","राजहंस"],
   ["Partridge","तीतर"],
   ["Myna","मैना"],
   ["Heron","बगुला"],
   ["Vulture","गिद्ध"],
   ["Crane","सारस"],
   ["Bulbul","बुलबुल"],
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
   ["Apple","सेब"],
   ["Banana","केला"],
   ["Mango","आम"],
   ["Orange","संतरा"],
   ["Grapes","अंगूर"],
   ["Pomegranate","अनार"],
   ["Guava","अमरूद"],
   ["Papaya","पपीता"],
   ["Watermelon","तरबूज"],
   ["Muskmelon","खरबूजा"],
   ["Pineapple","अनानास"],
   ["Coconut","नारियल"],
   ["Litchi","लीची"],
   ["Jackfruit","कटहल"],
   ["Custard Apple","सीताफल"],
   ["Pear","नाशपाती"],
   ["Strawberry","स्ट्रॉबेरी"],
   ["Lemon","नींबू"],
   ["Kiwi","कीवी"],
   ["Peach","आड़ू"],
   ["Plum","आलूबुखारा"],
   ["Chikoo","चीकू"]
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
   ["Potato","आलू"],
   ["Tomato","टमाटर"],
   ["Onion","प्याज़"],
   ["Carrot","गाजर"],
   ["Cabbage","पत्तागोभी"],
   ["Cauliflower","फूलगोभी"],
   ["Spinach","पालक"],
   ["Brinjal","बैंगन"],
   ["Okra","भिंडी"],
   ["Peas","मटर"],
   ["Pumpkin","कद्दू"],
   ["Bottle Gourd","लौकी"],
   ["Bitter Gourd","करेला"],
   ["Cucumber","खीरा"],
   ["Capsicum","शिमला मिर्च"],
   ["Radish","मूली"],
   ["Beetroot","चुकंदर"],
   ["Corn","मक्का"],
   ["Garlic","लहसुन"],
   ["Ginger","अदरक"],
   ["Green Beans","हरी फली"],
   ["Drumstick","सहजन"]
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
   ["Red","लाल"],
   ["Blue","नीला"],
   ["Green","हरा"],
   ["Yellow","पीला"],
   ["Orange","नारंगी"],
   ["Purple","बैंगनी"],
   ["Pink","गुलाबी"],
   ["Brown","भूरा"],
   ["Black","काला"],
   ["White","सफेद"],
   ["Grey","स्लेटी"],
   ["Gold","सुनहरा"],
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
   ["Circle","वृत्त"],
   ["Square","वर्ग"],
   ["Triangle","त्रिभुज"],
   ["Rectangle","आयत"],
   ["Oval","अंडाकार"],
   ["Star","तारा"],
   ["Heart","दिल"],
   ["Diamond","हीरा"],
   ["Pentagon","पंचभुज"],
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
   ["India","भारत"],
   ["United States","अमेरिका"],
   ["United Kingdom","यूनाइटेड किंगडम"],
   ["Japan","जापान"],
   ["France","फ्रांस"],
   ["Germany","जर्मनी"],
   ["Brazil","ब्राज़ील"],
   ["China","चीन"],
   ["Australia","ऑस्ट्रेलिया"],
   ["Canada","कनाडा"],
   ["Italy","इटली"],
   ["Spain","स्पेन"],
   ["Russia","रूस"],
   ["South Africa","दक्षिण अफ्रीका"],
   ["UAE","संयुक्त अरब अमीरात"],
   ["Nepal","नेपाल"],
   ["Bhutan","भूटान"],
   ["Bangladesh","बांग्लादेश"],
   ["Sri Lanka","श्रीलंका"],
   ["Singapore","सिंगापुर"],
   ["Thailand","थाईलैंड"],
   ["Malaysia","मलेशिया"],
   ["Indonesia","इंडोनेशिया"],
   ["South Korea","दक्षिण कोरिया"]
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


/* =========================
   HELPERS
========================= */

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

 if(starEl){
  starEl.textContent=stars;
 }
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

 const firstNav=
  document.querySelector(".bottom-nav button");

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
   (_,i)=>
    `<span class="dot ${i<=currentIndex?"done":""}"></span>`
  ).join("");
 }


 /*
  Count each learning card only once.
 */
 const learnKey=
  `${currentCatKey}_${currentIndex}`;

 if(!window._learnedCards){
  window._learnedCards=new Set();
 }

 if(!window._learnedCards.has(learnKey)){

  window._learnedCards.add(learnKey);

  learned++;

  save();
 }

 speakCurrent();

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
  (currentIndex-1+cat.items.length)%
  cat.items.length;

 renderLearn();
}


/* =========================
   SPEECH
========================= */

function speakOne(text,lang){

 if(!("speechSynthesis" in window))return;

 try{

  window.speechSynthesis.cancel();

  const u=
   new SpeechSynthesisUtterance(text);

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

 const x=
  DATA[currentCatKey].items[currentIndex];

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
  keys[
   Math.floor(
    Math.random()*keys.length
   )
  ];

 startQuiz();
}


function startQuiz(){

 const cat=DATA[currentCatKey];

 quizPool=
  shuffle(cat.items)
   .slice(
    0,
    Math.min(6,cat.items.length)
   );

 quizIndex=0;
 quizScore=0;

 showScreen("quiz");

 document.getElementById(
  "quizCatLabel"
 ).textContent=
  cat.name.toUpperCase()+" QUIZ";

 renderQuizQuestion();
}


function renderQuizQuestion(){

 quizAnswered=false;

 const cat=DATA[currentCatKey];

 const answer=quizPool[quizIndex];

 currentQuizAnswer=answer;

 const others=
  cat.items.filter(
   x=>x.label!==answer.label
  );

 const distractors=
  shuffle(others).slice(0,3);

 const options=
  shuffle([
   answer,
   ...distractors
  ]);

 document.getElementById(
  "quizQuestion"
 ).innerHTML=`
  Which one is <b>${answer.speak||answer.label}</b>?

  ${
   answer.hi
    ?`
     <span style="
      display:block;
      color:var(--gold2);
      font:500 14px 'Noto Sans Devanagari';
      margin-top:5px;
     ">
      इनमें से ${answer.hi} कौन सा है?
     </span>
    `
    :""
  }
 `;

 document.getElementById(
  "scoreText"
 ).textContent=
  `Question ${quizIndex+1} of ${quizPool.length}`;

 document.getElementById(
  "quizLiveScore"
 ).textContent=
  quizScore;

 const nextBtn=
  document.getElementById("nextBtn");

 if(nextBtn){
  nextBtn.style.display="none";
 }

 const grid=
  document.getElementById("quizGrid");

 grid.innerHTML="";

 options.forEach(opt=>{

  const el=
   document.createElement("button");

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
    ${escapeHTML(
     opt.label.slice(0,2)
    )}
   </span>

   <span class="opt-label">
    ${escapeHTML(
     opt.speak||opt.label
    )}
   </span>

   ${
    opt.hi
     ?`
      <span class="hi">
       ${escapeHTML(opt.hi)}
      </span>
     `
     :""
   }
  `;

  el.onclick=()=>{
   selectAnswer(
    el,
    opt,
    answer
   );
  };

  grid.appendChild(el);
 });

 setTimeout(()=>{

  speakOne(
   `Which one is ${
    answer.speak||answer.label
   }?`,
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


function selectAnswer(el,opt,answer){

 if(quizAnswered)return;

 quizAnswered=true;

 const allOpts=
  document.querySelectorAll(
   ".quiz-opt"
  );

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
  ).textContent=
   quizScore;

  save();

  setTimeout(()=>{

   quizIndex++;

   if(
    quizIndex>=quizPool.length
   ){

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
    label.textContent.trim()===
     (answer.speak||answer.label)
   ){

    x.classList.add("correct");
   }
  });

  toast(
   "Good try! Look at the correct answer."
  );

  speakOne(
   `Not quite. It's ${
    answer.speak||answer.label
   }.`,
   "en-IN"
  );

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

 if(
  quizIndex>=quizPool.length
 ){

  finishQuiz();

 }else{

  renderQuizQuestion();

 }
}


function finishQuiz(){

 quizzes++;

 save();

 showScreen("done");

 document.getElementById(
  "doneTitle"
 ).textContent=
  quizScore===quizPool.length
   ?"Perfect score!"
   :"Well done!";

 document.getElementById(
  "doneText"
 ).textContent=
  `You got ${quizScore} out of ${quizPool.length} correct.`;

 document.getElementById(
  "resultStars"
 ).textContent=
  "★".repeat(quizScore)+
  "☆".repeat(
   quizPool.length-quizScore
  );
}


/* =========================
   PROGRESS
========================= */

function showProgress(){

 showScreen("progress");

 document.getElementById(
  "statStars"
 ).textContent=
  stars;

 document.getElementById(
  "statQuizzes"
 ).textContent=
  quizzes;

 document.getElementById(
  "statLearned"
 ).textContent=
  learned;

 document.getElementById(
  "achievementProgress"
 ).textContent=
  Math.min(
   100,
   Math.round(
    stars/50*100
   )
  )+"%";
}


/* =====================================================
   UNIVERSAL CATEGORY GAME SYSTEM
===================================================== */


/*
  Every category gets its own game.

  Alphabet:
  Find the Letter

  Numbers:
  Find the Number

  Animals:
  Find the Animal

  Birds:
  Find the Bird

  Fruits:
  Find the Fruit

  Vegetables:
  Find the Vegetable

  Colors:
  Find the Color

  Shapes:
  Find the Shape

  Countries:
  Find the Country

  India:
  Find the Landmark

  Famous Indians:
  Find the Person
*/


const GAME_CONFIG={

 alphabet:{
  title:"🔤 Letter Hunt",
  instruction:"Find the letter shown above.",
  action:"Find the Letter"
 },

 numbers:{
  title:"🔢 Number Hunt",
  instruction:"Find the number shown above.",
  action:"Find the Number"
 },

 animals:{
  title:"🐾 Animal Hunt",
  instruction:"Find the animal shown above.",
  action:"Find the Animal"
 },

 birds:{
  title:"🐦 Bird Hunt",
  instruction:"Find the bird shown above.",
  action:"Find the Bird"
 },

 fruits:{
  title:"🍎 Fruit Hunt",
  instruction:"Find the fruit shown above.",
  action:"Find the Fruit"
 },

 vegetables:{
  title:"🥕 Vegetable Hunt",
  instruction:"Find the vegetable shown above.",
  action:"Find the Vegetable"
 },

 colors:{
  title:"🎨 Color Hunt",
  instruction:"Find the color shown above.",
  action:"Find the Color"
 },

 shapes:{
  title:"🔷 Shape Hunt",
  instruction:"Find the shape shown above.",
  action:"Find the Shape"
 },

 countries:{
  title:"🌍 Country Hunt",
  instruction:"Find the country shown above.",
  action:"Find the Country"
 },

 india:{
  title:"🇮🇳 India Hunt",
  instruction:"Find the place shown above.",
  action:"Find the Landmark"
 },

 personalities:{
  title:"⭐ People Hunt",
  instruction:"Find the person shown above.",
  action:"Find the Person"
 }
};


/* =========================
   GAME STATE
========================= */

let gameScore=0;
let gameTarget=null;
let gameTimer=null;
let gameLocked=false;


/* =========================
   GAME BUTTON
========================= */

function updateGameButton(){

 const quizCta=
  document.querySelector(".quiz-cta");

 if(!quizCta)return;

 let gameBtn=
  document.getElementById(
   "cardGameBtn"
  );

 if(!gameBtn){

  gameBtn=
   document.createElement("button");

  gameBtn.id="cardGameBtn";

  gameBtn.className="game-btn";

  quizCta.insertAdjacentElement(
   "afterend",
   gameBtn
  );
 }

 const config=
  GAME_CONFIG[currentCatKey];

 if(!config){

  gameBtn.style.display="none";

  return;
 }

 gameBtn.style.display="block";

 gameBtn.innerHTML=
  `🎮 ${config.action}`;

 gameBtn.onclick=()=>{
  openCategoryGame();
 };
}


/* =========================
   GAME UI
========================= */

function injectGameStyles(){

 if(
  document.getElementById(
   "universalGameStyles"
  )
 )return;

 const style=
  document.createElement("style");

 style.id="universalGameStyles";

 style.textContent=`

 .universal-game-overlay{
  position:fixed;
  inset:0;
  z-index:99999;
  display:none;
  align-items:center;
  justify-content:center;
  padding:14px;
  background:
   rgba(12,9,20,.78);
  backdrop-filter:blur(10px);
 }

 .universal-game-overlay.active{
  display:flex;
 }

 .universal-game-panel{
  width:min(100%,540px);
  max-height:92vh;
  overflow:hidden;
  border-radius:28px;
  background:
   linear-gradient(
    145deg,
    #fffdf8,
    #f7f0e7
   );
  box-shadow:
   0 25px 80px rgba(0,0,0,.35);
  border:1px solid rgba(255,255,255,.8);
 }

 .universal-game-head{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  padding:18px 18px 12px;
 }

 .universal-game-head h2{
  margin:0;
  font-size:21px;
 }

 .universal-game-head p{
  margin:4px 0 0;
  font-size:12px;
  opacity:.68;
 }

 .universal-game-close{
  width:40px;
  height:40px;
  border:0;
  border-radius:50%;
  font-size:25px;
  cursor:pointer;
  background:#eee8df;
 }

 .universal-game-area{
  position:relative;
  height:min(58vh,390px);
  margin:0 14px;
  overflow:hidden;
  border-radius:24px;
  background:
   radial-gradient(
    circle at 50% 20%,
    rgba(255,255,255,.95),
    rgba(244,234,220,.9)
   );
  border:1px solid rgba(150,120,80,.12);
 }

 .universal-game-info{
  position:absolute;
  z-index:30;
  left:12px;
  right:12px;
  top:12px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:8px;
  pointer-events:none;
 }

 .universal-game-score{
  padding:8px 12px;
  border-radius:999px;
  background:#fff;
  box-shadow:0 6px 20px rgba(0,0,0,.1);
  font-weight:700;
  font-size:14px;
 }

 .universal-game-target{
  max-width:72%;
  padding:9px 14px;
  border-radius:999px;
  background:#fff;
  box-shadow:0 6px 20px rgba(0,0,0,.1);
  font-weight:700;
  font-size:14px;
  text-align:center;
 }

 .game-option{
  position:absolute;
  z-index:10;
  border:0;
  border-radius:22px;
  padding:7px;
  background:#fff;
  box-shadow:
   0 10px 28px rgba(0,0,0,.13);
  cursor:pointer;
  transition:
   transform .18s ease,
   box-shadow .18s ease,
   opacity .18s ease;
  animation:gamePop .35s ease both;
 }

 .game-option:hover{
  transform:scale(1.04);
 }

 .game-option:active{
  transform:scale(.94);
 }

 .game-option img{
  width:72px;
  height:72px;
  object-fit:contain;
  display:block;
  border-radius:16px;
 }

 .game-option .game-option-text{
  display:block;
  max-width:90px;
  margin:4px auto 2px;
  font-size:11px;
  font-weight:700;
  line-height:1.15;
 }

 .game-option.correct{
  box-shadow:
   0 0 0 4px rgba(70,180,100,.25),
   0 12px 30px rgba(70,180,100,.22);
  animation:gameCorrect .45s ease both;
 }

 .game-option.wrong{
  animation:gameShake .32s ease both;
 }

 .game-option-fallback{
  width:72px;
  height:72px;
  display:none;
  align-items:center;
  justify-content:center;
  border-radius:16px;
  background:#f1eadf;
  font-size:30px;
  font-weight:800;
 }

 .game-message{
  position:absolute;
  z-index:50;
  left:50%;
  top:52%;
  transform:translate(-50%,-50%) scale(.9);
  opacity:0;
  pointer-events:none;
  transition:.2s ease;
 }

 .game-message.show{
  opacity:1;
  transform:translate(-50%,-50%) scale(1);
 }

 .game-message-card{
  min-width:190px;
  padding:14px 20px;
  border-radius:20px;
  text-align:center;
  background:#fff;
  box-shadow:0 15px 40px rgba(0,0,0,.18);
 }

 .game-message-card strong{
  display:block;
  font-size:18px;
 }

 .game-message-card span{
  display:block;
  margin-top:3px;
  font-size:12px;
  opacity:.7;
 }

 .universal-game-controls{
  display:flex;
  gap:10px;
  padding:12px 14px 15px;
 }

 .universal-game-control{
  flex:1;
  border:0;
  border-radius:15px;
  padding:12px;
  font-weight:700;
  cursor:pointer;
  background:#ebe4da;
 }

 .universal-game-control.main{
  background:#17131d;
  color:#fff;
 }

 @keyframes gamePop{
  from{
   opacity:0;
   transform:scale(.65);
  }
  to{
   opacity:1;
   transform:scale(1);
  }
 }

 @keyframes gameCorrect{
  50%{
   transform:scale(1.15);
  }
 }

 @keyframes gameShake{
  25%{
   transform:translateX(-8px);
  }
  50%{
   transform:translateX(8px);
  }
  75%{
   transform:translateX(-5px);
  }
 }

 @media(max-width:380px){

  .universal-game-area{
   height:55vh;
  }

  .game-option img,
  .game-option-fallback{
   width:60px;
   height:60px;
  }

  .game-option{
   border-radius:18px;
  }

  .game-option .game-option-text{
   max-width:75px;
   font-size:10px;
  }

 }
/* ===== DARK GAME READABILITY FIX ===== */

.universal-game-overlay{
  background:rgba(0,0,0,.72) !important;
  backdrop-filter:blur(7px);
  -webkit-backdrop-filter:blur(7px);
}

.universal-game-panel{
  background:#171923 !important;
  color:#fff !important;
  border:1px solid rgba(255,255,255,.10) !important;
  box-shadow:0 20px 60px rgba(0,0,0,.55) !important;
}

.universal-game-head h2{
  color:#fff !important;
  text-shadow:none !important;
}

.universal-game-head p{
  color:#bfc3d1 !important;
}

.universal-game-close{
  background:#272a36 !important;
  color:#fff !important;
  border:1px solid rgba(255,255,255,.12) !important;
}

.universal-game-area{
  background:#0f1119 !important;
  color:#fff !important;
  border-color:rgba(255,255,255,.08) !important;
}

.universal-game-score{
  background:#20232f !important;
  color:#fff !important;
  border:1px solid rgba(255,255,255,.10) !important;
}

.universal-game-target{
  background:#20232f !important;
  color:#fff !important;
  border:1px solid rgba(255,255,255,.14) !important;
  box-shadow:0 8px 25px rgba(0,0,0,.35) !important;
}

.universal-game-target *{
  color:#fff !important;
  text-shadow:none !important;
}

.game-option{
  background:#1c1f2a !important;
  color:#fff !important;
  border:1px solid rgba(255,255,255,.12) !important;
  box-shadow:0 8px 20px rgba(0,0,0,.28) !important;
}

.game-option .game-option-text{
  color:#fff !important;
  text-shadow:none !important;
}

.game-option-fallback{
  background:#272a36 !important;
  color:#fff !important;
}

.game-message-card{
  background:#20232f !important;
  color:#fff !important;
  border:1px solid rgba(255,255,255,.12) !important;
  box-shadow:0 15px 40px rgba(0,0,0,.45) !important;
}

.game-message-card strong{
  color:#fff !important;
}

.game-message-card span{
  color:#c7cad5 !important;
}

.universal-game-controls{
  background:#171923 !important;
}

.universal-game-control{
  background:#292c38 !important;
  color:#fff !important;
}

.universal-game-control.main{
  background:#fff !important;
  color:#17131d !important;
}
 `;

 document.head.appendChild(style);
}


function createUniversalGameUI(){

 injectGameStyles();

 if(
  document.getElementById(
   "universalGameOverlay"
  )
 )return;

 const overlay=
  document.createElement("div");

 overlay.id=
  "universalGameOverlay";

 overlay.className=
  "universal-game-overlay";

 overlay.innerHTML=`

  <div class="universal-game-panel">

   <div class="universal-game-head">

    <div>
     <h2 id="universalGameTitle">
      🎮 Game
     </h2>

     <p id="universalGameInstruction">
      Find the correct answer.
     </p>
    </div>

    <button
     class="universal-game-close"
     id="universalGameClose"
     type="button"
    >
     ×
    </button>

   </div>

   <div
    class="universal-game-area"
    id="universalGameArea"
   >

    <div class="universal-game-info">

     <div
      class="universal-game-score"
      id="universalGameScore"
     >
      ⭐ 0
     </div>

     <div
      class="universal-game-target"
      id="universalGameTarget"
     >
      Find the answer
     </div>

    </div>

    <div
     class="game-message"
     id="universalGameMessage"
    >

     <div class="game-message-card">

      <strong
       id="universalGameMessageTitle"
      >
       Great!
      </strong>

      <span
       id="universalGameMessageText"
      >
       Nice work!
      </span>

     </div>

    </div>

   </div>

   <div class="universal-game-controls">

    <button
     class="universal-game-control"
     id="universalGameRestart"
     type="button"
    >
     🔄 Restart
    </button>

    <button
     class="universal-game-control main"
     id="universalGameNext"
     type="button"
    >
     Next →
    </button>

   </div>

  </div>
 `;

 document.body.appendChild(overlay);

 document.getElementById(
  "universalGameClose"
 ).onclick=
  closeCategoryGame;

 document.getElementById(
  "universalGameRestart"
 ).onclick=
  startGameRound;

 document.getElementById(
  "universalGameNext"
 ).onclick=
  startGameRound;
}


/* =========================
   OPEN GAME
========================= */

function openCategoryGame(){

 createUniversalGameUI();

 const overlay=
  document.getElementById(
   "universalGameOverlay"
  );

 if(!overlay)return;

 overlay.classList.add("active");

 gameScore=0;

 updateGameHeader();

 startGameRound();
}


/* =========================
   CLOSE GAME
========================= */

function closeCategoryGame(){

 const overlay=
  document.getElementById(
   "universalGameOverlay"
  );

 if(overlay){
  overlay.classList.remove("active");
 }

 clearTimeout(gameTimer);

 if(
  "speechSynthesis" in window
 ){

  try{
   window.speechSynthesis.cancel();
  }catch(e){}
 }
}


/* =========================
   GAME HEADER
========================= */

function updateGameHeader(){

 const config=
  GAME_CONFIG[currentCatKey];

 if(!config)return;

 const title=
  document.getElementById(
   "universalGameTitle"
  );

 const instruction=
  document.getElementById(
   "universalGameInstruction"
  );

 if(title){
  title.textContent=config.title;
 }

 if(instruction){
  instruction.textContent=
   config.instruction;
 }
}


/* =========================
   START RANDOM GAME ROUND
========================= */

function startGameRound(){

 clearTimeout(gameTimer);

 const cat=
  DATA[currentCatKey];

 if(!cat || !cat.items.length)return;

 gameLocked=false;

 /*
  Random target every round.
  It does NOT depend on the current
  learning card.
 */
 gameTarget=
  cat.items[
   Math.floor(
    Math.random()*cat.items.length
   )
  ];

 updateGameHeader();

 const targetEl=
  document.getElementById(
   "universalGameTarget"
  );

 const scoreEl=
  document.getElementById(
   "universalGameScore"
  );

 if(targetEl){

  targetEl.textContent=
   getGameTargetText(
    gameTarget
   );
 }

 if(scoreEl){

  scoreEl.textContent=
   `⭐ ${gameScore}`;
 }

 const message=
  document.getElementById(
   "universalGameMessage"
  );

 if(message){
  message.classList.remove("show");
 }

 const area=
  document.getElementById(
   "universalGameArea"
  );

 if(!area)return;

 area.querySelectorAll(
  ".game-option"
 ).forEach(x=>x.remove());


 /*
  We need three different distractors.
 */
 const others=
  cat.items.filter(
   x=>x.label!==gameTarget.label
  );

 const distractors=
  shuffle(others).slice(0,3);

 const options=
  shuffle([
   gameTarget,
   ...distractors
  ]);


 /*
  Generate four positions.
  This keeps the game random while
  avoiding excessive overlap.
 */
 const positions=
  generateGamePositions(
   options.length
  );

 options.forEach((item,index)=>{

  const btn=
   document.createElement("button");

  btn.type="button";

  btn.className=
   "game-option";

  const position=
   positions[index];

  btn.style.left=
   position.left+"%";

  btn.style.top=
   position.top+"%";

  btn.style.animationDelay=
   (index*.07)+"s";

  const img=
   document.createElement("img");

  img.src=item.image;

  img.alt=item.label;

  const fallback=
   document.createElement("div");

  fallback.className=
   "game-option-fallback";

  fallback.textContent=
   getFallbackText(item);

  img.onerror=()=>{
   img.style.display="none";
   fallback.style.display="flex";
  };

  const text=
   document.createElement("span");

  text.className=
   "game-option-text";

  text.textContent=
   item.speak||item.label;

  btn.appendChild(img);

  btn.appendChild(fallback);

  btn.appendChild(text);

  btn.onclick=()=>{
   handleGameAnswer(
    btn,
    item
   );
  };

  area.appendChild(btn);
 });


 /*
  Speak instruction.
 */
 setTimeout(()=>{

  speakOne(
   getGameSpeech(gameTarget),
   "en-IN"
  );

 },250);
}


/* =========================
   GAME TARGET TEXT
========================= */

function getGameTargetText(item){

 const key=currentCatKey;

 if(key==="alphabet"){

  return `Find: ${item.label}`;
 }

 if(key==="numbers"){

  return `Find: ${item.label}`;
 }

 return `Find: ${item.speak||item.label}`;
}


/* =========================
   GAME SPEECH
========================= */

function getGameSpeech(item){

 const key=currentCatKey;

 if(key==="alphabet"){

  return `Find the letter ${item.label}.`;
 }

 if(key==="numbers"){

  return `Find the number ${item.label}.`;
 }

 if(key==="india"){

  return `Find the ${item.speak||item.label}.`;
 }

 if(key==="personalities"){

  return `Find ${item.speak||item.label}.`;
 }

 return `Find the ${item.speak||item.label}.`;
}


/* =========================
   GAME FALLBACK
========================= */

function getFallbackText(item){

 if(currentCatKey==="alphabet"){
  return item.label;
 }

 if(currentCatKey==="numbers"){
  return item.label;
 }

 return item.label
  .replace(/[^a-zA-Z0-9]/g,"")
  .slice(0,1)
  .toUpperCase() || "?";
}


/* =========================
   RANDOM POSITIONS
========================= */

function generateGamePositions(count){

 const result=[];

 /*
  Four safe zones.
  Position is still randomized inside
  each zone, so options don't stack
  on top of each other.
 */
 const zones=[
  {x:5,y:21,w:38,h:29},
  {x:57,y:21,w:38,h:29},
  {x:5,y:57,w:38,h:29},
  {x:57,y:57,w:38,h:29}
 ];

 const shuffledZones=
  shuffle(zones);

 for(let i=0;i<count;i++){

  const z=
   shuffledZones[i%shuffledZones.length];

  result.push({
   left:
    z.x+
    Math.random()*Math.max(1,z.w-17),

   top:
    z.y+
    Math.random()*Math.max(1,z.h-18)
  });
 }

 return result;
}


/* =========================
   GAME ANSWER
========================= */

function handleGameAnswer(btn,item){

 if(gameLocked)return;

 if(item.label===gameTarget.label){

  gameLocked=true;

  btn.classList.add("correct");

  gameScore++;

  const scoreEl=
   document.getElementById(
    "universalGameScore"
   );

  if(scoreEl){

   scoreEl.textContent=
    `⭐ ${gameScore}`;
  }

  showGameMessage(
   "Great! ⭐",
   `${item.speak||item.label} found!`
  );

  speakOne(
   getCorrectGameSpeech(item),
   "en-IN"
  );

  gameTimer=
   setTimeout(
    startGameRound,
    950
   );

 }else{

  btn.classList.add("wrong");

  showGameMessage(
   "Try again!",
   "Find the correct one."
  );

  speakOne(
   "Try again!",
   "en-IN"
  );

  setTimeout(()=>{

   btn.classList.remove("wrong");

   const message=
    document.getElementById(
     "universalGameMessage"
    );

   if(message){
    message.classList.remove("show");
   }

  },650);
 }
}


/* =========================
   CORRECT SPEECH
========================= */

function getCorrectGameSpeech(item){

 if(currentCatKey==="alphabet"){

  return `Correct! You found the letter ${item.label}.`;
 }

 if(currentCatKey==="numbers"){

  return `Correct! You found number ${item.label}.`;
 }

 return `Correct! You found ${item.speak||item.label}.`;
}


/* =========================
   GAME MESSAGE
========================= */

function showGameMessage(title,text){

 const message=
  document.getElementById(
   "universalGameMessage"
  );

 const titleEl=
  document.getElementById(
   "universalGameMessageTitle"
  );

 const textEl=
  document.getElementById(
   "universalGameMessageText"
  );

 if(titleEl){
  titleEl.textContent=title;
 }

 if(textEl){
  textEl.textContent=text;
 }

 if(message){
  message.classList.add("show");
 }
}


/* =========================
   ESCAPE HTML
========================= */

function escapeHTML(value){

 return String(value)
  .replace(/&/g,"&amp;")
  .replace(/</g,"&lt;")
  .replace(/>/g,"&gt;")
  .replace(/"/g,"&quot;")
  .replace(/'/g,"&#039;");
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

 const t=
  document.getElementById("toast");

 if(!t)return;

 t.textContent=msg;

 t.classList.add("show");

 clearTimeout(
  window._toast
 );

 window._toast=
  setTimeout(()=>{
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

  createUniversalGameUI();

 }
);
