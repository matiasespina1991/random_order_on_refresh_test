var elementsNodeList = document.getElementsByClassName('element-wrapper');
// var elementsArray = Array.prototype.slice.call(elementsNodeList)
// var elementsArray = [...elementsNodeList]

for (var i=0;i<elementsNodeList.length;i++){
    var randomNumber = Math.floor(Math.random() * elementsNodeList.length);
    elementsNodeList[i].style.order = randomNumber;
}