define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
    var rand = new PrairieRandom.RandomGenerator(vid);
	
	var a = 0.001*rand.randInt(7300, 7450);
	var b = 0.001*rand.randInt(4900, 5100);
	var c = 0.001*rand.randInt(2500, 2650);
	var m0=28.052;
	
	var V = (a*1e-8)*(b*1e-8)*(c*1e-8);
	var NA = 6.022e+23;
	
	var rho = (2*m0)/(V*NA);
	
		
	var params = {
	a:a.toFixed(2),
	b:b.toFixed(2),
	c:c.toFixed(2),
	V:V,
	rho:rho.toFixed(3)

	};
	var trueAnswer = {
	rho:rho
		};

var questionData = {
params: params,
trueAnswer: trueAnswer
};
return questionData;
};
return server;
});

