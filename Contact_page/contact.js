let inputName = document.getElementById('inputName');
let inputEmail = document.getElementById('inputEmail');
let inputSubject = document.getElementById('inputSubject');
let inputMessage = document.getElementById('inputMessage');
let button = document.getElementById('sendButton')
let displayMessage = document.getElementById('showMessage');

button.addEventListener('click', () => {
    console.log(inputName.value)
    if (inputName.value === '' || inputEmail.value === '' || inputSubject.value === '' || inputMessage.value === '') {
        displayMessage.innerHTML = 'You have to fill all the fields'
    } else {
        sendEmail()
        displayMessage.innerHTML = 'Your message has been sent!';
        document.querySelector('form').reset();
    }
})


function sendEmail() {
    const baseUrl = 'https://formspree.io/f/xnqokjgz';

    let contentInformation = {
        name: inputName.value,
        email: inputEmail.value,
        subject: inputSubject.value,
        message: inputMessage.value
    }

    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(contentInformation),
        headers: {
            'Content-Type': 'application/json'
        }

    }).then(function (response) {
        console.log(response)
        if (response.status === 404) {
            displayMessage.innerHTML = "Error! Your message hasn't been sent!"
        } 
        
    }).catch(() => {
        displayMessage.innerHTML = "Error! Your message hasn't been sent!"
    })
}