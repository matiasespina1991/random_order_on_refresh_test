## Function that shuffles the order of certain objects with the same class in an HTML page



Testing a way to achieve a lightweight javascript function that will set a random order of certain HTML elements on each refresh.

1) Set 'display: flexbox' on the elements to be shuffled.
```css
.objectsClass {
display: flexbox;
}
```

2) Use the following script.
```javascript
var objectsArray = document.getElementsByClassName('objectsClass');`

    function shuffleOrder() {
    for (var i=0;i<objectsArray.length;i++){
        var randomNumber = Math.floor(Math.random() * objectsArray.length);
        elements[i].style.order = randomNumber;
        }
    }

shuffleOrder()
```


### Demo:

URL: https://matiasespina1991.github.io/random_order_on_refresh/

<img width="700px;" src="https://s4.gifyu.com/images/outputec5cea5db9670451.gif" alt="" /> 
