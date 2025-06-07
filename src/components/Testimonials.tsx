
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageSliderRef = useRef<HTMLDivElement>(null);
  const quoteSliderRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote: "This paint transformed our Parisian boutique into a living work of art. The depth and richness of the Terracotta Heritage collection is simply unmatched.",
      author: "Marie Dubois",
      title: "Principal Architect, Atelier Dubois",
      project: "Hermès Flagship Store, Paris",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
    },
    {
      quote: "The sustainability aspect combined with luxury finish makes this the only choice for conscious design. Our clients are consistently amazed.",
      author: "James Mitchell",
      title: "Interior Design Director, Mitchell & Associates",
      project: "Four Seasons Resort, Maldives",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop"
    },
    {
      quote: "Working with GrapheneArte's Forest Essence collection brought an unprecedented level of sophistication to our wellness spaces.",
      author: "Elena Rodriguez",
      title: "Senior Designer, Zen Interiors",
      project: "Luxury Spa Resort, Costa Rica",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2000&auto=format&fit=crop"
    },
    {
      quote: "The Graphene Precision finish in our tech headquarters creates an atmosphere of innovation while maintaining warmth and humanity.",
      author: "David Chen",
      title: "Creative Director, TechSpace Design",
      project: "Tesla Design Studio, California",
      image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    // Parallax sync between image and quote sliders
    let currentIndex = 0;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          const newIndex = Math.floor(self.progress * (testimonials.length - 1));
          if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            
            // Animate image transition
            gsap.to(".testimonial-image", {
              opacity: 0,
              duration: 0.3,
              onComplete: () => {
                gsap.set(".testimonial-image", { opacity: 1 });
              }
            });

            // Animate quote transition
            gsap.fromTo(".testimonial-quote", {
              opacity: 0,
              y: 30
            }, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out"
            });
          }
        }
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Designers <span className="text-gold">Speak</span>
          </h2>
          <p className="text-xl text-charcoal/80">
            Voices from the world's most prestigious design studios
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Slider */}
          <div ref={imageSliderRef} className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-image aspect-[4/3] rounded-lg overflow-hidden ${index === 0 ? 'block' : 'hidden'}`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.project}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-ivory">
                  <p className="font-inter font-medium">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote Slider */}
          <div ref={quoteSliderRef} className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-quote ${index === 0 ? 'block' : 'hidden'}`}
              >
                <div className="relative">
                  <span className="absolute -top-4 -left-4 text-6xl text-gold font-playfair">"</span>
                  <blockquote className="font-playfair text-2xl md:text-3xl text-charcoal leading-relaxed italic pl-8">
                    {testimonial.quote}
                  </blockquote>
                  <span className="absolute -bottom-8 right-0 text-6xl text-gold font-playfair">"</span>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gold/30">
                  <p className="font-inter font-semibold text-charcoal text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-charcoal/70 mt-1">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
