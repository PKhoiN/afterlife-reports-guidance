////////////////////
//HEY! NO PEEKING!//
////////////////////

function submitAnswer(){
	const totalQuestions = 56;
	const answerKey = [
		"Yes",
		"Most doors are wooden",
		"No",
		"Yes",
		"The sign on the Sculpture of Unrelatedness",
		"Skillet",
		"Open",
		"56",
		"Drowning",
		"Dread",
		"3",
		"Past participle",
		"Five-cent",
		"Center, centre, pavement, sidewalk",
		"A spoiled the sculpture with money",
		"56",
		"9",
		"Alive",
		"3",
		"Soup",
		"By opening it",
		"56",
		"EH",
		"Soup",
		"56",
		"No",
		"Seven",
		"Halfway mark",
		"Garden-path",
		"Sculpt, construct, relate, logic, place, thing",
		"56",
		"1847",
		"Electromagnetic",
		"Hammer",
		"56",
		"The map",
		"Nothing because it was",
		"After climbing for what felt like hours, A finally saw a light below",
		"56",
		"Third-person",
		"Sudden",
		"Meaning of life",
		"7",
		"56",
		"14",
		"56",
		"21",
		"56",
		"28",
		"56",
		"35",
		"56",
		"42",
		"56",
		"49",
		"56",
	];

	//Collect user answers
	const userAnswers = [];
	for (let i = 1; i <= totalQuestions; i++) {
		const answerInput = document.getElementById(`question-${i}-input`);
		userAnswers.push(answerInput.value.trim().toLowerCase());
	}

	//If any blank
	if (userAnswers.includes("")) {
		const alertText = document.getElementById("alert-text");
		alertText.textContent = "Please fill in all answers.";
		alertText.style.color = "red";
		return;
	}

	const totalCorrect = userAnswers.reduce((count, answer, index) => {
		if (answer === answerKey[index].toLowerCase()) {
			return count + 1;
		}
		return count;
	}, 0);
	if (totalCorrect === answerKey.length) {
		const alertText = document.getElementById("alert-text");
		alertText.textContent = "LerpAB56 completed. Great job.";
		alertText.style.color = "green";
	} else {
		const alertText = document.getElementById("alert-text");
		if (answerKey.length - totalCorrect === 1) {
			alertText.textContent = answerKey.length - totalCorrect + " question is incorrect.";
		} else {
			alertText.textContent = answerKey.length - totalCorrect + " questions are incorrect.";
		}
		alertText.style.color = "red";
	}
}