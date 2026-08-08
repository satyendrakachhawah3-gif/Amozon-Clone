import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Header } from './components/Header';
import { SubHeader } from './components/SubHeader';
import { HeroCarousel } from './components/HeroCarousel';
import { CategoryCards } from './components/CategoryCards';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CartPage } from './components/CartPage';
import { CheckoutModal } from './components/CheckoutModal';
import { OrdersView } from './components/OrdersView';
import { WishlistView } from './components/WishlistView';
import { LocationModal } from './components/LocationModal';
import { Footer } from './components/Footer';
import { CheckCircle2, Info } from 'lucide-react';
import './styles/global.css';

const MainApp = () => {
  const { activeTab, toasts } = useShop();

  return (
    <div className="app-container">
      {/* Top Header & Navigation */}
      <Header />
      <SubHeader />

      {/* Main Page Layout */}
      <div className="main-content">
        {activeTab === 'home' && (
          <>
            <HeroCarousel />
            <CategoryCards />
            <ProductGrid title="Featured Products & Daily Deals" />
          </>
        )}

        {activeTab === 'catalog' && (
          <ProductGrid />
        )}

        {activeTab === 'cart' && (
          <CartPage />
        )}

        {activeTab === 'orders' && (
          <OrdersView />
        )}

        {activeTab === 'wishlist' && (
          <WishlistView />
        )}
      </div>

      {/* Footer */}
      <Footer />

      {/* Global Modals & Drawers */}
      <ProductDetailModal />
      <CartDrawer />
      <CheckoutModal />
      <LocationModal />

      {/* Toast Notifications */}
      <div className="toast-container">
        {toasts.map(toast => (
          <div key={toast.id} className="toast-item">
            {toast.type === 'success' ? (
              <CheckCircle2 size={20} color="var(--amz-green-success)" />
            ) : (
              <Info size={20} color="var(--amz-blue-link)" />
            )}
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <MainApp />
    </ShopProvider>
  );
}
