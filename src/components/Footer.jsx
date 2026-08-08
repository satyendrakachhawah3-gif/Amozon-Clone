import React from 'react';
import { useShop } from '../context/ShopContext';
import { Globe, ChevronUp } from 'lucide-react';

export const Footer = () => {
  const { setActiveTab } = useShop();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      {/* Back to Top */}
      <button className="back-to-top" onClick={scrollToTop}>
        <ChevronUp size={16} /> Back to top
      </button>

      {/* Main Footer Links */}
      <div className="footer-links-grid">
        <div className="footer-col">
          <h3>Get to Know Us</h3>
          <ul>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#about">About Amazon Clone</a></li>
            <li><a href="#investor">Investor Relations</a></li>
            <li><a href="#devices">Amazon Devices</a></li>
            <li><a href="#science">Amazon Science</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Make Money with Us</h3>
          <ul>
            <li><a href="#sell">Sell products on Amazon</a></li>
            <li><a href="#apps">Sell apps on Amazon</a></li>
            <li><a href="#affiliate">Become an Affiliate</a></li>
            <li><a href="#advertise">Advertise Your Products</a></li>
            <li><a href="#publish">Self-Publish with Us</a></li>
            <li><a href="#hub">Host an Amazon Hub</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Amazon Payment Products</h3>
          <ul>
            <li><a href="#card">Amazon Business Card</a></li>
            <li><a href="#points">Shop with Points</a></li>
            <li><a href="#reload">Reload Your Balance</a></li>
            <li><a href="#converter">Amazon Currency Converter</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Let Us Help You</h3>
          <ul>
            <li onClick={() => setActiveTab('orders')}><a href="#orders">Your Account & Orders</a></li>
            <li onClick={() => setActiveTab('cart')}><a href="#shipping">Shipping Rates & Policies</a></li>
            <li><a href="#returns">Returns & Replacements</a></li>
            <li><a href="#manage">Manage Your Content</a></li>
            <li><a href="#help">Customer Service</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-divider" />

      {/* Brand & Language Selector */}
      <div className="footer-mid">
        <div className="footer-logo" onClick={() => setActiveTab('home')}>
          <span className="logo-text">amazon</span>
          <span className="logo-domain">.clone</span>
        </div>

        <div className="footer-options">
          <button className="footer-pill">
            <Globe size={14} /> English
          </button>
          <button className="footer-pill">
            $ USD - U.S. Dollar
          </button>
          <button className="footer-pill">
            🇺🇸 United States
          </button>
        </div>
      </div>

      {/* Sub-footer services */}
      <div className="footer-bottom">
        <div className="services-grid">
          <div><strong>Amazon Web Services</strong><span>Scalable Cloud Services</span></div>
          <div><strong>Audible</strong><span>Listen to Books & Audio</span></div>
          <div><strong>IMDb</strong><span>Movies, TV & Celebrities</span></div>
          <div><strong>Shopbop</strong><span>Designer Fashion Brands</span></div>
        </div>

        <div className="legal-copy">
          <div className="legal-links">
            <a href="#conditions">Conditions of Use</a>
            <a href="#privacy">Privacy Notice</a>
            <a href="#ads">Your Ads Privacy Choices</a>
          </div>
          <p>© 2026, Amazon.clone, Inc. or its affiliates. Built with React & Vite.</p>
        </div>
      </div>

      <style>{`
        .footer-container {
          background-color: var(--amz-dark-navy);
          color: #fff;
          margin-top: 40px;
        }

        .back-to-top {
          width: 100%;
          background-color: #37475a;
          color: #fff;
          border: none;
          padding: 14px 0;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: background-color var(--transition-fast);
        }

        .back-to-top:hover {
          background-color: #485769;
        }

        .footer-links-grid {
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px 20px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .footer-col h3 {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .footer-col ul {
          list-style: none;
        }

        .footer-col li {
          margin-bottom: 8px;
          font-size: 13px;
        }

        .footer-col a {
          color: #ddd;
        }

        .footer-col a:hover {
          color: #fff;
          text-decoration: underline;
        }

        .footer-divider {
          height: 1px;
          background: #3a4553;
        }

        .footer-mid {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          padding: 24px 20px;
        }

        .footer-logo {
          font-size: 24px;
          font-weight: 800;
          cursor: pointer;
        }

        .footer-logo .logo-domain {
          color: var(--amz-accent-orange);
          font-size: 14px;
        }

        .footer-options {
          display: flex;
          gap: 10px;
        }

        .footer-pill {
          background: transparent;
          border: 1px solid #848688;
          color: #ccc;
          padding: 6px 12px;
          border-radius: 3px;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }

        .footer-pill:hover {
          border-color: #fff;
          color: #fff;
        }

        .footer-bottom {
          background-color: #131a22;
          padding: 30px 20px;
          text-align: center;
        }

        .services-grid {
          max-width: 800px;
          margin: 0 auto 24px auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          text-align: left;
          font-size: 12px;
        }

        .services-grid strong {
          display: block;
          color: #ddd;
        }

        .services-grid span {
          color: #999;
        }

        .legal-copy {
          font-size: 12px;
          color: #999;
        }

        .legal-links {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 8px;
        }

        .legal-links a {
          color: #ccc;
        }

        @media (max-width: 768px) {
          .footer-links-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </footer>
  );
};
