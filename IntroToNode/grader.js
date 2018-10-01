function averger (arr){

    let sum = 0;
    for (let i = 0; i < arr.length; i++){

        sum += arr[i];
        console.log(sum);
    }

    return (sum/arr.length)

}

console.log("Mouni's grades are: " + averger([98,97,91,95,90]));