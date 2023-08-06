function redirectToProductInfo(element) {
	var productName = document.getElementsByClassName("buy-product-button").item(element).getAttribute("data-id");
	window.location.href = "product.html?id=" + encodeURIComponent(productName);
}