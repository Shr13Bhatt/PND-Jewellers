import React from 'react';
import { PND_BRAND, CERTIFICATIONS } from '../data/pndData';
import { Award, ShieldCheck, Gem, Sparkles } from 'lucide-react';

export default function AboutSection({ onOpenPolicy }) {
  return (
    <section id="about" className="section-padding" style={{ background: '#FAF8FC', position: 'relative' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* About Section Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center',
          marginBottom: '4.5rem'
        }}>
          
          {/* Left Column: Story Content */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#6B21A8',
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>
              <Sparkles size={14} />
              <span>15+ Years Heritage & Excellence</span>
            </div>

            <h2 className="font-serif text-gold-gradient" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: '0.8rem' }}>
              Crafting Royalty & Timeless Memories
            </h2>

            <div className="purple-divider" style={{ margin: '0 0 1.5rem 0' }}></div>

            <p style={{ color: '#1F172B', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.2rem', fontWeight: '500' }}>
              Behind our 15-year success is our panel of expert jewellers who have been scouring the entire globe in pursuit of the best and most stunning jewellery that can be offered at affordable price for you.
            </p>

            <p style={{ color: '#655E75', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              Visit our online catalogue and shop for the finest earrings, rings, bracelets, watches, silver, and the most luxurious gemstones. Every single ornament in our store represents authentic purity, BIS Hallmarking, and unmatched artisan devotion.
            </p>

            {/* Quick Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <div className="glass-panel" style={{ padding: '1rem', textAlign: 'center', background: '#FFF' }}>
                <span className="font-serif text-gold-gradient" style={{ fontSize: '1.8rem', fontWeight: '700', display: 'block' }}>15+</span>
                <span style={{ fontSize: '0.78rem', color: '#655E75', fontWeight: '500' }}>Years Trust</span>
              </div>
              <div className="glass-panel" style={{ padding: '1rem', textAlign: 'center', background: '#FFF' }}>
                <span className="font-serif text-gold-gradient" style={{ fontSize: '1.8rem', fontWeight: '700', display: 'block' }}>100%</span>
                <span style={{ fontSize: '0.78rem', color: '#655E75', fontWeight: '500' }}>BIS Hallmarked</span>
              </div>
              <div className="glass-panel" style={{ padding: '1rem', textAlign: 'center', background: '#FFF' }}>
                <span className="font-serif text-gold-gradient" style={{ fontSize: '1.8rem', fontWeight: '700', display: 'block' }}>10k+</span>
                <span style={{ fontSize: '0.78rem', color: '#655E75', fontWeight: '500' }}>Happy Clients</span>
              </div>
            </div>

            <button onClick={() => onOpenPolicy('AboutUs')} className="btn-gold">
              <span>Read Full Heritage Story</span>
            </button>
          </div>

          {/* Right Column: Reference About Image */}
          <div style={{ position: 'relative' }}>
            <div className="glass-panel" style={{ padding: '0.8rem', overflow: 'hidden', borderRadius: 'var(--radius-lg)', background: '#FFF' }}>
              <img 
                src={PND_BRAND.aboutImage} 
                alt="PND Jewellers Heritage" 
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 'var(--radius-md)',
                  display: 'block'
                }}
              />
            </div>
            
            {/* Floating Quality Seal */}
            <div style={{
              position: 'absolute',
              bottom: '-1.2rem',
              right: '-0.5rem',
              background: '#FFF',
              border: '1.5px solid var(--border-purple-bright)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <ShieldCheck size={32} color="#6B21A8" />
              <div>
                <span style={{ fontSize: '0.9rem', color: '#1F172B', fontWeight: '700', display: 'block' }}>Certified Authentic</span>
                <span style={{ fontSize: '0.75rem', color: '#059669', fontWeight: '600' }}>IGI • GIA • BIS 916</span>
              </div>
            </div>
          </div>

        </div>

        {/* Certifications Section */}
        <div id="certifications" style={{ marginTop: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 className="font-serif text-gold-gradient" style={{ fontSize: '1.8rem' }}>
              Global Certification & Purity Assurances
            </h3>
            <p style={{ color: '#655E75', fontSize: '0.9rem', marginTop: '0.3rem' }}>
              We adhere strictly to international and government gemological purity benchmarks.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {CERTIFICATIONS.map((cert, idx) => (
              <div 
                key={idx} 
                className="glass-panel" 
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.2rem',
                  background: '#FFF'
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'var(--purple-100)',
                  border: '1px solid var(--border-purple)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#6B21A8'
                }}>
                  {cert.icon === 'igi' ? <Gem size={26} /> : cert.icon === 'gia' ? <Award size={26} /> : <ShieldCheck size={26} />}
                </div>

                <div>
                  <h4 style={{ fontSize: '1.15rem', color: '#1F172B', fontWeight: '700', marginBottom: '0.2rem' }}>
                    {cert.name}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: '#6B21A8', fontWeight: '600', marginBottom: '0.4rem' }}>
                    {cert.title}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: '#655E75', lineHeight: '1.5' }}>
                    {cert.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
