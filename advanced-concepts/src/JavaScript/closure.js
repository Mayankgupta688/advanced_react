// Closure is capability of a function to remember the enviroment where it was created... 

var data = "Mayank";

function getData() {
    console.log(window.data)
}

getData();


function outerFunction() {
    var userCount = 10;

    function innerFunction() {
        var otherData = "10"
        alert(userCount);
        alert(data);
    }
    innerFunction();
    alert(otherData);
    
}

outerFunction();