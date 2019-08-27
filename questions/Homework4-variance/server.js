define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
    var rand = new PrairieRandom.RandomGenerator(vid);
	
	
	var CA = rand.randInt(1, 2);
    var CB = rand.randInt(1, 3);
    var CC = rand.randInt(1, 10);
    var PA = 1;
    var PB = 2;
    var PC = CC+2-0; 
	
    var FA = CA+2-PA;
    var FB = CB+2-PB;
    var FC = CC+2-PC;
	
	var params = {
	CA:CA,
    CB:CB,
	CC:CC,
    PA:PA,
    PB:PB,
    PC:PC,
    FA:FA,
    FB:FB,
    FC:FC

	};
	var trueAnswer = {
	FA:FA,
    FB:FB,
    FC:FC
		};

var questionData = {
params: params,
trueAnswer: trueAnswer
};
return questionData;
};
return server;
});
