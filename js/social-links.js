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
      $(this.$imgContainer).css('opacity','1');
    },
    swingUp: function(id) {
      $("#" + id).animate({'marginTop':'-900px'}, {duration:2000, queue:false});
    },
    watchWindow: function(position, images) {
      $(window).scroll(function() {
          var bottomWindow = $(window).scrollTop() + $(window).height();
          var delay = 0;
          //this function below is being called alot making it slow
          //Fix this
          //###########################################################
          if(bottomWindow > (position + 40)) {
              handleSocialLinks.fadeIn();
              $(images).each(function(){
                  var id = this.id;
                  setTimeout(function() {
                    handleSocialLinks.swingUp(id);
                  }, delay);
                  delay += 50;
              });

          }
        });
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
