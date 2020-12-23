function SetAllColor_Day(){
    document.querySelector('body').style.color='black';
    document.querySelector('body').style.backgroundColor='white';
    var links = document.querySelectorAll('a');
    var i=0;
    while(i<links.length){
        links[i].style.color='blue' ;
        i+=1;
    }    
}

function SetAllColor_Night(){
    document.querySelector('body').style.color='white';
    document.querySelector('body').style.backgroundColor='black';
    var links = document.querySelectorAll('a');
    var i=0;
    while(i<links.length){
        links[i].style.color='powderblue' ;
        i+=1;
    }    
}   