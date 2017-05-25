$('form').on('submit', function(event){
	event.preventDefault( )
	var query = $('.js-query').val( )
	search(query)
	$('.js-query').val('')
})

function search(query) {
	var url = 'https://www.googleapis.com/youtube/v3/search?q='+ query +'&type=video&maxResults=25&part=snippet&key=AIzaSyC9fMcjQ9HiDuLneDqw2DlH0-qm5vK3jlM'
	$('.js-videos').show( )
	$('.js-videos').html('Loading...')
	$.getJSON(url, function(response) {
		$('.js-videos').html('');
		for(var i = 0; i < response.items.length; i++) 

			var videoUrl = 'https://www.youtube.com/watch?v=' + response.items[i].id.videoId;
			var html = "<div class='video-result'><a class='link' target='_blank' href='"+ videoUrl + "'><img src='"+ response.items[i].snippet.thumbnails.high.url +"'>"+ response.items[i].snippet.title + "</a></div>";
			$('.js-videos').append(html);
		}
	});
}





