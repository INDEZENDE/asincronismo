const doSomethingAsync = () => {
    return new Promise ((resolve, reject) =>{
        (true)
            ? setTimeout(()=>resolve ('Do something async'),3000)
            : reject (new Error ('Test Error'))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}
console.log('Before');
doSomething();
console.log('After');

const anotherfunction = async () => {
    try{
        const something =await doSomething();
        console.log(something);
        
    }catch(error){
        console.log(error);
        
    }
}

console.log('Before1');
anotherfunction();
console.log('After2');
