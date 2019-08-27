define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
    var rand = new PrairieRandom.RandomGenerator(vid);
	
	var T0 = 0.01*rand.randInt(85000, 95000);
	var T1= T0+273;
	var ener0=0.01*rand.randInt(200, 270);
	var ener=ener0-1;
	var k=1.38064852e-23; 

	var Txinv = 1/(T1) - (k*Math.log(10))/(ener * 1.602e-19); 
	var Txc=1/Txinv;
	var Tx = Txc-273;
	var deltaT = Tx-T0;

	var params = {
	T1:T0.toFixed(0),
	ener0:ener0.toFixed(2),
	ener: ener.toFixed(2),
	Txinv:Txinv,
	Txc:Txc,
	Tx:Tx,
	deltaT:deltaT.toFixed(4)

	};
	var trueAnswer = {
	deltaT:deltaT
		};
       
    // OPTIONAL, if missing then
    // relTol = 0.01 and absTol = 1e-8 will be used
    var options = {
    relTol: 0.01, // relative tolerance for checking answers (OPTIONAL)
    absTol: 1e-8, // absolute tolerance (OPTIONAL)
    };
       
	var questionData = {
    params: params,
    trueAnswer: trueAnswer
	};
	return questionData;
	};
	return server;
	});
