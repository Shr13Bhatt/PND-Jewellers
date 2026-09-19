import React, { useState } from 'react';
import { PND_BRAND } from '../data/pndData';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'linear-gradient(135deg, #58113E 0%, #42102A 50%, #2E0A1D 100%)',
      boxShadow: '0 4px 25px rgba(53, 9, 35, 0.4)',
      borderBottom: '1px solid rgba(246, 226, 238, 0.2)',
      width: '100%',
      overflowX: 'hidden'
    }}>
      <div style={{
        maxWidth: '1360px',
        margin: '0 auto',
        padding: '0 1.25rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.8rem 0',
          gap: '1rem',
          width: '100%'
        }}>
          
          {/* Left: Brand Logo & Title */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', flexShrink: 0 }}>
            <img 
              src={PND_BRAND.logo} 
              alt={PND_BRAND.name} 
              style={{
                height: '48px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.35))'
              }} 
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="font-display" style={{ fontSize: '1.35rem', fontWeight: '700', color: '#FFFFFF', letterSpacing: '0.03em', lineHeight: 1.1 }}>
                PND JEWELLERS
              </span>
              <span style={{ fontSize: '0.68rem', color: '#F6E2EE', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px' }}>
                Est. 15+ Years • Royal Gold Heritage
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="desktop-nav" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            whiteSpace: 'nowrap'
          }}>
            <a href="#" style={navLinkStyle}>Home</a>
            <a href="#collections" style={navLinkStyle}>Collections</a>
            <a href="#products" style={navLinkStyle}>Our Products</a>
            <a href="#about" style={navLinkStyle}>About Us</a>
            <a href="#certifications" style={navLinkStyle}>Certifications</a>
            <a href="#visit-store" style={navLinkStyle}>Visit Store</a>
          </nav>

          {/* Right: Direct Call CTA Button & Mobile Menu Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            
            {/* Direct Call Button */}
            <a 
              href={`tel:${PND_BRAND.phoneRaw}`} 
              className="desktop-call-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                color: '#000',
                fontWeight: '700',
                fontSize: '0.84rem',
                padding: '0.6rem 1.25rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              <Phone size={14} color="#000" />
              <span>Call +91 8238534548</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              style={iconBtnStyle}
              className="mobile-menu-btn"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} color="#FFFFFF" /> : <Menu size={22} color="#FFFFFF" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-down Navigation Menu */}
        {mobileMenuOpen && (
          <div style={{
            margin: '0.5rem 0 1rem',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
            background: 'rgba(66, 16, 42, 0.98)',
            borderRadius: '16px',
            border: '1px solid rgba(246, 226, 238, 0.2)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            <a href="#" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Home</a>
            <a href="#collections" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Our Collections</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>All Products</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>About PND Jewellers</a>
            <a href="#certifications" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Certifications (IGI/GIA/BIS)</a>
            <a href="#visit-store" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Visit Our Store</a>
            
            <div style={{ marginTop: '0.5rem' }}>
              <a 
                href={`tel:${PND_BRAND.phoneRaw}`} 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                  color: '#000',
                  fontWeight: '700',
                  padding: '0.75rem 1rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  width: '100%'
                }}
              >
                <Phone size={16} />
                <span>Call Us Now (+91 8238534548)</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}

const navLinkStyle = {
  color: '#FFFFFF',
  textDecoration: 'none',
  fontSize: '0.9rem',
  fontWeight: '600',
  padding: '0.45rem 0.75rem',
  borderRadius: '9999px',
  transition: 'all 0.2s ease',
  fontFamily: 'var(--font-sans)',
  letterSpacing: '0.01em'
};

const mobileNavLinkStyle = {
  color: '#FFFFFF',
  textDecoration: 'none',
  fontSize: '1.05rem',
  fontWeight: '600',
  padding: '0.65rem 0',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
};

const iconBtnStyle = {
  background: 'rgba(255, 255, 255, 0.15)',
  border: '1px solid rgba(255, 255, 255, 0.25)',
  borderRadius: '9999px',
  padding: '0.55rem 0.75rem',
  display: 'none', // Shown on mobile via CSS
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease'
};
