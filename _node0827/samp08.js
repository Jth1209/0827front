var people = {
    name:'gildong',
    say:function(){
        console.log(this);
    }
};

people.say();

var sayPeople = people.say.bind(people);//bind는 () 에 들어가는 객체를 스코프로 고정시키는 것을 의미한다.
sayPeople();