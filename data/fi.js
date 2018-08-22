function loadMarkersForFI() {
    var cElinoreMorris = L.marker([57.846190,12.274432], {icon: partyIcons["fi"]})
	.bindPopup("1. <b>Elinore Morris</b>, 43<br>Fiolbyggare<br>Tollered");
    var cFridaOlsson = L.marker([57.817172,12.425838], {icon: partyIcons["fi"]})
        .bindPopup("2. <b>Frida Olsson</b>, 40<br>Bagare<br>Tollered");
    var cKarinThorslund = L.marker([57.782298,12.282887], {icon: partyIcons["fi"]})
        .bindPopup("3. <b>Karin Thorslund</b>, Psykolog/Forskare<br>45<br>Tollered");
    var cKlaraTelsgård = L.marker([57.80239,12.41117], {icon: partyIcons["fi"]})
        .bindPopup("4. <b>Klara Telsgård</b>, 36<br>Butikschef<br>Floda");
    var cJohanLundbergCarlsson = L.marker([57.747564,12.248437], {icon: partyIcons["fi"]})
        .bindPopup("5. <b>Johan Lundberg Carlsson</b>, 26<br>Studerande<br>Hulan");
    var cElinMolin = L.marker([57.817218,12.428752], {icon: partyIcons["fi"]})
        .bindPopup("6. <b>Elin Molin</b>, 25<br>Personlig assistent<br>Tollered");
    var cMariaJerenvik = L.marker([57.81557,12.42070], {icon: partyIcons["fi"]})
        .bindPopup("7. <b>Maria Jerenvik</b>, 35<br>Näringslivsutvecklare<br>Tollered");
    var cMoaBlandini = L.marker([57.816258,12.422147], {icon: partyIcons["fi"]})
        .bindPopup("8. <b>Moa Blandini</b>, 39<br>Jurist/Universitetslektor<br>Tollered");

    return L.layerGroup([cElinoreMorris,
			 cFridaOlsson,
			 cKarinThorslund,
			 cKlaraTelsgård,
			 cJohanLundbergCarlsson,
			 cElinMolin,
			 cMariaJerenvik,
			 cMoaBlandini
			]);
}
