
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    
    ScrollTrigger.create({
      start: "top -80",
      end: 99999,
      onUpdate: (self) => {
        setIsScrolled(self.progress > 0);
      }
    });

    // Navbar background transition
    gsap.to(navbar, {
      backgroundColor: isScrolled ? 'rgba(29, 29, 29, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      duration: 0.3,
      ease: "power2.out"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isScrolled]);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Story', href: '#story' },
    { name: 'Collections', href: '#collections' },
    { name: 'Canvas', href: '#canvas' },
    { name: 'Collaborations', href: '#collaborations' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="font-playfair text-2xl font-bold text-ivory">
          Graphene<span className="text-gold">Arte</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-ivory font-inter font-medium hover-nav-link"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button className="glassmorphism-btn bg-transparent border border-gold/30 text-ivory hover:shadow-gold backdrop-blur-md">
            Book Design Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-ivory"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-charcoal/95 backdrop-blur-md border-t border-gold/20">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-ivory font-inter font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full glassmorphism-btn bg-transparent border border-gold/30 text-ivory hover:shadow-gold backdrop-blur-md mt-4">
              Book Design Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
