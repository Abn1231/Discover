function switchMode(){
    const body = document.body;
    const btn = document.querySelector("#iconbtn");
    if(body.classList.contains("light")){
        body.classList.remove("light");
        btn.setAttribute("name", "sunny-outline");
    } else {
        body.classList.add("light");
        btn.setAttribute("name", "moon-outline");
    }
}