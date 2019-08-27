define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {
    var server = new QServer();

    server.getData = function(vid) {
        var rand = new PrairieRandom.RandomGenerator(vid);
        var radius = 0.001*rand.randInt(100, 200);
		var n = rand.randInt(4, 10);
	var pi = Math.PI;
	var k = 8.9e+9;
	var r0 = 0.25;
	var aRad = r0 - radius;
	var energy = 4*(1.6e-19)*(1.6e-19)*k*(1-1/n)/0.25e-9;

	var params = {
          radius: radius.toFixed(3),
		  n: n
        };

        var trueAnswer = {
          netEnergy: energy
        };

        // OPTIONAL, if missing then
        // relTol = 0.01 and absTol = 1e-8 will be used
        var options = {
            relTol: 0.01, // relative tolerance for checking answers (OPTIONAL)
            absTol: 1e-8 // absolute tolerance (OPTIONAL)
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
