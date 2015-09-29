$(document).ready(function() {
	console.log( "ready!" );
	$('#search').keyup(function () {	 
		var searchField = $('#search').val();
		var url = "http://www.omdbapi.com/?s=" + searchField;
		$.getJSON(url, function (data) {
			var output = '<ul class="searchresult">';
			var resultSet = data.Search;
			if (resultSet) {
				$.each(resultSet, function(key, val) {
					output +='<li id="' + val.Title + '">';
					output +='<h2>' + val.Title + '</h2>';
					output +='<p>' + val.Year + '</p>';
					output +='</li>';
				});
				$('#update').html(output);		
				$(".searchresult li").each(function() {
					var root = this;
					// if there is no 'img' tag, try to load image 
					if (!root.childNodes[2]) {
						var title = this.id;
						var url = "http://www.omdbapi.com/?t=" + title;
						
						$.getJSON(url, function (data) {
							var poster = data.Poster;
							if (poster && poster !== "N/A") {
								var img = document.createElement('img');
								img.setAttribute('src', poster);
								img.className = 'poster';
								root.appendChild(img);
							}
						});
					}
				});
			}
		});
	});
});
