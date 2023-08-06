function changeIPLocation() {
	if (mailIndex == "") {
		document.querySelector(".place-container").style.display = "block";
	}
	else {
		let address = document.createElement("label");
		address.htmlFor = "adressOrder";
		address.textContent = `Краіна: ${country}, Край: ${oblast}, Горад: ${city}, Вуліца: ${street}, Дом: ${house}, Пошта: ${mail}, Паштовы індэкс: ${mailIndex}`;
		if (document.querySelectorAll(".pointIssue label").length <= 1) {
			document.querySelector(".pointIssue").appendChild(address)
		}
	}
}
function changeIPCookie() {
	let ips = [document.querySelectorAll('input.place-container-i').item(0), document.querySelectorAll('input.place-container-i').item(1), document.querySelectorAll('input.place-container-i').item(2), document.querySelectorAll('input.place-container-i').item(3), document.querySelectorAll('input.place-container-i').item(4), document.querySelectorAll('input.place-container-i').item(5), document.querySelectorAll('input.place-container-i').item(6), document.querySelectorAll('input.place-container-i').item(0)]
	country = document.querySelectorAll('input.place-container-i').item(0).value;
	oblast = document.querySelectorAll('input.place-container-i').item(1).value;
	city = document.querySelectorAll('input.place-container-i').item(2).value;
	street = document.querySelectorAll('input.place-container-i').item(3).value;
	house = document.querySelectorAll('input.place-container-i').item(4).value;
	mail = document.querySelectorAll('input.place-container-i').item(5).value;
	mailIndex = document.querySelectorAll('input.place-container-i').item(6).value;
	if (country == "" || oblast == "" || city == "" || street == "" || house == "" || mail == "" || mailIndex == "") {
		for (step = 0; step < ips.length; step++) {
			ips[step].classList.add("error")
		}
	}
	else {
		for (step = 0; step < ips.length; step++) {
			ips[step].classList.remove("error")
		}
		hideAdressSelector();
	}
}