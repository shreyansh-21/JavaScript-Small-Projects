const buttons =document.querySelectorAll('.button');
const body = document.querySelector("body")

// buttons me node list aa gayi hai to foreach karenge

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
// .target property returns the element where the event occured,its read only
    console.log(e.target)
    if(e.target.id == 'grey'){
      body.style.backgroundColor ='grey';
    }
    if(e.target.id == 'white'){
      body.style.backgroundColor ='white';
    }
    if(e.target.id == 'yellow'){
      body.style.backgroundColor ='yellow';
    }
    if(e.target.id == 'blue'){
      body.style.backgroundColor ='blue';
    }
    if(e.target.id == 'red'){
      body.style.backgroundColor ='red';
    }
  })
});
