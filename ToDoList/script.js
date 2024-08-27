const onClickAdd = () => {
    const textEl = document.getElementById("add-text");
    const text = textEl.value;
    
    const li = document.createElement("li");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const dbutton = document.createElement("button");
    const db = document.getElementById("delete-button");
    
    p.textContent = text;
    
    div.appendChild(p);
    div.appendChild(dbutton);
    li.appendChild(div);
    
    document.getElementById("memo-list").appendChild(li);
    
    dbutton.textContent="삭제";
    dbutton.addEventListener("click",() =>{
        const deleteTarget = dbutton.closest("li");
        document.getElementById("memo-list").removeChild(deleteTarget);
    });

    db.addEventListener("click",()=>{
        document.getElementById("memo-list").removeChild(li);
    })
    
    textEl.value = "";
}




document.getElementById("add-button").addEventListener("click", () => onClickAdd());