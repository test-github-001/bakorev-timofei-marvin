if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function (position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		var url = "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" + latitude + "&longitude=" + longitude + "&localityLanguage=be";
		fetch(url).then(response => response.json()).then(data => {
			var countryGet = data.countryName;
			document.querySelectorAll('input.place-container-i').item(0).value = countryGet;
			document.querySelectorAll("#showAdressButton").textContent = countryGet;
		});
	});
}