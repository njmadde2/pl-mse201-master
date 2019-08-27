define(["QServer", "PrairieRandom", "PrairieGeom"], function (QServer, PrairieRandom, PrairieGeom) {

    var server = new QServer();

    server.getData = function (vid) {
        var rand = new PrairieRandom.RandomGenerator(vid);

        var a = 0.01 * rand.randInt(37, 50);
        var avogadro = 6.022e+23;
        var dens = 4 * 39.948 / (Math.pow(a * 1e-7, 3) * avogadro);

        var params = {


            a: a.toFixed(3),
            dens: dens.toFixed(3)


        };
        var trueAnswer = {
            dens: dens

        };
        var questionData = {
            params: params,
            trueAnswer: trueAnswer
        };

        return questionData;
    };
    return server;
});

