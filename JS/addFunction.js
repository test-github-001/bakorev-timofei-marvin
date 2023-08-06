function removeInShopItem(element) {
	let val = document.getElementsByClassName("basketInShop-quantity-val");
	let val2 = document.getElementsByClassName("basket-quantity-val");
	let adderButton = document.getElementsByClassName("buy-product-button");
	let dataQuantity = adderButton.item(element).getAttribute('data-product-quantity');
	if (dataQuantity != "1") {
		adderButton.item(element).setAttribute("data-product-quantity",	Number(dataQuantity)-1)
		if (val) {
			val.item(element).value = Number(val.item(element).value)-1;
		}
		if (val2) {
			val2.item(element).value = Number(val2.item(element).value)-1;
		}
	}
}
function addInShopItem(element) {
	let val = document.getElementsByClassName("basketInShop-quantity-val");
	val.item(element).value = Number(val.item(element).value)+1;
	let val2 = document.getElementsByClassName("basket-quantity-val");
	val2.item(element).value = Number(val2.item(element).value)+1;
	let adderButton = document.getElementsByClassName("buy-product-button");
	let dataQuantity = adderButton.item(element).getAttribute('data-product-quantity');
	adderButton.item(element).setAttribute("data-product-quantity",	Number(dataQuantity)+1)
}