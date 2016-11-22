$(document).ready(function(){
  var handleSocialLinks = {
    init:function() {
      this.casheDom();
      this.bindEvents();
    },
    casheDom: function(){
      this.$el = $('.follow-container');
      this.$imgPosition = this.$el.position().top + this.$el.outerHeight();
      this.$img = this.$el.find('img');
      this.$imgContainer = this.$el.find('.img-container');
      this.$id = this.$img.attr('id');
    },
    bindEvents: function() {
      this.watchWindow(this.$imgPosition, this.$img);
      this.$img.mouseover(function() {
        var id = $(this).attr('id');
        console.log("id is: ", id);
        handleSocialLinks.increaseSize(id);
      });
      this.$img.mouseout(function() {
        var id = $(this).attr('id');
        console.log("id is: ", id);
        handleSocialLinks.defaultSize(id);
      });
    },
    fadeIn: function() {
      $(this.$el.find('.social-links-container')).css('opacity','1');
    },
    swingUp: function(id) {
      $("#" + id).css({'margin-top':'15px'}, {duration:1000});

      setTimeout(function() {
        handleSocialLinks.swingDown(id);
        console.log('swingup: ', id)
      }, 500);


    },
    swingDown: function(id) {
      console.log("swing down", id);
      $("#" + id).css({'margin-top':'+20px'}, {duration:800});
    },
    swingUpTimer: function(images) {
      var delay = 0;
      $(images).each(function(){
        // console.log("this should only fire 5 times and no more");
          var id = this.id;
          setTimeout(function() {
            handleSocialLinks.swingUp(id);
          }, delay);
          delay += 50;
      });
    },
    watchWindow: function(position, images) {
      var i = 0;
        $(window).scroll(function() {
            var bottomWindow = $(window).scrollTop() + $(window).height();
            if(bottomWindow > (position + 40) && (i===0)) {
                console.log("this should only be called once: ", i);
                handleSocialLinks.queueIntroAnimataion(images);
                i++;
                return i;
              }
          });
    },
    queueIntroAnimataion: function(images) {
      handleSocialLinks.fadeIn();
      handleSocialLinks.swingUpTimer(images);
    },
    increaseSize: function(id) {
      var socialId = id;
      $('#'+id).css('width', '43px');
      console.log('hovered over img');
    },
    defaultSize: function(id) {
      var socialId = id;
      $('#'+id).css('width', '40px');
      console.log('hovered out of img');
    },

  }
  handleSocialLinks.init();

});
