define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {
      
      var server = new QServer();
      
      server.getData = function(vid) {
      var rand = new PrairieRandom.RandomGenerator(vid);
      
      var sp3 = rand.randElem(['Diamond', 'Water', 'Ammonia', 'Chloroform', 'Methane', 'Ethane']);
      var sp2 = rand.randElem(['Boron trichloride', 'Sulfur dioxide', 'Ethene', 'Aluminum trihydride']);
      var sp = rand.randElem(['Carbon dioxide', 'Acetylene', 'Nitrogen gas', 'Beryllium chloride', 'Magnesium hydride']);
      var angsp = 180;
      var angsp2 = 120;
      var angsp3 = 109.5;
      
      var params = {
	  sp3:sp3,
	  sp2:sp2,
	  sp:sp,
	  angsp3:angsp3,
      angsp:angsp2,
      angsp:angsp
      };
      
      var trueAnswer = {
	  sp3:sp3,
	  sp2:sp2,
	  sp:sp,
	  angsp3:angsp3,
      angsp2:angsp2,
      angsp:angsp
      };
      
      var questionData = {
	  params: params,
	  trueAnswer: trueAnswer
      };
      
	  return questionData;
      };
    return server;
});
