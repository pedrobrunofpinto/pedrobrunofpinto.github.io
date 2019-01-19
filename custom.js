$( document ).ready(function() {
	$("nav").on("click", function(){
		$("ul").toggleClass("mylist", 500);
		$(".second").toggleClass("second-off", 200);
		$(".first").toggleClass("first-rotate");
		$(".third").toggleClass("third-rotate");
	})
	$(window).on("scroll", function(){
		if($(window).scrollTop()){
			$("header").addClass("headeryeallow");
			$("h1").addClass("h1black");
			$("div").addClass("divblack");
		} else {
		$("header").removeClass("headeryeallow");
		$("h1").removeClass("h1black");
		$("div").removeClass("divblack");
		}
	})
	// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});

window.onorientationchange = function() { 
    var orientation = window.orientation; 
        switch(orientation) { 
            case 0:
            case 90:
            case -90: window.location.reload(); 
            break; } 
};