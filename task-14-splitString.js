const myString= 'I wanted to step out of your shadow. You understand that, do not you?';
const words = myString.split(' ')

function reverseString(string){
    let elements;
    let splitString;
    let splitStringReverse=[]
   
    for(let i=string.length-1; i>=0; i--){
        elements =string[i];
        console.log(elements);
        splitStringReverse = splitStringReverse + elements;
        // console.log(i);
    // splitStringReverse = string[i];
    
    }
    console.log(splitStringReverse);
     
     return splitStringReverse;

}
reverseString(words);