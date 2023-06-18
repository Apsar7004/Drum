var drums=document.querySelectorAll(".drum").length;

for(var i=0; i<drums; i++)
{

   document.querySelectorAll(".drum")[i].addEventListener("click", function (){
var val=this.innerHTML;
console.log(val);
call(val);
pass(val);

});

  /*  var au = new Audio("sounds/tom-1.mp3");
    au.play();*/


/*document.querySelectorAll(".drum")[i].addEventListener("click", drum );

function drum(){

  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();
}*/
}

document.addEventListener("keypress", function (e){
var value=e.key;
console.log(value);
call(value);
pass(value);
});

function call(key){
 switch(key)
 {
   case"w":
   var a = new Audio("sounds/crash.mp3");
   a.play();
   break;

   case"a":
   var audi = new Audio("sounds/punch-boxing-02wav-14897.mp3");
   audi.play();
   break;

   case"s":
   var audio = new Audio("sounds/snare.mp3");
   audio.play();
   break;

   case"d":
   var audio = new Audio("sounds/tom-1.mp3");
   audio.play();
   break;

   case"j":
   var audio = new Audio("sounds/tom-2.mp3");
   audio.play();
   break;

   case"k":
   var audio = new Audio("sounds/tom-3.mp3");
   audio.play();
   break;

   case"l":
   var audio = new Audio("sounds/tom-4.mp3");
   audio.play();
   break;

   default:
   console.log(key);
 }
 }
function pass(a){
document.querySelector("."+a).classList.add("pressed");
setTimeout(function(){
  document.querySelector("."+a).classList.remove("pressed");} ,100);
}
