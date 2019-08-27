define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
    var rand = new PrairieRandom.RandomGenerator(vid);
	
	
	var L = 20;
	var M = 70;

	
	var params = {
	L:L,
	M:M

	};
	var trueAnswer = {
	L:L,
	M:M

		};

var questionData = {
params: params,
trueAnswer: trueAnswer
};
return questionData;
};
return server;
});