
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface Collection {
  name: string;
  description: string;
  image: string;
  colors: string[];
  origin: string;
  featured: boolean;
}

const PaintCollections = () => {
  const [hoveredCollection, setHoveredCollection] = useState<number | null>(null);

  const collections: Collection[] = [
    {
      name: "Himalayan Mist",
      description: "Ethereal greys and blues inspired by mountain fog",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
      colors: ["#E8E9EA", "#C5C7C9", "#9B9FA3", "#6B747C"],
      origin: "Nepal • Tibet",
      featured: true
    },
    {
      name: "Sahara Gold",
      description: "Warm ochres and rich golds from ancient dunes",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=800&auto=format&fit=crop",
      colors: ["#F4E4B8", "#E6B800", "#CC9900", "#B8860B"],
      origin: "Morocco • Algeria",
      featured: false
    },
    {
      name: "Amazon Verdant",
      description: "Deep greens and earth tones from the rainforest",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=800&auto=format&fit=crop",
      colors: ["#4A6741", "#2D4A2B", "#1A3318", "#0F1F0D"],
      origin: "Brazil • Peru",
      featured: true
    },
    {
      name: "Mediterranean Clay",
      description: "Terracotta and limestone from coastal quarries",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=800&auto=format&fit=crop",
      colors: ["#D2B48C", "#BC9A6A", "#A0864C", "#8B7355"],
      origin: "Italy • Greece",
      featured: false
    },
    {
      name: "Arctic Mineral",
      description: "Cool whites and subtle blues from glacier sediment",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
      colors: ["#F8F9FA", "#E9ECEF", "#DEE2E6", "#CED4DA"],
      origin: "Iceland • Norway",
      featured: true
    },
    {
      name: "Volcanic Obsidian",
      description: "Deep charcoals and rich blacks from volcanic ash",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800&auto=format&fit=crop",
      colors: ["#2C2C2C", "#1A1A1A", "#0D0D0D", "#000000"],
      origin: "Hawaii • Japan",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-ivory via-graphene/5 to-charcoal/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Crafted <span className="text-gradient-gold">Collections</span>
          </h2>
          <p className="text-xl text-graphene/80 max-w-3xl mx-auto font-light">
            Each collection tells a story of place, captured in pigment and perfected through science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div
              key={collection.name}
              className="group relative"
              onMouseEnter={() => setHoveredCollection(index)}
              onMouseLeave={() => setHoveredCollection(null)}
            >
              {/* Featured badge */}
              {collection.featured && (
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-gold text-charcoal text-sm font-medium rounded-full">
                  Featured
                </div>
              )}

              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6 hover-lift">
                {/* Background image */}
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                
                {/* Content overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="text-ivory">
                    <h3 className="font-playfair text-2xl font-bold mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-ivory/80 text-sm mb-3">
                      {collection.description}
                    </p>
                    <p className="text-gold text-xs font-medium mb-4">
                      {collection.origin}
                    </p>
                    
                    {/* Color swatches */}
                    <div className="flex gap-2 mb-4">
                      {collection.colors.map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          className="w-6 h-6 rounded-full border-2 border-ivory/20 transition-all duration-300 hover:scale-110"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    
                    {/* Action buttons */}
                    <div className={`transition-all duration-300 ${
                      hoveredCollection === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="bg-gold hover:bg-gold/90 text-charcoal flex-1"
                        >
                          View Collection
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-ivory text-ivory hover:bg-ivory hover:text-charcoal flex-1"
                        >
                          Request Sample
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-charcoal hover:bg-charcoal/90 text-ivory px-8 py-4"
          >
            Explore All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PaintCollections;
