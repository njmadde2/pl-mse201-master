define(["QServer", "PrairieRandom", "PrairieGeom"], function (QServer, PrairieRandom, PrairieGeom) {

    var server = new QServer();

    server.getData = function (vid) {
        var rand = new PrairieRandom.RandomGenerator(vid);

        var r = 0.01 * rand.randInt(17000, 19000)
        var a = 4 * r / Math.sqrt(2) * 0.001;
        var avogadro = 6.022e+23;
        var dens = 4 * 39.948 / (Math.pow(a * 1e-7, 3) * avogadro);
        var params = {

            r: r.toFixed(2),
            a: a.toFixed(3),


        };
        var trueAnswer = {
            a: a
        };
        var questionData = {
            params: params,
            trueAnswer: trueAnswer
        };
        return questionData;
    };
    return server;
});
