function changeLanguage(lang) {
	var select = document.querySelector("#google_translate_element select");
	select.value = lang;
	let langButton = document.getElementById("showLangButton");
	let langs = document.getElementsByClassName("langs");
	if (select.value == "ru") {
		recognition.lang = 'ru-RU';
		langButton.textContent = langs.item(3).getAttribute("language");
		document.cookie = "language=ru";
	}
	if (select.value == "be") {
		recognition.lang = 'ru-RU';
		langButton.textContent = langs.item(0).getAttribute("language");
		document.cookie = "language=be";
	}
	if (select.value == "uk") {
		recognition.lang = 'uk-UA';
		langButton.textContent = langs.item(1).getAttribute("language");
		document.cookie = "language=uk";
	}
	if (select.value == "pl") {
		recognition.lang = 'pl-PL';
		langButton.textContent = langs.item(2).getAttribute("language");
		document.cookie = "language=pl";
	}
	if (select.value == "kk") {
		recognition.lang = 'kk-KZ';
		langButton.textContent = langs.item(4).getAttribute("language");
		document.cookie = "language=kk";
	}
	if (select.value == "zh-CN") {
		recognition.lang = 'zh-CN';
		langButton.textContent = langs.item(5).getAttribute("language");
		document.cookie = "language=zh-CN";
	}
	if (select.value == "en") {
		recognition.lang = 'en-US';
		langButton.textContent = langs.item(6).getAttribute("language");
		document.cookie = "language=en";
	}
	if (select.value == "fr") {
		recognition.lang = 'fr-FR';
		langButton.textContent = langs.item(7).getAttribute("language");
		document.cookie = "language=fr";
	}
	select.dispatchEvent(new Event('change'));
}