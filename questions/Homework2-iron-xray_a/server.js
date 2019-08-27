define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
        var rand = new PrairieRandom.RandomGenerator(vid);
	
        var  qI= 0.01*rand.randInt(300, 400)
        var  qIIBCC= qI/0.707;
        var  qIIFCC= qI/0.866;
	
        var params = {
        qI: qI.toFixed(3),
        qIIBCC:qIIBCC.toFixed(3),
        qIIFCC:qIIFCC.toFixed(3)

};
var trueAnswer = {
    qIIBCC:qIIBCC,
    qIIFCC:qIIFCC
};

var questionData = {
            params: params,
            trueAnswer: trueAnswer
};
	return questionData;
};
return server;
});
