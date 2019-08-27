define(["sylvester", "PrairieGeom"], function(Sylvester, PrairieGeom) {
    var $V = Sylvester.Vector.create;
              var $M = Sylvester.Matrix.create;
              
              var library = {};
              
              library.squareCorners = function(pd,rO,L,thetaRad) {
                             
                             var OX = rO.e(1);
                             var OY = rO.e(2);
                             // Corners of the square             
                             var rA = $V([OX-L, OY-L]);
                             var rB = $V([OX+L, OY-L]);
                             var rC = $V([OX+L, OY+L]);
                             var rD = $V([OX-L, OY+L]);                         
                             // Rotating the square
                             rA = rA.rotate(thetaRad, rO);
                             rB = rB.rotate(thetaRad, rO);
                             rC = rC.rotate(thetaRad, rO);
                             rD = rD.rotate(thetaRad, rO);     
                             // Drawing the square
                             pd.line(rA, rB);
                             pd.line(rB, rC);
                             pd.line(rC, rD);
                             pd.line(rD, rA); 
                             // Drawing axis
                             var r2 = $V([OX + 3*L, OY]);
                             var r3 = $V([OX, OY + 3*L]);
                             var r4 = $V([OX+0.7*L, 0]);
                             r4 = r4.rotate(thetaRad, rO);
                             pd.save();
                             pd.setProp("arrowLineWidthPx", 1);
                             pd.setProp("arrowheadLengthRatio",16);   
        pd.arrow(rO,r2);
        pd.arrow(rO,r3);
                             pd.labelLine(rO, r2, $V([1.1, 0]), "x");     
                             pd.labelLine(rO, r3, $V([1.1, 0]), "y");     
                             pd.circleArrow(rO, L/3, 0 , thetaRad);
                             pd.setProp("arrowheadLengthRatio",7);   
                             pd.arrow(rO,r4);             
                             pd.restore();      
                             
                             return {
                                           rA: rA,
                                           rB:rB,
                                           rC:rC,
                                           rD:rD,
                             }                           
              };
              //-----------------------------------------------------------------------            
              library.drawMohrsCircle = function(pd,rMO,domain,T,pstress) {

                             var OMX = rMO.e(1);
                             var OMY = rMO.e(2);     
                             // ---------------------------------------------------------------------                             
                             // -------------- START DRAW MOHR'S CIRCLE FUNCTION --------------------             
                             // ---------------------------------------------------------------------                                           
                            //Set up system of coordinates
                             var rM1 = $V([OMX + 1.2*domain,OMY]);
                             var rM2 = $V([OMX - 1.2*domain,OMY]);
                             var rM3 = $V([OMX,OMY+1.2*domain]);                           
                             var rM4 = $V([OMX,OMY-1.2*domain]);                            

                             var sigma_average = (T.e(1)+T.e(2))/2;
                             var sigma_diff = (T.e(1)-T.e(2))/2;                                        
                             
                             var sigma_max = Math.abs(pstress.sigma1);
                             if (Math.abs(pstress.sigma2) > sigma_max) sigma_max = Math.abs(pstress.sigma2);
                             var sigma_ave_scale = sigma_average*domain/sigma_max;
                             var rMC = $V([OMX + sigma_ave_scale,OMY]);
                             var rp1 = $V([OMX + pstress.sigma1*domain/sigma_max,OMY]);

                             pd.circle(rMC,pstress.taumax*domain/sigma_max);
                             
                             pd.arrow(rMO,rM1);
        pd.line(rMO,rM2);
                             pd.labelLine(rMO, rM1, $V([0.9, -1.4]), "sigma");             
        pd.arrow(rMO,rM4);
        pd.line(rMO,rM3);
                             pd.labelLine(rMO, rM4, $V([0.9, 1.3]), "tau");
                             
                             // Fixed point X and Y
                             var Xp = $V([OMX+T.e(1)*domain/sigma_max,OMY-T.e(3)*domain/sigma_max]);
                             var Yp = $V([OMX+T.e(2)*domain/sigma_max,OMY+T.e(3)*domain/sigma_max]);
                             pd.save();
                             pd.setProp("pointRadiusPx", 5);
                             pd.point(Xp);
                             pd.line(Xp,Yp);
                             pd.labelLine(Yp, Xp, $V([1.1, 1]), "X");
                             pd.point(Yp);
                             pd.labelLine(Xp, Yp, $V([1.1, 1]), "Y");
                             //pd.setProp("pointRadiusPx", 4);
                             //pd.setProp("shapeOutlineColor","rgb(0,0,255)");
                             //pd.point(rp1);
                             //pd.labelLine(rMC, rp1, $V([1.1, 1.3]), "p1");                  
                             pd.restore();
                             // --------------- END DRAW MOHR'S CIRCLE  FUNCTION ----------------------- //      
              };
                             
              //-----------------------------------------------------------------------            
              library.drawStressArrows = function(pd,T,arrowsPoints,precision) {              
              
                             pd.save();
                             
                             if (precision === undefined) { // Nd = Number of decimal places
                                                          var Nd = 0;
                             }
                             else Nd = precision;
                             
                             pd.setProp("shapeOutlineColor","rgb(255,0,0)");                          
                             if (T.e(1) > 0) {
                                           pd.arrow(arrowsPoints.rE,arrowsPoints.rF);
                                           pd.labelLine(arrowsPoints.rE,arrowsPoints.rF, $V([0.1, -2.0]),  Math.abs(T.e(1)).toFixed(Nd).toString() + " MPa");          
                                           pd.arrow(arrowsPoints.rG,arrowsPoints.rH);
                             }
                             else{
                                           pd.arrow(arrowsPoints.rF,arrowsPoints.rE);
                                           pd.labelLine(arrowsPoints.rF,arrowsPoints.rE, $V([0, -2.0]),  Math.abs(T.e(1)).toFixed(Nd).toString() + " MPa");            
                                           pd.arrow(arrowsPoints.rH,arrowsPoints.rG);
                             }
                             if (T.e(2) > 0) {
                                           pd.arrow(arrowsPoints.rI,arrowsPoints.rJ);
                                           pd.labelLine(arrowsPoints.rI,arrowsPoints.rJ, $V([0.1, -2.0]),  Math.abs(T.e(2)).toFixed(Nd).toString() + " MPa");           
                                           pd.arrow(arrowsPoints.rK,arrowsPoints.rL);
                             }
                             else{
                                           pd.arrow(arrowsPoints.rJ,arrowsPoints.rI);
                                           pd.labelLine(arrowsPoints.rJ,arrowsPoints.rI, $V([0, -2.0]),  Math.abs(T.e(2)).toFixed(Nd).toString() + " MPa");            
                                           pd.arrow(arrowsPoints.rL,arrowsPoints.rK);
                             }
                             
                             pd.setProp("shapeOutlineColor","rgb(0,200,0)");
                             if (T.e(3) > 0) {
                                           pd.arrow(arrowsPoints.rM,arrowsPoints.rN);
                                           pd.arrow(arrowsPoints.rQ,arrowsPoints.rP);
                                           pd.arrow(arrowsPoints.rR,arrowsPoints.rS);
                                           pd.arrow(arrowsPoints.rU,arrowsPoints.rT);
                                           pd.labelLine(arrowsPoints.rU,arrowsPoints.rT, $V([0.9, 0.7]),  Math.abs(T.e(3)).toFixed(Nd).toString() + " MPa");
                             }
                             else{
                                           pd.arrow(arrowsPoints.rN,arrowsPoints.rM);
                                           pd.arrow(arrowsPoints.rP,arrowsPoints.rQ);
                                           pd.arrow(arrowsPoints.rS,arrowsPoints.rR);
                                           pd.arrow(arrowsPoints.rT,arrowsPoints.rU);
                                           pd.labelLine(arrowsPoints.rU,arrowsPoints.rT, $V([0.9, 0.7]),  Math.abs(T.e(3)).toFixed(Nd).toString() + " MPa");
                             }
                             
                             pd.restore();
              };
                             
              //-----------------------------------------------------------------------            
              library.saveMouseClickToSubmittedAnswer = function(subAns,prefix,arrowsPoints,start,end) {            
              
                             var rStart = $V(start.elements); 
                             
                  var magTol = 0.25;                    
                             var key = ["EF","GH","IJ","KL","MN","PQ","RS","TU"];     
                             var rpoint = ["rE","rF","rG","rH","rI","rJ","rK","rL","rM","rN","rP","rQ","rR","rS","rT","rU"];
                             var posStart, posEnd; 

                             
                             for (var i=0;i<16;i++) {
                                           var index = Math.floor(i/2); 
                                           var name1 = prefix+"Line"+key[index]+"Start";
                                           var name2 = prefix+"Line"+key[index]+"End";
                                           if (rStart.subtract(arrowsPoints[rpoint[i]]).modulus() < magTol) {
                                                         subAns.set(name1,arrowsPoints[rpoint[i]].elements);
                                                          subAns.set(name2,end.elements);         
                                                          //console.log(rpoint[i],key[index]);
                                                          break;
                                           }                                                        
                             }

              };
              //-----------------------------------------------------------------------                          
              library.drawStressArrowsFromMouseClickInput = function(pd,prefix,subAns) {      

                             var key = ["EF","GH","IJ","KL","MN","PQ","RS","TU"];     

                             pd.save();
                             pd.setProp("arrowLineWidthPx", 4.5);                 
                             
                             for (i=0;i<8;i++) {
                                           if (i<4) pd.setProp("shapeOutlineColor","rgb(255,0,0)");
                                           if (i>=4) pd.setProp("shapeOutlineColor","rgb(0,200,0)");
                                           var name1 = prefix+"Line"+key[i]+"Start";
                                           var name2 = prefix+"Line"+key[i]+"End";
                                           if ( subAns.has(name1) && subAns.has(name2) ){
                                                          var rStart = $V(subAns.get(name1));
                                                          var rEnd = $V(subAns.get(name2));
                                                          pd.arrow(rStart,rEnd);
                                           }  
                             }             
                                                                        
                             pd.restore();
              };
              //-----------------------------------------------------------------------            
              library.stressArrowPoints = function(pd,rO,L,thetaRad,drawPoints,arrowFixedLength,rotT,pstress) {              
                             // Fixed size of arrows: when using drawing feature (arrows are the solution)
                             // Variable size of arrows: when arrows are given as input of the problem
                             var OX = rO.e(1);
                             var OY = rO.e(2);
              
                             // Creating points for stress arrows
                             if (arrowFixedLength) {
                                           var d1 = 1.5*L;
                                           var d2 = L;
                                           var d3 = d2;
                                           var x = 1.2*L;
                                           var y = 0.5*L;
                             }
                             else       {
                                           // Normalized stresses
                                           var sx = L*rotT.e(1)/Math.abs(pstress.sigma1);
                                           var sy = L*rotT.e(2)/Math.abs(pstress.sigma1);
                                           var txy =L*rotT.e(3)/Math.abs(pstress.sigma1); 
                                           var d1 = 1.4*L;
                                           var d2 = Math.abs(sx)/2;
                                           var d3 = Math.abs(sy)/2;
                                           var x = 1.2*L;
                                           var y = Math.abs(txy)/2;
                             }             
                             var rE = $V([OX+d1,OY]);
                             var rF = $V([OX+d1+d2, OY]);     
                             var rG = $V([(OX-d1), OY]);
                             var rH = $V([(OX-d1-d2), OY]);                                
                             var rI = $V([OX,OY+d1]);
                             var rJ = $V([OX,OY+d1+d3]);       
                             var rK = $V([OX,OY-d1]);
                             var rL = $V([OX,OY-d1-d3]);
                             var rM = $V([OX+x,OY-y]);
                             var rN = $V([OX+x,OY+y]);           
                             var rP = $V([OX+y,OY+x]);
                             var rQ = $V([OX-y,OY+x]);
                             var rR = $V([OX-x,OY+y]);
                             var rS = $V([OX-x,OY-y]);             
                             var rT = $V([OX-y,OY-x]);
                             var rU = $V([OX+y,OY-x]);                                        
                             
                             // Rotating the points
                             rE = rE.rotate(thetaRad, rO);
                             rF = rF.rotate(thetaRad, rO);
                             rG = rG.rotate(thetaRad, rO);
                             rH = rH.rotate(thetaRad, rO);
                             rI = rI.rotate(thetaRad, rO);
                             rJ = rJ.rotate(thetaRad, rO);
                             rK = rK.rotate(thetaRad, rO);
                             rL = rL.rotate(thetaRad, rO);                     
                             rM = rM.rotate(thetaRad, rO);
                             rN = rN.rotate(thetaRad, rO);
                             rP = rP.rotate(thetaRad, rO);
                             rQ = rQ.rotate(thetaRad, rO);
                             rR = rR.rotate(thetaRad, rO);
                             rS = rS.rotate(thetaRad, rO);
                             rT = rT.rotate(thetaRad, rO);
                             rU = rU.rotate(thetaRad, rO);

                             // Drawing the points when drawPoints = true                                              
                             if (drawPoints) {
                                           pd.save();
                                           pd.setProp("pointRadiusPx", 5);
                                           pd.setProp("shapeOutlineColor","rgb(200,0,0)");                             
                                           pd.point(rE); 
                                           pd.point(rF); 
                                           pd.point(rG); 
                                           pd.point(rH); 
                                           pd.point(rI); 
                                           pd.point(rJ); 
                                           pd.point(rK); 
                                           pd.point(rL); 
                                           pd.setProp("shapeOutlineColor","rgb(0,150,0)");                                           
                                           pd.point(rM); 
                                           pd.point(rN); 
                                           pd.point(rP); 
                                           pd.point(rQ); 
                                           pd.point(rR); 
                                           pd.point(rS); 
                                           pd.point(rT); 
                                           pd.point(rU);                                                
                                           pd.restore();      
                             }
                             
                             return {
                                           rE: rE,
                                           rF:rF,
                                           rG:rG,
                                           rH:rH,
                                           rI:rI,
                                           rJ: rJ,
                                           rK:rK,
                                           rL:rL,
                                           rM:rM,
                                           rN:rN,
                                           rP:rP,
                                           rQ:rQ,
                                           rR: rR,
                                           rS:rS,
                                           rT:rT,
                                           rU:rU,
                             }
              };            

             
    return library;
});
