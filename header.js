//  implementing menu dropdown for portrait orientation

function changeHeader(setScreen) {
    
    if (setScreen.matches) {
        document.getElementById('dropdownHeader').style.display = 'block'
        setNewButtonType()
    } else {
        document.querySelector('.header-buttons').style.display = 'inline-flex'
        document.getElementById('dropdownHeader').style.display = 'none'
    }
}

function setNewButtonType() {
    let oldButtons = document.querySelector('.header-buttons');
    oldButtons.style.display = 'none'
    console.log(oldButtons)

    let newButton = document.getElementById('dropdownHeader') 
    newButton.innerHTML = `
    <div class="dropdown">
        <i class="fa fa-bars" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" ></i>
     
        <ul class="dropdown-menu" id="dropdownMenu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" value="Home" href="../Home_page/home.html">Home</a></li>
            <li><a class="dropdown-item" value="About" href="../About_page/about.html">About</a></li>
            <li><a class="dropdown-item" href="../Resume_page/resume.html">Resume</a></li>
            <li><a class="dropdown-item" href="../Portfolio_page/portfolio.html">Portfolio</a></li>
            <li><a class="dropdown-item" href="../Interests_page/interests.html">Interests</a></li>
            <li><a class="dropdown-item" href="../Contact_page/contact.html">Contact</a></li>
        </ul>
    </div>`

}

let setScreen = window.matchMedia('(max-width:800px)')
changeHeader(setScreen)
setScreen.addListener(changeHeader)
