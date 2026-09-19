import React, { useState } from 'react';
import { PND_BRAND } from '../data/pndData';
import { MapPin, Phone, Clock, Send, Sparkles, Navigation, CheckCircle2 } from 'lucide-react';

export default function StoreLocator() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '', topic: 'Inquiry' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setFormData({ name: '', phone: '', message: '', topic: 'Inquiry' });
  };

  return (
    <section id="visit-store" className="section-padding" style={{ background: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: '#6B21A8',
            fontSize: '0.85rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: '600',
            marginBottom: '0.4rem'
          }}>
            <Sparkles size={14} />
            <span>Visit Our Flagship Showroom</span>
          </div>
          <h2 className="font-serif text-gold-gradient" style={{ fontSize: 'clamp(2rem, 4vw, 2.7rem)' }}>
            Visit Our Store & Contact Us
          </h2>
          <div className="purple-divider"></div>
          <p style={{ color: '#655E75', maxWidth: '600px', margin: '0 auto', fontSize: '0.98rem' }}>
            Experience our royal gold & antique jewellery collection in person at our Prantij showroom.
          </p>
        </div>

        {/* Content Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem'
        }}>
          
          {/* Left Column: Interactive Google Map & Address Info */}
          <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', background: '#FFF' }}>
            
            <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#1F172B', marginBottom: '1.5rem' }}>
              Showroom Location
            </h3>

            {/* Address Details Card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.8rem' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--purple-100)',
                  border: '1px solid var(--border-purple)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6B21A8',
                  flexShrink: 0
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#1F172B', fontWeight: '700' }}>Office & Store Address</h4>
                  <p style={{ fontSize: '0.88rem', color: '#655E75', lineHeight: '1.5', marginTop: '2px' }}>
                    {PND_BRAND.address}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--purple-100)',
                  border: '1px solid var(--border-purple)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6B21A8',
                  flexShrink: 0
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#1F172B', fontWeight: '700' }}>Telephone / Inquiry</h4>
                  <a 
                    href={`tel:${PND_BRAND.phoneRaw}`} 
                    style={{ fontSize: '0.95rem', color: '#6B21A8', fontWeight: '700', textDecoration: 'none', display: 'block', marginTop: '2px' }}
                  >
                    (+91) 8238534548
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--purple-100)',
                  border: '1px solid var(--border-purple)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6B21A8',
                  flexShrink: 0
                }}>
                  <Clock size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#1F172B', fontWeight: '700' }}>Showroom Timings</h4>
                  <p style={{ fontSize: '0.88rem', color: '#655E75', marginTop: '2px' }}>
                    {PND_BRAND.openingHours}
                  </p>
                </div>
              </div>

            </div>

            {/* Embedded Responsive Google Map */}
            <div style={{
              width: '100%',
              height: '240px',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '1px solid var(--border-purple)',
              marginBottom: '1.2rem'
            }}>
              <iframe
                title="PND Jewellers Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14639.294695029415!2d72.843719!3d23.4358092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI2JzA4LjkiTiA3MsKwNTEnMTMuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <a
              href="https://maps.google.com/?q=23.4358092,72.853719"
              target="_blank"
              rel="noreferrer"
              className="btn-gold-outline"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Navigation size={16} />
              <span>Get Live Directions on Google Maps</span>
            </a>

          </div>

          {/* Right Column: Contact & VIP Appointment Form */}
          <div className="glass-panel" style={{ padding: '2rem', background: '#FFF' }}>
            
            <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#1F172B', marginBottom: '0.4rem' }}>
              Book Appointment & Send Inquiry
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#655E75', marginBottom: '1.8rem' }}>
              Fill out the form below and our head jewellery consultant will contact you directly.
            </p>

            {submitted ? (
              <div style={{
                background: '#ECFDF5',
                border: '1px solid #10B981',
                borderRadius: 'var(--radius-md)',
                padding: '2.5rem 1.5rem',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={48} color="#10B981" style={{ margin: '0 auto 1rem' }} />
                <h4 className="font-serif" style={{ fontSize: '1.4rem', color: '#1F172B', marginBottom: '0.5rem' }}>
                  Inquiry Submitted Successfully!
                </h4>
                <p style={{ color: '#4B5563', fontSize: '0.9rem' }}>
                  Thank you for reaching out to PND Jewellers. Our team will contact you shortly via phone or WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                
                <div>
                  <label style={{ fontSize: '0.85rem', color: '#1F172B', display: 'block', marginBottom: '0.4rem', fontWeight: '600' }}>
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', color: '#1F172B', display: 'block', marginBottom: '0.4rem', fontWeight: '600' }}>
                    Phone Number / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', color: '#1F172B', display: 'block', marginBottom: '0.4rem', fontWeight: '600' }}>
                    Topic of Interest
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    style={inputStyle}
                  >
                    <option value="Antique Jewellery">Antique Jewellery Sets</option>
                    <option value="Gold Bangles & Chains">Gold Bangles & Chains</option>
                    <option value="Custom Order">Custom Crafting Order</option>
                    <option value="Inquiry">General Store Inquiry</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', color: '#1F172B', display: 'block', marginBottom: '0.4rem', fontWeight: '600' }}>
                    Message or Specifications (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Mention any specific weight, purity or design requirement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  ></textarea>
                </div>

                <button type="submit" className="btn-gold" style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}>
                  <Send size={18} />
                  <span>Send Inquiry to PND Jewellers</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  background: '#FAF8FC',
  border: '1px solid var(--border-purple)',
  borderRadius: 'var(--radius-sm)',
  color: '#1F172B',
  fontSize: '0.9rem',
  outline: 'none',
  fontFamily: 'var(--font-sans)'
};
