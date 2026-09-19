import React from 'react';
import { PRODUCTS } from '../data/pndData';
import { Heart, Eye, MessageCircle, Sparkles } from 'lucide-react';

export default function ProductCatalog({ 
  selectedCategory, 
  setSelectedCategory, 
  searchQuery, 
  onSelectProduct, 
  wishlist, 
  onToggleWishlist 
}) {
  const categoriesList = [
    { id: 'all', label: 'All Jewelry' },
    { id: 'antique', label: 'Antique Set' },
    { id: 'bangles', label: 'Bangles' },
    { id: 'bracelet', label: 'Bracelet' },
    { id: 'dokiya', label: 'Dokiya' },
    { id: 'mangalsutra', label: 'Mangalsutra' },
    { id: 'pendant', label: 'Pendant Set' },
    { id: 'ring', label: 'Rings' }
  ];

  // Filter products by selected category and search query
  const filteredProducts = PRODUCTS.filter((prod) => {
    const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      prod.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="section-padding" style={{ background: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: '#58113E',
            fontSize: '0.85rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: '600',
            marginBottom: '0.4rem'
          }}>
            <Sparkles size={14} />
            <span>Masterpiece Catalog</span>
          </div>
          <h2 className="font-serif text-gold-gradient" style={{ fontSize: 'clamp(2rem, 4vw, 2.7rem)' }}>
            Exquisite Jewellery Catalog
          </h2>
          <div className="purple-divider"></div>
          <p style={{ color: '#6B5563', maxWidth: '620px', margin: '0 auto', fontSize: '0.98rem' }}>
            Handcrafted with 100% BIS Hallmarked 916 Pure Gold & Certified Gemstones. Click any piece for full specifications & direct inquiry.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.6rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {categoriesList.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '0.6rem 1.3rem',
                borderRadius: 'var(--radius-full)',
                border: selectedCategory === cat.id ? '1.5px solid var(--plum-800)' : '1px solid var(--border-subtle)',
                background: selectedCategory === cat.id ? 'var(--plum-800)' : '#FAF5F8',
                color: selectedCategory === cat.id ? '#FFF' : '#24091A',
                fontWeight: selectedCategory === cat.id ? '700' : '500',
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: selectedCategory === cat.id ? '0 4px 14px rgba(88, 17, 62, 0.28)' : 'none'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="glass-panel" style={{ textAlign: 'center', padding: '4rem 2rem', background: '#FAF5F8' }}>
            <h3 className="font-serif" style={{ fontSize: '1.4rem', color: '#24091A', marginBottom: '0.5rem' }}>
              No jewellery pieces matched your search
            </h3>
            <p style={{ color: '#6B5563', marginBottom: '1.5rem' }}>
              Try searching with a different term or reset the category filter.
            </p>
            <button 
              onClick={() => { setSelectedCategory('all'); }}
              className="btn-gold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '2rem'
          }}>
            {filteredProducts.map((product) => {
              const isWishlisted = wishlist.some(item => item.id === product.id);

              return (
                <div
                  key={product.id}
                  className="glass-panel card-hover-zoom"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    position: 'relative',
                    background: '#FFF'
                  }}
                >
                  {/* Image Container */}
                  <div style={{ position: 'relative', width: '100%', height: '310px', overflow: 'hidden', background: '#F8EDF3' }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="zoom-img"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(38, 6, 25, 0.6) 0%, transparent 60%)'
                    }}></div>

                    {/* Badge */}
                    {product.tag && (
                      <span className="badge-tag" style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                        {product.tag}
                      </span>
                    )}

                    {/* Wishlist Icon Toggle */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(product);
                      }}
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'rgba(255, 255, 255, 0.92)',
                        border: '1px solid var(--border-plum)',
                        borderRadius: '50%',
                        width: '38px',
                        height: '38px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: isWishlisted ? '#58113E' : '#6B5563',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                      }}
                      title={isWishlisted ? "Remove from Inquiry Basket" : "Add to Inquiry Basket"}
                    >
                      <Heart size={18} fill={isWishlisted ? "#58113E" : "none"} />
                    </button>
                  </div>

                  {/* Product Details */}
                  <div style={{ padding: '1.4rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ fontSize: '0.78rem', color: '#58113E', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>
                      {product.purity}
                    </div>

                    <h3 className="font-serif" style={{ fontSize: '1.35rem', color: '#24091A', marginBottom: '0.4rem' }}>
                      {product.name}
                    </h3>

                    <p style={{ fontSize: '0.88rem', color: '#6B5563', lineHeight: '1.5', flex: 1, marginBottom: '1.2rem' }}>
                      {product.shortDesc}
                    </p>

                    {/* Specifications Pill */}
                    <div style={{
                      background: '#FAF5F8',
                      border: '1px solid var(--border-plum)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.55rem 0.8rem',
                      fontSize: '0.8rem',
                      color: '#58113E',
                      display: 'flex',
                      justify: 'space-between',
                      marginBottom: '1.2rem',
                      fontWeight: '500'
                    }}>
                      <span>Estimated Weight:</span>
                      <span style={{ color: '#24091A', fontWeight: '700' }}>{product.weightEstimate}</span>
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="btn-gold-outline"
                        style={{ padding: '0.6rem 0.5rem', fontSize: '0.82rem' }}
                      >
                        <Eye size={15} />
                        <span>Quick View</span>
                      </button>

                      <a
                        href={`https://wa.me/918238534548?text=Hello%20PND%20Jewellers,%20I%20am%20interested%20in%20inquiring%20about%20your%20${encodeURIComponent(product.name)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-gold"
                        style={{ padding: '0.6rem 0.5rem', fontSize: '0.82rem' }}
                      >
                        <MessageCircle size={15} />
                        <span>Inquire Now</span>
                      </a>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
