$(document).ready(function() {
	console.log( "ready!" );

	// [show] / [hide]
	function toggle(button, element) {
		var label = button.textContent;
		if (label === "hide") {
		   element.hide();
		   button.textContent = "show"
		} else {
		   element.show();
		   button.textContent = "hide"
		}
	}

	function toggleAdd(button, element) {
		if ($(element).is(":visible")) {
			element.hide();
		} else {
			element.show();
		}
	}

	function saveMovie() {
		var movieUrl = $("#m_url").val();
		var year = $("#m_year").val();
		var movieDir = $("#d_url").val();

		var url_chunks = movieUrl.split("/");
		var title = url_chunks[url_chunks.length - 1].replace(/_/g, " ");

		var dir_url_chunks = movieDir.split("/");
		var dirTitle = dir_url_chunks[dir_url_chunks.length -1].replace(/_/g, " ");

		var movie = "<a href='" + movieUrl +"' target='_blank'>" + title + "</a>"
		var dir = "<a href='" + movieDir +"' target='_blank'>" + dirTitle + "</a>"

		$("#m_table > tbody").append("<tr><td>" + movie + "</td><td>" + year + "</td><td>" + dir + "</td></tr>");
	}

	$("#toggle_content").click(function() {
		toggle(this, $("#content_list"));
	});

	$("#toggle_categories").click(function() {
		toggle(this, $("#new_moview"));
	});

	$("#toggle_movies").click(function() {
		toggle(this, $("#m_table"));
	});

	$("#toggle_books").click(function() {
		toggle(this, $("#book_list"));
	});

	$("#add_movie").click(function() {
		toggleAdd(this, $("#new_moview"));
	});

	$("#add").click(function() {
		saveMovie();
	});

});
