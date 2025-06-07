
import React, { useEffect, useRef, useState } from 'react';

const MaterialAlchemy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      if (sectionTop <= viewportHeight && sectionTop + sectionHeight >= 0) {
        const progress = Math.max(0, Math.min(1, (viewportHeight - sectionTop) / (viewportHeight + sectionHeight)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transformStages = [
    { title: "Mineral", description: "Pure earth elements", icon: "🌍" },
    { title: "Pigment", description: "Refined color essence", icon: "🎨" },
    { title: "Mix", description: "Graphene fusion", icon: "⚗️" },
    { title: "Stroke", description: "Artisan application", icon: "🖌️" },
    { title: "Luxury", description: "Transformed surface", icon: "✨" }
  ];

  return (
    <section ref={sectionRef} className="relative min-h-[300vh] bg-gradient-to-b from-charcoal to-forest">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateY(${scrollProgress * -200}px) scale(${1 + scrollProgress})`,
                opacity: Math.max(0, 1 - scrollProgress)
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-5xl md:text-7xl font-bold text-ivory mb-16">
            Material <span className="text-gradient-gold">Alchemy</span>
          </h2>

          {/* Transformation process */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {transformStages.map((stage, index) => {
              const stageProgress = Math.max(0, Math.min(1, (scrollProgress - index * 0.15) / 0.2));
              const isActive = scrollProgress >= index * 0.15;
              
              return (
                <React.Fragment key={stage.title}>
                  <div
                    className={`text-center transition-all duration-700 ${
                      isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-30 translate-y-8 scale-90'
                    }`}
                    style={{
                      transform: `translateY(${isActive ? 0 : 32}px) scale(${isActive ? 1 : 0.9})`,
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="text-6xl mb-4">{stage.icon}</div>
                    <h3 className="font-playfair text-2xl font-semibold text-ivory mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-ivory/70 text-sm">
                      {stage.description}
                    </p>
                  </div>
                  
                  {index < transformStages.length - 1 && (
                    <div
                      className={`hidden md:block transition-all duration-500 ${
                        scrollProgress >= (index + 0.5) * 0.15 ? 'opacity-100' : 'opacity-20'
                      }`}
                    >
                      <div className="w-16 h-px bg-gradient-to-r from-gold to-terracotta" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Final message */}
          <div
            className={`mt-16 transition-all duration-1000 ${
              scrollProgress >= 0.8 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="font-playfair text-3xl md:text-4xl text-gradient-gold font-semibold">
              From Earth to Art.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialAlchemy;
