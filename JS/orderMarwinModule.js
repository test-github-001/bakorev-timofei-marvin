function cancelUserOrder() {
	document.querySelector('footer').style = 'display: block';
	document.querySelector(".productToOrderUl li").remove();
	document.querySelector("label[for='adressOrder']").remove();
	document.getElementsByClassName("confirmationPage").item(0).style = "display: none";
}
let confirmOrder = document.querySelector("confirmOrder");

function confirmUserOrder() {
	let mainBasket = document.getElementsByClassName("MB-Basket");
	mainBasket.item(0).style.display = "none";
	document.querySelector('footer').style = 'display: none';
	getProductList();
	document.getElementsByClassName("confirmationPage").item(0).style = "display: block";
}