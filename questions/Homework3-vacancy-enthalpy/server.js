define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
    var rand = new PrairieRandom.RandomGenerator(vid);
	
	var T0 = 0.01*rand.randInt(111000, 133000);
	var T1= T0+273;
	var avogadro = 6.022e+23;
	var R = 8.314;
	var enthalp1 = (R * Math.log(5.3e-3/3.1e-5)/(1/(T1)-1/2719));
	var enthalpy = enthalp1/avogadro * 6.242e+18;
	
	var params = {
	T1:T0.toFixed(0),	
	enthalp1:enthalp1,
	enthalpy:enthalpy.toFixed(2)

	};
	var trueAnswer = {
	enthalpy: enthalpy
		};
	var questionData = {
    params: params,
    trueAnswer: trueAnswer
	};
	return questionData;
	};
	return server;
	});
