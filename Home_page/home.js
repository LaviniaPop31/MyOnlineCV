transitionEffect()
function transitionEffect() {
    window.onload = () => {
        let transitionElement = document.querySelector('.transition');
        let button = document.getElementById('rightArrow')

        setTimeout(() => {
            transitionElement.classList.remove('is-active')
        }, 500);

        button.addEventListener('click', (e) => {
            e.preventDefault();
            transitionElement.classList.add('is-active');

            setTimeout(() => {
                window.location.href ='../About_page/about.html'
        
            }, 500)
        })

    }
}