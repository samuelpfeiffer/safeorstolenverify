import { useEffect, useRef } from 'react';

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  region?: string;
  target?: string;
  className?: string;
  onFormSubmit?: (data: any) => void;
}

declare global {
  interface Window {
    hbspt: any;
  }
}

export const HubSpotForm = ({ 
  portalId = 'YOUR_PORTAL_ID', 
  formId = 'YOUR_FORM_ID',
  region = 'na1',
  target,
  className = '',
  onFormSubmit
}: HubSpotFormProps) => {
  const formRef = useRef<HTMLDivElement>(null);
  const targetId = target || `hubspot-form-${formId}`;

  useEffect(() => {
    // Load HubSpot forms script if not already loaded
    if (!window.hbspt) {
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/v2.js';
      script.async = true;
      document.head.appendChild(script);
      
      script.onload = () => {
        createForm();
      };
    } else {
      createForm();
    }

    function createForm() {
      if (window.hbspt && window.hbspt.forms) {
        window.hbspt.forms.create({
          region,
          portalId,
          formId,
          target: `#${targetId}`,
          onFormSubmit: (form: any) => {
            console.log('HubSpot form submitted:', form);
            if (onFormSubmit) {
              onFormSubmit(form);
            }
          }
        });
      }
    }
  }, [portalId, formId, region, targetId, onFormSubmit]);

  return (
    <div 
      id={targetId}
      ref={formRef}
      className={`hubspot-form ${className}`}
    />
  );
};