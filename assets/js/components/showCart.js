function showCart () {
    const btnCart= document.querySelector('.btn--cart')
    const cart= document.querySelector('.cart')

    btnCart.addEventListener('click', function (e) {
        cart.classList.toggle('show--cart')
    })
    cart.addEventListener('click', function (e) {  // e = event
        if (e.target.closest('.btn--close')) {
            cart.classList.remove('show--cart')
        }
    })
}

export default showCart