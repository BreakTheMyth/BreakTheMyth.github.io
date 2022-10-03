var start =  document.getElementById("start");

start.onclick = function() {
    if(document.getElementById("ka") != null) {
        document.getElementById("ka").remove();
    }
    var num = Math.trunc(1 + Math.random()*79);
    start.style.top = "90%";
    var ka = document.createElement("div");
    ka.style.backgroundImage = "url(res/" + num +".png)";
    ka.style.width = "25vw";
    ka.style.height = "30vw";
    ka.style.backgroundSize = "cover";
    ka.style.borderRadius = "20px";
    ka.style.position = "absolute";
    ka.style.left = "50%";
    ka.style.transform = "translateX(-50%)";
    ka.id = "ka";
    document.body.appendChild(ka);
}
