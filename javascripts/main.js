$(document).ready(function() {

	$(function() {
    	var state = true;
    	$( "div.itinerary-box" ).click(function() {
        	if ( state ) {
				$("div.itinerary-box").removeClass( 'selected', 50);
            	$(this).addClass('selected', 50);
        	} else {
            	$(this).removeClass( 'selected', 50);
        	}
        	state = !state;
    	});

    	$('div.itinerary-box').hover(function() {
        	$(this).addClass('hovering');
    	}, function() {
        	$(this).removeClass('hovering');
    	});
	});
});