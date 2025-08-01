/**
 * Safe mobile optimization manager that runs after DOM is ready
 * Uses direct DOM manipulation to avoid React hook timing issues
 */
export class MobileSetupManager {
  private static instance: MobileSetupManager | null = null;
  private isInitialized = false;
  private isMobile = false;

  private constructor() {
    this.detectMobile();
  }

  public static getInstance(): MobileSetupManager {
    if (!MobileSetupManager.instance) {
      MobileSetupManager.instance = new MobileSetupManager();
    }
    return MobileSetupManager.instance;
  }

  private detectMobile(): void {
    if (typeof window === 'undefined') return;
    this.isMobile = window.innerWidth < 768;
    
    // Listen for resize events
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
    }, { passive: true });
  }

  public async initialize(): Promise<void> {
    if (this.isInitialized || typeof window === 'undefined') return;

    // Wait for DOM to be fully ready
    await this.waitForDOM();
    
    if (this.isMobile) {
      this.applyMobileOptimizations();
      this.setupInputOptimizations();
      this.setupPerformanceOptimizations();
    }

    this.isInitialized = true;
  }

  private waitForDOM(): Promise<void> {
    return new Promise((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', () => resolve(), { once: true });
      }
    });
  }

  private applyMobileOptimizations(): void {
    // Prevent zoom on double tap
    let lastTouchEnd = 0;
    const preventDoubleTabZoom = (event: TouchEvent) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    };

    // Improve scroll performance
    document.body.style.overscrollBehavior = 'contain';
    document.body.style.touchAction = 'pan-y';
    document.body.classList.add('mobile-optimized');
    (document.body.style as any).webkitTapHighlightColor = 'transparent';

    // Prevent zoom on input focus (iOS Safari)
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }

    document.addEventListener('touchend', preventDoubleTabZoom, { passive: false });
  }

  private setupInputOptimizations(): void {
    const optimizeInputs = () => {
      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach((input) => {
        const element = input as HTMLInputElement | HTMLTextAreaElement;
        
        // Prevent zoom on focus for iOS
        element.style.fontSize = Math.max(16, parseInt(getComputedStyle(element).fontSize)) + 'px';
        
        // Set appropriate input modes for specific inputs
        if (element.type === 'text' && (
          element.placeholder?.toLowerCase().includes('serial') ||
          element.placeholder?.toLowerCase().includes('imei') ||
          element.placeholder?.toLowerCase().includes('vin')
        )) {
          element.setAttribute('inputmode', 'text');
          element.setAttribute('autocapitalize', 'characters');
        }

        // Ensure minimum touch target size
        const minHeight = 44;
        const currentHeight = element.offsetHeight;
        if (currentHeight < minHeight) {
          element.style.minHeight = `${minHeight}px`;
        }
      });

      // Optimize buttons
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button) => {
        const minHeight = 44;
        const currentHeight = button.offsetHeight;
        if (currentHeight < minHeight) {
          button.style.minHeight = `${minHeight}px`;
        }
      });
    };

    // Initial optimization
    optimizeInputs();

    // Re-optimize when new elements are added
    const observer = new MutationObserver(() => {
      optimizeInputs();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  private setupPerformanceOptimizations(): void {
    // Reduce animation duration for mobile
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        * {
          animation-duration: 0.15s !important;
          transition-duration: 0.15s !important;
        }
        
        .scroll-smooth {
          scroll-behavior: auto;
        }
      }
    `;
    document.head.appendChild(style);

    // Optimize image loading
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });

    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.style.setProperty('animation-duration', '0.01ms', 'important');
      document.body.style.setProperty('animation-iteration-count', '1', 'important');
      document.body.style.setProperty('transition-duration', '0.01ms', 'important');
    }

    // Mobile-specific optimizations
    const handleVisibilityChange = () => {
      if (document.hidden) {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => video.pause());
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
  }
}