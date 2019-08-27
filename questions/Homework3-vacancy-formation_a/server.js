define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
    var rand = new PrairieRandom.RandomGenerator(vid);
	
	var T0 = 0.01*rand.randInt(85000, 95000);
	var T1= T0+273;
	var ener=0.01*rand.randInt(180, 220);
	var k=1.38064852e-23; 

	var Txinv = 1/(T1) - (k*Math.log(10))/(ener * 1.602e-19); 
	var Txc=1/Txinv;
	var Tx = Txc-273;

	var params = {
	T1:T0.toFixed(0),
	ener: ener.toFixed(2),
	Txinv:Txinv,
	Txc:Txc,
	Tx:Tx

	};
	var trueAnswer = {
	Tx:Tx
		};
	var questionData = {
    params: params,
    trueAnswer: trueAnswer
	};
	return questionData;
	};
	return server;
	});
