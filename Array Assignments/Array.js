//Testing this
var reveser = (array) => {

    var reversedArray = [];

   for (let i = (array.length -1); i >= 0; i--){

    reversedArray.push(array[i]);
    console.log(reversedArray);
   }


    return reversedArray
}

var isUniform = (array) => {

  //nested for loop 

  for (let i = 0; i < (array.length -1); i++){
    for (let j = 1; j < array.length; j++){       
        if (array[i] != array[j]){
        return false;
        }
    }      
  }
    return true
}


var sumArray = (array) => {
let sum = 0;

    array.forEach(element => {
        sum += element; 
        console.log(sum);   
    });

    return sum 
}

var max = (array) => {

    let max = 0; 
    array.forEach(element => {
        
        if(element > max){

            max = element; 
        }
    });

    return max
}