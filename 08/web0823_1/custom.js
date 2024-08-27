//const title= document.getElementById("title"); 과거 버전
const title= document.querySelector("#title"); //새로운 버전
console.log(title);

const frame = document.querySelectorAll("#wrap article");
let i = 0;//변수 초기화

for(let item of frame){
    console.log(++i,item);
}
