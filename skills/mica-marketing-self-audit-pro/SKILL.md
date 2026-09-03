---
name: mica-marketing-self-audit-pro
description: Full MiCA marketing self-audit. Invoke when you submit a marketing asset (banner, ad, landing page, email, X post, video script, whitepaper excerpt, KOL contract, press release) for the full 40-rule audit. Returns verdict + per-rule analysis + rewrite suggestions. Authored by an ex-CMO of two international crypto exchanges; reflects MiCA Title II–IV, ESMA marketing-communications guidance, and operator-grade interpretive notes.
license: MIT
metadata:
  source: https://northpoint.fi
  author: Jukka Blomberg
  version: 1.0.0
  authored: 2026-05-05
  published: 2026-09-03
  jurisdiction: EU (MiCA, Regulation 2023/1114)
---

# MiCA Marketing Self-Audit Pro — 40 Rules

This is the engine that powers the full audit behind `northpoint.fi/check/mica`. The public version checks 5 rules. This skill checks all 40, with operator-grade interpretive notes that the public version doesn't include.

---

## How to invoke this skill

You submit a marketing asset (text, URL, or PDF excerpt) plus optional metadata: asset type, intended jurisdiction(s), launch date, ART/EMT classification of the underlying token if applicable.

The model applies all 40 rules in order, classifies each as PASS / FLAG / FAIL, summarises the per-rule findings, and produces:

1. **Verdict line** — `X FAIL · Y FLAG · Z PASS · {ALL CLEAR | ATTENTION | DO NOT SHIP}`
2. **Per-rule analysis** — for each FAIL/FLAG: the specific text matched, the rule citation, the suggested rewrite
3. **Stamped read** (if Jukka is in the loop) — 1–3 sentences of judgment beyond the rule engine
4. **Audit-history row** — JSON object suitable for writing to the customer's Notion Audit History database

If asset is too short to reasonably audit (<50 words and not a banner): note that and ask for more context.

---

## System-prompt instructions

When invoked, the model takes the role of a senior crypto-marketing operator with MiCA fluency. The disposition:

- **Interpretive, not pedantic.** Many rules have a defensible-with-context exception. Note the context, don't auto-fail.
- **Severity calibration.** FAIL is reserved for clear regulatory breaches that would not survive a regulator inquiry. FLAG is reserved for issues that need attention but might be defensible. PASS includes "rule does not apply" when the asset doesn't trigger the rule.
- **Specific over general.** If a rule fails, quote the specific text from the asset. If the asset has no instance of the relevant trigger, the rule passes (note "rule does not apply").
- **Rewrite suggestions are concrete.** Provide actual text the customer can substitute, not abstract guidance.
- **Cross-jurisdictional context.** When the asset is targeted at non-EU markets, note which rules tighten or relax. Don't apply MiCA rules to assets explicitly geo-fenced out of the EU; do flag if the geo-fence isn't visible.

---

## The 40 rules

Rules 1–5 are the public version (already on `northpoint.fi/check/mica`). Rules 6–40 are in this pack.

### CATEGORY A — Risk warnings (rules 1, 6–9)

#### Rule 1 — Substantive risk warning required
- **Citation:** MiCA Article 88(1) — fair, clear, and not misleading; ESMA guidance on risk warnings in marketing communications
- **Severity:** FAIL (if missing); PASS (if present and substantive)
- **Check:** Look for explicit risk-warning phrasing — *"capital is at risk", "crypto-assets are highly volatile", "value can decrease", "may lose your investment", "past performance is not a reliable indicator", "not financial advice", "DYOR", "risk of loss"*. Generic words like "risk" alone (e.g. inside "risk-free") do NOT satisfy.
- **Rewrite pattern:** *"Crypto-assets are highly volatile. Your capital is at risk. Past performance does not guarantee future results."*

#### Rule 6 — Risk warning prominence
- **Citation:** Article 88(1) + ESMA Guidelines on Marketing Communications — proportionality of warning vs claim
- **Severity:** FLAG
- **Check:** Risk warning must be in the same visual block as the value proposition or yield/return claim, not solely in the footer. Compare hero-headline font weight to risk-warning font weight; if disproportionate, flag.
- **Rewrite pattern:** Move the risk warning into the same viewport as the H1 / hero CTA. Match font weight to body copy. Remove from the page footer if redundant once moved up.

#### Rule 7 — Mobile-first risk-warning placement
- **Citation:** ESMA guidance on marketing communications (consumer-protection emphasis) + Article 88(1)
- **Severity:** FLAG
- **Check:** On a phone viewport, the risk warning should appear within the first scroll. If the asset is a landing page where the warning only appears below the fold, flag.
- **Rewrite pattern:** Reorder content blocks so risk warning is in the hero or first-fold section.

#### Rule 8 — Capital-loss specific language required
- **Citation:** Article 88(1) — "fair, clear, and not misleading" + ESMA emphasis on consumer protection
- **Severity:** FAIL (for explicit financial-product / yield products); FLAG (for general crypto exchange marketing)
- **Check:** When the asset describes a yield-bearing product, lending product, staking product, or investment product, the warning must explicitly mention capital loss (not just general "volatility"). *"Your capital is at risk"* or equivalent.
- **Rewrite pattern:** Add *"You may lose all of the capital you commit"* or *"Your capital is at risk"* explicitly when the product implies returns.

#### Rule 9 — Localised language for risk warning
- **Citation:** ESMA Guidelines on Marketing Communications — language accessibility
- **Severity:** FLAG
- **Check:** When the asset is targeted at a specific national market (translated copy, localised brand name, country-specific URL), the risk warning must be in that market's official language. English-only risk warnings on German-language landing pages flag.
- **Rewrite pattern:** Translate the risk warning. Keep both languages if the audience is multilingual.

### CATEGORY B — Misleading claims, guarantees, and superlatives (rules 2, 3, 10–14)

#### Rule 2 — No guaranteed-return language
- **Citation:** Article 88(1) — fair, clear, not misleading
- **Severity:** FAIL
- **Check:** Phrases that imply guaranteed returns: *"guaranteed yield/profit/return", "risk-free", "100% safe", "passive income", "always profitable", "zero risk", "can't lose", "sure thing", "principal protected"*.
- **Rewrite pattern:** Replace with hedged language: *"potential yield"*, *"may earn"*, *"subject to market conditions"*. Always pair with risk warning.

#### Rule 3 — Unsubstantiated superlatives
- **Citation:** Article 88(1) — fair, clear, not misleading
- **Severity:** FLAG
- **Check:** Superlatives without substantiation: *"world's leading", "#1", "best-in-class", "unbeatable", "lowest fees in industry", "industry-leading"*.
- **Rewrite pattern:** Either remove the superlative or pair it with a verifiable, dated, sourced fact: *"ranked #1 by [source] in [date]"*.

#### Rule 10 — Substantiation for numerical claims
- **Citation:** Article 88(1) + ESMA Guidance on advertising of investment services
- **Severity:** FAIL (if numerical claim is load-bearing); FLAG (if minor)
- **Check:** Numerical claims (*"$5B in assets", "200K users", "$340M traded daily", "X% APY"*) must be dated, sourced, and methodologically explained. If not, flag/fail.
- **Rewrite pattern:** Add a date and source: *"$5B in assets as of [DATE], per [internal accounting / [source]]"*. Move methodology behind a footnote link if space-constrained.

#### Rule 11 — No emphasis on potential gains without potential losses
- **Citation:** Article 88(1) + ESMA guidance — balanced presentation
- **Severity:** FLAG
- **Check:** Marketing that emphasises potential gains (yields, returns, % growth) without proportional mention of potential losses fails the balanced-presentation test even if a risk warning is present elsewhere.
- **Rewrite pattern:** Within the same sentence/visual block as the gain, mention the loss. *"Earn up to X% APY — yields fluctuate; capital is at risk."*

#### Rule 12 — No misleading time-frame compression
- **Citation:** Article 88(1) + ESMA guidance
- **Severity:** FLAG
- **Check:** Phrases that imply easy/fast outcomes: *"in under a minute", "instant withdrawal", "1-click X", "earn while you sleep", "set and forget"*. If the underlying process actually takes longer, this is misleading.
- **Rewrite pattern:** Use accurate time-framings: *"Most withdrawals process within 24 hours"*. Accept the marketing tradeoff.

#### Rule 13 — No "as good as money" framing for crypto-assets
- **Citation:** Article 88(1) — misleading communications
- **Severity:** FAIL (for crypto-assets that are not e-money tokens)
- **Check:** Phrases that imply crypto-assets are equivalent to fiat or fully fungible: *"like dollars but better", "digital cash", "spend it anywhere"*. For non-EMT crypto-assets, this misframes their nature.
- **Rewrite pattern:** Be specific. *"[Token] is a utility token redeemable for [specific use]; it is not legal tender."*

#### Rule 14 — No regulatory-approval misframing
- **Citation:** Article 88(2) + general consumer protection
- **Severity:** FAIL
- **Check:** Phrases that imply regulatory endorsement: *"regulator-approved", "ESMA-approved", "FCA-approved", "compliant with all regulations", "MiCA-certified"*. Authorisation under MiCA is licensing, not endorsement.
- **Rewrite pattern:** Use precise language: *"[Entity] is authorised as a CASP under MiCA in [Member State]"*. Avoid words implying regulator endorsement of the product itself.

### CATEGORY C — Past performance and historical claims (rules 5, 15–17)

#### Rule 5 — Past-performance disclaimer
- **Citation:** Article 88 + ESMA guidance
- **Severity:** FAIL
- **Check:** Any historical-return claim (*"returned 340% in 2024"*, *"X turned into Y"*, *"3x return"*) requires the standard disclaimer in the same visual block: *"Past performance is not a reliable indicator of future results."*
- **Rewrite pattern:** Add the disclaimer adjacent to the claim. Don't bury in a footnote.

#### Rule 15 — Selective time-period cherry-picking
- **Citation:** Article 88(1) + ESMA guidance on balanced presentation
- **Severity:** FLAG (FAIL if egregious)
- **Check:** Performance claims drawn from cherry-picked time windows that exclude losing periods. If asset shows "performance since launch" and launch was during a bull market, flag for context-dependent fairness.
- **Rewrite pattern:** Show full history or explain methodology. *"Performance Jan 2020 to Mar 2024; includes [N] drawdowns of >20%."*

#### Rule 16 — Forward-looking projections without basis
- **Citation:** Article 88(1) + ESMA guidance
- **Severity:** FAIL
- **Check:** Forward-looking statements (*"will reach $100K", "expected APY of 12%", "projected returns"*) without modelling basis or appropriate hedge language.
- **Rewrite pattern:** Either remove the projection or frame as a target/estimate with methodology: *"Target APY based on [methodology]; actual yields may vary."*

#### Rule 17 — Historical comparison framing
- **Citation:** Article 88(1) + ESMA guidance
- **Severity:** FLAG
- **Check:** Phrases like *"would have returned [X] if you'd invested $1,000 in 2017"* that imply users could have captured the same performance. Must include risk warning + caveats.
- **Rewrite pattern:** Add caveats explicitly: *"This comparison assumes a hypothetical investment held without rebalancing, fees, or tax considerations."*

### CATEGORY D — Identifiability and disclosure (rules 4, 18–22)

#### Rule 4 — Marketing identifiability (CTA presence)
- **Citation:** Article 88(2) — marketing communications must be identifiable as such
- **Severity:** FLAG
- **Check:** When promotional/CTA language is present without an identifiability marker (*"Advertisement", "Sponsored", "#ad"*), particularly for influencer/affiliate content. First-party brand context typically satisfies.
- **Rewrite pattern:** For sponsored/affiliate content, add *"Advertisement"*, *"Sponsored"*, or *"#ad"* depending on platform.

#### Rule 18 — Influencer/KOL paid-content marker
- **Citation:** Article 88(2) + ESMA guidance on paid promotion + national consumer-protection rules
- **Severity:** FAIL (when missing on KOL content)
- **Check:** When the asset is or refers to influencer-published content, the influencer's content must include a clear paid-partnership marker. Per-platform: *"Paid partnership", "#ad", "@brand partner"*.
- **Rewrite pattern:** Add platform-appropriate marker at the start of the post (not buried in description).

#### Rule 19 — Affiliate-link disclosure
- **Citation:** Article 88(2) + general consumer-protection law
- **Severity:** FAIL
- **Check:** When the asset is a third-party publication that includes affiliate links to the marketed product, must disclose the affiliate relationship. Hidden affiliate relationships fail.
- **Rewrite pattern:** Add disclosure: *"This article contains affiliate links; we earn a commission if you sign up via [name]."*

#### Rule 20 — Identity of the issuer / CASP
- **Citation:** Article 88(1) + Article 6 (whitepaper) + general transparency
- **Severity:** FLAG
- **Check:** Marketing must clearly identify the legal entity providing the service, particularly for ART/EMT marketing. *"AcmeExchange"* alone insufficient if the legal entity is *"Acme Crypto Services Oy"*.
- **Rewrite pattern:** Include the legal entity in the footer or about-this-page section. *"Service provided by [Legal Entity], registered in [Jurisdiction]."*

#### Rule 21 — Fee disclosure for paid-channel content
- **Citation:** Article 88(2) + ESMA guidance on transparency
- **Severity:** FLAG
- **Check:** When marketing references zero fees, low fees, or fee promotions, the actual fee structure must be linked or disclosed prominently. *"Trade with low fees"* without fee-page link flags.
- **Rewrite pattern:** Link to the fee page. *"View full fee schedule at [URL]"*.

#### Rule 22 — Conflict-of-interest disclosure for proprietary products
- **Citation:** Article 88(1) + ESMA guidance + MiFID2-adjacent best practice
- **Severity:** FLAG
- **Check:** When the asset markets a proprietary token alongside non-proprietary services (e.g. exchange marketing its own token), the conflict must be disclosed.
- **Rewrite pattern:** Add disclosure: *"[Token] is a token issued by [Entity]. We have a financial interest in its adoption."*

### CATEGORY E — Whitepaper consistency (rules 23–26)

#### Rule 23 — Marketing claims must appear in whitepaper
- **Citation:** Article 6(2) + Article 8 + Article 88(1) — consistency requirement
- **Severity:** FAIL (when material inconsistency); FLAG (when minor)
- **Check:** Compare load-bearing marketing claims against the whitepaper. If a marketing claim does not appear in the whitepaper, or appears with materially more cautious framing in the whitepaper, fail.
- **Rewrite pattern:** Either update the whitepaper to match the marketing (with all the formal-disclosure obligations that triggers) or weaken the marketing to match the whitepaper. Marketing version should always be more conservative than whitepaper, never more aggressive.

#### Rule 24 — Risk profile must match whitepaper
- **Citation:** Article 6(2) + Article 88(1)
- **Severity:** FAIL
- **Check:** Marketing's framing of product risk must match the whitepaper's stated risk profile. If whitepaper describes "high volatility, smart-contract risk, regulatory risk" and marketing describes "stable, secure, regulated", fail.
- **Rewrite pattern:** Update marketing to accurately reflect the whitepaper's risk descriptions, with appropriate hedging.

#### Rule 25 — Service scope must match
- **Citation:** Article 6 + Article 88(1)
- **Severity:** FLAG
- **Check:** Marketing's description of services offered must match the CASP authorisation scope. Marketing custody when not custody-authorised, or marketing trading when not exchange-authorised, fails.
- **Rewrite pattern:** Constrain marketing to the authorised service scope. Remove out-of-scope claims.

#### Rule 26 — Token economics consistency (for ART/EMT issuers)
- **Citation:** Article 19 (ART issuance), Article 51 (EMT) + Article 88(1)
- **Severity:** FAIL
- **Check:** Marketing's description of tokenomics — supply, vesting, distribution, mechanism — must match the whitepaper. Inconsistency = FAIL.
- **Rewrite pattern:** Reconcile with whitepaper. If tokenomics changed post-publication, file a whitepaper amendment first.

### CATEGORY F — Stablecoin / ART / EMT-specific rules (rules 27–30)

#### Rule 27 — "1:1 backed" / "fully reserved" claims
- **Citation:** Article 35 (ART reserves), Article 53 (EMT reserves), Article 88(1)
- **Severity:** FAIL (for misframing); PASS (when accurate)
- **Check:** Phrases like *"1:1 backed"*, *"fully reserved"*, *"100% backed by USD"* require demonstrable compliance with MiCA's reserve composition + custody + segregation rules. If reserves don't actually meet MiCA requirements, fail.
- **Rewrite pattern:** Use precise language: *"Backed 1:1 by [specific reserve assets] held in segregated custody at [custodian], in compliance with MiCA Title III reserve requirements."* Link to the reserve attestation.

#### Rule 28 — "Stable" claim for stablecoins
- **Citation:** Article 88(1) + EU Stablecoin Act + ESMA guidance
- **Severity:** FLAG (in normal market); FAIL (if asset has depegged in the last 90 days)
- **Check:** Use of "stable" in the product name or marketing without disclosure of historical depeg events, redemption mechanism, or reserve composition.
- **Rewrite pattern:** Disclose mechanism: *"[Token] is designed to maintain a 1:1 peg to [asset]; this peg is enforced via [redemption mechanism]. Like all stablecoins, the peg is not guaranteed; depegs may occur."*

#### Rule 29 — Redemption rights communication
- **Citation:** Article 35 (ART), Article 49 (EMT) — redemption rights
- **Severity:** FLAG
- **Check:** ART and EMT issuers must communicate redemption rights clearly. Marketing that mentions stablecoin without explaining redemption mechanism flags.
- **Rewrite pattern:** Add: *"Holders of [Token] may redeem at par via [process] subject to [conditions]. See full redemption terms at [URL]."*

#### Rule 30 — Significant ART / EMT specific disclosures
- **Citation:** Article 43 (significant ART), Article 56 (significant EMT)
- **Severity:** FLAG
- **Check:** For tokens classified as "significant" (high-volume, EU-licensed), additional disclosure obligations apply — additional marketing oversight, capital requirements, governance disclosures. If marketing doesn't reflect, flag.
- **Rewrite pattern:** Add reference to enhanced supervision: *"[Token] is classified as a significant [ART/EMT] under MiCA Article [43/56]. Additional information is available at [URL]."*

### CATEGORY G — Cross-jurisdictional flags (rules 31–34)

#### Rule 31 — Geo-restriction visibility
- **Citation:** Article 88(1) + national consumer-protection laws (per Member State)
- **Severity:** FAIL (for material risk); FLAG (otherwise)
- **Check:** Marketing materials reachable in jurisdictions where the product is not legally offered must visibly disclose the geo-restriction. Generic *"available in select jurisdictions"* often insufficient.
- **Rewrite pattern:** List the available jurisdictions explicitly, or list the excluded jurisdictions explicitly. *"Not available to residents of: US, UK, Singapore, [list]."*

#### Rule 32 — Passporting claims (for EU-licensed CASPs)
- **Citation:** Article 59 + Article 60 (passporting) + Article 88(1)
- **Severity:** FLAG
- **Check:** Marketing that claims pan-EU availability via MiCA passporting must reflect actual passporting status (which Member States actually accepted notification).
- **Rewrite pattern:** Use accurate passporting language: *"Available across the EU/EEA, passported under MiCA from [home Member State]."*

#### Rule 33 — Non-EU marketing reaching EU consumers
- **Citation:** Article 59(1) + ESMA guidance on cross-border solicitation
- **Severity:** FAIL
- **Check:** Marketing produced by a non-MiCA-authorised entity that reaches EU consumers (via translation, geo-targeted ads, EU-resident influencers) is potentially in breach. If an asset has EU-targeted localisation and the issuer is not authorised, FAIL.
- **Rewrite pattern:** Either obtain authorisation, or geo-fence marketing out of EU effectively (geo-targeted ad settings, language and currency restrictions, payment-method restrictions).

#### Rule 34 — Cross-jurisdictional regulator claims
- **Citation:** Article 88(2) + general consumer-protection
- **Severity:** FLAG
- **Check:** Claims that imply regulatory authorization in multiple jurisdictions (*"regulated in 12 jurisdictions"*, *"globally compliant"*) often misframe the actual regulatory status.
- **Rewrite pattern:** Be specific: *"Authorised by [regulator A] in [country], registered with [regulator B] in [country]"*.

### CATEGORY H — Specific format & channel rules (rules 35–40)

#### Rule 35 — Visual prominence parity
- **Citation:** Article 88(1) + ESMA marketing-communications guidance
- **Severity:** FLAG
- **Check:** When the asset is image/video, the prominence of the value-proposition vs the prominence of the risk-warning must be in proportion. 48-pixel hero claim with 9-pixel risk-warning text = flag.
- **Rewrite pattern:** Match font weights and prominence. If the hero is bold + 48px, the risk warning should be at least body-weight + 14px in the same viewport.

#### Rule 36 — Video script disclosure
- **Citation:** Article 88(1)(2) + ESMA guidance
- **Severity:** FLAG
- **Check:** Video assets (TikTok, Instagram Reels, YouTube Shorts, TV ads) must include risk-warning either as on-screen text (held for ≥3 seconds) or as voice-over. Instagram-specific: don't rely on caption-only disclosure.
- **Rewrite pattern:** Add risk-warning on-screen text (minimum 3 seconds) or voice-over. Caption-only insufficient.

#### Rule 37 — QR code / mobile redirect disclosure
- **Citation:** Article 88(1) + ESMA guidance
- **Severity:** FLAG
- **Check:** When the asset uses QR codes or mobile-redirect URLs, the destination and the disclosure obligations of the destination must be clear. Cannot use a QR code to bypass risk-warning prominence.
- **Rewrite pattern:** The page that the QR code lands on must independently meet all the marketing rules (risk warning prominent on landing, etc.).

#### Rule 38 — Email-channel rules
- **Citation:** Article 88(1)(2) + ePrivacy Directive (Art. 13(3) — unsubscribe) + GDPR
- **Severity:** FAIL (no unsubscribe / forced-consent); FLAG (other concerns)
- **Check:** Email marketing must include: clear unsubscribe link, no forced consent for opt-in, identifiability of marketing-comm nature, accurate sender, accurate subject. Cross-reference with GDPR check on the same asset.
- **Rewrite pattern:** Add unsubscribe in footer; identify as marketing if not obviously branded; ensure subject doesn't misframe content.

#### Rule 39 — KOL / influencer contract scope
- **Citation:** Article 88(2) + ESMA guidance + national consumer-protection
- **Severity:** FAIL (for permanent contractual obligations missing); FLAG (otherwise)
- **Check:** When auditing a KOL contract or briefing document, the contract must oblige the KOL to: (a) include risk warnings, (b) include paid-partnership disclosures, (c) avoid prohibited claims, (d) submit content for pre-approval, (e) accept liability framing. If any missing, fail/flag.
- **Rewrite pattern:** Add explicit contract terms covering all five obligations. Use a KOL-contract addendum carrying those clauses.

#### Rule 40 — Press release / earned-media boundary
- **Citation:** Article 88(2) — identifiability + ESMA guidance on press communications
- **Severity:** FLAG
- **Check:** Press releases drift between marketing communication and editorial content. If the press release contains: yield claims, return claims, or specific product solicitations, marketing-communication rules fully apply (must include risk warning, etc.). If purely informational (corporate news, partnerships, hires), more relaxed.
- **Rewrite pattern:** When the press release crosses into product solicitation, treat it as marketing and apply full risk-warning rules. Or split into two: a press release (no marketing), and a marketing announcement (full disclosure).

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
=== MICA AUDIT — {asset_id} ===
Asset type: {type}
Submitted: {timestamp UTC}
Jurisdictions: {target list, or "EU general" if unspecified}

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
  "review_url": "https://northpoint.fi/check/mica/audit/{asset_id}"
}
```

---

## When to escalate to Jukka

The AI applies all 40 rules and produces the analysis. Jukka reviews and stamps before delivery to the customer. The cases where the AI should explicitly flag for Jukka's attention:

1. **The asset is a token-launch landing page** (TGE, ICO, IDO, fair launch, airdrop landing). High-stakes; Jukka stamps every one.
2. **The asset triggers ≥3 FAILs.** Severity threshold for human review.
3. **The asset references a "significant" ART or EMT.** Article 43/56 supervision is heavy; Jukka eyeballs.
4. **Whitepaper-consistency rules (23-26) trigger.** AI cannot independently verify whitepaper consistency without the whitepaper text; Jukka confirms.
5. **The asset is an ad creative submitted to Meta/Google for review.** Platform policies overlay; Jukka reviews.
6. **The customer is in their first three weeks of using this pack.** Onboarding period — every audit gets human review for calibration.

For all other cases, the AI's output goes to the customer's Notion workspace + email digest within the SLA.

---

## Operational reminders

- **The audit is heuristic, not legal advice.** Every output must include the standard disclaimer at the top.
- **Audit-history rows are evidence.** Every audit, regardless of outcome, is logged in the customer's Notion Audit History database. The audit trail itself is one of the highest-value outputs — when a regulator opens an inquiry, the customer can show "every asset was reviewed against these 40 rules at this date with this verdict."
- **Update this skill when ESMA publishes new guidance.** The MiCA marketing regime is evolving. Quarterly review of this skill against ESMA's latest guidance updates.

---

*Authored by Jukka Blomberg, ex-CMO at two international crypto exchanges. NorthPoint Marketing Solutions Oy, Helsinki, Finland.*
