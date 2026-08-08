import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/products';
import { useShop } from '../context/ShopContext';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { setActiveTab, setSelectedCategory } = useShop();

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, currentSlide]);

  const handleCtaClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setActiveTab('catalog');
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div 
      className="hero-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slide Image & Banner Overlay */}
      <div className="hero-slide-bg" style={{ background: slide.bgGradient }}>
        <img src={slide.image} alt={slide.title} className="slide-image" />
        <div className="gradient-overlay-bottom" />
        
        <div className="slide-content">
          <span className="slide-badge">
            <Sparkles size={14} /> {slide.badge}
          </span>
          <h1 className="slide-title">{slide.title}</h1>
          <p className="slide-subtitle">{slide.subtitle}</p>
          <button 
            className="btn-primary slide-cta"
            onClick={() => handleCtaClick(slide.categoryId)}
          >
            {slide.ctaText} &rarr;
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="carousel-arrow left" onClick={prevSlide} aria-label="Previous Slide">
        <ChevronLeft size={36} />
      </button>

      <button className="carousel-arrow right" onClick={nextSlide} aria-label="Next Slide">
        <ChevronRight size={36} />
      </button>

      {/* Indicators */}
      <div className="carousel-indicators">
        {HERO_SLIDES.map((s, index) => (
          <button
            key={s.id}
            className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <style>{`
        .hero-carousel {
          position: relative;
          width: 100%;
          height: 380px;
          overflow: hidden;
          margin-bottom: -120px; /* Pulls category grid up over hero gradient */
        }

        .hero-slide-bg {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          transition: all 0.5s ease-in-out;
        }

        .slide-image {
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;
          width: 65%;
          object-fit: cover;
          mask-image: linear-gradient(to right, transparent 0%, black 40%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 40%);
        }

        .gradient-overlay-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 180px;
          background: linear-gradient(to bottom, rgba(234, 237, 237, 0) 0%, rgba(234, 237, 237, 1) 100%);
          pointer-events: none;
        }

        .slide-content {
          position: relative;
          z-index: 10;
          max-width: 550px;
          padding-left: 60px;
          color: #fff;
          animation: slideFade 0.4s ease-out;
        }

        @keyframes slideFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .slide-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(240, 136, 4, 0.2);
          border: 1px solid var(--amz-accent-orange);
          color: #febd69;
          font-size: 11px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .slide-title {
          font-size: 36px;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 10px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }

        .slide-subtitle {
          font-size: 15px;
          color: #e2e8f0;
          margin-bottom: 20px;
          line-height: 1.4;
          text-shadow: 0 1px 2px rgba(0,0,0,0.5);
        }

        .slide-cta {
          font-size: 15px;
          padding: 10px 24px;
        }

        .carousel-arrow {
          position: absolute;
          top: 35%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          padding: 12px 8px;
          cursor: pointer;
          z-index: 20;
          transition: all var(--transition-fast);
          border-radius: 4px;
        }

        .carousel-arrow:hover {
          color: #fff;
          background: rgba(0,0,0,0.3);
        }

        .carousel-arrow.left { left: 10px; }
        .carousel-arrow.right { right: 10px; }

        .carousel-indicators {
          position: absolute;
          bottom: 130px;
          right: 40px;
          display: flex;
          gap: 8px;
          z-index: 20;
        }

        .indicator-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .indicator-dot.active {
          background: var(--amz-yellow-btn);
          width: 24px;
          border-radius: 12px;
        }

        @media (max-width: 768px) {
          .hero-carousel {
            height: 280px;
            margin-bottom: -60px;
          }
          .slide-content {
            padding-left: 20px;
          }
          .slide-title {
            font-size: 24px;
          }
          .slide-subtitle {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
};
