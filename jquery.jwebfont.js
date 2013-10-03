(function($) {

    $.fn.jwebfont = function(options) {

    	// Establish our default settings
        var settings = $.extend({
        	font_families : [],
        	target_items : undefined
        }, options);

    	$(this).each(function() {

	    	// Check if data-webfont attribute is present, otherwise check in child elements
	    	if ($(this).attr('data-webfont') !== undefined)
	    	{
	    		settings.target_items = $(this);
	    	}
	    	else
	    	{
	    		settings.target_items = $(this).find( '[data-webfont]' );
	    	}

	    	settings.target_items.each(function() {

	    		var item_font = $(this).attr( 'data-webfont' );

	    		if (jQuery.inArray( item_font, settings.font_families ) === -1)
	    		{
	    			settings.font_families[settings.font_families.length] = item_font;
	    		}

	    	});
    		
    	});

    	console.log( 'Found: ' + settings.font_families );

    	WebFont.load({
			google: {
				families: settings.font_families
			},
			active: function() {

				console.log('Finished loading fonts');

				settings.target_items.each(function() {

					$(this).css('font-family', $(this).attr('data-webfont'));

				});
			
			}
		});


    }

}(jQuery));