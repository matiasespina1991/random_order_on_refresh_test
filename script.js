var elementsNodeList = document.getElementsByClassName('element-wrapper');

for (var i=0;i<elementsNodeList.length;i++){
    var randomNumber = Math.floor(Math.random() * elementsNodeList.length);
    elementsNodeList[i].style.order = randomNumber;
}

