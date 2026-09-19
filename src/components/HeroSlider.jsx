import React, { useState, useEffect } from 'react';
import { HERO_SLIDERS } from '../data/pndData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDERS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? HERO_SLIDERS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDERS.length);
  };

  return (
    <section 
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: 'clamp(280px, 45vw, 620px)',
        background: '#FAF8FC',
        borderBottom: '1px solid var(--border-purple)'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Pure Image Slider Showcase (No overlay text or buttons) */}
      {HERO_SLIDERS.map((slide, idx) => (
        <div
          key={slide.id}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: currentIndex === idx ? 1 : 0,
            transition: 'opacity 0.9s ease-in-out',
            zIndex: currentIndex === idx ? 1 : 0,
            pointerEvents: currentIndex === idx ? 'auto' : 'none'
          }}
        >
          <img 
            src={slide.image} 
            alt={`PND Jewellers Banner ${slide.id}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </div>
      ))}

      {/* Slide Navigation Dots */}
      <div style={{
        position: 'absolute',
        bottom: '1.5rem',
        left: 0,
        right: 0,
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem'
      }}>
        {HERO_SLIDERS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            style={{
              width: currentIndex === idx ? '36px' : '12px',
              height: '8px',
              borderRadius: 'var(--radius-full)',
              background: currentIndex === idx ? 'var(--purple-700)' : 'rgba(0, 0, 0, 0.25)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: currentIndex === idx ? '0 2px 10px rgba(107, 33, 168, 0.4)' : 'none'
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slide Arrow Controls */}
      <button
        onClick={prevSlide}
        style={{
          ...arrowBtnStyle,
          left: '1.25rem'
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} color="#6B21A8" />
      </button>

      <button
        onClick={nextSlide}
        style={{
          ...arrowBtnStyle,
          right: '1.25rem'
        }}
        aria-label="Next slide"
      >
        <ChevronRight size={24} color="#6B21A8" />
      </button>

    </section>
  );
}

const arrowBtnStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 10,
  background: 'rgba(255, 255, 255, 0.85)',
  border: '1px solid var(--border-purple)',
  borderRadius: '50%',
  width: '46px',
  height: '46px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.25s ease',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  backdropFilter: 'blur(6px)'
};
