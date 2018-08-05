
function ajax(method, url) {


	var httpReq = new XMLHttpRequest();

	httpReq.open(method, url);
	httpReq.onreadystatechange = function () {

		if (httpReq.readyState == 4) {

			if (httpReq.status == 200) {

				var returnData = httpReq.responseText;

				httpReq.onsuccess(returnData);
				httpReq = null;
			}
		}
	}

	httpReq.onsuccess = function (response) {
		var jsonObj = JSON.parse(response);
		console.log(jsonObj);

		var paragraf = document.createElement('p');
		paragraf.innerHTML = jsonObj.imie + ' ' + jsonObj.nazwisko + ' ' + jsonObj.zawod + ' ' + jsonObj.firma;

		var div = document.getElementById('dane-programisty');

		div.appendChild(paragraf);
	}

	httpReq.send();
}

document.getElementById('get-data').addEventListener('click', function () {

	var divHolder = document.createElement('div');
	divHolder.setAttribute('id', 'dane-programisty');
	ajax('GET', 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php');

	if (document.body.contains(document.getElementById('dane-programisty')) == false) {
		document.body.appendChild(divHolder);
	}

});
