
/***** Erinnerung: Arrays *******/

let arr;
// arr = ["Geh","dich","retten!"];
// output(arr);
// output(arr[0]);


// nested arrays
arr = [["Geh","dich","retten!"],["Bevor","du","fällst!"]];
output(arr[0][2]);
output(arr[1][2]);

// nested loops
 for (let i = 0; i < 2; i++) {
         for (let j = 0; j < 3; j++){
        output(arr[i][j]);
         }
        
 }


/***** Objekte 1 Daten/Funktionen *******/




/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}