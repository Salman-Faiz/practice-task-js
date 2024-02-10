
function findSum(numbers){
    let  araayElementsSum =0;
    for(let i=0; i < numbers.length; i++){

       const index= i;
       var arrayItems = numbers[index];
       araayElementSum =araayElementsSum + arrayItems;
       console.log(index, arrayItems ,araayElementSum);
       
    }
}

const mynumbers =[ 22,36,35,14,25,45,89];
mynumbers.push(55);
findSum(mynumbers);