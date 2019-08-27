define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
        var rand = new PrairieRandom.RandomGenerator(vid);
       var a= 0.01*rand.randInt(510, 580);
    var r0 = a/2;

	var params = {
       a:a.toFixed(3),
       r0:r0.toFixed(3)

};
var trueAnswer = {
	r0: r0,
};

var questionData = {
            params: params,
            trueAnswer: trueAnswer
};
	return questionData;
};
return server;
});
