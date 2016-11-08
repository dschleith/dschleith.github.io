var backgroundImg = [
	'img/bck-1.jpg',
	'img/bck-2.jpg',
	'img/bck-3.jpg',
	'img/bck-4.jpg',
	'img/bck-5.jpg',
	'img/bck-6.jpg',
	'img/bck-7.jpg'
];
var bioImg = [
	'img/daniel-contact-1.jpg',
	'img/daniel-contact-2.jpg',
	'img/daniel-contact-3.jpg'
];
var random = function(range){
	return ~~(Math.random() * (range));
};

$(document).ready(function(){
	// random background image
	var rndBg = random(backgroundImg.length);
	var rndBio = random(bioImg.length);

	if ($('.hero').data('map')) {
		$('.hero').css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 30%)');
	} else {
		$('.hero').css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 30%), url(' + backgroundImg[rndBg] + ')');
	}

	$('.bio-img').attr('src', bioImg[rndBio]);

	// fancy hamburger transition
	$('.hamb-wrap').on('click', function(){
		$(this).parent().children('p').toggle();
		$(this).children().toggleClass('active');
		$('nav').fadeToggle(200);
	})
});
