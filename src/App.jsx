import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import CategoriesShowcase from './components/CategoriesShowcase';
import ProductCatalog from './components/ProductCatalog';
import ProductModal from './components/ProductModal';
import AboutSection from './components/AboutSection';
import StoreLocator from './components/StoreLocator';
import WishlistDrawer from './components/WishlistDrawer';
import PolicyModal from './components/PolicyModal';
import Footer from './components/Footer';

export default function App() {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('pnd_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showWishlistDrawer, setShowWishlistDrawer] = useState(false);
  const [policyType, setPolicyType] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('pnd_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  const handleToggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleRemoveWishlistItem = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearWishlist = () => {
    setWishlist([]);
  };

  const handleSelectCategoryFromShowcase = (catId) => {
    setSelectedCategory(catId);
    const prodElem = document.getElementById('products');
    if (prodElem) {
      prodElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: '#FAF5F8',
      overflowX: 'hidden'
    }}>
      
      {/* 1. Header Navigation */}
      <Header />

      {/* Main Content Area */}
      <main style={{ flex: 1, width: '100%', overflowX: 'hidden' }}>
        
        {/* 2. Hero Carousel Banner */}
        <HeroSlider />

        {/* 3. Signature Collections Categories Showcase */}
        <CategoriesShowcase 
          onSelectCategory={handleSelectCategoryFromShowcase}
        />

        {/* 4. Interactive Masterpiece Product Catalog */}
        <ProductCatalog 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSelectProduct={(product) => setSelectedProduct(product)}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
        />

        {/* 5. Heritage Story & Certification Badges */}
        <AboutSection 
          onOpenPolicy={(type) => setPolicyType(type)}
        />

        {/* 6. Showroom Location, Map & Appointment Form */}
        <StoreLocator />

      </main>

      {/* 7. Footer */}
      <Footer 
        onOpenPolicy={(type) => setPolicyType(type)}
      />

      {/* Popups & Drawer Modals */}
      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          isWishlisted={wishlist.some(item => item.id === selectedProduct.id)}
          onToggleWishlist={handleToggleWishlist}
        />
      )}

      {/* Inquiry Basket Wishlist Drawer */}
      <WishlistDrawer 
        isOpen={showWishlistDrawer}
        onClose={() => setShowWishlistDrawer(false)}
        wishlist={wishlist}
        onRemoveItem={handleRemoveWishlistItem}
        onClearWishlist={handleClearWishlist}
      />

      {/* Company Policies & FAQ Modal */}
      {policyType && (
        <PolicyModal 
          policyType={policyType}
          onClose={() => setPolicyType(null)}
        />
      )}

    </div>
  );
}
