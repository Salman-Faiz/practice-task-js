const checkLeapYear = [2023, 2024, 2025, 2028, 2030, 2032, 2036,2038, 2040];
const leapYearArray = [];

function findLeapYear(years) {
    var index;
    var arrayElements;
    for (let i = 0; i < years.length; i++) {

        index = i;
        arrayElements = years[index];

        if (arrayElements % 4 === 0 && arrayElements % 100 !== 0 || arrayElements % 400 === 0) {
            leapYearArray.push(arrayElements);
          
        } 
        
    }
console.log(leapYearArray);


}
findLeapYear(checkLeapYear);
