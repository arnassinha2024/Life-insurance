import * as data from '../data/policyData.js';
import {
  InsuredCard,
  PolicyHolderCard,
  BeneficiariesCard,
  ContactCard,
  AddressCard,
  BrokerCard,
} from '../components/Sections.jsx';

const PARTIES_NAV = [
  ['insured', 'Insured'],
  ['policy-holder', 'Policy Holder'],
  ['beneficiaries', 'Beneficiaries'],
  ['contact', 'Contact'],
  ['address', 'Address'],
  ['broker', 'Broker'],
];

export default function PartiesDetails({ onNavigateHome }) {
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
        <section className="policy-hero">
          <div>
            <p className="eyebrow">{data.policy.policyNumber}</p>
            <h1>Parties Involved</h1>
            <p className="muted">Comprehensive details of all parties involved in this policy</p>
          </div>
          <div className="hero-meta">
            <button className="btn btn-primary" onClick={onNavigateHome}>
              ← Back to Summary
            </button>
          </div>
        </section>

        <nav className="section-nav" aria-label="Party types">
          {PARTIES_NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>

        <div className="grid">
          <InsuredCard insured={data.insured} />
          <PolicyHolderCard holder={data.policyHolder} />
          <BeneficiariesCard beneficiaries={data.beneficiaries} />
          <ContactCard contact={data.contactInfo} />
          <AddressCard address={data.correspondenceAddress} />
          <BrokerCard broker={data.broker} />
        </div>

        <div className="actions">
          <button className="btn btn-primary" onClick={onNavigateHome}>
            Back to Summary
          </button>
        </div>
      </main>
    </div>
  );
}
