let about = document.getElementById("about-title");
let home = document.getElementById("trowfloxHome");
about.setAttribute("Contents", about.innerHTML);
home.setAttribute("Contents", home.innerHTML);

let interval = setInterval(() => about.textSwap(), 200);

home.addEventListener("mouseover", () => interval = setInterval(() => home.textSwap(), 150));
about.addEventListener("mouseover", () => interval = setInterval(() => about.textSwap(), 150));

home.addEventListener("mouseleave", () => {
    home.innerText = home.getAttribute("Contents");
    clearInterval(interval);
});
