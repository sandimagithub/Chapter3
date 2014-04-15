// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.


// 1. When Charles Dickens is clicked, add a class "selected" style to it.

$(document).on("click", ".author", function () {
	$(this).toggleClass("selected");

});

// 2. When a chapter title (<h3 class="chapter-title">) is double-clicked,
// toggle the visibility of the chapter text.

$(document).on("dblclick", ".chapter-title", function() {
	$(this).siblings("p").fadeToggle(); 

});
// 3. When the user presses the right arrow key, cycle to the next body class.
// The key code for the right arrow key is 39.

// First we need to make sure that the body is affected upon the clicks, so we have to first remove
//the attribute of class altogether b/c we didn't want to have default and narrow and large all at once. 

$(document).on("click", "#switcher-default", function() {
	$("body").removeAttr("class");
	$("body").addClass("default");
});


$(document).on("click", "#switcher-narrow", function() {
	$("body").removeAttr("class");
	$("body").addClass("narrow");
});


$(document).on("click", "#switcher-large", function() {
	$("body").removeAttr("class");
	$("body").addClass("large");
});
//color switcher on the last two buttons

$(document).on("click", "#switcher-new1", function() {
	$("body").removeAttr("class");
	$("body").addClass("red-font");
});

$(document).on("click", "#switcher-new2", function() {
	$("body").removeAttr("class");
	$("body").addClass("blue-font");
});

//change the body classes upon an arrow presses
	var body_classes = ["default", "narrow", "large"];
	var current_index=0;

	$(document).on("keydown", function(e){
		if (e.which===39) {
			current_index++;

			if (current_index>2) {
				current_index=0;
				$("body").removeAttr("class");
				$("body").addClass("default");

			} else {
					$("body").removeAttr("class"); 
					$("body").addClass(body_classes[current_index]);
			}

		}

	});

//Challenge: Use the console.log() function to log the coordinates of the mouse as 
//it moves across any paragraph. (Note: console.log() displays its results via the Firebug 
//extension for Firefox, Safari's Web Inspector, or the Developer Tools in Chrome or Internet Explorer).

$(document).on("mousemove", "p", function(e) {
	console.log("Page X: " + e.pageX + " Page Y: " +e.pageY);

});

//Challenge: Use .mousedown() and .mouseup() to track mouse events anywhere on the page. If the mouse button is released above where it was pressed, add the "hidden" class to all paragraphs. If it is released below where it was pressed, remove the hidden class from all paragraphs.

var downPos;
var upPos;
$(document).on("mousedown", function(e) {
	downPos = e.pageY;

});

$(document).on("mouseup", function(e) {
	upPos = e.pageY;
	if (downPos>upPos) {
		$("p").addClass("hidden");
	} else {
		$("p").removeClass("hidden");
	}

});
