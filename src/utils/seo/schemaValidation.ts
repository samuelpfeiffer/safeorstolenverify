/**
 * Schema Validation Utilities
 * Helps catch common structured data errors before deployment
 */

export interface SchemaValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Validates Product schema for Google requirements
 */
export const validateProductSchema = (schema: any): SchemaValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Required fields
  if (!schema.name) errors.push('Product schema missing required field: name');
  if (!schema.image) errors.push('Product schema missing required field: image');
  if (!schema.brand) errors.push('Product schema missing required field: brand');
  
  // Offers validation
  if (!schema.offers) {
    errors.push('Product schema missing required field: offers');
  } else {
    if (!schema.offers.price) errors.push('Offer missing required field: price');
    if (!schema.offers.priceCurrency) errors.push('Offer missing required field: priceCurrency');
    if (!schema.offers.availability) warnings.push('Offer missing recommended field: availability');
    if (!schema.offers.url) warnings.push('Offer missing recommended field: url');
  }

  // Check for aggregateRating without reviews
  if (schema.aggregateRating && !schema.review) {
    warnings.push('aggregateRating provided without review markup - may cause Google Search Console warnings');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

/**
 * Validates Service schema
 */
export const validateServiceSchema = (schema: any): SchemaValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!schema.name) errors.push('Service schema missing required field: name');
  if (!schema.description) errors.push('Service schema missing required field: description');
  if (!schema.provider) errors.push('Service schema missing required field: provider');

  if (!schema.areaServed) warnings.push('Service schema missing recommended field: areaServed');
  if (!schema.serviceType) warnings.push('Service schema missing recommended field: serviceType');

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

/**
 * Validates Article schema
 */
export const validateArticleSchema = (schema: any): SchemaValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!schema.headline) errors.push('Article schema missing required field: headline');
  if (!schema.image) errors.push('Article schema missing required field: image');
  if (!schema.author) errors.push('Article schema missing required field: author');
  if (!schema.publisher) errors.push('Article schema missing required field: publisher');
  if (!schema.datePublished) errors.push('Article schema missing required field: datePublished');

  if (!schema.mainEntityOfPage) warnings.push('Article schema missing recommended field: mainEntityOfPage');

  // Validate publisher logo
  if (schema.publisher && !schema.publisher.logo) {
    errors.push('Article publisher missing required field: logo');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

/**
 * Validates canonical URL format
 */
export const validateCanonicalUrl = (url: string): SchemaValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  try {
    const parsedUrl = new URL(url);
    
    // Check protocol
    if (parsedUrl.protocol !== 'https:') {
      errors.push('Canonical URL must use HTTPS protocol');
    }

    // Check for query parameters
    if (parsedUrl.search) {
      warnings.push('Canonical URL should not contain query parameters');
    }

    // Check for hash fragments
    if (parsedUrl.hash) {
      warnings.push('Canonical URL should not contain hash fragments');
    }

    // Check for trailing slash consistency
    if (parsedUrl.pathname !== '/' && parsedUrl.pathname.endsWith('/')) {
      warnings.push('Canonical URL has trailing slash (consider removing for consistency)');
    }

    // Check for www subdomain
    if (parsedUrl.hostname.startsWith('www.')) {
      warnings.push('Canonical URL includes www subdomain (consider using non-www version)');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  } catch (error) {
    return {
      isValid: false,
      errors: ['Invalid URL format'],
      warnings: []
    };
  }
};

/**
 * Validates SoftwareApplication schema
 */
export const validateSoftwareApplicationSchema = (schema: any): SchemaValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!schema.name) errors.push('SoftwareApplication schema missing required field: name');
  if (!schema.applicationCategory) errors.push('SoftwareApplication schema missing required field: applicationCategory');
  if (!schema.operatingSystem) warnings.push('SoftwareApplication schema missing recommended field: operatingSystem');
  
  // Offers validation
  if (!schema.offers) {
    warnings.push('SoftwareApplication schema missing recommended field: offers');
  } else {
    if (!schema.offers.price) warnings.push('Offer missing recommended field: price');
    if (!schema.offers.priceCurrency) warnings.push('Offer missing recommended field: priceCurrency');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

/**
 * Validates BreadcrumbList schema
 */
export const validateBreadcrumbListSchema = (schema: any): SchemaValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!schema.itemListElement) {
    errors.push('BreadcrumbList schema missing required field: itemListElement');
  } else if (!Array.isArray(schema.itemListElement)) {
    errors.push('BreadcrumbList itemListElement must be an array');
  } else {
    schema.itemListElement.forEach((item: any, index: number) => {
      if (!item.position) errors.push(`Breadcrumb item ${index} missing required field: position`);
      if (!item.name) errors.push(`Breadcrumb item ${index} missing required field: name`);
      if (!item.item) warnings.push(`Breadcrumb item ${index} missing recommended field: item (URL)`);
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

/**
 * Validates Organization schema
 */
export const validateOrganizationSchema = (schema: any): SchemaValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Required fields
  if (!schema.name) errors.push('Organization schema missing required field: name');
  if (!schema.url) errors.push('Organization schema missing required field: url');
  
  // Check for placeholder values
  if (JSON.stringify(schema).includes('PLACEHOLDER')) {
    errors.push('Organization schema contains placeholder values that must be replaced');
  }
  
  // Recommended fields
  if (!schema.logo) warnings.push('Organization schema missing recommended field: logo');
  if (!schema.description) warnings.push('Organization schema missing recommended field: description');
  if (!schema.contactPoint) warnings.push('Organization schema missing recommended field: contactPoint');
  
  // Validate telephone format if present
  if (schema.contactPoint && Array.isArray(schema.contactPoint)) {
    schema.contactPoint.forEach((contact: any, index: number) => {
      if (contact.telephone && !/^\+\d{1,3}-\d{3}-\d{3}-\d{4}$/.test(contact.telephone)) {
        warnings.push(`Contact point ${index} has invalid telephone format (should be +1-XXX-XXX-XXXX)`);
      }
    });
  }
  
  // Validate URLs
  if (schema.sameAs && Array.isArray(schema.sameAs)) {
    schema.sameAs.forEach((url: string) => {
      try {
        new URL(url);
      } catch {
        errors.push(`Invalid social media URL: ${url}`);
      }
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

/**
 * Validates FAQPage schema
 */
export const validateFAQPageSchema = (schema: any): SchemaValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!schema.mainEntity) {
    errors.push('FAQPage schema missing required field: mainEntity');
  } else if (!Array.isArray(schema.mainEntity)) {
    errors.push('FAQPage mainEntity must be an array');
  } else {
    schema.mainEntity.forEach((item: any, index: number) => {
      if (item['@type'] !== 'Question') {
        errors.push(`FAQ item ${index} must have @type: "Question"`);
      }
      if (!item.name) errors.push(`FAQ question ${index} missing required field: name`);
      if (!item.acceptedAnswer) {
        errors.push(`FAQ question ${index} missing required field: acceptedAnswer`);
      } else {
        if (item.acceptedAnswer['@type'] !== 'Answer') {
          errors.push(`FAQ question ${index} acceptedAnswer must have @type: "Answer"`);
        }
        if (!item.acceptedAnswer.text) {
          errors.push(`FAQ question ${index} acceptedAnswer missing required field: text`);
        }
      }
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

/**
 * Validates all common schema types
 */
export const validateSchema = (schema: any): SchemaValidationResult => {
  if (!schema['@type']) {
    return {
      isValid: false,
      errors: ['Schema missing required @type field'],
      warnings: []
    };
  }

  switch (schema['@type']) {
    case 'Product':
      return validateProductSchema(schema);
    case 'Service':
      return validateServiceSchema(schema);
    case 'Article':
      return validateArticleSchema(schema);
    case 'SoftwareApplication':
      return validateSoftwareApplicationSchema(schema);
    case 'BreadcrumbList':
      return validateBreadcrumbListSchema(schema);
    case 'Organization':
    case 'Corporation':
    case 'ProfessionalService':
      return validateOrganizationSchema(schema);
    case 'FAQPage':
      return validateFAQPageSchema(schema);
    default:
      return {
        isValid: true,
        errors: [],
        warnings: [`Schema type ${schema['@type']} validation not implemented`]
      };
  }
};

/**
 * Logs validation results to console (only in development)
 */
export const logSchemaValidation = (schemaName: string, result: SchemaValidationResult) => {
  if (import.meta.env.DEV) {
    if (!result.isValid) {
      console.error(`❌ ${schemaName} Schema Validation Failed:`, result.errors);
    }
    if (result.warnings.length > 0) {
      console.warn(`⚠️ ${schemaName} Schema Warnings:`, result.warnings);
    }
    if (result.isValid && result.warnings.length === 0) {
      console.log(`✅ ${schemaName} Schema Valid`);
    }
  }
};
