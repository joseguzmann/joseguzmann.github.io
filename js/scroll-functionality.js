console.log(window.innerHeight); 632.7  


const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
    console.log(document.documentElement.dataset.scroll);
    actualizarMenuScroll();
};

const actualizarMenuScroll = () => {
    let liMenu = document.querySelectorAll(".menu-container ul li");
    currentList = document.getElementsByClassName("current");
    for(let li of currentList) {
        li.classList.remove("current");
    }
    if(window.scrollY <= 0.45*window.innerHeight) {
        liMenu[0].classList.add("current");
        console.log("primera");
    } else if(0.45*window.innerHeight < window.scrollY && window.scrollY <= 1.35*window.innerHeight) {
        liMenu[1].classList.add("current");
        console.log("segunda")
    } else if(1.35*window.innerHeight < window.scrollY && window.scrollY <= 2.25*window.innerHeight) {
        liMenu[2].classList.add("current");
        console.log("tercera")
    } else if(2.25*window.innerHeight < window.scrollY && window.scrollY <= 3.15*window.innerHeight) {
        liMenu[3].classList.add("current");
        console.log("cuarta")
    }
}

let debounced = _.throttle(storeScroll, 250, {'leading': false, 'trailing': true});

document.addEventListener('scroll', debounced);

storeScroll();

//--------------------------------------------------------------

// let lastTop = window.scrollY;

// const storeScroll = () => {
//     console.log("LastTop: " + lastTop);
//     console.log("scrollY: " + window.scrollY);
//     // console.log(window.scrollY - lastTop)
//     // console.log(window.innerHeight); 632.7  
//     if(window.scrollY > lastTop && lastTop < 632.9) {
//         console.log("Abajo Sombra on");
//         document.documentElement.dataset.scroll = 1;
//     } else if(window.scrollY <= lastTop && window.scrollY < 632.7) {
//         console.log("Arriba Sombra off");
//         document.documentElement.dataset.scroll = 0;
//     }
//     lastTop = window.scrollY;
// };

// let debounced = _.debounce(storeScroll, 250, {'leading': true, 'trailing': true});


// document.addEventListener('scroll', debounced);

// storeScroll();