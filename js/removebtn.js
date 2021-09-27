const removesButton =document.getElementsByClassName('removed');
         for(const removed of removesButton){
       
             
          removed.addEventListener('click', function(event){
             document.getElementById('delete').
                          
             removeChild(removed);
              
            event.target.parentNode.removeChild(event.target);

             });
            }