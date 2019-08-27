define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
        var rand = new PrairieRandom.RandomGenerator(vid);
	var h, k, l = 1;
	var qhkl = 3.096;
	var a = Math.sqrt(h*h + k*k + l*l)*2*Math.PI/qhkl;
	var qprime = 3.11;
	var a2 = (Math.PI*Math.sqrt(2))/(a2);
	var ratio = a/a2 * 100;
	var params = {


};
var trueAnswer = {
	a: a,
	expand: ratio,
	mc1: 1
};
var questionData = {
            params: params,
            trueAnswer: trueAnswer
};
	return questionData;
};
return server;
});
