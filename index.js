document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is connected and working!');

    document.querySelectorAll('.order-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            const title = this.getAttribute('data-title');
            const price = this.getAttribute('data-price');
            const image = this.getAttribute('data-image');

            console.log('Saving product:', { title, price, image });

            // Store product details in localStorage
            localStorage.setItem('productTitle', title);
            localStorage.setItem('productPrice', price);
            localStorage.setItem('productImage', image);

            // Optionally, redirect to shop page
            window.location.href = 'shop.html';
        });
    });
});

document.getElementById('search-button').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the button's default form submit action
    console.log("Button clicked");
});

// search button
// Example data to simulate available products on your site
const products = [
    { name: "Chocolate Cake", url: "cakes.html" },
    { name: "Vanilla Cupcake", url: "cupcakes.html" },
    { name: "Brownie", url: "cookies.html" },
    { name: "Red Velvet Cake", url: "cakes.html" },
    { name: "Lemon Drizzle Cake", url: "cakes.html" },
    { name: "Fresh Mango Cake", url: "cakes.html" },
    { name: "Pineapple Cake", url: "cakes.html" },
    { name: "Croissants", url: "pastries.html" },
    { name: "Muffins", url: "cupcakes.html" },
    { name: "Macarons", url: "pastries.html" },
    { name: "Tart", url: "pastries.html" },
    { name: "Chocolate Chip Cookies", url: "cookies.html" },
    { name: "Nankhatai", url: "cookies.html" },
    { name: "Vanilla Icecream", url: "icecream.html" },
    { name: "Chocolate Icecream", url: "icecream.html" },
    { name: "Strawberry Icecream", url: "icecream.html" },
    { name: "Salted Caramel Pretzel", url: "icecream.html" },
    { name: "Gelato", url: "icecream.html" },
    { name: "Donuts", url: "specialdesserts.html" },
    { name: "Kunafa", url: "specialdesserts.html" },
    { name: "Kulfi", url: "specialdesserts.html" },
    { name: "Gulab Jamun", url: "specialdesserts.html" },
    { name: "Choco Lava Cake", url: "specialdesserts.html" },
    // Add more products here
];

// Add event listener to the search button
document.getElementById('search-button').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the button's default form submit action

    // Get the search input value
    const query = document.getElementById('search-input').value.trim().toLowerCase();

    // Find a matching product
    const result = products.find(product => product.name.toLowerCase() === query);

    if (result) {
        // Redirect to the found product page
        window.location.href = result.url;
    } else {
        // Show "No results found" message
        const message = document.getElementById('search-message');
        message.innerText = "No results found.";
        message.style.display = "block";
    }
});
