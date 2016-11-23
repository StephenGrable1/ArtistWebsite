$(document).ready(function(){
  var socialHover = {
    init:function() {
      this.casheDom();
      this.bindEvents();
    },
    casheDom: function(){
      this.$el = $('.follow-container');
      this.$img = this.$el.find('img');
    },
    bindEvents: function() {
      this.$img.mouseover(function() {
        var id = $(this).attr('id');
        socialHover.increaseSize(id);
      });

      this.$img.mouseout(function() {
        var id = $(this).attr('id');
        socialHover.defaultSize(id);
      });
    },
    increaseSize: function(id) {
      $('#'+id).css('width', '45px');
    },
    defaultSize: function(id) {
      $('#'+id).css('width', '40px');
    },

  }
  socialHover.init();

});
