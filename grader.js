module.exports = {

letterGrader: function(grade) {
        if (grade >= 90 && grade <= 100) {
           return 'A';
         }
         if (grade >= 80 && grade <= 89) {
            return 'B';
         }
         if (grade >= 70 && grade <= 79) {
             return 'C';
         }
         if (grade >= 60 && grade <= 69) {
             return 'D';
         }
         if (grade >= 0 && grade <= 59) {
             return 'F';
         }
       },

getAverage: function(array) {
             sum = 0;
               array.forEach(function(element) {
                   sum += element;
           });
           return sum/array.length;
       },

medianScore: function(values) {
    values.sort( function(a,b) {return a - b;} );

    var half = Math.floor(values.length / 2); // gets the middle point in the array

    if(values.length % 2){ // figures out if the value is in the middle
      return values[half];
    }
    else{                  // because value is an even num, it calculates the aver of the middle 2 nums
      return (values[half - 1] + values[half]) / 2.0; // Calculates the average of the middle 2 nums
    }
  },
  modeScore: function mode(arr) {
    var numMapping = {};
    var greatestFreq = 0;
    var mode;
    arr.forEach(function findMode(number) {
        numMapping[number] = (numMapping[number] || 0) + 1; // Places the array indexes in an object
                                                            // adds the next index into the object
        if (greatestFreq < numMapping[number]) {
            greatestFreq = numMapping[number];
            mode =+ number; // Returns the frequency of the array item
        }
    });
    return mode;
    }
};
