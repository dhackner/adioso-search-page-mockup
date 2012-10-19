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
      $(this).addClass('hovering', 50);
    }, function() {
      $(this).removeClass('hovering', 50);
    });
  });
});
