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
	const question15InputBox = document.getElementById("question-15-input");
	const question16InputBox = document.getElementById("question-16-input");
	const question17InputBox = document.getElementById("question-17-input");
	const question18InputBox = document.getElementById("question-18-input");
	const question19InputBox = document.getElementById("question-19-input");
	const question20InputBox = document.getElementById("question-20-input");
	const question21InputBox = document.getElementById("question-21-input");
	const question22InputBox = document.getElementById("question-22-input");
	const question23InputBox = document.getElementById("question-23-input");
	const question24InputBox = document.getElementById("question-24-input");
	const question25InputBox = document.getElementById("question-25-input");
	const question26InputBox = document.getElementById("question-26-input");
	const question27InputBox = document.getElementById("question-27-input");
	const question28InputBox = document.getElementById("question-28-input");

	const question1Answer = question1InputBox.value.trim();
	const question2Answer = question2InputBox.value.trim();
	const question3Answer = Number(question3InputBox.value.trim());
	const question4Answer = question4InputBox.value.trim();
	const question5Answer = question5InputBox.value.trim().toLowerCase();
	const question6Answer = question6InputBox.value.trim().toLowerCase();
	const question7Answer = question7InputBox.value.trim();
	const question8Answer = question8InputBox.value.trim().toLowerCase();
	const question9Answer = question9InputBox.value.trim();
	const question10Answer = Number(question10InputBox.value.trim());
	const question11Answer = question11InputBox.value.trim().toLowerCase();
	const question12Answer = Number(question12InputBox.value.trim());
	const question13Answer = question13InputBox.value.trim().toLowerCase();
	const question14Answer = question14InputBox.value.trim().toLowerCase();
	const question15Answer = question15InputBox.value.trim();
	const question16Answer = question16InputBox.value.trim().toLowerCase();
	const question17Answer = question17InputBox.value.trim().toLowerCase();
	const question18Answer = Number(question18InputBox.value.trim());
	const question19Answer = Number(question19InputBox.value.trim());
	const question20Answer = Number(question20InputBox.value.trim());
	const question21Answer = Number(question21InputBox.value.trim());
	const question22Answer = question22InputBox.value.trim().toLowerCase();
	const question23Answer = question23InputBox.value.trim().toLowerCase();
	const question24Answer = question24InputBox.value.trim().toLowerCase();
	const question25Answer = question25InputBox.value.trim();
	const question26Answer = Number(question26InputBox.value.trim());
	const question27Answer = Number(question27InputBox.value.trim());
	const question28Answer = question28InputBox.value.trim();

	const answerKey = [
		"Heightened",
		"8, 10",
		28,
		"1D97B",
		"null",
		"null",
		"Qxf8#",
		"red, blue",
		"F",
		5,
		"kill",
		12,
		"null",
		"yes",
		"25%",
		"placeholder",
		"false",
		65,
		100,
		0.25,
		4,
		"yes",
		"yes",
		"null",
		"They danced; they died.",
		1,
		28,
		"1/4"
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
		question14Answer,
		question15Answer,
		question16Answer,
		question17Answer,
		question18Answer,
		question19Answer,
		question20Answer,
		question21Answer,
		question22Answer,
		question23Answer,
		question24Answer,
		question25Answer,
		question26Answer,
		question27Answer,
		question28Answer
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
		alertText.textContent = "LerpAB28 completed. Great job.";
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