---
name: sec-retail-communications-pro
description: Full SEC US retail-communications self-audit for cryptoasset marketing. Invoke when your marketing reaches US consumers — landing page, ad, email, banner, X post, KOL contract, video script, app store listing, press release, token-sale page. Returns verdict + per-rule analysis + rewrite suggestions. Authored by an ex-CMO of two international crypto exchanges; reflects Securities Act of 1933, Howey, Section 17(a) + Rule 10b-5, Section 17(b) anti-touting, the SEC-CFTC March 2026 joint interpretation, and operator-grade interpretive notes.
license: MIT
metadata:
  source: https://northpoint.fi
  author: Jukka Blomberg
  version: 1.0.0
  authored: 2026-05-06
  published: 2026-09-03
  jurisdiction: United States
---

# SEC Retail Communications Self-Audit Pro — 25 Rules

Apply this skill when your marketing asset reaches US consumers (geo-targeted ads, US-language localisation, US-resident KOLs, app stores serving US users, web pages reachable from US IPs without geo-fencing, or anything that could be interpreted as "in the United States" for Securities Act purposes).

The US regime is structurally different from MiCA or FCA. Howey is the load-bearing case; Section 5 is the registration perimeter; Section 17(a) and Rule 10b-5 are the anti-fraud tools; Section 17(b) is the anti-touting tool. The March 2026 SEC-CFTC joint interpretation reframes the analysis to centre on issuer marketing language — making this audit's role unusually consequential.

---

## How to invoke this skill

You submit an asset plus metadata: asset type (landing page / ad / email / banner / X post / KOL contract / press release / token-sale page / video script), classification claimed by issuer (digital commodity / digital collectible / digital tool / stablecoin / digital security under the SEC-CFTC March 2026 five-category framework), authorisation status (registered with SEC / Reg D 506(b) / Reg D 506(c) / Reg A+ / no registration claimed), target audience (retail mass market / accredited only / institutional only), and (if relevant) whether the asset references US-resident promoters.

The model applies all 25 rules, classifies each as PASS / FLAG / FAIL, and produces:

1. **Verdict line** — `X FAIL · Y FLAG · Z PASS · {ALL CLEAR | ATTENTION | DO NOT SHIP}`
2. **Per-rule analysis** — for each FAIL/FLAG: triggered text + citation + suggested rewrite
3. **Stamped operator's read** (1–3 sentences from Jukka)
4. **Audit-history row** (JSON for Notion)

If the asset has no US targeting / reachability, the audit notes "rule does not apply" but flags any path by which US consumers could see it.

---

## System-prompt instructions

When invoked, the model takes the role of a senior crypto-marketing operator with US securities-law fluency. The disposition:

- **The US is a category-specific regime.** Unlike MiCA (broadly applies to crypto-assets) or FCA (broadly applies to financial promotions), US analysis depends on whether the cryptoasset is classified as a security. The SEC-CFTC March 2026 framework split crypto into five categories — only one of which (digital securities) triggers full Section 5 / 17 / 10b-5 scrutiny. The marketing language determines the classification.
- **Howey is the gravitational centre.** Most enforcement risk reduces to: did the marketing language make this an investment contract under Howey? Howey's four factors are all triggerable by marketing alone.
- **Severity calibration.** FAIL = clear breach unlikely to survive an SEC inquiry, particularly under Section 17(a)/10b-5 (criminal liability available; Section 17(b) penalties are substantial). FLAG = needs attention but defensible. PASS = rule satisfied or doesn't apply.
- **Specific over general.** Quote the exact text triggering each rule. Provide concrete rewrites.
- **The 2026 enforcement shift.** The SEC has wound down the Biden-era regulation-by-enforcement approach. Many cases against fintechs based purely on registration violations were dropped. But anti-fraud and anti-touting enforcement continues at full vigour. Marketing language that creates investment contracts via Howey, or makes material misstatements, remains primary enforcement target. Don't read the SEC's posture-shift as a green light for sloppy marketing.

---

## The 25 rules

Rules 1–5 are the public version (already on `northpoint.fi/check/sec`). Rules 6–25 are in this pack.

### CATEGORY A — Howey factor analysis depth (rules 1, 2, 6–9)

#### Rule 1 — Howey factor 4: "essential managerial efforts" language
- **Citation:** SEC v. W.J. Howey Co., 328 U.S. 293 (1946); SEC-CFTC March 2026 joint interpretation
- **Severity:** FAIL
- **Check:** Marketing language emphasising token value derives from team's ongoing managerial efforts. *"Our team continues to develop", "ongoing development by us", "driven by our team's efforts", "under our foundation's guidance"*. The most common Howey trigger; central to the March 2026 framework's classification analysis.
- **Rewrite pattern:** Reframe to emphasise decentralisation: *"The protocol is operated by its community of validators / users / governance participants."* Avoid first-person team-driven language. If team activity is genuinely central, market the asset as a security under Reg D / Reg A+ / S-1 framework.

#### Rule 2 — Forward-looking profit expectation
- **Citation:** Howey factor 3; Section 17(a); Rule 10b-5; PSLRA Section 27A (forward-looking statements safe harbour)
- **Severity:** FAIL
- **Check:** Public version rule. Detects guaranteed/projected/expected returns, specific APY figures, "will reach $X" projections, "investors can expect", "passive income", "risk-free returns". This is the surface-level pattern check; Rule 8 below adds the depth analysis on profit-purpose-vs-utility-purpose framing under SEC v. Forman.
- **Rewrite pattern:** Either remove forward-looking profit language or pair with PSLRA-compliant cautionary language identifying specific factors that could cause actual results to differ (see Rule 16). For yield/return discussions: *"Yields fluctuate based on protocol activity; not a guarantee; not investment advice."* Cross-reference Rule 8 for deeper Howey-factor-3 framing.

#### Rule 6 — Howey factor 1: investment of money / value (consideration)
- **Citation:** SEC v. Howey + SEC v. Edwards (2004) (broadened to non-cash consideration)
- **Severity:** FLAG
- **Check:** Howey's first factor: an investment of money or "any other tangible asset of value." Token sales / launches / mints / airdrops with required actions establish factor 1. Marketing that frames the action as a "purchase," "stake," or "deposit" toward expected future value confirms factor 1. Worth flagging on token-launch pages so issuer is aware.
- **Rewrite pattern:** Where factor 1 is obviously present (most token launches), the rule becomes a flag-for-awareness rather than a fix-the-text issue — the rest of Howey factor analysis must be passed.

#### Rule 7 — Howey factor 2: common enterprise
- **Citation:** SEC v. Howey + horizontal/vertical commonality doctrine
- **Severity:** FLAG (FAIL when egregious pooling language)
- **Check:** Common enterprise exists when investor fortunes are pooled (horizontal) or tied to issuer fortunes (vertical). Marketing language that emphasises *"we all benefit when [Token] succeeds", "your returns depend on the protocol's growth", "shared upside", "treasury growth flows to holders"* triggers commonality.
- **Rewrite pattern:** For non-security tokens, decouple investor returns from issuer fortunes in the marketing. Use functional framing: *"Holders use [Token] for [function]; protocol value derives from utility, not from team performance"*.

#### Rule 8 — Howey factor 3 depth: profit expectation framing
- **Citation:** SEC v. Howey + SEC v. Forman (1975) (consumer-purpose exception); SEC-CFTC March 2026 interpretation
- **Severity:** FAIL (when profit-purpose dominant); FLAG (when mixed)
- **Check:** Beyond surface forward-looking language (Rule 2), this rule examines whether the *primary marketing purpose* is profit appeal vs. consumer utility. Marketing that sells the token as a utility for using the protocol passes; marketing that sells the token as a way to "benefit from" or "participate in" project growth triggers Howey factor 3. SEC v. Forman established consumer-purpose exception: tokens marketed primarily for use, not profit, may escape Howey.
- **Rewrite pattern:** Front-load utility framing. Lead with what the token *does* in the protocol (consumes a service, governs a parameter, accesses a feature), not what the token *will be worth*. Move yield/return mentions to subsequent paragraphs with hedge language and risk warnings.

#### Rule 9 — SEC-CFTC March 2026 five-category classification
- **Citation:** SEC-CFTC Joint Interpretation, March 17 2026
- **Severity:** FLAG
- **Check:** The framework classifies crypto assets into: (a) digital commodities, (b) digital collectibles, (c) digital tools, (d) stablecoins, (e) digital securities. Each has distinct marketing rules. Marketing must be consistent with the category claimed: a "digital commodity" cannot be marketed with investment-contract framing; a "digital tool" cannot emphasise yield; a "digital security" must comply with Section 5.
- **Rewrite pattern:** Identify the intended category. Audit the marketing for category-consistent framing. If marketing language drifts the asset toward "digital security" classification despite issuer's intent for it to be a "digital commodity" or "digital tool," reframe to maintain category alignment.

### CATEGORY B — Section 5 registration perimeter (rules 10–13)

#### Rule 10 — Section 5 registration requirement
- **Citation:** Securities Act §§ 5(a), 5(c) — registration of securities offerings; SEC v. SG Ltd. (2001) (broad applicability)
- **Severity:** FAIL (when offering qualifies as security but no registration / exemption claimed)
- **Check:** When the asset constitutes a security under Howey AND the issuer has no Section 5 registration AND no claimed exemption (Reg D, Reg A+, etc.), the marketing communication is a Section 5 violation. Section 5 strict liability — intent doesn't matter.
- **Rewrite pattern:** Either (a) register under Section 5 / S-1, (b) structure as a Reg D or Reg A+ offering with appropriate exemption flag, or (c) reframe the marketing to avoid Howey-investment-contract classification entirely.

#### Rule 11 — Reg D 506(b) general-solicitation prohibition
- **Citation:** Securities Act Rule 506(b); General Solicitation prohibition
- **Severity:** FAIL (when Reg D 506(b) claimed but general solicitation present)
- **Check:** Reg D 506(b) requires no general solicitation: no public-facing landing pages, no paid ads, no public X posts soliciting investment. If the marketing asset is publicly accessible AND the issuer claims 506(b) exemption, it's a violation.
- **Rewrite pattern:** Move all solicitation behind authentication. Pre-existing-relationship requirement: investors must have a pre-existing substantive relationship with the issuer before solicitation. Or upgrade to Reg D 506(c) which allows general solicitation but requires accredited-investor verification.

#### Rule 12 — Reg D 506(c) accredited-investor verification
- **Citation:** Securities Act Rule 506(c); FAQ 14 (verification standards)
- **Severity:** FAIL (when 506(c) claimed but no accredited verification flow)
- **Check:** Reg D 506(c) allows general solicitation BUT requires that the issuer take "reasonable steps to verify" that all investors are accredited. Self-certification ("☐ I am an accredited investor") is insufficient — actual verification (income statements, net worth review, third-party verification letter from CPA / attorney / broker-dealer) is required.
- **Rewrite pattern:** Implement actual verification flow. Use third-party verification services (VerifyInvestor, Verified Investor). Self-certification with no follow-up is the most common 506(c) violation pattern.

#### Rule 13 — Reg A+ qualified-offering marketing constraints
- **Citation:** Regulation A+ (JOBS Act Title IV); Form 1-A; Section 5 exemption qualified
- **Severity:** FLAG (FAIL when egregiously off-spec)
- **Check:** Reg A+ allows broader retail solicitation than Reg D but has own constraints: pre-qualification "testing the waters" rules, post-qualification disclosure requirements, prescribed risk-warning language for tier-2 offerings, ongoing reporting. Marketing must align with the Reg A+ filing.
- **Rewrite pattern:** Confirm Reg A+ qualified status. Reference the Form 1-A filing in marketing. Use Reg A+ specific risk warnings. Test-the-waters communications must be marked as such.

### CATEGORY C — Anti-fraud: Section 17(a) + Rule 10b-5 (rules 14–17)

#### Rule 14 — Material misstatements (Section 17(a)(2))
- **Citation:** Securities Act §17(a)(2); Rule 10b-5(b); SEC v. Texas Gulf Sulphur (1968) (materiality doctrine)
- **Severity:** FAIL
- **Check:** Statements that are factually inaccurate AND material to a reasonable investor's decision. "Misstatement" includes claims about: protocol mechanism, treasury composition, partnership status, regulatory status, future plans (without forward-looking framing), team composition. *"In partnership with Coinbase"* when there's no partnership is a Section 17(a)(2) violation.
- **Rewrite pattern:** Verify every material claim is factually accurate. Pre-marketing review: have someone with knowledge of the underlying facts read the marketing for misstatements. Update materially-changed claims promptly when facts change.

#### Rule 15 — Material omissions doctrine
- **Citation:** Section 17(a)(2); Rule 10b-5(b); Affiliated Ute Citizens v. United States (1972) (omissions enforceable)
- **Severity:** FAIL (egregious); FLAG (judgment-call cases)
- **Check:** Marketing that omits material facts a reasonable investor would consider important. Common crypto omissions: insider token holdings; founder ties to other failed/troubled projects; ongoing regulatory investigations; smart-contract audit results; treasury concentration risks; redemption mechanism exclusions.
- **Rewrite pattern:** Check the marketing against the project's full disclosure picture (whitepaper, audits, legal disclaimers). If material facts are mentioned in the disclosure but missing from the marketing, add them. The materiality threshold: would a reasonable investor consider this important to their decision?

#### Rule 16 — Forward-looking statement safe harbour
- **Citation:** PSLRA Section 27A; Rule 175 (forward-looking statements); SEC v. Pirate Investor (2009)
- **Severity:** FLAG
- **Check:** Forward-looking statements (projections, targets, expected outcomes) must include "meaningful cautionary language" identifying important factors that could cause actual results to differ. Generic *"this is forward-looking"* boilerplate insufficient.
- **Rewrite pattern:** Add specific cautionary language: *"Forward-looking statements regarding [specific topic]; actual results may differ due to [specific factors: market conditions, smart-contract risk, regulatory developments, team execution]."* Place adjacent to the projection, not in distant boilerplate.

#### Rule 17 — Past-performance presentation
- **Citation:** Rule 482 (investment company advertising); Investment Advisers Act Rule 206(4)-1; SEC Marketing Rule (Dec 2020)
- **Severity:** FLAG (FAIL when egregious cherry-picking)
- **Check:** Past-performance figures must be: (a) presented over standardised time periods (1, 5, 10 years where available), (b) include the disclaimer "Past performance does not guarantee future results", (c) include all material fees / expenses in net-return calculations, (d) avoid cherry-picked time windows, (e) for hypothetical or back-tested performance, prominently disclose the hypothetical nature.
- **Rewrite pattern:** Use standardised periods. Include net-of-fees presentation. Disclose methodology. Add disclaimer adjacent to performance, not in fine print. For hypothetical/back-tested: lead with the disclosure, not the result.

### CATEGORY D — Anti-touting (Section 17(b)) (rules 3, 18–19)

#### Rule 3 — Compensation disclosure for paid promotion
- **Citation:** Securities Act §17(b); SEC celebrity-endorsement enforcement (DJ Khaled, Floyd Mayweather, Kim Kardashian, etc., 2018-2024)
- **Severity:** FAIL
- **Check:** Public version. Detects paid-promotion / KOL framing without disclosure of compensation.
- **Rewrite pattern:** Add explicit disclosure of nature, source, amount of compensation. *"I was paid $X by [Issuer] for this promotion."* Place at the start, not buried. Use platform-appropriate marker (#ad).

#### Rule 18 — Specificity of compensation disclosure
- **Citation:** §17(b) requires disclosure of the "nature, source, and amount" of compensation
- **Severity:** FAIL (when vague); FLAG (when partially specific)
- **Check:** "Nature" = type of compensation (cash, tokens, equity, in-kind). "Source" = who paid. "Amount" = quantitative figure or "approximate value." Vague disclosures like *"this is sponsored content"* without identifying the sponsor and the compensation type fail Section 17(b)'s specificity requirement.
- **Rewrite pattern:** Full disclosure template: *"I have been paid $[amount] in [cash / [Token]] by [Issuer Legal Name] in exchange for this promotion. The compensation was paid on [approximate date]."*

#### Rule 19 — Cross-platform anti-touting consistency
- **Citation:** §17(b); SEC's celebrity-endorsement enforcement pattern (cross-platform analysis)
- **Severity:** FLAG
- **Check:** When the same KOL promotes the same token across multiple platforms (X, YouTube, TikTok, Instagram, podcast), the compensation disclosure must be present on each. The SEC has cited platform-specific patterns where disclosure appears on YouTube but not Instagram, etc.
- **Rewrite pattern:** Audit all platforms where the KOL has promoted. Require uniform disclosure across each platform. Maintain a tracking sheet of where the KOL has posted to verify.

### CATEGORY E — Restricted retail / accreditation (rules 4, 20–22)

#### Rule 4 — Restricted "investment" framing
- **Citation:** Section 5 + SEC-CFTC March 2026 interpretation
- **Severity:** FLAG
- **Check:** Public version. Detects "invest in our token", "invest in $TICKER", "best way to invest", "investors in our token" framing.
- **Rewrite pattern:** Use functional / utility framing for non-security tokens.

#### Rule 20 — Accredited-investor self-certification rules
- **Citation:** Securities Act Rule 501(a) (accredited investor definition); Reg D 506(c) verification standards
- **Severity:** FLAG (FAIL when no verification flow at all)
- **Check:** When an asset relies on accredited-investor exemption, self-certification alone is increasingly insufficient. The SEC's 2024 amendments expanded the accredited-investor definition (knowledgeable employees of private funds, etc.) but tightened verification requirements for Reg D 506(c).
- **Rewrite pattern:** Implement multi-step verification: self-certification (income, net worth, professional certifications) PLUS supporting documentation (W-2s, tax returns, brokerage statements, professional license verification). Use third-party verification services for scale.

#### Rule 21 — Sophisticated investor exception (Reg D 506(b))
- **Citation:** Securities Act Rule 506(b); Reg D
- **Severity:** FLAG
- **Check:** Reg D 506(b) allows up to 35 sophisticated non-accredited investors. "Sophisticated" requires knowledge and experience to evaluate the merits and risks of the investment. Marketing that solicits "sophisticated investors" without a substantive relationship and verification process violates 506(b).
- **Rewrite pattern:** Document the relationship and the sophistication assessment for each non-accredited investor. Maintain records demonstrating substantive pre-existing relationship (not just "they signed up for our newsletter last week").

#### Rule 22 — State Blue Sky law overlay
- **Citation:** State securities laws (varies by state); NSMIA preemption for federally-covered securities
- **Severity:** FLAG
- **Check:** Reg D and Reg A+ offerings may be exempt from federal registration but require state-level notice filings or compliance. State Blue Sky laws also have anti-fraud provisions enforceable independently of federal Section 17(a). California, New York, and Texas have particularly active securities regulators.
- **Rewrite pattern:** For Reg D 506 offerings: file Form D within 15 days of first sale; file state notice filings per state requirements. For non-506 offerings: comply with full state Blue Sky laws in each state where investors reside.

### CATEGORY F — Misleading regulatory claims depth (rules 5, 23–24)

#### Rule 5 — Misleading "SEC-approved" / "SEC-registered" claims
- **Citation:** SEC public statements on misuse of "registered/approved"; Section 17(a)(2) misstatement
- **Severity:** FAIL
- **Check:** Public version. Detects "SEC-approved", "SEC-registered", "SEC-compliant", "registered with the SEC" framing.
- **Rewrite pattern:** Use precise filing-specific language. "[Entity] has registered [specific filing] with the SEC for [specific activity]. The cryptoasset itself is not registered or approved by the SEC."

#### Rule 23 — CFTC vs SEC jurisdictional claims
- **Citation:** CFTC enforcement guidance; SEC-CFTC March 2026 framework
- **Severity:** FLAG
- **Check:** Marketing that misframes which agency has jurisdiction: *"CFTC-regulated cryptoasset"* when the asset is actually under SEC jurisdiction (or vice versa). Post-March 2026 framework, the categorisation determines jurisdiction: digital commodities → CFTC; digital securities → SEC; stablecoins → joint depending on type.
- **Rewrite pattern:** Use precise language matching the asset's actual category and supervisory status. *"[Asset] is classified as a digital commodity under the SEC-CFTC March 2026 framework, with CFTC supervisory jurisdiction over derivatives markets."*

#### Rule 24 — Self-regulatory organization claims (FINRA, etc.)
- **Citation:** FINRA Rule 2210 (communications with the public); FINRA enforcement on misleading SRO claims
- **Severity:** FAIL (when material misframing)
- **Check:** *"FINRA-regulated crypto exchange"*, *"FINRA member firm offering [token]"* — claims that imply FINRA endorsement of cryptoassets are problematic. FINRA may oversee the broker-dealer that touches the asset but does not "regulate" the asset itself. Similar patterns for NFA (futures) and other SROs.
- **Rewrite pattern:** Be precise about what's regulated by which body. *"[Entity] is a FINRA member broker-dealer offering [specific service]. The cryptoassets traded through this service are not regulated by FINRA."*

### CATEGORY G — Cryptoasset-specific (rule 25)

#### Rule 25 — Stablecoin marketing under five-category framework
- **Citation:** SEC-CFTC March 2026 joint interpretation, stablecoin section; Section 5 (when stablecoin is digital security)
- **Severity:** FAIL (when reserve claims misframed); FLAG (otherwise)
- **Check:** Stablecoin marketing under the March 2026 framework: claims about reserves must be accurate per actual reserve composition, not "1:1 backed" generically when reserves include riskier assets. Yield-bearing stablecoins likely classified as digital securities, requiring full Section 5 compliance. Marketing must reflect classification.
- **Rewrite pattern:** Specify reserve composition: *"Backed 1:1 by [specific assets: USD cash, US Treasury bills, etc.] held in custody at [custodian]."* For yield-bearing stablecoins, include Section 5 framework: registered offering or qualified exemption; appropriate risk warnings.

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
=== SEC AUDIT — {asset_id} ===
Asset type: {type}
US reach: {confirmed / inferred / geo-fenced}
Issuer classification: {digital commodity / collectible / tool / stablecoin / digital security / unspecified}
Authorisation status: {S-1 / Reg D 506(b) / Reg D 506(c) / Reg A+ / none claimed}
Submitted: {timestamp UTC}

VERDICT: {N FAIL · M FLAG · K PASS} — {ALL CLEAR | ATTENTION | DO NOT SHIP}

[For each FAIL:]
  ❌ Rule {id} — {title}
    Citation: {citation}
    Triggered text: "{exact quote}"
    Issue: {one-sentence summary}
    Suggested rewrite: {concrete text}

[For each FLAG:]
  ⚠️ Rule {id} — {title}
    [same structure]

[Summary of PASSED rules — list IDs]
  ✓ Rules {X, Y, Z, ...} — passed.

OPERATOR'S READ:
{1-3 sentences from Jukka's perspective.}

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
  "review_url": "https://northpoint.fi/check/sec/audit/{asset_id}"
}
```

---

## When to escalate to Jukka

The AI applies all 25 rules and produces analysis. Jukka stamps before delivery. Cases requiring explicit Jukka review:

1. **Section 5 perimeter unclear.** When it's unclear whether the asset is a security under Howey. Howey is fact-intensive; legal counsel is required for binding determinations.
2. **Token launch / TGE / ICO landing pages.** High-stakes; Jukka stamps every one.
3. **Reg D / Reg A+ exemption claims.** Verification flows, accredited investor compliance, state Blue Sky filings — these are structural product decisions.
4. **Cryptoasset classification under March 2026 framework.** Edge cases between digital commodity / digital tool / digital security need senior judgment + counsel.
5. **Material misstatement / omission cases.** Section 17(a) and Rule 10b-5 carry criminal liability; ambiguous cases go to counsel.
6. **Stablecoin marketing.** The yield-bearing-stablecoin classification question is currently live; Jukka + counsel decide path.
7. **Customer's first three weeks of using this pack.** Onboarding-period calibration.

---

## Operational reminders

- **The audit is heuristic, not legal advice.** US securities-law violations carry criminal liability under multiple statutes. For binding regulatory advice, retain qualified US securities counsel — non-negotiable for the Section 5 perimeter question and any Howey-borderline asset.
- **Audit-history rows are evidence.** Every SEC audit logs to the customer's Notion Audit History database. Material when SEC enforcement opens — documented compliance processes have weighted in mitigation factors historically.
- **The 2026 enforcement environment is shifting.** The Biden-era enforcement-first approach has been wound down; March 2026 framework signals guidance-first. But anti-fraud (Section 17(a) / Rule 10b-5) and anti-touting (Section 17(b)) enforcement continues at full vigour. Don't read the SEC's posture-shift as a green light.
- **Update this skill when SEC publishes new guidance.** The framework is evolving. Quarterly review against latest SEC enforcement actions, releases, and FAQs.

---

## Cross-skill workflow

A US-EU-UK-facing asset typically requires all four jurisdiction audits. The combined workflow:

1. Run `mica-marketing-self-audit-pro` — EU lens
2. Run `fca-financial-promotions-pro` — UK lens
3. Run `sec-retail-communications-pro` — US lens
4. Run `gdpr-marketing-self-audit-pro` — EU data lens (often overlaps)
5. Combine verdicts: *"MiCA: 2 FAIL · 1 FLAG. FCA: 1 FAIL · 2 FLAG. SEC: 3 FAIL. GDPR: 0 FAIL · 1 FLAG. Combined: DO NOT SHIP."*
6. Rewrite that satisfies all four lenses (often requires structural re-design — flag this to Jukka).
7. Single audit-history row in Notion with all four rule-engines' findings.

When jurisdictions produce conflicting requirements (rare but possible), default to the more conservative interpretation OR maintain separate jurisdiction-specific marketing copy. The most common conflict: SEC's preference to avoid investment framing vs. MiCA's allowance of yield framing with proper warnings — typically resolved by separate US-facing copy excluding investment framing entirely.

The pre-flight review should ask: *"Does this asset reach US consumers?"* If yes, SEC Pro applies. The geo-targeting design decision is upstream of the audit — flag any asset that is implicitly US-reaching without conscious geo-fencing. The HTX precedent (FCA-side) and the SEC's enforcement of overseas crypto firms reaching US consumers (BitMEX, Binance, etc.) confirm: reach matters, not entity location.

---

*Authored by Jukka Blomberg, ex-CMO at two international crypto exchanges. NorthPoint Marketing Solutions Oy, Helsinki, Finland.*
