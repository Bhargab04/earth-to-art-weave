
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

gsap.registerPlugin(ScrollTrigger);

const ContactCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !particlesRef.current) return;

    // Floating particles animation
    gsap.set(".particle", {
      opacity: 0.3,
      scale: gsap.utils.random(0.5, 1),
    });

    gsap.to(".particle", {
      y: -100,
      opacity: 0,
      duration: gsap.utils.random(3, 6),
      ease: "power1.out",
      stagger: {
        amount: 3,
        repeat: -1,
      }
    });

    // Form fade-in animation
    gsap.fromTo(".contact-form", {
      opacity: 0,
      x: 50
    }, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gradient-to-br from-charcoal via-charcoal to-forest relative overflow-hidden">
      {/* Animated Background Particles */}
      <div ref={particlesRef} className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-gold/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 20}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-ivory">
              Let's Bring It to <span className="text-gold">Life</span>
            </h2>
            <p className="text-xl text-ivory/80 leading-relaxed">
              Transform your vision into reality with our expert design consultation. 
              From concept to completion, we'll guide you through every brushstroke.
            </p>
            
            {/* Embedded Map Placeholder */}
            <div className="aspect-video rounded-lg overflow-hidden bg-ivory/10 border border-gold/20">
              <div className="w-full h-full bg-gradient-to-br from-graphene to-charcoal flex items-center justify-center">
                <p className="text-ivory/60 font-inter">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="contact-form bg-ivory/5 backdrop-blur-md border border-gold/20 rounded-lg p-8">
            <h3 className="font-playfair text-2xl font-bold text-ivory mb-6">
              Start Your Project
            </h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-ivory/80 font-inter mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-ivory/10 border border-gold/30 rounded-lg px-4 py-3 text-ivory placeholder-ivory/50 focus:border-gold focus:outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-ivory/80 font-inter mb-2">Project Type</label>
                <Select>
                  <SelectTrigger className="w-full bg-ivory/10 border-gold/30 text-ivory">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="hospitality">Hospitality</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="office">Office Space</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-ivory/80 font-inter mb-2">Location</label>
                <input
                  type="text"
                  className="w-full bg-ivory/10 border border-gold/30 rounded-lg px-4 py-3 text-ivory placeholder-ivory/50 focus:border-gold focus:outline-none"
                  placeholder="City, Country"
                />
              </div>

              <div>
                <label className="block text-ivory/80 font-inter mb-2">Estimated Budget</label>
                <Select>
                  <SelectTrigger className="w-full bg-ivory/10 border-gold/30 text-ivory">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="100k+">$100,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full bg-gold hover:bg-gold/90 text-charcoal font-medium py-4 text-lg">
                Book Design Consultation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
