define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
        var rand = new PrairieRandom.RandomGenerator(vid);
        var  a= 0.01*rand.randInt(300, 400)
        var  ldFCC110=2/((Math.sqrt(2))*a);
        var  ldFCC111=1/((Math.sqrt(3))*a);
        var  ldBCC110=1/((Math.sqrt(2))*a);
        var  ldBCC111=2/((Math.sqrt(3))*a);
       
       var params = {
       a:a.toFixed(3),
       ldFCC110:ldFCC110.toFixed(3),
       ldFCC111:ldFCC111.toFixed(3),
       ldBCC110:ldBCC110.toFixed(3),
       ldBCC111:ldBCC111.toFixed(3)


};
var trueAnswer = {
	ldFCC110:ldFCC110,
    ldFCC111:ldFCC111,
    ldBCC110:ldBCC110,
    ldBCC111:ldBCC111
};
var questionData = {
            params: params,
            trueAnswer: trueAnswer
};
	return questionData;
};
return server;
});
