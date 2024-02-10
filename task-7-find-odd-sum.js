// const marks = [50, 60, 75, 95, 45, 22, 73];
// function oddSum(inputMarks) {
    
//     let sum=0;

//     for (let i = 0; i < inputMarks.length; i++) {

//         const index = i;
//         // console.log(index);
//         var arrayItems = inputMarks[index];

//         console.log('Marks array ==>',index, arrayItems);

//         var evenOdd = arrayItems % 2;
        
//         if (evenOdd !== 0) {
//            var arrayOddItems= arrayItems;
//             sum= sum+ arrayItems;
//             // console.log(arrayItems,'==>',sum);
//         }
        
//     }
//     console.log(arrayOddItems,'==>',sum);
// }
// oddSum(marks);

const inputArray =[ 11,22,33,44,55,66,77,88,99];
function findOddNumbers(numbers){

    var index;
    var arrayElements;
    var sum=0;

    const oddArray=[];
    const evenArray=[];
    
   
    for(let i=0; i<numbers.length; i++){

        // console.log(i);
        index=i;
        arrayElements =numbers[index];
        // console.log(index, arrayElements);

        if(arrayElements%2 !==0){
            // console.log(index,arrayElements);
            sum=sum + arrayElements;
            console.log(arrayElements, sum);
            oddArray.push(arrayElements);
        }
        else if(arrayElements%2 ===0){
            evenArray.push(arrayElements);
        }
       
       

    }
    console.log('odd values -->', oddArray);
    console.log('even values -->',evenArray);
    return sum;
    
}

findOddNumbers(inputArray);