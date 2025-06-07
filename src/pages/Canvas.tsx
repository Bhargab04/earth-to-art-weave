
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Canvas = () => {
  const [selectedRoom, setSelectedRoom] = useState('studio');
  const [selectedCollection, setSelectedCollection] = useState('terracotta');
  const [lightMode, setLightMode] = useState('day');

  const rooms = [
    { id: 'studio', name: 'Art Studio', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop' },
    { id: 'lounge', name: 'Modern Lounge', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop' },
    { id: 'gallery', name: 'Gallery Space', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop' }
  ];

  const collections = [
    { id: 'terracotta', name: 'Terracotta Heritage', color: 'bg-terracotta' },
    { id: 'forest', name: 'Forest Essence', color: 'bg-forest' },
    { id: 'graphene', name: 'Graphene Precision', color: 'bg-graphene' },
    { id: 'gold', name: 'Antique Gold', color: 'bg-gold' }
  ];

  useEffect(() => {
    gsap.fromTo(".canvas-room", {
      opacity: 0,
      scale: 0.95
    }, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power2.out"
    });
  }, [selectedRoom]);

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-6xl md:text-8xl font-bold text-charcoal mb-6">
              Create Your <span className="text-gold">Canvas</span>
            </h1>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto mb-12">
              Visualize our premium finishes in real environments. 
              Select a space, choose your collection, and see the transformation.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <Select value={selectedRoom} onValueChange={setSelectedRoom}>
              <SelectTrigger className="w-48 bg-charcoal/5 border-gold/30">
                <SelectValue placeholder="Select Room" />
              </SelectTrigger>
              <SelectContent>
                {rooms.map((room) => (
                  <SelectItem key={room.id} value={room.id}>
                    {room.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCollection} onValueChange={setSelectedCollection}>
              <SelectTrigger className="w-48 bg-charcoal/5 border-gold/30">
                <SelectValue placeholder="Select Collection" />
              </SelectTrigger>
              <SelectContent>
                {collections.map((collection) => (
                  <SelectItem key={collection.id} value={collection.id}>
                    {collection.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex space-x-2">
              {['day', 'warm', 'ambient'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setLightMode(mode)}
                  className={`px-4 py-2 rounded capitalize transition-colors ${
                    lightMode === mode 
                      ? 'bg-gold text-charcoal' 
                      : 'bg-charcoal/10 text-charcoal hover:bg-charcoal/20'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Room Visualizer */}
          <div className="canvas-room aspect-video max-w-4xl mx-auto relative rounded-lg overflow-hidden shadow-2xl">
            <img 
              src={rooms.find(r => r.id === selectedRoom)?.image}
              alt="Room visualization"
              className={`w-full h-full object-cover transition-all duration-500 ${
                lightMode === 'day' ? 'brightness-110' : 
                lightMode === 'warm' ? 'brightness-90 contrast-110' : 
                'brightness-75 contrast-90'
              }`}
            />
            <div className={`absolute inset-0 ${collections.find(c => c.id === selectedCollection)?.color} opacity-30 mix-blend-overlay transition-all duration-500`} />
            
            {/* Overlay info */}
            <div className="absolute bottom-6 left-6 bg-charcoal/80 backdrop-blur-md p-4 rounded-lg">
              <h3 className="font-playfair text-xl text-ivory">
                {collections.find(c => c.id === selectedCollection)?.name}
              </h3>
              <p className="text-ivory/80">in {rooms.find(r => r.id === selectedRoom)?.name}</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gold hover:bg-gold/90 text-charcoal font-medium px-8 py-4 text-lg">
              Request Sample for This Collection
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Canvas;
