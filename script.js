var elementsNodeList = document.getElementsByClassName('element-wrapper');


function shuffleElementsOrder() {
for (var i=0;i<elementsNodeList.length;i++){
    var randomNumber = Math.floor(Math.random() * elementsNodeList.length);
    elementsNodeList[i].style.order = randomNumber;
}
}


