function submitAnswer(){
	const question1InputBox = document.getElementById("question-1-input");
	const question2InputBox = document.getElementById("question-2-input");
	const question3InputBox = document.getElementById("question-3-input");
	const question4InputBox = document.getElementById("question-4-input");
	const question5InputBox = document.getElementById("question-5-input");
	const question6InputBox = document.getElementById("question-6-input");
	const question7InputBox = document.getElementById("question-7-input");
	const question8InputBox = document.getElementById("question-8-input");
	const question9InputBox = document.getElementById("question-9-input");
	const question10InputBox = document.getElementById("question-10-input");
	const question11InputBox = document.getElementById("question-11-input");
	const question12InputBox = document.getElementById("question-12-input");
	const question13InputBox = document.getElementById("question-13-input");
	const question14InputBox = document.getElementById("question-14-input");

	const question1Answer = question1InputBox.value.trim();
	const question2Answer = Number(question2InputBox.value.trim());
	const question3Answer = question3InputBox.value.trim().toLowerCase();
	const question4Answer = question4InputBox.value.trim();
	const question5Answer = question5InputBox.value.trim().toLowerCase();
	const question6Answer = question6InputBox.value.trim().toLowerCase();
	const question7Answer = question7InputBox.value.trim();
	const question8Answer = question8InputBox.value.trim().toLowerCase();
	const question9Answer = Number(question9InputBox.value.trim());
	const question10Answer = question10InputBox.value.trim().toLowerCase();
	const question11Answer = question11InputBox.value.trim().toLowerCase();
	const question12Answer = Number(question12InputBox.value.trim());
	const question13Answer = question13InputBox.value.trim();
	const question14Answer = question14InputBox.value.trim();

	const answerKey = [
		"Intention",
		-3,
		"red",
		"E, A, R, L, Y",
		"answer",
		"answer",
		"null",
		"ogioyat",
		10,
		"care",
		"heads",
		14,
		"Love yourself",
		"022/07/2026"
	];

	const userAnswers = [
		question1Answer,
		question2Answer,
		question3Answer,
		question4Answer,
		question5Answer,
		question6Answer,
		question7Answer,
		question8Answer,
		question9Answer,
		question10Answer,
		question11Answer,
		question12Answer,
		question13Answer,
		question14Answer
	];

	//If any blank
	if (userAnswers.includes("")) {
		const alertText = document.getElementById("alert-text");
		alertText.textContent = "Please fill in all answers.";
		alertText.style.color = "red";
		return;
	}

	const totalCorrect = userAnswers.reduce((count, answer, index) => {
		if (answer === answerKey[index]) {
			return count + 1;
		}
		return count;
	}, 0);
	if (totalCorrect === answerKey.length) {
		const alertText = document.getElementById("alert-text");
		alertText.textContent = "LerpAB14 completed. Great job.";
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