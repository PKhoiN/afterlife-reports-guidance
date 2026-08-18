function toggleFavVisibility(){
	const favContainers = document.querySelectorAll('.ab-episode-card-fav-container');
	const favButton = document.getElementById('list-toggle-fav-button');

	favContainers.forEach(container => {
		if (container.style.display === 'none') {
			container.style.display = 'flex';
		} else {
			container.style.display = 'none';
		}
	});

	if (favButton.textContent === 'Hide') {
		favButton.textContent = 'Show';
	} else {
		favButton.textContent = 'Hide';
	}
}

document.addEventListener("DOMContentLoaded", function(){
	toggleFavVisibility();
});