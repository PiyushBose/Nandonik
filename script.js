function openGallery(){
    document.querySelector(".gallery-modal").classList.remove("hide");
    document.querySelector("header").classList.add("blur");
    document.querySelector("main").classList.add("blur");
}

function closeGallery(){
    document.querySelector(".gallery-modal").classList.add("hide");
    document.querySelector("header").classList.remove("blur");
    document.querySelector("main").classList.remove("blur");
}