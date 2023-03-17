function showMenu () {
    const nav= document.querySelector('.nav')
    const menu= document.querySelector('.nav__menu')

    nav.addEventListener('click', function (e) {  // e = event
        if(e.target.closest('.btn--menu')) { // closest es una herramienta de búsqueda de clases pero no sólo en el objetivo 
            menu.classList.toggle('show--menu')

        }
        
        if (e.target.closest('.btn--close')) {
            menu.classList.remove('show--menu')
        }

        if (e.target.closest('.nav__link')) {
            menu.classList.remove('show--menu')
        }
    })
}

export default showMenu