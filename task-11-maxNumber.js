const a =200;
const b =210;
const c= 250;

function abcMax(){

    if(a > b && a>c ){
        console.log('a is maximum number');
    }
    else if( b> a && b>c ){
        console.log( 'b is maximum number');

    }
    else{
        console.log('c is maximum number');
    }
}
abcMax();

function xyzMax(x,y,z){

    if(x>y && x>z){
        console.log('x is maximum number');
    }
    else if( y>x && y>z){
        console.log('y is maximum number');
    }
    else{
        console.log('z is maximum number');
    }
}
xyzMax(a,b,c);

const maxValue = (Math.max(a, b, c));
console.log(maxValue,'is maximum');
const minValue= (Math.min(a, b, c));
console.log(minValue,'is manimum');