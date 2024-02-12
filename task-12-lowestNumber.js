const inputNumbers = [13,32,5,6,45,88,21,11,23,3,2,1];

function lowestNumber(numbers){
    let lowest =numbers[0];
    for(let index =0; index < numbers.length; index++){
        
        var elements = numbers[index];
        // console.log(elements);

        if( elements < lowest){
            lowest=elements;
           
        }
    
    }
    console.log('lowest Number is',lowest);
    return lowest;

}
lowestNumber(inputNumbers);
// to pass an array in math.max/math.min function . need to use triple dot before the arrayName
const minValue= (Math.min(...inputNumbers));
console.log(minValue,'is manimum');
