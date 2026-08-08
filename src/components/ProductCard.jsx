import React from 'react';
import { useShop } from '../context/ShopContext';
import { Star, Heart, ShoppingCart, Check, Zap } from 'lucide-react';

export const ProductCard = ({ product }) => {
  const { 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    setSelectedProduct 
  } = useShop();

  const isWishlisted = isInWishlist(product.id);

  const handleCardClick = (e) => {
    // Prevent trigger when clicking action buttons
    if (e.target.closest('.card-action-btn')) return;
    setSelectedProduct(product);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      {/* Top Wishlist Heart */}
      <button 
        className={`card-action-btn wishlist-btn ${isWishlisted ? 'active' : ''}`}
        onClick={(e) => { e.stopPropagation(); toggleWishlist(product); }}
        title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
      >
        <Heart size={18} fill={isWishlisted ? "#cc0c39" : "none"} color={isWishlisted ? "#cc0c39" : "#666"} />
      </button>

      {/* Image Container */}
      <div className="product-image-wrap">
        <img src={product.image} alt={product.title} loading="lazy" />
        {product.isDeal && (
          <span className="badge-deal product-deal-badge">
            {product.dealBadge || 'DEAL'}
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="product-info">
        <span className="product-brand">{product.brand}</span>
        
        <h3 className="product-title" title={product.title}>
          {product.title}
        </h3>

        {/* Ratings */}
        <div className="star-rating">
          <div className="stars flex-align">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                fill={i < Math.floor(product.rating) ? "#ffa41c" : i < product.rating ? "url(#halfStar)" : "#ddd"} 
                color="#ffa41c"
              />
            ))}
          </div>
          <span className="rating-val">{product.rating}</span>
          <span className="review-count">({product.reviewCount.toLocaleString()})</span>
        </div>

        {/* Pricing */}
        <div className="price-block">
          <div className="current-price">
            <span className="price-symbol">$</span>
            <span className="price-whole">{Math.floor(product.price)}</span>
            <span className="price-fraction">{((product.price % 1) * 100).toFixed(0).padStart(2, '0')}</span>
          </div>

          {product.originalPrice && (
            <div className="original-price">
              List: <span>${product.originalPrice.toFixed(2)}</span>
            </div>
          )}
        </div>

        {/* Prime & Shipping */}
        <div className="shipping-info">
          {product.isPrime && (
            <div className="badge-prime">
              <span>prime</span> FREE One-Day
            </div>
          )}
          <span className="stock-label">
            {product.inStock ? `In Stock (${product.stockCount} left)` : 'Out of Stock'}
          </span>
        </div>

        {/* Quick Add to Cart Button */}
        <button 
          className="btn-primary card-action-btn add-cart-btn"
          onClick={(e) => { e.stopPropagation(); addToCart(product); }}
        >
          <ShoppingCart size={16} /> Add to Cart
        </button>
      </div>

      <style>{`
        .product-card {
          background: #fff;
          border: 1px solid #e7e7e7;
          border-radius: var(--radius-sm);
          padding: 16px;
          display: flex;
          flex-direction: column;
          position: relative;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .product-card:hover {
          border-color: #b0b0b0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .wishlist-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(2px);
          border: 1px solid #eee;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: transform var(--transition-fast);
        }
        .wishlist-btn:hover {
          transform: scale(1.15);
          background: #fff;
        }

        .product-image-wrap {
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-bottom: 12px;
          overflow: hidden;
        }

        .product-image-wrap img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .product-card:hover .product-image-wrap img {
          transform: scale(1.05);
        }

        .product-deal-badge {
          position: absolute;
          bottom: 4px;
          left: 0;
        }

        .product-info {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .product-brand {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--amz-text-muted);
          font-weight: 700;
          margin-bottom: 2px;
        }

        .product-title {
          font-size: 14px;
          font-weight: 500;
          color: var(--amz-text-dark);
          line-height: 1.35;
          margin-bottom: 8px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          height: 38px;
        }

        .product-card:hover .product-title {
          color: var(--amz-blue-link-hover);
        }

        .rating-val {
          font-size: 12px;
          font-weight: 700;
          color: #333;
          margin-left: 4px;
        }

        .price-block {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin: 8px 0;
        }

        .current-price {
          display: flex;
          align-items: flex-start;
          color: #0f1111;
        }
        .price-symbol {
          font-size: 12px;
          font-weight: 600;
          margin-top: 2px;
        }
        .price-whole {
          font-size: 22px;
          font-weight: 700;
          line-height: 1;
        }
        .price-fraction {
          font-size: 12px;
          font-weight: 600;
          margin-top: 2px;
        }

        .original-price {
          font-size: 12px;
          color: var(--amz-text-muted);
        }
        .original-price span {
          text-decoration: line-through;
        }

        .shipping-info {
          margin-bottom: 12px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .stock-label {
          font-size: 11px;
          color: var(--amz-green-success);
          font-weight: 600;
        }

        .add-cart-btn {
          margin-top: auto;
          width: 100%;
          padding: 8px 0;
          font-size: 13px;
        }
      `}</style>
    </div>
  );
};
