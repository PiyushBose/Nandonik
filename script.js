const photoUrls = [];
let picCount = 0;

for(let i = 0; i < 9; i ++)
    photoUrls[i] = `./photos/${i}.jpg`;

function disableScroll() {
    // Get the current page scroll position
    scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop;
    scrollLeft =
        window.pageXOffset ||
        document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}

function openGallery(){
    document.querySelector(".gallery-modal").classList.remove("hide");
    document.querySelector("header").classList.add("blur");
    document.querySelector("main").classList.add("blur");
    picCount = 0;
    document.querySelector(".photo").style.backgroundImage = `url(${photoUrls[picCount]})`;
    renderSlidePan();
    disableScroll();
}

function closeGallery(){
    document.querySelector(".gallery-modal").classList.add("hide");
    document.querySelector("header").classList.remove("blur");
    document.querySelector("main").classList.remove("blur");
    enableScroll();
}

function copyText(){
    navigator.clipboard.writeText("productionsnandonik@gmail.com");
    alert("Copied to clipboard");
}


function prevPic(){
    if(picCount === 0) picCount = photoUrls.length;
    picCount --;
    document.querySelector(".photo").style.backgroundImage = `url(${photoUrls[picCount]})`;
    renderSlidePan();
}

function nextPic(){
    if(picCount === photoUrls.length - 1) picCount = -1;
    picCount ++;
    document.querySelector(".photo").style.backgroundImage = `url(${photoUrls[picCount]})`;
    renderSlidePan();
}

function renderSlidePan(){

    for(let i = 0; i < 6; i ++){

        let index = (picCount + i) % photoUrls.length;
        
        document.querySelector(`#i${i}`).style.backgroundImage = `url(${photoUrls[index]})`;
    }

}

function clearInfo(){
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#phone").value = "";
    document.querySelector("#why-us").value = "";
}
