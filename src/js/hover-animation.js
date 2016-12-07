$(document).ready(function(){
  var socialHover = {
    init:function() {
      this.defaultSize();
      this.casheDom();
      this.bindEvents();
    },
    casheDom: function(){
      this.$el = $('.follow-container');
      this.$elChappo = $('li');
      this.$img = this.$el.find('img');
    },
    bindEvents: function() {
      //Figure out how to make this moduler and dont repeat mouseover DRY
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

      this.$elChappo.mouseover(function() {
        var id = $(this).attr('id');
        socialHover.hoverText(id);
      });
      this.$elChappo.mouseout(function() {
        var id = $(this).attr('id');
        socialHover.mouseOutText(id);
      });
      this.$elChappo.mousedown(function() {
        var id = $(this).attr('id');
        socialHover.clickText(id);
      });

    },
    //
    //Make these modular as well DRY
    increaseSize: function(id) {
      $('#'+id).velocity({'width': '45px'}, {duration:100});
    },
    defaultSize: function(id) {
      $('#'+id).velocity({'width': '40px'}, {duration: 100});
    },
    shrinkSize: function(id) {
      $('#'+id).velocity({'width': '40px'}, {duration: 75});
    },

    hoverText: function(id) {
      $('#'+id).css('color', 'white');
      $('#'+id).velocity({translateY: '-4px'}, {duration: 100});
    },
    mouseOutText: function(id) {
      $('#'+id).css('color', '#f6f6f6');
      $('#'+id).velocity("reverse");
    },

    clickText: function(id) {
      $('#'+id).css('color', 'white');
    }

  }
  socialHover.init();

});
