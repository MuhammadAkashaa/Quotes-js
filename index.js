let text = document.getElementById('text');
let next = document.getElementById('next');
let value = 0
let array = ["Any fool can write code that a computer can understand","First, solve the problem.","Experience is the name everyone gives to their mistakes",
"In order to be irreplaceable, one must always be different","Java is to Javascript what car is to Carpet"]
next.addEventListener("click",function(){
    text.textContent = array[value]
    value++
})