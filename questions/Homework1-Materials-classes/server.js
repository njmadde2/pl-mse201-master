define(["QServer", "PrairieRandom", "PrairieGeom"], function( QServer, PrairieRandom, PrairieGeom ) {
      
      var server = new QServer();
      
      server.getData = function(vid) {
      var rand = new PrairieRandom.RandomGenerator(vid);
      
      var mat1 = rand.randElem(['St. Louise Arch', 'Eiffel Tower', 'Golden Gate Bridge', 'Hip implant stem', 'Nitinol', 'Sixteenth century armor']);
      var mat2 = rand.randElem(['YBCO superconductor', 'Bone', 'Sand', 'Porcelain', 'Lithium batteries', 'Quartz']);
      var mat3 = rand.randElem(['Contact lenses', 'Super absorbent diapers', 'Rayon dress', 'Tires', 'Glue', 'DNA']);
      var mat4 = rand.randElem(['LEDs', 'Transistors', 'Solar panels', 'Computer chips', 'Diamond' , 'Silicon']);
      
      var params = {
	  mat1:mat1,
	  mat2:mat2,
	  mat3:mat3,
	  mat4:mat4
      };
      
      var trueAnswer = {
	  mat1:mat1,
	  mat2:mat2,
	  mat3:mat3,
	  mat4:mat4
      };
      
      var questionData = {
	  params: params,
	  trueAnswer: trueAnswer
      };
      
	  return questionData;
      };
    return server;
});
