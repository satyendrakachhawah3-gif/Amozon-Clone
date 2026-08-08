import React from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';
import { FilterSidebar } from './FilterSidebar';
import { SlidersHorizontal, PackageX } from 'lucide-react';

export const ProductGrid = ({ title = "Results" }) => {
  const { 
    filteredProducts, 
    selectedCategory, 
    searchQuery,
    sortBy, 
    setSortBy,
    setSelectedCategory,
    setSearchQuery
  } = useShop();

  return (
    <div className="catalog-layout">
      {/* Sidebar Filters */}
      <FilterSidebar />

      {/* Main Grid Content */}
      <main className="catalog-main">
        {/* Toolbar Header */}
        <div className="catalog-toolbar">
          <div className="toolbar-info">
            <h2>
              {searchQuery ? `Search results for "${searchQuery}"` : selectedCategory}
            </h2>
            <span className="results-count">
              Showing {filteredProducts.length} items
            </span>
          </div>

          <div className="sort-wrapper">
            <label htmlFor="sort-select">Sort by:</label>
            <select 
              id="sort-select"
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Avg. Customer Review</option>
            </select>
          </div>
        </div>

        {/* Product Cards Container */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-results-box">
            <PackageX size={48} className="empty-icon" />
            <h3>No products found</h3>
            <p>Try adjusting your search query, filters, or selected category.</p>
            <button 
              className="btn-primary" 
              onClick={() => {
                setSelectedCategory('All Departments');
                setSearchQuery('');
              }}
            >
              View All Products
            </button>
          </div>
        )}
      </main>

      <style>{`
        .catalog-layout {
          display: flex;
          gap: 24px;
          margin-top: 24px;
        }

        .catalog-main {
          flex: 1;
        }

        .catalog-toolbar {
          background: #fff;
          border-radius: var(--radius-sm);
          border: 1px solid #e7e7e7;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          box-shadow: var(--shadow-sm);
        }

        .toolbar-info h2 {
          font-size: 18px;
          font-weight: 700;
          color: var(--amz-text-dark);
        }

        .results-count {
          font-size: 12px;
          color: var(--amz-text-muted);
        }

        .sort-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
        }

        .sort-wrapper select {
          padding: 6px 12px;
          border-radius: 6px;
          border: 1px solid var(--amz-border-gray);
          background: #f7f7f7;
          font-size: 13px;
          cursor: pointer;
          font-weight: 500;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .empty-results-box {
          background: #fff;
          border-radius: var(--radius-md);
          border: 1px dashed var(--amz-border-gray);
          padding: 60px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .empty-icon {
          color: var(--amz-text-muted);
        }

        .empty-results-box h3 {
          font-size: 20px;
          font-weight: 700;
        }

        .empty-results-box p {
          color: var(--amz-text-muted);
          font-size: 14px;
          margin-bottom: 12px;
        }

        @media (max-width: 1200px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .catalog-layout {
            flex-direction: column;
          }
          .filter-sidebar {
            width: 100%;
          }
          .products-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
