define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
    var rand = new PrairieRandom.RandomGenerator(vid);
	
	
	var A = "L+SiO2";
	var B = "L";
	var C = "M";
	var D = "M";
	var E = "L+Al2O3"
	
	var params = {
	A:A,
	B:B,
	C:C,
	D:D,
	E:E

	};
	var trueAnswer = {
	A:A,
	B:B,
	C:C,
	D:D,
	E:E

		};

var questionData = {
params: params,
trueAnswer: trueAnswer
};
return questionData;
};
return server;
});
