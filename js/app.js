/**Variables */
const form = document.querySelector('#formulario');
const tweets = document.querySelector('#lista-tweets');
let listTweets = [];

/**Event listener */
eventListeners()

function eventListeners() {
	form.addEventListener('submit', addTweet);
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
			const li = document.createElement('li');
			li.textContent = tweet.text;
			tweets.appendChild(li);
		});
	}
}

// clear HTML

function clearHTML() {
	while (tweets.firstChild){
		tweets.removeChild(tweets.firstChild);
	}
}