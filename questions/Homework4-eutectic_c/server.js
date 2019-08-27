define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
    var rand = new PrairieRandom.RandomGenerator(vid);
	
	
	var M = 60;
	var al2o3 = .70*60;

	
	var params = {
	M:M,
	al2o3:al2o3

	};
	var trueAnswer = {
	M:M,
	al2o3:al2o3

		};

var questionData = {
params: params,
trueAnswer: trueAnswer
};
return questionData;
};
return server;
});