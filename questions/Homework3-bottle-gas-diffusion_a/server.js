define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
    var rand = new PrairieRandom.RandomGenerator(vid);
	
	var area = 118*rand.randInt(2, 5);
	var V = 1.5e-4;
	var deltax = (2e-8*3*area)/V;
	
	var params = {
	area:area.toFixed(0),
	V:V,
	deltax:deltax.toFixed(2)

	};
	var trueAnswer = {
	deltax:deltax
		};

var questionData = {
params: params,
trueAnswer: trueAnswer
};
return questionData;
};
return server;
});
