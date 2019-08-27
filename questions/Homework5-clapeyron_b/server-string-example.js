
define(["underscore", "PrairieRandom", "PrairieGeom", "renderer"], function(_, PrairieRandom, PrairieGeom, renderer) {

    var server = {};
	
    server.getData = function(vid) {
        var rand = new PrairieRandom.RandomGenerator(vid);
		var w = rand.randInt(4, 12);
        var a = rand.randInt(1, 5);
		
		var imgFile = "Picture1.png";		
		
			var Rb = -w*a/3;
			var Ra = 7*w*a/3;
			
			var mo = "3 w a^2";

			var shapeV1 = "A";
			var shapeV2 = "C";
			var shapeV3 = "A";
			var shapeM1 = "A";
			var shapeM2 = "F";
			var shapeM3 = "B";
					
			var v1_0 = 0;
			var v1_a = 0;
			var v2_a = Ra;
			var v2_c = - Rb ;
			var v3_c = - Rb;
			var v3_d = - Rb;
		
			var m1_0 = 0;
			var m1_a = 0;
			var m2_a = 0;
			var m2_c = 8*w*a*a/3;
			var m3_c = 8*w*a*a/3;
			var m3_d = 3*w*a*a;
		
        var params = {
			w: w,
			a: a,
			imgFile: imgFile,
			mo: mo,
        };

        var trueAnswer = {
			shapeM1: shapeM1,
			shapeM2: shapeM2,
			shapeM3: shapeM3,
        };
        var questionData = {
            params: params,
            trueAnswer: trueAnswer,
        };
        return questionData;
    };

    server.gradeAnswer = function(vid, params, trueAnswer, submittedAnswer, options) {
        var score = 0, feedback = {};
        // if (PrairieGeom.checkEqual(trueAnswer, submittedAnswer, 1e-2, 1e-8))
        //     score = 1;
	if ((submittedAnswer.shapeM1.toUpperCase().trim() == trueAnswer.shapeM1) &&
	    (submittedAnswer.shapeM2.toUpperCase().trim() == trueAnswer.shapeM2) &&
	    (submittedAnswer.shapeM3.toUpperCase().trim() == trueAnswer.shapeM3))
	    score = 1;	
        return {score: score, feedback: feedback};
    };
    
		
	return server;
});
