define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
	var rand = new PrairieRandom.RandomGenerator(vid);
	var radius = 0.001*rand.randInt(100, 200)
	var f = 0.0013*rand.randInt(1000, 1500)
	var pi = Math.PI;
	var k = 8.98e+9;
	var e = 1.60217662e-19;
	var r00 = (4*e*e*k)/(f*1e-8);
	var r0 = Math.sqrt(r00)*1e9;
	var aRad = (r0 - radius);
	
	var params = {
	    radius: radius.toFixed(3),
	    f: f.toFixed(2)
	};

	var trueAnswer = {
	    aRad: aRad
	};

	var questionData = {
            params: params,
            trueAnswer: trueAnswer
	};
	
	return questionData;
    };
    return server;
});
