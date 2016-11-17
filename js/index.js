// if hash is present prevent jumping to section and scroll to top
if (location.hash) {
  setTimeout(function() {
    window.scrollTo(0, 0);
  }, 1)
};

$(window).on("load", function() {

  var handleScroll = {
      test: 'test',
      init: function(){
        this.casheDom();
        this.scrollOnLoad();
        this.scrollOnClick();
        this.fadeIn();

      },
      casheDom: function() {
        this.$el = $('html, body');
        this.$li = this.$el.find('li');
        this.$section = this.$el.find('.section');
        console.log('casheDom');
      },
      scrollOnClick: function() {
        this.$li.click(function() {
              var href = $(this).parent().attr('href');
              handleScroll.scrollToSection(href);
          })
      },
      fadeIn: function() {
        $(window).scroll(function() {
            $('.section').each(function(i) {
              var bottomSection = $(this).position().top + $(this).outerHeight();
              var bottomWindow = $(window).scrollTop() + $(window).height();

              if(bottomWindow > (bottomSection - 300)) {
                $(this).animate({'opacity':'1'}, 1500);
              }

            });
          });
      },
      scrollToSection: function(href) {
        this.$el.animate({
          scrollTop: $(href).offset().top
        }, 'slow');
        console.log('scrollToSection: ', href);
      },
      scrollOnLoad: function() {
        if (location.hash) {
          var href = location.hash;
          handleScroll.scrollToSection(href);
      }
    }
};

handleScroll.init();

});

//
//
//   //If url has a hash, set webpage to top and slow scroll to location
//   if (location.hash) {
//   setTimeout(function() {
//     window.scrollTo(0, 0);
//     $('html, body').animate({
//       scrollTop: $(location.hash).offset().top
//     }, 'slow');
//   }, 1);
// }
//   console.log('index.js here')
//   $(window).scroll(function() {
//     $('.section').each(function(i) {
//       var bottomSection = $(this).position().top + $(this).outerHeight();
//       var bottomWindow = $(window).scrollTop() + $(window).height();
//
//       if(bottomWindow > (bottomSection - 300)) {
//         $(this).animate({'opacity':'1'}, 1500);
//       }
//
//     });
//   });
//
//   $("li").click(function() {
//       var href = $(this).parent().attr('href');
//       scrollSlow(href);
//   })
//
//   var scrollSlow(href) = function($('html, body').animate({
//     scrollTop: $(href).offset().top
//   }, 'slow');
// }));
