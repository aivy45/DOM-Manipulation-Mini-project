let lang = document.getElementById("SIvCob");
let allLang = lang.childNodes;
// removing the empty div 
for(let i=0; i<allLang.length; i+=3)
{
    allLang[i].remove();
}

// removing some of the languages 
for(let i=0; i<allLang.length; i+=2)
{
 allLang[i].remove(); 
}