var button = document.getElementById("clickButton");
var clicksText = document.getElementById("clickCount");
var clicks = 0;

button.addEventListener("click", ()=>{
    clicks++;
    clicksText.innerHTML = clicks;
    console.log(clicks);
})