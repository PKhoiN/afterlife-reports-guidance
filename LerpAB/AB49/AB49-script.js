let currentPageNumber = 1;

function updatePage(){
	for (let i = 1; i <= 7; i++){
		const page = document.getElementById(`page-${i}`);
		if (i === currentPageNumber){
			page.style.display = "flex";
		} else {
			page.style.display = "none";
		}
	}
}

function windBackward(){
    if (currentPageNumber > 1){
        currentPageNumber--;
        updatePage();
    }
}

function windForward(){
	if (currentPageNumber < 7){
		currentPageNumber++;
		updatePage();
	}
}

document.addEventListener("DOMContentLoaded", function(){
	updatePage();
});