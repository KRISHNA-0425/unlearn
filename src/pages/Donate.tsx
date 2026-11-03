import React, { useState } from 'react'
import { SectionHeading } from '../components/common/SectionHeading'
import { EyebrowLabel } from '../components/common/EyebrowLabel'
import { Button } from '../components/common/Button'

interface DonationTier {
  id: string
  amountINR: number
  amountUSD: number
  title: string
  subtitle: string
  description: string
  perk: string
  popular?: boolean
  icon: string
}

const CONCEPT_TIERS: DonationTier[] = [
  {
    id: "game-kit",
    amountINR: 1000,
    amountUSD: 15,
    title: "Pehal Game Kit Sponsor",
    subtitle: "Supplies 1 Complete Game & Comic Set",
    description: "Sponsors 1 complete Pehal Kit containing 4 Gender Comics (Domestic Violence, POCSO, Consent, Dowry), Consent Snakes & Ladders, and relationship playing cards.",
    perk: "Deployed to high-crime neighborhood basti centers and schools",
    icon: "casino"
  },
  {
    id: "prevention-circle",
    amountINR: 2500,
    amountUSD: 30,
    title: "Community Prevention Circle",
    subtitle: "Interactive Session for 35 Boys",
    description: "Underwrites a complete facilitated session for 35 adolescent boys in high-crime neighborhoods led by trained facilitators and Unlearn Leaders.",
    perk: "Covers facilitator stipends, student materials, and safe space access",
    popular: true,
    icon: "groups"
  },
  {
    id: "unlearn-leader",
    amountINR: 5000,
    amountUSD: 65,
    title: "Unlearn Leader TOT Certification",
    subtitle: "45+ Hours Facilitator Training",
    description: "Full certification training for an ex-inmate or grassroots youth leader, equipping them with trauma-informed facilitation, legal frameworks, and mentorship.",
    perk: "Includes 6-month continuous supervision by clinical psychologists",
    icon: "psychology"
  }
]

export const Donate: React.FC = () => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR')
  const [selectedTierId, setSelectedTierId] = useState<string>('prevention-circle')
  const [customAmount, setCustomAmount] = useState<string>('')
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi')

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    panNumber: '',
    country: 'India',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const selectedTier = CONCEPT_TIERS.find((t) => t.id === selectedTierId)
  const activeAmount = customAmount
    ? Number(customAmount) || 0
    : currency === 'INR'
    ? selectedTier?.amountINR || 2500
    : selectedTier?.amountUSD || 30

  const handleTierSelect = (id: string) => {
    setSelectedTierId(id)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '')
    setCustomAmount(val)
    if (val) {
      setSelectedTierId('custom')
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full legal name is required'
    if (!formData.email.trim() || !formData.email.includes('@'))
      newErrors.email = 'Valid email is required for tax receipt'
    if (!formData.phone.trim() || formData.phone.length < 10)
      newErrors.phone = 'Valid 10-digit phone number is required'
    if (activeAmount < (currency === 'INR' ? 100 : 5))
      newErrors.amount = `Minimum contribution is ${currency === 'INR' ? '₹100' : '$5'}`

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccessModal(true)
    }, 1000)
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-fixed/40 via-surface to-surface pt-10 pb-16 lg:pb-24 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <EyebrowLabel variant="blue" icon="verified_user">
                Section 80G Certified Non-Profit
              </EyebrowLabel>
              <EyebrowLabel variant="orange" icon="gavel">
                Primary Prevention of CAW
              </EyebrowLabel>
              <EyebrowLabel variant="neutral">
                Tihar Prison to Communities
              </EyebrowLabel>
            </div>

            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-[1.08]">
              Fuel the Movement to<br />
              <span className="text-primary italic font-serif inline-block">Unlearn Violence.</span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Every contribution directly funds the production of Pehal Kits, structured 45+ hour reformation sessions in prisons like Tihar Jail No. 5, and primary prevention workshops for boys in high-crime neighborhoods.
            </p>

            {/* Campaign Progress Meter */}
            <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/40 space-y-3">
              <div className="flex items-center justify-between text-xs font-label">
                <span className="font-bold text-secondary uppercase tracking-wider">
                  Primary Prevention Campaign
                </span>
                <span className="font-bold text-primary">
                  ₹18,45,000 of ₹25,00,000 Target
                </span>
              </div>
              <div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-primary-container rounded-full w-[74%] transition-all duration-1000" />
              </div>
              <div className="flex items-center justify-between text-[11px] font-body text-on-surface-variant">
                <span>74% raised to sponsor 500+ Pehal Kits across prisons and bastis</span>
                <span>Audited transparent ledger</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-label text-secondary font-bold">
              <div className="flex items-center gap-2 p-3 bg-surface-container-lowest rounded-lg border border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-xl">receipt_long</span>
                <span>100% Tax Deductible (80G)</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-surface-container-lowest rounded-lg border border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-xl">lock</span>
                <span>256-Bit SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-surface-container-lowest rounded-lg border border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-xl">fact_check</span>
                <span>Annual Audits by KPMG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Donation Area */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Col (7 cols): Select Impact Footprint */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <SectionHeading
                  eyebrow="Step 01"
                  eyebrowIcon="volunteer_activism"
                  title="Select Your Impact"
                  highlight="Footprint"
                  subtitle="Choose a direct tool sponsorship tier or enter a custom contribution."
                />

                {/* Currency Switcher */}
                <div className="inline-flex rounded-lg bg-surface-container-high p-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => setCurrency('INR')}
                    className={`px-4 py-1.5 text-xs font-label font-bold rounded transition-colors cursor-pointer ${
                      currency === 'INR'
                        ? 'bg-secondary text-white shadow-xs'
                        : 'text-on-surface hover:text-primary'
                    }`}
                  >
                    INR (₹)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrency('USD')}
                    className={`px-4 py-1.5 text-xs font-label font-bold rounded transition-colors cursor-pointer ${
                      currency === 'USD'
                        ? 'bg-secondary text-white shadow-xs'
                        : 'text-on-surface hover:text-primary'
                    }`}
                  >
                    USD ($)
                  </button>
                </div>
              </div>

              {/* Tiers List */}
              <div className="space-y-4">
                {CONCEPT_TIERS.map((tier) => {
                  const isSelected = selectedTierId === tier.id && !customAmount
                  const displayAmount =
                    currency === 'INR' ? `₹${tier.amountINR.toLocaleString('en-IN')}` : `$${tier.amountUSD}`

                  return (
                    <div
                      key={tier.id}
                      onClick={() => handleTierSelect(tier.id)}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-primary bg-primary-container/10 shadow-md ring-2 ring-primary/20'
                          : 'border-outline-variant/40 bg-surface-container-lowest hover:border-secondary'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                              isSelected ? 'border-primary bg-primary' : 'border-outline-variant'
                            }`}
                          >
                            {isSelected && (
                              <span className="material-symbols-outlined text-white text-sm">check</span>
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-headline-sm text-lg font-bold text-on-surface">
                                {tier.title}
                              </h3>
                              {tier.popular && (
                                <span className="px-2 py-0.5 rounded bg-primary text-white text-[10px] font-label font-bold uppercase">
                                  Recommended
                                </span>
                              )}
                            </div>
                            <span className="text-xs font-label text-primary font-bold">
                              {tier.subtitle}
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="font-headline text-2xl font-extrabold text-secondary">
                            {displayAmount}
                          </span>
                        </div>
                      </div>

                      <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed mt-2 pl-9">
                        {tier.description}
                      </p>

                      <div className="mt-3 pt-3 border-t border-outline-variant/30 flex items-center gap-2 pl-9 text-xs font-label text-secondary font-semibold">
                        <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                        <span>{tier.perk}</span>
                      </div>
                    </div>
                  )
                })}

                {/* Custom Amount Box */}
                <div
                  className={`p-6 rounded-xl border-2 transition-all ${
                    selectedTierId === 'custom'
                      ? 'border-primary bg-primary-container/10 ring-2 ring-primary/20'
                      : 'border-outline-variant/40 bg-surface-container-lowest'
                  }`}
                >
                  <label className="block text-xs font-label font-bold text-secondary uppercase tracking-wider mb-2">
                    Or Enter A Custom Amount ({currency === 'INR' ? '₹' : '$'})
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-headline font-bold text-on-surface">
                      {currency === 'INR' ? '₹' : '$'}
                    </span>
                    <input
                      type="text"
                      placeholder="e.g. 10000"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg text-lg font-headline font-bold focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                    />
                  </div>
                  {errors.amount && (
                    <span className="text-xs text-error mt-1 block">{errors.amount}</span>
                  )}
                </div>
              </div>

              {/* Research Insight Callout */}
              <div className="p-6 bg-surface-container-low rounded-xl border-l-4 border-secondary space-y-2">
                <blockquote className="font-body-sm text-sm italic text-on-surface leading-relaxed">
                  "Every 45-hour Pehal workshop directly reduces the 25% prison recidivism rate and creates young men who actively intervene against street harassment."
                </blockquote>
                <div className="text-xs font-label font-bold text-secondary">
                  Project Unlearn Baseline Research Team • Tihar Prisons Study
                </div>
              </div>
            </div>

            {/* Right Col (5 cols): Donor Form & Checkout */}
            <div className="lg:col-span-5 bg-surface-container-lowest p-6 lg:p-8 rounded-xl border border-outline-variant/40 shadow-lg space-y-6">
              <div>
                <span className="text-xs font-label uppercase tracking-wider text-primary font-bold block mb-1">
                  Step 02
                </span>
                <h3 className="font-headline-sm text-2xl font-bold text-on-surface">
                  Donor Details & Confirmation
                </h3>
                <p className="font-body-sm text-xs text-on-surface-variant">
                  Official 80G tax receipt will be generated instantly and dispatched to your email.
                </p>
              </div>

              {/* Selected summary */}
              <div className="p-4 bg-primary-container/20 rounded-lg flex items-center justify-between border border-primary-container/50">
                <span className="text-xs font-label font-bold text-on-surface">
                  Contribution Total:
                </span>
                <span className="font-headline text-2xl font-extrabold text-secondary">
                  {currency === 'INR' ? `₹${activeAmount.toLocaleString('en-IN')}` : `$${activeAmount}`}
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-label font-bold text-on-surface mb-1">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Suman Sen"
                    className="w-full px-3 py-2.5 text-sm bg-white border border-outline-variant rounded focus:outline-none focus:border-secondary"
                  />
                  {errors.fullName && (
                    <span className="text-xs text-error mt-0.5 block">{errors.fullName}</span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-label font-bold text-on-surface mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3 py-2.5 text-sm bg-white border border-outline-variant rounded focus:outline-none focus:border-secondary"
                    />
                    {errors.email && (
                      <span className="text-xs text-error mt-0.5 block">{errors.email}</span>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-label font-bold text-on-surface mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2.5 text-sm bg-white border border-outline-variant rounded focus:outline-none focus:border-secondary"
                    />
                    {errors.phone && (
                      <span className="text-xs text-error mt-0.5 block">{errors.phone}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-label font-bold text-on-surface mb-1">
                      PAN / Tax ID (Optional for 80G)
                    </label>
                    <input
                      type="text"
                      value={formData.panNumber}
                      onChange={(e) => setFormData({ ...formData, panNumber: e.target.value })}
                      placeholder="ABCDE1234F"
                      className="w-full px-3 py-2.5 text-sm bg-white border border-outline-variant rounded focus:outline-none focus:border-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-label font-bold text-on-surface mb-1">
                      Country of Residence
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm bg-white border border-outline-variant rounded focus:outline-none focus:border-secondary"
                    >
                      <option value="India">India (Local Donor - 80G)</option>
                      <option value="USA">United States (FCRA)</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Other">Other International</option>
                    </select>
                  </div>
                </div>

                {/* Payment Methods */}
                <div>
                  <label className="block text-xs font-label font-bold text-on-surface mb-2">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('upi')}
                      className={`p-2.5 rounded border text-xs font-label font-bold flex flex-col items-center gap-1 transition-colors cursor-pointer ${
                        paymentMethod === 'upi'
                          ? 'border-secondary bg-secondary/10 text-secondary'
                          : 'border-outline-variant text-on-surface hover:bg-surface-container-low'
                      }`}
                    >
                      <span className="material-symbols-outlined text-lg">qr_code_scanner</span>
                      <span>UPI / QR</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-2.5 rounded border text-xs font-label font-bold flex flex-col items-center gap-1 transition-colors cursor-pointer ${
                        paymentMethod === 'card'
                          ? 'border-secondary bg-secondary/10 text-secondary'
                          : 'border-outline-variant text-on-surface hover:bg-surface-container-low'
                      }`}
                    >
                      <span className="material-symbols-outlined text-lg">credit_card</span>
                      <span>Card</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('netbanking')}
                      className={`p-2.5 rounded border text-xs font-label font-bold flex flex-col items-center gap-1 transition-colors cursor-pointer ${
                        paymentMethod === 'netbanking'
                          ? 'border-secondary bg-secondary/10 text-secondary'
                          : 'border-outline-variant text-on-surface hover:bg-surface-container-low'
                      }`}
                    >
                      <span className="material-symbols-outlined text-lg">account_balance</span>
                      <span>NetBanking</span>
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={isSubmitting ? 'sync' : 'arrow_forward'}
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? 'Validating Contribution...'
                      : `Support Project Unlearn with ${
                          currency === 'INR' ? `₹${activeAmount.toLocaleString('en-IN')}` : `$${activeAmount}`
                        }`}
                  </Button>
                </div>

                <div className="text-[11px] text-center text-on-surface-variant">
                  Demonstration checkout flow • No real payment gateway credentials required
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Success Confirmation Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 animate-fadeIn">
          <div className="bg-surface-container-lowest p-8 lg:p-10 rounded-2xl max-w-lg w-full shadow-2xl space-y-6 text-center border border-outline-variant/40">
            <div className="w-16 h-16 rounded-full bg-primary-container text-on-surface mx-auto flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-4xl">celebration</span>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-label uppercase tracking-widest text-primary font-bold">
                Tax-Exempt Contribution Acknowledged
              </span>
              <h3 className="font-headline-sm text-2xl font-bold text-on-surface">
                Thank You, {formData.fullName}!
              </h3>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                Your pledged contribution of{' '}
                <strong>
                  {currency === 'INR' ? `₹${activeAmount.toLocaleString('en-IN')}` : `$${activeAmount}`}
                </strong>{' '}
                has been registered for primary prevention and prison reformation programs.
              </p>
            </div>

            <div className="p-4 bg-surface-container-low rounded-lg text-left text-xs font-body space-y-1.5 border border-outline-variant/30">
              <div className="flex justify-between">
                <span className="text-tertiary">Acknowledgment ID:</span>
                <span className="font-mono font-bold text-on-surface">UNL-2026-CAW980</span>
              </div>
              <div className="flex justify-between">
                <span className="text-tertiary">Official Contact:</span>
                <span className="font-bold text-secondary">projectunlearn20@gmail.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-tertiary">Tax Exemption:</span>
                <span className="font-bold text-secondary">Section 80G Certified</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                onClick={() => {
                  alert('Downloading simulated 80G Tax Exemption Certificate (PDF)...')
                }}
                variant="secondary"
                size="sm"
                icon="download"
              >
                Download 80G Certificate
              </Button>
              <Button
                onClick={() => setShowSuccessModal(false)}
                variant="primary"
                size="sm"
              >
                Back to Site
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
