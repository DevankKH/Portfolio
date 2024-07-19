let btn = document.querySelectorAll(".project");
let div = document.querySelectorAll(".projectDiv");

btn[0].classList.add("activeProjectButton");
div[0].classList.add("showDiv");


for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", () => {
        let div_One = document.querySelector("#" + btn[i].name);
        removeAll();
        btn[i].classList.add("activeProjectButton");
        div_One.classList.add("showDiv");
    })
}

function removeAll(){
    for(let j = 0; j < btn.length; j++){
        btn[j].classList.remove("activeProjectButton");
        div[j].classList.remove("showDiv");
    }
}