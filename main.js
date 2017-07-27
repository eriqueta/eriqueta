$(document).ready(function() {

	$(".page").stackpage({
		parent: '.wrap'
	});
	$('.pink').hide ();
	$('button').click (function(){
		$('.pink').slideToggle();
	});
});	
