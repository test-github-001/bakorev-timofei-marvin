let inp = document.getElementsByClassName("place-container-i")
for (step = 0; step < inp.length; step++) {
	inp.item(step).style.color = "#007aff";
	inp.item(step).style.border = "2px solid #007aff";
	inp.item(step).style.borderColor = "#007aff";
}
let elem;
function FilterNumber(filed, ulD) {
	let fil = document.getElementById(filed);
	let ulC = document.getElementsByClassName(ulD);
	for (elem = 0; elem < ulC.length; elem++) {
		if (ulC.item(elem).textContent.includes(fil.value)) {
			ulC.item(elem).style.display = "block";
		}
		else {
			ulC.item(elem).style.display = "none";
		}
	}
}

function FilterCurrency() {
	let fil = document.getElementById("FilterPayments");
	let ulC = document.getElementsByClassName("currencies");
	for (elem = 0; elem < ulC.length; elem++) {
		if (ulC.item(elem).textContent.includes(fil.value)) {
			ulC.item(elem).style.display = "block";
		}
		else {
			ulC.item(elem).style.display = "none";
		}
	}
}