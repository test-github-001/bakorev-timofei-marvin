const recognition = new window.webkitSpeechRecognition();
const startBtn = document.getElementById('start-btn');
const searchInput = document.getElementById('search_with_voice');
searchInput.value = '';
const microphone_img = document.getElementById('microphone');
recognition.lang = "ru-RU";
startBtn.addEventListener('click', () => {
	recognition.start();
	microphone_img.src = 'Assets/Images/active-microphon.png'
});
recognition.addEventListener('result', (event) => {
	const transcript = event.results[0][0].transcript;
	searchInput.value = transcript;
	microphone_img.src = 'Assets/Images/microphon.png'
});