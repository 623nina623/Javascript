let p = document.getElementById("text");
let fontSize = 1;

document.getElementById("zoom_in").addEventListener("click" , function(){
    fontSize += 0.1;
    p.style.fontSize = fontSize + "em";
});

document.getElementById("zoom_out").addEventListener("click" , function(){
    console.log(zoom_out);
    fontSize -= 0.1;
    p.style.fontSize = fontSize + "em";
});
