const form = document.querySelector('form')

/* usually the form is submitted by a get or a post method but jisse bhi ho uski value server par chali jati hai 
usse hame rokana padega kyuki server par to bhej nhi rahe */
form.addEventListener('submit', function(e){
  e.preventDefault()
// humlog ne document.getElementById use nhi kiya  hai na so .querySelector me id se access karne ke liye # lagana padta hai
  const height =parseInt(document.querySelector('#height').value)
  const weight =parseInt(document.querySelector('#weight').value)
  const results =document.querySelector('#results')

if(height===''||height<0|| isNaN(height)){
  results.innerHTML ="please give valid number in weight"
}
else if(weight===''||weight<0|| isNaN(weight)){
  results.innerHTML ="please give valid number in weight"
}
else{
// results.innerHTML=(weight/ ((height*height)/10000)).toFixed(2)
// iska better way hai
const bmi =(weight/ ((height*height)/10000)).toFixed(2);
// showing results 
results.innerHTML = `<span>${bmi}</span>`
  if(bmi<18.6){
    category.innerHTML ="under weight"
  }
  if(bmi>18.6 && bmi<24.9){
    category.innerHTML ="normal weight"
  }
  if(bmi>24.9){
    category.innerHTML ="over weight"
  }

}



})