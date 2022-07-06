var min =+prompt("Enter the mintues");
var sec =+prompt("Enter the seconds");

var timer = setInterval(function(){
    if(sec===-1){
        min--
        sec=59   
    }
    if(min===0 && sec===0){
        clearInterval(timer)
        console.log("Time is up")
    }
    if(min<10){
        console.log("0"+min+":"+sec)
    }
    else if(sec<10){
        console.log(min+":"+"0"+sec)
    }
    else{
        console.log(min+":"+sec)
    }
    sec--
},1000)