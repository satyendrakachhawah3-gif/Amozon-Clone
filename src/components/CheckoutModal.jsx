import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, CheckCircle2, CreditCard, ShieldCheck, Truck, Lock, MapPin } from 'lucide-react';

export const CheckoutModal = () => {
  const { 
    isCheckoutOpen, 
    setIsCheckoutOpen, 
    cart, 
    cartSubtotal, 
    placeOrder, 
    deliveryLocation 
  } = useShop();

  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Review
  const [isProcessing, setIsProcessing] = useState(false);

  // Form State
  const [shipping, setShipping] = useState({
    fullName: 'Alex Johnson',
    street: '350 Fifth Ave, Suite 4100',
    city: deliveryLocation.city || 'New York',
    state: 'NY',
    zip: deliveryLocation.zip || '10118',
    country: 'United States'
  });

  const [payment, setPayment] = useState({
    method: 'card', // 'card', 'amazon_pay', 'cod'
    cardNumber: '4532 •••• •••• 8892',
    cardName: 'ALEX JOHNSON',
    expiry: '08/29',
    cvv: '921'
  });

  if (!isCheckoutOpen) return null;

  const estimatedTax = cartSubtotal * 0.08;
  const grandTotal = cartSubtotal + estimatedTax;

  const handlePlaceOrderSubmit = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      placeOrder(shipping, payment);
    }, 1800);
  };

  return (
    <div className="modal-overlay" onClick={() => setIsCheckoutOpen(false)}>
      <div className="modal-content checkout-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="checkout-modal-header">
          <div className="brand-title">
            <span className="logo-text">amazon</span>
            <span className="checkout-badge">Checkout</span>
          </div>
          <button className="close-btn" onClick={() => setIsCheckoutOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* Step Indicators */}
        <div className="checkout-steps-bar">
          <div className={`step-item ${step >= 1 ? 'active' : ''}`}>
            <span className="step-num">1</span>
            <span>Shipping Address</span>
          </div>
          <div className="step-divider" />
          <div className={`step-item ${step >= 2 ? 'active' : ''}`}>
            <span className="step-num">2</span>
            <span>Payment Method</span>
          </div>
          <div className="step-divider" />
          <div className={`step-item ${step >= 3 ? 'active' : ''}`}>
            <span className="step-num">3</span>
            <span>Review & Place</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="checkout-body-grid">
          <div className="checkout-step-content">
            {/* Step 1: Shipping Address */}
            {step === 1 && (
              <div className="step-form">
                <h3>1. Select Shipping Address</h3>
                <div className="form-grid">
                  <div className="form-group span-2">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      value={shipping.fullName}
                      onChange={(e) => setShipping({ ...shipping, fullName: e.target.value })}
                    />
                  </div>
                  <div className="form-group span-2">
                    <label>Street Address</label>
                    <input 
                      type="text" 
                      value={shipping.street}
                      onChange={(e) => setShipping({ ...shipping, street: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input 
                      type="text" 
                      value={shipping.city}
                      onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>State / Province</label>
                    <input 
                      type="text" 
                      value={shipping.state}
                      onChange={(e) => setShipping({ ...shipping, state: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>ZIP Code</label>
                    <input 
                      type="text" 
                      value={shipping.zip}
                      onChange={(e) => setShipping({ ...shipping, zip: e.target.value })}
                    />
                  </div>
                </div>

                <button className="btn-primary next-step-btn" onClick={() => setStep(2)}>
                  Use this address &rarr;
                </button>
              </div>
            )}

            {/* Step 2: Payment Method */}
            {step === 2 && (
              <div className="step-form">
                <h3>2. Choose Payment Method</h3>
                
                <div className="payment-options">
                  <label className={`payment-option-card ${payment.method === 'card' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="payMethod" 
                      checked={payment.method === 'card'} 
                      onChange={() => setPayment({ ...payment, method: 'card' })}
                    />
                    <CreditCard size={20} />
                    <div className="option-text">
                      <strong>Credit or Debit Card</strong>
                      <span>Visa, Mastercard, Discover, Amex</span>
                    </div>
                  </label>

                  <label className={`payment-option-card ${payment.method === 'amazon_pay' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="payMethod" 
                      checked={payment.method === 'amazon_pay'} 
                      onChange={() => setPayment({ ...payment, method: 'amazon_pay' })}
                    />
                    <div className="option-text">
                      <strong>Amazon Pay Balance</strong>
                      <span>Available balance: $450.00</span>
                    </div>
                  </label>
                </div>

                {payment.method === 'card' && (
                  <div className="form-grid card-inputs">
                    <div className="form-group span-2">
                      <label>Card Number</label>
                      <input 
                        type="text" 
                        value={payment.cardNumber} 
                        onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Expiration Date</label>
                      <input 
                        type="text" 
                        value={payment.expiry} 
                        onChange={(e) => setPayment({ ...payment, expiry: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>CVV Security Code</label>
                      <input 
                        type="password" 
                        value={payment.cvv} 
                        onChange={(e) => setPayment({ ...payment, cvv: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                <div className="btn-row">
                  <button className="btn-outline" onClick={() => setStep(1)}>&larr; Back</button>
                  <button className="btn-primary next-step-btn" onClick={() => setStep(3)}>Continue to Review &rarr;</button>
                </div>
              </div>
            )}

            {/* Step 3: Review & Confirm */}
            {step === 3 && (
              <div className="step-form">
                <h3>3. Review Items and Shipping</h3>
                
                <div className="review-box">
                  <div className="review-col">
                    <strong>Shipping to:</strong>
                    <p>{shipping.fullName}</p>
                    <p>{shipping.street}</p>
                    <p>{shipping.city}, {shipping.state} {shipping.zip}</p>
                  </div>
                  <div className="review-col">
                    <strong>Payment method:</strong>
                    <p>{payment.method === 'card' ? 'Visa ending in 8892' : 'Amazon Pay Balance'}</p>
                  </div>
                </div>

                <h4>Order Items ({cart.reduce((s, i) => s + i.quantity, 0)})</h4>
                <div className="review-items-list">
                  {cart.map(({ product, quantity }) => (
                    <div key={product.id} className="review-item">
                      <img src={product.image} alt={product.title} />
                      <div className="item-meta">
                        <span className="title">{product.title}</span>
                        <span className="qty">Qty: {quantity}</span>
                      </div>
                      <span className="price">${(product.price * quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="btn-row">
                  <button className="btn-outline" onClick={() => setStep(2)}>&larr; Back</button>
                  
                  <button 
                    className="btn-secondary place-order-btn" 
                    onClick={handlePlaceOrderSubmit}
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing Order...' : 'Place Your Order'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column Order Summary */}
          <div className="checkout-summary-side">
            <h4>Order Summary</h4>
            <div className="summary-row">
              <span>Items ({cart.reduce((s, i) => s + i.quantity, 0)}):</span>
              <span>${cartSubtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping & handling:</span>
              <span className="free-tag">FREE Prime</span>
            </div>
            <div className="summary-row">
              <span>Estimated tax:</span>
              <span>${estimatedTax.toFixed(2)}</span>
            </div>
            <div className="divider" />
            <div className="summary-row total-row">
              <span>Order Total:</span>
              <span className="total-amount">${grandTotal.toFixed(2)}</span>
            </div>

            <div className="security-notice">
              <Lock size={14} /> Guaranteed 256-Bit SSL Encrypted Purchase
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .checkout-modal {
          max-width: 860px;
          padding: 24px;
        }

        .checkout-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #eee;
          padding-bottom: 12px;
        }

        .brand-title {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .brand-title .logo-text {
          font-size: 24px;
          font-weight: 800;
          color: var(--amz-dark-navy);
        }

        .checkout-badge {
          background: #e2e8f0;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 13px;
        }

        .checkout-steps-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 16px 0 24px 0;
          background: #f8fafc;
          padding: 12px 20px;
          border-radius: var(--radius-md);
        }

        .step-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #94a3b8;
          font-weight: 600;
        }

        .step-item.active {
          color: var(--amz-text-dark);
        }

        .step-num {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #cbd5e1;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .step-item.active .step-num {
          background: var(--amz-accent-orange);
          color: #111;
        }

        .step-divider {
          flex: 1;
          height: 2px;
          background: #e2e8f0;
          margin: 0 12px;
        }

        .checkout-body-grid {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 24px;
        }

        .step-form h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .span-2 {
          grid-column: span 2;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .form-group label {
          font-size: 12px;
          font-weight: 600;
          color: #475569;
        }

        .form-group input {
          padding: 8px 12px;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          font-size: 14px;
        }

        .next-step-btn {
          margin-top: 20px;
        }

        .btn-row {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }

        .payment-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }

        .payment-option-card {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .payment-option-card.active {
          border-color: var(--amz-accent-orange);
          background: #fffbeb;
        }

        .option-text {
          display: flex;
          flex-direction: column;
        }

        .review-box {
          background: #f8fafc;
          border-radius: 8px;
          padding: 14px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          font-size: 13px;
          margin-bottom: 16px;
        }

        .review-items-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-height: 180px;
          overflow-y: auto;
          margin-bottom: 16px;
        }

        .review-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
        }

        .review-item img {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }

        .item-meta {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .item-meta .title {
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 300px;
        }

        .checkout-summary-side {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-self: flex-start;
        }

        .checkout-summary-side h4 {
          font-size: 16px;
          font-weight: 700;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
        }

        .free-tag {
          color: var(--amz-green-success);
          font-weight: 700;
        }

        .total-row {
          font-weight: 800;
          font-size: 16px;
        }

        .total-amount {
          color: var(--amz-deal-red);
        }

        .place-order-btn {
          padding: 10px 24px;
        }

        .security-notice {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #64748b;
          margin-top: 6px;
        }

        @media (max-width: 768px) {
          .checkout-body-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
