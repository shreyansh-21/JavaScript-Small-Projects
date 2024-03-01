const clock =document.querySelector('#clock');
// let date = new Date();
// console.log(date.toLocaleTimeString)


/* ab agar date ko hum console log kar de to aram se aa jayega par har baar referesh hone pe par humko to continious chaiye 
to crone job nhi use karenge vo kuch server side wali nautanki hai */

setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000)

// ye js ke events control karta hai vo bhi regular interval me or wahi millisecond me value dena hai