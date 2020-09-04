const search = document.querySelector(".google-search")

const dummyBox = document.querySelectorAll(".main-title-paragraph");

function makeContent(){
    let _content = ""
    for(let i = 0; i < 40; i++){
        _content += btoa(`${Math.random()*10}`);
    }
    return _content
}

for(let i = 0; i < dummyBox.length; i++){
    dummyBox[i].innerHTML = makeContent()
}
