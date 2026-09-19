import React from 'react';
import { PND_BRAND } from '../data/pndData';
import { X, Check, Heart, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';

export default function ProductModal({ product, onClose, isWishlisted, onToggleWishlist }) {
  if (!product) return null;

  const whatsappMessage = `Hello PND Jewellers! I am looking at the *${product.name}* on your website and would like to get price details and available customization options.%0A- Purity: ${product.purity}%0A- Weight: ${product.weightEstimate}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content-box"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '920px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '0',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            background: '#FFF',
            border: '1px solid var(--border-purple)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            color: '#1F172B',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}
        >
          <X size={20} />
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))'
        }}>
          
          {/* Left Column: Product Image Showcase */}
          <div style={{
            position: 'relative',
            background: '#F7F5FC',
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src={product.image} 
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '520px',
                objectFit: 'cover'
              }}
            />
            {product.tag && (
              <span className="badge-tag" style={{ position: 'absolute', top: '1.2rem', left: '1.2rem' }}>
                {product.tag}
              </span>
            )}
          </div>

          {/* Right Column: Product Information & Details */}
          <div style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', background: '#FFF' }}>
            
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#6B21A8',
              fontSize: '0.8rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '0.4rem'
            }}>
              <Sparkles size={14} />
              <span>{product.categoryName} • {product.purity}</span>
            </div>

            <h2 className="font-serif text-gold-gradient" style={{ fontSize: '2rem', marginBottom: '0.8rem', lineHeight: 1.2 }}>
              {product.name}
            </h2>

            {/* Specifications Card */}
            <div style={{
              background: '#FAF8FC',
              border: '1px solid var(--border-purple)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.8rem 1rem',
              marginBottom: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ fontSize: '0.78rem', color: '#655E75', display: 'block' }}>Estimated Metal Weight</span>
                <span style={{ fontSize: '1.05rem', color: '#1F172B', fontWeight: '700' }}>{product.weightEstimate}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#059669', fontSize: '0.82rem', fontWeight: '700' }}>
                <ShieldCheck size={18} />
                <span>BIS Hallmarked</span>
              </div>
            </div>

            {/* Detailed Description */}
            <div style={{ color: '#4B4459', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem', whiteSpace: 'pre-line' }}>
              {product.description}
            </div>

            {/* Key Features List */}
            {product.features && product.features.length > 0 && (
              <div style={{ marginBottom: '1.8rem' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#1F172B', fontWeight: '700', marginBottom: '0.6rem' }}>
                  Craftsmanship Highlights:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {product.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: '#655E75' }}>
                      <Check size={15} color="#6B21A8" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              
              <a
                href={`https://wa.me/91${PND_BRAND.phoneRaw}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <MessageCircle size={18} />
                <span>Inquire About This Piece on WhatsApp</span>
              </a>

              <button
                onClick={() => onToggleWishlist(product)}
                className="btn-gold-outline"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Heart size={18} fill={isWishlisted ? "#6B21A8" : "none"} color="#6B21A8" />
                <span>{isWishlisted ? "In Inquiry Basket" : "Add to Inquiry Basket"}</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
