document.addEventListener('DOMContentLoaded', () => {
    const removeButtons = document.querySelectorAll('.remove-item');
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');

    let totalPrice = 95.00; // Initial total price

    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const cartItem = e.target.closest('.cart-item');
            const itemPrice = parseFloat(cartItem.querySelector('p').textContent.replace('$', ''));
            totalPrice -= itemPrice; // Subtract item price from total
            totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`; // Update total price
            cartItem.remove(); // Remove item from cart
        });
    });

    document.getElementById('checkout').addEventListener('click', () => {
        alert('Proceeding to checkout...');
        // Here you can add functionality to redirect to a checkout page
    });
});