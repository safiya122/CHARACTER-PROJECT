var phineas="https://static.wikia.nocookie.net/disney/images/c/c1/Profile_-_Phineas_Flynn.jpg/revision/latest/top-crop/width/360/height/450?cb=20190314205355";
var ferb="https://static.wikia.nocookie.net/disney/images/2/25/FerbGuitar.jpg/revision/latest/top-crop/width/360/height/450?cb=20160315223142";
var dr="https://static.wikia.nocookie.net/disney/images/4/41/DoofenshmirtzFull.jpg/revision/latest?cb=20190819173522";
var candice="https://static.wikia.nocookie.net/phineasandferb/images/1/18/Profile_-_Candace_Flynn.png/revision/latest?cb=20200401181755";
var perry="https://pbs.twimg.com/profile_images/1260070491353690112/wRddYZiC_400x400.jpg";
var vanessa="https://static.wikia.nocookie.net/phineasandferb/images/a/ab/Profile_-_Vanessa_Doofenshmirtz.PNG/revision/latest/top-crop/width/360/height/450?cb=20200401183907";
 var baljeet="https://i.pinimg.com/originals/79/7c/52/797c528183a28934d974dc622d2b0b31.jpg";
var isabella="https://static.wikia.nocookie.net/phineasandferb/images/8/8c/Profile_-_Isabella_Garcia-Shapiro.PNG/revision/latest/top-crop/width/360/height/450?cb=20200401182003";
    
      var counter = 0;
    
    
    
    $(".submit").click(function(){
    var character= $(".number").val();
    var happy=$(".happy").val();
    var pick=$(".school").val();
    
   if (parseInt(character)===2 && happy==="yes" && pick==="summer break") {
       $(".results").show();
      $(".results").append("<img src='https://static.wikia.nocookie.net/disney/images/2/25/FerbGuitar.jpg/revision/latest/top-crop/width/360/height/450?cb=20160315223142'>");
   }
   
 else if(parseInt(character)===5 && happy==="yes" && pick==="summer break") {
       $(".results").show();
      $(".results").append("<img src='https://static.wikia.nocookie.net/disney/images/c/c1/Profile_-_Phineas_Flynn.jpg/revision/latest/top-crop/width/360/height/450?cb=20190314205355'>");
   }                  
          
  

      else if(parseInt(character)===5 && happy==="no" && pick==="school") {
       $(".results").show();
      $(".results").append("<img src='https://static.wikia.nocookie.net/disney/images/4/41/DoofenshmirtzFull.jpg/revision/latest?cb=20190819173522'>");
   } 
        
     else if(parseInt(character)===2 && happy==="no" && pick==="school") {
       $(".results").show();
      $(".results").append("<img src='https://static.wikia.nocookie.net/phineasandferb/images/1/18/Profile_-_Candace_Flynn.png/revision/latest?cb=20200401181755'>");
   }    
        
       else if(parseInt(character)===2 && happy==="yes" && pick==="school") {
       $(".results").show();
      $(".results").append("<img src='https://i.pinimg.com/originals/79/7c/52/797c528183a28934d974dc622d2b0b31.jpg'>");
   }       
        
         else if(parseInt(character)===5 && happy==="yes" && pick==="school") {
       $(".results").show();
      $(".results").append("<img src='https://static.wikia.nocookie.net/phineasandferb/images/8/8c/Profile_-_Isabella_Garcia-Shapiro.PNG/revision/latest/top-crop/width/360/height/450?cb=20200401182003'>");
   }          
        
           else if(parseInt(character)===5 && happy==="no" && pick==="summer break") {
       $(".results").show();
      $(".results").append("<img src='https://pbs.twimg.com/profile_images/1260070491353690112/wRddYZiC_400x400.jpg'>");
   }     
     
          else if(parseInt(character)===2 && happy==="no" && pick==="summer break") {
       $(".results").show();
      $(".results").append("<img  src='https://static.wikia.nocookie.net/phineasandferb/images/a/ab/Profile_-_Vanessa_Doofenshmirtz.PNG/revision/latest/top-crop/width/360/height/450?cb=20200401183907'>");}
    
        
        
        
       
else {
     $(".results").show();
     $(".results").text("Error Please check your answer!");
     $(".results").css("color","red");  
    }  
        
        
    counter=counter+1;
    
    $(".counter").text("The button was clicked " + counter + " times");
       

  
    });


