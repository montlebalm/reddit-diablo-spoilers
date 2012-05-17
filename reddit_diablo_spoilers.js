// ==UserScript==
// @name           	Spoiler hider
// @description    	Hide spoilers on the page without the subreddit theme
// @author         	Chris Montrois
// @include        	*reddit.com/r/diablo
// @include        	*reddit.com/r/Diablo
// @version        	1.0
// ==/UserScript==

// A function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
	var script = document.createElement("script");
  	script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
  	script.addEventListener('load', function() {
    		var script = document.createElement("script");
    		script.textContent = "(" + callback.toString() + ")();";
    		document.body.appendChild(script);
  	}, false);
  	document.body.appendChild(script);
}

// Hide the spoiler tags and provide an option to reveal them
function main() {
	var flair = $("div.linkflair-spoiler").hide();

	if (flair.length) {
		var text = flair.length + " spoilers were hidden on this page. Click to show them.";
		var placeholder = $("<div class='link' />")
			.append("<p>" + text + "</p>")
			.css({
				"padding": "10px 0 10px 150px",
				"background": "#CCC",
				"cursor": "pointer"
			})
			.click(function() {
				flair.show();
				placeholder.remove();
			});
		$("div#siteTable").append(placeholder);
	}
}

addJQuery(main);