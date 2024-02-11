function factorial(numbers){
    let multiplicationResult =1;

    for(let i=1; i<=numbers; i++){
        multiplicationResult=multiplicationResult*i;
        console.log(i,multiplicationResult);

    }
}

factorial(7);
console.log('factorial Reverse Multiplications');
function factorialReverse(numbers){
    let reverseMultiplication =1;
    for(let i=numbers; i>=1; i--){
        reverseMultiplication=reverseMultiplication*i;
        console.log(i,reverseMultiplication);
    }
}
factorialReverse(7);