$(document).ready(function(){
  var socialLogoAnimation = {
    init:function() {
      this.casheDom();
      this.bindEvents();
    },
    casheDom: function(){
      this.$el = $('.follow-container');
      this.$sectionPosition = this.$el.position().top;
      this.$imgContainer = this.$el.find('.img-container');
    },
    bindEvents: function() {
      var socialButtons = this.$imgContainer;
      var sectionPosition = this.$sectionPosition;
      this.watchWindow(sectionPosition, socialButtons);
    },
    watchWindow: function(elementPosition, elementContainer) {
        $(window).on('scroll',function() {
            var bottomWindow = $(window).scrollTop() + $(window).height();
             console.log(bottomWindow, elementPosition);

             if (bottomWindow > elementPosition) {
                 console.log("this should only be called once");
                 socialLogoAnimation.animateSocialButtons(elementContainer);
                 $(window).off('scroll');
               }
          });
    },
    animateSocialButtons: function(imageContainer){
      console.log(imageContainer);
      $("img").velocity("transition.slideUpIn", {stagger: 75, drag: true });
    }
  }
  socialLogoAnimation.init();

});
