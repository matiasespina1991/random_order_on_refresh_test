## Function that shuffles the order of Flexbox elements in an HTML page



Testing a way to achieve a lightweight javascript function that will set a random order of certain HTML elements on each refresh.

```javascript
var elements = document.getElementsByClassName('elementClass');`

    function shuffleElementsOrder() {
    for (var i=0;i<elements.length;i++){
        var randomNumber = Math.floor(Math.random() * elements.length);
        elements[i].style.order = randomNumber;
        }
    }

shuffleElementsOrder()
```


### Demo:

URL: https://matiasespina1991.github.io/random_order_on_refresh/

<img style="width:700px;" src="https://s4.gifyu.com/images/outputec5cea5db9670451.gif" alt="" /> 
