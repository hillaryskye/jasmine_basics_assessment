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
       }
};
