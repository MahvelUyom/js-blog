var textarea = document.querySelector('.textarea');
var postBtn = document.querySelector('.post-btn');
var postedDiv = document.querySelector('.posted-article');

postBtn.addEventListener("click", ()=>{
  var newDiv = document.createElement("div");
  postedDiv.appendChild(newDiv);
  newDiv.classList.add('new-div')
  newDiv.innerHTML = textarea.value ;

  
var deleteList = document.createElement("button");
deleteList.innerHTML = "Delete";
deleteList.classList.add('delete-btn')
newDiv.appendChild(deleteList);


deleteList.addEventListener("click", ()=>{
  newDiv.remove()
  console.log("clicked")
})

})