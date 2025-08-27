// Production-safe console logger that removes logs in production

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
  private isDevelopment = import.meta.env.DEV;

  error(message: string, ...args: any[]) {
    if (this.isDevelopment) {
      console.error(`[SafeOrStolen] ERROR: ${message}`, ...args);
    }
  }

  warn(message: string, ...args: any[]) {
    if (this.isDevelopment) {
      console.warn(`[SafeOrStolen] WARN: ${message}`, ...args);
    }
  }

  info(message: string, ...args: any[]) {
    if (this.isDevelopment) {
      console.info(`[SafeOrStolen] INFO: ${message}`, ...args);
    }
  }

  debug(message: string, ...args: any[]) {
    if (this.isDevelopment) {
      console.log(`[SafeOrStolen] DEBUG: ${message}`, ...args);
    }
  }

  // Performance logging
  performance(label: string, fn: () => void) {
    if (this.isDevelopment && 'performance' in window) {
      const start = performance.now();
      fn();
      const end = performance.now();
      console.log(`[SafeOrStolen] PERFORMANCE: ${label} took ${(end - start).toFixed(2)}ms`);
    } else {
      fn();
    }
  }

  // API request logging
  apiRequest(method: string, url: string, data?: any) {
    if (this.isDevelopment) {
      console.group(`[SafeOrStolen] API ${method.toUpperCase()}: ${url}`);
      if (data) console.log('Request data:', data);
      console.groupEnd();
    }
  }

  apiResponse(method: string, url: string, status: number, data?: any) {
    if (this.isDevelopment) {
      const statusColor = status >= 400 ? 'error' : status >= 300 ? 'warn' : 'info';
      console.group(`[SafeOrStolen] API Response ${method.toUpperCase()}: ${url} (${status})`);
      console[statusColor](`Status: ${status}`);
      if (data) console.log('Response data:', data);
      console.groupEnd();
    }
  }
}

export const logger = new Logger();

// Global error handler for unhandled errors
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    logger.error('Unhandled error:', event.error);
  });

  window.addEventListener('unhandledrejection', (event) => {
    logger.error('Unhandled promise rejection:', event.reason);
  });
}