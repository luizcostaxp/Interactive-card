const inputNumber=document.getElementById("input-number");

const inputName=document.getElementById("inpute-name");

const inputMonth=document.getElementById("input-month");

const inputYear=document.getElementById("input-year");

const inputCvc=document.getElementById("input-cvc");

const cardNumber=document.getElementById("number");

const cardName=document.getElementById("name");

const cardMonth=document.getElementById("month");

const cardYear =document.getElementById("year");

const cardCvc = document.getElementById("cvc");

const submitBtn= document.getElementById("submit-btn");

const form=document.querySelector("form");

const done = document.querySelector(".thank-you");

function setCardNumber(e){
    cardNumber.innerText = format(e.target.value);
}

function setCardName(e){
    cardName.innerText= format(e.target.value);
}

function setCardMonth(e){
    cardMonth.innerText=format(e.target.value);
}


inputNumber.addEventListener("keyup", setCardNumber);
inputName.addEventListener("keyup", setCardName);
inputMonth.addEventListener("keyup", setCardMonth);

