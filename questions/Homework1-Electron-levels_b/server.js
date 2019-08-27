define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
        var rand = new PrairieRandom.RandomGenerator(vid);
	var Rydberg = 13.6050;
		var n1 = rand.randInt(4,6);
        var n2 = rand.randInt(1,3);
	
	var e1 = -Rydberg/(n1*n1);
	var e2 = -Rydberg/(n2*n2);
	
	var planck = 6.626e-34;
	var c = 2.99e8;
	var trans43 = e2 - e1;
	var lambda = planck*c/(-trans43*1.602e-19)*1e9;

	
	var params = {
		n1: n1,
		n2: n2
	
	};
	var trueAnswer = {
		lambda: lambda
	};
	var questionData = {
            params: params,
            trueAnswer: trueAnswer
	};
	return questionData;
};
return server;
});
