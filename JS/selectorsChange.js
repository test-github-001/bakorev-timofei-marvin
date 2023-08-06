function changePhoneNumber(number_code) {
	countryCode = number_code;
	$("#orderPhoneNumber").textContent = "";
	document.querySelector("#orderPhoneNumber").maxlenght = countryCode.length + "(999)999-9999".length;
	document.querySelector("#showNumberButton").textContent = countryCode;
	$("#orderPhoneNumber").mask(`+380(999) 999-999`);
	if (countryCode == '+997') {
		$("#orderPhoneNumber").mask(`+977(999)999-999`);
	}
}

function showLangSelector() {
	const button = document.getElementById("showLangButton");
	const cont = document.getElementsByClassName("lang-method-container").item(0);
	cont.style.display = "block"
	button.setAttribute('onclick', 'hideLangSelector()');
	button.setAttribute('class', 'paymentMainButtonAfter');
	hideMethodPay();
	hideAdressSelector();
	hideNumberSelector();
}

function showNumberSelector() {
	const button = document.getElementById("showNumberButton");
	const cont = document.getElementsByClassName("number-method-container").item(0);
	cont.style.display = "block"
	button.setAttribute('onclick', 'hideNumberSelector()');
	button.setAttribute('class', 'paymentMainButtonAfter');
	hideLangSelector();
	hideMethodPay();
	hideAdressSelector();
}

function showAdressSelector() {
	const button = document.getElementById("showAdressButton");
	const cont = document.getElementsByClassName("place-container").item(0);
	cont.style.display = "block"
	button.setAttribute('onclick', 'hideAdressSelector()');
	button.setAttribute('class', 'paymentMainButtonAfter');
	hideMethodPay();
	hideLangSelector();
	hideNumberSelector();
}

function showMethodPay() {
	const button = document.getElementById("showPayButton");
	const cont = document.getElementsByClassName("payment-method-container").item(0);
	cont.style.display = "block"
	button.setAttribute('onclick', 'hideMethodPay()');
	button.setAttribute('class', 'paymentMainButtonAfter');
	hideLangSelector();
	hideAdressSelector();
	hideNumberSelector();
}

function hideNumberSelector() {
	const button = document.getElementById("showNumberButton");
	const cont = document.getElementsByClassName("number-method-container").item(0);
	cont.style.display = "none"
	button.setAttribute('onclick', 'showNumberSelector()');
	button.setAttribute('class', 'paymentMainButtonBefore');
}

function hideAdressSelector() {
	const button = document.getElementById("showAdressButton");
	const cont = document.getElementsByClassName("place-container").item(0);
	cont.style.display = "none"
	button.setAttribute('onclick', 'showAdressSelector()');
	button.setAttribute('class', 'paymentMainButtonBefore');
}

function hideLangSelector() {
	const button = document.getElementById("showLangButton");
	const cont = document.getElementsByClassName("lang-method-container").item(0);
	cont.style.display = "none"
	button.setAttribute('onclick', 'showLangSelector()');
	button.setAttribute('class', 'paymentMainButtonBefore');
}

function hideMethodPay() {
	const button = document.getElementById("showPayButton");
	const cont = document.getElementsByClassName("payment-method-container").item(0);
	cont.style.display = "none"
	button.setAttribute('onclick', 'showMethodPay()');
	button.setAttribute('class', 'paymentMainButtonBefore');
}

function methonChangeCurrency(currencyParam, productID) {
	let currencies = document.getElementsByClassName("payment-change");
	let currencyButton = document.getElementById("showPayButton");
	let sCurrency = currencyButton.textContent;
	let dCurrency = "BYN";
	if (currencyParam == "₽") {
		currencyButton.textContent = currencies.item(0).textContent;
		dCurrency = "RUB";
	}
	if (currencyParam == "B") {
		currencyButton.textContent = currencies.item(1).textContent;
		dCurrency = "BYN";
	}
	if (currencyParam == "$") {
		currencyButton.textContent = currencies.item(2).textContent;
		dCurrency = "USD";
	}
	if (currencyParam == "€") {
		currencyButton.textContent = currencies.item(3).textContent;
		dCurrency = "EUR";
	}
	if (currencyParam == "¥") {
		currencyButton.textContent = currencies.item(4).textContent;
		dCurrency = "CNY";
	}
	let costs = document.querySelectorAll(".productCostA");
	let siteCosts = document.querySelectorAll(".buy-product-button");
	let newCost;
	let inBasketCosts = document.querySelectorAll("label[for='Cost']");
	if (inBasketCosts.length == 0) {
		costs.forEach(cost => {
			siteCosts.forEach(sCost => {
				newCost = fx(sCost.getAttribute("data-product-price")).from(sCurrency).to(dCurrency).toFixed(2);
				cost.textContent = newCost;
				sCost.setAttribute("data-product-price", newCost);
			});
		});
	}
	else {
		costs.forEach(cost => {
			siteCosts.forEach(sCost => {
				inBasketCosts.forEach(ibCost => {
					newCost = fx(sCost.getAttribute("data-product-price")).from(sCurrency).to(dCurrency).toFixed(2);
					cost.textContent = newCost;
					ibCost.textContent += newCost;
					sCost.setAttribute("data-product-price", newCost);
					updateProductSummary();
				});
			});
		});
		updateProductSummary();
	}
}