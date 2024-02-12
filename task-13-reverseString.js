let myString = 'we live to fight another day';

function forwordString(string){
    let stringAsArray = [];
    let elements;
    for(let index=0; index< string.length; index++){

        elements =string[index];
        console.log(elements);
        stringAsArray = stringAsArray + elements;
        
        
    }
    console.log('string printed as new array :', stringAsArray);
    return elements;
}
// forwordString(myString);

function reverseString(string){

    let elements;
    let reverseStringAsArray=[];
    // to calculate reverse string, index value should be started from the the given string length minus one.
    for( let index=string.length-1; index>=0; index--){
        elements =string[index];
        console.log(elements);
        reverseStringAsArray = reverseStringAsArray + elements;

    }
    console.log('string printed as reverse way :', reverseStringAsArray);
    return reverseString;

}
reverseString(myString);