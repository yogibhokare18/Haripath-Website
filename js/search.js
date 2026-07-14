const search=document.getElementById("search");

search.addEventListener("keyup",()=>{

let value=search.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

card.style.display=

card.innerText.toLowerCase().includes(value)

?

"block"

:

"none";

});

});


