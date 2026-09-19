import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

export default function PolicyModal({ policyType, onClose }) {
  if (!policyType) return null;

  const policyData = {
    AboutUs: {
      title: 'About PND Jewellers',
      content: `Behind our 15-year success is our panel of expert jewellers who have been scouring the entire globe in pursuit of the best and most stunning jewellery that can be offered at affordable prices for you.

Visit our online catalogue and shop for the finest earrings, rings, bracelets, watches, silver, and the most luxurious gemstones.

Our Commitment:
- 100% BIS 916 Hallmarked Pure Gold Assurance.
- IGI & GIA Authenticated Diamonds.
- Transparent weight and purity certification.
- Personalized artisan crafting for weddings, engagements & festivals.`
    },
    ReturnPolicy: {
      title: 'Return & Exchange Policy',
      content: `We take immense pride in the craftsmanship of PND Jewellers.

Key Guidelines:
1. 100% Buyback Guarantee on Gold Purity based on prevailing market rates.
2. Exchange available within 7 days of purchase for unused ornaments with original invoice and certificate intact.
3. Custom crafted or engraved pieces are subject to standard gold weight valuation during exchange.`
    },
    ShippingPolicy: {
      title: 'Shipping & Delivery Policy',
      content: `All high-value jewellery orders are dispatched via insured express courier partners.

Features:
- Fully transit-insured shipment across India.
- OTP verification required at the time of delivery for customer security.
- Standard dispatch timeline: 3-5 business days for in-stock items, 10-14 days for custom crafted designs.`
    },
    PrivacyPolicy: {
      title: 'Privacy Policy',
      content: `PND Jewellers respects your personal privacy. We do not sell, rent, or share your contact info with third-party advertisers.

Your phone number and inquiry details are strictly used to assist you with order updates, gold rate notifications, and store inquiries.`
    },
    TermsAndConditions: {
      title: 'Terms & Conditions',
      content: `1. Prices are subject to daily gold market fluctuations until an order is confirmed with advance booking.
2. BIS Hallmarked purity is guaranteed on all 22K (916) and 18K (750) ornaments.
3. Any disputes are subject to Gujarat jurisdiction.`
    },
    FAQ: {
      title: 'Frequently Asked Questions (FAQ)',
      content: `Q: Are all PND Jewellers ornaments BIS Hallmarked?
A: Yes! Every piece of gold jewellery carries government-recognized 916 / 750 BIS Hallmark laser embossing.

Q: How can I place a custom order?
A: You can message us on WhatsApp (+91 8238534548) with your preferred reference design.

Q: Where is your physical store located?
A: 796 Gurjar Ni Pol, Opp. Mahadev Temple, Prantij - 383205, Gujarat.`
    }
  };

  const currentPolicy = policyData[policyType] || policyData.AboutUs;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content-box"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '640px',
          padding: '2.5rem 2rem',
          position: 'relative',
          maxHeight: '85vh',
          overflowY: 'auto'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: '#FAF8FC',
            border: '1px solid var(--border-purple)',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            color: '#1F172B',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={18} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'var(--purple-700)',
            color: '#FFF',
            marginBottom: '0.6rem'
          }}>
            <ShieldCheck size={24} />
          </div>
          <h3 className="font-serif text-gold-gradient" style={{ fontSize: '1.6rem' }}>
            {currentPolicy.title}
          </h3>
        </div>

        <div style={{ color: '#4B4459', fontSize: '0.94rem', lineHeight: '1.7', whiteSpace: 'pre-line' }}>
          {currentPolicy.content}
        </div>

        <button 
          onClick={onClose} 
          className="btn-gold" 
          style={{ width: '100%', marginTop: '2rem', justifyContent: 'center' }}
        >
          Close Window
        </button>

      </div>
    </div>
  );
}
