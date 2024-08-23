let imgs = document.querySelectorAll(".projects .cards a");
let nxtbtn = document.querySelector(".slide-controlers .next");
let prevbtn = document.querySelector(".slide-controlers .prev");

let slbtn = document.querySelector(".slider-container .slide-number");

let slnum = 1;
window.localStorage.setItem("slnum",1);
ulindic = document.createElement("ul")
for(let i=0 ; i<imgs.length ; i++){
    let li= document.createElement("li")
    let lich =document.createTextNode(`${i+1}`)
    li.appendChild(lich);
    ulindic.appendChild(li);
}
document.querySelector(".slide-controlers .indicators").appendChild(ulindic)

window.onload = update();
function update(){
    for(let i = 1 ; i<imgs.length+1 ; i++){
        if (i==window.localStorage.slnum){
            imgs[i-1].classList.add("active")
            document.querySelector(`.slide-controlers ul li:nth-child(${i})`).classList.add("active");
        }else{
            imgs[i-1].classList.remove("active")
            document.querySelector(`.slide-controlers ul li:nth-child(${i})`).classList.remove("active");
        }
    }

    if(window.localStorage.slnum == 1){
        prevbtn.classList.add("disabled")
    }else if (window.localStorage.slnum == imgs.length){
        nxtbtn.classList.add("disabled")
    }else{
        nxtbtn.classList.remove("disabled")
        prevbtn.classList.remove("disabled")
    }
}

nxtbtn.addEventListener("click" , (e)=>{
    if (window.localStorage.slnum == imgs.length){
        e.preventDefault()
    }else{
        window.localStorage.slnum = +window.localStorage.slnum + 1 ; 
        update();
    }
})
prevbtn.addEventListener("click" , (e)=>{
    if (window.localStorage.slnum == 1){
        e.preventDefault()
    }else{
        window.localStorage.slnum = +window.localStorage.slnum - 1 ; 
        update();
    }
})


let incarr  = [...document.querySelectorAll(".slide-controlers .indicators ul li")];
incarr.forEach(el => el.addEventListener("click", ()=> {
    window.localStorage.slnum= el.textContent; 
    update();
}))



// cards hover effect 

let cards= document.querySelectorAll(".contact.c2 .cards .card");
console.log(cards)

// for(let i=0 ; i<cards.length ;i++){
//     setTimeout(()=>{
//         for(let j = 0 ; j < cards.length; j++){
//             if(j == i){
//                 cards[j].classList.add("hovered")
//             }else{
//                 cards[j].classList.remove("hovered")
//             }console.log(cards[i])
//         }
//     },4000)
// }
let i =-1; 
setInterval(
    ()=>{
        i++; 
        for(let j = 0 ;j<cards.length ;j++){
            if(j == i){
                cards[j].classList.add("hovered")
                }else{
                cards[j].classList.remove("hovered")
                }
        }
        if(i == cards.length){i=-1}
    }
    ,700
)
setInterval(()=>{
    window.localStorage.slnum = +window.localStorage.slnum + 1 ; 
    update();
    if( window.localStorage.slnum == imgs.length ){
        window.localStorage.slnum =  1 ; 
    }
},2000)