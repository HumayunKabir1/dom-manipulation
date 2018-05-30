/* Task 1 */

var heading = document.getElementById('heading');
console.log(heading.InnerText);
/* Task 2 using plain JavaScript */
//task 2a
var textBin= document.getElementById('textBin');
textBin.addEventListener('click', function(){
    var task2 = document.getElementById('task2a');
    var paragraph = document.createElement('p');
    paragraph.innerText = "Hello World";
    task2.appendChild(paragraph);
});

/ Task 2b
function changeBGcolor(event){
    ver body = document.getElementsByTagName ('body'){0}
    if(event.target.innerText=="red")
    body.style.backgroundColor = 'red' 
}
 if(event.target.innerText=="green")
    body.style.backgroundColor = 'green' 
    }
    }
    // Task 2c
    function redirectToGoogle (){
        window.location.assign('http://google.com')
    }
    /* Tast 4 using jQuery 