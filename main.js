   var slide = document.getElementById("slide");
    var up = document.getElementById("up");
    var downArrow = document.getElementById("downArrow");
   
   let x = 0 ;
   
   up.onclick= function(){
     
     if (x > '-900'){
       x = x - 300 ;
       slide.style.top = x + "px" ;
     }
   } 
   
   downArrow.onclick= function(){
     
     if (x < 0 ){
       x = x + 300 ;
       slide.style.top = x + "px" ;
     }
     
     
     
   }  
   
