import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  X, Star, Heart, ShoppingCart, ShieldCheck, Truck, RotateCcw, 
  Check, Lock, ThumbsUp, MessageSquare 
} from 'lucide-react';

export const ProductDetailModal = () => {
  const { 
    selectedProduct, 
    setSelectedProduct, 
    addToCart, 
    toggleWishlist, 
    isInWishlist,
    setIsCheckoutOpen,
    addToast
  } = useShop();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedQty, setSelectedQty] = useState(1);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'specs', 'reviews'

  // Review Form state
  const [userRating, setUserRating] = useState(5);
  const [userComment, setUserComment] = useState('');
  const [reviewsList, setReviewsList] = useState([
    { id: 1, author: 'David K.', rating: 5, date: 'August 2, 2026', title: 'Exceeded all expectations!', text: 'Phenomenal build quality, crystal clear sound and seamless connectivity. Worth every penny!' },
    { id: 2, author: 'Sarah M.', rating: 4, date: 'July 28, 2026', title: 'Great performance and battery', text: 'Battery life easily lasts all day. Highly recommended for work and travel.' }
  ]);

  if (!selectedProduct) return null;

  const isWishlisted = isInWishlist(selectedProduct.id);
  const galleryImages = selectedProduct.gallery || [selectedProduct.image];

  const handleBuyNow = () => {
    addToCart(selectedProduct, selectedQty);
    setSelectedProduct(null);
    setIsCheckoutOpen(true);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!userComment.trim()) return;
    const newRev = {
      id: Date.now(),
      author: 'Alex Johnson (Verified Purchase)',
      rating: userRating,
      date: 'Just now',
      title: 'Verified Customer Review',
      text: userComment
    };
    setReviewsList([newRev, ...reviewsList]);
    setUserComment('');
    addToast('Thank you! Your review has been submitted.');
  };

  return (
    <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
      <div className="modal-content product-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Modal Button */}
        <button className="modal-close-btn" onClick={() => setSelectedProduct(null)}>
          <X size={24} />
        </button>

        <div className="modal-body-grid">
          {/* Left Column: Image Gallery */}
          <div className="gallery-section">
            <div className="main-image-box">
              <img 
                src={galleryImages[activeImageIndex] || selectedProduct.image} 
                alt={selectedProduct.title} 
              />
            </div>
            
            {galleryImages.length > 1 && (
              <div className="thumbnails-row">
                {galleryImages.map((imgUrl, i) => (
                  <div 
                    key={i} 
                    className={`thumb-box ${i === activeImageIndex ? 'active' : ''}`}
                    onClick={() => setActiveImageIndex(i)}
                  >
                    <img src={imgUrl} alt={`Thumbnail ${i}`} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Center Column: Product Specs & Details */}
          <div className="details-section">
            <span className="brand-link">Visit the {selectedProduct.brand} Store</span>
            <h1 className="detail-title">{selectedProduct.title}</h1>

            {/* Ratings */}
            <div className="star-rating detail-rating">
              <div className="stars flex-align">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < Math.floor(selectedProduct.rating) ? "#ffa41c" : "#ddd"} 
                    color="#ffa41c"
                  />
                ))}
              </div>
              <span className="rating-val">{selectedProduct.rating} out of 5</span>
              <span className="review-count">| {selectedProduct.reviewCount.toLocaleString()} ratings</span>
            </div>

            <div className="divider" />

            {/* Pricing Details */}
            <div className="detail-price-box">
              {selectedProduct.isDeal && (
                <span className="badge-deal">{selectedProduct.dealBadge || 'LIMITED TIME DEAL'}</span>
              )}

              <div className="price-row">
                <span className="price-symbol">$</span>
                <span className="price-main">{selectedProduct.price.toFixed(2)}</span>
                {selectedProduct.originalPrice && (
                  <span className="list-price">Was: ${selectedProduct.originalPrice.toFixed(2)}</span>
                )}
              </div>

              {selectedProduct.originalPrice && (
                <span className="savings-tag">
                  You Save: ${(selectedProduct.originalPrice - selectedProduct.price).toFixed(2)} ({Math.round(((selectedProduct.originalPrice - selectedProduct.price) / selectedProduct.originalPrice) * 100)}%)
                </span>
              )}
            </div>

            {/* Trust Badges */}
            <div className="trust-badges">
              <div className="trust-item">
                <Truck size={20} className="trust-icon" />
                <span>Free Amazon Delivery</span>
              </div>
              <div className="trust-item">
                <RotateCcw size={20} className="trust-icon" />
                <span>30-Day Return Policy</span>
              </div>
              <div className="trust-item">
                <ShieldCheck size={20} className="trust-icon" />
                <span>2-Year Warranty</span>
              </div>
            </div>

            <div className="divider" />

            {/* Key Features Bullet List */}
            <div className="features-list">
              <h3>About this item</h3>
              <ul>
                {selectedProduct.features?.map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Buy Box */}
          <div className="buy-box">
            <div className="buy-price">${selectedProduct.price.toFixed(2)}</div>
            
            <div className="badge-prime prime-large">
              <span>prime</span> FREE One-Day Delivery
            </div>

            <p className="delivery-est">
              FREE delivery <strong>Tomorrow</strong>. Order within 4 hrs 12 mins.
            </p>

            <span className="in-stock-badge">
              <Check size={16} /> In Stock ({selectedProduct.stockCount} items left)
            </span>

            {/* Quantity Selector */}
            <div className="qty-selector">
              <label htmlFor="modal-qty">Quantity:</label>
              <select 
                id="modal-qty"
                value={selectedQty} 
                onChange={(e) => setSelectedQty(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>

            {/* Add to Cart */}
            <button 
              className="btn-primary full-width modal-btn"
              onClick={() => addToCart(selectedProduct, selectedQty)}
            >
              <ShoppingCart size={18} /> Add to Cart
            </button>

            {/* Buy Now */}
            <button 
              className="btn-secondary full-width modal-btn"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>

            {/* Wishlist Toggle */}
            <button 
              className="btn-outline full-width modal-btn flex-align"
              onClick={() => toggleWishlist(selectedProduct)}
            >
              <Heart size={16} fill={isWishlisted ? "#cc0c39" : "none"} color={isWishlisted ? "#cc0c39" : "#333"} />
              {isWishlisted ? 'Saved in Wishlist' : 'Add to Wish List'}
            </button>

            <div className="secure-tx">
              <Lock size={14} /> Secure transaction
            </div>
          </div>
        </div>

        {/* Lower Tabbed Section: Specs & Reviews */}
        <div className="product-modal-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Specifications
            </button>
            <button 
              className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Customer Reviews ({reviewsList.length})
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'overview' && (
              <div className="specs-table-container">
                <table className="specs-table">
                  <tbody>
                    {Object.entries(selectedProduct.specs || {}).map(([key, val]) => (
                      <tr key={key}>
                        <td className="spec-name">{key}</td>
                        <td className="spec-val">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="reviews-tab-content">
                {/* Write Review Form */}
                <form className="write-review-card" onSubmit={handleReviewSubmit}>
                  <h4>Write a Customer Review</h4>
                  
                  <div className="rating-picker">
                    <span>Overall rating:</span>
                    <div className="stars flex-align">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star}
                          size={20}
                          className="star-clickable"
                          fill={star <= userRating ? "#ffa41c" : "#ddd"}
                          color="#ffa41c"
                          onClick={() => setUserRating(star)}
                        />
                      ))}
                    </div>
                  </div>

                  <textarea
                    rows={3}
                    placeholder="What did you like or dislike about this product?"
                    value={userComment}
                    onChange={(e) => setUserComment(e.target.value)}
                    required
                  />

                  <button type="submit" className="btn-primary">
                    Submit Review
                  </button>
                </form>

                {/* Reviews List */}
                <div className="reviews-list">
                  {reviewsList.map((rev) => (
                    <div key={rev.id} className="review-card">
                      <div className="review-author">
                        <div className="author-avatar">{rev.author[0]}</div>
                        <span className="author-name">{rev.author}</span>
                      </div>
                      <div className="star-rating">
                        <div className="stars flex-align">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={14} 
                              fill={i < rev.rating ? "#ffa41c" : "#ddd"} 
                              color="#ffa41c" 
                            />
                          ))}
                        </div>
                        <strong className="review-card-title">{rev.title}</strong>
                      </div>
                      <span className="review-date">Reviewed on {rev.date}</span>
                      <p className="review-text">{rev.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .product-modal {
          max-width: 1100px;
          padding: 24px;
        }

        .modal-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: #f1f1f1;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          z-index: 10;
        }
        .modal-close-btn:hover {
          background: #e1e1e1;
        }

        .modal-body-grid {
          display: grid;
          grid-template-columns: 380px 1fr 280px;
          gap: 24px;
        }

        /* Gallery */
        .main-image-box {
          width: 100%;
          height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #eee;
          border-radius: var(--radius-md);
          padding: 16px;
          background: #fff;
        }

        .main-image-box img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .thumbnails-row {
          display: flex;
          gap: 10px;
          margin-top: 12px;
        }

        .thumb-box {
          width: 60px;
          height: 60px;
          border: 1px solid #ddd;
          border-radius: 4px;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .thumb-box.active {
          border-color: var(--amz-accent-orange);
          box-shadow: 0 0 0 2px rgba(240, 136, 4, 0.4);
        }

        .thumb-box img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        /* Details Column */
        .brand-link {
          font-size: 13px;
          color: var(--amz-blue-link);
          font-weight: 600;
        }

        .detail-title {
          font-size: 20px;
          font-weight: 700;
          line-height: 1.3;
          margin: 6px 0 10px 0;
        }

        .divider {
          height: 1px;
          background: #eee;
          margin: 14px 0;
        }

        .detail-price-box {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .price-row {
          display: flex;
          align-items: baseline;
          gap: 10px;
        }

        .price-main {
          font-size: 28px;
          font-weight: 800;
          color: #0f1111;
        }

        .list-price {
          font-size: 14px;
          color: var(--amz-text-muted);
          text-decoration: line-through;
        }

        .savings-tag {
          font-size: 13px;
          color: var(--amz-deal-red);
          font-weight: 600;
        }

        .trust-badges {
          display: flex;
          justify-content: space-between;
          margin-top: 14px;
          background: #f9fafb;
          padding: 10px;
          border-radius: 8px;
        }

        .trust-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          font-size: 11px;
          color: #444;
          gap: 4px;
        }

        .trust-icon {
          color: var(--amz-blue-link);
        }

        .features-list h3 {
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .features-list ul {
          padding-left: 18px;
          font-size: 13px;
          color: #333;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        /* Buy Box */
        .buy-box {
          border: 1px solid #ddd;
          border-radius: var(--radius-md);
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: #fff;
          align-self: flex-start;
        }

        .buy-price {
          font-size: 24px;
          font-weight: 800;
        }

        .prime-large {
          font-size: 14px;
        }

        .delivery-est {
          font-size: 12px;
          color: #333;
          line-height: 1.4;
        }

        .in-stock-badge {
          color: var(--amz-green-success);
          font-weight: 700;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .qty-selector {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
        }

        .qty-selector select {
          padding: 4px 8px;
          border-radius: 4px;
          border: 1px solid #ccc;
        }

        .modal-btn {
          padding: 10px 0;
        }

        .secure-tx {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: var(--amz-text-muted);
          justify-content: center;
          margin-top: 4px;
        }

        /* Modal Tabs */
        .product-modal-tabs {
          margin-top: 24px;
          border-top: 1px solid #eee;
          padding-top: 16px;
        }

        .tabs-header {
          display: flex;
          gap: 16px;
          border-bottom: 2px solid #eee;
          margin-bottom: 16px;
        }

        .tab-btn {
          background: none;
          border: none;
          font-size: 15px;
          font-weight: 600;
          color: var(--amz-text-muted);
          padding: 8px 4px;
          cursor: pointer;
          position: relative;
        }

        .tab-btn.active {
          color: var(--amz-accent-orange);
        }

        .tab-btn.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--amz-accent-orange);
          border-radius: 2px;
        }

        .specs-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }

        .specs-table tr {
          border-bottom: 1px solid #f0f0f0;
        }

        .specs-table td {
          padding: 10px;
        }

        .spec-name {
          font-weight: 700;
          color: #555;
          width: 30%;
          background: #fafafa;
        }

        .write-review-card {
          background: #f9f9f9;
          border: 1px solid #eee;
          padding: 16px;
          border-radius: var(--radius-md);
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .star-clickable {
          cursor: pointer;
        }

        .write-review-card textarea {
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 6px;
          padding: 10px;
          font-size: 13px;
        }

        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .review-card {
          border-bottom: 1px solid #eee;
          padding-bottom: 14px;
        }

        .review-author {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .author-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 12px;
        }

        .author-name {
          font-size: 13px;
          font-weight: 600;
        }

        .review-card-title {
          margin-left: 8px;
          font-size: 13px;
        }

        .review-date {
          font-size: 11px;
          color: var(--amz-text-muted);
          display: block;
          margin: 4px 0 6px 0;
        }

        .review-text {
          font-size: 13px;
          color: #333;
          line-height: 1.4;
        }

        @media (max-width: 900px) {
          .modal-body-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
