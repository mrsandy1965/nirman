function scrollLeft() {
    document.querySelector('.product-grid').scrollBy({
        left: -220,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.querySelector('.product-grid').scrollBy({
        left: 220,
        behavior: 'smooth'
    });
}