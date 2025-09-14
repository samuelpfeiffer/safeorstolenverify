import React, { createContext, useContext, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  enabled: boolean;
}

interface Translation {
  [key: string]: string;
}

interface Translations {
  [languageCode: string]: Translation;
}

interface I18nContextType {
  currentLanguage: string;
  setLanguage: (code: string) => void;
  t: (key: string, defaultValue?: string) => string;
  availableLanguages: Language[];
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Initial language support - can be expanded
const supportedLanguages: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    enabled: true
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    enabled: true
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    enabled: true
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    enabled: false // Coming soon
  },
  {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    flag: '🇵🇹',
    enabled: false // Coming soon
  }
];

// Base translations - in production, these would be loaded from files
const translations: Translations = {
  en: {
    'site.title': 'SafeOrStolen - Verify Before You Buy',
    'site.description': 'Instantly verify if phones, cars, electronics are stolen before buying secondhand.',
    'nav.verify': 'Verify Item',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.security': 'Security',
    'hero.title': 'Don\'t Buy Stolen Goods',
    'hero.subtitle': 'Verify IMEI, VIN, and serial numbers instantly',
    'hero.cta': 'Start Free Verification',
    'form.serialNumber': 'Serial Number',
    'form.itemType': 'Item Type',
    'form.verify': 'Verify Now',
    'results.safe': 'Safe to Purchase',
    'results.stolen': 'Reported Stolen',
    'results.unknown': 'No Records Found',
    'footer.security': 'Bank-level Security',
    'footer.databases': '25+ Official Databases',
    'common.loading': 'Loading...',
    'common.error': 'Something went wrong',
    'language.select': 'Select Language',
    'language.comingSoon': 'Coming Soon'
  },
  es: {
    'site.title': 'SafeOrStolen - Verificar Antes de Comprar',
    'site.description': 'Verifique instantáneamente si teléfonos, autos, electrónicos son robados antes de comprar de segunda mano.',
    'nav.verify': 'Verificar Artículo',
    'nav.pricing': 'Precios',
    'nav.about': 'Acerca de',
    'nav.security': 'Seguridad',
    'hero.title': 'No Compres Productos Robados',
    'hero.subtitle': 'Verifica IMEI, VIN y números de serie al instante',
    'hero.cta': 'Comenzar Verificación Gratuita',
    'form.serialNumber': 'Número de Serie',
    'form.itemType': 'Tipo de Artículo',
    'form.verify': 'Verificar Ahora',
    'results.safe': 'Seguro para Comprar',
    'results.stolen': 'Reportado como Robado',
    'results.unknown': 'No se Encontraron Registros',
    'footer.security': 'Seguridad de Nivel Bancario',
    'footer.databases': '25+ Bases de Datos Oficiales',
    'common.loading': 'Cargando...',
    'common.error': 'Algo salió mal',
    'language.select': 'Seleccionar Idioma',
    'language.comingSoon': 'Próximamente'
  },
  fr: {
    'site.title': 'SafeOrStolen - Vérifiez Avant d\'Acheter',
    'site.description': 'Vérifiez instantanément si les téléphones, voitures, électroniques sont volés avant d\'acheter d\'occasion.',
    'nav.verify': 'Vérifier l\'Article',
    'nav.pricing': 'Tarifs',
    'nav.about': 'À Propos',
    'nav.security': 'Sécurité',
    'hero.title': 'N\'Achetez Pas d\'Objets Volés',
    'hero.subtitle': 'Vérifiez les numéros IMEI, VIN et de série instantanément',
    'hero.cta': 'Commencer la Vérification Gratuite',
    'form.serialNumber': 'Numéro de Série',
    'form.itemType': 'Type d\'Article',
    'form.verify': 'Vérifier Maintenant',
    'results.safe': 'Sûr à Acheter',
    'results.stolen': 'Signalé comme Volé',
    'results.unknown': 'Aucun Enregistrement Trouvé',
    'footer.security': 'Sécurité de Niveau Bancaire',
    'footer.databases': '25+ Bases de Données Officielles',
    'common.loading': 'Chargement...',
    'common.error': 'Quelque chose s\'est mal passé',
    'language.select': 'Sélectionner la Langue',
    'language.comingSoon': 'Bientôt Disponible'
  }
};

// I18n Provider Component
export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    // Load saved language preference or detect browser language
    const savedLanguage = localStorage.getItem('safeorstolen_language');
    const browserLanguage = navigator.language.split('-')[0];
    
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    } else if (translations[browserLanguage]) {
      setCurrentLanguage(browserLanguage);
    }
  }, []);

  const setLanguage = (code: string) => {
    setCurrentLanguage(code);
    localStorage.setItem('safeorstolen_language', code);
    
    // Update document language
    document.documentElement.lang = code;
    
    // Update page title if available
    const titleKey = 'site.title';
    if (translations[code]?.[titleKey]) {
      document.title = translations[code][titleKey];
    }
  };

  const t = (key: string, defaultValue?: string): string => {
    return translations[currentLanguage]?.[key] || 
           translations['en']?.[key] || 
           defaultValue || 
           key;
  };

  const availableLanguages = supportedLanguages;

  return (
    <I18nContext.Provider value={{ 
      currentLanguage, 
      setLanguage, 
      t, 
      availableLanguages 
    }}>
      {children}
    </I18nContext.Provider>
  );
};

// Hook to use i18n
export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};

// Language Selector Component
export const LanguageSelector: React.FC<{ 
  variant?: 'dropdown' | 'inline';
  className?: string;
}> = ({ variant = 'dropdown', className = '' }) => {
  const { currentLanguage, setLanguage, availableLanguages } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = availableLanguages.find(lang => lang.code === currentLanguage);
  const enabledLanguages = availableLanguages.filter(lang => lang.enabled);
  const comingSoonLanguages = availableLanguages.filter(lang => !lang.enabled);

  if (variant === 'inline') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Globe className="h-4 w-4 text-muted-foreground" />
        <div className="flex gap-1">
          {enabledLanguages.map((lang) => (
            <Button
              key={lang.code}
              variant={currentLanguage === lang.code ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage(lang.code)}
              className="h-6 px-2"
            >
              <span className="mr-1">{lang.flag}</span>
              <span className="text-xs">{lang.code.toUpperCase()}</span>
            </Button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLang?.flag}</span>
        <span className="text-xs">{currentLang?.code.toUpperCase()}</span>
        <ChevronDown className="h-3 w-3" />
      </Button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-background border rounded-lg shadow-lg z-50">
            <div className="p-2">
              <div className="text-xs font-medium text-muted-foreground mb-2 px-2">
                Available Languages
              </div>
              
              {enabledLanguages.map((lang) => (
                <Button
                  key={lang.code}
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full justify-start h-8 ${
                    currentLanguage === lang.code ? 'bg-primary/10' : ''
                  }`}
                >
                  <span className="mr-2">{lang.flag}</span>
                  <span className="flex-1 text-left">{lang.nativeName}</span>
                  {currentLanguage === lang.code && (
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  )}
                </Button>
              ))}

              {comingSoonLanguages.length > 0 && (
                <>
                  <div className="border-t my-2" />
                  <div className="text-xs font-medium text-muted-foreground mb-2 px-2">
                    Coming Soon
                  </div>
                  
                  {comingSoonLanguages.map((lang) => (
                    <div
                      key={lang.code}
                      className="flex items-center justify-between px-2 py-1 text-sm text-muted-foreground"
                    >
                      <div className="flex items-center">
                        <span className="mr-2 grayscale">{lang.flag}</span>
                        <span>{lang.nativeName}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Soon
                      </Badge>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Text component with translation
export const T: React.FC<{ 
  k: string; 
  fallback?: string;
  className?: string;
  children?: React.ReactNode;
}> = ({ k, fallback, className, children }) => {
  const { t } = useI18n();
  
  return (
    <span className={className}>
      {t(k, fallback || children?.toString())}
    </span>
  );
};

// Utility function for programmatic translation
export const translate = (key: string, language: string = 'en', fallback?: string): string => {
  return translations[language]?.[key] || 
         translations['en']?.[key] || 
         fallback || 
         key;
};