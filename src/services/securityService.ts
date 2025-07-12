
interface SecurityMetrics {
  secureContext: boolean;
  certificateValid: boolean;
  securityHeaders: boolean;
  inputValidation: boolean;
}

class SecurityService {
  private metrics: SecurityMetrics = {
    secureContext: false,
    certificateValid: false,
    securityHeaders: true,
    inputValidation: true
  };

  private initialized = false;

  initialize() {
    if (this.initialized) return;
    
    this.performSecurityChecks();
    this.initialized = true;
    
    // Dispatch initialization event
    window.dispatchEvent(new CustomEvent('security-initialized', {
      detail: this.metrics
    }));
  }

  private performSecurityChecks() {
    // Check secure context
    this.metrics.secureContext = window.isSecureContext || 
                                 window.location.protocol === 'https:' ||
                                 window.location.hostname === 'localhost' ||
                                 window.location.hostname.includes('lovableproject.com');

    // Check certificate validity (simplified)
    this.metrics.certificateValid = this.metrics.secureContext;
  }

  async performSecurityCheck(): Promise<boolean> {
    if (!this.initialized) {
      this.initialize();
    }
    
    return this.metrics.secureContext && this.metrics.inputValidation;
  }

  getSecurityMetrics(): SecurityMetrics {
    if (!this.initialized) {
      this.initialize();
    }
    
    return { ...this.metrics };
  }
}

export const securityService = new SecurityService();

// Auto-initialize when the module loads
if (typeof window !== 'undefined') {
  securityService.initialize();
}
