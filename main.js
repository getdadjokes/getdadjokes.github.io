function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


//button functions
$("#joke").click(function() {
	populateJoke;
});

$(".announcement").click(function() {
	$(".announcement").css("display", "none");
})


async function flash() {
	// flash headers
	const colors = ["#FF5C5C", "#5CFF5C", "#5C5CFF"];  // pallete: https://colorhunt.co/palette/0000005800ffe900ffffc600
	const color_len = colors.length;
	const joke = $("#joke");  // holds joke text

	while (true) {
		for (let i = 0; i < color_len; i++) {
			joke.css('color', colors[i]);
			await sleep(1500);  // synchronously stop for 1500 ms
		}
	}
}


function populateJoke() {
	// set joke header to data received from api
	payload = {
		headers: {
			'Accept': 'application/json'
		}
	}

	fetch('https://icanhazdadjoke.com', payload)
		.then(response => response.json())
		.then(data => {
			$("#joke").html(data.joke);  // set joke
		});
}

$(document).ready(function() {
	flash();
	populateJoke();
})
