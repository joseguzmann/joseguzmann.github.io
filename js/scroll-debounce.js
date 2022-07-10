const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
    console.log(document.documentElement.dataset.scroll);
};

let debounced = _.debounce(storeScroll, 250, {'leading': true, 'trailing': true});

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