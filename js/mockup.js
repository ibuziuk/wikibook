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

	$("#toggle_content").click(function() {
		toggle(this, $("#content_list"));
	});

	$("#toggle_categories").click(function() {
		toggle(this, $("#category_list"));
	});

	$("#toggle_movies").click(function() {
		toggle(this, $("#movie_list"));
	});

	$("#toggle_books").click(function() {
		toggle(this, $("#book_list"));
	});

});