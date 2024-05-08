let btn = document.querySelector("button");
let ul  = document.querySelector("ul");
let inp = document.querySelector("input");



btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerHTML = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerHTML = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);

    ul.appendChild(item);
    console.log(inp.value);
    inp.value="";
});

// Event Delegation 

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
    
});


// Normal event

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }