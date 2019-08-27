define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
        var rand = new PrairieRandom.RandomGenerator(vid);
	var mols = rand.randInt(1,3);
	var dpdt = 2.9e+3 * 10/(900* (49.8- 51.5));

		
	var X = "A";
	var Y = "S";
	var Z = "K";

	
	var params = {
	X:X,
	Y:Y,
	Z:Z

	};
	var trueAnswer = {
	X:X,
	Y:Y,
	Z:Z

		};	
		


var questionData = {
            params: params,
            trueAnswer: trueAnswer
};
	return questionData;
};
return server;
});
