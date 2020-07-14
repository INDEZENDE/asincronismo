function sum (a, b){
    return a+b;
}
function calc (a, b, callback){
    return callback(a,b);
}

console.log(calc(10, 10, sum));
