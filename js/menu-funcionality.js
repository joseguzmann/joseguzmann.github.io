function homeMenuClick(element) {
    console.log("home");
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    actualizeElement(element);
}

function aboutMenuClick(element) {
    console.log("about");
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
    });
    actualizeElement(element);
}

function workMenuClick(element) {
    console.log("about");
    window.scrollTo({
        top: 2*window.innerHeight,
        behavior: 'smooth',
    });
    actualizeElement(element);
}

function contactMenuClick(element) {
    console.log("about");
    window.scrollTo({
        top: 3*window.innerHeight,
        behavior: 'smooth',
    });
    actualizeElement(element);
}

function actualizeElement(element) {
    currentList = document.getElementsByClassName("current");
    for(let li of currentList) {
        li.classList.remove("current");
    }
    element.parentElement.classList.add("current");
}