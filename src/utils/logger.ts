// Production-ready logging utility
// NO console.log in production - optimized for performance and security

interface LogLevel {
  ERROR: 'error';
  WARN: 'warn';
  INFO: 'info';
  DEBUG: 'debug';
}

const LOG_LEVELS: LogLevel = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug'
};

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';

  error(message: string, data?: any) {
    // Always log errors but without sensitive data in production
    if (this.isDevelopment) {
      console.error(`[ERROR] ${message}`, data);
    } else {
      // In production, only log to external monitoring service
      this.reportError(message, data);
    }
  }

  warn(message: string, data?: any) {
    if (this.isDevelopment) {
      console.warn(`[WARN] ${message}`, data);
    }
  }

  info(message: string, data?: any) {
    if (this.isDevelopment) {
      console.info(`[INFO] ${message}`, data);
    }
  }

  debug(message: string, data?: any) {
    if (this.isDevelopment) {
      console.debug(`[DEBUG] ${message}`, data);
    }
  }

  // For production analytics/monitoring
  track(event: string, properties?: Record<string, any>) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, properties);
    }
  }

  // Secure logging method that doesn't expose sensitive data
  secureLog(message: string, safeData?: Record<string, any>) {
    if (this.isDevelopment) {
      console.log(`[SECURE] ${message}`, safeData);
    }
  }

  private reportError(message: string, data?: any) {
    // In production, send to monitoring service (Sentry, LogRocket, etc.)
    // For now, just prevent console spam
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: message,
        fatal: false
      });
    }
  }
}

export const logger = new Logger();