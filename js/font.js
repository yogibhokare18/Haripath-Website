let size=21;

const cards=document.querySelectorAll(".card p");

document.getElementById("increase").onclick=()=>{

size+=2;

cards.forEach(c=>{

c.style.fontSize=size+"px";

});

}

document.getElementById("decrease").onclick=()=>{

if(size>14){

size-=2;

cards.forEach(c=>{

c.style.fontSize=size+"px";

});

}

}

