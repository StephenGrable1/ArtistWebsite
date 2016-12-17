$(document).ready(function(){
  var handleNav = {
    init:function() {
      this.casheDom();
      this.bindEvents();
    },
    casheDom: function(){
      this.$el = $("header");
      this.$hamburger = this.$el.find('.hamburger-container');
      this.$li = this.$el.find('li');
      this.$nav = this.$el.find('.nav');
      this.$navExit = this.$el.find('.close-nav');
    },
    bindEvents: function() {
      this.$hamburger.on('click', this.toggleMobileNav.bind(this));
      this.$li.on('click', this.toggleMobileNav.bind(this));
      this.$navExit.on('click', this.toggleMobileNav.bind(this));
    },
    toggleMobileNav: function() {
      this.$nav.toggleClass('show');
    },
  }
handleNav.init();
});
