function sidebar(startSel, contentSel){
    const burger = document.querySelector(startSel),
          mainMenu = document.querySelector(contentSel)

    burger.addEventListener('click', (e) => {
        e.preventDefault()
        burger.classList.toggle('active')
        mainMenu.classList.toggle('active')
    })
}
sidebar('.sidebar-header__burger', '.sidebar')