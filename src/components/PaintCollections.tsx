
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PaintCollections = () => {
  const [selectedTone, setSelectedTone] = useState('all');
  const [selectedTexture, setSelectedTexture] = useState('all');
  const [selectedFinish, setSelectedFinish] = useState('all');
  const [lightMode, setLightMode] = useState('day');

  const collections = [
    {
      id: 1,
      name: 'Terracotta Heritage',
      tone: 'warm',
      texture: 'matte',
      finish: 'natural',
      color: 'bg-terracotta',
      source: 'Moroccan Clay Deposits',
      description: 'Rich earthy tones sourced from ancient Moroccan clay deposits, creating a warm and inviting atmosphere.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Forest Essence',
      tone: 'cool',
      texture: 'silk',
      finish: 'premium',
      color: 'bg-forest',
      source: 'Amazon Botanical Extracts',
      description: 'Deep forest greens extracted from sustainable Amazon botanicals, bringing nature indoors.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Graphene Precision',
      tone: 'neutral',
      texture: 'metallic',
      finish: 'luxury',
      color: 'bg-graphene',
      source: 'Scandinavian Graphite Mines',
      description: 'Ultra-modern graphene-infused finish for contemporary spaces demanding precision.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'Antique Gold',
      tone: 'warm',
      texture: 'silk',
      finish: 'luxury',
      color: 'bg-gold',
      source: 'Ethiopian Gold Dust',
      description: 'Luxurious gold undertones created from ethically sourced Ethiopian mineral deposits.',
      image: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 5,
      name: 'Ivory Serenity',
      tone: 'neutral',
      texture: 'matte',
      finish: 'natural',
      color: 'bg-ivory',
      source: 'Alpine Limestone',
      description: 'Pure and serene ivory created from sustainable Alpine limestone extraction.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 6,
      name: 'Charcoal Depth',
      tone: 'cool',
      texture: 'metallic',
      finish: 'premium',
      color: 'bg-charcoal',
      source: 'Japanese Bamboo Charcoal',
      description: 'Deep, sophisticated charcoal derived from traditional Japanese bamboo charcoal processes.',
      image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=2000&auto=format&fit=crop'
    }
  ];

  const filteredCollections = collections.filter(collection => {
    return (selectedTone === 'all' || collection.tone === selectedTone) &&
           (selectedTexture === 'all' || collection.texture === selectedTexture) &&
           (selectedFinish === 'all' || collection.finish === selectedFinish);
  });

  useEffect(() => {
    gsap.fromTo(".collection-card", {
      opacity: 0,
      y: 50,
      scale: 0.9
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".collections-grid",
        start: "top 80%",
      }
    });
  }, [filteredCollections]);

  return (
    <section id="collections" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-ivory mb-6">
            Crafted <span className="text-gold">Collections</span>
          </h2>
          <p className="text-xl text-ivory/80 max-w-2xl mx-auto">
            Each collection tells a story of natural beauty and scientific precision
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Select value={selectedTone} onValueChange={setSelectedTone}>
            <SelectTrigger className="w-40 bg-ivory/10 border-gold/30 text-ivory">
              <SelectValue placeholder="Tone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Tones</SelectItem>
              <SelectItem value="warm">Warm</SelectItem>
              <SelectItem value="cool">Cool</SelectItem>
              <SelectItem value="neutral">Neutral</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedTexture} onValueChange={setSelectedTexture}>
            <SelectTrigger className="w-40 bg-ivory/10 border-gold/30 text-ivory">
              <SelectValue placeholder="Texture" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Textures</SelectItem>
              <SelectItem value="matte">Matte</SelectItem>
              <SelectItem value="silk">Silk</SelectItem>
              <SelectItem value="metallic">Metallic</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedFinish} onValueChange={setSelectedFinish}>
            <SelectTrigger className="w-40 bg-ivory/10 border-gold/30 text-ivory">
              <SelectValue placeholder="Finish" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Finishes</SelectItem>
              <SelectItem value="natural">Natural</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
              <SelectItem value="luxury">Luxury</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Collections Grid */}
        <div className="collections-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((collection) => (
            <Dialog key={collection.id}>
              <DialogTrigger asChild>
                <div className="collection-card group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg bg-ivory/5 backdrop-blur-sm border border-gold/20 hover:border-gold/40 transition-all duration-300">
                    <div className="aspect-square relative">
                      <img 
                        src={collection.image} 
                        alt={collection.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 ${collection.color} opacity-60 mix-blend-overlay`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-playfair text-xl font-bold text-ivory mb-2">
                        {collection.name}
                      </h3>
                      <p className="text-ivory/70 text-sm mb-3">
                        {collection.source}
                      </p>
                      <div className="flex space-x-2">
                        <span className="px-2 py-1 bg-gold/20 text-gold text-xs rounded">
                          {collection.tone}
                        </span>
                        <span className="px-2 py-1 bg-gold/20 text-gold text-xs rounded">
                          {collection.texture}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl bg-charcoal border-gold/30">
                <DialogHeader>
                  <DialogTitle className="font-playfair text-3xl text-ivory">
                    {collection.name}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="aspect-square relative rounded-lg overflow-hidden">
                      <img 
                        src={collection.image} 
                        alt={collection.name}
                        className={`w-full h-full object-cover ${lightMode === 'day' ? 'brightness-110' : lightMode === 'sunset' ? 'brightness-90 sepia-20' : 'brightness-75'}`}
                      />
                      <div className={`absolute inset-0 ${collection.color} opacity-60 mix-blend-overlay`} />
                    </div>
                    
                    {/* Light simulation controls */}
                    <div className="flex space-x-2">
                      {['day', 'sunset', 'indoor'].map((mode) => (
                        <button
                          key={mode}
                          onClick={() => setLightMode(mode)}
                          className={`px-3 py-2 rounded text-sm capitalize transition-colors ${
                            lightMode === mode 
                              ? 'bg-gold text-charcoal' 
                              : 'bg-ivory/10 text-ivory hover:bg-ivory/20'
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-ivory/80 text-lg leading-relaxed">
                      {collection.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-ivory/60">Source:</span>
                        <span className="text-ivory">{collection.source}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-ivory/60">Tone:</span>
                        <span className="text-ivory capitalize">{collection.tone}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-ivory/60">Texture:</span>
                        <span className="text-ivory capitalize">{collection.texture}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-ivory/60">Finish:</span>
                        <span className="text-ivory capitalize">{collection.finish}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gold hover:bg-gold/90 text-charcoal font-medium py-3">
                      Order Sample
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaintCollections;
