import React from 'react';
import { Card } from '@/components/ui/card';
import { Search, Database, CheckCircle, FileCheck } from 'lucide-react';

export const HowSafeOrStolenWorksSection = () => {
 const steps = [
 {
 number: '1',
 icon: Search,
 title: 'Enter IMEI, VIN, or Serial Number',
 description: 'Simply type or paste the identification number from any phone, vehicle, laptop, bike, or equipment. Our system accepts all formats - IMEI, VIN, serial numbers, frame numbers, ESN, MEID.',
 details: [
 'No registration required',
 'Works on any device',
 'Paste from photos/text',
 'Supports all formats'
 ]
 },
 {
 number: '2',
 icon: Database,
 title: 'We Search 100+ databases Instantly',
 description: 'Our AI-powered system simultaneously queries multiple databases including vehicle theft and title databases, carrier and theft databases, community theft registries, stolen bicycle databases, manufacturer records, and carrier and theft databases across 150+ countries.',
 details: [
 'vehicle theft and title databases stolen vehicle database',
 'carrier and theft databases global IMEI registry',
 'Police stolen property reports',
 'Manufacturer warranty systems',
 'Carrier blacklist databases'
 ]
 },
 {
 number: '3',
 icon: CheckCircle,
 title: 'Get Instant Stolen/Safe Report',
 description: 'Within 3 seconds, receive a comprehensive report showing if the item is stolen, blacklisted, has title issues, accident history, or is clear to buy. Easy-to-understand results with color-coded status.',
 details: [
 'Clear SAFE or STOLEN status',
 'Detailed theft information',
 'Blacklist check results',
 'Title & accident history',
 'Recommendations'
 ]
 },
 {
 number: '4',
 icon: FileCheck,
 title: 'Download Legal Proof Certificate',
 description: 'Generate a downloadable verification certificate showing you performed due diligence. This legal document protects you if the item is later discovered stolen - proves you took reasonable steps to verify.',
 details: [
 'Official verification certificate',
 'Timestamped proof',
 'Legal protection document',
 'Share with seller/buyer',
 'PDF format for records'
 ]
 }
 ];

 return (
 <section className="py-16 px-4 bg-secondary/30">
 <div className="max-w-6xl mx-auto">
 <div className="text-center mb-12">
 <h2 className="text-3xl md:text-4xl font-bold mb-4">
 How SafeOrStolen Works: 4 Simple Steps
 </h2>
 <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
 From verification to certificate, the entire process takes less than 10 seconds. Here's exactly how we protect you.
 </p>
 </div>

 <div className="grid gap-8">
 {steps.map((step, index) => (
 <Card key={index} className="p-6 md:p-8">
 <div className="flex flex-col md:flex-row gap-6">
 <div className="flex-shrink-0">
 <div className="relative">
 <div className="bg-primary/10 p-4 rounded-full">
 <step.icon className="h-8 w-8 text-primary" />
 </div>
 <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
 {step.number}
 </div>
 </div>
 </div>

 <div className="flex-1">
 <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
 <p className="text-muted-foreground mb-4 text-lg">
 {step.description}
 </p>
 
 <div className="grid sm:grid-cols-2 gap-2">
 {step.details.map((detail, idx) => (
 <div key={idx} className="flex items-start text-sm text-muted-foreground">
 <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
 <span>{detail}</span>
 </div>
 ))}
 </div>
 </div>
 </div>
 </Card>
 ))}
 </div>

 <div className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center">
 <h3 className="text-2xl font-bold mb-3">
 The Fastest, Comprehensive Verification Available
 </h3>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 While other services take 24+ hours and charge $25-40 per report, SafeOrStolen delivers comprehensive results in 3 seconds for FREE. Our mobile app even works offline for on-the-spot verification at meetups.
 </p>
 </div>
 </div>
 </section>
 );
};
