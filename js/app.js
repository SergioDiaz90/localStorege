/**Variables */
const form = document.querySelector('#formulario');
const tweets = document.querySelector('#lista-tweets');
let listTweets = [];

/**Event listener */
eventListeners()

function eventListeners() {
	/**User add new tweet */
	form.addEventListener('submit', addTweet);
	/**The loaded document */
	document.addEventListener('DOMContentLoaded', () => {
		listTweets = JSON.parse(localStorage.getItem('tweets')) || [];
		console.log(listTweets);
		createHTML();
	});
}

function addTweet (e) {
	e.preventDefault();

	// content test area
	const textArea = document.querySelector('#tweet').value;
	if (textArea !== '') {
		//Obj con fecha de creación
		const tweetObj = {'id': Date.now(), 'text': textArea};
		listTweets = [...listTweets, tweetObj];
		createHTML();
		form.reset();
		return 
	}
	seeError('un mensaje no puede ir vacío');
}

function seeError (msn){
	const msnErr = document.createElement('p');
	msnErr.textContent = msn;
	msnErr.classList.add('error');
	
	// insert in the content
	const content = document.querySelector('#contenido');
	content.appendChild(msnErr);

	//Remove msn in the content

	setTimeout(() => {
		msnErr.remove();
	}, 3000)
}

function createHTML() {
	clearHTML();
	if (listTweets.length > 0) {
		listTweets.forEach( tweet => {
			const btnDel = document.createElement('a');
			btnDel.classList.add('borrar-tweet');
			btnDel.textContent = 'X';

			// Function eliminar
			btnDel.onclick = () => {
				delTweet(tweet.id);
			}
			const li = document.createElement('li');
			li.textContent = tweet.text;
			li.appendChild(btnDel);
			tweets.appendChild(li);
		});
	}
	syncStorage();
}


// Local-Storage
function syncStorage() {
	localStorage.setItem('tweets', JSON.stringify(listTweets));
}
// clear HTML

function clearHTML() {
	while (tweets.firstChild){
		tweets.removeChild(tweets.firstChild);
		console.log(tweets);
	}
}

function delTweet(id){
	listTweets = listTweets.filter( tweet => tweet.id !== id);
	createHTML();
}