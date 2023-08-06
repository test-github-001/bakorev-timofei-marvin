function openPays() {
	document.querySelector(".select-payMethod-container").style.display = "block";
}

function closePays() {
	document.querySelector(".select-payMethod-container").style.display = "none";
}

function changePay(paym) {
	let payDiv = document.querySelector(".orderPaymentMethon");
	let newMethod = document.createElement("label");
	newMethod.textContent = "Спосаб аплаты: " + paym;
	newMethod.htmlFor = "orderPayMethod";
	payDiv.appendChild(newMethod);
	if (payDiv.querySelectorAll("label[for='orderPayMethod']").length > 1) {
		payDiv.querySelectorAll("label[for='orderPayMethod']").item(0).remove();
	}
}
function showCatigoryContainer() {
	const menu = document.getElementById("showCatigoryButton");
	const catigory = document.getElementsByClassName("product-cat")
	const mainElements = document.getElementsByTagName("main");
	if (catigory == null) {
		return
	}
	catigory.item(0).style.display = "block";
	mainElements.item(0).style.filter = "blur(10px)";
	menu.setAttribute('onclick', 'hideCatigoryContainer()');
}

function hideCatigoryContainer() {
	const menu = document.getElementById("showCatigoryButton")
	const catigory = document.getElementsByClassName("product-cat")
	const mainElements = document.getElementsByTagName("main");
	if (catigory == null) {
		return
	}
	catigory.item(0).style.display = "none";
	mainElements.item(0).style.filter = "none";
	menu.setAttribute('onclick', 'showCatigoryContainer()');
}