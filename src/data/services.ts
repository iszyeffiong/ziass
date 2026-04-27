import { ShieldCheck, Building2, Code2, Users, Globe, FileText, Calculator } from 'lucide-react'

export const services = [
  {
    id: 'business-support',
    title: 'Business Support Services',
    desc: 'Company incorporation with CAC, business names, post-incorporation annual return filings, change of name, share capital alterations, and memorandum amendments.',
    icon: Building2,
    img: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    details: [
      'Company incorporation with the Corporate Affairs Commission (CAC) for Companies, Business Names, Incorporated Trustees, Limited by Guarantee, etc)',
      'Post incorporation Annual Return filings',
      'Change of Name',
      'Increase/Reduction of Share Capital',
      'Mortgages/Debentures/Charges',
      'Conversion',
      'Certified True Copy (CTC) of Certificates',
      'Deed of Release',
      'Alteration of Memorandum and Articles',
      'Certified True Copy of Certificates',
      'Annual Returns',
      'Other Miscellaneous Post-Registration',
    ]
  },
  {
    id: 'licensing',
    title: 'Licensing',
    desc: 'Banking & Payment Systems Licenses (MFB, PSSP, Mobile money), Communication licenses (ISP, PNL, MVNO), and Data Protection Licenses.',
    icon: FileText,
    img: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
    details: [
      'Banking and Payment Systems Licenses (MFB, PSSP, PSTN, BDC, IMTO, Mobile money, etc.',
      'Communication licenses (ISP, PNL, Interconnect Exchange, Colocation, MVNO, VAS Aggregation, Sales & Installation etc.)',
      'Data Protection Licenses (Data Protection Compliance Organization)'
    ]
  },
  {
    id: 'recruitment',
    title: 'Recruitment, Talent Acquisition & Management',
    desc: 'End-to-end Talent Sourcing, Employee Background Checks, HR Outsourcing, and automated Payroll management solutions.',
    icon: Users,
    img: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=800',
    details: [
      'Talent Sourcing',
      'Employee Background Checks',
      'HR Outsourcing',
      'Payroll'
    ]
  },
  {
    id: 'expatriate',
    title: 'Expatriate and Allied Services',
    desc: 'Compliance services for local and international laws, Visa & Immigration processing, and seamless Relocation Support.',
    icon: Globe,
    img: 'https://images.pexels.com/photos/3769135/pexels-photo-3769135.jpeg?auto=compress&cs=tinysrgb&w=800',
    details: [
      'Compliance services (local and international laws and regulations)',
      'Visa & Immigration services',
      'Relocation Support'
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Data Protection',
    desc: 'Regulatory compliance (CBN, NCC, NDPC), Managed Security, Risk Management, Business Resilience, and Supply Chain security.',
    icon: ShieldCheck,
    img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    details: [
      'Regulatory & Compliance (CBN, NCC, NDPC, etc.)',
      'Cybersecurity (Managed Security Services, Risk management)',
      'Business Resilience & Supply Chain security',
      'Data Protection Services (audit and compliance, filing, etc.)'
    ]
  },
  {
    id: 'web-apps',
    title: 'Web Application Services',
    desc: 'Domain registration & renewal, modern web & mobile application design, SEO, and directory listing.',
    icon: Code2,
    img: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    details: [
      'Domain Name Registration and Renewal',
      'Web and mobile application design',
      'Search Engine Optimization',
      'Directory Listing'
    ]
  },
  {
    id: 'tax',
    title: 'Tax Services',
    desc: 'Expert handling of VAT, Capital Gain Tax, Company Income Tax, Tertiary Education Tax, Withholding Tax, and Personal Income Tax.',
    icon: Calculator,
    img: 'https://images.pexels.com/photos/7821693/pexels-photo-7821693.jpeg?auto=compress&cs=tinysrgb&w=800',
    details: [
      'Value Added Tax',
      'Capital Gain Tax',
      'Company Income Tax',
      'Tertiary Education Tax',
      'Withholding Tax',
      'Personal Income Tax'
    ]
  }
]
