import React from 'react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES } from '../data/products';
import { Star, Check, RotateCcw } from 'lucide-react';

export const FilterSidebar = () => {
  const {
    selectedCategory, setSelectedCategory,
    priceRange, setPriceRange,
    minRating, setMinRating,
    primeOnly, setPrimeOnly,
    sortBy, setSortBy
  } = useShop();

  const resetFilters = () => {
    setSelectedCategory('All Departments');
    setPriceRange(4000);
    setMinRating(0);
    setPrimeOnly(false);
    setSortBy('featured');
  };

  return (
    <aside className="filter-sidebar">
      <div className="filter-header">
        <h3>Filters</h3>
        <button className="reset-btn" onClick={resetFilters}>
          <RotateCcw size={12} /> Clear all
        </button>
      </div>

      {/* Category Section */}
      <div className="filter-group">
        <h4>Department</h4>
        <ul>
          {CATEGORIES.map(cat => (
            <li 
              key={cat} 
              className={selectedCategory === cat ? 'active' : ''}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Prime Section */}
      <div className="filter-group">
        <h4>Amazon Prime</h4>
        <label className="checkbox-label">
          <input 
            type="checkbox" 
            checked={primeOnly}
            onChange={(e) => setPrimeOnly(e.target.checked)}
          />
          <div className="badge-prime">
            <span>prime</span> Eligible
          </div>
        </label>
      </div>

      {/* Customer Review Rating */}
      <div className="filter-group">
        <h4>Customer Reviews</h4>
        <ul className="rating-filters">
          {[4, 3, 2, 1].map((stars) => (
            <li 
              key={stars}
              className={minRating === stars ? 'active' : ''}
              onClick={() => setMinRating(minRating === stars ? 0 : stars)}
            >
              <div className="stars flex-align">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    fill={i < stars ? "#ffa41c" : "#ddd"} 
                    color="#ffa41c"
                  />
                ))}
              </div>
              <span>& Up</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Slider */}
      <div className="filter-group">
        <h4>Price</h4>
        <div className="price-slider-wrap">
          <input 
            type="range" 
            min="10" 
            max="4000" 
            step="10"
            value={priceRange} 
            onChange={(e) => setPriceRange(Number(e.target.value))}
          />
          <div className="price-labels">
            <span>$10</span>
            <span className="price-max">Max: ${priceRange}</span>
          </div>
        </div>
      </div>

      <style>{`
        .filter-sidebar {
          width: 240px;
          flex-shrink: 0;
          background: #fff;
          border-radius: var(--radius-sm);
          padding: 18px;
          border: 1px solid #e7e7e7;
          align-self: flex-start;
        }

        .filter-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid #eee;
          margin-bottom: 16px;
        }

        .filter-header h3 {
          font-size: 16px;
          font-weight: 700;
        }

        .reset-btn {
          background: none;
          border: none;
          color: var(--amz-blue-link);
          font-size: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .reset-btn:hover {
          color: var(--amz-blue-link-hover);
          text-decoration: underline;
        }

        .filter-group {
          margin-bottom: 20px;
        }

        .filter-group h4 {
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--amz-text-dark);
        }

        .filter-group ul {
          list-style: none;
        }

        .filter-group li {
          font-size: 13px;
          color: #333;
          padding: 4px 0;
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .filter-group li:hover {
          color: var(--amz-blue-link-hover);
        }

        .filter-group li.active {
          font-weight: 700;
          color: var(--amz-accent-orange);
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 13px;
        }

        .rating-filters li {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .price-slider-wrap input[type="range"] {
          width: 100%;
          accent-color: var(--amz-accent-orange);
          cursor: pointer;
        }

        .price-labels {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: var(--amz-text-muted);
          margin-top: 4px;
        }

        .price-max {
          font-weight: 700;
          color: var(--amz-text-dark);
        }
      `}</style>
    </aside>
  );
};
