define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
        var rand = new PrairieRandom.RandomGenerator(vid);
        var  a= 0.01*rand.randInt(200, 300)
        var  pdBCC111=1/((Math.sqrt(3))*a*a);
       
       
       var params = {
       a:a.toFixed(3),
       pdBCC111:pdBCC111.toFixed(3)


};
var trueAnswer = {
	pdBCC111:pdBCC111
    
};
var questionData = {
            params: params,
            trueAnswer: trueAnswer
};
	return questionData;
};
return server;
});
