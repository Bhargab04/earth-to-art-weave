
import React, { useEffect, useRef, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const BrandCollaboration = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const brands = useMemo(() => [
    { name: 'Hermès', logo: '🏛️', collection: 'Terracotta Heritage', testimonial: 'Unparalleled sophistication in every brushstroke.' },
    { name: 'Four Seasons', logo: '🏨', collection: 'Forest Essence', testimonial: 'Transformed our spaces into living art.' },
    { name: 'Rolex', logo: '⌚', collection: 'Graphene Precision', testimonial: 'Precision and luxury in perfect harmony.' },
    { name: 'Tesla', logo: '🚗', collection: 'Modern Earth', testimonial: 'Sustainable innovation meets aesthetic perfection.' },
    { name: 'Apple', logo: '🍎', collection: 'Minimalist Clay', testimonial: 'Clean lines, natural beauty, revolutionary feel.' },
    { name: 'Louis Vuitton', logo: '👜', collection: 'Antique Gold Series', testimonial: 'Timeless elegance redefined for modern spaces.' },
    { name: 'BMW', logo: '🚙', collection: 'Graphene Sport', testimonial: 'Performance and beauty in every detail.' },
    { name: 'Bulgari', logo: '💎', collection: 'Precious Minerals', testimonial: 'Luxury that speaks without words.' }
  ], []);

  const animateCounter = useCallback(() => {
    if (hasAnimated.current || !counterRef.current) return;
    
    hasAnimated.current = true;
    let counter = { value: 0 };
    gsap.to(counter, {
      value: 127,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counter.value).toString();
        }
      }
    });
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounter();
          
          // Brand cards fade-in animation
          gsap.fromTo(".brand-card", {
            opacity: 0,
            y: 50,
            scale: 0.9
          }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [animateCounter]);

  return (
    <section ref={sectionRef} className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Trusted by <span className="text-gold"><span ref={counterRef}>0</span>+</span> Iconic Brands
          </h2>
          <p className="text-xl text-charcoal/80 mb-8">
            Across 6 Continents
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="brand-card group relative bg-white/50 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/80 transition-all duration-300 cursor-pointer border border-charcoal/10"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {brand.logo}
              </div>
              <h3 className="font-inter font-semibold text-charcoal group-hover:text-gold transition-colors duration-300">
                {brand.name}
              </h3>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="bg-charcoal text-ivory p-4 rounded-lg shadow-lg max-w-xs">
                  <p className="font-playfair italic text-sm mb-2">"{brand.testimonial}"</p>
                  <p className="text-gold text-xs">Collection: {brand.collection}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="bg-charcoal hover:bg-charcoal/90 text-ivory px-8 py-4 text-lg shine-effect">
            Explore Co-Creations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(BrandCollaboration);
