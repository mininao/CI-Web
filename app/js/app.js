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


$(document).ready(function(){
	$('.jumbotron').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
        lazyLoad:'progressive',
        dots: false,
        fade: true,
        speed: 500
	});
});

$('#togglenav').click(function(){ 'use strict';
    $('nav .mobile').fadeToggle(300);
});
