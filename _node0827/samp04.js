let puppy = "cute";
{
    let puppy = "so cute";//괄호 내에서만 살아있는 변수
    console.log(puppy);
}
console.log(puppy);

var pup = "cute";//포인터 처럼 변수의 이름을 한번 선언하고 해당 값을 변경하는 식
console.log(pup);
{
    var pup = "so cute";
}
console.log(pup);