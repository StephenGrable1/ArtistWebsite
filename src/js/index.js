// Handle scrolling feature
$(document).ready(function () {
  var handleScroll = {
      init: function(){
        this.casheDom();
        this.scrollOnLoad();
        this.scrollOnClick();
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
      scrollToSection: function(href) {
        $(href).velocity('scroll', {
          duration: 900,
          easing: 'ease-in-out-sine'
        });
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
