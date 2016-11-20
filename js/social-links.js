$(document).ready(function(){
  var handleSocialLinks = {
    init:function() {
      this.casheDom();
      this.bindEvents();
    },
    casheDom: function(){
      this.$el = $('.follow-container');
      this.$img = this.$el.find('img');
      this.$id = this.$img.attr('id');
    },
    bindEvents: function() {
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
