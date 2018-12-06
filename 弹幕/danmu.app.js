var launch=document.getElementById("shut");
var content=document.getElementById("article");
var textItem=document.getElementById("wall-content");
var arr=[];j=0;
function theLaunch() {
    var text = content.value;
    if (text!= "") {
        arr.push(text);
        var arrNow = arr[arr.length - 1];
        function theNumber(j) {return "data_"+j;}
        var ement = document.createElement("div");
        ement.setAttribute("class", "div-element");
        ement.setAttribute("id", theNumber(j++));
        ement.innerHTML =arrNow;
        textItem.appendChild(ement);
        var number= Math.floor(Math.random() * 385 + 1) - 1;
        textItem.style.position="relative";
        textItem.style.float="right";
        textItem.childNodes[j-1].style.position="relative";
        textItem.childNodes[j-1].style.top=''+number+'px';
        textItem.childNodes[j-1].style.fontWeight=500;
        textItem.childNodes[j-1].style.fontSize="120%";
        textItem.childNodes[j-1].style.color=getRandomColor();

    }

}
var getRandomColor = function() {
    return '#' + (function(h) {
        return new Array(7 - h.length).join("0") + h
    })((Math.random() * 0x1000000 << 0).toString(16))
}
document.onkeyup = function (event) {
    if (event.keyCode == 13) {
        theLaunch();
    }
};

launch.addEventListener("click",theLaunch,false);
