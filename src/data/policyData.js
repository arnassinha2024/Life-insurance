// Dummy data for demonstration purposes only. All names, numbers and addresses are fictitious.

export const policy = {
  policyNumber: 'LIC-2026-00458213',
  productName: 'SecureLife Plus Term Plan',
  planType: 'Term Life with Critical Illness Cover',
  status: 'Active',
  issueDate: '2024-04-15',
  commencementDate: '2024-04-15',
  maturityDate: '2059-04-14',
  policyTerm: 35,
  premiumPayingTerm: 20,
  currency: 'INR',
};

export const insured = {
  name: 'Rohan Mehta',
  gender: 'Male',
  dateOfBirth: '1990-08-22',
  ageAtEntry: 33,
  occupation: 'Software Engineer',
  annualIncome: 2400000,
  maritalStatus: 'Married',
  pan: 'ABCPM1234K',
  relationshipToProposer: 'Self',
};

export const policyHolder = {
  name: 'Rohan Mehta',
  customerId: 'CUST-778123',
  dateOfBirth: '1990-08-22',
  gender: 'Male',
  nationality: 'Indian',
  kycStatus: 'Verified',
  pan: 'ABCPM1234K',
  aadhaarMasked: 'XXXX-XXXX-4521',
};

export const beneficiaries = [
  { name: 'Priya Mehta', relationship: 'Spouse', dateOfBirth: '1992-03-10', share: 60, appointee: null },
  { name: 'Aarav Mehta', relationship: 'Son', dateOfBirth: '2018-11-05', share: 25, appointee: 'Priya Mehta' },
  { name: 'Sunita Mehta', relationship: 'Mother', dateOfBirth: '1962-06-18', share: 15, appointee: null },
];

export const contactInfo = {
  mobile: '+91 98765 43210',
  alternateMobile: '+91 91234 56789',
  email: 'rohan.mehta@example.com',
  alternateEmail: 'r.mehta.work@example.com',
  preferredChannel: 'Email',
  preferredLanguage: 'English',
};

export const broker = {
  name: 'Anita Sharma',
  firm: 'Shield Insurance Brokers Pvt. Ltd.',
  brokerCode: 'BRK-IN-20457',
  licenseNumber: 'IRDAI/DB/789/2019',
  licenseValidTill: '2028-03-31',
  phone: '+91 99887 76655',
  email: 'anita.sharma@example.com',
  branch: 'Andheri East, Mumbai',
};

export const correspondenceAddress = {
  line1: 'Flat 1204, Tower B, Green Meadows',
  line2: 'Powai Link Road, Near Hiranandani',
  city: 'Mumbai',
  state: 'Maharashtra',
  pincode: '400076',
  country: 'India',
  addressType: 'Residential',
  sameAsPermanent: true,
};

export const medicalDetails = [
  { label: 'Height', value: '176 cm' },
  { label: 'Weight', value: '74 kg' },
  { label: 'BMI', value: '23.9' },
  { label: 'Blood Pressure', value: '122/80 mmHg' },
  { label: 'Blood Group', value: 'B+' },
  { label: 'Smoker', value: 'No' },
  { label: 'Alcohol Consumption', value: 'Occasional' },
  { label: 'Pre-existing Conditions', value: 'None declared' },
  { label: 'Past Surgeries', value: 'Appendectomy (2012)' },
  { label: 'Family Medical History', value: 'Father - Type 2 Diabetes' },
  { label: 'Medical Tests Done', value: 'CBC, Lipid Profile, ECG, HbA1c' },
  { label: 'Medical Underwriting', value: 'Standard Rates Accepted' },
];

export const nonMedicalDetails = [
  { label: 'Education', value: 'B.Tech (Computer Science)' },
  { label: 'Employer', value: 'Nimbus Tech Solutions' },
  { label: 'Nature of Duties', value: 'Desk job / Office based' },
  { label: 'Hazardous Activities', value: 'None' },
  { label: 'Foreign Travel', value: 'Occasional business travel' },
  { label: 'Existing Insurance', value: '1 policy - ₹50,00,000 cover' },
  { label: 'Politically Exposed Person', value: 'No' },
  { label: 'Criminal Record', value: 'None' },
];

export const premium = {
  basePremium: 28500,
  addOnPremium: 6200,
  gst: 6246,
  totalPremium: 40946,
  frequency: 'Annual',
  paymentMode: 'Auto Debit (NACH)',
  lastPaidOn: '2026-04-12',
  nextDueDate: '2027-04-15',
  gracePeriodDays: 30,
  history: [
    { year: '2024-25', amount: 40946, paidOn: '2024-04-15', status: 'Paid' },
    { year: '2025-26', amount: 40946, paidOn: '2025-04-10', status: 'Paid' },
    { year: '2026-27', amount: 40946, paidOn: '2026-04-12', status: 'Paid' },
    { year: '2027-28', amount: 40946, paidOn: null, status: 'Upcoming' },
  ],
};

export const addOns = [
  { name: 'Critical Illness Rider', cover: 2500000, premium: 3400, description: 'Lump sum on diagnosis of 36 listed critical illnesses.' },
  { name: 'Accidental Death Benefit', cover: 5000000, premium: 1500, description: 'Additional payout in case of death due to accident.' },
  { name: 'Waiver of Premium', cover: null, premium: 900, description: 'Future premiums waived on disability or critical illness.' },
  { name: 'Hospital Cash', cover: 3000, premium: 400, description: 'Daily cash benefit per day of hospitalisation (max 30 days/yr).' },
];

export const freeBenefits = [
  { name: 'Annual Health Check-up', description: 'Free preventive health check-up at network centres every policy year.' },
  { name: 'Terminal Illness Benefit', description: 'Accelerated payout of sum assured on diagnosis of terminal illness.' },
  { name: 'Tele-consultation', description: 'Unlimited doctor tele-consultations via partner app.' },
  { name: 'Special Exit Value', description: 'Refund of premiums paid if policy exited between ages 60-65.' },
  { name: 'Tax Benefit', description: 'Premiums eligible under Sec 80C & 80D; claim payout exempt under Sec 10(10D).' },
];

export const sumAssured = {
  baseSumAssured: 20000000,
  riderSumAssured: 7500000,
  totalCover: 27500000,
  deathBenefit: 'Lump sum of base sum assured paid to nominees',
  maturityBenefit: 'Not applicable (pure term)',
  deathBenefitOption: 'Level cover',
};
