define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
    var rand = new PrairieRandom.RandomGenerator(vid);
	
	var n = rand.randInt(100, 900);
	var m0 = 28.052;
	var mw = n*m0;
	
	
		
	var params = {
	n:n,
	m0:m0,
	mw:mw.toFixed(2)

	};
	var trueAnswer = {
	mw:mw
		};

var questionData = {
params: params,
trueAnswer: trueAnswer
};
return questionData;
};
return server;
});

