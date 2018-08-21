var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {
	// set up the map
	map = new L.Map('map');

	// create the tile layer with correct attribution
	var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 10, maxZoom: 18, attribution: osmAttrib});

        // Map center start
	map.setView(new L.LatLng(57.8602, 12.3705),11);
	map.addLayer(osm);

	var partyC = loadMarkersForC();
	var partyFI = loadMarkersForFI();
	var partyKd = loadMarkersForKd();
	var partyL = loadMarkersForL();
	var partyMp = loadMarkersForMp();
	var partyM = loadMarkersForM();
	var partyS = loadMarkersForS();
	var partySD = loadMarkersForSD();
	var partyV = loadMarkersForV();

	map.addLayer(partyC);
	map.addLayer(partyFI);
	map.addLayer(partyKd);
	map.addLayer(partyL);
	map.addLayer(partyMp);
	map.addLayer(partyM);
	map.addLayer(partyS);
	map.addLayer(partySD);
	map.addLayer(partyV);

	var parties = {
	    "<img width=8% src=\"gfx/logo_c.png\"> Centerpartiet, 4": partyC,
            "<img width=8% src=\"gfx/logo_fi.png\"> Feministiskt iniativ, 0": partyFI,
	    "<img width=8% src=\"gfx/logo_kd.jpg\"> Kristdemokraterna, 2": partyKd,
            "<img width=8% src=\"gfx/logo_l.png\"> Liberalerna, 5": partyL,
	    "<img width=8% src=\"gfx/logo_mp.png\"> Miljöpartiet, 6": partyMp,
	    "<img width=8% src=\"gfx/logo_m.png\"> Moderaterna, 13": partyM,
	    "<img width=8% src=\"gfx/logo_s.png\"> Socialdemokraterna, 13": partyS,
	    "<img width=8% src=\"gfx/logo_sd.png\"> Sverigedemokraterna, 6": partySD,
            "<img width=8% src=\"gfx/logo_v.png\"> Vänsterpartiet, 3": partyV,
	};

	L.control.layers(null, parties).addTo(map);
}
