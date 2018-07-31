function Bowling(arr) {
    var scores = arr;
    if (scores.length == 21) {
        scores.push(0);
    } 
    var total = 0;
    var roundScore = 0;

    for (i = 0; i < scores.length; i += 2) {
        roundScore = scores[i] + scores[i + 1];
      /*  if(roundScore == 10 && (i < scores.length - 2) ) {
            roundScore += scores[i + 2];
            console.log("the next round is a strike");
        } 
        */
       if (scores[i] == 10) {
           roundScore += scores[i + 2] + scores[i + 3];
       } else if (scores[i] + scores[i + 1] == 10) {
        roundScore += scores[i = 2];
       }




        total += roundScore;
        console.log(total);
        }
        //console.log(total);


}

/*

strike checks if first number is 10
if (scores[i] == 10)
    result: add scores[i + 2] + scores[i + 3];

else if 


spare checks if both numbers equal 10
if scores[i] + scores [i + 1] == 10
    result: add scores[i + 2];


*/










Bowling([1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 0, 1, 7, 3, 6, 4, 10, 0, 2, 8, 6]);