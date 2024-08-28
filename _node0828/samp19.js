function fakeSetTimeout(callback){//매개변수 callback이  callback()이랑 같음
    callback();
}

console.log(0);

fakeSetTimeout(function(){
    console.log('Hello');
});

console.log(1);