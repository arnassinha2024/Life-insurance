import { useRef, useState } from 'react';
import Card from './Card.jsx';
import InfoGrid from './InfoGrid.jsx';
import { formatCurrency, formatDate } from '../utils/format.js';

const PhoneLink = ({ number }) => <a href={`tel:${number.replace(/\s/g, '')}`}>{number}</a>;
const EmailLink = ({ email }) => <a href={`mailto:${email}`}>{email}</a>;

export function InsuredCard({ insured }) {
  return (
    <Card id="insured" title="Insured Details" icon="👤">
      <InfoGrid
        items={[
          { label: 'Name', value: insured.name },
          { label: 'Gender', value: insured.gender },
          { label: 'Date of Birth', value: formatDate(insured.dateOfBirth) },
          { label: 'Age at Entry', value: `${insured.ageAtEntry} years` },
          { label: 'Occupation', value: insured.occupation },
          { label: 'Annual Income', value: formatCurrency(insured.annualIncome) },
          { label: 'Marital Status', value: insured.maritalStatus },
          { label: 'PAN', value: insured.pan },
          { label: 'Relation to Proposer', value: insured.relationshipToProposer },
        ]}
      />
    </Card>
  );
}

export function PolicyHolderCard({ holder }) {
  return (
    <Card id="policy-holder" title="Policy Holder" icon="🪪">
      <InfoGrid
        items={[
          { label: 'Name', value: holder.name },
          { label: 'Customer ID', value: holder.customerId },
          { label: 'Date of Birth', value: formatDate(holder.dateOfBirth) },
          { label: 'Gender', value: holder.gender },
          { label: 'Nationality', value: holder.nationality },
          {
            label: 'KYC Status',
            value: <span className="badge badge-success">{holder.kycStatus}</span>,
          },
          { label: 'PAN', value: holder.pan },
          { label: 'Aadhaar', value: holder.aadhaarMasked },
        ]}
      />
    </Card>
  );
}

export function BeneficiariesCard({ beneficiaries }) {
  const totalShare = beneficiaries.reduce((sum, b) => sum + b.share, 0);
  return (
    <Card id="beneficiaries" title="Beneficiaries / Nominees" icon="👨‍👩‍👦" className="span-2">
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Relationship</th>
              <th>Date of Birth</th>
              <th>Appointee</th>
              <th className="num">Share</th>
            </tr>
          </thead>
          <tbody>
            {beneficiaries.map((b) => (
              <tr key={b.name}>
                <td>{b.name}</td>
                <td>{b.relationship}</td>
                <td>{formatDate(b.dateOfBirth)}</td>
                <td>{b.appointee ?? '—'}</td>
                <td className="num">
                  <div className="share">
                    <div className="share-bar">
                      <div className="share-fill" style={{ width: `${b.share}%` }} />
                    </div>
                    <span>{b.share}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4}>Total</td>
              <td className="num">{totalShare}%</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </Card>
  );
}

export function ContactCard({ contact }) {
  return (
    <Card id="contact" title="Contact Information" icon="📞">
      <InfoGrid
        items={[
          { label: 'Mobile', value: <PhoneLink number={contact.mobile} /> },
          { label: 'Alternate Mobile', value: <PhoneLink number={contact.alternateMobile} /> },
          { label: 'Email', value: <EmailLink email={contact.email} /> },
          { label: 'Alternate Email', value: <EmailLink email={contact.alternateEmail} /> },
          { label: 'Preferred Channel', value: contact.preferredChannel },
          { label: 'Preferred Language', value: contact.preferredLanguage },
        ]}
      />
    </Card>
  );
}

export function AddressCard({ address }) {
  return (
    <Card id="address" title="Address of Correspondence" icon="🏠">
      <address className="address">
        {address.line1}
        <br />
        {address.line2}
        <br />
        {address.city}, {address.state} – {address.pincode}
        <br />
        {address.country}
      </address>
      <div className="tags">
        <span className="badge">{address.addressType}</span>
        {address.sameAsPermanent && <span className="badge badge-info">Same as permanent address</span>}
      </div>
    </Card>
  );
}

export function BrokerCard({ broker }) {
  return (
    <Card id="broker" title="Broker Details" icon="🤝">
      <InfoGrid
        items={[
          { label: 'Broker Name', value: broker.name },
          { label: 'Firm', value: broker.firm },
          { label: 'Broker Code', value: broker.brokerCode },
          { label: 'License No.', value: broker.licenseNumber },
          { label: 'License Valid Till', value: formatDate(broker.licenseValidTill) },
          { label: 'Branch', value: broker.branch },
          { label: 'Phone', value: <PhoneLink number={broker.phone} /> },
          { label: 'Email', value: <EmailLink email={broker.email} /> },
        ]}
      />
    </Card>
  );
}

const DISCLOSURE_TABS = [
  { key: 'medical', label: 'Medical' },
  { key: 'nonMedical', label: 'Non-Medical' },
];

export function DisclosuresCard({ medical, nonMedical }) {
  const [tab, setTab] = useState('medical');
  const tabRefs = useRef({});
  const items = tab === 'medical' ? medical : nonMedical;

  const onKeyDown = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const idx = DISCLOSURE_TABS.findIndex((t) => t.key === tab);
    const step = e.key === 'ArrowRight' ? 1 : -1;
    const next = DISCLOSURE_TABS[(idx + step + DISCLOSURE_TABS.length) % DISCLOSURE_TABS.length].key;
    setTab(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <Card id="disclosures" title="Underwriting Disclosures" icon="🩺" className="span-2">
      <div className="tabs" role="tablist" aria-label="Disclosure type">
        {DISCLOSURE_TABS.map((t) => (
          <button
            key={t.key}
            ref={(el) => (tabRefs.current[t.key] = el)}
            id={`tab-${t.key}`}
            role="tab"
            aria-selected={tab === t.key}
            aria-controls="disclosures-panel"
            tabIndex={tab === t.key ? 0 : -1}
            className={tab === t.key ? 'tab active' : 'tab'}
            onClick={() => setTab(t.key)}
            onKeyDown={onKeyDown}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div id="disclosures-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} tabIndex={0}>
        <InfoGrid items={items} />
      </div>
    </Card>
  );
}

import { generatePDF } from '../utils/generatePDF';

export function PremiumCard({ premium }) {
  const handleDownloadPDF = () => {
    generatePDF('premium');
  };

  return (
    <Card id="premium" title="Premium" icon="💳" className="span-2">
      <div className="premium-layout">
        <div className="premium-breakdown">
          <div className="row"><span>Base Premium</span><span>{formatCurrency(premium.basePremium)}</span></div>
          <div className="row"><span>Add-on Premium</span><span>{formatCurrency(premium.addOnPremium)}</span></div>
          <div className="row"><span>GST (18%)</span><span>{formatCurrency(premium.gst)}</span></div>
          <div className="row total"><span>Total Premium</span><span>{formatCurrency(premium.totalPremium)}</span></div>
          <InfoGrid
            items={[
              { label: 'Frequency', value: premium.frequency },
              { label: 'Payment Mode', value: premium.paymentMode },
              { label: 'Last Paid On', value: formatDate(premium.lastPaidOn) },
              { label: 'Next Due Date', value: formatDate(premium.nextDueDate) },
              { label: 'Grace Period', value: `${premium.gracePeriodDays} days` },
            ]}
          />
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Policy Year</th>
                <th className="num">Amount</th>
                <th>Paid On</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {premium.history.map((h) => (
                <tr key={h.year}>
                  <td>{h.year}</td>
                  <td className="num">{formatCurrency(h.amount)}</td>
                  <td>{formatDate(h.paidOn)}</td>
                  <td>
                    <span className={`badge ${h.status === 'Paid' ? 'badge-success' : 'badge-warning'}`}>
                      {h.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button onClick={handleDownloadPDF}>Download PDF</button>
    </Card>
  );
}

export function AddOnsCard({ addOns }) {
  return (
    <Card id="add-ons" title="Add-ons / Riders" icon="➕">
      <ul className="list">
        {addOns.map((a) => (
          <li key={a.name}>
            <div className="list-head">
              <strong>{a.name}</strong>
              <span className="muted">{formatCurrency(a.premium)}/yr</span>
            </div>
            <p className="muted">{a.description}</p>
            {a.cover !== null && <p className="cover">Cover: {formatCurrency(a.cover)}</p>}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function FreeBenefitsCard({ benefits }) {
  return (
    <Card id="free-benefits" title="Free Benefits" icon="🎁">
      <ul className="list">
        {benefits.map((b) => (
          <li key={b.name}>
            <div className="list-head">
              <strong>{b.name}</strong>
              <span className="badge badge-success">Included</span>
            </div>
            <p className="muted">{b.description}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function SumAssuredCard({ sumAssured }) {
  const basePct = (sumAssured.baseSumAssured / sumAssured.totalCover) * 100;
  return (
    <Card id="sum-assured" title="Sum Assured" icon="🛡️" className="span-2">
      <div className="sa-figures">
        <div>
          <span className="muted">Base Sum Assured</span>
          <strong>{formatCurrency(sumAssured.baseSumAssured)}</strong>
        </div>
        <div>
          <span className="muted">Rider Sum Assured</span>
          <strong>{formatCurrency(sumAssured.riderSumAssured)}</strong>
        </div>
        <div>
          <span className="muted">Total Cover</span>
          <strong className="accent">{formatCurrency(sumAssured.totalCover)}</strong>
        </div>
      </div>
      <div
        className="stack-bar"
        role="img"
        aria-label={`Base ${basePct.toFixed(0)}%, riders ${(100 - basePct).toFixed(0)}% of total cover`}
      >
        <div className="stack-base" style={{ width: `${basePct}%` }} />
        <div className="stack-rider" style={{ width: `${100 - basePct}%` }} />
      </div>
      <div className="legend">
        <span><i className="dot dot-base" /> Base</span>
        <span><i className="dot dot-rider" /> Riders</span>
      </div>
      <InfoGrid
        items={[
          { label: 'Death Benefit', value: sumAssured.deathBenefit },
          { label: 'Death Benefit Option', value: sumAssured.deathBenefitOption },
          { label: 'Maturity Benefit', value: sumAssured.maturityBenefit },
        ]}
      />
    </Card>
  );
}
