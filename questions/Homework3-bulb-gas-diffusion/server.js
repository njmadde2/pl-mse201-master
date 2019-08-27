define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
    var rand = new PrairieRandom.RandomGenerator(vid);
	
	var thickness = 0.15* rand.randInt(1, 3);
	var diam = rand.randInt(30, 50);
	var area = 4*Math.PI*(diam/2)*(diam/2);
	var V = -1e-9*(-5*area)/(thickness);
	
	var params = {
	thickness: thickness.toFixed(2),
	diam: diam.toFixed(0)

	};
	var trueAnswer = {
	V: V
		};

	var questionData = {
    params: params,
    trueAnswer: trueAnswer
	};
	return questionData;
	};
	return server;
	});
