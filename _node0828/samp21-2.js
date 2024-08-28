function work(sec, callback) {//반환되는 시간을 sec 매개변수로 설정해주고, callback함수를 사용해서 값을 출력한다.
    setTimeout(() => {
        callback(new Date().toISOString());
    }, sec * 1000);
};

console.log(new Date().toISOString().substring(0,10));

work(1, (result) => {
    console.log('첫번째 작업:', result);

    work(1, (result) => {
        console.log('두번째 작업:', result);

        work(1, (result) => {
            console.log('세번째 작업:', result);
        });
    });
});