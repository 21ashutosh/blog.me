$(document).ready(function(){

    // Blog

    $(".blog-post-1").click(function(){
      if ($("#blog-wrapper").hasClass("showblog1")) {         
          $("#blog-wrapper").removeClass("showblog1");
          setTimeout(function(){
            $(".blog-post-1").removeClass("z");
        }, 500);
        } else {
          $("#blog-wrapper").addClass("showblog1");
          setTimeout(function(){
            $(".blog-post-1").addClass("z");
        }, 0);
        }
    })

    $(".blog-post-2").click(function(){
      if ($("#blog-wrapper").hasClass("showblog2")) {         
          $("#blog-wrapper").removeClass("showblog2");
          setTimeout(function(){
            $(".blog-post-2").removeClass("z");
        }, 500);
        } else {
          $("#blog-wrapper").addClass("showblog2");
          setTimeout(function(){
            $(".blog-post-2").addClass("z");
        }, 0);
        }
    })

    $(".blog-post-3").click(function(){
      if ($("#blog-wrapper").hasClass("showblog3")) {         
          $("#blog-wrapper").removeClass("showblog3");
          setTimeout(function(){
            $(".blog-post-3").removeClass("z");
        }, 500);
        } else {
          $("#blog-wrapper").addClass("showblog3");
          setTimeout(function(){
            $(".blog-post-3").addClass("z");
        }, 0);
        }
    })

});