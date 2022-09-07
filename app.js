var hour = new Date().getHours();

if(hour >= 6 && hour <= 12) {   
    document.body.style.backgroundColor = "pink";
    alert('Good Morning')
}

else if(hour>12 && hour <= 18) {
    document.body.style.backgroundColor = "yellow";
    alert('Good Afternoon')
}
else if(hour >18 || hour <6) {
    document.body.style.backgroundColor = "black";
    alert('Good Night')
}
