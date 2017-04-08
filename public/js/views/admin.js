$(function () {
	$('.form_radio').on('click', function(){
		if (!$(this).attr('checked')) {
			$(this).prop('checked', true);
		} else {
			$('.form_radio').not(this).prop('checked', false);
		}
	});
}); //end doc ready
