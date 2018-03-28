$(document).ready(function(){
	$(".active").click(function(){
		$(".togle").toggle();
		$(".togle2,.togle3,.togle4").hide();
		
	});
		$(".active2").click(function(){
		$(".togle2").toggle();
		$(".togle,.togle3,.togle4").hide();
		
		
	});
	
		$(".active3").click(function(){
		$(".togle3").toggle();
		$(".togle2,.togle,.togle4").hide();
		
		
	});
		$(".active4").click(function(){
		$(".togle4").toggle();
		$(".togle2,.togle,.togle3").hide();
		
		
	});	
	$('#demo6').scrollbox({
	  direction: 'h',
	  distance: 140,
	  queue: 'demo6-queue'
	});	
});