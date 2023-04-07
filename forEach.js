let newArray = ["a", "b", "c", "d", "e", "f"];
// for(let i = 0; i < newArray.length; i++){
//     console.log( 'for loop: ' + newArray[i]);
// };

// for( showData of newArray){
//     console.log( 'forOf loop' + showData);
// }

newArray.forEach(forEachShow);

function forEachShow(x){
    console.log( "I'm for each loop: " + x);
};