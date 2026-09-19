import React, { useState } from 'react';
import { LIVE_GOLD_RATES, PND_BRAND } from '../data/pndData';
import { TrendingUp, ShieldCheck, X, Sparkles, Send } from 'lucide-react';

export default function GoldRateTicker({ showCalcModal, setShowCalcModal }) {
  const [weight, setWeight] = useState(10);
  const [purity, setPurity] = useState('gold22k');
  const [makingCharges, setMakingCharges] = useState(12);

  const pricePerGram = LIVE_GOLD_RATES[purity] || LIVE_GOLD_RATES.gold22k;
  const basePrice = weight * pricePerGram;
  const estimatedMaking = basePrice * (makingCharges / 100);
  const totalPrice = Math.round(basePrice + estimatedMaking);

  const purityLabel = purity === 'gold24k' ? '24K (999 Pure)' : purity === 'gold22k' ? '22K (916 BIS Hallmarked)' : '18K (750 Gold)';

  const sendWhatsAppCalc = () => {
    const text = `Hello PND Jewellers! I calculated an estimate on your website:%0A- Purity: ${purityLabel}%0A- Weight: ${weight}g%0A- Approx Price: ₹${totalPrice.toLocaleString('en-IN')}%0A%0AI would like to inquire further about available designs!`;
    window.open(`https://wa.me/91${PND_BRAND.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Top Banner Ticker */}
      <div className="gold-ticker-wrap">
        <div className="container">
          <div className="ticker-content">
            
            {/* Live Price Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', overflowX: 'auto', whiteSpace: 'nowrap' }}>
              <div className="ticker-item">
                <TrendingUp size={14} color="#C77DFF" />
                <span style={{ fontWeight: '600', color: '#E0AAFF' }}>Live Rates Today:</span>
              </div>
              
              <div className="ticker-item">
                <span className="ticker-badge">24K Gold</span>
                <span>₹{LIVE_GOLD_RATES.gold24k.toLocaleString('en-IN')}/g</span>
              </div>

              <div className="ticker-item">
                <span className="ticker-badge" style={{ background: 'rgba(199, 125, 255, 0.3)', color: '#FFF' }}>
                  22K (916)
                </span>
                <span style={{ fontWeight: '600', color: '#FFF' }}>₹{LIVE_GOLD_RATES.gold22k.toLocaleString('en-IN')}/g</span>
              </div>

              <div className="ticker-item ticker-hide-mobile">
                <span className="ticker-badge">18K Gold</span>
                <span>₹{LIVE_GOLD_RATES.gold18k.toLocaleString('en-IN')}/g</span>
              </div>

              <div className="ticker-item ticker-hide-mobile">
                <span className="ticker-badge">Silver 10g</span>
                <span>₹{LIVE_GOLD_RATES.silver1k.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Hallmarking & Calculator Action */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexShrink: 0 }}>
              <div className="ticker-item ticker-hide-mobile" style={{ color: '#B8AFCD' }}>
                <ShieldCheck size={14} color="#10B981" />
                <span>100% BIS Hallmarked Guaranteed</span>
              </div>

              <button 
                onClick={() => setShowCalcModal(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#C77DFF',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  textDecoration: 'underline'
                }}
              >
                <Sparkles size={13} />
                <span>Calculate Gold Estimate</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Gold Rate Calculator Modal */}
      {showCalcModal && (
        <div className="modal-overlay" onClick={() => setShowCalcModal(false)}>
          <div 
            className="glass-panel modal-content-box" 
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '520px',
              padding: '2rem',
              position: 'relative'
            }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setShowCalcModal(false)}
              style={{
                position: 'absolute',
                top: '1.2rem',
                right: '1.2rem',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid var(--border-purple)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                color: '#FFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'var(--purple-gradient)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.6rem',
                boxShadow: '0 0 15px rgba(199, 125, 255, 0.5)'
              }}>
                <Sparkles size={24} color="#FFF" />
              </div>
              <h3 className="font-serif text-gold-gradient" style={{ fontSize: '1.6rem' }}>
                Live Gold Rate Calculator
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#B8AFCD', marginTop: '0.2rem' }}>
                Calculate instant estimated value based on today's live rate
              </p>
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              
              {/* Purity Selection */}
              <div>
                <label style={{ fontSize: '0.85rem', color: '#E0AAFF', marginBottom: '0.4rem', display: 'block', fontWeight: '500' }}>
                  Select Gold Purity:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
                  {[
                    { key: 'gold24k', label: '24K (999)', rate: LIVE_GOLD_RATES.gold24k },
                    { key: 'gold22k', label: '22K (916)', rate: LIVE_GOLD_RATES.gold22k },
                    { key: 'gold18k', label: '18K (750)', rate: LIVE_GOLD_RATES.gold18k }
                  ].map((p) => (
                    <button
                      key={p.key}
                      onClick={() => setPurity(p.key)}
                      style={{
                        padding: '0.65rem 0.4rem',
                        borderRadius: 'var(--radius-sm)',
                        border: purity === p.key ? '1px solid var(--purple-400)' : '1px solid var(--border-subtle)',
                        background: purity === p.key ? 'rgba(199, 125, 255, 0.25)' : 'rgba(255,255,255,0.03)',
                        color: purity === p.key ? '#FFF' : '#B8AFCD',
                        fontSize: '0.82rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div>{p.label}</div>
                      <div style={{ fontSize: '0.75rem', opacity: 0.85, marginTop: '2px' }}>₹{p.rate}/g</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Weight Slider & Input */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <label style={{ fontSize: '0.85rem', color: '#E0AAFF', fontWeight: '500' }}>
                    Weight in Grams:
                  </label>
                  <span style={{ fontSize: '0.95rem', color: '#C77DFF', fontWeight: '700' }}>
                    {weight} grams
                  </span>
                </div>
                <input 
                  type="range"
                  min="1"
                  max="200"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: '#C77DFF',
                    cursor: 'pointer'
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#8E85A5', marginTop: '4px' }}>
                  <span>1g (Rings)</span>
                  <span>25g (Bangles)</span>
                  <span>100g+ (Bridal Sets)</span>
                </div>
              </div>

              {/* Making Charges Approx Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <label style={{ fontSize: '0.85rem', color: '#E0AAFF', fontWeight: '500' }}>
                    Approx. Crafting / Making Charge:
                  </label>
                  <span style={{ fontSize: '0.88rem', color: '#B8AFCD', fontWeight: '600' }}>
                    {makingCharges}%
                  </span>
                </div>
                <input 
                  type="range"
                  min="8"
                  max="25"
                  value={makingCharges}
                  onChange={(e) => setMakingCharges(Number(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: '#C77DFF',
                    cursor: 'pointer'
                  }}
                />
              </div>

              {/* Calculation Summary Box */}
              <div style={{
                background: 'rgba(24, 9, 43, 0.85)',
                border: '1px solid var(--border-purple-bright)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                marginTop: '0.5rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#B8AFCD', marginBottom: '0.4rem' }}>
                  <span>Base Gold Value ({weight}g @ ₹{pricePerGram}/g):</span>
                  <span>₹{basePrice.toLocaleString('en-IN')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#B8AFCD', marginBottom: '0.6rem' }}>
                  <span>Est. Crafting & Waste ({makingCharges}%):</span>
                  <span>₹{Math.round(estimatedMaking).toLocaleString('en-IN')}</span>
                </div>
                <div className="gold-divider" style={{ margin: '0.6rem 0', width: '100%' }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#B8AFCD', display: 'block' }}>Estimated Total Price</span>
                    <span style={{ fontSize: '0.72rem', color: '#10B981' }}>Includes 100% Hallmarking</span>
                  </div>
                  <span style={{ fontSize: '1.5rem', fontWeight: '700', color: '#E0AAFF' }}>
                    ₹{totalPrice.toLocaleString('en-IN')}*
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button 
                onClick={sendWhatsAppCalc}
                className="btn-gold" 
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                <Send size={16} />
                <span>Inquire Custom Design on WhatsApp</span>
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
}
