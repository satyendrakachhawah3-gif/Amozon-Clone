import React, { createContext, useContext, useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // Navigation & View State
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'catalog', 'cart', 'orders', 'wishlist'
  
  // Search & Filtering State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Departments');
  const [priceRange, setPriceRange] = useState(4000);
  const [minRating, setMinRating] = useState(0);
  const [primeOnly, setPrimeOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-low', 'price-high', 'rating'

  // Shopping Cart & Wishlist State
  const [cart, setCart] = useState([
    { product: PRODUCTS[0], quantity: 1 },
    { product: PRODUCTS[2], quantity: 2 }
  ]);
  const [wishlist, setWishlist] = useState(['prod-1', 'prod-6']);

  // Modals & Drawers
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  // Delivery Location
  const [deliveryLocation, setDeliveryLocation] = useState({
    city: 'New York',
    zip: '10001',
    country: 'United States'
  });

  // Orders State
  const [orders, setOrders] = useState([
    {
      id: 'AMZ-892401-US',
      date: '2026-08-04T14:22:00Z',
      items: [
        { product: PRODUCTS[1], quantity: 1, price: 3299.00 }
      ],
      total: 3299.00,
      status: 'Shipped',
      step: 3, // 1: Placed, 2: Processing, 3: Shipped, 4: Out for Delivery, 5: Delivered
      estimatedDelivery: 'Tomorrow by 10 PM',
      shippingAddress: { name: 'Alex Johnson', street: '350 Fifth Ave', city: 'New York', zip: '10118' }
    }
  ]);

  // Toast Notifications
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  // Cart Handlers
  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { product, quantity }];
      }
    });
    addToast(`Added "${product.title.substring(0, 30)}..." to Cart!`);
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
    addToast('Item removed from cart', 'info');
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => prev.map(item => 
      item.product.id === productId ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => setCart([]);

  // Wishlist Handlers
  const toggleWishlist = (product) => {
    setWishlist(prev => {
      if (prev.includes(product.id)) {
        addToast('Removed from Wishlist', 'info');
        return prev.filter(id => id !== product.id);
      } else {
        addToast('Added to Wishlist!');
        return [...prev, product.id];
      }
    });
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  // Cart Calculations
  const cartSubtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }, [cart]);

  const cartItemCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  // Order Placement
  const placeOrder = (shippingDetails, paymentDetails) => {
    const newOrder = {
      id: `AMZ-${Math.floor(100000 + Math.random() * 900000)}-US`,
      date: new Date().toISOString(),
      items: [...cart],
      total: cartSubtotal,
      status: 'Order Placed',
      step: 1,
      estimatedDelivery: 'Arriving in 2 Days (Free Prime Shipping)',
      shippingAddress: shippingDetails,
      paymentMethod: paymentDetails.method
    };

    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    setIsCheckoutOpen(false);
    setActiveTab('orders');
    addToast('Order placed successfully! 🎉', 'success');
  };

  // Product Filter Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // Category filter
      if (selectedCategory !== 'All Departments' && product.category !== selectedCategory) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = product.title.toLowerCase().includes(q);
        const matchesBrand = product.brand.toLowerCase().includes(q);
        const matchesCat = product.category.toLowerCase().includes(q);
        if (!matchesTitle && !matchesBrand && !matchesCat) return false;
      }
      // Rating filter
      if (product.rating < minRating) return false;
      // Price filter
      if (product.price > priceRange) return false;
      // Prime filter
      if (primeOnly && !product.isPrime) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured
    });
  }, [selectedCategory, searchQuery, minRating, priceRange, primeOnly, sortBy]);

  return (
    <ShopContext.Provider value={{
      // State
      activeTab, setActiveTab,
      searchQuery, setSearchQuery,
      selectedCategory, setSelectedCategory,
      priceRange, setPriceRange,
      minRating, setMinRating,
      primeOnly, setPrimeOnly,
      sortBy, setSortBy,
      cart, wishlist, orders,
      cartSubtotal, cartItemCount,
      selectedProduct, setSelectedProduct,
      isCartOpen, setIsCartOpen,
      isCheckoutOpen, setIsCheckoutOpen,
      isLocationModalOpen, setIsLocationModalOpen,
      deliveryLocation, setDeliveryLocation,
      filteredProducts,
      toasts,

      // Actions
      addToCart, removeFromCart, updateCartQuantity, clearCart,
      toggleWishlist, isInWishlist,
      placeOrder, addToast
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
