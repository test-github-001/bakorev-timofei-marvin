// Удаление right-click, F12 key, Ctrl+Shift+I/Ctrl+Shift+J, Option + Command + I(Mac) 

if (pasInDe = "") {
	document.addEventListener('contextmenu', event => event.preventDefault());
	document.addEventListener('keydown', event => {
	  if (event.keyCode === 123) {
		event.preventDefault();
	  }
	});
	document.addEventListener('keydown', event => {
	  if (event.ctrlKey && event.shiftKey && (event.keyCode === 73 || event.keyCode === 74)) {
		event.preventDefault();
	  }
	});
	document.addEventListener('keydown', function(event) {
	  if (event.metaKey && event.altKey && event.code === 'KeyI') {
		event.preventDefault();
	  }
	});
}