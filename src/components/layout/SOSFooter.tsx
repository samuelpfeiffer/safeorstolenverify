import React from 'react';
import { Link } from 'react-router-dom';

export const SOSFooter: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-sos-dark border-t border-sos-orange/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png"
              alt="Safe or Stolen logo"
              className="w-8 h-8 rounded-md"
            />
            <div>
              <p className="text-white font-semibold">safeorstolen.com</p>
              <p className="text-gray-400 text-sm">© {year} All rights reserved</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-gray-400 text-sm">Accelerated By</p>
              <a
                href="https://fastercapital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sos-orange transition-colors"
                title="FasterCapital - Accelerating our mission"
                aria-label="Visit FasterCapital website"
              >
                <span className="fc-gradient-text font-semibold">FasterCapital</span>
              </a>
            </div>
            <img
              src="/images/partners/fastercapital-logo.png"
              alt="FasterCapital official logo"
              className="w-14 h-14 object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-6 text-center md:text-left">
          <Link to="/privacy" className="text-xs text-gray-500 hover:text-gray-300 mr-4">Privacy</Link>
          <Link to="/terms" className="text-xs text-gray-500 hover:text-gray-300 mr-4">Terms</Link>
          <Link to="/contact" className="text-xs text-gray-500 hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </footer>
  );
};
