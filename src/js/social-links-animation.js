$(document).ready(function(){
  var socialLogoAnimation = {
    init:function() {
      this.casheDom();
      this.bindEvents();
    },
    casheDom: function(){
      this.$el = $('.follow-container');
      this.$sectionPosition = this.$el.position().top;
      this.$followBtn = this.$el.find('.followBtn');
    },
    bindEvents: function() {
      var socialButtons = this.$followBtn;
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
      $(btn).stop().velocity("transition.slideUpIn", {stagger: 75, drag: true });
    }
  }
  socialLogoAnimation.init();

});
