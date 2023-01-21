const noButton = document.querySelector(".no");
const textBox = document.querySelector(".text-box-1");

noButton.addEventListener("click", function() {
    textBox.classList.add("hide");
})

const yesButton = document.querySelector(".yes");

yesButton.addEventListener("click", function(){
    textBox.classList.remove("hide")
})

const no2Button = document.querySelector(".no2");
const textBox2 = document.querySelector(".text-box-2");

no2Button.addEventListener("click", function() {
    textBox2.classList.add("hide");
})

const yes2Button = document.querySelector(".yes2");

yes2Button.addEventListener("click", function(){
    textBox2.classList.remove("hide")
})