import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, MapPin } from 'lucide-react';

export const LocationModal = () => {
  const { 
    isLocationModalOpen, 
    setIsLocationModalOpen, 
    deliveryLocation, 
    setDeliveryLocation,
    addToast 
  } = useShop();

  const [city, setCity] = useState(deliveryLocation.city);
  const [zip, setZip] = useState(deliveryLocation.zip);

  if (!isLocationModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setDeliveryLocation({
      city: city || 'New York',
      zip: zip || '10001',
      country: 'United States'
    });
    setIsLocationModalOpen(false);
    addToast(`Delivery location updated to ${city} ${zip}!`);
  };

  return (
    <div className="modal-overlay" onClick={() => setIsLocationModalOpen(false)}>
      <div className="modal-content location-modal" onClick={(e) => e.stopPropagation()}>
        <div className="location-modal-header">
          <h3>Choose your location</h3>
          <button className="close-btn" onClick={() => setIsLocationModalOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="location-modal-body">
          <p>
            Delivery options and delivery speeds may vary for different locations.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>City / Region</label>
              <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                required 
              />
            </div>

            <div className="form-group">
              <label>US ZIP Code</label>
              <input 
                type="text" 
                value={zip} 
                onChange={(e) => setZip(e.target.value)} 
                required 
              />
            </div>

            <button type="submit" className="btn-primary full-width apply-btn">
              Apply Location
            </button>
          </form>

          <div className="preset-locations">
            <span className="preset-title">Or select a quick city:</span>
            <div className="presets-row">
              {[
                { city: 'New York', zip: '10001' },
                { city: 'Los Angeles', zip: '90001' },
                { city: 'Chicago', zip: '60601' },
                { city: 'Seattle', zip: '98101' },
                { city: 'Miami', zip: '33101' }
              ].map((loc) => (
                <button 
                  key={loc.city} 
                  className="preset-pill"
                  onClick={() => {
                    setDeliveryLocation({ ...loc, country: 'United States' });
                    setIsLocationModalOpen(false);
                    addToast(`Delivery updated to ${loc.city} ${loc.zip}!`);
                  }}
                >
                  <MapPin size={12} /> {loc.city} ({loc.zip})
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .location-modal {
          max-width: 440px;
          padding: 20px;
        }

        .location-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
          margin-bottom: 14px;
        }

        .location-modal-header h3 {
          font-size: 16px;
          font-weight: 700;
        }

        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
        }

        .location-modal-body p {
          font-size: 13px;
          color: var(--amz-text-muted);
          margin-bottom: 16px;
          line-height: 1.4;
        }

        .location-modal-body .form-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 12px;
        }

        .location-modal-body label {
          font-size: 12px;
          font-weight: 600;
        }

        .location-modal-body input {
          padding: 8px 12px;
          border: 1px solid #ccc;
          border-radius: 6px;
        }

        .apply-btn {
          margin-top: 10px;
          padding: 10px 0;
        }

        .preset-locations {
          margin-top: 20px;
          border-top: 1px solid #eee;
          padding-top: 14px;
        }

        .preset-title {
          font-size: 12px;
          font-weight: 600;
          color: #555;
          display: block;
          margin-bottom: 8px;
        }

        .presets-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .preset-pill {
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          border-radius: 14px;
          padding: 4px 10px;
          font-size: 11px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .preset-pill:hover {
          background: #e2e8f0;
        }
      `}</style>
    </div>
  );
};
