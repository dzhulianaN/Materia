function initialize() {
	var myOptions = {
		zoom: 15,
		center: new google.maps.LatLng(45.4642715, -9.1895103), //change the coordinates
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: true,
		mapTypeControl: true,
		zoomControl: true,
		streetViewControl: true
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
	var marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(45.4642715, -9.1895103) //change the coordinates
	});
	google.maps.event.addListener(marker, "click", function() {
		infowindow.open(map, marker);
	});
}
google.maps.event.addDomListener(window, 'load', initialize);
