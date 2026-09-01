const { title } = require("node:process");

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

	if (favButton.textContent === 'Hide -> Show') {
		favButton.textContent = 'Show -> Hide';
	} else {
		favButton.textContent = 'Hide -> Show';
	}
}

function rateStringSimilarityEdit(stringA, stringB){
	if (stringA === stringB) {
        return 0;
    }
    var n = stringA.length, m = stringB.length;
    if (n === 0 || m === 0) {
        return n + m;
    }
    var x = 0, y, a, b, c, d, g, h;
    var p = new Uint16Array(n);
    var u = new Uint32Array(n);
    for (y = 0; y < n;) {
        u[y] = stringA.charCodeAt(y);
        p[y] = ++y;
    }

    for (; (x + 3) < m; x += 4) {
        var e1 = stringB.charCodeAt(x);
        var e2 = stringB.charCodeAt(x + 1);
        var e3 = stringB.charCodeAt(x + 2);
        var e4 = stringB.charCodeAt(x + 3);
        c = x;
        b = x + 1;
        d = x + 2;
        g = x + 3;
        h = x + 4;
        for (y = 0; y < n; y++) {
            a = p[y];
            if (a < c || b < c) {
                c = (a > b ? b + 1 : a + 1);
            }
            else {
                if (e1 !== u[y]) {
                    c++;
                }
            }

            if (c < b || d < b) {
                b = (c > d ? d + 1 : c + 1);
            }
            else {
                if (e2 !== u[y]) {
                    b++;
                }
            }

            if (b < d || g < d) {
                d = (b > g ? g + 1 : b + 1);
            }
            else {
                if (e3 !== u[y]) {
                    d++;
                }
            }

            if (d < g || h < g) {
                g = (d > h ? h + 1 : d + 1);
            }
            else {
                if (e4 !== u[y]) {
                    g++;
                }
            }
            p[y] = h = g;
            g = d;
            d = b;
            b = c;
            c = a;
        }
    }

    for (; x < m;) {
        var e = stringB.charCodeAt(x);
        c = x;
        d = ++x;
        for (y = 0; y < n; y++) {
            a = p[y];
            if (a < c || d < c) {
                d = (a > d ? d + 1 : a + 1);
            }
            else {
                if (e !== u[y]) {
                    d = c + 1;
                }
                else {
                    d = c;
                }
            }
            p[y] = d;
            c = a;
        }
        h = d;
    }

    return h;
}

function rateStringSimilarityWordplay(stringA, stringB){
	stringA = stringA.toLowerCase();
	stringB = stringB.toLowerCase();
	if (stringA === stringB) return 0;
	if (stringA.length == 0 || stringB.length == 0) return 999;

	const stringAWords = new Set(stringA.match(/\w+/g) || []);
	const stringBWords = new Set(stringB.match(/\w+/g) || []);

	let lengthScore = 1 - Math.min(Math.abs(stringA.length - stringB.length) / (Math.min(stringA.length, stringB.length) * 2), 1);

	let wordScore = 0;
	if (stringAWords.size != 0 && stringBWords.size != 0){
		let totalABInclude = 0;
		let totalBAInclude = 0;
		for (let word of stringAWords){
			if (stringBWords.has(word)) totalABInclude++;
		}
		for (let word of stringBWords){
			if (stringAWords.has(word)) totalBAInclude++;
		}
		wordScore = Math.max(totalABInclude / stringAWords.size, totalBAInclude / stringBWords.size);
	}

	return 1 - (((lengthScore * 0.5) + (wordScore * 1.5)) / 2);
}

function listSearch(titleSearchMode){
	const listTitleSearchInputBox = document.getElementById('list-title-search-input');
	const episodeCards = document.querySelectorAll('.ab-episode-card-container');

	const stringInput = listTitleSearchInputBox.value.trim();

	let episodeCardScores = new Map();

	for (let i = 0; i < episodeCards.length; i++){
		const card = episodeCards[i];
		const cardLeftContainer = card.querySelector('.ab-episode-card-left-container');
		const cardRightContainer = card.querySelector('.ab-episode-card-right-container');

		const episodeNumber = Number(cardLeftContainer.querySelector('.ab-episode-card-number-link').textContent.trim());
		const episodeTitle = cardRightContainer.firstElementChild.textContent.trim();
		let episodeScore = 999;
        console.log(episodeNumber + " titled: " + episodeTitle);
        if (titleSearchMode == "Edit"){
            episodeScore = rateStringSimilarityEdit(episodeTitle, stringInput);
        } else if (titleSearchMode == "Wordplay"){
            episodeScore = rateStringSimilarityWordplay(episodeTitle, stringInput);
        }

		console.log(episodeNumber + " got " + episodeScore);

		episodeCardScores.set(episodeNumber, episodeScore);
	}

	episodeCardScores = new Map([...episodeCardScores.entries()].sort((a, b) => a[1] - b[1]));
	let episodeCardFlexOrders = Array.from(episodeCardScores.keys());
	for (let i = 0; i < episodeCards.length; i++){
		const card = episodeCards[i];
		const episodeNumber = Number(card.querySelector('.ab-episode-card-left-container .ab-episode-card-number-link').textContent.trim());
		const flexOrder = episodeCardFlexOrders.indexOf(episodeNumber);
		card.style.order = flexOrder;
		console.log(episodeNumber + " " + flexOrder);
	}
}