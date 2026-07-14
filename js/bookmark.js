document.querySelectorAll(".fav").forEach(btn=>{

btn.onclick=()=>{

btn.innerHTML="⭐ Saved";

localStorage.setItem(

btn.parentElement.id,

"saved"

);

}

});