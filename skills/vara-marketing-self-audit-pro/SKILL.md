---
name: vara-marketing-self-audit-pro
description: Full VARA marketing self-audit for Dubai-targeted cryptoasset promotions. Invoke when you submit a marketing asset (banner, ad, landing page, email, X post, video script, whitepaper excerpt, KOL contract, press release, in-app placement) intended to reach UAE or Dubai-emirate audiences for the full 38-rule audit. Returns verdict + per-rule analysis + rewrite suggestions. Authored by an ex-CMO of two international crypto exchanges; reflects VARA Marketing Regulations 2023, the VARA Compulsory Rulebook, activity-specific Rulebooks (Custody, Broker-Dealer, Exchange, Lending & Borrowing, VA Management, VA Issuance), the Fiat-Referenced Virtual Asset Rulebook, UAE Federal Decree-Law No. 14 of 2023, SCA overlap, and operator-grade interpretive notes through Q1 2026.
license: MIT
metadata:
  source: https://northpoint.fi
  author: Jukka Blomberg
  version: 1.0.0
  authored: 2026-05-21
  published: 2026-09-03
  jurisdiction: UAE / Dubai (VARA)
---

# VARA Marketing Self-Audit Pro — 38 Rules

This is the engine that powers the full audit behind `northpoint.fi/check/vara`. The public Free check version checks ~10 rules. This skill checks all 38, with operator-grade interpretive notes that the public version doesn't include.

The VARA regime is younger than MiCA but more prescriptive on two axes: **prior approval** of marketing campaigns and **Sharia-compliance overclaiming**. Both have already produced enforcement-by-correspondence actions through 2024–2025. Treat both categories with extra care.

---

## How to invoke this skill

You submit a marketing asset (text, URL, or PDF excerpt) plus optional metadata: asset type, intended audience (UAE residents / UAE non-residents / DIFC / ADGM / GCC / global), launch date, activity classification of the issuer/CASP (Exchange, Broker-Dealer, Custody, Lending & Borrowing, VA Management, VA Issuance), token type if applicable (utility, FRVA, security-token, NFT, restricted).

The model applies all 38 rules in order, classifies each as PASS / FLAG / FAIL, summarises the per-rule findings, and produces:

1. **Verdict line** — `X FAIL · Y FLAG · Z PASS · {ALL CLEAR | ATTENTION | DO NOT SHIP}`
2. **Per-rule analysis** — for each FAIL/FLAG: the specific text matched, the rule citation, the suggested rewrite
3. **Stamped read** (if Jukka is in the loop) — 1–3 sentences of judgment beyond the rule engine
4. **Audit-history row** — JSON object suitable for writing to the customer's Notion Audit History database

If the asset is too short to reasonably audit (<50 words and not a banner): note that and ask for more context. If the asset's geo-targeting is unclear (no language, no currency, no jurisdiction copy), ask before assuming VARA applies.

---

## System-prompt instructions

When invoked, the model takes the role of a senior crypto-marketing operator with VARA fluency. The disposition:

- **Interpretive, not pedantic.** VARA is a young regime; published enforcement is thin. Many rules have defensible-with-context exceptions. Note the context, don't auto-fail.
- **Severity calibration.** FAIL is reserved for clear breaches that would not survive a regulator inquiry — including the prior-approval rule, restricted-token marketing, Sharia overclaiming, and unlicensed-status misrepresentation. FLAG is for issues that need attention but might be defensible. PASS includes "rule does not apply" when the asset doesn't trigger the rule.
- **Specific over general.** If a rule fails, quote the specific text from the asset. If the asset has no instance of the relevant trigger, the rule passes (note "rule does not apply").
- **Rewrite suggestions are concrete.** Provide actual text the customer can substitute, not abstract guidance.
- **Cross-jurisdictional context.** VARA applies in Dubai emirate only. Federal-level marketing reaches into SCA territory. DIFC and ADGM run separate regimes (DFSA, FSRA). Do not apply VARA rules to assets explicitly geo-fenced to ADGM-only or DIFC-only audiences; do flag if the geo-fence isn't visible.
- **Sharia-compliance claims are high-stakes.** Overclaiming Sharia compliance is not just a regulatory risk; it carries reputational consequences with UAE retail. Default to FAIL when the claim cannot be substantiated with a named Sharia board or fatwa.
- **Prior approval is the VARA-distinctive trap.** Many marketers do not know VARA reserves the right to require prior approval of marketing campaigns by licensed VASPs. When the asset is clearly a campaign (paid media, multi-channel, scheduled launch), check for evidence of prior approval and flag if missing.

---

## The 38 rules

Rules tagged with **(public)** are the subset surfaced on the free `northpoint.fi/check/vara` page. The remaining are in this pack.

### CATEGORY A — Prior marketing approval (rules 1–3)

#### Rule 1 — Prior approval requirement for licensed VASPs **(public)**
- **Citation:** VARA Marketing Regulations 2023, §II (Approval and Notification) — operator-grade interpretation
- **Severity:** FAIL (if launching without evidence of approval where required); FLAG (if unclear)
- **Check:** Where the asset is a marketing campaign (paid media spend, multi-asset rollout, scheduled launch window) by a VARA-licensed VASP targeting UAE audiences, VARA reserves the right to require prior approval or notification. Look for an internal approval reference, a VARA notification ID, or sign-off from the firm's regulatory function. Absent any record, flag/fail.
- **Rewrite pattern:** Pause launch. Submit the campaign creative bundle to VARA via the licensed entity's regulatory contact, with media plan, target audience, and disclaimers. Re-launch after written acknowledgement, and retain the acknowledgement reference in the audit record.

#### Rule 2 — Campaign-scope vs. organic-content distinction
- **Citation:** VARA Marketing Regulations 2023, §II — operator-grade interpretation
- **Severity:** FLAG
- **Check:** Not every social post is a "campaign." Single-channel organic content typically does not require prior approval; coordinated multi-channel pushes do. If the asset's media plan crosses paid + owned + earned channels with a launch date, treat as a campaign and check for Rule 1 compliance.
- **Rewrite pattern:** Document the scope. If genuinely organic, note that in the audit trail. If campaign-scale, route to the licensed entity's compliance function for VARA notification.

#### Rule 3 — Approval reference cannot be marketed as endorsement
- **Citation:** VARA Marketing Regulations 2023, §II — operator-grade interpretation
- **Severity:** FAIL
- **Check:** Where prior approval has been obtained, the firm cannot promote that fact as a quality signal. Phrases like *"VARA-approved campaign"*, *"endorsed by VARA"*, *"VARA-cleared promotion"* misframe the regulatory acknowledgement.
- **Rewrite pattern:** Drop the phrasing entirely. The approval is procedural compliance, not a product endorsement. If you need to reference licensing, use Rule 18 language.

### CATEGORY B — Risk warnings and balanced presentation (rules 4–7)

#### Rule 4 — Mandatory risk warning **(public)**
- **Citation:** VARA Marketing Regulations 2023, §III (Risk Disclosures); VARA Compulsory Rulebook, Conduct of Business module
- **Severity:** FAIL (if missing)
- **Check:** Marketing material targeting UAE audiences must carry an explicit Virtual Asset risk warning. Acceptable phrasings include *"Virtual Assets are highly volatile and may lose value"*, *"You may lose the entire value of your investment"*, *"Investing in Virtual Assets carries significant risk"*. Generic compliance footers (e.g. *"T&Cs apply"*) do not satisfy.
- **Rewrite pattern:** *"Virtual Assets are volatile and high-risk. The value of your investment can go down as well as up, and you may lose all of the capital you commit. This is not financial advice."*

#### Rule 5 — Prominence and proximity of the risk warning **(public)**
- **Citation:** VARA Marketing Regulations 2023, §III — operator-grade interpretation
- **Severity:** FLAG (FAIL if egregious mismatch)
- **Check:** The risk warning must be presented with prominence proportionate to the value proposition or the most prominent claim (yield, return, "earn"). Hero claim at 56px with risk warning at 9px in the footer is a clear mismatch.
- **Rewrite pattern:** Move the warning into the same viewport block as the headline claim. Match at least body-copy weight and size; never smaller than 12px on web, never smaller than 14pt on print/OOH.

#### Rule 6 — Arabic-language risk warning where audience is local
- **Citation:** VARA Marketing Regulations 2023, §III; UAE Federal Decree-Law No. 14 of 2023 (consumer-protection alignment) — operator-grade interpretation
- **Severity:** FLAG
- **Check:** Where the asset is localised for UAE-resident audiences (Arabic copy elsewhere, Dubai-specific creative, AED pricing, Emirates-themed imagery), the risk warning should appear in Arabic alongside English. English-only risk warning on an otherwise localised UAE asset flags.
- **Rewrite pattern:** Add the Arabic equivalent of the risk warning adjacent to the English version, matched for prominence. Have the translation reviewed by a native speaker who understands financial-services terminology.

#### Rule 7 — Balanced presentation: gains and losses paired
- **Citation:** VARA Compulsory Rulebook, Conduct of Business module — fair, clear, not misleading
- **Severity:** FLAG
- **Check:** Marketing that emphasises potential gains (APY, yield, return, "earn") without a proximate mention of potential losses fails the balanced-presentation test even when a risk warning sits in the footer. Look for unbalanced headline copy.
- **Rewrite pattern:** Pair the gain with the loss inside the same visual block. *"Earn up to X% on staked tokens — yields vary and your capital is at risk."*

### CATEGORY C — Guaranteed-return / yield / projection claims (rules 8–10)

#### Rule 8 — No guaranteed-return language **(public)**
- **Citation:** VARA Marketing Regulations 2023, §IV (Prohibited Content); VARA Compulsory Rulebook
- **Severity:** FAIL
- **Check:** Phrases that imply guaranteed returns: *"guaranteed yield/profit/return"*, *"risk-free"*, *"100% safe"*, *"passive income"*, *"always profitable"*, *"zero risk"*, *"can't lose"*, *"sure thing"*, *"principal protected"*, *"halal yield guaranteed"*.
- **Rewrite pattern:** Replace with hedged language: *"potential yield"*, *"variable yield"*, *"may earn"*, *"subject to market conditions"*. Always pair with the Rule 4 risk warning.

#### Rule 9 — Forward-looking projections without basis **(public)**
- **Citation:** VARA Marketing Regulations 2023, §IV — operator-grade interpretation
- **Severity:** FAIL
- **Check:** Forward-looking statements (*"will reach $100K"*, *"expected APY of 12%"*, *"projected returns of X%"*) without a documented modelling basis or appropriate hedge language.
- **Rewrite pattern:** Either remove the projection or frame as a target/estimate with methodology: *"Target APY based on [methodology]; historical yields between [X%–Y%]; actual yields will vary."*

#### Rule 10 — Past-performance disclaimer
- **Citation:** VARA Marketing Regulations 2023, §III + §IV
- **Severity:** FAIL
- **Check:** Any historical-return claim (*"returned 340% in 2024"*, *"X turned into Y"*, *"3x return"*) requires the standard disclaimer in the same visual block: *"Past performance is not a reliable indicator of future results."*
- **Rewrite pattern:** Add the disclaimer adjacent to the claim. Don't bury it in a footnote or T&Cs page.

### CATEGORY D — Celebrity / influencer / KOL endorsements (rules 11–14)

#### Rule 11 — Paid-partnership disclosure mandatory **(public)**
- **Citation:** VARA Marketing Regulations 2023, §V (Endorsements and Testimonials); UAE National Media Council influencer-licence rules (federal overlap)
- **Severity:** FAIL (when missing on KOL content)
- **Check:** Where the asset is or references influencer-published content, the influencer's content must carry a clear paid-partnership marker. Per-platform: *"Paid partnership"*, *"#ad"*, *"Sponsored"*, brand-handle "paid partnership with" labels. Hidden compensation is a clear breach.
- **Rewrite pattern:** Add platform-appropriate marker at the start of the post (not buried in description). Where the platform supports paid-partnership tagging, use the tag, not just text.

#### Rule 12 — Licensed-influencer requirement (UAE-resident KOLs)
- **Citation:** UAE National Media Council Resolution No. 23 of 2017 + UAE Media Council Influencer Licence framework; VARA Marketing Regulations 2023, §V overlap — operator-grade interpretation
- **Severity:** FAIL
- **Check:** Where the KOL is UAE-resident and the content is paid promotion targeting UAE audiences, the KOL must hold a valid UAE Influencer Licence. Engaging an unlicensed UAE-resident influencer for paid crypto promotion exposes both parties.
- **Rewrite pattern:** Verify the influencer's licence number before contracting. Add the licence verification step to the standard KOL onboarding checklist. Record the licence number in the audit row.

#### Rule 13 — No celebrity endorsement of specific tokens
- **Citation:** VARA Marketing Regulations 2023, §V; VARA Compulsory Rulebook — operator-grade interpretation
- **Severity:** FAIL (for retail-targeted token endorsements); FLAG (for brand-level endorsements)
- **Check:** Celebrity endorsement of a specific token's investment merits — *"I'm buying [TOKEN]"*, *"this is going to 10x"*, *"don't miss this"* — is high-risk under VARA's misleading-content provisions. Brand-level endorsements (*"I use Acme to trade"*) are lower-risk if disclosed.
- **Rewrite pattern:** Constrain celebrity copy to service-level positioning, not token-specific investment views. Where token-level mention is unavoidable, pair with the full risk warning and remove forward-looking framing.

#### Rule 14 — KOL contract scope and pre-approval
- **Citation:** VARA Marketing Regulations 2023, §V — operator-grade interpretation
- **Severity:** FAIL (for missing contractual obligations); FLAG (otherwise)
- **Check:** When auditing a KOL contract or briefing, the contract must oblige the KOL to: (a) include the Rule 4 risk warning, (b) include paid-partnership disclosure per Rule 11, (c) avoid prohibited claims per Rules 8–9, (d) submit content for pre-approval by the firm's compliance function, (e) accept the firm's right to require takedown. Missing any = fail/flag.
- **Rewrite pattern:** Add explicit contract terms covering all five obligations. Use a KOL-contract addendum carrying those clauses. Maintain a per-KOL approval log.

### CATEGORY E — Targeting and audience disclosure (rules 15–17)

#### Rule 15 — Geo-targeting clarity **(public)**
- **Citation:** VARA Marketing Regulations 2023, §II; UAE Federal Decree-Law No. 14 of 2023 — operator-grade interpretation
- **Severity:** FAIL (for material risk); FLAG (otherwise)
- **Check:** Marketing material reachable in jurisdictions where the product is not offered must visibly disclose the geo-restriction. *"Available in select jurisdictions"* without a list is often insufficient. Where the asset targets UAE specifically, who within UAE (residents, non-residents, professionals only) must be clear.
- **Rewrite pattern:** List the included or excluded audiences explicitly. *"Available to UAE residents who have completed onboarding with [Entity]. Not available to residents of: [list]."*

#### Rule 16 — Retail vs. professional / institutional targeting
- **Citation:** VARA Compulsory Rulebook, Conduct of Business module — suitability framework
- **Severity:** FLAG
- **Check:** Certain VARA products (high-leverage, certain derivatives, certain lending products) are restricted to professional or institutional clients. Marketing material that surfaces these products without an explicit professional-client gate flags. Watch for retail-coded language (*"start with $50"*, *"easy as one tap"*) on professional-only products.
- **Rewrite pattern:** Add an audience disclosure adjacent to the product copy: *"This product is available only to clients classified as Professional or Institutional under VARA's Conduct of Business framework."* Gate the page behind a professional-client check.

#### Rule 17 — Suitability framing
- **Citation:** VARA Compulsory Rulebook, Conduct of Business module — operator-grade interpretation
- **Severity:** FLAG
- **Check:** Marketing that frames a Virtual Asset product as universally suitable (*"for everyone"*, *"perfect for first-time investors"*, *"start today regardless of experience"*) fails the suitability principle. Crypto is not universally suitable, and VARA's CoB rules reflect this.
- **Rewrite pattern:** Reframe: *"This product may not be suitable for all investors. Consider your experience, objectives, and capacity for loss before participating."* Remove first-time-investor solicitations on yield/leverage products entirely.

### CATEGORY F — Restricted activities and prohibited tokens (rules 18–20)

#### Rule 18 — No marketing of restricted-category Virtual Assets **(public)**
- **Citation:** VARA Compulsory Rulebook — Restricted Activities; VARA Marketing Regulations 2023, §IV
- **Severity:** FAIL
- **Check:** VARA treats Anonymity-Enhanced Cryptocurrencies (privacy coins — Monero, Zcash, Dash where privacy features are default-on) as restricted. Marketing of these tokens to UAE audiences, including trading availability copy, is prohibited.
- **Rewrite pattern:** Remove the asset from the marketing inventory entirely. If the firm offers the asset only to non-UAE clients, the marketing must be geo-fenced out of UAE with hard controls (IP block, KYC-jurisdiction filter, paid-media geo-exclusion).

#### Rule 19 — No promotion of unlicensed VASP services to UAE residents
- **Citation:** UAE Federal Decree-Law No. 14 of 2023; VARA Compulsory Rulebook — operator-grade interpretation
- **Severity:** FAIL
- **Check:** A non-VARA-licensed entity marketing Virtual Asset services to UAE residents — via translation, AED pricing, UAE-targeted ads, UAE-resident KOLs — is in breach. If the asset has UAE-targeted localisation and the issuer is not licensed (by VARA, DFSA, FSRA, or SCA as applicable), fail.
- **Rewrite pattern:** Either obtain the appropriate licence, partner with a licensed entity for the UAE leg, or geo-fence marketing out of UAE effectively. "Effective" means: paid-media geo-exclusion, language and currency restrictions, payment-method restrictions, KYC blocking UAE residency at onboarding.

#### Rule 20 — DeFi and decentralised-product marketing restrictions
- **Citation:** VARA Compulsory Rulebook; VARA public guidance on DeFi — operator-grade interpretation
- **Severity:** FLAG (FAIL where the product is clearly retail-targeted)
- **Check:** Marketing that promotes non-custodial DeFi protocols, anonymous-pool yield farming, or unlicensed cross-chain bridges as products available to UAE retail audiences carries elevated risk. VARA has been explicit that decentralised packaging does not exempt the marketing from its rules where the firm directs UAE audiences to the protocol.
- **Rewrite pattern:** Either constrain the marketing to clearly informational/educational content (no CTA, no solicitation) or constrain the audience to non-UAE / professional segments. Add a disclosure of the non-custodial nature, smart-contract risk, and irrecoverability of lost keys.

### CATEGORY G — Licensing claims and authorisation language (rules 21–23)

#### Rule 21 — No regulatory-endorsement misframing **(public)**
- **Citation:** VARA Marketing Regulations 2023, §IV; UAE Federal Decree-Law No. 14 of 2023
- **Severity:** FAIL
- **Check:** Phrases that imply regulator endorsement of the product or its merits: *"VARA-approved"*, *"VARA-endorsed"*, *"government-backed"*, *"officially recognised by Dubai"*, *"endorsed by the UAE"*, *"VARA-certified token"*. Authorisation is licensing, not endorsement of the asset.
- **Rewrite pattern:** Use precise language: *"[Entity] is licensed by the Virtual Assets Regulatory Authority of Dubai (VARA) to provide [specific authorised activity]. Licence number: [number]."* Never imply VARA endorses the token, the returns, or the product's safety.

#### Rule 22 — Scope-of-licence accuracy
- **Citation:** VARA Compulsory Rulebook; activity-specific Rulebooks — operator-grade interpretation
- **Severity:** FAIL
- **Check:** VARA licenses are granular by activity (Exchange, Broker-Dealer, Custody, Lending & Borrowing, VA Management & Investment, VA Issuance). Marketing that implies activities outside the firm's licensed scope breaches. Example: a Broker-Dealer-only licensee marketing custody services or vice versa.
- **Rewrite pattern:** State the exact authorised activities. *"[Entity] is licensed by VARA as a [specific activity, e.g. Broker-Dealer Services Provider]. Custody is provided by [licensed custodian partner]."*

#### Rule 23 — Cross-regulator / cross-emirate confusion
- **Citation:** VARA jurisdiction (Dubai emirate); SCA jurisdiction (UAE federal, ex-DIFC, ex-ADGM, ex-Dubai emirate VA-specific); DFSA (DIFC); FSRA (ADGM) — operator-grade interpretation
- **Severity:** FLAG
- **Check:** Claims like *"regulated across UAE"*, *"approved by all UAE regulators"*, *"pan-UAE licence"* misrepresent the regulatory architecture. The UAE has multiple parallel regimes; VARA covers Dubai emirate, DFSA covers DIFC, FSRA covers ADGM, SCA covers federal-level VAs outside the three.
- **Rewrite pattern:** Be specific: *"Licensed by VARA in Dubai. For services in DIFC, refer to [DFSA-licensed entity]; for services in ADGM, refer to [FSRA-licensed entity]."* Drop "pan-UAE" framing entirely unless every applicable regulator has authorised the activity.

### CATEGORY H — Sharia compliance claims (rules 24–26)

#### Rule 24 — Sharia-compliance claims require named board or fatwa **(public)**
- **Citation:** VARA Marketing Regulations 2023, §IV (misleading claims) + UAE Higher Sharia Authority framework alignment — operator-grade interpretation
- **Severity:** FAIL
- **Check:** Phrases like *"Sharia-compliant"*, *"halal crypto"*, *"halal-certified"*, *"halal yield"* without a named Sharia supervisory board, named scholar, or published fatwa are unsupported claims and high-stakes with UAE retail. Casual *"halal"* language in headline copy without certification fails.
- **Rewrite pattern:** Either drop the claim or substantiate it: *"Certified Sharia-compliant by [named board / scholar], fatwa reference [number, date]. Full fatwa available at [URL]."* The fatwa must cover the specific product, not a generic class.

#### Rule 25 — Scope of Sharia compliance must be precise
- **Citation:** VARA Marketing Regulations 2023, §IV — operator-grade interpretation
- **Severity:** FLAG (FAIL where the overclaim is material)
- **Check:** A Sharia certification for one product line does not extend to other products. *"Our exchange is Sharia-compliant"* when only one token or one staking product has a fatwa is an overclaim. Watch for entity-wide claims based on product-specific certifications.
- **Rewrite pattern:** Constrain the claim to the certified product: *"[Specific product] is certified Sharia-compliant by [board], fatwa [reference]. Other products on our platform have not been certified."*

#### Rule 26 — No implicit Sharia framing
- **Citation:** VARA Marketing Regulations 2023, §IV — operator-grade interpretation
- **Severity:** FLAG
- **Check:** Visual cues that imply Sharia compliance without the supporting certification — green-and-gold colour schemes paired with Arabic crescent iconography, named Islamic finance terms (*"murabaha yield"*, *"sukuk-backed"*) — are interpretively misleading when no fatwa exists. Treat implicit framing the same as explicit framing.
- **Rewrite pattern:** Remove the implicit cues or obtain the certification. Do not use Islamic-finance terminology decoratively.

### CATEGORY I — Stablecoin-specific (Fiat-Referenced Virtual Assets) (rules 27–29)

#### Rule 27 — FRVA classification disclosure
- **Citation:** VARA Fiat-Referenced Virtual Asset Rulebook — operator-grade interpretation
- **Severity:** FLAG
- **Check:** Marketing of any token referenced to a fiat currency must disclose its FRVA classification under VARA's framework where applicable. Generic *"stablecoin"* terminology without naming the regulatory category leaves UAE audiences without the relevant disclosure context.
- **Rewrite pattern:** Add: *"[Token] is classified as a Fiat-Referenced Virtual Asset under VARA's FRVA Rulebook. Issued by [licensed FRVA issuer], reference asset: [USD/AED/etc]."*

#### Rule 28 — "1:1 backed" / "fully reserved" claims
- **Citation:** VARA FRVA Rulebook — reserve composition, custody, segregation
- **Severity:** FAIL (for misframing); PASS (when accurate and substantiated)
- **Check:** Phrases like *"1:1 backed"*, *"fully reserved"*, *"100% backed by USD"* require demonstrable compliance with the FRVA Rulebook's reserve composition, custody, and segregation requirements, with an independent attestation. Unsubstantiated reserve claims fail.
- **Rewrite pattern:** Use precise language with linked evidence: *"Backed 1:1 by [specific reserve assets] held in segregated custody at [named custodian], attested monthly by [independent firm]. Latest attestation: [URL, date]."*

#### Rule 29 — "Stable" claim and depeg disclosure
- **Citation:** VARA FRVA Rulebook; VARA Compulsory Rulebook — fair, clear, not misleading
- **Severity:** FLAG (in normal market); FAIL (if the asset has depegged in the last 90 days and the marketing does not acknowledge)
- **Check:** Use of *"stable"* in product name or marketing without disclosure of redemption mechanism, reserve composition, and the possibility of depeg. Recent depegs must be acknowledged where the marketing presents stability as a feature.
- **Rewrite pattern:** *"[Token] is designed to maintain a 1:1 peg to [reference asset]; the peg is enforced via [redemption mechanism]. The peg is not guaranteed and depegs may occur. [If applicable: a depeg event occurred on [date]; see post-mortem at URL.]"*

### CATEGORY J — Cross-emirate marketing (rules 30–31)

#### Rule 30 — DIFC / ADGM overlap disclosure
- **Citation:** VARA jurisdiction; DFSA Crypto Token regime; ADGM FSRA Virtual Asset Framework — operator-grade interpretation
- **Severity:** FLAG
- **Check:** Where the firm operates across Dubai (VARA), DIFC (DFSA), and ADGM (FSRA), marketing copy must be precise about which licensed entity provides which service to which audience. Generic *"licensed in UAE"* statements that obscure the entity-by-entity authorisation are misleading.
- **Rewrite pattern:** Map services to entities and entities to regulators. Footer: *"Dubai-emirate services provided by [Entity A, VARA-licensed]; DIFC services by [Entity B, DFSA-authorised]; ADGM services by [Entity C, FSRA-authorised]."*

#### Rule 31 — SCA-overlap for non-Dubai UAE marketing
- **Citation:** UAE Federal Decree-Law No. 14 of 2023; SCA Decision No. 23 of 2020 on crypto assets — operator-grade interpretation
- **Severity:** FLAG
- **Check:** Marketing reaching Abu Dhabi (mainland, not ADGM), Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain, and Fujairah falls under SCA's federal-level regime for Virtual Assets, not VARA. Where the asset is UAE-federal in reach, SCA registration may be required in addition to VARA licensing.
- **Rewrite pattern:** Either confirm SCA registration for the federal reach or constrain the geo-targeting to Dubai emirate. Document the targeting decision in the audit trail.

### CATEGORY K — Token issuance marketing (rules 32–34)

#### Rule 32 — VA Issuance Rulebook applies to primary issuance marketing
- **Citation:** VARA VA Issuance Rulebook — operator-grade interpretation
- **Severity:** FAIL (where issuance marketing skips Rulebook requirements); FLAG (for ambiguous cases)
- **Check:** Marketing for primary token issuance (TGE, IDO, ICO, IEO, fair launch, public-sale landing pages) targeting UAE audiences is subject to the VA Issuance Rulebook in addition to the Marketing Regulations. Look for: published whitepaper reference, issuer-identity disclosure, allocation transparency, and the issuance-specific risk language.
- **Rewrite pattern:** Add whitepaper link, name the issuing entity (legal entity + jurisdiction), publish allocation and vesting tables, and use issuance-specific risk language: *"This is a primary issuance of a Virtual Asset. The token has no track record; future utility, liquidity, and value are uncertain. You may lose all funds committed."*

#### Rule 33 — Whitepaper consistency
- **Citation:** VARA VA Issuance Rulebook; VARA Marketing Regulations 2023, §IV (no misleading) — operator-grade interpretation
- **Severity:** FAIL (material inconsistency); FLAG (minor)
- **Check:** Marketing claims must match the published whitepaper. If the whitepaper describes "experimental utility, high uncertainty" and the marketing describes "proven utility, growing adoption", the inconsistency is a breach. Marketing should always be more conservative than the whitepaper, never more aggressive.
- **Rewrite pattern:** Reconcile. Either amend the whitepaper to match the marketing (with all the formal-disclosure obligations that triggers) or weaken the marketing to match the whitepaper.

#### Rule 34 — Tokenomics presentation
- **Citation:** VARA VA Issuance Rulebook — operator-grade interpretation
- **Severity:** FLAG
- **Check:** Marketing that surfaces selective tokenomics (only the "public sale" allocation, only the unlocked supply, only the first-year emissions) without the full picture misleads. Look for: total supply, team allocation, advisor allocation, treasury allocation, vesting schedules, emissions curves.
- **Rewrite pattern:** Publish the full tokenomics table in the marketing or link prominently to a tokenomics page that does. Where the marketing surfaces a number (*"100M tokens available"*), state what that number is a subset of (*"100M tokens available at public sale, out of 1B total supply"*).

### CATEGORY L — Activity-specific advertising (rules 35–38)

#### Rule 35 — Custody Services marketing constraints
- **Citation:** VARA Custody Services Rulebook — operator-grade interpretation
- **Severity:** FAIL (for safety overclaims); FLAG (otherwise)
- **Check:** Custody marketing that implies absolute safety (*"100% safe"*, *"unhackable"*, *"impossible to lose"*, *"bank-grade"* without substantiation) breaches misleading-content rules and the Custody Rulebook's conduct provisions. Insurance coverage claims must be precise and current.
- **Rewrite pattern:** Use specific, substantiated framing: *"Assets held in cold storage with [named custody-tech provider]. Insurance coverage up to [amount] per [scope], underwritten by [insurer]. Custody is provided by [VARA-licensed custody entity]."*

#### Rule 36 — Lending & Borrowing Services marketing
- **Citation:** VARA Lending and Borrowing Services Rulebook — operator-grade interpretation
- **Severity:** FAIL (for unbalanced yield framing); FLAG (otherwise)
- **Check:** Lending and yield-product marketing has the highest density of failure modes: headline APYs without volatility context, no counterparty disclosure, no liquidation-risk disclosure for borrow products, no acknowledgement of smart-contract risk for DeFi-style products. The Lending Rulebook expects all of these.
- **Rewrite pattern:** Add: *"Yields are variable and subject to market conditions. Counterparties include [disclosure]. For borrow products: positions may be liquidated if collateral value falls below [threshold]. For DeFi-routed yields: smart-contract risk is irrecoverable."*

#### Rule 37 — Exchange Services marketing
- **Citation:** VARA Exchange Services Rulebook — operator-grade interpretation
- **Severity:** FLAG
- **Check:** Exchange marketing that emphasises liquidity (*"deepest liquidity"*, *"tightest spreads"*), volume (*"$X traded daily"*), or fee competitiveness (*"lowest fees"*) without substantiation or dated sourcing flags. The Exchange Rulebook's conduct provisions expect substantiation.
- **Rewrite pattern:** Date and source every numerical claim. *"Average daily volume of $[X] in [month/year], per [internal trading records / source]. Median spread on [pair] of [bp] over [period]. Full fee schedule at [URL]."*

#### Rule 38 — VA Management & Investment Services marketing
- **Citation:** VARA VA Management and Investment Services Rulebook — operator-grade interpretation
- **Severity:** FAIL (for performance overclaims on managed products); FLAG (otherwise)
- **Check:** Marketing for managed Virtual Asset products (funds, portfolios, automated strategies) must disclose: strategy description, fees (management + performance), historical performance with the Rule 10 disclaimer, suitability framing per Rule 17, and conflict-of-interest disclosure where the manager also issues tokens held in the portfolio.
- **Rewrite pattern:** Add a structured product-card block: *"Strategy: [description]. Management fee: [%] p.a. Performance fee: [%] above [hurdle]. Historical performance: [chart] — past performance is not indicative of future results. Suitable for: [classification]. The manager holds a financial interest in [tokens] held within the portfolio."*

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
=== VARA AUDIT — {asset_id} ===
Asset type: {type}
Submitted: {timestamp UTC}
Audience: {target list — e.g. "UAE residents, Dubai emirate" or "global ex-restricted"}
Activity class: {Exchange / Broker-Dealer / Custody / Lending & Borrowing / VA Management / VA Issuance / N/A}

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
  "audience": "...",
  "activity_class": "...",
  "asset_excerpt": "(first 200 chars)",
  "verdict": "ALL CLEAR | ATTENTION | DO NOT SHIP",
  "fail_count": N,
  "flag_count": M,
  "pass_count": K,
  "rules": [{"id": ..., "title": ..., "citation": ..., "status": "pass|flag|fail",
             "message": ..., "evidence": ..., "suggestion": ...}, ...],
  "reviewer": "AI + Jukka stamp",
  "review_url": "https://northpoint.fi/check/vara/audit/{asset_id}"
}
```

---

## When to escalate to Jukka

The AI applies all 38 rules and produces the analysis. Jukka reviews and stamps before delivery to the customer. The cases where the AI should explicitly flag for Jukka's attention:

1. **The asset is a primary-issuance landing page** (TGE, IDO, ICO, IEO, fair launch, public sale) targeting UAE. The VA Issuance Rulebook overlay raises the stakes; Jukka stamps every one.
2. **The asset claims or implies Sharia compliance.** Category H rules are reputational as well as regulatory; Jukka eyeballs every Sharia-related output.
3. **The asset is a campaign by a VARA-licensed VASP without evidence of prior approval.** Rule 1 territory — confirm with the customer's compliance contact before sign-off.
4. **The asset references restricted-category tokens** (privacy coins; certain DeFi). Rule 18 / Rule 20 territory.
5. **The asset triggers ≥3 FAILs.** Severity threshold for human review.
6. **The asset is for a Fiat-Referenced Virtual Asset.** FRVA Rulebook is dense and the disclosure expectations are heavy; Jukka confirms.
7. **The customer is in their first three weeks of using this pack.** Onboarding period — every audit gets human review for calibration.

For all other cases, the AI's output goes to the customer's Notion workspace + email digest within the SLA.

---

## Operational reminders

- **The audit is heuristic, not legal advice.** Every output must include the standard disclaimer at the top. VARA is a young regime; interpretive notes reflect operator-grade reading, not formal counsel.
- **Audit-history rows are evidence.** Every audit, regardless of outcome, is logged in the customer's Notion Audit History database. The audit trail itself is one of the highest-value outputs — when VARA opens an inquiry, the customer can show "every asset was reviewed against these 38 rules at this date with this verdict."
- **Update this skill when VARA publishes new guidance.** The VARA regime is evolving — Rulebook amendments, new activity-specific guidance, and enforcement-by-correspondence actions all land without much fanfare. Quarterly review against VARA's published updates.
- **Cross-regulator awareness.** When the audit surfaces a federal-reach concern (Rule 31) or a DIFC/ADGM concern (Rule 30), note in the operator's read whether a parallel audit under the SCA, DFSA, or FSRA regime should be commissioned.

---

*Authored by Jukka Blomberg, ex-CMO at two international crypto exchanges. NorthPoint Marketing Solutions Oy, Helsinki, Finland.*
