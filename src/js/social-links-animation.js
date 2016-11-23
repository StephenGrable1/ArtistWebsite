$(document).ready(function(){
  var socialLogoAnimation = {
    init:function() {
      this.casheDom();
      this.bindEvents();
    },
    casheDom: function(){
      this.$el = $('.follow-container');
      this.$img = this.$el.find('img');
      this.$imgContainer = this.$el.find('.img-container');
      this.$imgPosition = this.$el.position().top + this.$el.outerHeight();
    },
    bindEvents: function() {
      this.watchWindow(this.$imgPosition, this.$img);
    },
    watchWindow: function(position, images) {
      var i = 0;
        $(window).scroll(function() {
            var bottomWindow = $(window).scrollTop() + $(window).height();
            if(bottomWindow > (position - 40) && (i===0)) {
                console.log("this should only be called once: ", i);
                socialLogoAnimation.queueIntroAnimataion(images);
                i++;
                return i;
              }
          });
    },
    queueIntroAnimataion: function(images) {
      socialLogoAnimation.fadeIn();
      socialLogoAnimation.swingUpTimer(images);
    },
    swingUpTimer: function(images) {
      var delay = 0;
      $(images).each(function(){
        //console.log("this should only fire 5 times and no more");
          var id = this.id;
          setTimeout(function() {
            socialLogoAnimation.swingUp(id);
          }, delay);
          delay += 50;
      });
    },
    fadeIn: function() {
      $(this.$el.find('.social-links-container')).css('opacity','1');
    },
    swingUp: function(id) {
      $("#" + id).css({'margin-top':'15px'}, {duration:1000});

      setTimeout(function() {
        socialLogoAnimation.swingDown(id);
        console.log('swingup: ', id)
      }, 500);
    },
    swingDown: function(id) {
      console.log("swing down", id);
      $("#" + id).css({'margin-top':'+30px'}, {duration:800});
    }
  }
  socialLogoAnimation.init();

});
