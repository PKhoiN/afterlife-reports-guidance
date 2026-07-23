let lerpAB5Script = [
	"[Setting: Kitchen. Perspective: B]",
	"A: Hey, can you pass me the salt?",
	"B: Sure. *Opens the spice cabinet and starts looking for the salt*",
	"[...]",
	"B: *Picks up something* Is this salt?",
	"*That something is brown*",
	"B: ...nope, not salt",
	"[...]",
	"B: *Picks up something* Is this salt?",
	"*That something is brown*",
	"B: ...did I just pick the same thing twice? Never mind",
	"[...]",
	"B: *Picks up something with the label \"salt\"* Is this salt?",
	"*That something is white, crystalline, and salty*",
	"B: Definitely salt",
	"*B brings the salt over*",
	"B: Here is the salt",
	"A: I said sugar, not salt",
	"B: ...did you?",
	"A: Yeah, look back..."
];
let currentLineCount = 0;
let totalVisibleLine = 5;
let episodeStarted = false;
let episodePhase = 0;

function memoryTopButton(){
	const memoryTopButtonElement = document.getElementById("memory-top-button");
	const memoryBottomButtonElement = document.getElementById("memory-bottom-button");
	if (!episodeStarted){
		episodeStarted = true;
		memoryTopButtonElement.innerHTML = "X";
		memoryBottomButtonElement.innerHTML = "v: Down";
		displayMemory();
	} else {
		if (episodePhase === 0){
			if (currentLineCount === 0){
				memoryTopButtonElement.innerHTML = "X";
			} else {
				currentLineCount -= 1;
				memoryBottomButtonElement.innerHTML = "v: Down";
				displayMemory();

				if (currentLineCount === 0){
					memoryTopButtonElement.innerHTML = "X";
				}
			}
		} else if (episodePhase === 1){
			currentLineCount = 0;
			episodePhase = 2;
			memoryTopButtonElement.innerHTML = "X";
			memoryBottomButtonElement.innerHTML = "vv: Bottom";
			displayMemory();

			lerpAB5Script.push("[...]");
			lerpAB5Script.push("B: Wait, what");
			lerpAB5Script.push("A: Let me get the salt. You are holding sugar");
			lerpAB5Script.push("B: What? *Holding sugar* ...what");
		}
	}
}

function memoryBottomButton(){
	const memoryTopButtonElement = document.getElementById("memory-top-button");
	const memoryBottomButtonElement = document.getElementById("memory-bottom-button");
	if (episodeStarted){
		if (episodePhase === 0){
			if (currentLineCount < lerpAB5Script.length - totalVisibleLine){
				memoryTopButtonElement.innerHTML = "^: Up";
				currentLineCount += 1;
				displayMemory();

				if (currentLineCount === lerpAB5Script.length - totalVisibleLine){
					memoryBottomButtonElement.innerHTML = "X";
				}
			} else {
				memoryBottomButtonElement.innerHTML = "X";
			}
		} else if (episodePhase === 2){
			currentLineCount = lerpAB5Script.length - totalVisibleLine;
			episodePhase = 3;
			memoryTopButtonElement.innerHTML = "X";
			memoryBottomButtonElement.innerHTML = "O: Full";
			displayMemory();
		} else if (episodePhase === 3){
			currentLineCount = 0;
			totalVisibleLine = lerpAB5Script.length;
			episodePhase = 4;
			memoryTopButtonElement.innerHTML = "X";
			memoryBottomButtonElement.innerHTML = "X";
			displayMemory();
		}
	}
}

function displayMemory(){
	const memoryContainer = document.getElementById("memory-container");
	memoryContainer.innerHTML = "";
	for (let i = currentLineCount; i < totalVisibleLine + currentLineCount; i++){
		const dialogString = lerpAB5Script[i];
		const dialogElement = document.createElement('p');
		dialogElement.textContent = dialogString;
		memoryContainer.append(dialogElement)
	}

	if (episodePhase === 0 && currentLineCount === lerpAB5Script.length - totalVisibleLine){
		episodePhase = 1;
		lerpAB5Script[1] = "A: Hey, can you pass me the sugar?";
		const memoryTopButtonElement = document.getElementById("memory-top-button");
		memoryTopButtonElement.innerHTML = "^^: Top";
	}
}