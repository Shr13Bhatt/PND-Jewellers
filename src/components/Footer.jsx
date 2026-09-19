import React from 'react';
import { PND_BRAND } from '../data/pndData';
import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenPolicy }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #58113E 0%, #42102A 50%, #2E0A1D 100%)',
      borderTop: '1px solid rgba(246, 226, 238, 0.2)',
      color: '#F6E2EE',
      paddingTop: '4rem',
      boxShadow: '0 -4px 25px rgba(53, 9, 35, 0.3)'
    }}>
      <div className="container">
        
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          paddingBottom: '3.5rem'
        }}>
          
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1rem' }}>
              <img 
                src={PND_BRAND.logo} 
                alt={PND_BRAND.name} 
                style={{ height: '44px', objectFit: 'contain', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.4))' }} 
              />
              <span className="font-display" style={{ fontSize: '1.25rem', fontWeight: '700', color: '#FFFFFF' }}>
                PND JEWELLERS
              </span>
            </div>
            <p style={{ fontSize: '0.86rem', lineHeight: '1.6', marginBottom: '1.2rem', color: '#EAC0D9' }}>
              15+ years of excellence in crafting BIS 916 Hallmarked Gold, Antique Sets, Bangles & Gemstone Jewellery.
            </p>
            <div style={{ fontSize: '0.82rem', color: '#F59E0B', fontWeight: '700' }}>
              BIS Hallmark 916 • IGI & GIA Certified
            </div>
          </div>

          {/* Col 2: Store & Contact Details */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '1rem' }}>
              Contact Us
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.86rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#F6E2EE' }}>
                <MapPin size={16} color="#F59E0B" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>796 GURJAR NI POL OPP MAHADEV TAMPLE, GUJRJAR NI POL, PRANTIJ, Prantij - 383205</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} color="#F59E0B" style={{ flexShrink: 0 }} />
                <a href={`tel:${PND_BRAND.phoneRaw}`} style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: '700' }}>
                  (+91) 8238534548
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F6E2EE' }}>
                <Mail size={16} color="#F59E0B" style={{ flexShrink: 0 }} />
                <span>contact@pndjewellers.com</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation & About */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '1rem' }}>
              About Us
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.86rem' }}>
              <li>
                <button onClick={() => onOpenPolicy('AboutUs')} style={linkBtnStyle}>About PND Jewellers</button>
              </li>
              <li>
                <a href="#collections" style={linkStyle}>Our Signature Collections</a>
              </li>
              <li>
                <a href="#products" style={linkStyle}>Browse All Products</a>
              </li>
              <li>
                <a href="#visit-store" style={linkStyle}>Visit Prantij Showroom</a>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('FAQ')} style={linkBtnStyle}>Frequently Asked Questions</button>
              </li>
            </ul>
          </div>

          {/* Col 4: Store Policy & Mobile App Banner */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '1rem' }}>
              Customer Policy
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.86rem', marginBottom: '1.2rem' }}>
              <li>
                <button onClick={() => onOpenPolicy('ReturnPolicy')} style={linkBtnStyle}>Return & Exchange Policy</button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('ShippingPolicy')} style={linkBtnStyle}>Shipping & Delivery Policy</button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('PrivacyPolicy')} style={linkBtnStyle}>Privacy Policy</button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('TermsAndConditions')} style={linkBtnStyle}>Terms & Conditions</button>
              </li>
            </ul>
            
            {/* App Banner Container */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              padding: '0.9rem',
              backdropFilter: 'blur(6px)'
            }}>
              <span style={{ fontSize: '0.8rem', color: '#FFFFFF', fontWeight: '700', display: 'block', marginBottom: '2px' }}>
                Download B2B Mobile App
              </span>
              <span style={{ fontSize: '0.73rem', color: '#EAC0D9' }}>
                Get catalog & design updates on Android & iOS
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          padding: '1.5rem 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem'
        }}>
          <div style={{ color: '#EAC0D9' }}>
            Copyright &copy; 2026 <strong style={{ color: '#FFFFFF' }}>PND Jewellers</strong>. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
              border: 'none',
              borderRadius: '9999px',
              padding: '0.45rem 1.2rem',
              color: '#000',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8rem',
              fontWeight: '700',
              boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)'
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} color="#000" />
          </button>
        </div>

      </div>
    </footer>
  );
}

const linkStyle = {
  color: '#F6E2EE',
  textDecoration: 'none',
  transition: 'color 0.2s ease'
};

const linkBtnStyle = {
  background: 'none',
  border: 'none',
  color: '#F6E2EE',
  cursor: 'pointer',
  fontSize: '0.86rem',
  padding: 0,
  textAlign: 'left',
  fontFamily: 'var(--font-sans)',
  transition: 'color 0.2s ease'
};
