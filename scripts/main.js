/*
 *  Area of a Rectangular Room
 *	from the book "Exercises for Programmers"
 *		by Brian Hogan
 *
 *	Create a program that calculates the area of a room.
 *	Prompt the user for the length and width of the room in feet.
 *	Then display the area in both square feet and square meters.
 */

'use strict';

var $ = require('jquery');

$(document).ready(function() {

	let $length = $('#length');
	let $width = $('#width');
	let $entered = $('.entered');
	let $feet = $('#feet');
	let $meters = $('#meters');
	const ConvertToMeters = 0.09290304;

	$('form').on('submit', function(e) {
		e.preventDefault();
		var areaInFeet = 0;
		var areaInMeters = 0;

		// convert strings to numbers
		var length = parseFloat($length.val());
		var width = parseFloat($width.val());

		if(length < 0 || width < 0 || isNaN(length) === true || isNaN(width) === true) {
			$entered.html('<p class="error">Please enter a valid number.</p>');
		}
		else {
			// calculate area in feet and meters
			areaInFeet = length * width;
			areaInMeters = areaInFeet * ConvertToMeters;
			console.log(areaInMeters, typeof(areaInMeters));

			// output to the HTML
			$entered.html('<p>You entered dimensions of <em>' + length + ' feet</em> by <em>' + width + ' feet</em>.<div>The area is:</div>');
			$feet.html('<p>' + areaInFeet.toFixed(2) + ' square feet</p>');
			$meters.html('<p>' + areaInMeters.toFixed(2) + ' square meters</p>');

			// clear out input fields
			$length.val('').focus();
			$width.val('');
		}
	});
});
