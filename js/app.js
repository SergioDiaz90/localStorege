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
		return console.log('tweeteando');
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