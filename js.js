// =============================================
// EcoShop - Main JavaScript Application
// =============================================

// Product Database
const PRODUCTS = [
    {
        id: 1,
        name: 'Bamboo Coffee Mug',
        category: 'personal',
        price: 24.99,
        rating: 4.5,
        reviews: 128,
        description: 'Eco-friendly bamboo coffee mug with silicone grip. Perfect for keeping your beverages hot or cold while reducing plastic waste.',
        image: 'data:image/svg+xml,%3Csvg width="200" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="200" height="200" fill="%23f0e6d2"/%3E%3Crect x="50" y="40" width="100" height="90" fill="%23c4a574" rx="5"/%3E%3Crect x="130" y="70" width="20" height="50" fill="%23c4a574" rx="10"/%3E%3Ctext x="100" y="95" font-size="16" text-anchor="middle" fill="%23fff" font-weight="bold"%3EBamboo%3C/text%3E%3Ctext x="100" y="110" font-size="12" text-anchor="middle" fill="%23fff"%3EMug%3C/text%3E%3C/svg%3E',
        features: ['100% Bamboo Material', 'Eco-Friendly', 'Dishwasher Safe', 'Thermal Insulated'],
        sku: 'ECO-BCM-001'
    },
    {
        id: 2,
        name: 'Recycled Water Bottle',
        category: 'personal',
        price: 34.99,
        rating: 4.7,
        reviews: 256,
        description: 'Durable water bottle made from 100% recycled plastic. Keeps drinks cold for up to 24 hours.',
        image: 'data:image/svg+xml,%3Csvg width="200" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="200" height="200" fill="%23e8f4f8"/%3E%3Rpath d="M 70 50 L 130 50 L 125 160 L 75 160 Z" fill="%2352b3d9" opacity="0.8"/%3E%3Crect x="80" y="30" width="40" height="20" fill="%2352b3d9"/%3E%3Ctext x="100" y="110" font-size="14" text-anchor="middle" fill="%23333" font-weight="bold"%3EWATER%3C/text%3E%3Ctext x="100" y="128" font-size="12" text-anchor="middle" fill="%23666"%3E100% Recycled%3C/text%3E%3C/svg%3E',
        features: ['100% Recycled Material', 'BPA-Free', '24-Hour Cold', 'Lightweight'],
        sku: 'ECO-RWB-002'
    },
    {
        id: 3,
        name: 'Organic Cotton T-Shirt',
        category: 'personal',
        price: 39.99,
        rating: 4.6,
        reviews: 189,
        description: 'Soft and comfortable organic cotton t-shirt. Perfect for everyday wear with style.',
        image: 'data:image/svg+xml,%3Csvg width="200" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="200" height="200" fill="%23f5f5f5"/%3E%3Rpath d="M 60 50 L 140 50 L 135 130 L 65 130 Z" fill="%232ecc71"/%3E%3Crect x="50" y="70" width="30" height="50" fill="%232ecc71"/%3E%3Crect x="120" y="70" width="30" height="50" fill="%232ecc71"/%3E%3Ctext x="100" y="100" font-size="14" text-anchor="middle" fill="%23fff" font-weight="bold"%3ET-SHIRT%3C/text%3E%3C/svg%3E',
        features: ['100% Organic Cotton', 'Sustainable Dye', 'Breathable', 'Comfortable Fit'],
        sku: 'ECO-OCT-003'
    },
    {
        id: 4,
        name: 'Bamboo Cutting Board',
        category: 'home',
        price: 29.99,
        rating: 4.8,
        reviews: 342,
        description: 'Beautiful and durable bamboo cutting board. Naturally antibacterial and perfect for any kitchen.',
        image: 'data:image/svg+xml,%3Csvg width="200" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="200" height="200" fill="%23f9f9f9"/%3E%3Crect x="40" y="50" width="120" height="100" fill="%23daa520" rx="5"/%3E%3Cline x1="45" y1="55" x2="155" y2="55" stroke="%23b8860b" stroke-width="2"/%3E%3Cline x1="45" y1="65" x2="155" y2="65" stroke="%23b8860b" stroke-width="1" opacity="0.5"/%3E%3Cline x1="45" y1="75" x2="155" y2="75" stroke="%23b8860b" stroke-width="1" opacity="0.5"/%3E%3Ctext x="100" y="115" font-size="12" text-anchor="middle" fill="%23333"%3EBamboo Board%3C/text%3E%3C/svg%3E',
        features: ['100% Bamboo', 'Antibacterial', 'Large Surface', 'Easy to Clean'],
        sku: 'ECO-BCB-004'
    },
    {
        id: 5,
        name: 'Eco-Friendly Plant Pot',
        category: 'garden',
        price: 19.99,
        rating: 4.4,
        reviews: 167,
        description: 'Biodegradable plant pot made from recycled materials. Perfect for starting your garden.',
        image: 'data:image/svg+xml,%3Csvg width="200" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="200" height="200" fill="%23f5f9f5"/%3E%3Rpath d="M 70 120 L 60 160 L 140 160 L 130 120 Z" fill="%23a0522d"/%3E%3Cellipse cx="100" cy="120" rx="30" ry="10" fill="%238b4513"/%3E%3Cirle cx="100" cy="100" r="25" fill="%232ecc71"/%3E%3Ctext x="100" y="170" font-size="12" text-anchor="middle" fill="%23333"%3EPot%3C/text%3E%3C/svg%3E',
        features: ['Biodegradable', 'Recycled Materials', 'Drainage Holes', 'Various Sizes'],
        sku: 'ECO-EFP-005'
    },
    {
        id: 6,
        name: 'Reusable Canvas Bag',
        category: 'personal',
        price: 22.99,
        rating: 4.9,
        reviews: 521,
        description: 'Durable canvas shopping bag. Reduce plastic waste with this stylish and practical reusable bag.',
        image: 'data:image/svg+xml,%3Csvg width="200" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="200" height="200" fill="%23fff5e6"/%3E%3Cpath d="M 60 60 L 140 60 L 130 160 L 70 160 Z" fill="%23d4a574"/%3E%3Crect x="75" y="50" width="50" height="15" fill="%23d4a574"/%3E%3Cline x1="80" y1="65" x2="80" y2="155" stroke="%23c49060" stroke-width="1"/%3E%3Cline x1="120" y1="65" x2="120" y2="155" stroke="%23c49060" stroke-width="1"/%3E%3Ctext x="100" y="115" font-size="11" text-anchor="middle" fill="%23333"%3ECan Bag%3C/text%3E%3C/svg%3E',
        features: ['100% Canvas', 'Reusable', 'Strong Handles', 'Large Capacity'],
        sku: 'ECO-RCB-006'
    },
    {
        id: 7,
        name: 'Solar Garden Lights',
        category: 'garden',
        price: 49.99,
        rating: 4.5,
        reviews: 234,
        description: 'Set of 6 solar-powered garden lights. Illuminate your garden while reducing electricity costs.',
        image: 'data:image/svg+xml,%3Csvg width="200" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="200" height="200" fill="%23e8f4f8"/%3E%3Ccircle cx="100" cy="80" r="30" fill="%23ffeb3b"/%3E%3Crect x="95" y="110" width="10" height="50" fill="%23333"/%3E%3Crect x="85" y="160" width="30" height="20" fill="%23555" rx="3"/%3E%3Ctext x="100" y="185" font-size="10" text-anchor="middle" fill="%23333"%3ESolar Light%3C/text%3E%3C/svg%3E',
        features: ['Solar Powered', 'LED Lights', 'Weather Resistant', 'Set of 6'],
        sku: 'ECO-SGL-007'
    },
    {
        id: 8,
        name: 'Bamboo Toothbrush Set',
        category: 'personal',
        price: 14.99,
        rating: 4.7,
        reviews: 456,
        description: 'Pack of 4 biodegradable bamboo toothbrushes. Soft bristles and sustainable design.',
        image: 'data:image/svg+xml,%3Csvg width="200" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="200" height="200" fill="%23fdf5f5"/%3E%3Crect x="50" y="60" width="8" height="80" fill="%23a0826d"/%3E%3Crect x="50" y="55" width="8" height="8" fill="%23d9b8a8"/%3E%3Ctext x="100" y="115" font-size="12" text-anchor="middle" fill="%23333"%3E4 Toothbrushes%3C/text%3E%3C/svg%3E',
        features: ['100% Biodegradable', 'Soft Bristles', 'Pack of 4', 'Eco-Friendly'],
        sku: 'ECO-BTB-008'
    }
];

// Cart Management
class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
    }

    loadCart() {
        const saved = localStorage.getItem('ecoshop_cart');
        return saved ? JSON.parse(saved) : [];
    }

    saveCart() {
        localStorage.setItem('ecoshop_cart', JSON.stringify(this.items));
        this.updateCartUI();
    }

    addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                ...product,
                quantity: quantity
            });
        }
        
        this.saveCart();
        this.showNotification(`${product.name} added to cart!`);
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            if (item.quantity <= 0) {
                this.removeItem(productId);
            } else {
                this.saveCart();
            }
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    updateCartUI() {
        // Update cart count badge
        const cartCount = document.querySelectorAll('.cart-count');
        cartCount.forEach(el => el.textContent = this.getItemCount());

        // Update cart modal
        const cartItemsContainer = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');

        if (cartItemsContainer) {
            if (this.items.length === 0) {
                cartItemsContainer.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
            } else {
                cartItemsContainer.innerHTML = this.items.map(item => `
                    <div class="cart-item">
                        <div class="cart-item-info">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
                        </div>
                        <button class="remove-item" onclick="cart.removeItem(${item.id})">Remove</button>
                    </div>
                `).join('');
            }

            if (cartTotal) {
                cartTotal.textContent = this.getTotal().toFixed(2);
            }
        }
    }

    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #2ecc71;
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Global cart instance
const cart = new ShoppingCart();

// Product Display Functions
function displayProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = products.map(product => `
        <div class="product-card" onclick="navigateToProduct(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-body">
                <div class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    <span class="stars">${'★'.repeat(Math.floor(product.rating))}☆</span>
                    <span class="review-count">(${product.reviews})</span>
                </div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="product-btn" onclick="event.stopPropagation(); cart.addItem(getProduct(${product.id}))">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function getProduct(id) {
    return PRODUCTS.find(p => p.id === id);
}

function navigateToProduct(id) {
    window.location.href = `product.html?id=${id}`;
}

// Product Detail Page
function displayProductDetail() {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    const product = getProduct(productId);

    if (!product) {
        document.body.innerHTML = '<p>Product not found</p>';
        return;
    }

    // Update page title
    document.title = `${product.name} - EcoShop`;

    // Fill product details
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productTitle').textContent = product.name;
    document.getElementById('productImage').src = product.image;
    document.getElementById('productImage').alt = product.name;
    document.getElementById('productPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productCategory').textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1);
    document.getElementById('productSKU').textContent = product.sku;
    document.getElementById('reviewCount').textContent = `(${product.reviews} reviews)`;
    document.getElementById('productRating').textContent = '★'.repeat(Math.floor(product.rating)) + '☆';

    const featuresList = document.getElementById('productFeatures');
    featuresList.innerHTML = product.features.map(feature => `<li>${feature}</li>`).join('');

    // Add to cart functionality
    const quantityInput = document.getElementById('quantity');
    const addToCartBtn = document.getElementById('addToCartBtn');
    const increaseBtn = document.getElementById('increaseQty');
    const decreaseBtn = document.getElementById('decreaseQty');

    addToCartBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        cart.addItem(product, quantity);
    });

    increaseBtn.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    decreaseBtn.addEventListener('click', () => {
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });

    // Display related products
    const relatedProducts = PRODUCTS.filter(p => 
        p.category === product.category && p.id !== product.id
    ).slice(0, 4);
    displayProducts(relatedProducts, 'relatedProducts');
}

// Shop Page Functionality
function initializeShopPage() {
    const categoryFilters = document.querySelectorAll('.category-filter');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const sortBy = document.getElementById('sortBy');

    let selectedCategories = ['all'];
    let maxPrice = 200;

    function filterAndSort() {
        let filtered = PRODUCTS;

        // Category filter
        if (!selectedCategories.includes('all')) {
            filtered = filtered.filter(p => selectedCategories.includes(p.category));
        }

        // Price filter
        filtered = filtered.filter(p => p.price <= maxPrice);

        // Sort
        const sortValue = sortBy.value;
        switch(sortValue) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                filtered.sort((a, b) => b.reviews - a.reviews);
        }

        displayProducts(filtered, 'productsGrid');
    }

    // Category filter event listeners
    categoryFilters.forEach(filter => {
        filter.addEventListener('change', (e) => {
            if (e.target.value === 'all') {
                categoryFilters.forEach(f => f.checked = f === e.target);
                selectedCategories = ['all'];
            } else {
                document.querySelector('input[value="all"]').checked = false;
                selectedCategories = Array.from(categoryFilters)
                    .filter(f => f.checked && f.value !== 'all')
                    .map(f => f.value);
                if (selectedCategories.length === 0) {
                    document.querySelector('input[value="all"]').checked = true;
                    selectedCategories = ['all'];
                }
            }
            filterAndSort();
        });
    });

    // Price range event listener
    priceRange.addEventListener('input', (e) => {
        maxPrice = parseInt(e.target.value);
        priceValue.textContent = maxPrice;
        filterAndSort();
    });

    // Sort event listener
    sortBy.addEventListener('change', filterAndSort);

    // Initial display
    filterAndSort();
}

// Contact Form Handling
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulate form submission
        const formMessage = document.getElementById('formMessage');
        
        // Validate
        if (name.trim() && email.trim() && message.trim()) {
            formMessage.textContent = 'Message sent successfully! We\'ll get back to you soon.';
            formMessage.classList.add('success');
            formMessage.classList.remove('error');
            contactForm.reset();

            setTimeout(() => {
                formMessage.classList.remove('success');
            }, 5000);
        } else {
            formMessage.textContent = 'Please fill in all required fields.';
            formMessage.classList.add('error');
            formMessage.classList.remove('success');
        }
    });
}

// Newsletter Form
function initializeNewsletter() {
    const newsletterForm = document.getElementById('newsletterForm');
    if (!newsletterForm) return;

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        cart.showNotification(`Thanks for subscribing! Check ${email} for exclusive offers.`);
        newsletterForm.reset();
    });
}

// Cart Modal
function initializeCartModal() {
    const cartLink = document.getElementById('cartLink');
    const cartModal = document.getElementById('cartModal');
    const closeBtn = document.querySelector('.close');

    if (cartLink && cartModal) {
        cartLink.addEventListener('click', (e) => {
            e.preventDefault();
            cartModal.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            cartModal.classList.remove('active');
        });

        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.classList.remove('active');
            }
        });
    }
}

// Navigation Active State
function updateActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.href.includes(currentPage) || 
            (currentPage === '' && link.href.includes('index.html'))) {
            link.classList.add('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Common initializations
    cart.updateCartUI();
    initializeCartModal();
    initializeNewsletter();
    updateActiveNav();

    // Page-specific initializations
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    if (currentPage === 'index.html' || currentPage === '') {
        displayProducts(PRODUCTS.slice(0, 4), 'featuredProducts');
    }

    if (currentPage === 'shop.html') {
        initializeShopPage();
    }

    if (currentPage === 'product.html') {
        displayProductDetail();
    }

    if (currentPage === 'contact.html') {
        initializeContactForm();
    }
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);