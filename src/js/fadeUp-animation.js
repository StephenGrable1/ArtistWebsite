$(document).ready(function(){
  var socialLogoAnimation = {
    init:function() {
      this.casheDom();
      this.bindEvents();
    },
    casheDom: function(){
      this.$el = $('.follow-container');
      this.$sectionPosition = this.$el.position().top;
      this.$followContainer = this.$el.find('.img-container');
    },
    bindEvents: function() {
      var socialButtons = this.$followContainer;
      var sectionPosition = this.$sectionPosition;
      this.watchWindow(sectionPosition, socialButtons);
    },
    watchWindow: function(elementPosition, elementContainer) {
        $(window).on('scroll',function() {
            var bottomWindow = $(window).scrollTop() + $(window).height();

             if (bottomWindow > elementPosition) {
                 socialLogoAnimation.animateButtons(elementContainer);
                 $(window).off('scroll');
               }
          });
    },
    animateButtons: function(btn){
      $(btn).velocity("transition.slideUpIn");
    }
  }
  socialLogoAnimation.init();

});
