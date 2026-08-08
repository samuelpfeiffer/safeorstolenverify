import React from 'react';
import { StolenCheckLanding } from '@/components/traffic/StolenCheckLanding';

export const CheckStolenPhone = () => (
  <StolenCheckLanding
    itemType="Phone"
    title="Is My Phone Stolen? Free IMEI Check"
    description="Check if a phone is stolen before you buy. Enter the IMEI number and get instant verification. Protect yourself from buying stolen iPhones, Samsung, and other devices."
    keywords={[
      'is my phone stolen',
      'check if phone is stolen',
      'stolen phone check',
      'IMEI check',
      'stolen iPhone check',
      'stolen Samsung check',
      'phone blacklist check',
      'used phone verification'
    ]}
    faqs={[
      {
        q: 'How do I find the IMEI number?',
        a: 'Dial *#06# on the phone to see the IMEI. You can also find it in Settings > About Phone, or on the original box.'
      },
      {
        q: 'What happens if the phone is stolen?',
        a: 'If the phone is reported stolen, DO NOT buy it. The seller may be a thief, and you could face legal issues. Report it to local police.'
      },
      {
        q: 'Is this check really free?',
        a: 'Yes! You get 2 free checks when you sign up. No credit card required.'
      },
      {
        q: 'How accurate is the stolen phone database?',
        a: 'We check against multiple databases including carrier blacklists and police reports. Our accuracy rate is over 99%.'
      }
    ]}
  />
);

export const CheckStolenCar = () => (
  <StolenCheckLanding
    itemType="Car"
    title="Is This Car Stolen? Free VIN Check"
    description="Check if a vehicle is stolen before you buy. Enter the VIN and get instant verification. Protect yourself from buying stolen cars, trucks, and motorcycles."
    keywords={[
      'is this car stolen',
      'check if car is stolen',
      'stolen car check',
      'VIN check',
      'stolen vehicle check',
      'used car verification',
      'vehicle history check',
      'car theft check'
    ]}
    faqs={[
      {
        q: 'Where do I find the VIN number?',
        a: 'The VIN is located on the dashboard (visible through windshield), driver\'s door jamb, vehicle registration, and insurance documents.'
      },
      {
        q: 'What if the VIN shows as stolen?',
        a: 'Do not proceed with the purchase. Contact local law enforcement immediately. Never confront the seller yourself.'
      },
      {
        q: 'Does this check title history too?',
        a: 'Our check focuses on stolen status. For full title history, we recommend combining with a full vehicle history report.'
      },
      {
        q: 'How quickly do I get results?',
        a: 'Results are instant - typically within 3 seconds of entering the VIN.'
      }
    ]}
  />
);

export const CheckStolenLaptop = () => (
  <StolenCheckLanding
    itemType="Laptop"
    title="Is This Laptop Stolen? Free Serial Number Check"
    description="Check if a laptop or computer is stolen before you buy. Enter the serial number and get instant verification. Protect yourself from stolen MacBooks, Dell, HP, and more."
    keywords={[
      'is this laptop stolen',
      'check if laptop is stolen',
      'stolen laptop check',
      'MacBook stolen check',
      'laptop serial number check',
      'used laptop verification',
      'stolen computer check'
    ]}
    faqs={[
      {
        q: 'Where do I find the laptop serial number?',
        a: 'Check the bottom of the laptop, in System Settings/About, or on the original box. For MacBooks: Apple Menu > About This Mac.'
      },
      {
        q: 'What types of laptops can I check?',
        a: 'We can verify Apple MacBooks, Dell, HP, Lenovo, ASUS, and most major laptop brands.'
      },
      {
        q: 'Should I meet the seller in person?',
        a: 'Yes, always meet in a public place and verify the serial number matches what you checked before paying.'
      },
      {
        q: 'What if the seller won\'t provide the serial?',
        a: 'This is a major red flag. Legitimate sellers have nothing to hide. Walk away from the deal.'
      }
    ]}
  />
);

export const CheckStolenBike = () => (
  <StolenCheckLanding
    itemType="Bicycle"
    title="Is This Bike Stolen? Free Serial Number Check"
    description="Check if a bicycle is stolen before you buy. Enter the serial number and get instant verification against stolen bike databases."
    keywords={[
      'is this bike stolen',
      'check if bike is stolen',
      'stolen bike check',
      'bicycle serial number check',
      'used bike verification',
      'stolen bicycle database'
    ]}
    faqs={[
      {
        q: 'Where is the bicycle serial number?',
        a: 'Usually located under the bottom bracket (where the pedal cranks meet), on the head tube, or rear dropout.'
      },
      {
        q: 'What if the serial number is filed off?',
        a: 'A removed serial number is a major red flag indicating the bike may be stolen. Do not purchase.'
      },
      {
        q: 'Does this work for e-bikes?',
        a: 'Yes, we can verify electric bikes, road bikes, mountain bikes, and all bicycle types.'
      },
      {
        q: 'How do I report a stolen bike?',
        a: 'Report to local police first, then register it on stolen bike databases. We can help with verification after recovery.'
      }
    ]}
  />
);

export const CheckStolenFirearm = () => (
  <StolenCheckLanding
    itemType="Firearm"
    title="Is This Gun Stolen? Free Serial Number Check"
 description="Check if a firearm is stolen before you buy. Enter the serial number and verify against stolen gun databases. Stay legal and protected."
    keywords={[
      'is this gun stolen',
      'check if firearm is stolen',
      'stolen gun check',
      'firearm serial number check',
      'used gun verification',
      'stolen firearm database'
    ]}
    faqs={[
      {
        q: 'Where is the firearm serial number?',
        a: 'Usually on the frame or receiver of the firearm. Check manufacturer documentation for exact location.'
      },
      {
        q: 'Is it legal to buy a stolen firearm?',
        a: 'No. Possessing a stolen firearm is a federal crime. Always verify before any private sale.'
      },
      {
        q: 'What databases do you check?',
        a: 'We check 100+ aggregated stolen-item sources, including carrier and manufacturer blacklists, NICB vehicle data, BikeIndex, and the nationwide stolen firearm reports. Federal systems like FBI NCIC and ATF eTrace are restricted to law enforcement and are not queried by us or any consumer service.'
      },
      {
        q: 'Should I use an FFL dealer?',
        a: 'Using a licensed dealer for transfers adds legal protection and they can verify the firearm status.'
      }
    ]}
  />
);
