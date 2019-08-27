define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {
       
       var server = new QServer();
       
       server.getData = function(vid) {
       var rand = new PrairieRandom.RandomGenerator(vid);
       
       var qI= 0.01*rand.randInt(300, 400)
       var pi = Math.PI;
       var  aBCC= 2*pi*(Math.sqrt(2))*(1/qI);
       var  aFCC= 2*pi*(Math.sqrt(3))*(1/qI);
       
       var params = {
       qI: qI.toFixed(3),
       aBCC:aBCC.toFixed(3),
       aFCC:aFCC.toFixed(3)
       
       };
       var trueAnswer = {
       aBCC:aBCC,
       aFCC:aFCC
       };
       
       var questionData = {
       params: params,
       trueAnswer: trueAnswer
       };
       return questionData;
       };
       return server;
       });

	   