import React from 'react';
import { CATEGORIES } from '../data/pndData';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function CategoriesShowcase({ onSelectCategory }) {
  return (
    <section id="collections" className="section-padding" style={{ background: '#FAF5F8' }}>
      <div className="container">
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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
            <span>Watch Our Latest Collection</span>
          </div>
          <h2 className="font-serif text-gold-gradient" style={{ fontSize: 'clamp(2rem, 4vw, 2.7rem)' }}>
            Our Signature Collections
          </h2>
          <div className="purple-divider"></div>
          <p style={{ color: '#6B5563', maxWidth: '600px', margin: '0 auto', fontSize: '0.98rem' }}>
            Explore timeless heritage pieces meticulously designed to reflect royal tradition, purity, and sophistication.
          </p>
        </div>

        {/* Categories Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.75rem'
        }}>
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="glass-panel card-hover-zoom"
              style={{
                cursor: 'pointer',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                height: '380px'
              }}
            >
              {/* Category Image */}
              <div style={{ position: 'relative', width: '100%', height: '280px', overflow: 'hidden' }}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="zoom-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(38, 6, 25, 0.75) 0%, transparent 60%)'
                }}></div>

                {/* Badge Item Count */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid var(--border-plum)',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.3rem 0.8rem',
                  fontSize: '0.75rem',
                  color: '#58113E',
                  fontWeight: '700'
                }}>
                  {cat.itemCount}
                </div>
              </div>

              {/* Category Info */}
              <div style={{
                padding: '1.2rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flex: 1,
                background: '#FFF'
              }}>
                <div>
                  <h3 className="font-serif" style={{ fontSize: '1.3rem', color: '#24091A', fontWeight: '600', marginBottom: '0.2rem' }}>
                    {cat.name}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#6B5563' }}>
                    {cat.subtitle}
                  </p>
                </div>

                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--plum-100)',
                  border: '1px solid var(--border-plum)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#58113E',
                  flexShrink: 0
                }}>
                  <ArrowUpRight size={18} />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
