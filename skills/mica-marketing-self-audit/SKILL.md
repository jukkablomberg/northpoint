---
name: mica-marketing-self-audit
description: 40-rule operator-grade pre-flight checklist for MiCA-compliant crypto marketing. Use when reviewing a draft crypto ad, landing page, influencer brief, paid social creative, email, push notification, earn/staking promo, or stablecoin creative before it ships to any EU market. Runs a structured pass/fail audit per rule with rewrite suggestions. Does NOT replace legal review — escalates to counsel when more than 3 rules fail.
license: MIT
metadata:
  source: https://northpoint.fi
  author: Jukka Blomberg
  jurisdiction: EU (MiCA, Regulation 2023/1114)
---

# mica-marketing-self-audit

A pragmatic, operator-grade pre-flight checklist for European crypto marketers shipping acquisition copy, paid ads, landing pages, influencer briefs, and stablecoin creative under MiCA.

## When to activate

Activate this skill whenever the user:

- Asks you to review a crypto marketing asset for MiCA compliance.
- Pastes draft ad copy, a landing page, an influencer brief, an email, a push notification, an earn/staking promo, or a stablecoin creative targeted at EU users.
- Asks *"is this MiCA-safe?"*, *"would this pass MiCA?"*, or similar.
- Is planning a European crypto campaign and wants a pre-ship gate.

## How to use

Walk the asset through all 40 rules in [references/mica-marketing-self-audit.md](./references/mica-marketing-self-audit.md). For each rule, return one of:

- **PASS** — the asset clearly complies with this rule.
- **FAIL** — the asset clearly violates this rule, with a specific quote from the asset and a concrete rewrite.
- **N/A** — the rule does not apply to this asset type (e.g. video-specific rules on a static image ad).

## Output format

Return a structured audit in this exact shape:

```
ASSET SUMMARY
  Type: [static ad / landing page / influencer brief / email / push / video / earn promo / stablecoin creative]
  Target market: [country or EU-wide]
  Asset type-specific risks: [one line]

AUDIT
  Rule 1: [PASS / FAIL / N/A] — [one-line reasoning]
  Rule 2: ...
  ...
  Rule 40: ...

FAIL COUNT: [N]

TOP 3 FAILURES TO FIX BEFORE SHIPPING
  1. Rule [X]: [the problem, the specific quote, the concrete rewrite]
  2. ...
  3. ...

ESCALATION
  [Escalate to legal: yes / no. If yes: which rules, and why.]
```

## Escalation rule

- **0–3 fails**: safe to ship after the three fixes.
- **4+ fails**: escalate to legal before shipping. Do not attempt to fix this asset in one iteration; rewrite from scratch.

## Important constraints

- This is a **marketing operator's self-audit**, not legal advice.
- When in doubt on a specific rule, flag it and ask the user to cross-check with their in-house counsel, the relevant national competent authority (AMF, BaFin, CSSF, CNMV, etc.), and the latest ESMA guidance.
- Do not soften or rewrite the rules themselves based on user preference. If the user asks to skip a rule, decline and explain why the rule exists.

The 40 rules and the full reasoning are in the reference file: [references/mica-marketing-self-audit.md](./references/mica-marketing-self-audit.md).
