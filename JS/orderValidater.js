// Этот скрипт отвечает за проверку и валидауию форму на сайте BelMarwin. Проверить роботоспособность отправки формы не предствляется возможным так-как на новых версиях Windows OpenServer работает не стабильно, также Google прекратили поддержку сторонних приложений для Google Mail(в отсутсвии хостинга).
document.querySelector('#orderForm').addEventListener('submit', function (event) {
	event.preventDefault();
	let located = document.querySelectorAll(".pointIssue label").item(1);
	let paymethod = document.querySelectorAll(".orderPaymentMethon label").item(1);
	let productsToPay = document.querySelectorAll(".productToOrderUl li");
	let name = document.getElementById("orderName");
	let number = document.getElementById("orderPhoneNumber");
	let email = document.getElementById("orderEmail");
	if (located == null || paymethod == null || name.value == "" || number.value == "" || email.value == "") {
		document.getElementsByClassName('containerNames-order').item(1).classList.add("error");
		document.getElementsByClassName('containerNames-order').item(2).classList.add("error");
		document.getElementsByClassName('containerNames-order').item(3).classList.add("error");
	}
	else {
		if (document.getElementsByClassName('containerNames-order').item(1).classList.contains("error")) {
			document.getElementsByClassName('containerNames-order').item(1).classList.remove("error");
			document.getElementsByClassName('containerNames-order').item(2).classList.remove("error");
			document.getElementsByClassName('containerNames-order').item(3).classList.remove("error");
		}
		let nameS = name.value;
		let numberS = number.value;
		let emailS = email.value;
		let locationS = located.textContent;
		let payS = paymethod.textContent;
		this.submit();
	}
});

function valibateOrder() {
	let located = document.querySelectorAll(".pointIssue label").item(1);
	let paymethod = document.querySelectorAll(".orderPaymentMethon label").item(1);
	let productsToPay = document.querySelectorAll(".productToOrderUl li");
	let name = document.getElementById("orderName");
	let number = document.getElementById("orderPhoneNumber");
	let email = document.getElementById("orderEmail");
	if (located == null || paymethod == null || name.value == "" || number.value == "" || email.value == "") {
		document.getElementsByClassName('containerNames-order').item(1).classList.add("error");
		document.getElementsByClassName('containerNames-order').item(2).classList.add("error");
		document.getElementsByClassName('containerNames-order').item(3).classList.add("error");
	}
	else {
		if (document.getElementsByClassName('containerNames-order').item(1).classList.contains("error")) {
			document.getElementsByClassName('containerNames-order').item(1).classList.remove("error");
			document.getElementsByClassName('containerNames-order').item(2).classList.remove("error");
			document.getElementsByClassName('containerNames-order').item(3).classList.remove("error");
		}
		document.getElementById("confirmOrderSubmit").type = "submit";
	}
}