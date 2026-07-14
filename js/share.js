document.getElementById("shareBtn").onclick=()=>{

if(navigator.share){

navigator.share({

title:"हरिपाठ",

text:"संत ज्ञानेश्वर महाराजांचा हरिपाठ",

url:location.href

});

}

else{

navigator.clipboard.writeText(location.href);

alert("Link Copied");

}

}