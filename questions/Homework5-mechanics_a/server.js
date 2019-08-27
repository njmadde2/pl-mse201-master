define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
    var rand = new PrairieRandom.RandomGenerator(vid);
	
	var deltal = rand.randInt(1, 5);
	var stress = rand.randInt(300, 1000);
	
	var len = (110*deltal)/(stress*1e-3);


	var params = {
	stress: stress.toFixed(0),
	deltal: deltal,
	len:len

};
var trueAnswer = {
	len: len
};

var questionData = {
            params: params,
            trueAnswer: trueAnswer
};
	return questionData;
};
return server;
});
