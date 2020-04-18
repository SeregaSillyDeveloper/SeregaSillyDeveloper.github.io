function sidebar(startSel, contentSel){
    const burger = document.querySelector(startSel),
          mainMenu = document.querySelector(contentSel)

    function addToggle(element) {
        element.classList.toggle('active')
    }

    burger.addEventListener('click', (e) => {
        e.preventDefault()
        addToggle(burger)
        addToggle(mainMenu)
    })
}
sidebar('.sidebar-header__burger', '.sidebar')