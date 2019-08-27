define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
    var rand = new PrairieRandom.RandomGenerator(vid);
	
	
	var rhos = 0.001*rand.randInt(900, 980);
	var rhoa = 0.001*rand.randInt(800, 890);
	var rhoc=0.998;
	
	var cryu = rhoc*(rhos-rhoa);
	var cryd = rhos*(rhoc-rhoa);
	var cry = 100*(cryu/cryd);
			
	var params = {
	rhos:rhos.toFixed(3),
	rhoc:rhoc.toFixed(3),
	rhoa:rhoa.toFixed(3),
	cry:cry.toFixed(2)

	};
	var trueAnswer = {
	cry:cry
		};

var questionData = {
params: params,
trueAnswer: trueAnswer
};
return questionData;
};
return server;
});

