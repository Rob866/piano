window.addEventListener("keydown",function(e){
const audio:HTMLAudioElement= document.querySelector(
    `audio[data-key="${e.keyCode}"]`);
const key :HTMLDivElement= this.document.querySelector(
    `.key[data-key="${e.keyCode}"]`
);    

if(!audio || !key) return;
key.classList.add("playing");
audio.currentTime=0;
audio.play();



function removeTransition(e:TransitionEvent){

    if (e.propertyName !== "transform"){return}
    this.classList.remove("playing");
 
}


const keys:NodeList = document.querySelectorAll(".key");

keys.forEach((key:HTMLDivElement)=>{

    key.addEventListener("transitionend",removeTransition);
});



});