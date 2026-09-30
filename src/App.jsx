import * as data from './data/policyData.js';
import PDFGenerator from './components/PDFGenerator';
import { formatCompactCurrency, formatCurrency, formatDate } from './utils/format.js';
import {
  InsuredCard,
  PolicyHolderCard,
  BeneficiariesCard,
  ContactCard,
  AddressCard,
  BrokerCard,
  DisclosuresCard,
  PremiumCard,
  AddOnsCard,
  FreeBenefitsCard,
  SumAssuredCard,
} from './components/Sections.jsx';

const NAV = [
  ['sum-assured', 'Sum Assured'],
  ['insured', 'Insured'],
  ['policy-holder', 'Policy Holder'],
  ['beneficiaries', 'Beneficiaries'],
  ['contact', 'Contact'],
  ['address', 'Address'],
  ['broker', 'Broker'],
  ['disclosures', 'Disclosures'],
  ['premium', 'Premium'],
  ['add-ons', 'Add-ons'],
  ['free-benefits', 'Free Benefits'],
];

export default function App() {
  return (
    <div className="app" id="summary-page">
  const { policy, premium, sumAssured, addOns } = data;

  const kpis = [
    { label: 'Total Cover', value: formatCompactCurrency(sumAssured.totalCover) },
    { label: 'Annual Premium', value: formatCurrency(premium.totalPremium) },
    { label: 'Next Due', value: formatDate(premium.nextDueDate) },
    { label: 'Active Riders', value: addOns.length },
  ];

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <span className="logo" aria-hidden="true">🛡️</span>
          <span>Policy Dashboard</span>
        </div>
        <span className="demo-note">Sample data — for demonstration only</span>
      </header>

      <main className="container">
        <PDFGenerator elementId="summary-page" />
        <section className="policy-hero">
          <div>
            <p className="eyebrow">{policy.policyNumber}</p>
            <h1>{policy.productName}</h1>
            <p className="muted">{policy.planType}</p>
          </div>
          <div className="hero-meta">
            <span className="badge badge-success badge-lg">{policy.status}</span>
            <dl>
              <div><dt>Issued</dt><dd>{formatDate(policy.issueDate)}</dd></div>
              <div><dt>Matures</dt><dd>{formatDate(policy.maturityDate)}</dd></div>
              <div><dt>Policy Term</dt><dd>{policy.policyTerm} yrs</dd></div>
              <div><dt>Premium Term</dt><dd>{policy.premiumPayingTerm} yrs</dd></div>
            </dl>
          </div>
        </section>

        <section className="kpis">
          {kpis.map((k) => (
            <div className="kpi" key={k.label}>
              <span className="muted">{k.label}</span>
              <strong>{k.value}</strong>
            </div>
          ))}
        </section>

        <nav className="section-nav" aria-label="Sections">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>

        <div className="grid">
          <SumAssuredCard sumAssured={sumAssured} />
          <InsuredCard insured={data.insured} />
          <PolicyHolderCard holder={data.policyHolder} />
          <BeneficiariesCard beneficiaries={data.beneficiaries} />
          <ContactCard contact={data.contactInfo} />
          <AddressCard address={data.correspondenceAddress} />
          <BrokerCard broker={data.broker} />
          <DisclosuresCard medical={data.medicalDetails} nonMedical={data.nonMedicalDetails} />
          <PremiumCard premium={premium} />
          <AddOnsCard addOns={addOns} />
          <FreeBenefitsCard benefits={data.freeBenefits} />
        </div>
      </main>
    </div>
  );
}
