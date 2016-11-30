$(document).ready(function(){
  var socialHover = {
    init:function() {
      this.defaultSize();
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
      this.$img.mousedown(function() {
        var id = $(this).attr('id');
        socialHover.shrinkSize(id);
      });
    },
    increaseSize: function(id) {
      $('#'+id).velocity({'width': '45px'}, {duration:100});
    },
    defaultSize: function(id) {
      $('#'+id).velocity({'width': '40px'}, {duration: 100});
    },
    shrinkSize: function(id) {
      $('#'+id).velocity({'width': '40px'}, {duration: 75});
    }

  }
  socialHover.init();

});
