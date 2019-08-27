define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
    var rand = new PrairieRandom.RandomGenerator(vid);
	
	var vco2 = 100*rand.randInt(5, 8);
	var V = 1.5e-4;
	var times = vco2/V;
	var time=times/86400;
	
	var params = {
	vco2:vco2.toFixed(0),
	V:V,
	times:times,
	time:time.toFixed(1)

	};
	var trueAnswer = {
	time:time
		};

var questionData = {
params: params,
trueAnswer: trueAnswer
};
return questionData;
};
return server;
});
