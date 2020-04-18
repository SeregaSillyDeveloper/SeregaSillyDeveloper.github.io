function slider (slides) {
        let counter = 0
        const ourSlides = document.querySelectorAll(slides)
        
        
    setInterval(() => {
        ourSlides[counter].classList.remove('slide-item--active')
        counter++
        if(counter + 1 > ourSlides.length){
            counter = 0
        }
        ourSlides[counter].classList.add('slide-item--active')
    },3000)    
}
slider('.slide-item')