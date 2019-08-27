define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {
       
       var server = new QServer();
       
       server.getData = function(vid) {
       var rand = new PrairieRandom.RandomGenerator(vid);
       
       var qI= 0.01*rand.randInt(300, 400);
       var qII=qI/0.866;
       var pi = Math.PI;
       var  aFCC= 2*pi*(Math.sqrt(3))*(1/qI);
       var  v=aFCC*aFCC*aFCC;
       var  vexpanded=v*1.1;
       var  ahot=Math.pow((vexpanded), 1/3);
       var  qIhot=2*pi*(Math.sqrt(3))*(1/ahot);
       var  qIIhot=qIhot/0.866;
       var  dIhot=(2*pi)/qIhot;
       var  dIIhot=(2*pi)/qIIhot;
       
       var params = {
       qI: qI.toFixed(3),
       qII:qII.toFixed(3),
       qIhot:qIhot.toFixed(3),
       qIIhot:qIIhot.toFixed(3),
       dIhot:dIhot.toFixed(3),
       dIIhot:dIIhot.toFixed(3)
       
       };
       var trueAnswer = {
       dIhot:dIhot,
       dIIhot:dIIhot
       };
       
       var questionData = {
       params: params,
       trueAnswer: trueAnswer
       };
       return questionData;
       };
       return server;
       });
