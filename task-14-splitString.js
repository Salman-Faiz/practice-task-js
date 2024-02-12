const myString= 'I wanted to step out of your shadow.You understand that, do not you?'

function reverseString(string){
    const words = string.split(' ');
    
    let splitString;
    let result=[];
   
    for(let i=words.length-1; i>=0; i--){
        const elements =words[i];
        console.log(elements);
        result.push(elements);
        
    
    }
    console.log(result);
    const reversed = result.join(' ');
  
     
     return reversed;

}
reverseString(myString);