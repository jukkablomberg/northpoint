---
name: fca-financial-promotions-pro
description: Full FCA UK financial-promotions self-audit for cryptoasset marketing. Invoke when your marketing reaches UK consumers — landing page, ad, email, banner, X post, KOL contract, video script, app store listing, press release. Returns verdict + per-rule analysis + rewrite suggestions. Authored by an ex-CMO of two international crypto exchanges; reflects Section 21 FSMA, the Financial Promotion Order, COBS 4.12A, PERG 8, FCA's October 2023 cryptoasset financial-promotions regime, and the precedent set by HTX (Feb 2026 enforcement action).
license: MIT
metadata:
  source: https://northpoint.fi
  author: Jukka Blomberg
  version: 1.0.0
  authored: 2026-05-06
  published: 2026-09-03
  jurisdiction: United Kingdom
---

# FCA Financial Promotions Self-Audit Pro — 25 Rules

Apply this skill when your marketing asset reaches UK consumers (geo-targeted ads, UK-language localisation, UK-resident influencers, app stores serving UK users, web pages reachable from UK IPs without geo-fencing). The UK regime is one of the most prescriptive in the world for crypto marketing — the HTX High Court action (announced February 2026) confirms the FCA's willingness to use criminal enforcement.

---

## How to invoke this skill

You submit an asset plus metadata: asset type (landing page / ad / email / banner / X post / KOL contract / video script / app store listing / press release), authorisation status of the issuing entity (authorised firm, approved by authorised firm, exemption claimed, none), target UK audience type (retail mass market / high net worth / sophisticated / institutional only), and (if applicable) whether the asset includes a "first-time investor" flow.

The model applies all 25 rules, classifies each as PASS / FLAG / FAIL, and produces:

1. **Verdict line** — `X FAIL · Y FLAG · Z PASS · {ALL CLEAR | ATTENTION | DO NOT SHIP}`
2. **Per-rule analysis** — for each FAIL/FLAG: triggered text + citation + suggested rewrite
3. **Stamped operator's read** (1–3 sentences from Jukka)
4. **Audit-history row** (JSON for Notion)

If the asset has no UK targeting / reachability, the audit notes "rule does not apply" but flags any path by which UK consumers could see it (cross-border streaming, app store availability, etc.).

---

## System-prompt instructions

When invoked, the model takes the role of a senior crypto-marketing operator with FCA financial-promotions fluency. The disposition:

- **The UK is its own regime.** Do not assume MiCA-compliant copy is FCA-compliant. The UK rules are stricter on retail mass market in several ways: prescribed risk-warning text, mandatory 24-hour cooling-off, mandatory categorisation, ban on incentives.
- **The Section 21 perimeter.** The first question for any UK financial promotion: is the communicator authorised, OR is the promotion approved by an authorised firm, OR does an exemption apply? If none of these, FAIL — the promotion is unlawful regardless of content.
- **Severity calibration.** FAIL = breach unlikely to survive an FCA inquiry (Section 21 violation = criminal offence under FSMA, max 2 years' imprisonment + unlimited fine). FLAG = needs attention but defensible. PASS = rule satisfied or doesn't apply.
- **Specific over general.** Quote the exact text triggering each rule. Provide concrete rewrites.
- **HTX precedent.** The FCA has demonstrated willingness to pursue cross-platform takedowns (TikTok, X, Facebook, Instagram, YouTube simultaneously), use the High Court route, and attack overseas-based firms (HTX is Panama-based). Authoritative precedent: Section 21 enforcement is real, not theoretical.

---

## The 25 rules

### CATEGORY A — Authorisation perimeter (rules 1–4)

#### Rule 1 — Section 21 perimeter satisfied
- **Citation:** Section 21 Financial Services and Markets Act 2000 (FSMA); Financial Services and Markets Act 2000 (Financial Promotion) Order 2005 (FPO)
- **Severity:** FAIL (when none of the gateways apply)
- **Check:** A financial promotion communicated in or to the UK must satisfy one of three gateways: (a) the communicator is an FCA-authorised person, (b) the content has been approved by an authorised person under the Section 21 approval regime, or (c) an FPO exemption applies (high net worth, sophisticated investor, certified high net worth, etc.). If none apply, the communication is a criminal offence under FSMA s25.
- **Rewrite pattern:** Either obtain authorisation, get the asset approved by an authorised firm under the Section 21 approval regime, structure the asset to fall within an FPO exemption (and prove the audience meets the exemption criteria), or geo-fence the asset out of the UK effectively.

#### Rule 2 — Section 21 approval marker
- **Citation:** COBS 4.12A.18R + FCA Cryptoasset Financial Promotions guidance
- **Severity:** FAIL (when content is approved but the marker is missing)
- **Check:** When the asset is approved by an authorised person rather than communicated by an authorised person, the approval marker must be visible on the communication. *"This financial promotion has been approved by [Authorised Person Name], FCA Reference [Number]."*
- **Rewrite pattern:** Add the approval marker prominently on the asset (typically footer or near-CTA placement). Confirm with the approver that the content as-published reflects what they approved.

#### Rule 3 — Cross-border reach into UK
- **Citation:** FSMA s21(3) + PERG 8 + FCA cross-border guidance
- **Severity:** FAIL (when material UK reach without authorisation/approval/exemption)
- **Check:** Marketing produced outside the UK (Panama, US, Cayman, EU) but reachable in the UK via: geo-targeted ads (Meta, Google, X), UK-language localisation, UK-resident KOLs, UK app store listing, web pages reachable from UK IPs without geo-fencing. The HTX precedent (Panama-based, target UK users) confirms this. Reach matters, not entity location.
- **Rewrite pattern:** Either authorise/approve into the UK regime properly, or implement effective geo-fencing: IP-based blocking, app store regional availability, non-UK ad targeting, removal of UK-language localisation, contractual KOL-restrictions, payment-method restrictions excluding GBP/UK cards.

#### Rule 4 — Approver competence (when relying on Section 21 approval)
- **Citation:** FCA Section 21 Approval Permission regime (effective Feb 2024)
- **Severity:** FLAG
- **Check:** Following the FCA's reform of Section 21 approvals, authorised firms can only approve financial promotions for asset classes within their permission. An approval by a firm without cryptoasset permission has limited validity for crypto promotions. Verify the approver has the right permission category.
- **Rewrite pattern:** Confirm the approving firm has the FCA's Section 21 approval permission for cryptoassets specifically.

### CATEGORY B — Mandatory risk warnings (rules 5–9)

#### Rule 5 — Prescribed risk warning verbatim
- **Citation:** COBS 4.12A.20R + Annex 23 (prescribed risk warning text)
- **Severity:** FAIL
- **Check:** The FCA has prescribed an exact risk-warning text for cryptoasset financial promotions. The required wording (or equivalent prescribed in current rulebook) is something close to: *"Don't invest unless you're prepared to lose all the money you invest. This is a high-risk investment and you are unlikely to be protected if something goes wrong. [Take 2 mins to learn more]."* Substituted, modified, paraphrased, or shortened versions FAIL.
- **Rewrite pattern:** Use the verbatim prescribed text. The FCA does not allow paraphrasing. Check the latest version in COBS 4.12A.20R.

#### Rule 6 — Risk-warning prominence
- **Citation:** COBS 4.12A.20R(2) + FCA "Common issues with crypto marketing"
- **Severity:** FAIL
- **Check:** Risk warning must be prominently displayed: at the top of the asset (or otherwise immediately visible without scrolling), in a font size at least equal to the surrounding body text, in a colour that contrasts adequately with the background, and in a position the audience cannot miss. Risk warning in a smaller font, in the footer, or behind a "Risk Disclosure →" link FAILs.
- **Rewrite pattern:** Move the risk warning to the top of the asset (or in a sticky banner). Match font size and weight to body text. High-contrast colour. Visible in mobile viewport without scroll.

#### Rule 7 — Personalised risk warning for first-time investors
- **Citation:** COBS 4.12A.21R
- **Severity:** FAIL (when first-time-investor flow exists without personalised warning)
- **Check:** Where the asset is a direct offer financial promotion AND the user is a first-time investor with the firm, a personalised risk warning must be displayed. The personalised warning is in addition to the standard risk warning.
- **Rewrite pattern:** Implement first-time-investor detection in the signup flow. Display personalised warning (using the FCA's prescribed format, including the user's name and a summary of why this is high-risk) before the user can complete their first transaction.

#### Rule 8 — 24-hour cooling-off period
- **Citation:** COBS 4.12A.22R
- **Severity:** FAIL (when missing for first-time investors)
- **Check:** First-time investors in a cryptoasset must be subject to a 24-hour cooling-off period between submitting their first investment intention and the firm being able to act on it. The asset's signup-to-purchase flow must enforce this delay.
- **Rewrite pattern:** Implement a 24-hour cooling-off in the first-investment flow: user requests to invest → confirmation page → 24-hour delay → email/notification at end of cooling-off → user must affirmatively re-confirm → only then transaction proceeds.

#### Rule 9 — Risk-summary box
- **Citation:** COBS 4.12A.20R + FCA guidance on risk summary
- **Severity:** FLAG
- **Check:** In addition to the prescribed warning text, asset must include or link to a risk-summary box covering: estimated chance of loss, lack of FSCS protection, lack of FOS recourse, market volatility, lack of regulation of the underlying asset.
- **Rewrite pattern:** Add a risk-summary box near the prescribed warning (or linked from "Take 2 mins to learn more"). Link to a dedicated risk-summary page with the FCA-required content.

### CATEGORY C — Cooling-off & appropriateness (rules 10–12)

#### Rule 10 — Appropriateness assessment for restricted investors
- **Citation:** COBS 4.12A.13R + 4.12A.14R
- **Severity:** FAIL (when missing)
- **Check:** Restricted investors (the default category for retail mass market) must complete an appropriateness assessment before being able to invest in cryptoassets. The assessment tests their understanding of the risks. Asset's signup flow must include this gate.
- **Rewrite pattern:** Implement appropriateness assessment in the signup flow: 5–10 questions covering volatility, lack of protection, total loss potential, lack of regulation. Must be completed before first investment. Failed assessments lock the user out of investing for a period (per FCA guidance, typically 24 hours minimum).

#### Rule 11 — Categorisation flow (restricted / HNW / sophisticated / certified)
- **Citation:** COBS 4.12A.10R + FPO Articles 48–50A
- **Severity:** FAIL (when categorisation is missing or wrong)
- **Check:** Investors must self-certify into one of four categories: restricted, high net worth (HNW), self-certified sophisticated, or certified sophisticated. Each category has different rules and protections. Asset's signup flow must include the categorisation step. Categorisation cannot be assumed.
- **Rewrite pattern:** Implement categorisation flow with appropriate self-certification language. The thresholds and questions are prescribed by FPO and COBS. Don't pre-default users into HNW or sophisticated to bypass restricted-investor rules — this is a common enforcement target.

#### Rule 12 — Re-categorisation and refresh
- **Citation:** COBS 4.12A.10R(4) + FCA guidance
- **Severity:** FLAG
- **Check:** Categorisation status must be refreshed periodically (typically every 12 months). Asset's user-management flow must support re-categorisation prompts.
- **Rewrite pattern:** Add 12-month re-certification flow. Users prompted to re-confirm their category before continuing high-risk investment activity.

### CATEGORY D — Restrictions on incentives (rules 13–15)

#### Rule 13 — Ban on incentives to invest in cryptoassets
- **Citation:** COBS 4.12A.16R + FCA Cryptoasset Financial Promotions PS22/10
- **Severity:** FAIL
- **Check:** Sign-up bonuses, refer-a-friend rewards, free crypto on first deposit, time-limited promotional offers, fee discounts conditional on investment amount, and similar incentives that link customer reward to investment activity in cryptoassets are banned. *"Sign up and get £20 in BTC"* fails. *"Refer a friend and earn $50"* fails.
- **Rewrite pattern:** Remove all incentives that link reward to cryptoasset investment activity. Non-investment-conditional bonuses (e.g. account-opening bonuses paid in fiat regardless of subsequent investment) may be acceptable but check with counsel.

#### Rule 14 — Ban on time-limited pressure / FOMO tactics
- **Citation:** COBS 4.12A.6R (fair, clear, not misleading) + FCA general consumer-protection principles
- **Severity:** FAIL (egregious); FLAG (mild)
- **Check:** *"Limited time offer", "expires in 24h", "only 100 spots left", "buy now before [date]"* on cryptoasset promotions creates artificial urgency and breaches fair-clear-not-misleading. Particularly problematic on token-launch landing pages.
- **Rewrite pattern:** Remove time-pressure language. If genuine deadlines exist (TGE date, presale close), state factually without manufactured urgency. *"TGE on 15 June 2026"* is acceptable; *"DON'T MISS OUT — TGE in 3 hours!"* is not.

#### Rule 15 — Affiliate compensation transparency
- **Citation:** COBS 4.12A.6R + FCA guidance + ASA principles on affiliate marketing
- **Severity:** FLAG
- **Check:** When the asset includes affiliate links to cryptoasset platforms, the affiliate compensation arrangement must be disclosed. *"This article contains affiliate links"* is the minimum acceptable disclosure.
- **Rewrite pattern:** Add prominent disclosure: *"This article contains affiliate links. We earn a commission if you sign up via [Platform] — at no cost to you."*

### CATEGORY E — Past performance & projections (rules 16–18)

#### Rule 16 — Past performance: 5-year requirement
- **Citation:** COBS 4.12A.6R + ESMA-equivalent UK rules
- **Severity:** FAIL (when shorter periods cherry-picked); FLAG (otherwise)
- **Check:** When past-performance figures are shown, must include 5 complete years of data (or full life of the asset if shorter than 5 years), must include both up and down periods, and must include the standard disclaimer.
- **Rewrite pattern:** Either show full 5-year (or full life) performance history including drawdowns + disclaimer *"Past performance is not a reliable indicator of future results"*, or remove past-performance claims entirely.

#### Rule 17 — Forward-looking projections / guarantees
- **Citation:** COBS 4.12A.6R + FCA principle on misleading communications
- **Severity:** FAIL
- **Check:** Forward-looking statements that imply guaranteed returns (*"will reach 100K by 2027", "expected to deliver 12% APY", "projected returns of 25%"*) are FAILs unless the projection is rigorously substantiated AND disclosed as not a guarantee. Most fail this dual test.
- **Rewrite pattern:** Either remove projections, or frame as a target with explicit "not guaranteed" language: *"Targeting [X]% APY based on [methodology]; actual returns may vary; not a guarantee."*

#### Rule 18 — Reference to specific historical events
- **Citation:** COBS 4.12A.6R
- **Severity:** FLAG
- **Check:** Phrases like *"if you'd invested £1,000 in BTC in 2017, you'd have £X today"* must include the standard past-performance disclaimer + clarifying caveats (no fees, no rebalancing, no tax).
- **Rewrite pattern:** *"This calculation assumes a buy-and-hold position with no fees, taxes, or rebalancing. Past performance is not a reliable indicator of future results."*

### CATEGORY F — Identifiability & format (rules 19–21)

#### Rule 19 — Identifiability as a financial promotion
- **Citation:** COBS 4.12A.7R + FCA guidance
- **Severity:** FLAG
- **Check:** The asset must be clearly identifiable as a financial promotion. For native-content placements, sponsored articles, or social-media content where the financial-promotion nature isn't obvious, an identifier is required.
- **Rewrite pattern:** Add identifier where context isn't obvious: *"#financialpromotion", "#ad", "Financial promotion"* prominently. For social-media KOL content particularly important.

#### Rule 20 — Influencer / KOL paid-content marker
- **Citation:** COBS 4.12A.7R + ASA Code on influencer marketing + FCA guidance
- **Severity:** FAIL
- **Check:** Influencer-published cryptoasset content reaching UK audiences must include both: (a) the paid-partnership marker (*"Paid partnership", "#ad", "@brand partner"*), and (b) the prescribed FCA risk warning if the post is itself a financial promotion. UK FCA + ASA both enforce this.
- **Rewrite pattern:** Add platform-appropriate paid-partnership marker at the start of the post AND include the prescribed risk warning inline (not buried at the end).

#### Rule 21 — Mobile-format risk-warning persistence
- **Citation:** COBS 4.12A.20R(2) + FCA "Common issues with crypto marketing"
- **Severity:** FAIL
- **Check:** On mobile viewports, the prescribed risk warning must remain visible without scroll-past, or implemented as a sticky banner. Risk warnings that scroll out of view as users engage with the page FAIL the prominence test.
- **Rewrite pattern:** Implement as sticky top banner, fixed footer banner, or embedded modal that persists. Test specifically on iOS and Android default browsers.

### CATEGORY G — Audience targeting (rules 22–23)

#### Rule 22 — Direct-offer financial promotion restrictions
- **Citation:** COBS 4.12A.13R(2) + FPO + COBS 4.12A
- **Severity:** FAIL (when direct-offer to restricted investor without categorisation+appropriateness)
- **Check:** Direct-offer financial promotions (where users can act immediately on the promotion to invest) to restricted retail investors must include categorisation, appropriateness assessment, cooling-off, and personalised risk warning. Direct-offer landing pages without these gates FAIL.
- **Rewrite pattern:** Either add the gates (categorisation → appropriateness → cooling-off → personalised warning → confirmation), or restructure as a non-direct-offer (informational landing page that requires separate authenticated journey to invest, where the gates exist).

#### Rule 23 — Cold contact / unsolicited communication restrictions
- **Citation:** FPO + COBS 4.12A
- **Severity:** FAIL (when cold-contacting UK retail with cryptoasset promotion)
- **Check:** Unsolicited (cold) communication of cryptoasset financial promotions to UK retail consumers — cold calls, unsolicited DMs on Twitter/X, unsolicited LinkedIn messages, unsolicited Telegram messages — is restricted. Unless an exemption applies (existing customer relationship, etc.), this is a breach.
- **Rewrite pattern:** Limit cryptoasset solicitation to opted-in or pre-existing-relationship audiences. For cold-acquisition, route through proper financial-promotion channels (paid media with proper disclosures, organic content with categorisation gates).

### CATEGORY H — Asset-specific (rules 24–25)

#### Rule 24 — Restricted Mass-Market Investment (RMMI) rules
- **Citation:** COBS 4.12A.5G + FCA guidance on RMMI categorisation
- **Severity:** FLAG
- **Check:** Most cryptoassets fall within the RMMI category, triggering enhanced consumer protections. Asset must reflect this: include the FCA's prescribed RMMI risk warning (note it differs slightly from generic high-risk investment), comply with marketing-restriction rules, support categorisation/appropriateness gates.
- **Rewrite pattern:** Confirm the cryptoasset's RMMI status (most are; some stablecoins and certain utility tokens may not be). If RMMI: ensure all RMMI-specific disclosure and gating rules are met.

#### Rule 25 — Cryptoasset-specific terminology rules
- **Citation:** COBS 4.12A + FCA "Common issues with crypto marketing"
- **Severity:** FLAG
- **Check:** Terms like *"investment", "earn", "yield", "passive income", "guaranteed return", "regulated"* trigger specific FCA scrutiny. *"Regulated"* is particularly problematic — FCA strongly objects to use of "regulated" in cryptoasset marketing where the underlying activity isn't actually regulated (most isn't).
- **Rewrite pattern:** Avoid "regulated" unless precisely accurate (e.g. firm has FCA permission for the specific activity). Replace generic "earn" / "yield" with hedged language. Pair with risk warning + RMMI/HRI disclosure.

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
=== FCA AUDIT — {asset_id} ===
Asset type: {type}
UK reach: {confirmed / inferred / geo-fenced}
Authorisation status: {authorised / approved / exempt / none}
First-time-investor flow: {yes / no / N/A}
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
  "review_url": "https://northpoint.fi/check/fca/audit/{asset_id}"
}
```

---

## When to escalate to Jukka

The AI applies all 25 rules and produces analysis. Jukka stamps before delivery. Cases requiring explicit Jukka review:

1. **Section 21 perimeter unclear.** When it's unclear whether the asset is exempt or requires authorisation/approval. Section 21 is criminal-liability territory; Jukka and counsel must agree the path.
2. **Direct-offer financial promotions.** Higher consumer-protection bar; Jukka stamps.
3. **First-time-investor flow design.** The cooling-off + appropriateness + categorisation flow is a structural product decision, not just marketing copy.
4. **HNW / sophisticated certification claims.** Mis-categorisation of restricted investors as HNW/sophisticated is a known enforcement target.
5. **Cryptoasset that may not be RMMI.** Edge cases (stablecoins, utility tokens with consumer-use, NFT-adjacent assets) need Jukka's read.
6. **Cross-border firm without UK authorisation.** HTX-precedent territory. Jukka + counsel decide path.
7. **Customer's first three weeks of using this pack.** Onboarding-period calibration.

---

## Operational reminders

- **The audit is heuristic, not legal advice.** UK financial-promotions enforcement carries criminal liability under FSMA s25. For binding regulatory advice, retain qualified UK counsel — this is non-negotiable for the Section 21 perimeter question particularly.
- **Audit-history rows are evidence.** Every FCA audit logs to the customer's Notion Audit History database. The record matters disproportionately for UK enforcement (the FCA explicitly references documented compliance processes in mitigation).
- **HTX precedent is recent.** February 2026 announcement; High Court action ongoing. The FCA's enforcement appetite is at a multi-year high. Marketing assets that would have passed in 2023 may not pass in 2026.
- **Update this skill when FCA publishes new guidance.** The cryptoasset financial-promotions regime continues evolving. Quarterly review against latest FCA Cryptoasset CP / PS publications.

---

## Cross-skill workflow

A UK-facing asset typically requires both MiCA Pro and FCA Pro audits (when the asset reaches both EU and UK consumers). The combined workflow:

1. Run `mica-marketing-self-audit-pro` — EU lens
2. Run `fca-financial-promotions-pro` — UK lens
3. Run `gdpr-marketing-self-audit-pro` — data lens (often overlaps both)
4. Combine verdicts: *"MiCA: 2 FAIL · 1 FLAG. FCA: 1 FAIL · 2 FLAG. GDPR: 0 FAIL · 1 FLAG. Combined: DO NOT SHIP."*
5. Rewrite that satisfies all three lenses (often requires structural re-design beyond text changes; flag this to Jukka).
6. Single audit-history row in Notion with all three rule-engines' findings.

When MiCA and FCA produce conflicting requirements (rare but possible — e.g. MiCA's risk warning vs FCA's prescribed text differ), default to the more conservative interpretation OR maintain separate UK-specific marketing copy distinct from EU.

The pre-flight review should ask: *"Does this asset reach UK consumers?"* If yes, FCA Pro applies. The geo-targeting design decision is upstream of the audit — flag any asset that is implicitly UK-reaching without conscious geo-fencing.

---

*Authored by Jukka Blomberg, ex-CMO at two international crypto exchanges. NorthPoint Marketing Solutions Oy, Helsinki, Finland.*
