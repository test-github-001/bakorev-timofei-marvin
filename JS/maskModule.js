var countryCode = '+375';
$(document).ready(function () {
	document.querySelector("#orderPhoneNumber").maxlenght = countryCode.length + "(999)999-9999".length;
	$("#orderPhoneNumber").mask(`${countryCode}(999)999-999`);
});