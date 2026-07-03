import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Star } from 'lucide-react';
import './GridMotion.css';
import './GridMotion.css';

const GridMotion = ({ items = [], gradientColor = 'black' }) => {
  const gridRef = useRef(null);
  const rowRefs = useRef([]);
  const mouseXRef = useRef(window.innerWidth / 2);

  const totalItems = 28;
  const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);
  
  let combinedItems = defaultItems;
  if (items.length > 0) {
    combinedItems = Array.from({ length: totalItems }, (_, index) => items[index % items.length]);
  }

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = e => {
      mouseXRef.current = e.clientX;
    };

    const handleTouchMove = e => {
      if (e.touches.length > 0) {
        mouseXRef.current = e.touches[0].clientX;
      }
    };

    const updateMotion = () => {
      if (!isVisible) return; // Skip GSAP calculations when off-screen
      
      const maxMoveAmount = 300;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const moveAmount = ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) * direction;

          gsap.to(row, {
            x: moveAmount,
            duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: 'power3.out',
            overwrite: 'auto'
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      removeAnimationLoop();
    };
  }, [isVisible]);

  return (
    <div className="noscroll loading" ref={gridRef}>
      <section
        className="intro"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`
        }}
      >
        <div className="gridMotion-container">
          {[...Array(4)].map((_, rowIndex) => (
            <div key={rowIndex} className="row" ref={el => (rowRefs.current[rowIndex] = el)}>
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];
                
                // Fallback for default string items if reviews aren't loaded yet
                if (typeof content === 'string') {
                  return (
                    <div key={itemIndex} className="row__item">
                      <div className="row__item-inner" style={{ backgroundColor: '#111' }}>
                        <div className="row__item-content">{content}</div>
                      </div>
                    </div>
                  );
                }

                // If it's a Review object
                return (
                  <div key={itemIndex} className="row__item">
                    <div className="row__item-inner review-card group">
                      
                      {/* Top Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <img 
                          src={content.avatar} 
                          alt={content.name} 
                          className="w-10 h-10 rounded-full border border-border" 
                          loading="lazy"
                        />
                        <div className="flex flex-col text-left">
                          <span className="text-sm font-medium text-foreground">{content.name}</span>
                          <span className="text-xs text-muted-foreground">{content.role} {content.company === "" ? "" : `at ${content.company}`}</span>
                        </div>
                      </div>

                      {/* Middle: Review Text */}
                      <div className="text-sm text-muted-foreground leading-relaxed text-left flex-grow mb-4 font-sans line-clamp-4">
                        "{content.review}"
                      </div>

                      {/* Bottom: Stars */}
                      <div className="flex items-center gap-1 mt-auto">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={i < content.rating ? "text-amber-400 fill-amber-400" : "text-muted"} 
                          />
                        ))}
                      </div>

                      {/* Hover glow effect */}
                      <div className="absolute inset-0 border border-border/50 rounded-xl group-hover:border-primary/50 transition-colors duration-500 pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="fullview"></div>
      </section>
    </div>
  );
};

export default GridMotion;
