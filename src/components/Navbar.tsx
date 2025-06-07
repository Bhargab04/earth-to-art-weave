
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    { name: 'Home', href: '/' },
    { name: 'Story', href: '#story' },
    { name: 'Collections', href: '/collections' },
    { name: 'Canvas', href: '/canvas' },
    { name: 'Collaborations', href: '/collaborations' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-playfair text-2xl font-bold text-ivory hover:text-gold transition-colors">
          Graphene<span className="text-gold">Arte</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            item.href.startsWith('/') ? (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-ivory font-inter font-medium hover-nav-link transition-colors ${
                  location.pathname === item.href ? 'text-gold' : ''
                }`}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="relative text-ivory font-inter font-medium hover-nav-link"
              >
                {item.name}
              </a>
            )
          ))}
        </div>

        {/* Auth Buttons & CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="text-ivory hover:text-gold border border-ivory/30 hover:border-gold/30">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-gold hover:bg-gold/90 text-charcoal font-medium">
              Sign Up
            </Button>
          </Link>
          <Button className="glassmorphism-btn bg-transparent border border-gold/30 text-ivory hover:shadow-gold backdrop-blur-md ml-4">
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
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-ivory font-inter font-medium py-2 hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-ivory font-inter font-medium py-2 hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
            <div className="pt-4 space-y-3 border-t border-gold/20">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full text-ivory border border-ivory/30">
                  Login
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-gold hover:bg-gold/90 text-charcoal font-medium">
                  Sign Up
                </Button>
              </Link>
              <Button className="w-full glassmorphism-btn bg-transparent border border-gold/30 text-ivory hover:shadow-gold backdrop-blur-md">
                Book Design Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
