const marks = [50, 60, 75, 95, 45, 22, 73];
function oddSum(inputMarks) {
    
    let sum=0;

    for (let i = 0; i < inputMarks.length; i++) {

        const index = i;
        // console.log(index);
        var arrayItems = inputMarks[index];

        console.log('Marks array ==>',index, arrayItems);

        var evenOdd = arrayItems % 2;
        
        if (evenOdd !== 0) {
           var arrayOddItems= arrayItems;
            sum= sum+ arrayItems;
            // console.log(arrayItems,'==>',sum);
        }
        
    }
    console.log(arrayOddItems,'==>',sum);
}
oddSum(marks);

