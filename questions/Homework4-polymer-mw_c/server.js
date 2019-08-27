define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
    var rand = new PrairieRandom.RandomGenerator(vid);
	
	var dp1 = rand.randInt(100, 300);
	var dp2 = rand.randInt(300, 500);
	var dp3 = rand.randInt(500, 700);
	var dp4 = rand.randInt(700, 900);
	var dp5 = rand.randInt(900, 1100);
	var x1 = 0.01*rand.randInt(5,19);
	var x2 = 0.01*rand.randInt(5,19);
	var x3 = 0.01*rand.randInt(5,19);
	var x4 = 0.65-x2-x1;
	var x5 = 1.00-x4-x3-x2-x1;
	
	var m0 = 42.08;
	
	var Mn = m0*(dp1*x1+dp2*x2+dp3*x3+dp4*x4+dp5*x5);
	var Mw = m0*(dp1^2*x1+dp2^2*x2+dp3^2*x3+dp4^2*x4+dp5^2*x5);
	var pdi = Mw/Mn;
		
	var params = {
	dp1:dp1,
	dp2:dp2,
	dp3:dp3,
	dp4:dp4,
	dp5:dp5,
	x1:x1,
	x2:x2,
	x3:x3,
	x4:x4,
	x5:x5,
	m0:m0,
	Mn:Mn.toFixed(2)
	Mw:Mw.toFixed(2)
	pdi:pdi.toFixed(2)

	};
	var trueAnswer = {
	Mn:Mn,
	Mw:Mw,
	pdi:pdi
		};

var questionData = {
params: params,
trueAnswer: trueAnswer
};
return questionData;
};
return server;
});

