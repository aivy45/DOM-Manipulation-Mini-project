const array=[];
const store = document.querySelectorAll(".as-imagegrid-item a .as-imagegrid-item-title");
store.forEach((pic)=>{array.push(pic.innerText.replace("\nSupport", ""))});
