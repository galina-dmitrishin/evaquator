$(function() {
   
    
        
    var subhead = $("#subhead"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();
    
    
      /* Fixed subhead */
    checkscroll(scrollOffset);
        
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkscroll(scrollOffset);
        
    });
    
   function checkscroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            subhead.addClass("fixed");
        } else {
            subhead.removeClass("fixed");
        }
       
   }
    
    
       /* Smooth scroll */  
   $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
       
        var $this = $(this),  
            blockid = $(this).data('scroll'),
            blockoffset = $(blockid).offset().top;
       
        
        $("#nav a").removeClass("active");
        $this.addClass("active");
    
        $("html, body").animate({
        scrollTop: blockoffset
        }, 500);                                           
                                               
    });   
                                           
     
    
    
    
    
    
    
    /* console.log(introH)Smooth scroll*/ 
    
    
});