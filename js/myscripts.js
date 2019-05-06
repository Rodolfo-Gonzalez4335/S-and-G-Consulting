$(document).ready(function(){
 // Add smooth scrolling to all links
 $("a.nav-link").on('click', function(event) {
    var hash;
   // Make sure this.hash has a value before overriding default behavior
   if (this.hash === "#services") {
     // Prevent default anchor click behavior
     event.preventDefault();

     // Store hash
    hash = this.hash;

     // Using jQuery's animate() method to add smooth page scroll
     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
     $('html, body').animate({
       scrollTop: $("#HOME").offset().top
     }, 800, function(){

       // Add hash (#) to URL when done scrolling (default click behavior)
       window.location.hash = hash;
     });
   }
    else if (this.hash === "#location")
    {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
     hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $("#LOCATION").offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
 });
});
