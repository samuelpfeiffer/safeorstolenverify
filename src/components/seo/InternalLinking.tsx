import React from 'react';
import { Link } from '@/lib/router-compat';

interface InternalLinkingProps {
  currentPage: string;
}

export const InternalLinking: React.FC<InternalLinkingProps> = ({ currentPage }) => {
  const getRelevantLinks = () => {
    const baseLinks = [
      { href: '/', text: 'Home - Check if Stolen', rel: 'home' },
      { href: '/how-it-works', text: 'How Verification Works', rel: 'help' },
      { href: '/faq', text: 'FAQ - Common Questions', rel: 'help' },
    ];

    switch (currentPage) {
      case 'check-phone':
        return [
          ...baseLinks,
          { href: '/check-car', text: 'Check if Car is Stolen', rel: 'related' },
          { href: '/check-electronics', text: 'Check Electronics', rel: 'related' },
          { href: '/check-bike', text: 'Check Bicycle', rel: 'related' },
        ];
      case 'check-car':
        return [
          ...baseLinks,
          { href: '/check-phone', text: 'Check if Phone is Stolen', rel: 'related' },
          { href: '/check-electronics', text: 'Check Electronics', rel: 'related' },
          { href: '/check-bike', text: 'Check Bicycle', rel: 'related' },
        ];
      case 'check-electronics':
        return [
          ...baseLinks,
          { href: '/check-phone', text: 'Check if Phone is Stolen', rel: 'related' },
          { href: '/check-car', text: 'Check if Car is Stolen', rel: 'related' },
          { href: '/check-bike', text: 'Check Bicycle', rel: 'related' },
        ];
      case 'check-bike':
        return [
          ...baseLinks,
          { href: '/check-phone', text: 'Check if Phone is Stolen', rel: 'related' },
          { href: '/check-car', text: 'Check if Car is Stolen', rel: 'related' },
          { href: '/check-electronics', text: 'Check Electronics', rel: 'related' },
        ];
      default:
        return [
          ...baseLinks,
          { href: '/check-phone', text: 'Check if Phone is Stolen - IMEI Lookup', rel: 'related' },
          { href: '/check-car', text: 'Check if Car is Stolen - VIN Lookup', rel: 'related' },
          { href: '/check-electronics', text: 'Check Electronics - Serial Number', rel: 'related' },
          { href: '/check-bike', text: 'Check if Bike is Stolen', rel: 'related' },
        ];
    }
  };

  const links = getRelevantLinks();

  return (
    <div className="hidden">
      {/* Hidden internal linking for SEO */}
      {links.map((link, index) => (
        <Link 
          key={index}
          to={link.href}
          rel={link.rel}
          className="sr-only"
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
};