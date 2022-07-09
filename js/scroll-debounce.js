const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
    console.log(document.documentElement.dataset.scroll);
};

let debounced = _.debounce(storeScroll, 250, {'leading': true, 'trailing': true});

document.addEventListener('scroll', debounced);

storeScroll();