let ab45CurrentPerspective = "A";

function ab45FlipPerspective(){
	const perspectiveA = document.querySelector("#ab45-perspective-A");
	const perspectiveB = document.querySelector("#ab45-perspective-B");
	const flipButton = document.querySelector("#ab45-perspective-flip-button");

	if (ab45CurrentPerspective === "A") {
		ab45CurrentPerspective = "B";
		perspectiveA.animate(
			[
				{
					transform: "scale(1, 1)",
					left: "0"
				},
				{
					transform: "scale(-1, 1)",
					left: "50%"
				}
			],
			{
				duration: 200,
				fill: "forwards",
				easing: "ease-out"
			}
		);
		perspectiveB.animate(
			[
				{
					transform: "scale(-1, 1)",
					right: "0"
				},
				{
					transform: "scale(1, 1)",
					right: "50%"
				}
			],
			{
				duration: 200,
				fill: "forwards",
				easing: "ease-out"
			}
		);
		document.body.style.background = "linear-gradient(to right, #000040, #400000)";
		flipButton.style.background = "linear-gradient(to right, #000080, #800000)";
		flipButton.style.color = "blue";
	} else {
		ab45CurrentPerspective = "A";
		perspectiveA.animate(
			[
				{
					transform: "scale(-1, 1)",
					left: "50%"
				},
				{
					transform: "scale(1, 1)",
					left: "0"
				}
			],
			{
				duration: 200,
				fill: "forwards",
				easing: "ease-out"
			}
		);
		perspectiveB.animate(
			[
				{
					transform: "scale(1, 1)",
					right: "50%"
				},
				{
					transform: "scale(-1, 1)",
					right: "0"
				}
			],
			{
				duration: 200,
				fill: "forwards",
				easing: "ease-out"
			}
		);
		document.body.style.background = "linear-gradient(to right, #400000, #000040)";
		flipButton.style.background = "linear-gradient(to right, #800000, #000080)";
		flipButton.style.color = "red";
	}
}