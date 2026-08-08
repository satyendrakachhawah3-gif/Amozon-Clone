import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

export const CartDrawer = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    cartSubtotal, 
    updateCartQuantity, 
    removeFromCart,
    setIsCheckoutOpen,
    setActiveTab
  } = useShop();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 35;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const freeShippingPercent = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleViewCartPage = () => {
    setIsCartOpen(false);
    setActiveTab('cart');
  };

  return (
    <div className="drawer-overlay" onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="cart-drawer-header">
          <h2>Shopping Cart ({cart.reduce((sum, i) => sum + i.quantity, 0)})</h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="free-shipping-bar">
          {remainingForFreeShipping === 0 ? (
            <div className="free-shipping-msg success flex-align">
              <Truck size={18} /> Your order qualifies for <strong>FREE Prime Delivery!</strong>
            </div>
          ) : (
            <div className="free-shipping-msg">
              Add <strong>${remainingForFreeShipping.toFixed(2)}</strong> more of eligible items to get <strong>FREE Shipping</strong>.
            </div>
          )}
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${freeShippingPercent}%` }} />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="cart-items-body">
          {cart.length > 0 ? (
            cart.map(({ product, quantity }) => (
              <div key={product.id} className="cart-item-row">
                <img src={product.image} alt={product.title} className="cart-item-img" />
                
                <div className="cart-item-info">
                  <h4 className="cart-item-title">{product.title}</h4>
                  <span className="cart-item-price">${product.price.toFixed(2)}</span>
                  
                  {product.isPrime && (
                    <span className="badge-prime"><span>prime</span> FREE One-Day</span>
                  )}

                  {/* Quantity Controls */}
                  <div className="cart-item-actions">
                    <div className="qty-picker">
                      <button 
                        onClick={() => updateCartQuantity(product.id, quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span>{quantity}</span>
                      <button 
                        onClick={() => updateCartQuantity(product.id, quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button 
                      className="delete-item-btn" 
                      onClick={() => removeFromCart(product.id)}
                      title="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-cart-view">
              <p>Your Amazon Cart is empty.</p>
              <button 
                className="btn-primary" 
                onClick={() => { setIsCartOpen(false); setActiveTab('catalog'); }}
              >
                Shop today's deals
              </button>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {cart.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="subtotal-row">
              <span>Subtotal:</span>
              <span className="subtotal-price">${cartSubtotal.toFixed(2)}</span>
            </div>

            <button className="btn-secondary full-width checkout-btn" onClick={handleCheckoutClick}>
              Proceed to Checkout <ArrowRight size={18} />
            </button>

            <button className="btn-outline full-width view-cart-btn" onClick={handleViewCartPage}>
              View Full Cart
            </button>
          </div>
        )}
      </div>

      <style>{`
        .cart-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 420px;
          max-width: 90vw;
          background: #fff;
          z-index: 1200;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-xl);
          animation: slideLeft 0.25s ease-out;
        }

        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .cart-drawer-header {
          padding: 16px 20px;
          border-bottom: 1px solid #eee;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--amz-dark-navy);
          color: #fff;
        }

        .cart-drawer-header h2 {
          font-size: 16px;
          font-weight: 700;
        }

        .close-btn {
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
        }

        .free-shipping-bar {
          background: #f0fdf4;
          border-bottom: 1px solid #bbf7d0;
          padding: 12px 20px;
        }

        .free-shipping-msg {
          font-size: 12px;
          color: #166534;
          margin-bottom: 6px;
        }
        .free-shipping-msg.success {
          font-weight: 700;
        }

        .progress-track {
          height: 6px;
          background: #dcfce7;
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--amz-green-success);
          transition: width 0.3s ease;
        }

        .cart-items-body {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cart-item-row {
          display: flex;
          gap: 14px;
          padding-bottom: 16px;
          border-bottom: 1px solid #eee;
        }

        .cart-item-img {
          width: 80px;
          height: 80px;
          object-fit: contain;
          border: 1px solid #eee;
          border-radius: 6px;
          padding: 4px;
        }

        .cart-item-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .cart-item-title {
          font-size: 13px;
          font-weight: 600;
          line-height: 1.3;
          color: var(--amz-text-dark);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .cart-item-price {
          font-size: 15px;
          font-weight: 700;
          color: #0f1111;
        }

        .cart-item-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 6px;
        }

        .qty-picker {
          display: flex;
          align-items: center;
          border: 1px solid #ccc;
          border-radius: 4px;
          overflow: hidden;
        }

        .qty-picker button {
          background: #f7f7f7;
          border: none;
          padding: 4px 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .qty-picker button:hover {
          background: #e7e7e7;
        }

        .qty-picker span {
          padding: 0 10px;
          font-size: 13px;
          font-weight: 600;
        }

        .delete-item-btn {
          background: none;
          border: none;
          color: var(--amz-deal-red);
          cursor: pointer;
        }

        .empty-cart-view {
          text-align: center;
          padding: 40px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .cart-drawer-footer {
          padding: 16px 20px;
          border-top: 1px solid #eee;
          background: #fafafa;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .subtotal-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 16px;
          font-weight: 600;
        }

        .subtotal-price {
          font-size: 22px;
          font-weight: 800;
          color: var(--amz-deal-red);
        }

        .checkout-btn {
          padding: 12px 0;
          font-size: 15px;
        }

        .view-cart-btn {
          padding: 8px 0;
        }
      `}</style>
    </div>
  );
};
