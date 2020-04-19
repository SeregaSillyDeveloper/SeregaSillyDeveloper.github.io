function tabses (headerSel, tabsSel, contentSel, activeClass) {
    const header = document.querySelector(headerSel),
          tab = document.querySelectorAll(tabsSel),
          content = document.querySelectorAll(contentSel)

    function hideTabs(){
        content.forEach(i => {
            i.style.display = 'none'
        })

        tab.forEach(i => {
            i.classList.remove(activeClass)
        })
    }

    function showTabs(i = 0){
        content[i].style.display = 'grid'
        tab[i].classList.add(activeClass)
    }

    hideTabs()
    showTabs()

    header.addEventListener('click', e => {
        e.preventDefault()
        if(e.target.classList.contains('products__item')){
            tab.forEach((item, i) => {
                if(e.target == item){
                    hideTabs()
                    showTabs(i)
                }
            })
        }
    })

}
tabses('.products', '.products__item','.products-content', 'active')