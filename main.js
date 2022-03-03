function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


async function flash() {
	// flash headers
	const colors = ["#FF5C5C", "#5CFF5C", "#5C5CFF"];  // pallete: https://colorhunt.co/palette/0000005800ffe900ffffc600
	const color_len = colors.length;
	const joke = document.querySelector("#joke");  // holds joke text

	while (true) {
		for (let i = 0; i < color_len; i++) {
			joke.style.color = colors[i];
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
			document.querySelector("#joke").innerHTML = data.joke;  // set joke
		});
}

populateJoke();
flash();
