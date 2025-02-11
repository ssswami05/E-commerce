
// Add to Cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.parentElement; // Get the parent product card
        const productName = productCard.getAttribute('data-name'); // Get the product name
        alert(`${productName} has been added to your cart!`); // Show alert
    });
});

// Optional: Show all products by default
filterProducts('men'); // Show men's products by default

const searchBar = document.querySelector('.searchBar');
searchBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        alert(`Searching for: ${searchBar.value}`);
        searchBar.value = ''; // Clear the search bar after search
    }
});
