define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {

    var server = new QServer();

    server.getData = function(vid) {
        var rand = new PrairieRandom.RandomGenerator(vid);
        var radius = 0.001*rand.randInt(100, 200);
	var xa = rand.randInt(0.5, 1.5);
	var xb = rand.randInt(2, 3);
	var pi = Math.PI;
	var k = 8.9e+9;
	var r0 = 0.25;
	var aRad = r0 - radius;
	var energy = 4*(1.6e-19)*(1.6e-19)*k*(1-1/6)/0.25e-9;
        var ic=(1-Math.exp(-0.25*(xa-xb)*(xa-xb)))*100.0;

	var params = {
          radius: radius.toFixed(3),
          xa: xa.toFixed(1),
          xb: xb.toFixed(1)
        };

        var trueAnswer = {
          ic: ic.toFixed(3)
        };

        // OPTIONAL, if missing then
        // relTol = 0.01 and absTol = 1e-8 will be used
        var options = {
            relTol: 0.01, // relative tolerance for checking answers (OPTIONAL)
            absTol: 1e-8, // absolute tolerance (OPTIONAL)
        };

        var questionData = {
            params: params,
            trueAnswer: trueAnswer,
            options: options
        };

	return questionData;
    };
    
    // OPTIONAL gradeAnswer() function
    // if not present, then the submittedAnswer will be automatically checked against the trueAnswer
    server.gradeAnswer = function(vid, params, trueAnswer, submittedAnswer, options) {
        var score = 0;
        if (PrairieGeom.checkEqual(trueAnswer, submittedAnswer, options.relTol, options.absTol))
            score = 1;
        return {score: score};
    };
    
    return server;
});
