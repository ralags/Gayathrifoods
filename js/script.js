document.addEventListener('DOMContentLoaded', function() {
    // Load configuration
    fetch('config.json')
        .then(response => response.json())
        .then(config => {
            // Set logo
            document.getElementById('logo').src = config.logo;

            // Generate product cards
            const container = document.getElementById('products');
            config.products.forEach(product => {
                container.innerHTML += `
                    <div class="product-card">
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                    </div>
                `;
            });
        });
});
