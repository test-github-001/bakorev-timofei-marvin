function redirectToProductInfo(element) {
	var productName = document.getElementsByClassName("buy-product-button").item(element).getAttribute("data-id");
	window.location.href = "product.html?id=" + encodeURIComponent(productName);
}

function deleteProductFromBasket(element) {
	document.getElementsByClassName("Product-MainBasket").item(element).remove();
	updateProductSummary();
	if (document.getElementsByClassName("Product-MainBasket").length <= 0) {
		document.getElementsByClassName("Summurised_Description_ProductBasket").item(0).style.display = "none";
		document.querySelector(".basketEmpty").style.display = "block";
	}
	document.querySelectorAll(".basket-add-item").forEach(add => {
		add.onclick = function () {
			addItem(element - 1);
		};
	});
	document.querySelectorAll(".basket-remove-item").forEach(rem => {
		rem.onclick = function () {
			removeItem(element - 1);
		};
	});
}

function openBasket() {
	let mainBasket = document.getElementsByClassName("MB-Basket");
	mainBasket.item(0).style.display = "block";
	document.querySelector('footer').style = 'display: none';
}
let products = document.getElementsByClassName("buy-product-button");

function addToBasketFn(element) {
	var defaultProduct = document.createElement("div");
	defaultProduct.id = "";
	defaultProduct.className = "Product-MainBasket";
	let mainBasket = document.getElementsByClassName("MB-Basket");
	let productID = products.item(element).getAttribute("data-id");
	let existingProduct = mainBasket.item(0).querySelectorAll(`label[for="id"]`);
	let isCopy = false;
	for (step = 0; step < existingProduct.length; step++) {
		if ((existingProduct.item(step).textContent) === ("ID: " + productID)) {
			isCopy = true;
		}
	}
	openBasket();
	if (isCopy) {
		alert("Уже в корзине");
	}
	else {
		if (document.getElementsByClassName("Summurised_Description_ProductBasket").item(0).style.display == "") {
			document.getElementsByClassName("Summurised_Description_ProductBasket").item(0).style.display = "inline-block";
		}
		if (document.querySelector(".basketEmpty").style.display != "none") {
			document.querySelector(".basketEmpty").style.display = "none";
		}
		var imageProductBasket = document.createElement("div");
		imageProductBasket.className = "ImageProductBasket";
		defaultProduct.appendChild(imageProductBasket);
		var imageProductBasketPreview = document.createElement("img");
		imageProductBasketPreview.className = "ImageProductBasketPreview";
		imageProductBasketPreview.src = products.item(element).getAttribute("data-product-img");
		imageProductBasketPreview.width = "90";
		imageProductBasketPreview.height = "90";
		imageProductBasket.appendChild(imageProductBasketPreview);
		var descriptionProductBasket = document.createElement("div");
		descriptionProductBasket.className = "DescriptionProductBasket";
		defaultProduct.appendChild(descriptionProductBasket);
		var ul = document.createElement("ul");
		descriptionProductBasket.appendChild(ul);
		var idLi = document.createElement("li");
		ul.appendChild(idLi);
		var idLabel = document.createElement("label");
		idLabel.htmlFor = "id";
		idLabel.textContent = "ID: " + products.item(element).getAttribute("data-id");
		idLi.appendChild(idLabel);
		var costLi = document.createElement("li");
		ul.appendChild(costLi);
		var costLabel = document.createElement("label");
		costLabel.htmlFor = "Cost";
		costLabel.cost = products.item(element).getAttribute("data-product-price");
		costLabel.textContent = "Цена: " + products.item(element).getAttribute("data-product-price");
		costLi.appendChild(costLabel);
		var productNameLi = document.createElement("li");
		ul.appendChild(productNameLi);
		var productNameLabel = document.createElement("label");
		productNameLabel.htmlFor = "ProductName";
		productNameLabel.textContent = "Товар: " + products.item(element).getAttribute("data-product-name");
		productNameLi.appendChild(productNameLabel);
		var addButton = document.createElement("button");
		addButton.onclick = function () {
			addItem(element);
		};
		addButton.className = "basket-add-item";
		addButton.textContent = "+";
		var basketQuantityItem = document.createElement("div");
		basketQuantityItem.className = "basket-quantity-item";
		ul.appendChild(basketQuantityItem);
		var removeButton = document.createElement("button");
		removeButton.onclick = function () {
			removeItem(element);
		};
		removeButton.className = "basket-remove-item";
		removeButton.textContent = "-";
		var quantityInput = document.createElement("input");
		quantityInput.className = "basket-quantity-val";
		quantityInput.type = "number";
		quantityInput.min = "1";
		quantityInput.step = "1";
		quantityInput.pattern = "^[0-9]";
		quantityInput.value = "1";
		basketQuantityItem.appendChild(removeButton);
		basketQuantityItem.appendChild(quantityInput);
		basketQuantityItem.appendChild(addButton);
		var removeProductDiv = document.createElement('div');
		removeProductDiv.className = 'removeProductFromBasket';
		removeProductDiv.innerHTML = '<button onclick="deleteProductFromBasket();"><img width="20" height="20" src="Assets/Images/close.png"></button>';
		defaultProduct.appendChild(removeProductDiv);
		let basket = document.getElementsByClassName("Products-MainBasket").item(0);
		basket.appendChild(defaultProduct);
		updateProductSummary();
	}
}