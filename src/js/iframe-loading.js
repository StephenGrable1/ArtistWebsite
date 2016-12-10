$(document).ready(function(){
    $(".youtube").each(function() {
      $(this).css('background-image', 'url(https://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');
      $(this).append($('<div/>', {'class': 'play'}));

      $('#'+this.id).on( 'click', function() {
        var iframe_video = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
        var iframe = $('<iframe/>', {'src': iframe_video,'frameborder': '0','width': '100%', 'height': $(this).height()});
        $(this).replaceWith(iframe);
      })
    });
}
