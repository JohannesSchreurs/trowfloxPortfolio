let contentItems = document.getElementsByClassName("content-item");
let header = document.getElementById("title");
let about = document.getElementById("about");
let trowfloxTitle = document.getElementById("trowfloxTitle");
let trowfloxUndertitle = document.getElementsByClassName("moreInfo")[0];
let warning = document.getElementsByClassName("moveableText")[0];
let container = document.getElementById("aligner");
let menu = document.getElementById("menu");
let count = 0;
let interval;

about.setAttribute("Contents", about.innerHTML);
trowfloxTitle.setAttribute("Contents", trowfloxTitle.innerHTML);
trowfloxUndertitle.setAttribute("Contents", trowfloxUndertitle.innerHTML);

function isMobile(){
    if(window.innerWidth >= 450){
        return false
    }else {
        return true;
    }
}

setInterval(() => {
    if (count === 0) {
        count++;
        document.title = "Portfolio.";
    }
    else {
        document.title = "Trowflox.";
        count = 0;
    }
}, 2000);

interval = setInterval(() => trowfloxTitle.textSwap(), 200);

trowfloxUndertitle.addEventListener("mouseover", () => interval = setInterval(() => trowfloxUndertitle.textSwap(), 150));
about.addEventListener("mouseover", () => interval = setInterval(() => about.textSwap(), 150));

trowfloxUndertitle.addEventListener("mouseleave", () => {
    trowfloxUndertitle.innerText = trowfloxUndertitle.getAttribute("Contents");
    clearInterval(interval);
});

about.addEventListener("mouseleave", () => {
    about.innerText = about.getAttribute("Contents");
    clearInterval(interval);
});

if(!isMobile()) {
    container.addEventListener("mousemove", (event) => {
        warning.style.top = event.clientY + 10 + window.scrollY + "px";
        warning.style.left = event.clientX + 10 + window.scrollX + "px";
    });
}

window.addEventListener("scroll", () => {
    for(let i = 0; i < contentItems.length; i++){
        if(isPercentagePartOfElementInViewport(contentItems[i], 90)){
            header.innerHTML = `Stuff - ${i + 1} / ${contentItems.length}`;
        }
    }
    if(isPercentagePartOfElementInViewport(container, 90)){
        menu.style.display = "none";
        header.style.display = "none";
        warning.style.display = "block";
    }else{
        menu.style.display = "block";
        header.style.display = "block";

    }
});

console.log("Made by Johannes Schreurs");

