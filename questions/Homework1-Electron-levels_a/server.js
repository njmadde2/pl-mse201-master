define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
        var rand = new PrairieRandom.RandomGenerator(vid);
	var Rydberg = 13.605;
        var n1 = rand.randInt(1,2);
        var n2 = rand.randInt(3,4);
        var n3 = rand.randInt(5,6);

	var e1 = -Rydberg/(n1*n1);
	var e2 = -Rydberg/(n2*n2);
	var e3 = -Rydberg/(n3*n3);

	var planck = 6.626e-34;
	var c = 2.99e8;

	var params = {
		n1: n1,
		n2: n2,
		n3: n3
	};

	var trueAnswer = {
		e1: e1,
		e2: e2,
		e3: e3
	};

	var questionData = {
            params: params,
            trueAnswer: trueAnswer
	};
	return questionData;
};
return server;
});
