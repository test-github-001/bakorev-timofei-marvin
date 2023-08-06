function updateProductSummary() {
	let common_cost = document.getElementById("common-cost");
	let common_count = document.getElementById("common-count");
	let sumCost = 0;
	let sumCount = 0;
	document.querySelectorAll("label[for='Cost']").forEach(label => {
		sumCost += Number(label.cost);
	});
	document.querySelectorAll(".basket-quantity-val").forEach(quantity => {
		sumCount += Number(quantity.value);
	});
	document.querySelector(".displayProductCounter").textContent = sumCount;
	common_cost.textContent = "Выніковая цана: " + (sumCost).toFixed(2);
	common_count.textContent = "Агульная колькасць тавараў: " + sumCount;
}

function closeBasket() {
	document.getElementsByClassName("MB-Basket").item(0).style.display = "none";
	document.querySelector('footer').style = 'display: block';
}

function removeItem(element) {
	let val = document.getElementsByClassName("basket-quantity-val");
	if (val.item(element) == null) {
		if (val.item(element - 1).value != "0") {
			val.item(element - 1).value = Number(val.item(element - 1).value) - 1;
			let basketElement = document.querySelectorAll(".DescriptionProductBasket ul").item(element - 1);
			let adderButton = document.getElementsByClassName("buy-product-button").item(element - 1);
			let cost = adderButton.getAttribute("data-product-price");
			basketElement.querySelector("label[for='Cost']").textContent = "Цана: " + (Number(val.item(element - 1).value) * Number(cost)).toFixed(2);
			basketElement.querySelector("label[for='Cost']").cost = (Number(val.item(element - 1).value) * Number(cost)).toFixed(2);
			updateProductSummary();
			if (val.item(element - 1).value == "0") {
				let notAddToBasketVar = document.createElement("li");
				notAddToBasketVar.textContent = "Не дадаваць у замову";
				let secondListItem = basketElement.querySelectorAll("li").item(2);
				basketElement.querySelector("label[for='Cost']").textContent = "Цана: 0";
				basketElement.insertBefore(notAddToBasketVar, secondListItem.nextSibling);
				updateProductSummary();
				if (notAddToBasketVar) {
					return
				}
			}
		}
	}
	else {
		if (val.item(element).value != "0") {
			val.item(element).value = Number(val.item(element).value) - 1;
			let basketElement = document.querySelectorAll(".DescriptionProductBasket ul").item(element);
			let adderButton = document.getElementsByClassName("buy-product-button").item(element);
			let cost = adderButton.getAttribute("data-product-price");
			basketElement.querySelector("label[for='Cost']").textContent = "Цана: " + (Number(val.item(element).value) * Number(cost)).toFixed(2);
			basketElement.querySelector("label[for='Cost']").cost = (Number(val.item(element).value) * Number(cost)).toFixed(2);
			updateProductSummary();
			if (val.item(element).value == "0") {
				let notAddToBasketVar = document.createElement("li");
				notAddToBasketVar.textContent = "Не дадаваць у замову";
				let secondListItem = basketElement.querySelectorAll("li").item(2);
				basketElement.querySelector("label[for='Cost']").textContent = "Цана: 0";
				basketElement.insertBefore(notAddToBasketVar, secondListItem.nextSibling);
				updateProductSummary();
				if (notAddToBasketVar) {
					return
				}
			}
		}
	}
}

function addItem(element) {
	let val = document.getElementsByClassName("basket-quantity-val");
	if (val.item(element) == null) {
		let basketElement = document.querySelectorAll(".DescriptionProductBasket ul").item(element - 1);
		let adderButton = document.getElementsByClassName("buy-product-button").item(element - 1);
		let cost = adderButton.getAttribute("data-product-price");
		val.item(element - 1).value = Number(val.item(element - 1).value) + 1;
		basketElement.querySelector("label[for='Cost']").textContent = "Цана: " + (Number(val.item(element - 1).value) * Number(cost)).toFixed(2);
		basketElement.querySelector("label[for='Cost']").cost = (Number(val.item(element - 1).value) * Number(cost)).toFixed(2);
		if (basketElement.querySelectorAll("li").item(3)) {
			basketElement.querySelectorAll("li").item(3).remove();
		}
	}
	else {
		let basketElement = document.querySelectorAll(".DescriptionProductBasket ul").item(element);
		let adderButton = document.getElementsByClassName("buy-product-button").item(element);
		let cost = adderButton.getAttribute("data-product-price");
		val.item(element).value = Number(val.item(element).value) + 1;
		basketElement.querySelector("label[for='Cost']").textContent = "Цана: " + (Number(val.item(element).value) * Number(cost)).toFixed(2);
		basketElement.querySelector("label[for='Cost']").cost = (Number(val.item(element).value) * Number(cost)).toFixed(2);
		if (basketElement.querySelectorAll("li").item(3)) {
			basketElement.querySelectorAll("li").item(3).remove();
		}
	}
	updateProductSummary();
}