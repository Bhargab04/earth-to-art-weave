
import React, { useEffect, useRef, useState } from 'react';

const FromSoilToSurface = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate progress when section is in view
      if (sectionTop <= viewportHeight && sectionTop + sectionHeight >= 0) {
        const progress = Math.max(0, Math.min(1, (viewportHeight - sectionTop) / (viewportHeight + sectionHeight)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stages = [
    {
      title: "Earth",
      description: "Raw minerals from sacred soils",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=2000&auto=format&fit=crop",
      offset: 0
    },
    {
      title: "Extraction",
      description: "Pure pigments emerge",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop",
      offset: 0.25
    },
    {
      title: "Fusion",
      description: "Graphene meets nature",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2000&auto=format&fit=crop",
      offset: 0.5
    },
    {
      title: "Perfection",
      description: "Luxury redefined",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=2000&auto=format&fit=crop",
      offset: 0.75
    }
  ];

  return (
    <section ref={sectionRef} className="relative min-h-[400vh] bg-ivory">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/5 to-forest/10" />
        
        {/* Background images with parallax */}
        {stages.map((stage, index) => {
          const isActive = scrollProgress >= stage.offset && scrollProgress < (stages[index + 1]?.offset || 1);
          const stageProgress = Math.max(0, Math.min(1, (scrollProgress - stage.offset) / 0.25));
          
          return (
            <div
              key={stage.title}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={stage.image}
                alt={stage.title}
                className="w-full h-full object-cover"
                style={{
                  transform: `scale(${1 + stageProgress * 0.1}) translateY(${stageProgress * -50}px)`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            </div>
          );
        })}

        {/* Content overlay */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h2 className="font-playfair text-5xl md:text-7xl font-bold text-ivory mb-8">
              From Soil to <span className="text-gradient-gold">Surface</span>
            </h2>
            
            {/* Progress indicator */}
            <div className="w-full max-w-md mx-auto mb-8">
              <div className="h-1 bg-ivory/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-gold to-terracotta transition-all duration-300 ease-out"
                  style={{ width: `${scrollProgress * 100}%` }}
                />
              </div>
            </div>

            {/* Current stage info */}
            {stages.map((stage, index) => {
              const isActive = scrollProgress >= stage.offset && scrollProgress < (stages[index + 1]?.offset || 1);
              
              return (
                <div
                  key={stage.title}
                  className={`transition-all duration-500 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ display: isActive ? 'block' : 'none' }}
                >
                  <h3 className="text-3xl md:text-4xl font-playfair font-semibold text-gold mb-4">
                    {stage.title}
                  </h3>
                  <p className="text-xl text-ivory/80 font-light">
                    {stage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FromSoilToSurface;
