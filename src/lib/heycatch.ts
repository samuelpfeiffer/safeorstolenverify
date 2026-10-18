import { analytics } from '@heycatch/sdk';

analytics.init({
  projectKey: 'hck_pk_xZyapiclJn2KkAqLo77uOsGXrhcBmE3j',
  install: {
    framework: 'vite-react',
    frameworkVersion: '19',
    agent: 'other',
  },
});

export { analytics };
