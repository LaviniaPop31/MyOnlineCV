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
                window.location.href ='/About_page/about.html'
            }, 500)
        })

    }
}

// displayHomePage()
// function displayHomePage() {
//     let homeButton = document.getElementById('homeButton');
//     homeButton.addEventListener('click', () => {
//         window.location.href = '/Home_page/home.html'
//     })
// }

// displayAboutPage()
// function displayAboutPage() {
//     let aboutButton = document.getElementById('aboutButton');
//     aboutButton.addEventListener('click', () => {
//         window.location.href = '/About_page/about.html'
//     })
// }

// displayResumePage()
// function displayResumePage() {
//     let resumeButton = document.getElementById('resumeButton');
//     resumeButton.addEventListener('click', () => {
//         window.location.href = '/Resume_page/resume.html';
//     })
// }

// displayContactPage()
// function displayContactPage() {
//     let contactButton = document.getElementById('contactButton');
//     contactButton.addEventListener('click', () => {
//         window.location.href = '/Contact_page/contact.html'
//     })
// }

// displayInterestsPage()
// function displayInterestsPage() {
//     let interestsButton = document.getElementById('interestsButton');
//     interestsButton.addEventListener('click', () => {
//         window.location.href = '/Interests_page/interests.html'
//     })
// }

// displayPortofolioPage()
// function displayPortofolioPage() {
//     let portofolioButton = document.getElementById('portofolioButton');
//     portofolioButton.addEventListener('click', () => {
//         window.location.href = '/Portofolio_page/portofolio.html'
//     })
// }

