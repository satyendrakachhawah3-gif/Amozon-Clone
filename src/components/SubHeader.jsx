import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES } from '../data/products';
import { Menu, X, ChevronRight, ShoppingBag, Flame, Gift, HelpCircle, Tv, Sparkles } from 'lucide-react';

export const SubHeader = () => {
  const { setActiveTab, setSelectedCategory } = useShop();
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const navLinks = [
    { label: "Today's Deals", icon: Flame, cat: 'All Departments' },
    { label: 'Electronics', cat: 'Electronics' },
    { label: 'Laptops & Computers', cat: 'Laptops & Computers' },
    { label: 'Smart Home', cat: 'Smart Home' },
    { label: 'Fashion', cat: 'Fashion & Apparel' },
    { label: 'Home & Kitchen', cat: 'Home & Kitchen' },
    { label: 'Prime Video', icon: Tv, cat: 'All Departments' },
    { label: 'Registry', icon: Gift, cat: 'All Departments' },
    { label: 'Customer Service', icon: HelpCircle, cat: 'All Departments' }
  ];

  const handleNavClick = (cat) => {
    setSelectedCategory(cat);
    setActiveTab('catalog');
  };

  return (
    <>
      <nav className="sub-header">
        {/* Menu Toggle button */}
        <div className="sub-nav-item menu-toggle" onClick={() => setIsSideDrawerOpen(true)}>
          <Menu size={20} />
          <span className="bold-text">All</span>
        </div>

        {/* Quick Links */}
        <div className="sub-nav-links">
          {navLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <div 
                key={idx} 
                className="sub-nav-link"
                onClick={() => handleNavClick(link.cat)}
              >
                {Icon && <Icon size={15} className="link-icon" />}
                <span>{link.label}</span>
              </div>
            );
          })}
        </div>

        {/* Right Promo Text */}
        <div className="sub-header-promo" onClick={() => handleNavClick('Electronics')}>
          <Sparkles size={16} className="promo-sparkle" />
          <span>Shop Tech Week Deals</span>
        </div>
      </nav>

      {/* Side Navigation Drawer Overlay */}
      {isSideDrawerOpen && (
        <div className="drawer-overlay" onClick={() => setIsSideDrawerOpen(false)}>
          <div className="side-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <div className="user-greeting">
                <div className="avatar-circle">A</div>
                <span>Hello, Alex</span>
              </div>
              <button className="drawer-close-btn" onClick={() => setIsSideDrawerOpen(false)}>
                <X size={22} />
              </button>
            </div>

            <div className="drawer-body">
              <div className="drawer-section">
                <h3>Digital Content & Devices</h3>
                <ul>
                  <li onClick={() => { handleNavClick('Electronics'); setIsSideDrawerOpen(false); }}>
                    <span>Amazon Music</span> <ChevronRight size={16} />
                  </li>
                  <li onClick={() => { handleNavClick('Electronics'); setIsSideDrawerOpen(false); }}>
                    <span>Kindle E-readers & Books</span> <ChevronRight size={16} />
                  </li>
                  <li onClick={() => { handleNavClick('Smart Home'); setIsSideDrawerOpen(false); }}>
                    <span>Amazon Appstore</span> <ChevronRight size={16} />
                  </li>
                </ul>
              </div>

              <div className="drawer-section">
                <h3>Shop By Department</h3>
                <ul>
                  {CATEGORIES.map((cat, i) => (
                    <li key={i} onClick={() => { handleNavClick(cat); setIsSideDrawerOpen(false); }}>
                      <span>{cat}</span> <ChevronRight size={16} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="drawer-section">
                <h3>Programs & Features</h3>
                <ul>
                  <li onClick={() => { setActiveTab('wishlist'); setIsSideDrawerOpen(false); }}>
                    <span>Gift Cards & Registry</span>
                  </li>
                  <li onClick={() => { setActiveTab('orders'); setIsSideDrawerOpen(false); }}>
                    <span>Your Orders & Subscriptions</span>
                  </li>
                  <li onClick={() => { setActiveTab('catalog'); setIsSideDrawerOpen(false); }}>
                    <span>Amazon Live Deals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .sub-header {
          background-color: var(--amz-sub-navy);
          color: #fff;
          display: flex;
          align-items: center;
          padding: 0 16px;
          height: 38px;
          font-size: 13px;
          position: relative;
          z-index: 800;
        }

        .menu-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: var(--radius-sm);
          border: 1px solid transparent;
        }
        .menu-toggle:hover {
          border-color: #fff;
        }
        .bold-text {
          font-weight: 700;
        }

        .sub-nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .sub-nav-links::-webkit-scrollbar {
          display: none;
        }

        .sub-nav-link {
          padding: 4px 8px;
          cursor: pointer;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 5px;
          border-radius: var(--radius-sm);
          border: 1px solid transparent;
          color: #e6e6e6;
          transition: border-color var(--transition-fast);
        }
        .sub-nav-link:hover {
          border-color: #fff;
          color: #fff;
        }
        .link-icon {
          color: var(--amz-accent-orange);
        }

        .sub-header-promo {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 6px;
          color: #febd69;
          font-weight: 700;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: var(--radius-sm);
        }
        .sub-header-promo:hover {
          text-decoration: underline;
        }
        .promo-sparkle {
          color: #ffd814;
        }

        /* Drawer Overlay */
        .drawer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          z-index: 1200;
          display: flex;
          animation: fadeIn 0.2s ease-out;
        }

        .side-drawer {
          width: 360px;
          max-width: 85vw;
          background-color: #fff;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-xl);
          animation: slideRight 0.25s ease-out;
        }

        @keyframes slideRight {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }

        .drawer-header {
          background-color: var(--amz-sub-navy);
          color: #fff;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .user-greeting {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          font-size: 18px;
        }

        .avatar-circle {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: var(--amz-accent-orange);
          color: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }

        .drawer-close-btn {
          background: none;
          color: #fff;
          cursor: pointer;
        }

        .drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 16px 0;
        }

        .drawer-section {
          padding: 12px 20px;
          border-bottom: 1px solid #e7e7e7;
        }

        .drawer-section h3 {
          font-size: 14px;
          font-weight: 700;
          color: var(--amz-text-dark);
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .drawer-section ul {
          list-style: none;
        }

        .drawer-section li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
          font-size: 14px;
          color: #333;
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .drawer-section li:hover {
          color: var(--amz-blue-link-hover);
          background-color: #f7f7f7;
          padding-left: 8px;
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .sub-header-promo {
            display: none;
          }
        }
      `}</style>
    </>
  );
};
