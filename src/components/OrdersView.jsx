import React from 'react';
import { useShop } from '../context/ShopContext';
import { Package, Truck, CheckCircle2, Clock, ArrowRight, RotateCcw } from 'lucide-react';

export const OrdersView = () => {
  const { orders, addToCart, setActiveTab } = useShop();

  if (orders.length === 0) {
    return (
      <div className="orders-empty">
        <Package size={56} className="empty-icon" />
        <h2>You have no past orders</h2>
        <p>Looking for an order? Check your cart or start shopping today's deals.</p>
        <button className="btn-primary" onClick={() => setActiveTab('catalog')}>
          Start Shopping
        </button>

        <style>{`
          .orders-empty {
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
          .empty-icon { color: var(--amz-text-muted); }
        `}</style>
      </div>
    );
  }

  const steps = ['Order Placed', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered'];

  return (
    <div className="orders-container">
      <h1>Your Orders</h1>

      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            {/* Header */}
            <div className="order-card-header">
              <div className="header-meta">
                <div>
                  <span className="label">ORDER PLACED</span>
                  <span className="val">{new Date(order.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div>
                  <span className="label">TOTAL</span>
                  <span className="val">${order.total.toFixed(2)}</span>
                </div>
                <div>
                  <span className="label">SHIP TO</span>
                  <span className="val link-val">{order.shippingAddress?.fullName || 'Alex Johnson'}</span>
                </div>
              </div>
              <div className="order-id-meta">
                <span className="label">ORDER # {order.id}</span>
                <a href="#invoice" onClick={(e) => { e.preventDefault(); alert(`Downloading Official Printable Invoice for ${order.id}`); }}>View Invoice</a>
              </div>
            </div>

            {/* Delivery Timeline Tracker */}
            <div className="order-tracker-box">
              <div className="tracker-header">
                <h3>{order.estimatedDelivery}</h3>
                <span className="status-badge">{order.status}</span>
              </div>

              <div className="timeline-bar">
                {steps.map((st, i) => {
                  const stepNum = i + 1;
                  const isDone = stepNum <= order.step;
                  const isCurrent = stepNum === order.step;
                  return (
                    <React.Fragment key={st}>
                      <div className={`timeline-step ${isDone ? 'done' : ''} ${isCurrent ? 'current' : ''}`}>
                        <div className="step-circle">
                          {isDone ? <CheckCircle2 size={16} /> : stepNum}
                        </div>
                        <span className="step-label">{st}</span>
                      </div>
                      {i < steps.length - 1 && (
                        <div className={`timeline-line ${stepNum < order.step ? 'done' : ''}`} />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Order Items */}
            <div className="order-items-list">
              {order.items.map((item, idx) => {
                const p = item.product;
                return (
                  <div key={idx} className="order-item-row">
                    <img src={p.image} alt={p.title} />

                    <div className="item-info">
                      <h4 className="title">{p.title}</h4>
                      <p className="sub-info">Return window open through 30 days after delivery</p>
                      <button className="btn-primary buy-again-btn" onClick={() => addToCart(p)}>
                        <RotateCcw size={14} /> Buy it again
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .orders-container {
          margin-top: 24px;
        }

        .orders-container h1 {
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .orders-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .order-card {
          background: #fff;
          border: 1px solid #d5d9d9;
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .order-card-header {
          background: #f0f2f2;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #d5d9d9;
          font-size: 12px;
        }

        .header-meta {
          display: flex;
          gap: 32px;
        }

        .header-meta .label {
          color: var(--amz-text-muted);
          display: block;
          margin-bottom: 2px;
        }

        .header-meta .val {
          font-weight: 600;
          color: var(--amz-text-dark);
        }

        .link-val {
          color: var(--amz-blue-link) !important;
          cursor: pointer;
        }

        .order-id-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .order-id-meta a {
          color: var(--amz-blue-link);
          font-weight: 600;
        }

        .order-tracker-box {
          padding: 20px;
          border-bottom: 1px solid #eee;
          background: #fafafa;
        }

        .tracker-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .tracker-header h3 {
          font-size: 18px;
          font-weight: 700;
          color: var(--amz-green-success);
        }

        .status-badge {
          background: #dcfce7;
          color: #15803d;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 12px;
        }

        .timeline-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .timeline-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          z-index: 2;
        }

        .step-circle {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #e2e8f0;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 12px;
          transition: all 0.3s ease;
        }

        .timeline-step.done .step-circle {
          background: var(--amz-green-success);
          color: #fff;
        }

        .timeline-step.current .step-circle {
          box-shadow: 0 0 0 4px rgba(6, 125, 98, 0.25);
        }

        .step-label {
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
        }

        .timeline-step.done .step-label {
          color: var(--amz-text-dark);
        }

        .timeline-line {
          flex: 1;
          height: 3px;
          background: #e2e8f0;
          margin: 0 8px;
          margin-bottom: 18px;
        }

        .timeline-line.done {
          background: var(--amz-green-success);
        }

        .order-items-list {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .order-item-row {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .order-item-row img {
          width: 90px;
          height: 90px;
          object-fit: contain;
          border: 1px solid #eee;
          border-radius: 6px;
          padding: 4px;
        }

        .item-info {
          flex: 1;
        }

        .item-info .title {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.3;
          margin-bottom: 4px;
        }

        .sub-info {
          font-size: 12px;
          color: var(--amz-text-muted);
          margin-bottom: 8px;
        }

        .buy-again-btn {
          font-size: 12px;
          padding: 6px 14px;
        }
      `}</style>
    </div>
  );
};
