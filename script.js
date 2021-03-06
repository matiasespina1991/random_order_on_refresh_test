var elements = document.getElementsByClassName('element-wrapper');

    function shuffleElementsOrder() {
    for (var i=0;i<elements.length;i++){
        var randomNumber = Math.floor(Math.random() * elements.length);
        elements[i].style.order = randomNumber;
        }
    }

shuffleElementsOrder()