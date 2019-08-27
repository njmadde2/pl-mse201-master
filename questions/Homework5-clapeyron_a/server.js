define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
    var rand = new PrairieRandom.RandomGenerator(vid);


	var T = rand.randInt(770,1100);
	var slope = 2.9e+3 * 10/(T*(49.8-51.5));

	var params = {
	T: T.toFixed(0),
	slope:slope.toFixed(2)


	};
	var trueAnswer = {
	slope:slope
		};

var questionData = {
params: params,
trueAnswer: trueAnswer
};
return questionData;
};
return server;
});
