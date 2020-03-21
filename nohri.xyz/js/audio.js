
//"nohri is" array
var nohriArray = ["a hikikomori now","pronounced &quot;noh-REE&quot;","streaming like almost everywhere", "a belief system","why we can&#39;t have nice things","experiencing spaghettification","harrowing through hell", "here for you &lt;3","more planet than person™","entropy on ecstacy","working on Project: XXXXX","rude","always 🤔","the adversary"];


//run init function on window load
(function(window, document, undefined){      
        window.onload = init;
  function init(){
      
      //"nohri is" output
      var rand = nohriArray[Math.floor(Math.random() * nohriArray.length)];
      document.getElementById("output").innerHTML = rand;}
    
      //background controls
     var bg = document.getElementById("bg");
  })(window, document, undefined);


//realms controls
var realms0 = new Howl({
      src: ["music/realms/rooms.mp3"]
    });
function rooms(){
        document.getElementById("realms0").innerHTML +='<a class="pausebtn" onclick="pauserealms0()" id="pausebtnrealms0">||</a>';
    var pausebtnrealms0 = document.getElementById("pausebtnrealms0");
        if (realms0.playing() == false){
        realms0.play();
        bg.style.opacity = 1;} else {
            return}}
    function pauserealms0(){
        bg.style.opacity = 0;
      realms0.pause();
     document.getElementById("realms0").innerHTML ='<a class="track" href="#" onclick="rooms()">rooms</a>';}
var realms1 = new Howl({
      src: ["music/realms/shore++.mp3"]
    });
function shore(){
    document.getElementById("realms1").innerHTML +='<a class="pausebtn" onclick="pauserealms1()" id="pausebtnrealms1">||</a>';
    var pausebtnrealms1 = document.getElementById("pausebtnrealms1");
        if (realms1.playing() == false){
        realms1.play();
        bg.style.opacity = 1;} else {
            return}}
    function pauserealms1(){
        bg.style.opacity = 0;
      realms1.pause();
    document.getElementById("realms1").innerHTML ='<a class="track" href="#" onclick="shore()">shore++</a>'; }
var realms2 = new Howl({
      src: ["music/realms/creeper.mp3"]
    });
function creeper(){
          document.getElementById("realms2").innerHTML +='<a class="pausebtn" onclick="pauserealms2()" id="pausebtnrealms2">||</a>';
    var pausebtnrealms2 = document.getElementById("pausebtnrealms2");
        if (realms2.playing() == false){
        realms2.play();
        bg.style.opacity = 1;} else {
            return}}
    function pauserealms2(){
        bg.style.opacity = 0;
      realms2.pause();
    document.getElementById("realms2").innerHTML ='<a class="track" href="#" onclick="creeper()">creeper</a>';}
var realms3 = new Howl({
      src: ["music/realms/paprika.mp3"]
    });
function paprika(){
          document.getElementById("realms3").innerHTML +='<a class="pausebtn" onclick="pauserealms3()" id="pausebtnrealms3">||</a>';
    var pausebtnrealms3 = document.getElementById("pausebtnrealms3");
        if (realms3.playing() == false){
        realms3.play();
        bg.style.opacity = 1;} else {
            return}}
    function pauserealms3(){
        bg.style.opacity = 0;
      realms3.pause();
    document.getElementById("realms3").innerHTML ='<a class="track" href="#" onclick="paprika()">paprika</a>';}
var realms4 = new Howl({
      src: ["music/realms/opal essence.mp3"]
    });
function opalessence(){
          document.getElementById("realms4").innerHTML +='<a class="pausebtn" onclick="pauserealms4()" id="pausebtnrealms4">||</a>';
    var pausebtnrealms4 = document.getElementById("pausebtnrealms4");
        if (realms4.playing() == false){
        realms4.play();
        bg.style.opacity = 1;} else {
            return}}
    function pauserealms4(){
        bg.style.opacity = 0;
      realms4.pause();
    document.getElementById("realms4").innerHTML ='<a class="track" href="#" onclick="opalessence()">opal essence</a>';}
var realms5 = new Howl({
      src: ["music/realms/drama.mp3"]
    });
function drama(){
          document.getElementById("realms5").innerHTML +='<a class="pausebtn" onclick="pauserealms5()" id="pausebtnrealms5">||</a>';
    var pausebtnrealms5 = document.getElementById("pausebtnrealms5");
        if (realms5.playing() == false){
        realms5.play();
        bg.style.opacity = 1;} else {
            return}}
    function pauserealms5(){
        bg.style.opacity = 0;
      realms5.pause();
    document.getElementById("realms5").innerHTML ='<a class="track" href="#" onclick="drama()">drama</a>';}
var realms6 = new Howl({
      src: ["music/realms/see the sun.mp3"]
    });
function seethesun(){
          document.getElementById("realms6").innerHTML +='<a class="pausebtn" onclick="pauserealms6()" id="pausebtnrealms6">||</a>';
    var pausebtnrealms6 = document.getElementById("pausebtnrealms6");
        if (realms6.playing() == false){
        realms6.play();
        bg.style.opacity = 1;} else {
            return}}
    function pauserealms6(){
        bg.style.opacity = 0;
      realms6.pause();
    document.getElementById("realms6").innerHTML ='<a class="track" href="#" onclick="seethesun()">see the sun</a>';}
var realms7 = new Howl({
      src: ["music/realms/wyrm.mp3"]
    });
function wyrm(){
          document.getElementById("realms7").innerHTML +='<a class="pausebtn" onclick="pauserealms7()" id="pausebtnrealms7">||</a>';
    var pausebtnrealms7 = document.getElementById("pausebtnrealms7");
        if (realms7.playing() == false){
        realms7.play();
        bg.style.opacity = 1;} else {
            return}}
    function pauserealms7(){
        bg.style.opacity = 0;
      realms7.pause();
    document.getElementById("realms7").innerHTML ='<a class="track" href="#" onclick="wyrm()">wyrm</a>';}
var realms8 = new Howl({
      src: ["music/realms/easternriserLIFEBLOOD.mp3"]
    });
function lifeblood(){
          document.getElementById("realms8").innerHTML +='<a class="pausebtn" onclick="pauserealms8()" id="pausebtnrealms8">||</a>';
    var pausebtnrealms8 = document.getElementById("pausebtnrealms8");
        if (realms8.playing() == false){
        realms8.play();
        bg.style.opacity = 1;} else {
            return}}
    function pauserealms8(){
        bg.style.opacity = 0;
      realms8.pause();
    document.getElementById("realms8").innerHTML ='<a class="track" href="#" onclick="lifeblood()">easternsriser/lifeblood</a>';}
var realms9 = new Howl({
      src: ["music/realms/wecouldbe.mp3"]
    });
function wecouldbe(){
          document.getElementById("realms9").innerHTML +='<a class="pausebtn" onclick="pauserealms9()" id="pausebtnrealms9">||</a>';
    var pausebtnrealms9 = document.getElementById("pausebtnrealms9");
        if (realms9.playing() == false){
        realms9.play();
        bg.style.opacity = 1;} else {
            return}}
    function pauserealms9(){
        bg.style.opacity = 0;
      realms9.pause();
    document.getElementById("realms9").innerHTML ='<a class="track" href="#" onclick="wecouldbe()">wecouldbe</a>';}
var realms10 = new Howl({
      src: ["music/realms/hold my hand.mp3"]
    });
function holdmyhand(){
          document.getElementById("realms10").innerHTML +='<a class="pausebtn" onclick="pauserealms10()" id="pausebtnrealms10">||</a>';
    var pausebtnrealms10 = document.getElementById("pausebtnrealms10");
        if (realms10.playing() == false){
        realms10.play();
        bg.style.opacity = 1;} else {
            return}}
    function pauserealms10(){
        bg.style.opacity = 0;
      realms10.pause();
    document.getElementById("realms10").innerHTML ='<a class="track" href="#" onclick="holdmyhand()">hold my hand</a>';}
var realms11 = new Howl({
      src: ["music/realms/lightning.mp3"]
    });
function lightning(){
          document.getElementById("realms11").innerHTML +='<a class="pausebtn" onclick="pauserealms11()" id="pausebtnrealms11">||</a>';
    var pausebtnrealms11 = document.getElementById("pausebtnrealms11");
        if (realms11.playing() == false){
        realms11.play();
        bg.style.opacity = 1;} else {
            return}}
    function pauserealms11(){
        bg.style.opacity = 0;
      realms11.pause();
    document.getElementById("realms11").innerHTML ='<a class="track" href="#" onclick="lightning()">lightning</a>';}
var realms12 = new Howl({
      src: ["music/realms/soft throttle.mp3"]
    });
function softthrottle(){
          document.getElementById("realms12").innerHTML +='<a class="pausebtn" onclick="pauserealms12()" id="pausebtnrealms12">||</a>';
    var pausebtnrealms12 = document.getElementById("pausebtnrealms12");
        if (realms12.playing() == false){
        realms12.play();
        bg.style.opacity = 1;} else {
            return}}
    function pauserealms12(){
        bg.style.opacity = 0;
      realms12.pause();
    document.getElementById("realms12").innerHTML ='<a class="track" href="#" onclick="softthrottle()">soft throttle</a>';}
var realms13 = new Howl({
      src: ["music/realms/spo0ky action.mp3"]
});
function spo0kyaction(){
          document.getElementById("realms13").innerHTML +='<a class="pausebtn" onclick="pauserealms13()" id="pausebtnrealms13">||</a>';
    var pausebtnrealms13 = document.getElementById("pausebtnrealms13");
        if (realms13.playing() == false){
        realms13.play();
        bg.style.opacity = 1;} else {
            return}}
    function pauserealms13(){
        bg.style.opacity = 0;
      realms13.pause();
    document.getElementById("realms13").innerHTML ='<a class="track" href="#" onclick="spo0kyaction()">spo0ky action</a>';}
while(realms0.playing()){document.getElementById("realms0").style.color= '#fc4c64'; console.log(realms0.playing())}

