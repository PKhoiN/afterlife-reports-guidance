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
	const question29InputBox = document.getElementById("question-29-input");
	const question30InputBox = document.getElementById("question-30-input");
	const question31InputBox = document.getElementById("question-31-input");
	const question32InputBox = document.getElementById("question-32-input");
	const question33InputBox = document.getElementById("question-33-input");
	const question34InputBox = document.getElementById("question-34-input");
	const question35InputBox = document.getElementById("question-35-input");
	const question36InputBox = document.getElementById("question-36-input");
	const question37InputBox = document.getElementById("question-37-input");
	const question38InputBox = document.getElementById("question-38-input");
	const question39InputBox = document.getElementById("question-39-input");
	const question40InputBox = document.getElementById("question-40-input");
	const question41InputBox = document.getElementById("question-41-input");

	const question1Answer = Number(question1InputBox.value.trim());
	const question2Answer = Number(question2InputBox.value.trim());
	const question3Answer = Number(question3InputBox.value.trim());
	const question4Answer = Number(question4InputBox.value.trim());
	const question5Answer = Number(question5InputBox.value.trim());
	const question6Answer = question6InputBox.value.trim();
	const question7Answer = question7InputBox.value.trim().toLowerCase();
	const question8Answer = Number(question8InputBox.value.trim());
	const question9Answer = Number(question9InputBox.value.trim());
	const question10Answer = question10InputBox.value.trim().toLowerCase();
	const question11Answer = question11InputBox.value.trim();
	const question12Answer = question12InputBox.value.trim().toUpperCase();
	const question13Answer = Number(question13InputBox.value.trim());
	const question14Answer = Number(question14InputBox.value.trim());
	const question15Answer = Number(question15InputBox.value.trim());
	const question16Answer = question16InputBox.value.trim();
	const question17Answer = question17InputBox.value.trim();
	const question18Answer = question18InputBox.value.trim().toLowerCase();
	const question19Answer = question19InputBox.value.trim().toLowerCase();
	const question20Answer = question20InputBox.value.trim().toLowerCase();
	const question21Answer = question21InputBox.value.trim().toLowerCase();
	const question22Answer = question22InputBox.value.trim().toLowerCase();
	const question23Answer = question23InputBox.value.trim().toLowerCase();
	const question24Answer = Number(question24InputBox.value.trim());
	const question25Answer = Number(question25InputBox.value.trim());
	const question26Answer = Number(question26InputBox.value.trim());
	const question27Answer = question27InputBox.value.trim().toLowerCase();
	const question28Answer = Number(question28InputBox.value.trim());
	const question29Answer = Number(question29InputBox.value.trim());
	const question30Answer = question30InputBox.value.trim().toUpperCase();
	const question31Answer = question31InputBox.value.trim();
	const question32Answer = question32InputBox.value.trim().toUpperCase();
	const question33Answer = Number(question33InputBox.value.trim());
	const question34Answer = Number(question34InputBox.value.trim());
	const question35Answer = question35InputBox.value.trim();
	const question36Answer = question36InputBox.value.trim().toLowerCase();
	const question37Answer = question37InputBox.value.trim().toLowerCase();
	const question38Answer = question38InputBox.value.trim();
	const question39Answer = question39InputBox.value.trim();
	const question40Answer = question40InputBox.value.trim();
	const question41Answer = Number(question41InputBox.value.trim());

	const answerKey = [
		42, //1
		42, //2
		42, //3
		42, //4
		42, //5
		"А𝖱𝔾", //6
		"null", //7
		3, //8
		30, //9
		"#fefefe", //10
		"-.-. --- -.. .", //11
		"B", //12
		18, //13
		11, //14
		5, //15
		"I like apples, and they like oranges.", //16
		"I like apples. They like oranges.", //17
		"v>>v", //18
		"v^+<", //19
		"v^<<", //20
		">>>^", //21
		"vv>>>^^<v<^+", //22
		"four kiloones five hectoones two decaones three ones six deciones seven centiones three milliones", //23
		42, //24
		14, //25
		1, //26
		"#38619f", //27
		14, //28
		56, //29
		"ARG", //30
		"9.375%", //31
		"A>B>E>F>D>C", //32
		33, //33
		14, //34
		"16AB-10-1|L34|R014", //35
		"junction", //36
		"yes", //37
		"intersection", //38
		"3-way", //39
		"BELIEVE IN YOURSELF!", //40
		42 //41
		//42: What is the meaning of life? Answer: Every answer is correct, including none
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
		question28Answer,
		question29Answer,
		question30Answer,
		question31Answer,
		question32Answer,
		question33Answer,
		question34Answer,
		question35Answer,
		question36Answer,
		question37Answer,
		question38Answer,
		question39Answer,
		question40Answer,
		question41Answer
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
		alertText.textContent = "LerpAB42 completed. Great job.";
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