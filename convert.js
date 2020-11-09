var button1 = document.getElementById('dropdownMenuButton1')
var parent1 = document.getElementById('dropdown-parent1')
var button2 = document.getElementById('dropdownMenuButton2')
var parent2 = document.getElementById('dropdown-parent2')

fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(response => {
    for (var i=0; i<response.length; i++) {
        var a1 = document.createElement('a');
        a1.className += 'dropdown-item';

        var img = document.createElement('img');
        var flag = response[i]['flag'];
        img.src = flag;
        img.width = "25";
        img.height = "25";
        a1.appendChild(img);

        var span1 = document.createElement('span');
        span1.setAttribute("style", "position: relative; font-size: 0.9em;");
        var currency = response[i]['currencies'][0];
        
        var a2 = a1.cloneNode(true);
        var span2 = span1.cloneNode(true);

        span1.innerHTML = ' ' + currency['name'] + 
                          ' (<span style="position: relative; font-size: 0.9em;">' + 
                          currency['code'] + '</span>) ';
        span2.innerHTML = ' ' + currency['name'] + 
                          ' (<span style="position: relative; font-size: 0.9em;">' + 
                          currency['code'] + '</span>) ';
        a1.appendChild(span1);
        a2.appendChild(span2);

        parent1.appendChild(a1);
        parent2.appendChild(a2);

        a1.onclick = (event) => {
            button1.innerHTML = event.target.closest('a').children[1].innerHTML;
            button1.children[0].style.color = "white";
            button1.children[0].setAttribute("id", "money1");
            console.log(button1.children[0]);
        }

        a2.onclick = (event) => {
            button2.innerHTML = event.target.closest('a').children[1].innerHTML;
            button2.children[0].style.color = "white";
            button2.children[0].setAttribute("id", "money2");
            console.log(button2.children[0]);
        }
    }
})