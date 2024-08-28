function workP(sec){
    return new Promise((resolve,reject)=>{//resolve와 reject를 사용해 작업이 성공했을 때, 오류가 발생했을 때의 경우를 나누어 출력문을 설정할 수 있다.
        setTimeout(()=>{
            resolve(new Date().toISOString().substring(0,19));
        },sec*1000);
    });
}

workP(1).then((result)=>{//작업이 제대로 완료되면, resolve절의 내용이 출력된다. 반대로 오류가 발생할 경우, reject에 작성한 구문의 내용이 출력된다.
    console.log('첫번째 작업:',result);
    return workP(1);//다음 작업을 위해 workP를 return값으로 반환해준다.(1)은 다음 작업이 실행되는 데 걸리는 시간을 설정해주는 것.
}).then((result)=>{
    console.log('두번째 작업:',result);
    return workP(1);
}).then((result)=>{//이하 동문
    console.log('세번째 작업:',result);
});