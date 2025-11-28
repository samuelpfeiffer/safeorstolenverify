import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingElement {
  id: string;
  element: HTMLElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
}

export const AntigravityEffect: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    if (!isActive) return;

    const elementsToFloat: FloatingElement[] = [];
    
    // Select elements to make float
    const selectors = [
      'nav', 'button', 'a', 'h1', 'h2', 'h3', 'img', 
      '.card', '.badge', 'input', 'label'
    ];
    
    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el, index) => {
        if (el instanceof HTMLElement && 
            !el.closest('[data-no-antigravity]') &&
            el.offsetParent !== null) {
          
          const rect = el.getBoundingClientRect();
          
          elementsToFloat.push({
            id: `${selector}-${index}`,
            element: el,
            x: rect.left,
            y: rect.top,
            vx: (Math.random() - 0.5) * 3,
            vy: (Math.random() - 0.5) * 3 - 1, // Slight upward bias
            rotation: 0,
            rotationSpeed: (Math.random() - 0.5) * 2
          });
          
          // Apply initial floating styles
          el.style.position = 'fixed';
          el.style.left = `${rect.left}px`;
          el.style.top = `${rect.top}px`;
          el.style.margin = '0';
          el.style.zIndex = '9999';
          el.style.transition = 'none';
        }
      });
    });

    setFloatingElements(elementsToFloat);

    // Animation loop
    let animationId: number;
    const animate = () => {
      elementsToFloat.forEach(item => {
        // Update position
        item.x += item.vx;
        item.y += item.vy;
        item.rotation += item.rotationSpeed;
        
        // Bounce off edges
        if (item.x <= 0 || item.x >= window.innerWidth - item.element.offsetWidth) {
          item.vx *= -0.8;
          item.x = Math.max(0, Math.min(item.x, window.innerWidth - item.element.offsetWidth));
        }
        if (item.y <= 0 || item.y >= window.innerHeight - item.element.offsetHeight) {
          item.vy *= -0.8;
          item.y = Math.max(0, Math.min(item.y, window.innerHeight - item.element.offsetHeight));
        }
        
        // Apply transform
        item.element.style.transform = `translate(0, 0) rotate(${item.rotation}deg)`;
        item.element.style.left = `${item.x}px`;
        item.element.style.top = `${item.y}px`;
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationId);
      elementsToFloat.forEach(item => {
        item.element.style.position = '';
        item.element.style.left = '';
        item.element.style.top = '';
        item.element.style.margin = '';
        item.element.style.zIndex = '';
        item.element.style.transform = '';
        item.element.style.transition = '';
      });
    };
  }, [isActive]);

  const handleToggle = () => {
    if (isActive) {
      // Reload page to reset
      window.location.reload();
    } else {
      setIsActive(true);
    }
  };

  return (
    <div 
      data-no-antigravity 
      className="fixed bottom-4 left-4 z-[10000]"
    >
      <Button
        onClick={handleToggle}
        variant={isActive ? "destructive" : "default"}
        className="shadow-lg"
      >
        <Sparkles className="mr-2 h-4 w-4" />
        {isActive ? 'Reset Page' : 'Antigravity Mode'}
      </Button>
    </div>
  );
};
