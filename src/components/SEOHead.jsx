import React, { useEffect } from 'react';
import { propertyConfig } from '../config/property.config';
import { useLanguage } from '../context/LanguageContext';

export const SEOHead = ({ title, description, path = '' }) => {
  const { lang, getText } = useLanguage();
  const prop = propertyConfig.property;
  const seo = propertyConfig.seo;
  const contact = propertyConfig.contact;

  const pageTitle = title
    ? `${title} | ${getText(prop.name, prop.nameHi)} - ${getText(prop.category, prop.categoryHi)}, ${getText(contact.address.city, contact.address.cityHi)}`
    : `${getText(prop.name, prop.nameHi)} | ${getText(prop.tagline, prop.taglineHi)}`;

  const pageDesc = description || getText(prop.shortIntro, prop.shortIntroHi);

  useEffect(() => {
    document.title = pageTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = pageDesc;

    // Update Schema.org JSON-LD
    let scriptSchema = document.getElementById('property-schema-jsonld');
    if (!scriptSchema) {
      scriptSchema = document.createElement('script');
      scriptSchema.id = 'property-schema-jsonld';
      scriptSchema.type = 'application/ld+json';
      document.head.appendChild(scriptSchema);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": seo.schemaType || "LodgingBusiness",
      "name": prop.name,
      "alternateName": prop.nameHi,
      "description": pageDesc,
      "url": window.location.origin + path,
      "telephone": contact.phone,
      "priceRange": seo.priceRange,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": contact.address.street,
        "addressLocality": contact.address.city,
        "addressRegion": contact.address.state,
        "postalCode": contact.address.pincode,
        "addressCountry": "IN"
      },
      "checkinTime": propertyConfig.policies.checkInTime,
      "checkoutTime": propertyConfig.policies.checkOutTime,
      "amenityFeature": propertyConfig.facilities.map(f => ({
        "@type": "LocationFeatureSpecification",
        "name": f.name,
        "value": true
      }))
    };

    scriptSchema.textContent = JSON.stringify(structuredData);
  }, [pageTitle, pageDesc, path, prop, contact, seo, getText]);

  return null;
};
