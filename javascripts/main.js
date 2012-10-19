$(document).ready(function() {

  $(function() {
    var state = true;
    $('div.itinerary-box').click(function() {
      if (!$(this).hasClass('selected')) {
        $('div.itinerary-box.selected').removeClass('selected', 50);
        $(this).addClass('selected', 50);
      } else {
        $(this).switchClass('selected', 'hovering', 50);
      }
      state = !state;
    });

    $('div.itinerary-box').hover(function() {
      $(this).addClass('hovering');
    }, function() {
      $(this).removeClass('hovering');
    });

    $('div.itinerary-box > .price-box > .btn').click(function(event){
      event.stopPropagation();
    });
  });
});
