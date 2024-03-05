function toggleIcon() {
    var darkIcon = document.getElementById('darkIcon');
    var lightIcon = document.getElementById('lightIcon');
    var header = document.querySelector('header');
    var body = document.querySelector('body');
    var logo = document.querySelector('.logo');
    var navigationLinks = document.querySelectorAll('header ul li a');
    var checkout = document.querySelector('.checkout');
    var guessMessage = document.querySelector('#result');
    var productParagraphs = document.querySelectorAll('#Product p');
     var checkoutRatecal = document.querySelector('.checkout .ratecal');
     var checkoutRatecal3 = document.querySelector('.checkout div:nth-child(1)');
     var checkoutRatecal2 = document.querySelector('.checkout div:nth-child(2)');
     var checkoutRatecal4 = document.querySelector('.checkout div:nth-child(3)');
     var checkoutRatecal5 = document.querySelector('.checkout div:nth-child(4)'); 
      

    
    function adjustIconColors() {
        var iconsToChange = document.querySelectorAll('.icon');
    
        iconsToChange.forEach(icon => {
            var currentFilter = icon.style.filter;
    
            if (currentFilter === 'invert(100%)' || currentFilter === '') {
                icon.style.filter = isDarkMode ? 'invert(100%)' : 'invert(0%)'; 
            } else {
                icon.style.filter = isDarkMode ? 'invert(100%)' : 'invert(100%)'; 
            }
        });
    }

    
    var isDarkMode = body.classList.contains('dark-mode');

    if (isDarkMode) {
        
        darkIcon.style.display = 'none';
        lightIcon.style.display = 'inline';
        header.classList.add('dark-mode'); 
        body.classList.remove('dark-mode'); 
        body.style.backgroundImage = "url('images/white-background.jpg')"; 
        header.style.backgroundImage = "url('images/headerbglight.jpg')"; 
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'; 
        header.style.zIndex = '1000'; 
        logo.src = "images/autoplogodk.png"; 
        navigationLinks.forEach(link => link.style.color = 'black'); 

        
        document.querySelectorAll('.icon path').forEach(path => {
            path.setAttribute('stroke', 'black');
        });

        
        header.style.setProperty('--overlay-opacity', '0.1');

        
        checkout.style.borderColor = 'black';
        checkoutRatecal2.style.color = "black" 
        checkoutRatecal3.style.color = "black" 
        checkoutRatecal4.style.color = "black" 
        checkoutRatecal5.style.color = "black" 
        guessMessage.style.color = 'black'; 
        productParagraphs.forEach(paragraph => {
            paragraph.style.color = 'black'; 
        });
    } else {
        
        darkIcon.style.display = 'inline';
        lightIcon.style.display = 'none';
        header.classList.remove('dark-mode'); 
        body.classList.add('dark-mode'); 
        body.style.backgroundImage = "url('images/dk.png')"; 
        header.style.backgroundImage = "url('images/headerbg.avif')"; 
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'; 
        header.style.zIndex = ''; 
        logo.src = "images/autoplogo.png"; 
        navigationLinks.forEach(link => link.style.color = ''); 

        
        header.style.setProperty('--overlay-opacity', '0.9');

        
        checkout.style.borderColor = 'white'; 
        checkoutRatecal2.style.color = "white" 
        checkoutRatecal3.style.color = "white"
        checkoutRatecal4.style.color = "white" 
        checkoutRatecal5.style.color = "white" 
        guessMessage.style.color = 'white'; 
        productParagraphs.forEach(paragraph => {
            paragraph.style.color = 'white'; 
        });
    }

    
    adjustIconColors();
}


function toggleCheckboxes() {
    const itemizedDivs = document.querySelectorAll('.itemized');

    itemizedDivs.forEach(function(div) {
        div.addEventListener('click', function() {
            const checkbox = div.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
        });
    });
}

window.onload = function() {
    const itemizedDivs = document.querySelectorAll('.itemized');

    itemizedDivs.forEach(function(div) {
        div.addEventListener('click', function() {
            const checkbox = div.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked; 
        });
    });
}


window.onload = function() {
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 100); 
    toggleIcon(); 
    toggleCheckboxes(); 
};


function switchContentBackground(theme) {
    var content = document.querySelector('.content');
    var overlay = document.querySelector('.overlay');

    if (theme === 'dark') {
        content.style.backgroundImage = "url('images/whitecarbon.jpg')"; 
        content.style.zIndex = '1000'; 
        overlay.style.display = 'none'; 
    } else if (theme === 'light') {
        content.style.backgroundImage = "url('images/bon.jpg')"; 
        content.style.zIndex = ''; 
        overlay.style.display = 'block'; 
    }
}


var darkIcon = document.getElementById('darkIcon');
var lightIcon = document.getElementById('lightIcon');

darkIcon.addEventListener('click', function() {
    switchContentBackground('dark');
});

lightIcon.addEventListener('click', function() {
    switchContentBackground('light');
});

$(document).ready(function() {
    
    $('.itemized').click(function() {
        $(this).toggleClass('clicked');
        
        
        var itemNameWithPrice = $(this).find('.image-name').text();
        var itemName = itemNameWithPrice.split('$')[0].trim(); 
        
        
        var cartItem = $('.cartt .cart-item:contains("' + itemName + '")');
        
        
        if ($(this).hasClass('clicked') && cartItem.length === 0) {
            
            var cartItem = $('<div class="cart-item">' + 

            '<span class="item-name">' + itemName + '</span>' +
         '</div>');
            
            
            $('.cartt').append(cartItem);
        } else {
            
            cartItem.remove();
        }
    });
});

$(document).ready(function() {
    
    checkScrollbar();

    
    function checkScrollbar() {
        var numItems = $('.cartt').children().length;
        if (numItems >= 5) {
            $('.cartt').css('overflow-x', 'auto'); 
        } else {
            
            $('.cartt').css('overflow-x', 'hidden'); 
            
        }
    }

    
    $('.itemized').click(function() {
        $(this).toggleClass('clicked');

        
        $(this).hasClass('clicked') ? checkScrollbar() : checkScrollbar();
    });
});

$(document).ready(function() {
    
    checkItemCount();

    
    function checkItemCount() {
        var numItems = $('.cartt .cart-item').length;
        if (numItems > 4) {
            $('.cartt').addClass('hide-after'); 
        } else {
            $('.cartt').removeClass('hide-after'); 
        }
    }

    
    $('.itemized').click(function() {
        $(this).toggleClass('clicked');

        
        checkItemCount();
    });
});



document.addEventListener('DOMContentLoaded', function () {
    
    const selectedItems = [];

    
    const taxRate = 0.085; 
    let shippingFee = 7.95;

    
    const itemizedDivs = document.querySelectorAll('.itemized');

    
    itemizedDivs.forEach(function (item) {
        item.addEventListener('click', function () {
            
            const priceString = item.querySelector('.image-name b').textContent;
            const price = parseFloat(priceString.replace('$', ''));

            
            if (selectedItems.includes(item)) {
                
                const index = selectedItems.indexOf(item);
                selectedItems.splice(index, 1);

                
                const subTotalElement = document.querySelector('.checkout .ratecalc:nth-child(1)');
                const subTotal = parseFloat(subTotalElement.textContent.replace('Sub-Total: $', ''));
                subTotalElement.textContent = 'Sub-Total: $' + (subTotal - price).toFixed(2);

                
                let cartTotal = subTotal - price + (subTotal - price) * taxRate;
                if (selectedItems.length === 0) {
                    shippingFee = 0;
                } else {
                    shippingFee = 7.95;
                }
                cartTotal += shippingFee;

                const cartTotalElement = document.querySelector('.checkout .ratecalc:nth-child(4)');
                cartTotalElement.textContent = 'Cart Total: $' + cartTotal.toFixed(2);
            } else {
                
                selectedItems.push(item);

                
                const subTotalElement = document.querySelector('.checkout .ratecalc:nth-child(1)');
                const subTotal = parseFloat(subTotalElement.textContent.replace('Sub-Total: $', ''));
                subTotalElement.textContent = 'Sub-Total: $' + (subTotal + price).toFixed(2);

                
                const cartTotalElement = document.querySelector('.checkout .ratecalc:nth-child(4)');
                const cartTotal = subTotal + price + (subTotal + price) * taxRate + shippingFee;
                cartTotalElement.textContent = 'Cart Total: $' + cartTotal.toFixed(2);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelector('.sorder').addEventListener('click', function() {
        
        const cartTotalText = document.querySelector('.checkout .ratecalc:nth-child(4)').textContent;
        const cartTotalValue = parseFloat(cartTotalText.replace('Cart Total: $', '').trim());

        
        if (cartTotalValue === 0) {
            alert('You should select at least one product to place an order.');
        } else {
            const formattedCartTotal = cartTotalValue.toFixed(2);
            alert('Your Cart Total is: $' + cartTotalValue + '. Your order was placed!');

            
            const cartDivs = document.querySelectorAll('.cartt div');
            cartDivs.forEach(function(div) {
                div.remove();
            });

            
            const checkboxes = document.querySelectorAll('.cartt input[type="checkbox"]');
            checkboxes.forEach(function(checkbox) {
                checkbox.checked = false;
            });

            
            window.location.reload();
        }
    });
});

function checkGuess() {
    
    var userGuessInput = document.getElementById('userGuess');
    var userGuess = parseInt(userGuessInput.value);

    
    var resultMessage = document.getElementById('result');
    var errorMessage = document.getElementById('errorMessage');

    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        errorMessage.innerHTML = "<strong>Please enter a number between 1 and 10.</strong>";
        resultMessage.textContent = ""; 
        return; 
    }

    
    errorMessage.textContent = "";

    
    var randomNumber = Math.floor(Math.random() * 10) + 1;

    
    resultMessage.innerHTML = 'Your guess: ' + userGuess + '<br>Random number: ' + randomNumber;

    
    if (userGuess === randomNumber) {
        resultMessage.innerHTML += '<br><strong>Congratulations! You guessed the correct number!</strong>';
    } else {
        resultMessage.innerHTML += '<br>Your guess did not match the random number. Try again!';
    }
}

var messageTextarea = document.getElementById('message');


messageTextarea.addEventListener('input', function() {
    
    var textareaHeight = messageTextarea.scrollHeight;

    
    document.getElementById('container').style.height = (textareaHeight + 200) + 'px';
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    validateForm();
});

