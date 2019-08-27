define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
    var rand = new PrairieRandom.RandomGenerator(vid);
	
	var ax = 1.2*rand.randInt(10, 15);
	var ay = 1.2*rand.randInt(20, 35);
	var nax = rand.randInt(2, 5);
	var nay = 6-nax;
	
	var m0=(3*12.01)+(nax*ax)+(nay*ay);
		
	var params = {
	ax:ax.toFixed(2),
	ay:ay.toFixed(2),
	nax:nax,
	nay:nay,
	m0:m0.toFixed(3)

	};
	var trueAnswer = {
	m0:m0
		};

var questionData = {
params: params,
trueAnswer: trueAnswer
};
return questionData;
};
return server;
});

