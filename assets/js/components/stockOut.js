function stockOut () {
    const product_image = document.querySelector('.product__image')
    const product_container = document.querySelector('.product__content')

    product_image.classList.toggle('stockout')
    product_container.classList.toggle('stockout')
}