function myFunction() {
    //creating new variable and linking it the the css id navbar
      var x = document.getElementById("mynavbar");
    
      if (x.className === "navbar") {
        x.className += " responsive";
      } else {
        x.className = "navbar";
      }
    
    }

    function message(){
      document.getElementById("thanks").innerHTML = "Thanks for your Message"
    }