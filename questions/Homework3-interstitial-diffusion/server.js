define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
    var rand = new PrairieRandom.RandomGenerator(vid);
	
	var T0 = rand.randInt(100, 200);
	var T = T0 + 273;
	var D = 4.1*Math.exp(-30.5e3/(8.314*T));
	
	var params = {
	T:T0.toFixed(0),
	D:D.toFixed(3)

	};
	var trueAnswer = {
	D: D
		};

	var questionData = {
    params: params,
    trueAnswer: trueAnswer
	};
	return questionData;
	};
	return server;
	});
