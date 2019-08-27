define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
    var rand = new PrairieRandom.RandomGenerator(vid);
	
	var estress = rand.randInt(450, 500);
	var diam = 1e-1*rand.randInt(100, 150);
	var frac = 1e-1*rand.randInt(70, 99);
	var RA = (Math.pow(diam, 2)*Math.PI - Math.pow(frac, 2)*Math.PI)/(Math.pow(diam, 2)*Math.PI)*100;
	var load = estress*Math.pow(diam/2, 2)*Math.PI;
	var tstress = load/(Math.pow(frac/2, 2)*Math.PI);

	var params = {
	frac: frac.toFixed(1),
	diam: diam.toFixed(1),
	estress: estress.toFixed(0),
	RA: RA,
	tstress:tstress.toFixed(2)

};
var trueAnswer = {

	tstress: tstress

};

var questionData = {
            params: params,
            trueAnswer: trueAnswer
};
	return questionData;
};
return server;
});
