import React from 'react';
import { useShop } from '../context/ShopContext';
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';

export const CartPage = () => {
  const { 
    cart, 
    cartSubtotal, 
    updateCartQuantity, 
    removeFromCart, 
    clearCart,
    setIsCheckoutOpen,
    setActiveTab,
    toggleWishlist
  } = useShop();

  if (cart.length === 0) {
    return (
      <div className="cart-page-empty">
        <ShoppingBag size={64} className="empty-cart-icon" />
        <h2>Your Amazon Cart is empty</h2>
        <p>Check out today's deals or discover top products in electronics and laptops.</p>
        <button className="btn-primary" onClick={() => setActiveTab('catalog')}>
          Continue Shopping
        </button>

        <style>{`
          .cart-page-empty {
            background: #fff;
            padding: 60px 20px;
            border-radius: var(--radius-md);
            text-align: center;
            margin-top: 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            border: 1px solid #e7e7e7;
          }
          .empty-cart-icon { color: var(--amz-text-muted); }
          .cart-page-empty h2 { font-size: 24px; font-weight: 700; }
        `}</style>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      {/* Left Column: Cart Items List */}
      <div className="cart-page-main">
        <div className="cart-page-header">
          <h1>Shopping Cart</h1>
          <button className="deselect-btn" onClick={clearCart}>Deselect all items</button>
          <span className="price-col-header">Price</span>
        </div>

        <div className="cart-page-items">
          {cart.map(({ product, quantity }) => (
            <div key={product.id} className="cart-page-item">
              <img src={product.image} alt={product.title} className="item-thumb" />

              <div className="item-details">
                <h3 className="item-title">{product.title}</h3>
                <span className="item-stock">In Stock</span>
                {product.isPrime && (
                  <div className="badge-prime"><span>prime</span> FREE One-Day Shipping</div>
                )}
                
                <div className="item-controls">
                  <div className="qty-picker">
                    <button onClick={() => updateCartQuantity(product.id, quantity - 1)}><Minus size={14} /></button>
                    <span>{quantity}</span>
                    <button onClick={() => updateCartQuantity(product.id, quantity + 1)}><Plus size={14} /></button>
                  </div>

                  <span className="control-divider">|</span>
                  <button className="text-action-btn" onClick={() => removeFromCart(product.id)}>Delete</button>

                  <span className="control-divider">|</span>
                  <button className="text-action-btn" onClick={() => toggleWishlist(product)}>Save for later</button>
                </div>
              </div>

              <div className="item-price">
                ${(product.price * quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className="cart-page-footer">
          <span>Subtotal ({cart.reduce((s, i) => s + i.quantity, 0)} items): <strong>${cartSubtotal.toFixed(2)}</strong></span>
        </div>
      </div>

      {/* Right Column: Order Subtotal Summary */}
      <div className="cart-page-summary">
        <div className="summary-box">
          <div className="subtotal-info">
            <span>Subtotal ({cart.reduce((s, i) => s + i.quantity, 0)} items):</span>
            <span className="subtotal-amount">${cartSubtotal.toFixed(2)}</span>
          </div>

          <label className="gift-checkbox">
            <input type="checkbox" />
            <span>This order contains a gift</span>
          </label>

          <button className="btn-secondary full-width checkout-btn" onClick={() => setIsCheckoutOpen(true)}>
            Proceed to checkout <ArrowRight size={18} />
          </button>

          <div className="secure-badge flex-align">
            <ShieldCheck size={16} /> 256-Bit SSL Encrypted Checkout
          </div>
        </div>
      </div>

      <style>{`
        .cart-page-container {
          display: flex;
          gap: 24px;
          margin-top: 24px;
        }

        .cart-page-main {
          flex: 1;
          background: #fff;
          border-radius: var(--radius-sm);
          padding: 20px 24px;
          border: 1px solid #e7e7e7;
        }

        .cart-page-header {
          display: flex;
          align-items: baseline;
          border-bottom: 1px solid #eee;
          padding-bottom: 12px;
          position: relative;
        }

        .cart-page-header h1 {
          font-size: 24px;
          font-weight: 700;
        }

        .deselect-btn {
          background: none;
          border: none;
          color: var(--amz-blue-link);
          font-size: 13px;
          margin-left: 16px;
          cursor: pointer;
        }

        .price-col-header {
          margin-left: auto;
          font-size: 14px;
          color: var(--amz-text-muted);
        }

        .cart-page-items {
          display: flex;
          flex-direction: column;
        }

        .cart-page-item {
          display: flex;
          gap: 20px;
          padding: 20px 0;
          border-bottom: 1px solid #eee;
        }

        .item-thumb {
          width: 120px;
          height: 120px;
          object-fit: contain;
          border: 1px solid #eee;
          border-radius: 6px;
          padding: 6px;
        }

        .item-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .item-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--amz-text-dark);
          line-height: 1.3;
        }

        .item-stock {
          font-size: 12px;
          color: var(--amz-green-success);
          font-weight: 700;
        }

        .item-controls {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
        }

        .text-action-btn {
          background: none;
          border: none;
          color: var(--amz-blue-link);
          font-size: 13px;
          cursor: pointer;
        }
        .text-action-btn:hover {
          color: var(--amz-blue-link-hover);
          text-decoration: underline;
        }

        .control-divider {
          color: #ccc;
          font-size: 12px;
        }

        .item-price {
          font-size: 18px;
          font-weight: 800;
          color: #0f1111;
        }

        .cart-page-footer {
          text-align: right;
          padding-top: 16px;
          font-size: 18px;
        }

        .cart-page-summary {
          width: 300px;
          flex-shrink: 0;
        }

        .summary-box {
          background: #fff;
          border: 1px solid #e7e7e7;
          border-radius: var(--radius-sm);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .subtotal-info {
          display: flex;
          flex-direction: column;
          font-size: 16px;
        }

        .subtotal-amount {
          font-size: 24px;
          font-weight: 800;
          color: var(--amz-deal-red);
        }

        .gift-checkbox {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
        }

        .checkout-btn {
          padding: 12px 0;
          font-size: 15px;
        }

        .secure-badge {
          justify-content: center;
          font-size: 12px;
          color: var(--amz-text-muted);
          gap: 6px;
        }

        @media (max-width: 850px) {
          .cart-page-container {
            flex-direction: column;
          }
          .cart-page-summary {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};
