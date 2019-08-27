define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
        var rand = new PrairieRandom.RandomGenerator(vid);
        var f = 1e-8*rand.randInt(1, 3)
	var pi = Math.PI;
	var k = 8.9e+9;
	var e = 1.6e-19;
	var r00 = (4*e*e*k)/f;
	var r0 = Math.sqrt(r00)*1e9;
	
	var params = {

	f:f,
};
var trueAnswer = {

	distance: r0
};
var questionData = {
            params: params,
            trueAnswer: trueAnswer
};
	return questionData;
};
return server;
});
