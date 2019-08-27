define(["QServer", "PrairieRandom", "PrairieGeom"], function (QServer, PrairieRandom, PrairieGeom) {

    var server = new QServer();

    server.getData = function (vid) {
        var rand = new PrairieRandom.RandomGenerator(vid);
        var a = 5.64 * 1e-10;
        var k = 8.98774e+9;
        var e = 1.602e-19;
        var r0 = a / 2;
        var M = 0.01 * rand.randInt(168, 180);
        var n = 0.01 * rand.randInt(750, 850);

        var ener1=(M*e*e*k)/r0;
        var ener2=ener1*((n-1)/n);
        var ener=-1*6.24219e+18*ener2;
        ener: ener.toFixed(3);

        var params = {
            a: a.toFixed(3),
            r0: r0.toFixed(3),
            M: M.toFixed(2),
            n: n.toFixed(3),
            ener1:ener1,
            ener2:ener2
        };
        
        var trueAnswer = {
            ener: ener
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
    return server;
});
