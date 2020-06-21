jQuery(document).ready(function ($) {
	
	$('#_id_location').attr('disabled', 'disabled');
	
	let responses;
	$("#_location").autoComplete({
		source: function (location, response) {
			let data = {
				action: 'autocomplete_location',
				location: location,
			}
			
			$.ajax({
				type: 'POST',
				url: ajax.url,
				data: data,
				success: function (res) {
					response(res.data.title);
					responses = res.data.ID;
				},
				error: function (xhr, ajaxOptions, thrownError) {
					console.log('error...', xhr);
					
				}
			});
		}
	});
	$("#_location").change(function (e) {
		let re = / /g;
		let locationTitle = $(this).val().replace(re, '_')
		
		$('#_id_location').val(responses[locationTitle]);
	})
});