import React from 'react';
import { Helmet } from 'react-helmet-async';

interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  totalTime?: string; // ISO 8601 duration format, e.g., "PT5M" for 5 minutes
  estimatedCost?: {
    currency: string;
    value: string;
  };
  supply?: string[];
  tool?: string[];
  steps: HowToStep[];
  image?: string;
}

/**
 * HowTo Schema for tutorial content
 * Helps content appear as rich results in Google Search
 */
export const HowToSchema: React.FC<HowToSchemaProps> = ({
  name,
  description,
  totalTime = "PT3M",
  estimatedCost,
  supply,
  tool,
  steps,
  image
}) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "totalTime": totalTime,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.image && { "image": step.image }),
      ...(step.url && { "url": step.url })
    }))
  };

  if (image) {
    schema.image = {
      "@type": "ImageObject",
      "url": image
    };
  }

  if (estimatedCost) {
    schema.estimatedCost = {
      "@type": "MonetaryAmount",
      "currency": estimatedCost.currency,
      "value": estimatedCost.value
    };
  }

  if (supply && supply.length > 0) {
    schema.supply = supply.map(item => ({
      "@type": "HowToSupply",
      "name": item
    }));
  }

  if (tool && tool.length > 0) {
    schema.tool = tool.map(item => ({
      "@type": "HowToTool",
      "name": item
    }));
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Pre-configured HowTo schemas for common use cases
export const IMEICheckHowTo: React.FC = () => (
  <HowToSchema
    name="How to Check If a Phone Is Stolen Using IMEI"
    description="Step-by-step guide to verify if a phone is stolen or blacklisted by checking the IMEI number on SafeOrStolen.com"
    totalTime="PT3M"
    estimatedCost={{ currency: "USD", value: "0" }}
    tool={["Phone or device with IMEI", "Internet connection", "SafeOrStolen.com website"]}
    steps={[
      {
        name: "Find the IMEI Number",
        text: "Dial *#06# on the phone to display the IMEI number on screen. Alternatively, go to Settings > About Phone > Status and find the IMEI. For iPhones, check Settings > General > About. The IMEI is a 15-digit unique identifier."
      },
      {
        name: "Visit SafeOrStolen.com",
        text: "Open a web browser and navigate to SafeOrStolen.com. You'll see a search box prominently displayed on the homepage where you can enter the IMEI number."
      },
      {
        name: "Enter the IMEI Number",
        text: "Type or paste the 15-digit IMEI number into the search box. Make sure all digits are correct - a single wrong digit will check a different phone."
      },
      {
        name: "Click Verify",
        text: "Click the 'Verify' or 'Check' button to start the verification process. SafeOrStolen will search over 100 databases including police records, carrier blacklists, and insurance claims."
      },
      {
        name: "Review Results",
        text: "Within 3 seconds, you'll see results showing if the phone is clean (safe to buy), stolen (reported to police), blacklisted (blocked by carriers), or has insurance claims. A green checkmark means safe, red warning means avoid."
      },
      {
        name: "Save or Share Report",
        text: "Save the verification report for your records or share it with the seller to prove due diligence. You can also print the report as proof of verification before purchase."
      }
    ]}
  />
);

export const VINCheckHowTo: React.FC = () => (
  <HowToSchema
    name="How to Check If a Car Is Stolen Using VIN"
    description="Step-by-step guide to verify if a vehicle is stolen by checking the VIN number on SafeOrStolen.com"
    totalTime="PT5M"
    estimatedCost={{ currency: "USD", value: "0" }}
    tool={["Vehicle VIN number", "Internet connection", "SafeOrStolen.com website"]}
    steps={[
      {
        name: "Locate the VIN Number",
        text: "Find the 17-character VIN on the driver's side dashboard visible through the windshield, on the driver's door jamb sticker, on vehicle registration documents, or on the title. Make sure all 17 characters are readable."
      },
      {
        name: "Verify VIN Format",
        text: "Ensure the VIN is exactly 17 characters with a mix of letters and numbers. VINs do not contain letters I, O, or Q to avoid confusion with numbers. If the VIN appears tampered with, this is a red flag."
      },
      {
        name: "Visit SafeOrStolen.com",
        text: "Open SafeOrStolen.com in your web browser. Select 'Car' or 'Vehicle' as the item type to ensure proper database searching."
      },
      {
        name: "Enter the VIN Number",
        text: "Type the complete 17-character VIN into the search box. Double-check for accuracy - VINs are case-insensitive but every character matters."
      },
      {
        name: "Review Comprehensive Results",
        text: "SafeOrStolen searches NICB (National Insurance Crime Bureau), police stolen vehicle databases, insurance total loss records, and title history. Results show theft status, title brands, and any reported issues."
      },
      {
        name: "Check Title History",
        text: "Review the title history for salvage, rebuilt, flood, or other branded titles. A clean title with no theft reports means the vehicle is likely safe to purchase."
      }
    ]}
  />
);

export const BikeCheckHowTo: React.FC = () => (
  <HowToSchema
    name="How to Check If a Bicycle Is Stolen"
    description="Step-by-step guide to verify if a bike is stolen by checking the serial number on SafeOrStolen.com"
    totalTime="PT3M"
    estimatedCost={{ currency: "USD", value: "0" }}
    tool={["Bicycle serial number", "Internet connection", "SafeOrStolen.com website"]}
    steps={[
      {
        name: "Find the Bike Serial Number",
        text: "Look under the bottom bracket where the pedal cranks meet the frame. The serial number is usually stamped into the metal. It can also be on the head tube, rear dropout, or seat tube. Take a photo for easy reference."
      },
      {
        name: "Visit SafeOrStolen.com",
        text: "Navigate to SafeOrStolen.com and select 'Bicycle' or 'Bike' as the item type. This ensures we search Bike Index and other cycling-specific databases."
      },
      {
        name: "Enter Serial Number",
        text: "Type the serial number exactly as it appears on the bike. Some serial numbers include letters and numbers. If characters are hard to read, try common substitutions (O vs 0, I vs 1)."
      },
      {
        name: "Check Results",
        text: "SafeOrStolen searches Bike Index, police databases, and stolen bike registries. Results show if the bike is reported stolen, has ownership records, or is clear to purchase."
      },
      {
        name: "Verify with Seller",
        text: "If the bike is clear, you can confidently proceed. Ask the seller for proof of purchase or registration. If reported stolen, do not purchase and consider reporting to local police."
      }
    ]}
  />
);

export default HowToSchema;
