let promise = new Promise((resolve,reject) =>{
    let a = 1+1;
    if(a == 2){
        resolve('Success');
    }else{
        reject('Fail');
    }
});

promise.then((message)=>{//resolve일 경우
    console.log('This is in the then: ' + message);
}).catch((message)=>{//reject일 경우
    console.log('This is in the catch: '+message);
});