displayHomePage()
function displayHomePage() {
    let homeButton = document.getElementById('homeButton');
    homeButton.addEventListener('click', () => {
        window.location.href = '/Home_page/home.html'
    })
}

displayResumePage()
function displayResumePage() {
    let resumeButton = document.getElementById('resumeButton');
    resumeButton.addEventListener('click', () => {
        window.location.href = '/Resume_page/resume.html';
    })
}

displayContactPage()
function displayContactPage() {
    let contactButton = document.getElementById('contactButton'); 
    contactButton.addEventListener('click', () => {
        window.location.href = '/Contact_page/contact.html'
    })
}