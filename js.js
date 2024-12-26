                               
const day = document.getElementById("day")
const hrs = document.getElementById("hrs")
const min = document.getElementById("min")
const sec = document.getElementById("sec")

const currentYear = new Date().getFullYear()
console.log(currentYear);


const newYear = new Date(`1 Jan ${currentYear + 1} 00:00:00`)
console.log(newYear);

function taimer() {
    const todayDate = Date.now()
    console.log(todayDate);
    const kunder = newYear - todayDate
    console.log(kunder);
    const kun = Math.floor(kunder / 1000 / 60 / 60 / 24)
    const sagat = Math.floor((kunder / 1000 / 60 / 60) % 24)
    const minuty = Math.floor((kunder / 1000 / 60) % 60)
    const secundy = Math.floor((kunder / 1000) % 60)

    day.innerHTML = kun < 10 ? "0" + kun : kun
    hrs.innerHTML = sagat < 10 ? "0" + sagat : sagat
    min.innerHTML = minuty < 10 ? "0" + minuty : minuty
    sec.innerHTML = secundy < 10 ? "0" + secundy : secundy
}
setInterval(taimer, 1000)

taimer()

 

//email---

let form=document.getElementById('form');
let messange=document.getElementById('messange');
    
form.addEventListener('submit',function(event){
    event.preventDefault()
    let emailValue=document.getElementById('email').value;
   
    if(!emailValue.includes('@')){
messange.textContent='Write it correctly email'
    } else {
        messange.style.color='green'
        messange.textContent='Сиз жызылдыныз'
    }

})
window.onscroll = function() {
    let topBtn = document.querySelector('.top-btn');
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let middlePosition = windowHeight / 2;

    if (scrollPosition >= middlePosition) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};