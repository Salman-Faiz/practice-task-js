function isLeapYear(year){
    let leapYearCondition_1 = year%4;
    let leapYearCondition_2 = year%100;
    let leapYearCondition_3 = year%400;

if(leapYearCondition_1 === 0 && leapYearCondition_2 !== 0 || leapYearCondition_3 ===0){

 console.log('the year is Leap year');
    
}
else{
    console.log('the year is not Leap year');
}

}
isLeapYear(1900);