import React from 'react';
import { CATEGORY_TILES } from '../data/products';
import { useShop } from '../context/ShopContext';

export const CategoryCards = () => {
  const { setActiveTab, setSelectedCategory } = useShop();

  const handleTileClick = (title) => {
    if (title.includes('Electronics')) setSelectedCategory('Electronics');
    else if (title.includes('Space') || title.includes('home')) setSelectedCategory('Home & Kitchen');
    else if (title.includes('Fashion')) setSelectedCategory('Fashion & Apparel');
    else if (title.includes('Gaming')) setSelectedCategory('Books & Gaming');
    else setSelectedCategory('All Departments');
    
    setActiveTab('catalog');
  };

  return (
    <div className="category-cards-grid">
      {CATEGORY_TILES.map((tile) => (
        <div key={tile.id} className="category-card">
          <h2 className="card-title">{tile.title}</h2>
          
          <div className="sub-items-grid">
            {tile.items.map((sub, idx) => (
              <div 
                key={idx} 
                className="sub-item"
                onClick={() => handleTileClick(tile.title)}
              >
                <div className="thumb-container">
                  <img src={sub.image} alt={sub.name} loading="lazy" />
                </div>
                <span className="sub-item-label">{sub.name}</span>
              </div>
            ))}
          </div>

          <button 
            className="card-link"
            onClick={() => handleTileClick(tile.title)}
          >
            {tile.linkText}
          </button>
        </div>
      ))}

      <style>{`
        .category-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          position: relative;
          z-index: 30;
          margin-bottom: 24px;
        }

        .category-card {
          background: #fff;
          border-radius: var(--radius-sm);
          padding: 20px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        }

        .category-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
        }

        .card-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--amz-text-dark);
          margin-bottom: 14px;
          line-height: 1.25;
        }

        .sub-items-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 16px;
        }

        .sub-item {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .thumb-container {
          width: 100%;
          aspect-ratio: 1 / 1;
          background: #f7f7f7;
          border-radius: 4px;
          overflow: hidden;
        }

        .thumb-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .sub-item:hover .thumb-container img {
          transform: scale(1.06);
        }

        .sub-item-label {
          font-size: 12px;
          color: #333;
          font-weight: 500;
        }

        .card-link {
          background: none;
          border: none;
          color: var(--amz-blue-link);
          font-size: 13px;
          font-weight: 600;
          text-align: left;
          padding: 0;
          cursor: pointer;
        }

        .card-link:hover {
          color: var(--amz-blue-link-hover);
          text-decoration: underline;
        }

        @media (max-width: 1024px) {
          .category-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .category-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
