define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
        var rand = new PrairieRandom.RandomGenerator(vid);
	var liters = rand.randInt(55, 65)
	var kilos = rand.randInt(50, 60)
	var height = 50;
	var pi = Math.PI;
	var avogadro = 6.022e+23;
	var molec = kilos*1000/2.015*avogadro;
	var radius = Math.sqrt(liters*1000/(pi*height));
	var rho = 0.089;
	var vol = kilos*1000/rho*1000;
	var radius2 = Math.sqrt(vol/(pi*height))
	var params = {
		kilos: kilos.toFixed(0),
		liters: liters.toFixed(0)
	};
	var trueAnswer = {
		radius: radius
		
		};
	var questionData = {
            params: params,
            trueAnswer: trueAnswer
	};
	return questionData;
};
return server;
});