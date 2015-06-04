var myCode = require('./../grader.js');

describe('A function which takes a test score and returns the equivalent letter grade.', function() {
   it('#letterGrader()', function() {
     expect(myCode.letterGrader(92)).toEqual('A');
   });
   it('#letterGrader()', function() {
     expect(myCode.letterGrader(87)).toEqual('B');
   });
   it('#letterGrader()', function() {
     expect(myCode.letterGrader(73)).toEqual('C');
   });
   it('#letterGrader()', function() {
     expect(myCode.letterGrader(65)).toEqual('D');
   });
   it('#letterGrader()', function() {
     expect(myCode.letterGrader(59)).toEqual('F');
   });
   it('#letterGrader()', function() {
     expect(myCode.letterGrader(32)).toEqual('F');
   });
   it('#letterGrader()', function() {
     expect(myCode.letterGrader('A')).not.toEqual('A');
   });
   it('#letterGrader()', function() {
     expect(myCode.letterGrader('B')).not.toEqual('B');
   });
   it('#letterGrader()', function() {
     expect(myCode.letterGrader('C')).not.toEqual('C');
   });
   it('#letterGrader()', function() {
     expect(myCode.letterGrader('D')).not.toEqual('D');
   });
   it('#letterGrader()', function() {
     expect(myCode.letterGrader('F')).not.toEqual('F');
   });
   it('#letterGrader()', function() {
     expect(myCode.letterGrader(-1)).not.toEqual('F');
   });
   it('#letterGrader()', function() {
     expect(myCode.letterGrader('AB')).not.toEqual('A');
   });
   it('#letterGrader()', function() {
     expect(myCode.letterGrader('%' || '$' || '@' || '&' || '*' || '(' || ')' || '!')).not.toEqual('A');
   });
 });

   describe('A function which takes an array of test scores and returns the average score.', function() {
     it('#getAverage()', function() {
     expect(myCode.getAverage([90, 95, 87, 60])).toEqual(83);
   });
 });

   describe('A function which takes an array of test scores and calculates the median score.', function() {
       it('#medianScore()', function() {
         expect(myCode.medianScore([52,80,80,86,94])).toEqual(80);
         expect(myCode.medianScore([73, 51, 36, 92, 1, 86])).toEqual(62);
         expect(myCode.medianScore(['a', 'b', 'c', 'c', '0'])).not.toEqual(92);
         expect(myCode.modeScore([8210, -1, null, 'sdf'])).not.toEqual(92);
   });
 });

   describe('A function `modeScore` which takes an array of test scores and calculates the mode score.', function() {
     it('#modeScore()', function() {
       expect(myCode.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual(92);
       expect(myCode.modeScore(['a', 'b', 'c', 'a', 'a', 'd', 'e'])).not.toEqual(92);
       expect(myCode.modeScore([8210, -1, null, 'sdf'])).not.toEqual(92);
     });
});
