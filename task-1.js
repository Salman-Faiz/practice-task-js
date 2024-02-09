function foo(){
    console.log('foo');
    bar();
}
bar();
function bar(){
    console.log('bar');
}
foo();