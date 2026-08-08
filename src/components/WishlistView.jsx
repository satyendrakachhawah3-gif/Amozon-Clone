import React from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { Heart, ShoppingCart, Trash2, HeartOff } from 'lucide-react';

export const WishlistView = () => {
  const { wishlist, toggleWishlist, addToCart, setActiveTab } = useShop();

  const wishlistedProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  if (wishlistedProducts.length === 0) {
    return (
      <div className="wishlist-empty">
        <HeartOff size={56} className="empty-icon" />
        <h2>Your Wishlist is empty</h2>
        <p>Save items you like while browsing so you can easily find and buy them later.</p>
        <button className="btn-primary" onClick={() => setActiveTab('catalog')}>
          Explore Catalog
        </button>

        <style>{`
          .wishlist-empty {
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

  return (
    <div className="wishlist-container">
      <div className="wishlist-header">
        <h1>Your Wish List ({wishlistedProducts.length} items)</h1>
        <p>Saved products ready to add to cart</p>
      </div>

      <div className="wishlist-grid">
        {wishlistedProducts.map((p) => (
          <div key={p.id} className="wishlist-card">
            <button className="remove-btn" onClick={() => toggleWishlist(p)} title="Remove from list">
              <Trash2 size={16} />
            </button>

            <img src={p.image} alt={p.title} className="wishlist-img" />

            <div className="wishlist-card-info">
              <h3 className="title">{p.title}</h3>
              
              <div className="price-row">
                <span className="price">${p.price.toFixed(2)}</span>
                {p.originalPrice && <span className="orig-price">${p.originalPrice.toFixed(2)}</span>}
              </div>

              {p.isPrime && (
                <div className="badge-prime"><span>prime</span> FREE One-Day</div>
              )}

              <button className="btn-primary full-width add-cart-btn" onClick={() => addToCart(p)}>
                <ShoppingCart size={16} /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .wishlist-container {
          margin-top: 24px;
        }

        .wishlist-header {
          margin-bottom: 20px;
        }

        .wishlist-header h1 {
          font-size: 26px;
          font-weight: 700;
        }

        .wishlist-header p {
          color: var(--amz-text-muted);
          font-size: 14px;
        }

        .wishlist-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .wishlist-card {
          background: #fff;
          border: 1px solid #e7e7e7;
          border-radius: var(--radius-sm);
          padding: 16px;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .remove-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #fff;
          border: 1px solid #eee;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--amz-deal-red);
          cursor: pointer;
        }

        .wishlist-img {
          width: 100%;
          height: 180px;
          object-fit: contain;
          margin-bottom: 12px;
        }

        .wishlist-card-info {
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 6px;
        }

        .wishlist-card-info .title {
          font-size: 14px;
          font-weight: 600;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .price-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .price-row .price {
          font-size: 18px;
          font-weight: 800;
        }

        .price-row .orig-price {
          font-size: 12px;
          color: var(--amz-text-muted);
          text-decoration: line-through;
        }

        .add-cart-btn {
          margin-top: auto;
          padding: 8px 0;
        }

        @media (max-width: 1024px) {
          .wishlist-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .wishlist-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};
