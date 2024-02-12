// const fibo = [0, 1, 1, 2, 3,5, 8, 13, 21, 34, 55, 89, 144, 233, 377];

const fibo=[ 0,1];
function fibonacci(numbers){
    for(let i=2; i<=14; i++){
        numbers[i]=numbers[i-1] + numbers[i-2]
        console.log(numbers);
    }
    return numbers;
}
fibonacci(fibo);

