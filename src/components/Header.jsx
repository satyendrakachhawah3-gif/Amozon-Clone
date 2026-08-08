import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES } from '../data/products';
import { 
  Search, 
  MapPin, 
  ShoppingCart, 
  Heart, 
  Package, 
  User, 
  ChevronDown, 
  X 
} from 'lucide-react';

export const Header = () => {
  const {
    activeTab, setActiveTab,
    searchQuery, setSearchQuery,
    selectedCategory, setSelectedCategory,
    cartItemCount, wishlist,
    setIsCartOpen,
    deliveryLocation, setIsLocationModalOpen
  } = useShop();

  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (activeTab !== 'catalog' && activeTab !== 'home') {
      setActiveTab('catalog');
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    if (activeTab !== 'catalog') {
      setActiveTab('catalog');
    }
  };

  return (
    <header className="header-top">
      {/* 1. Amazon Logo */}
      <div className="header-brand" onClick={() => setActiveTab('home')}>
        <div className="logo-container">
          <span className="logo-text">amazon</span>
          <span className="logo-domain">.clone</span>
          <svg className="smile-arrow" viewBox="0 0 100 20" fill="none">
            <path d="M5 5 Q 50 22 95 8" stroke="#ff9900" strokeWidth="4" strokeLinecap="round" />
            <path d="M85 2 L 95 8 L 88 16" fill="#ff9900" />
          </svg>
        </div>
      </div>

      {/* 2. Deliver To Location Picker */}
      <div className="header-location" onClick={() => setIsLocationModalOpen(true)}>
        <MapPin size={18} className="location-icon" />
        <div className="location-text">
          <span className="sub-text">Deliver to</span>
          <span className="main-text">{deliveryLocation.city} {deliveryLocation.zip}</span>
        </div>
      </div>

      {/* 3. Search Bar */}
      <form className="header-search" onSubmit={handleSearchSubmit}>
        <div className="search-category-select">
          <select value={selectedCategory} onChange={handleCategoryChange}>
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <ChevronDown size={14} className="select-arrow" />
        </div>

        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Search Amazon Clone (e.g. Sony, MacBook, Nike, Echo)"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (activeTab !== 'catalog' && e.target.value.length > 0) {
                setActiveTab('catalog');
              }
            }}
          />
          {searchQuery && (
            <button type="button" className="clear-btn" onClick={() => setSearchQuery('')}>
              <X size={16} />
            </button>
          )}
        </div>

        <button type="submit" className="search-btn" title="Search">
          <Search size={20} />
        </button>
      </form>

      {/* 4. Right Side Nav Links */}
      <div className="header-nav">
        {/* Language Selector */}
        <div className="nav-item lang-picker">
          <span className="flag-icon">🇺🇸</span>
          <span className="nav-bold">EN</span>
          <ChevronDown size={12} />
        </div>

        {/* Account & Lists */}
        <div 
          className="nav-item account-picker"
          onMouseEnter={() => setIsAccountMenuOpen(true)}
          onMouseLeave={() => setIsAccountMenuOpen(false)}
        >
          <span className="sub-text">Hello, Alex</span>
          <span className="main-text flex-align">Account & Lists <ChevronDown size={12} /></span>

          {isAccountMenuOpen && (
            <div className="account-dropdown">
              <div className="dropdown-arrow" />
              <div className="dropdown-header">
                <button className="btn-primary full-width" onClick={() => alert('Signed in as Alex Johnson')}>
                  Sign In
                </button>
                <p className="sub-note">New customer? <a href="#start">Start here.</a></p>
              </div>
              <div className="dropdown-grid">
                <div className="dropdown-col">
                  <h4>Your Lists</h4>
                  <ul>
                    <li onClick={() => setActiveTab('wishlist')}>Wish List ({wishlist.length})</li>
                    <li>Create a Wish List</li>
                    <li>Explore Idea Lists</li>
                  </ul>
                </div>
                <div className="dropdown-col">
                  <h4>Your Account</h4>
                  <ul>
                    <li onClick={() => setActiveTab('orders')}>Your Orders</li>
                    <li onClick={() => setActiveTab('wishlist')}>Your Recommendations</li>
                    <li>Your Prime Membership</li>
                    <li>Memberships & Subscriptions</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Returns & Orders */}
        <div className="nav-item" onClick={() => setActiveTab('orders')}>
          <span className="sub-text">Returns</span>
          <span className="main-text">& Orders</span>
        </div>

        {/* Wishlist Icon Shortcut */}
        <div className="nav-item wishlist-item" onClick={() => setActiveTab('wishlist')} title="Wishlist">
          <div className="icon-badge-wrap">
            <Heart size={22} fill={wishlist.length > 0 ? '#f08804' : 'none'} color={wishlist.length > 0 ? '#f08804' : '#fff'} />
            {wishlist.length > 0 && <span className="nav-badge">{wishlist.length}</span>}
          </div>
        </div>

        {/* Shopping Cart Button */}
        <div className="nav-item cart-item" onClick={() => setIsCartOpen(true)} title="Shopping Cart">
          <div className="cart-badge-wrap">
            <ShoppingCart size={28} />
            <span className="cart-count">{cartItemCount}</span>
          </div>
          <span className="main-text cart-label">Cart</span>
        </div>
      </div>

      <style>{`
        .header-top {
          background-color: var(--amz-dark-navy);
          color: #fff;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 8px 16px;
          height: 60px;
          position: sticky;
          top: 0;
          z-index: 900;
          box-shadow: var(--shadow-md);
        }

        .header-brand {
          cursor: pointer;
          padding: 4px 6px;
          border: 1px solid transparent;
          border-radius: var(--radius-sm);
        }
        .header-brand:hover {
          border-color: #fff;
        }
        .logo-container {
          position: relative;
          display: flex;
          align-items: baseline;
          user-select: none;
        }
        .logo-text {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: #fff;
        }
        .logo-domain {
          font-size: 14px;
          font-weight: 600;
          color: var(--amz-accent-orange);
        }
        .smile-arrow {
          position: absolute;
          bottom: -8px;
          left: 2px;
          width: 90%;
          height: 12px;
        }

        .header-location {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 8px;
          cursor: pointer;
          border: 1px solid transparent;
          border-radius: var(--radius-sm);
        }
        .header-location:hover {
          border-color: #fff;
        }
        .location-icon {
          color: #fff;
          margin-top: 8px;
        }
        .location-text {
          display: flex;
          flex-direction: column;
        }
        .sub-text {
          font-size: 11px;
          color: #ccc;
          line-height: 1.1;
        }
        .main-text {
          font-size: 13px;
          font-weight: 700;
          line-height: 1.2;
          color: #fff;
        }

        .header-search {
          flex: 1;
          display: flex;
          height: 40px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          background: #fff;
          border: 2px solid transparent;
          transition: border-color var(--transition-fast);
        }
        .header-search:focus-within {
          border-color: var(--amz-accent-orange);
        }
        .search-category-select {
          position: relative;
          background: #f3f3f3;
          border-right: 1px solid #cdcdcd;
          display: flex;
          align-items: center;
          padding: 0 8px;
        }
        .search-category-select select {
          background: transparent;
          border: none;
          font-size: 12px;
          color: #333;
          cursor: pointer;
          padding-right: 16px;
          appearance: none;
          font-weight: 500;
        }
        .select-arrow {
          position: absolute;
          right: 6px;
          pointer-events: none;
          color: #555;
        }
        .search-input-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 0 10px;
          position: relative;
        }
        .search-input-wrapper input {
          width: 100%;
          border: none;
          outline: none;
          font-size: 14px;
          color: #111;
        }
        .clear-btn {
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
        }
        .search-btn {
          background-color: #febd69;
          border: none;
          width: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          transition: background-color var(--transition-fast);
        }
        .search-btn:hover {
          background-color: #f3a847;
        }

        .header-nav {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .nav-item {
          padding: 4px 8px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          border: 1px solid transparent;
          border-radius: var(--radius-sm);
          position: relative;
        }
        .nav-item:hover {
          border-color: #fff;
        }
        .flex-align {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .lang-picker {
          flex-direction: row;
          align-items: center;
          gap: 4px;
        }
        .flag-icon {
          font-size: 16px;
        }
        .nav-bold {
          font-size: 13px;
          font-weight: 700;
        }

        .cart-item {
          flex-direction: row;
          align-items: flex-end;
          gap: 4px;
        }
        .cart-badge-wrap {
          position: relative;
          color: #fff;
        }
        .cart-count {
          position: absolute;
          top: -2px;
          right: 9px;
          color: var(--amz-accent-orange);
          font-size: 15px;
          font-weight: 800;
        }
        .cart-label {
          margin-bottom: 2px;
        }

        .icon-badge-wrap {
          position: relative;
          padding: 4px;
        }
        .nav-badge {
          position: absolute;
          top: -4px;
          right: -6px;
          background-color: var(--amz-accent-orange);
          color: #111;
          font-size: 10px;
          font-weight: 800;
          padding: 1px 5px;
          border-radius: var(--radius-full);
        }

        /* Account Dropdown */
        .account-picker {
          position: relative;
        }
        .account-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          width: 320px;
          background: #fff;
          color: #111;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          padding: 16px;
          margin-top: 6px;
          z-index: 1000;
          animation: fadeIn 0.15s ease-out;
        }
        .dropdown-arrow {
          position: absolute;
          top: -6px;
          right: 30px;
          width: 12px;
          height: 12px;
          background: #fff;
          transform: rotate(45deg);
        }
        .dropdown-header {
          text-align: center;
          padding-bottom: 12px;
          border-bottom: 1px solid #eee;
        }
        .sub-note {
          font-size: 11px;
          color: #666;
          margin-top: 6px;
        }
        .full-width {
          width: 100%;
        }
        .dropdown-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          padding-top: 12px;
        }
        .dropdown-col h4 {
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .dropdown-col ul {
          list-style: none;
        }
        .dropdown-col li {
          font-size: 12px;
          color: #444;
          padding: 3px 0;
          cursor: pointer;
        }
        .dropdown-col li:hover {
          color: var(--amz-blue-link-hover);
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .header-location, .lang-picker {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};
