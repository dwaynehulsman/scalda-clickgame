var score;
var time;
var i;
var achievement = '.achievement';

$('#start').click(function() {
	score = 0;
	time = 0;
   i = 3;

	$('#start').css('display', 'none');
	$('#target').css('display', 'block');

	while (i >= 1) {
		i--
		$('#timer').text(i);
		
	}
	var timer = setInterval(function() {
		time++;
		$('#countdown').text(60 - time);

		if (time >= 60) {
			clearInterval(timer);

			$('#start').css('display', 'block');
			$('#target5').css('display', 'none');
		}
	}, 1000);
});

$('#target,#target2,#target3,#target4,#target5').click(function() {
	if (time < 60) {
		score++;
		$('#score').text(score);
	}
	/* Green Button */
	if (time > 20) {
			$('#target').css('display', 'none');
			$('#target2').css('display', 'block');
	}
	/* Yellow Button */
	if (time > 30) {
			$('#target2').css('display', 'none');
			$('#target3').css('display', 'block');
	}
	/* Red Button */
	if (time > 40) {
			$('#target3').css('display', 'none');
			$('#target4').css('display', 'block');
	}
	/* Dark Purple Button */
	if (time > 50) {
			$('#target4').css('display', 'none');
			$('#target5').css('display', 'block');
	}
	/* Reset Button | Open score entry form */
	if (time > 60) {
			$('#target5').css('display', 'none');
			$('#submit-score').css('display', 'block');
				
	}
	if (score == 100) {
		$(achievement).popover('hide')
		var achievement = '#achievement1'

		$('#achievement1').popover('show')
		setTimeout(function() {
    	$(achievement).popover('hide')
		}, 7 * 1000);
	}
		if (score == 200) {
		$(achievement).popover('hide')
		var achievement = '#achievement2'

		$('#achievement2').popover('show')
		setTimeout(function() {
    	$(achievement).popover('hide')
		}, 7 * 1000);
	}
		if (score == 300) {
		$(achievement).popover('hide')
		var achievement = '#achievement3'

		$('#achievement3').popover('show')
		setTimeout(function() {
    	$(achievement).popover('hide')
		}, 7 * 1000);
	}
		if (score == 400) {
		$(achievement).popover('hide')
		var achievement = '#achievement4'

		$('#achievement4').popover('show')
		setTimeout(function() {
    	$(achievement).popover('hide')
		}, 7 * 1000);
	}
		if (score == 500) {
		$(achievement).popover('hide')
		var achievement = '#achievement5'

		$('#achievement5').popover('show')
		setTimeout(function() {
    	$(achievement).popover('hide')
		}, 7 * 1000);
	}
		if (score == 4000) {
		$(achievement).popover('hide')
		var achievement = '#achievement6'
		score = score = 0

		$('#achievement5').popover('show')
		setTimeout(function() {
    	$(achievement).popover('hide')
		}, 7 * 1000);
	}
});

$(function() {
	$('#myTab a:first').tab('show')
});


