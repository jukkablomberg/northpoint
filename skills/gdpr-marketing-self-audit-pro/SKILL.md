---
name: gdpr-marketing-self-audit-pro
description: Full GDPR + ePrivacy marketing self-audit. Invoke when you submit a marketing asset (email, signup form, cookie banner, landing page, privacy notice, ad creative, KOL contract, marketing automation flow) for the full 30-rule audit. Returns verdict + per-rule analysis + rewrite suggestions. Authored by an ex-CMO of two international crypto exchanges; reflects GDPR, ePrivacy Directive, EDPB Guidelines, and operator-grade interpretive notes.
license: MIT
metadata:
  source: https://northpoint.fi
  author: Jukka Blomberg
  version: 1.0.0
  authored: 2026-05-05
  published: 2026-09-03
  jurisdiction: EU/EEA (GDPR + ePrivacy)
---

# GDPR Marketing Self-Audit Pro — 30 Rules

This is the engine that powers the full audit behind `northpoint.fi/check/gdpr`. The public version checks 5 rules. This skill checks all 30+, with operator-grade interpretive notes that the public version doesn't include.

---

## How to invoke this skill

You submit a marketing asset (text, URL, screenshot, or PDF excerpt) plus optional metadata: asset type (email / signup form / cookie banner / landing page / privacy notice / ad / KOL contract / marketing-automation flow), intended jurisdiction(s), audience characteristics (B2C retail vs B2B vs mixed, EU/EEA only or global, includes minors etc.).

The model applies all 30 rules in order, classifies each as PASS / FLAG / FAIL, summarises the per-rule findings, and produces:

1. **Verdict line** — `X FAIL · Y FLAG · Z PASS · {ALL CLEAR | ATTENTION | DO NOT SHIP}`
2. **Per-rule analysis** — for each FAIL/FLAG: the specific text matched, the rule citation, the suggested rewrite
3. **Stamped read** (if Jukka is in the loop) — 1–3 sentences of judgment beyond the rule engine
4. **Audit-history row** — JSON object suitable for writing to the customer's Notion Audit History database

If the asset is a screenshot or PDF, describe what's visible and apply the rules to the visible content.

---

## System-prompt instructions

When invoked, the model takes the role of a senior crypto-marketing operator with GDPR + ePrivacy fluency. The disposition:

- **Marketing-side, not privacy-side.** This skill audits marketing-channel GDPR exposure (consent flows, cookie banners, profiling, unsubscribe, transparency at point of collection). It does NOT audit DPO-level work — vendor DPAs, breach response, full ROPA, DPIAs, transfer-impact assessments. If the asset crosses into DPO territory, note that and recommend qualified counsel.
- **Severity calibration.** FAIL = blackletter breach unlikely to survive a DPA inquiry; FLAG = needs attention but defensible with context; PASS = rule satisfied or doesn't apply.
- **Member-state nuance matters.** GDPR is EU-wide but national supervisors interpret and enforce differently. When relevant, note which national DPAs are stricter (e.g. France/CNIL on cookie banners; Germany/Bundesländer on consent; Ireland/DPC for big-tech adjacency).
- **ePrivacy is its own regime.** Cookies, marketing emails, B2B vs B2C distinctions sit under the ePrivacy Directive (and the upcoming ePrivacy Regulation), not under GDPR alone. Cite both when relevant.
- **Specific over general.** Quote the exact text from the asset that triggers the rule. Provide concrete rewrites.

---

## The 30 rules

Rules 1–5 are the public version (already on `northpoint.fi/check/gdpr`). Rules 6–30 are in this pack.

### CATEGORY A — Lawful basis & consent quality (rules 1, 6–9)

#### Rule 1 — Consent must be freely given (no forced/bundled consent)
- **Citation:** GDPR Art. 7 + EDPB Guidelines on Consent (05/2020)
- **Severity:** FAIL
- **Check:** Phrases that bundle marketing consent with account creation or terms acceptance: *"by signing up you agree to receive marketing", "you will be added to our newsletter automatically", "we'll send you marketing"*. Marketing consent must be a separate, granular, explicit opt-in.
- **Rewrite pattern:** Separate the consent: *"☐ I would like to receive product updates by email"* — unticked, opt-in, removable from the signup flow without preventing account creation.

#### Rule 6 — Granularity of consent (per purpose, per channel)
- **Citation:** GDPR Art. 7(2) + Recital 32 + EDPB Guidelines on Consent
- **Severity:** FAIL (when missing); FLAG (when partial)
- **Check:** A single tick-box covering "marketing emails AND SMS AND third-party promotions AND analytics AND personalisation" fails the granularity requirement. Each distinct purpose / channel should have its own consent.
- **Rewrite pattern:** Provide separate checkboxes: *"☐ Email updates  ☐ SMS alerts  ☐ Third-party offers  ☐ Personalised recommendations"*. Each unticked. Each individually withdrawable.

#### Rule 7 — Withdrawability of consent (as easy to withdraw as to give)
- **Citation:** GDPR Art. 7(3) — withdrawal must be as easy as giving
- **Severity:** FAIL
- **Check:** If giving consent is one click and withdrawing requires emailing customer support, calling a phone number, or filling out a form, fail.
- **Rewrite pattern:** Provide one-click unsubscribe and a self-serve preferences centre matching the granularity of the original consent. Match the affordance.

#### Rule 8 — Pre-ticked or silence-as-consent
- **Citation:** GDPR Art. 4(11) + Recital 32 + Planet49 (CJEU C-673/17) + EDPB Guidelines
- **Severity:** FAIL
- **Check:** Pre-ticked consent boxes, "by continuing to scroll you consent", silence-as-acceptance, or "deemed consent" patterns. All fail under GDPR's affirmative-action requirement.
- **Rewrite pattern:** Default state for consent is unticked / unselected. Affirmative action (clicking, ticking, sliding a toggle) is required.

#### Rule 9 — Children's consent (under 16, or 13 in some MS)
- **Citation:** GDPR Art. 8 (digital services to children); Member-State variation (DE/FR: 16; UK pre-Brexit: 13; PL: 16; etc.)
- **Severity:** FAIL (when targeting children without parental consent)
- **Check:** When the asset is or could be reasonably reaching minors, age verification + parental consent for under-16s is required. Crypto-marketing rarely targets children, but if asset is on TikTok/YouTube without 18+ gating, flag.
- **Rewrite pattern:** Add age gate: *"You must be 18 or over to use [Service]."* Verify at signup if material.

### CATEGORY B — Right to object & unsubscribe (rules 2, 10–11)

#### Rule 2 — Unsubscribe / opt-out mechanism in marketing emails
- **Citation:** GDPR Art. 21(2) + ePrivacy Directive Art. 13(3)
- **Severity:** FAIL
- **Check:** Every marketing email must contain a clear, working, free-of-charge opt-out mechanism. *"Reply STOP"* alone insufficient; should be a one-click link.
- **Rewrite pattern:** Add: *"You're receiving this because you signed up at [domain]. [Unsubscribe](URL) at any time."* Link must be functional and one-click.

#### Rule 10 — One-click unsubscribe (RFC 8058 + ePrivacy)
- **Citation:** ePrivacy Directive Art. 13(3) + Gmail/Yahoo bulk-sender requirements (effective 2024) + RFC 8058
- **Severity:** FLAG (FAIL for senders >5,000/day to Gmail/Yahoo)
- **Check:** For commercial senders, the unsubscribe link must work in one click — no login required, no confirmation page that requires another click. Major ESPs (Mailchimp, Klaviyo, ActiveCampaign) handle this if configured correctly.
- **Rewrite pattern:** Configure ESP for one-click unsubscribe. For high-volume senders, implement RFC 8058 List-Unsubscribe-Post header.

#### Rule 11 — Right to object disclosure (separate from unsubscribe)
- **Citation:** GDPR Art. 21(1) — right to object to processing based on legitimate interest
- **Severity:** FLAG
- **Check:** When the asset processes data on legitimate-interest basis (not consent), the data subject's right to object must be communicated *clearly and separately* from the privacy policy. This is separate from the unsubscribe right.
- **Rewrite pattern:** In privacy notice or signup flow: *"We process your data on the basis of legitimate interest in [purpose]. You can object at any time by [process]."*

### CATEGORY C — Cookie consent & ePrivacy specifics (rules 3, 12–15)

#### Rule 3 — No implied or pre-checked cookie consent
- **Citation:** GDPR Art. 7 + ePrivacy Art. 5(3) + Planet49 (CJEU C-673/17)
- **Severity:** FAIL
- **Check:** Phrases that imply consent: *"by using this site you agree", "we use cookies to improve your experience"* without consent prompt, *"non-essential cookies on by default"*. All fail.
- **Rewrite pattern:** Cookie banner with separate "Accept" and "Reject" buttons of equal prominence. Non-essential cookies off until explicit consent. Granular categories (analytics, marketing, etc.) toggleable separately.

#### Rule 12 — "Reject" button parity with "Accept"
- **Citation:** EDPB Guidelines on cookie consent (2023) + Planet49 + CNIL guidance
- **Severity:** FAIL
- **Check:** "Accept all cookies" prominent button without an equivalent "Reject all" / "Decline" / "Only essential" option of equal visual weight. CNIL has been particularly active here. Burying the reject option behind "Customise" or smaller links fails.
- **Rewrite pattern:** Equal visual weight for Accept and Reject buttons. Same colour, size, prominence. *"Customise"* is acceptable as a third option but not a substitute for *"Reject"*.

#### Rule 13 — Granular cookie categories
- **Citation:** GDPR Art. 7(2) + ePrivacy + EDPB Guidelines
- **Severity:** FLAG (FAIL when bundling many trackers under "essential")
- **Check:** Cookie banners that lump analytics, marketing, advertising, and personalisation under a single "Accept" decision fail granularity. Also: classifying behavioural-advertising cookies as "essential" fails the strict-necessity test.
- **Rewrite pattern:** Separate categories: Strictly Necessary (no opt-in), Functional, Analytics, Marketing/Advertising, Personalisation. Each user-toggleable. Strictly Necessary should genuinely be necessary.

#### Rule 14 — Consent or pay (cookie wall) validity
- **Citation:** EDPB Opinion 08/2024 on Consent or Pay (April 2024)
- **Severity:** FLAG (FAIL in some MS for retail audiences)
- **Check:** "Pay or accept advertising cookies" walls. EDPB's 2024 opinion: large online platforms can rarely satisfy "freely given" consent via pay-walls. For most crypto marketing surfaces, the cookie wall option is a flag — possible to do compliantly but most implementations fail.
- **Rewrite pattern:** Default to a balanced banner without a paywall. If using paywall, ensure the alternative is "free with no advertising tracking" (not "free with advertising"), and obtain qualified counsel review.

#### Rule 15 — Tracking technologies beyond cookies
- **Citation:** ePrivacy Art. 5(3) — applies to "storing or accessing information stored on terminal equipment", not just cookies
- **Severity:** FLAG
- **Check:** Browser fingerprinting, web beacons, pixel trackers, local storage, IndexedDB tracking, postMessage tracking — all fall under ePrivacy 5(3) consent requirements. If the asset uses any of these without prompt, flag.
- **Rewrite pattern:** Audit your tag manager / analytics setup. Apply the same consent requirements to fingerprinting, pixels, etc. as you do to cookies.

### CATEGORY D — Transparency at point of collection (rules 4, 16–19)

#### Rule 4 — Controller identity & contact disclosed
- **Citation:** GDPR Art. 13(1)(a)
- **Severity:** FLAG
- **Check:** Data-collection contexts must identify the data controller. *"AcmeExchange"* is insufficient if the legal entity is *"Acme Crypto Services Oy"*. Also: provide contact info (email or postal).
- **Rewrite pattern:** Near the data-collection point: *"Data controller: [Legal Entity], [registered address], [contact email]. See [Privacy Policy] for full details."*

#### Rule 16 — Purpose of processing disclosed
- **Citation:** GDPR Art. 13(1)(c) + EDPB Transparency Guidelines (2018)
- **Severity:** FLAG (when missing); FAIL (when materially misframed)
- **Check:** Generic "to improve our services" purposes fail specificity. Each specific purpose must be disclosed at the point of collection — not buried in a 20-page privacy policy.
- **Rewrite pattern:** List the specific purposes: *"Your email is used to: send order confirmations, send weekly product updates (with your consent), and verify your identity for AML compliance."*

#### Rule 17 — Lawful basis disclosed per purpose
- **Citation:** GDPR Art. 13(1)(c) + EDPB Guidelines
- **Severity:** FLAG
- **Check:** Each processing purpose has a lawful basis (consent, contract, legal obligation, vital interests, public task, legitimate interest). Marketing is typically consent. KYC processing is typically legal obligation. Mixed disclosure that obscures which basis applies to which purpose flags.
- **Rewrite pattern:** Per-purpose: *"Order confirmations: Article 6(1)(b) — necessary for performance of contract. Marketing emails: Article 6(1)(a) — your consent. Identity verification: Article 6(1)(c) — legal obligation under AMLD."*

#### Rule 18 — Recipients / categories of recipients
- **Citation:** GDPR Art. 13(1)(e)
- **Severity:** FLAG
- **Check:** Privacy notice must list recipients of personal data. "We may share your data with our partners" without specifying who/why fails. Crypto-specific: KYC providers (Sumsub, Onfido, Persona), AML providers (Chainalysis, Elliptic, TRM), payment processors, analytics, advertising platforms.
- **Rewrite pattern:** List categories with examples: *"Identity verification: [Sumsub]. Blockchain analytics: [Chainalysis, TRM]. Email delivery: [Postmark, Mailchimp]. Customer support: [Intercom]."*

#### Rule 19 — Retention period disclosure
- **Citation:** GDPR Art. 13(2)(a) + EDPB guidance
- **Severity:** FLAG (FAIL when fundamentally absent)
- **Check:** Retention periods must be disclosed. Vague language ("we keep your data as long as necessary") flags. KYC data has different retention obligations (typically 5+ years post account closure under AML rules) than marketing data (typically until consent withdrawn).
- **Rewrite pattern:** Specific periods: *"KYC data: retained 5 years post account closure (AMLD requirement). Marketing data: retained until consent withdrawn or 24 months without engagement, whichever comes first."*

### CATEGORY E — Profiling & automated decision-making (rules 5, 20–21)

#### Rule 5 — Profiling & personalization disclosed
- **Citation:** GDPR Art. 13(2)(f) + Art. 22 + Recital 71
- **Severity:** FLAG
- **Check:** Personalization or behavioral-advertising language without profiling disclosure. *"Personalised recommendations"*, *"based on your browsing"*, *"behavioural targeting"* — all require profiling disclosure.
- **Rewrite pattern:** *"We use your browsing activity to personalize content. You can object at any time — see Privacy Policy or [opt out here]."*

#### Rule 20 — Significance and consequences of automated decisions (Art. 22)
- **Citation:** GDPR Art. 22 + Recital 71 + EDPB Guidelines on Automated Individual Decision-Making (WP251rev.01)
- **Severity:** FAIL (when automated-only and significant)
- **Check:** When the asset describes processes that produce legal or similarly significant effects on the user (KYC pass/fail, transaction blocking, account suspension, credit decisions) AND those decisions are made solely by automated means without human intervention, the user must be informed of the logic, significance, and consequences.
- **Rewrite pattern:** *"We use automated systems to assess [transaction risk / KYC verification / account behaviour]. Decisions affecting your account include human review at [process step]. You have the right to request human review of automated decisions and to contest their outcome."*

#### Rule 21 — Right to opt out of profiling for marketing
- **Citation:** GDPR Art. 21(2) — right to object to direct marketing including profiling
- **Severity:** FLAG
- **Check:** Right to opt out of profiling for direct-marketing purposes is absolute (cannot be balanced against legitimate interest). Must be communicated at the point of first collection.
- **Rewrite pattern:** *"You can object to your data being used for marketing-related profiling at any time, and we must comply. Manage profiling preferences at [URL]."*

### CATEGORY F — International data transfers (rules 22–24)

#### Rule 22 — Third-country transfer disclosure (Art. 44+)
- **Citation:** GDPR Art. 44–49 + Schrems II ruling (CJEU C-311/18)
- **Severity:** FAIL (when materially absent)
- **Check:** When personal data is transferred outside the EU/EEA — typical for crypto: US-hosted analytics (Google, Mixpanel), US-hosted email (Sendgrid, Mailchimp), US-hosted CRM (HubSpot), US-hosted payment processors (Stripe), data residency in non-adequate countries — disclosure required.
- **Rewrite pattern:** In privacy notice: *"Some of your data may be transferred to: United States (analytics, email delivery), United Kingdom (KYC providers). Transfers covered by [adequacy decisions / SCCs / BCRs] — see [URL] for details."*

#### Rule 23 — Adequacy decision references
- **Citation:** GDPR Art. 45
- **Severity:** FLAG
- **Check:** When transfers go to countries with adequacy decisions (UK, Switzerland, Japan, etc.), citing the adequacy decision strengthens transparency. When transfers go to countries WITHOUT adequacy (US post-Schrems II, India, etc.), additional safeguards must be cited.
- **Rewrite pattern:** *"Transfers to UK: covered by EU adequacy decision. Transfers to US: covered by EU-US Data Privacy Framework (where applicable) or Standard Contractual Clauses (SCCs)."*

#### Rule 24 — SCCs / BCRs / Transfer-Impact-Assessment visibility
- **Citation:** GDPR Art. 46 + EDPB Recommendations 01/2020 (Schrems II implementation)
- **Severity:** FLAG
- **Check:** When transfers rely on SCCs or BCRs, the privacy notice should reference these mechanisms. Transfer Impact Assessments (TIAs) are not generally required to be published but their existence should be implied through proper SCC referencing.
- **Rewrite pattern:** *"Where transfers occur outside the EEA without an adequacy decision, we use Standard Contractual Clauses (SCCs) approved by the European Commission, supplemented by additional measures where necessary."*

### CATEGORY G — Sensitive category data (rules 25–27)

#### Rule 25 — Special categories require explicit consent (Art. 9)
- **Citation:** GDPR Art. 9
- **Severity:** FAIL (when collecting sensitive data without explicit consent or other Art. 9(2) basis)
- **Check:** Special categories per Art. 9: race/ethnicity, political opinions, religious/philosophical beliefs, trade-union membership, genetic data, biometric data (for identification), health data, sex life or sexual orientation. KYC processes may collect biometric data (face scans for liveness) — this requires explicit consent specifically for biometric processing under Art. 9.
- **Rewrite pattern:** Where biometric verification is used: *"We collect biometric data (face scan) for identity verification, with your explicit consent under GDPR Article 9(2)(a). Biometric data is [retention / deletion timeline] and is not used for any other purpose."*

#### Rule 26 — Crypto-specific: financial data sensitivity in marketing
- **Citation:** GDPR Art. 6 + EDPB guidance + national data-protection laws (some MS treat financial data as quasi-sensitive)
- **Severity:** FLAG
- **Check:** While GDPR doesn't explicitly classify financial data as Art. 9 special category, several Member States (DE, IT, FR) treat it with heightened sensitivity. Marketing that segments based on portfolio holdings, transaction volume, P&L data without explicit consent should flag.
- **Rewrite pattern:** Get specific consent for marketing segmentation based on financial data: *"To send you relevant updates about [yield products / large-volume trader features], we'd like to use your transaction history. ☐ Yes, use my transaction data for personalised marketing."*

#### Rule 27 — Children's data extra protection (Art. 8 + Recital 38)
- **Citation:** GDPR Art. 8, Recital 38 (children's data deserves specific protection)
- **Severity:** FAIL (when children's data collected without parental consent)
- **Check:** Crypto marketing typically excludes minors via 18+ KYC, but if any data flow could capture children's data (analytics on un-aged-gated landing pages, e.g.), that data needs special protection.
- **Rewrite pattern:** Age-gate before any data collection. Configure analytics to anonymize/strip data from sessions identifying as <18 if reachable.

### CATEGORY H — Direct marketing & ePrivacy specifics (rules 28–30)

#### Rule 28 — Soft opt-in (existing customer + similar products)
- **Citation:** ePrivacy Directive Art. 13(2) — soft opt-in exception
- **Severity:** FLAG
- **Check:** "Soft opt-in" allows marketing to existing customers about similar products without separate consent, IF: (a) the data was collected in the course of a sale or negotiations, (b) the marketing is for similar products/services, (c) the customer was given an opportunity to object at the point of collection, (d) every subsequent message offers opt-out. If asset relies on soft opt-in but conditions not met, flag.
- **Rewrite pattern:** Verify conditions: original collection was in-context, products are similar, opt-out was offered at collection AND every subsequent message. Document the legal basis when storing the consent record.

#### Rule 29 — Frequency restrictions
- **Citation:** ePrivacy + Member-State guidance + UK PECR (analogous)
- **Severity:** FLAG
- **Check:** Excessive marketing frequency without configurable preferences. Sending daily emails when consent was for a "weekly newsletter" can fail. Frequency should be honestly disclosed.
- **Rewrite pattern:** Disclose expected frequency: *"You'll receive ~1 email per week. You can adjust frequency in [preferences URL]."* Honour stated frequency.

#### Rule 30 — Cross-channel consent (email vs SMS vs push vs WhatsApp vs in-app)
- **Citation:** GDPR Art. 7(2) + ePrivacy Art. 13 + EDPB Guidelines on Consent
- **Severity:** FAIL (when consent for email used to justify SMS/WhatsApp); FLAG (when channel ambiguous)
- **Check:** Consent given for one marketing channel cannot be reused for another without separate consent. Granting "marketing consent" via newsletter signup does NOT authorise SMS, WhatsApp, push notifications, in-app messages, or direct mail.
- **Rewrite pattern:** Per-channel consent: *"☐ Email   ☐ SMS   ☐ WhatsApp   ☐ Push notifications"*. Each channel separately enabled and disablable. SMS / WhatsApp particularly: ePrivacy treats as direct marketing, requires opt-in, and many Member States have specific phone-marketing rules.

---

## Output format

**Two renderings, ONE contract.** The rule set, the three severities and the
verdict vocabulary below are the same in both. Section 1 is authoritative
whenever a structured-output tool is offered; section 2 is how the same data is
written out when it is not. They never disagree — if they ever appear to, section
1 wins.

### 1. Structured-output tool offered (the NorthPoint engine path) — AUTHORITATIVE

If the request offers a `submit_audit` tool, return the audit ONLY by calling
that tool, exactly once, after running every rule in the pack. Emit nothing else:
no plaintext report, no operator's read, no audit-history row. Nothing outside
the tool call is read by the caller.

The tool input is exactly this shape, and these field names are the contract:

- `verdict` — string, exactly one of: `ALL CLEAR`, `ATTENTION`, `DO NOT SHIP`.
  `DO NOT SHIP` if any rule is `fail`; `ATTENTION` if any is `flag` and none is
  `fail`; otherwise `ALL CLEAR`. There is no other verdict vocabulary.
- `fail_count`, `flag_count`, `pass_count` — integers, minimum 0, counted over
  the `rules` array below.
- `rules` — array. **REQUIRED.** One entry for EVERY rule in the pack, including
  every rule that PASSED. Never omit it, never rename it (not `triggered_rules`,
  not `findings`), never send it as a JSON string, and never send only the
  failures. Each entry is an object:
  - `id` — string, kebab-case rule id. Required.
  - `title` — string, short rule title. Required.
  - `citation` — string, primary source citation. Required.
  - `status` — string, exactly one of `pass`, `flag`, `fail` (lower case).
    Required. All three are reportable severities: `pass` is a result to be
    returned, not an omission.
  - `message` — string, a one-to-three sentence finding for this rule. Required.
  - `evidence` — string, optional. The specific phrase that triggered the rule.
  - `suggestion` — string, optional. The suggested rewrite or remediation for
    this rule. Some callers gate the paid rewrite by dropping this property from
    the schema; when it is absent from the schema, omit it — never fold a rewrite
    into `message` to work around that.

### 2. No structured-output tool offered (the installed pack)

Render the same audit as a human report. Same rule set, same three
severities, same verdict vocabulary as section 1 — the audit-history row's
`rules` array carries EVERY rule that ran, including the ones that passed:

```
=== GDPR AUDIT — {asset_id} ===
Asset type: {type}
Submitted: {timestamp UTC}
Audience scope: {EU/EEA only | global | mixed}
Includes minors potentially: {yes/no}

VERDICT: {N FAIL · M FLAG · K PASS} — {ALL CLEAR | ATTENTION | DO NOT SHIP}

[For each rule that FAILED:]
  ❌ Rule {id} — {title}
    Citation: {citation}
    Triggered text: "{exact quote from asset}"
    Issue: {one-sentence summary}
    Suggested rewrite: {concrete text}

[For each rule that FLAGGED:]
  ⚠️ Rule {id} — {title}
    Citation: {citation}
    Triggered text: "{exact quote from asset}"
    Issue: {one-sentence summary}
    Suggested action: {concrete fix}

[Summary of PASSED rules — list them by id without elaboration]
  ✓ Rules {X, Y, Z, ...} — passed.

OPERATOR'S READ:
{1-3 sentences from Jukka's perspective. What's the headline takeaway? Is this defensible? What single change would have the highest impact?}

AUDIT-HISTORY ROW (JSON):
{
  "asset_id": "...",
  "submitted_at": "...",
  "asset_type": "...",
  "asset_excerpt": "(first 200 chars)",
  "verdict": "ALL CLEAR | ATTENTION | DO NOT SHIP",
  "fail_count": N,
  "flag_count": M,
  "pass_count": K,
  "rules": [{"id": ..., "title": ..., "citation": ..., "status": "pass|flag|fail",
             "message": ..., "evidence": ..., "suggestion": ...}, ...],
  "reviewer": "AI + Jukka stamp",
  "review_url": "https://northpoint.fi/check/gdpr/audit/{asset_id}"
}
```

---

## When to escalate to Jukka

The AI applies all 30 rules and produces the analysis. Jukka reviews and stamps before delivery to the customer. Cases where the AI should explicitly flag for Jukka's attention:

1. **The asset crosses into DPO territory.** Vendor DPAs, breach response, full ROPA, DPIAs, transfer-impact assessments — Jukka redirects to qualified counsel.
2. **The asset triggers ≥3 FAILs.** Severity threshold for human review.
3. **The asset references special-category data (Art. 9).** Biometric, health, political, religious, sexual orientation. Jukka eyeballs.
4. **The asset processes children's data (or could).** Art. 8 — Jukka reviews before delivery.
5. **Cookie banner audits.** CNIL has been very active on cookie-banner enforcement; cookie banner audits are higher-stakes than general marketing audits and warrant Jukka's review.
6. **Cross-channel consent reuse.** SMS / WhatsApp / push consent reuse is one of the highest-fine-risk areas in EU enforcement. Jukka stamps these.
7. **Customer's first three weeks of using this pack.** Onboarding-period calibration.

For all other cases, the AI's output goes to the customer's Notion workspace + email digest within the SLA.

---

## Operational reminders

- **The audit is heuristic, not legal advice.** Every output must include the standard disclaimer at the top. For binding regulatory guidance, retain qualified counsel — particularly for cookie-banner remediation, transfer-impact assessments, and breach-response work.
- **Audit-history rows are evidence.** Every audit, regardless of outcome, is logged in the customer's Notion Audit History database. The audit trail is the regulatory-defence value.
- **DPA-specific stricter interpretation.** When the customer's primary regulator is CNIL (France), DPC (Ireland), BfDI (Germany), or AEPD (Spain), apply the stricter local interpretation rather than the EDPB minimum. Note the local stringency in the operator's read.
- **Update this skill when EDPB publishes new guidance.** GDPR is evolving; ePrivacy Regulation may finalise during 2026. Quarterly review.

---

## Cross-skill workflow

Assets are typically submitted for **both** MiCA and GDPR check in the same request — particularly a landing page, email, or signup form. The fulfilment workflow:

1. Run `mica-marketing-self-audit-pro` on the asset.
2. Run `gdpr-marketing-self-audit-pro` on the same asset.
3. Combine the verdicts in a single response: *"MiCA: 2 FAIL · 1 FLAG. GDPR: 1 FLAG · 0 FAIL. Combined: DO NOT SHIP."*
4. Single audit-history row in Notion with both rule-engines' findings.
5. Single rewrite suggestion document combining both lenses.

When MiCA and GDPR rules both apply (e.g. a yield-product email needs both risk warnings AND unsubscribe + consent), the rewrite must satisfy both. Jukka stamps the combined output.

---

*Authored by Jukka Blomberg, ex-CMO at two international crypto exchanges. NorthPoint Marketing Solutions Oy, Helsinki, Finland.*
