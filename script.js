/*let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const name = e.target.dataset.name;
            const price = parseFloat(e.target.dataset.price);
            addItemToCart(name, price);
        });
    });
    
    loadCart();
    updateCartPage();
});

function addItemToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    
    saveCart();
    updateCartPage(); // Make sure the cart updates immediately
}

function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartPage() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    
    if (cartItemsContainer && totalAmountElement) {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        
        cart.forEach(item => {
            console.log(item);
                        const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <span>${item.name} - $${item.price.toFixed(2)}</span>
                <div>
                    <button class="decrease-quantity" data-name="${item.name}">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase-quantity" data-name="${item.name}">+</button>
                </div>
            `;
           /* cartItemsContainer.appendChild(cartItem);
            
            total += item.price * item.quantity;
        });
        
        totalAmountElement.textContent = total.toFixed(1); 2 of 1 
    }

    // Event delegation to handle quantity changes
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('increase-quantity')) {
            const name = e.target.dataset.name;
            increaseQuantity(name);
        } else if (e.target.classList.contains('decrease-quantity')) {
            const name = e.target.dataset.name;
            decreaseQuantity(name);
        }
    });
}

function increaseQuantity(name) {
    const item = cart.find(item => item.name === name);
    if (item) {
        console.log("befoer implement", item.quantity);
        item.quantity=item.quantity+1;
        saveCart();
        console.log("after implement", item.quantity);

        updateCartPage();
    }
}

function decreaseQuantity(name) {
    const item = cart.find(item =>item.name == name);
    if (item) {
        if (item.quantity>1) {
            item.quantity--;
        } else {
            cart = cart.filter(item =>item.name !== name);
        }
        saveCart();
        updateCartPage();
    }
}
*/

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const name = e.target.dataset.name;
            const price = parseFloat(e.target.dataset.price);
            addItemToCart(name, price);
        });
    });
    
    loadCart();
    updateCartPage();
    
    // Event delegation to handle quantity changes
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('increase-quantity')) {
            const name = e.target.dataset.name;
            increaseQuantity(name);
        } else if (e.target.classList.contains('decrease-quantity')) {
            const name = e.target.dataset.name;
            decreaseQuantity(name);
        }
    });
});

function addItemToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    
    saveCart();
    updateCartPage(); // Make sure the cart updates immediately
}

function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartPage() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    
    if (cartItemsContainer && totalAmountElement) {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        
        cart.forEach(item => {
            console.log(item);
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <span>${item.name} - $${item.price.toFixed(2)}</span>
                <div>
                    <button class="decrease-quantity" data-name="${item.name}">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase-quantity" data-name="${item.name}">+</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
            
            total += item.price * item.quantity;
        });
        
        totalAmountElement.textContent = total.toFixed(2);
    }
}

function increaseQuantity(name) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity++;
        saveCart();
        updateCartPage();
    }
}

function decreaseQuantity(name) {
    const item = cart.find(item => item.name === name);
    if (item) {
        if (item.quantity > 1) {
            item.quantity--;
        } else {
            cart = cart.filter(item => item.name !== name);
        }
        saveCart();
        updateCartPage();
    }
}
