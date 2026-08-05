// =======================
// ZENO REGEDIT
// script.js
// =======================

// Mở link tải
function openLink(url){
    window.open(url,"_blank");
}

// Tìm kiếm file
const search = document.getElementById("search");

if(search){

search.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

let text=card.innerText.toLowerCase();

card.style.display=text.includes(value) ? "block" : "none";

});

});

}

// Hiệu ứng hiện thẻ

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(30px)";
card.style.transition=".6s";

observer.observe(card);

});

// Hiển thị năm hiện tại nếu có footer

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}

console.log("ZENO REGEDIT Loaded");