define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
        var rand = new PrairieRandom.RandomGenerator(vid);
        var sep = rand.randInt(2, 5);
	var pi = Math.PI;
	var k = 8.9e+9;
	var NA= 6.02214e23;
	var ldc = 4e-79;
	var hovv = -1*ldc/Math.pow((sep*1e-10), 6);
	var hov = hovv*NA*1e-3;
	var f = 6*ldc/Math.pow((sep*1e-10), 7)
	var params = {

	sep: sep.toFixed(0)

};
var trueAnswer = {

	
	f: f

};
var questionData = {
            params: params,
            trueAnswer: trueAnswer
};
	return questionData;
};
return server;
});
