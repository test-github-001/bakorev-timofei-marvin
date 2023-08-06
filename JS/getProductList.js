// Скрипт получает список добавленных в корзину продуктов
function getProductList() {
	let counter_produts;
	let basket = document.querySelector(".MB-Basket");
	let productsNamesList = basket.querySelectorAll("label[for='ProductName']");
	let productsIDsList = basket.querySelectorAll("label[for='id']");
	let productsCostsList = basket.querySelectorAll("label[for='Cost']");
	let productsQuantitiesList = basket.querySelectorAll(".basket-quantity-val");
	let productListUl = document.querySelector(".productToOrderUl");
	let productLi = document.createElement("li");
	for (counter_produts = 0; counter_produts < productsNamesList.length; counter_produts++) {
		productLi.textContent = productsNamesList.item(counter_produts).textContent + ', ' + productsIDsList.item(counter_produts).textContent + ', ' + productsCostsList.item(counter_produts).textContent + ', ' + 'Кол-во: ' + productsQuantitiesList.item(counter_produts).value;
		productListUl.appendChild(productLi);
	}
}