// Handle refresh cases to always start at top on load
$(document).ready(function() {
  if(location.hash) {
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 1)

  } else {
    window.onbeforeunload = function() {window.scrollTo(0,0);}
  }
})

// Handle scrolling feature
$(window).on('load', function () {
  var handleScroll = {
      init: function(){
        this.casheDom();
        this.scrollOnLoad();
        this.scrollOnClick();
        this.fadeIn();
      },
      casheDom: function() {
        this.$el = $('html, body');
        this.$li = this.$el.find('li');
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
      },
      scrollOnLoad: function() {
        if (location.hash) {
          var href = location.hash;
            setTimeout(function() {
              window.scrollTo(0, 0);
              handleScroll.scrollToSection(href);
            }, 1)
          };
      }
  }

  handleScroll.init();
});
