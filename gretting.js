const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintGretting(text){
    form.classList.remove(SHOWING_CN); 
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadname(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser== null){

    }else{
        paintGretting(currentUser); 
    }
    
}

function init() {
    loadname();
}

init();