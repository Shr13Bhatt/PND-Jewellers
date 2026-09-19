import React from 'react';
import { PND_BRAND } from '../data/pndData';
import { X, Trash2, MessageCircle, Heart } from 'lucide-react';

export default function WishlistDrawer({ isOpen, onClose, wishlist, onRemoveItem, onClearWishlist }) {
  if (!isOpen) return null;

  const handleSendWhatsAppBatch = () => {
    if (wishlist.length === 0) return;
    
    let text = `Hello PND Jewellers! I am interested in inquiring about the following ${wishlist.length} item(s) from your website catalog:%0A%0A`;
    wishlist.forEach((item, index) => {
      text += `${index + 1}. *${item.name}* (${item.purity}) - Est. Weight: ${item.weightEstimate}%0A`;
    });
    text += `%0APlease provide availability and price quotes!`;

    window.open(`https://wa.me/91${PND_BRAND.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Dark Overlay */}
      <div className="drawer-overlay" onClick={onClose}></div>

      {/* Slide-out Drawer Panel */}
      <div className="drawer-panel" style={{ padding: '1.5rem', overflowY: 'auto' }}>
        
        {/* Drawer Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-purple)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Heart size={20} color="#6B21A8" fill="#6B21A8" />
            <h3 className="font-serif" style={{ fontSize: '1.3rem', color: '#1F172B', fontWeight: '700' }}>
              Your Inquiry Basket ({wishlist.length})
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#655E75',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Wishlist Items List */}
        {wishlist.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'var(--purple-100)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <Heart size={32} color="#6B21A8" />
            </div>
            <h4 className="font-serif" style={{ fontSize: '1.2rem', color: '#1F172B', marginBottom: '0.4rem' }}>
              Your Basket is Empty
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#655E75', textAlign: 'center', marginBottom: '1.5rem' }}>
              Click the heart icon on any jewellery piece to save it here for a batch inquiry!
            </p>
            <button onClick={onClose} className="btn-gold-outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
              Browse Products
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#655E75' }}>Selected Items:</span>
              <button
                onClick={onClearWishlist}
                style={{ background: 'none', border: 'none', color: '#EF4444', fontSize: '0.78rem', cursor: 'pointer', textDecoration: 'underline' }}
              >
                Clear All
              </button>
            </div>

            {wishlist.map((item) => (
              <div
                key={item.id}
                style={{
                  background: '#FAF8FC',
                  border: '1px solid var(--border-purple)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.85rem',
                  display: 'flex',
                  gap: '0.85rem',
                  alignItems: 'center'
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '8px',
                    objectFit: 'cover'
                  }}
                />

                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4 style={{ fontSize: '0.95rem', color: '#1F172B', fontWeight: '700', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.name}
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: '#6B21A8', fontWeight: '600', display: 'block' }}>
                    {item.purity}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#655E75' }}>
                    Weight: {item.weightEstimate}
                  </span>
                </div>

                <button
                  onClick={() => onRemoveItem(item.id)}
                  style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    color: '#EF4444',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                  title="Remove"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}

            {/* Bottom Batch Inquiry Button */}
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-purple)' }}>
              <button
                onClick={handleSendWhatsAppBatch}
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <MessageCircle size={18} />
                <span>Inquire All {wishlist.length} Items on WhatsApp</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </>
  );
}
