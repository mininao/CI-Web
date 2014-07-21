var app = (function(document, $) {

	'use strict';
	var docElem = document.documentElement,

		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
			_userAgentInit();
		};

	return {
		init: _init
	};

})(document, jQuery);

(function() {

	'use strict';
	app.init();
    

})();



$('#togglenav').click(function(){ 'use strict';
    $('nav .mobile').fadeToggle(300);
});

$('.video .thumbnail').click(function(){
    
    var embed = $(this).parent().attr('data-embed');
    $('#embedded').attr('src','//www.youtube-nocookie.com/embed/' + embed + '?rel=0&autoplay=1&theme=light&modestbranding=1');
    $('#video_overlay').fadeIn();
});

$('#close_overlay').click(function(){
    $('#video_overlay').fadeOut();
});