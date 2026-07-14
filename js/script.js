/*function updateClock(){

let now=new Date();

document.getElementById("date").innerHTML=
now.toLocaleDateString("mr-IN");

document.getElementById("time").innerHTML=
now.toLocaleTimeString("mr-IN");

}

setInterval(updateClock,1000);

updateClock();*/

alert("Script Loaded");

function updateClock() {
    const date = document.getElementById("date");
    const time = document.getElementById("time");

    if (date && time) {
        let now = new Date();

        date.innerHTML = now.toLocaleDateString("mr-IN");
        time.innerHTML = now.toLocaleTimeString("mr-IN");
    }
}

setInterval(updateClock, 1000);
updateClock();