$(document).ready(function() {
	console.log( "profile ready!" );
	var uri_dec = decodeURIComponent(window.location.href);
	var title = uri_dec.split("=")[1];

	var url = "http://www.omdbapi.com/?t=" + title;
	$.getJSON(url, function (data) {
		$("#title").text(data.Title);
		$("#year").text(data.Year);
		if (data.Poster && data.Poster !== "N/A") {
			$("#poster").attr("src", data.Poster);
		}

		var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + title;
		$.getJSON(wikiUrl, function (data) {
			var wiki = data[3];
			$("#wiki").text(wiki);
			$("#wiki").attr("href", wiki);
		});
	});
});
