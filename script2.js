function validateForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const emailAddress = document.getElementById('emailAddress').value.trim();
    const message = document.getElementById('message').value.trim();
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked');
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        validateForm();
    });
    
    function validateForm() {
        const contactMethod = document.querySelector('input[name="contactMethod"]:checked');
    
        
        if (!contactMethod) {
            alert('Please select at least one radio button for the contact method.');
            return;
        }
    
        
    }
    
    document.getElementById('errorMessages').innerHTML = '';

    
    if (firstName === '' || lastName === '' || message === '' || !contactMethod) {
        displayError('All fields are required.');
        return;
    }

    
    if (contactMethod.value === 'email' && !validateEmail(emailAddress)) {
        displayError('Please enter a valid email address.');
        return;
    } else if (contactMethod.value === 'phone' && !validatePhone(phoneNumber)) {
        alert('Please enter a valid phone number , in format: (123)-212-1234');
        return;
    }

    
    const customer = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        emailAddress: emailAddress,
        contactMethod: contactMethod.value,
        message: message
    };

    
    document.getElementById('contactForm').reset();

    
    alert('Thank you for your submission:\n' + JSON.stringify(customer, null, 2));
}

function validateEmail(email) {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    
    const phoneRegex = /^\(\d{3}\)-\d{3}-\d{4}$/;
    return phoneRegex.test(phone);
}

function displayError(message) {
    const errorDiv = document.getElementById('errorMessages');
    const errorParagraph = document.createElement('p');
    errorParagraph.textContent = message;
    errorParagraph.classList.add('error');
    errorDiv.appendChild(errorParagraph);
}

function showProduct(productId) {
    
    var products = document.getElementsByClassName('product');
    for (var i = 0; i < products.length; i++) {
        products[i].classList.remove('active');
    }
    
    document.getElementById(productId).classList.add('active');
}

window.onload = function() {
    showProduct('product1');
    
};


