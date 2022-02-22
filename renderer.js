// renderer.js

document.addEventListener('DOMContentLoaded',()=>{
    let names  =  myAPI.getNames();
        let listString = '<ul>';
        names.forEach(element => {
            listString  += "<li>"+element.name+"</li>"
        });
    let divNames  = document.getElementById('names');
    
    divNames.innerHTML = listString+"</ul>";

    function dummyRender(){
       let myArray = [...Array(100000).keys()]
       myArray.forEach(element => {
        listString  += "<li>"+myAPI.getRandomText()+"</li>"
        });
        let divNames  = document.getElementById('list');
        divNames.innerHTML = listString+"</ul>";
    }
    dummyRender();

})




console.log(myAPI.desktop);
console.log( window.myAPI.getNames());


