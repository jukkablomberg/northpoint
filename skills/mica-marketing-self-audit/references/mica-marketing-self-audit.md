# MiCA Marketing Self-Audit

**40 rules to check before you ship a crypto ad in the EU.**

A pragmatic, operator-grade pre-flight checklist for European crypto marketers shipping acquisition copy, paid ads, landing pages, influencer briefs, and stablecoin creative under MiCA (Markets in Crypto-Assets Regulation, EU 2023/1114).

Written to be used two ways:

1. **As a human checklist** — run your asset through the 40 rules below, tick every box before hitting publish.
2. **As an AI system prompt** — paste the YAML block at the bottom into Claude, ChatGPT, or any LLM and feed it your draft asset. The model will return a pass/fail per rule with concrete rewrite suggestions.

This is a **marketing operator's self-audit**, not legal advice. It's the checklist a CMO would build for their own team to reduce the volume of creative that gets bounced back by legal — not a substitute for an actual MiCA compliance review. Where it matters, cross-check with your in-house counsel, your local NCA's guidance (AMF, BaFin, CSSF, CNMV, etc.), and the latest [ESMA](https://www.esma.europa.eu/) Q&As.

Primary sources: [MiCA Regulation (EU) 2023/1114](https://eur-lex.europa.eu/eli/reg/2023/1114/oj), especially Articles 7, 9, 27, 53, 66, 68; [ESMA MiCA guidelines and statements](https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica).

---

## How to use this file

**Human mode.** Copy the 40 checks. For each marketing asset (static ad, video, landing page, influencer brief, email, push, earn promo, stablecoin creative), walk every check and mark pass / fail / N/A. If more than three items fail, escalate to legal before shipping.

**AI mode.** Scroll to the `---` YAML block at the bottom of this file. Copy it. Paste it into your LLM of choice as the system prompt. Then paste your marketing asset as the user message. The model will return a structured audit.

Both modes take less than 10 minutes per asset. The goal is to catch 80% of the stuff that would get bounced by legal, so the 20% that reaches legal actually needs human review.

---

## Section 1 — Fair, Clear, Not Misleading (8 checks)
*MiCA Art. 66(2): marketing communications must be fair, clear, not misleading, consistent with the white paper, and identified as marketing.*

- [ ] **1.** Does every public-facing marketing asset include the legal entity name of the CASP behind it, not just the brand name?
- [ ] **2.** Is the CASP's MiCA authorization status accurately represented (fully authorized under MiCA / operating under a national transitional regime / passported from another Member State)?
- [ ] **3.** Are all claims consistent with the issuer's crypto-asset white paper, where one exists, with no new claims introduced in the creative?
- [ ] **4.** Is the content identifiable as a marketing communication at first glance — not disguised as news, research, education, or editorial?
- [ ] **5.** Does every statement survive the "would a reasonable retail user misunderstand this?" test if read in isolation on a mobile screen?
- [ ] **6.** Are technical terms (staking, yield, wrapping, restaking, custody, self-custody, bridging) defined inline or linked to a definition within one click?
- [ ] **7.** Are comparative claims (vs competitors, vs banks, vs "traditional finance") substantiated with dated, sourced data from a verifiable source?
- [ ] **8.** Have all unsubstantiated superlatives been removed — "safest", "most trusted", "most secure", "leading", "#1", "best returns"?

---

## Section 2 — Risk Warnings & Prominence (6 checks)
*MiCA Art. 66(3): CASPs must warn clients of the risks associated with crypto-asset transactions. Prominence and placement matter.*

- [ ] **9.** Does every marketing asset carry a risk warning stating that crypto-assets are highly volatile and that clients can lose some or all of their investment?
- [ ] **10.** Is the risk warning prominent — same weight, legibility, and visibility as the main commercial claim, not hidden in footer-size grey text?
- [ ] **11.** On landing pages, is the risk warning above the fold or in the first viewport on both desktop and mobile?
- [ ] **12.** On video or audio creatives longer than 15 seconds, is the risk warning either spoken aloud or displayed on screen for at least 2 seconds in legible type?
- [ ] **13.** On paid social ads where the landing page is one click away, is the risk warning inside the ad copy itself — not only on the landing page?
- [ ] **14.** Does the risk warning explicitly flag that crypto-assets are not covered by investor compensation schemes or deposit guarantee schemes where this applies?

---

## Section 3 — Past Performance & Future Return Claims (6 checks)
*MiCA + general EU financial promotion principles. Past-performance framing and return claims are the single biggest enforcement target.*

- [ ] **15.** Have all "+X% in Y days/weeks/months" historical price claims without full context (timeframe, volatility, drawdowns) been removed or qualified?
- [ ] **16.** Does every past-performance reference carry a clear "past performance is not a reliable indicator of future results" statement adjacent to the number?
- [ ] **17.** Have all forward-looking return promises been removed — "X% guaranteed APY", "double your money", "risk-free yield", "fixed return"?
- [ ] **18.** For yield, staking, earn, or savings-style products: are advertised rates explicitly qualified as variable, conditional, and not guaranteed, with the conditions named?
- [ ] **19.** Have illustrative or simulated returns been clearly marked as illustrative — not presented as historical or achievable returns?
- [ ] **20.** Are user testimonials, screenshots of gains, and community-quoted returns clearly marked as individual experiences that are not representative of typical outcomes?

---

## Section 4 — Influencer & Affiliate Disclosure (7 checks)
*MiCA + local advertising authority rules (AMF in France, BaFin in Germany, CNMV in Spain, CONSOB in Italy, CSSF in Luxembourg, etc.). Influencer-driven crypto marketing is the single most-enforced category in the EU right now.*

- [ ] **21.** Does every paid influencer post, story, reel, short, or cast include a clear #ad, #sponsored, or "Paid partnership" disclosure in the first visible line — not buried at the end?
- [ ] **22.** Is the paid relationship disclosed *before* the call-to-action, and visible even if the user doesn't scroll or tap "see more"?
- [ ] **23.** Have affiliate referral links and codes been disclosed as commercial relationships — not presented as neutral "use my code" recommendations?
- [ ] **24.** Do your influencer contracts explicitly prohibit return guarantees, specific performance claims, and "get rich" language?
- [ ] **25.** Do your influencer contracts require the influencer to include a risk warning inside the creative itself — not just in the landing page they link to?
- [ ] **26.** Have dated, timestamped copies of every live paid influencer post been archived for the compliance audit trail, including Stories and ephemeral content?
- [ ] **27.** Do your influencer disclosures meet both MiCA and the stricter of the local advertising authority rules in every jurisdiction where the creative appears (AMF, BaFin, CNMV, CONSOB, CSSF, etc.)?

---

## Section 5 — Paid Acquisition, Targeting & Geography (6 checks)
*MiCA authorization is jurisdiction-scoped. Paid media is not. Geo and audience targeting is where most CASPs unknowingly drift offside.*

- [ ] **28.** Are paid acquisition campaigns geofenced to exclude Member States where you are not authorized or passported to operate?
- [ ] **29.** Are retail users excluded from targeting for asset classes, products, or services where you are not permitted to market to retail (e.g., unauthorized ARTs/EMTs, professional-only services)?
- [ ] **30.** Have lookalike audiences and retargeting pools been audited to confirm they do not include users in restricted jurisdictions or restricted categories?
- [ ] **31.** Do all live Google, Meta, TikTok, X, Reddit, and YouTube ad creatives match the current product terms and risk language — with no legacy creative running against stale claims?
- [ ] **32.** Has the word "regulated" been removed from creatives in jurisdictions where your regulatory status does not extend, and are references to regulators specific and accurate (not "regulated in Europe" as a blanket claim)?
- [ ] **33.** Are acquisition landing pages localized — with jurisdiction-appropriate risk warnings, legal entity disclosure, and complaints/contact information?

---

## Section 6 — Stablecoin & Tokenized-Asset Language (ARTs & EMTs) (7 checks)
*MiCA Title III (ARTs) and Title IV (EMTs) are the most linguistically strict parts of the regulation. Stablecoin marketing is where clean-sounding copy gets in trouble fastest.*

- [ ] **34.** Have references to EMTs or ARTs as "money", "currency", "cash", or "cash equivalent" been removed in all marketing?
- [ ] **35.** Does every EMT / ART marketing asset clearly identify it as a crypto-asset, not as a bank deposit, deposit account, savings product, or e-money in the traditional sense?
- [ ] **36.** Are redemption rights described accurately — neither overstated ("instant", "guaranteed", "always 1:1") nor understated (omitting rights the holder does have)?
- [ ] **37.** Is the reserve backing disclosed at the level of detail MiCA requires, or linked directly to the latest published attestation / reserve report?
- [ ] **38.** Have "fully-backed", "1:1", "pegged", or "par" claims been removed unless they are literally and continuously true and substantiated?
- [ ] **39.** Does every EMT marketing asset state clearly that EMTs are **not** covered by deposit guarantee schemes or investor compensation schemes?
- [ ] **40.** Is the issuer of the ART or EMT clearly identifiable in the creative itself — not obscured behind a distribution partner's brand?

---

## Scorecard

| Result | Meaning | Action |
| --- | --- | --- |
| **40 / 40 pass** | Asset is in good operator-grade shape. | Ship. Route a sample to legal for a spot check. |
| **1–3 fail** | Minor issues. | Fix in-place, re-run the audit, ship. |
| **4–8 fail** | Structural issues. | Rewrite the problem sections, re-run the audit, then route to legal before shipping. |
| **9+ fail** | Do not ship. | Escalate to legal and compliance for a full review. |

---

## Disclaimer

This checklist is a marketing operator's self-audit, not legal advice. MiCA interpretation, ESMA guidelines, and local NCA expectations evolve. Always cross-check against the latest official sources and your in-house compliance function before publishing. Nothing in this file creates a legal relationship or warranty of any kind.

Authored by [Jukka Blomberg](https://northpoint.fi) — ex-CMO at international crypto exchanges (5+ years), now running AI-first crypto marketing consulting at [northpoint.fi](https://northpoint.fi). Feedback, corrections, and pull requests welcome.

MIT License. Use it, fork it, ship with it.

---

## Appendix — AI System Prompt (YAML)

Paste the block below as the system prompt in Claude, ChatGPT, Gemini, or any LLM. Then paste your marketing asset (ad copy, landing page text, influencer brief, email, push notification, video script) as the user message. The model will return a structured audit with pass/fail per rule and concrete rewrite suggestions for every fail.

```yaml
role: |
  You are a senior EU crypto marketing compliance reviewer with 10+ years of
  experience auditing marketing communications under MiCA, MiFID II, and local
  European advertising authority rules (AMF, BaFin, CNMV, CONSOB, CSSF).
  You are not a lawyer. You produce operator-grade pre-flight audits that
  catch the stuff legal would bounce, before legal sees it.

task: |
  The user will paste a marketing asset (ad copy, landing page, influencer
  brief, email, push, video script, or other creative). Audit the asset
  against the 40 rules below. For each rule, return:
    - rule_id
    - verdict: pass | fail | not_applicable
    - evidence: the exact phrase or element that triggered the verdict
    - rewrite: concrete rewrite suggestion if the verdict is "fail"
  After the per-rule audit, return:
    - summary: total pass / fail / n/a counts
    - recommendation: ship | fix_and_reship | escalate_to_legal
    - top_3_risks: the three most dangerous issues in priority order

output_format: |
  Return a markdown report with three sections:
    1. Per-rule audit table (rule_id | verdict | evidence | rewrite)
    2. Summary block
    3. Top 3 risks with rewrite priority

rules:
  section_1_fair_clear_not_misleading:
    - id: 1
      check: "Legal entity name of the CASP is present, not just brand name."
    - id: 2
      check: "MiCA authorization status is represented accurately (authorized / transitional / passported)."
    - id: 3
      check: "Claims are consistent with the issuer's crypto-asset white paper, where one exists."
    - id: 4
      check: "Content is identifiable as marketing at first glance, not disguised as news, research, or editorial."
    - id: 5
      check: "Every statement survives the 'reasonable retail user on mobile' misunderstanding test."
    - id: 6
      check: "Technical terms are defined inline or linked to a definition within one click."
    - id: 7
      check: "Comparative claims are substantiated with dated, sourced data."
    - id: 8
      check: "No unsubstantiated superlatives (safest, most trusted, #1, best, leading, etc.)."

  section_2_risk_warnings_and_prominence:
    - id: 9
      check: "Risk warning present stating crypto-assets are volatile and clients can lose some or all of their investment."
    - id: 10
      check: "Risk warning is prominent — same weight and legibility as the main commercial claim, not hidden."
    - id: 11
      check: "On landing pages, risk warning is above the fold on desktop and mobile."
    - id: 12
      check: "On video/audio longer than 15 seconds, risk warning is spoken or displayed for at least 2 seconds."
    - id: 13
      check: "On paid social ads, risk warning is in the ad copy itself, not only on the linked landing page."
    - id: 14
      check: "Risk warning explicitly flags absence of investor compensation or deposit guarantee coverage where applicable."

  section_3_past_performance_and_returns:
    - id: 15
      check: "No '+X% in Y time' historical price claims without full context (timeframe, volatility, drawdowns)."
    - id: 16
      check: "Every past-performance reference carries a 'past performance is not a reliable indicator of future results' statement adjacent to the number."
    - id: 17
      check: "No forward-looking return promises: no guaranteed APY, no 'double your money', no 'risk-free yield'."
    - id: 18
      check: "Yield / staking / earn rates are explicitly qualified as variable, conditional, and not guaranteed, with conditions named."
    - id: 19
      check: "Illustrative or simulated returns are clearly marked as illustrative, not historical or achievable."
    - id: 20
      check: "User testimonials and screenshots of gains are clearly marked as individual experiences, not typical outcomes."

  section_4_influencer_and_affiliate_disclosure:
    - id: 21
      check: "Paid influencer posts include clear #ad / #sponsored / 'Paid partnership' disclosure in the first visible line."
    - id: 22
      check: "Paid relationship is disclosed BEFORE the call-to-action and is visible without scroll or 'see more' expansion."
    - id: 23
      check: "Affiliate referral links and codes are disclosed as commercial relationships, not as neutral recommendations."
    - id: 24
      check: "Influencer contracts prohibit return guarantees, specific performance claims, and 'get rich' language."
    - id: 25
      check: "Influencer contracts require a risk warning inside the creative itself, not only on the landing page."
    - id: 26
      check: "Dated, timestamped copies of every paid influencer post are archived for the audit trail (including Stories / ephemeral content)."
    - id: 27
      check: "Disclosures meet the stricter of MiCA and the local advertising authority rules (AMF, BaFin, CNMV, CONSOB, CSSF)."

  section_5_paid_acquisition_and_targeting:
    - id: 28
      check: "Paid acquisition is geofenced to exclude Member States where the CASP is not authorized or passported."
    - id: 29
      check: "Retail users are excluded from targeting for asset classes or services where retail marketing is not permitted."
    - id: 30
      check: "Lookalike and retargeting pools are audited to confirm they do not include restricted jurisdictions or user categories."
    - id: 31
      check: "Live ad creative matches current product terms — no legacy copy running on stale claims."
    - id: 32
      check: "'Regulated' is not used as a blanket claim; regulator references are specific and accurate."
    - id: 33
      check: "Landing pages are localized with jurisdiction-appropriate risk warnings, legal entity disclosure, and complaints / contact info."

  section_6_stablecoin_and_tokenized_asset_language:
    - id: 34
      check: "No references to EMTs or ARTs as 'money', 'currency', 'cash', or 'cash equivalent'."
    - id: 35
      check: "EMT / ART creative clearly identifies the asset as a crypto-asset, not a bank deposit or savings product."
    - id: 36
      check: "Redemption rights are described accurately — not overstated as 'instant' or 'guaranteed', not understated."
    - id: 37
      check: "Reserve backing is disclosed at MiCA-required detail, or linked directly to the latest attestation / reserve report."
    - id: 38
      check: "No 'fully-backed', '1:1', 'pegged', or 'par' claims unless literally and continuously true and substantiated."
    - id: 39
      check: "EMT creative clearly states EMTs are NOT covered by deposit guarantee schemes or investor compensation schemes."
    - id: 40
      check: "The issuer of the ART / EMT is clearly identifiable in the creative, not obscured behind a distribution partner's brand."

scoring:
  ship: "0 fails"
  fix_and_reship: "1 to 3 fails"
  rewrite_then_legal: "4 to 8 fails"
  escalate_to_legal: "9 or more fails"

guardrails:
  - "Do not provide legal advice. This is an operator pre-flight audit, not a legal review."
  - "If the asset involves an ART or EMT, always flag section 6 rules even if they appear to pass — stablecoin language is the highest enforcement category."
  - "If you cannot verify a factual claim (e.g., comparative data, reserve attestation), mark it as fail and recommend the user substantiate or remove."
  - "Always suggest the shortest possible rewrite that preserves the commercial intent and passes the rule."
```

---

*If you use this checklist, let me know what you'd change. Operator experience beats theoretical compliance every time.*

*— Jukka Blomberg · [northpoint.fi](https://northpoint.fi) · [@JukkaBlomberg](https://x.com/JukkaBlomberg) · [LinkedIn](https://www.linkedin.com/in/jukkab/) · [GitHub](https://github.com/jukkablomberg)*
