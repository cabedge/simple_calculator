"use strict";
// Left Side Variavbles
const numberEl = document.querySelectorAll(".number")
const dotEl = document.querySelector(".dot")
const mainScreenEl = document.querySelector(".mainScreen") 
const secondScreenEl = document.querySelector(".secondScreen")
const equalEl = document.querySelector(".equalOperator")
const plusEl = document.querySelector('.plusOperator')
const minusEl = document.querySelector(".minusOperator")
const timesEl = document.querySelector('.timesOperator')
const divideEl = document.querySelector(".divideOperator")
const backSpaceEl = document.querySelector(".backspace")
const closeParenthesisEl = document.querySelector(".closeParenthesis")
const openParenthesisEl = document.querySelector(".openParenthesis")
const clearEl = document.querySelector(".clear")

mainScreenEl.textContent = " "
secondScreenEl.textContent = " "

numberEl.forEach(function(numberButtonClick){
  numberButtonClick.addEventListener('click', function(){
    let numberValue = Number(numberButtonClick.textContent)
    mainScreenEl.textContent += numberValue
  })
})
equalEl.addEventListener('click',function(){
  mainScreenEl.textContent = mainScreenEl.textContent.replaceAll("×","*");
  mainScreenEl.textContent = mainScreenEl.textContent.replaceAll("÷","/");
  mainScreenEl.textContent = mainScreenEl.textContent.replaceAll("^","**");
  mainScreenEl.textContent = mainScreenEl.textContent.replaceAll("E","*10**");
  mainScreenEl.textContent = mainScreenEl.textContent.replaceAll("e","*(2.71828182846)")
  mainScreenEl.textContent = mainScreenEl.textContent.replaceAll("π", "*3.14159265359")
  
  try{
    mainScreenEl.textContent = eval(mainScreenEl.textContent)
  }
  catch(err){
      if (err instanceof SyntaxError) {
        alert('SyntaxError');
      }
    }
  secondScreenEl.textContent = mainScreenEl.textContent
  mainScreenEl.textContent = " "
})

plusEl.addEventListener('click',function(){
  mainScreenEl.textContent += plusEl.textContent
})
dotEl.addEventListener("click",function(){
  mainScreenEl.textContent += dotEl.textContent
})
minusEl.addEventListener("click",function(){
  mainScreenEl.textContent += "-"
})
timesEl.addEventListener("click",function(){
  mainScreenEl.textContent += "×"
})
divideEl.addEventListener("click",function(){
  mainScreenEl.textContent += "÷"
})
backSpaceEl.addEventListener("click",function(){
  mainScreenEl.textContent = mainScreenEl.textContent.slice(0,-1)
})
closeParenthesisEl.addEventListener("click",function(){
  mainScreenEl.textContent += ")"
})
openParenthesisEl.addEventListener("click",function(){
  mainScreenEl.textContent += "("
})
clearEl.addEventListener("click",function(){
  mainScreenEl.textContent = ""
})

// Right Side Variavbles

const superScriptEl = document.querySelector(".superScript")
const squareRootEl = document.querySelector(".squareRoot")
const logOperatorEl = document.querySelector(".logOperator")
const naturalLogEl = document.querySelector(".naturalLog")
const expEl = document.querySelector(".exp")
const tanOperatorEl = document.querySelector(".tanOperator")
const sinOperatorEl = document.querySelector(".sinOperator")
const cosOperatorEl = document.querySelector(".cosOperator")
const factorialEl = document.querySelector(".factorial")
const exponentOperatorEl = document.querySelector(".exponentOperator")
const pieOperatorEl = document.querySelector(".pieOperator")
const answerOperatorEl = document.querySelector(".answerOperator")

squareRootEl.addEventListener("click",function(){
  mainScreenEl.textContent = Math.sqrt(mainScreenEl.textContent)
})
superScriptEl.addEventListener("click",function(){
  mainScreenEl.textContent += "^"
})
logOperatorEl.addEventListener("click",function(){
  mainScreenEl.textContent = Math.log10(mainScreenEl.textContent)
})
naturalLogEl.addEventListener("click",function(){
  mainScreenEl.textContent = Math.log(mainScreenEl.textContent)
})
expEl.addEventListener("click",function(){
  mainScreenEl.textContent += "E"
})
tanOperatorEl.addEventListener("click",function(){
  mainScreenEl.textContent = Math.tan(mainScreenEl.textContent)
})
sinOperatorEl.addEventListener("click",function(){
  mainScreenEl.textContent = Math.sin(mainScreenEl.textContent)
})
cosOperatorEl.addEventListener("click",function(){
  mainScreenEl.textContent = Math.cos(mainScreenEl.textContent)
})
factorialEl.addEventListener("click",function(){
  const inputValueScreen = mainScreenEl.textContent
  function factorial(inputValue){
    if(inputValue == 0){
      return mainScreenEl.textContent = 1
    }else
      return inputValue * factorial(inputValue-1)
  }
  mainScreenEl.textContent = factorial(inputValueScreen)
})
exponentOperatorEl.addEventListener("click",function(){
  mainScreenEl.textContent += "e"
})
pieOperatorEl.addEventListener("click",function(){
  mainScreenEl.textContent += "π"
})
answerOperatorEl.addEventListener("click",function(){
  mainScreenEl.textContent += secondScreenEl.textContent
})