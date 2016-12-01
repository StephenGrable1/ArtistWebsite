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
        socialHover.increaseText(id);
      });
      this.$elChappo.mouseout(function() {
        var id = $(this).attr('id');
        socialHover.defaultText(id);
      });
      this.$elChappo.mousedown(function() {
        var id = $(this).attr('id');
        socialHover.shrinkText(id);
      });

    },
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

    increaseText: function(id) {
      $('#'+id).velocity({'font-size': '16px'}, {duration: 250});
    },
    shrinkText: function(id) {
      $('#'+id).velocity({'font-size': '14px'}, {duration: 200});
    },

    defaultText: function(id) {
      $('#'+id).velocity({'font-size': '15px'}, {duration: 100});
    }

  }
  socialHover.init();

});
