function timeCount(hour){
    let minutes = hour *60;
   
    let seconds =minutes *60; 
    console.log(hour,'hours','=',minutes,'minutes','=',seconds,'seconds');
    return seconds;
}
timeCount(10);
