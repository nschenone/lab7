'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeBtn").click(clickLike);
}

function clickLike(e) {
	e.preventDefault();
	ga('create', 'UA-158830494-1', 'auto');
	ga('require', 'GTM-5HSD5B7');
	ga('send', 'event', 'like', 'click');
}