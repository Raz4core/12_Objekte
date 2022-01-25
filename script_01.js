
/***** Erinnerung: Arrays *******/

let arr;
// arr = ["Geh","dich","retten!"];
// output(arr);
// output(arr[0]);


// // nested arrays
// arr = [["Geh","dich","retten!"],["Bevor","du","fällst!"]];
// output(arr[0][2]);
// output(arr[1][2]);
// output("--------");

// // nested loops
//  for (let i = 0; i < 2; i++) {
//          for (let j = 0; j < arr[0].length; j++){
//         output(arr[i][j]);
//          }
        
//  }


/***** Objekte 1 Daten/Funktionen *******/

// let person = 
//         {
//                 firstName: "Thilo",
//                 familyName:"Schönemeyer",
//                 salery:[120000,160000],
//                 permission: true,
//                 sayHello: 
//                         function() {
//                             return "Hello, ich bin " + this.firstName;    
//                         }
     
//         };      


// // output(person);
//  person.firstName = "Thilo";
// // output(person.firstName);
// // output(person.familyName);

// const txt = "Ich bin " + person.firstName + " " +
//                 person.familyName + " und verdiene " +
//                 person.salery[1] + " p.a"
// output(txt);

// output(person.sayHello());

/****Objekte 2 - Hierarchie ****/

//Tiefer, tiefer - Irgendwo in der Tiefe gibt es ein licht // K.Bush
// Der Baikalsee ist mit 1642m der tiefste see auf der Erde.
// deep - deeper - deepest

const baikal = {

        value:"10m",
        deep:{
                deeper:{
                        deepest:"Das Licht - auf 1642m!"
                }
        }
};

output(baikal);
output(baikal.value);
output(baikal.deep.deeper.deepest);

/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}