define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
        var rand = new PrairieRandom.RandomGenerator(vid);
	var Rydberg = 13.605;
	var n2 = -Rydberg/4;
	var n3 = -Rydberg/9;
	var n4 = -Rydberg/16;
	var planck = 6.626e-34;
	var c = 2.99e8;
	var trans43 = n3 - n4;
	var lambda = planck*c/(-trans43*1.602e-19)*1e9;

	var params = {
	};
	var trueAnswer = {
	energy: 0
	};
	var questionData = {
            params: params,
            trueAnswer: trueAnswer
	};
	return questionData;
};
return server;
});
