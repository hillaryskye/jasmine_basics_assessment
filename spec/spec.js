var myCode = require('./../grader.js');

describe('A function which takes a test score and returns the equivalent letter grade.', function() {
   it('#letterGrader()', function() {
     expect(myCode.letterGrader(98)).toEqual('A');
   });
   it('#letterGrader()', function() {
     expect(myCode.letterGrader(82)).toEqual('B');
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
