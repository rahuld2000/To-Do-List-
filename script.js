var btn= document.querySelector("#btn");
var out_put = document.querySelector(".output");
var input= document.querySelector("#todo");
var bContainer = document.querySelector(".list")
btn.addEventListener("click",function(){
 
     out_put.textContent="";
     input.value="";
})


input.addEventListener("keydown",function(event){
    if(event.key=="Enter")
    {
        additems();
    }
})
function additems(){
 var li = document.createElement('div')
 li.className="items"
 li.textContent=input.value;
 out_put.appendChild(li);
 const compBtn = document.createElement("button")
 compBtn.className="complete-button";
 compBtn.innerHTML='<i class="fa-regular fa-square-check"></i>';
 li.appendChild(compBtn);
 const delBtn = document.createElement("button");
 delBtn.className="deletBtn";
 delBtn.innerHTML='<i class="fa-regular fa-trash-can"></i>';
 li.appendChild(delBtn);
 input.value="";
}
out_put.addEventListener("click",(event)=>{
    const target = event.target;
    if(target.className==='deletBtn')
    {
    const parent =target.parentElement;
    parent.remove();
    
    }
    if(target.className==='complete-button')
    {
    const parent =target.parentElement;
    parent.classList.toggle("completed");
   
    }

})





