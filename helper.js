let randomChars = "_![]*%//!?ē_R_~=flŌrIæn#{}-°ø.";

Object.prototype.textSwap = function() {
    let swappedText = this.innerHTML.split("");
    let index = Math.floor(Math.random()*swappedText.length);
    let randomChar = Math.floor(Math.random()*randomChars.length);

    for(let i = 0; i < swappedText.length; i++) {
        swappedText[index] = randomChars[randomChar];
    }

    if(randomChar % 2) {
        this.innerHTML = this.getAttribute("Contents");
    }
    else {
        this.innerHTML = swappedText.join("");
    }
};

function isPercentagePartOfElementInViewport(el, percentage){
    let rect = el.getBoundingClientRect();

    const WINDOW_HEIGHT = (window.innerHeight || document.documentElement.clientHeight);
    const WINDOW_WIDTH = (window.innerWidth || document.documentElement.clientWidth);

    let vertInView = (rect.top + (rect.height * (percentage / 100)) <= WINDOW_HEIGHT) && ((rect.top + rect.height) >= rect.height-percentage);
    let horInView = (rect.left <= WINDOW_WIDTH) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}

