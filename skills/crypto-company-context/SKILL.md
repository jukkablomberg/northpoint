---
name: crypto-company-context
description: Company context for every other NorthPoint skill. Use this once per company before any compliance check — when an agent needs the company context, asks which jurisdictions a company markets to, needs the licence status or the token status, or is about to run any MiCA / FCA / GDPR / SEC / MAS / VARA / TGE / ad-creative audit. It writes `.agents/crypto-company.md`, the one facts file every other skill reads first for jurisdictions, licences and token status, so the packs stop re-asking "which company, which jurisdiction, which licence" on every run. Not applicable as a rule set — it contains no rules and returns no verdict.
license: MIT
metadata:
  source: https://northpoint.fi
  author: Jukka Blomberg
  version: 1.0.0
  authored: 2026-09-18
  published: 2026-09-18
---

# crypto-company-context

Write the company down once. Every other skill in this repository reads the result before it does anything.

Run this skill first, one time per company, and keep the file it produces in the repository. It is a facts file, not an audit: no rules, no verdicts, no rewrites, nothing sold. It exists so that `mica-marketing-self-audit-pro`, `fca-financial-promotions-pro`, `gdpr-marketing-self-audit-pro`, `sec-retail-communications-pro`, `mas-marketing-self-audit-pro`, `vara-marketing-self-audit-pro`, `tge-launch-readiness-pro`, `ad-creative-compliance-pro`, `aeo-visibility-audit-pro`, `mica-marketing-self-audit` and `crypto-cmo-ai-stack` all start from the same answers instead of asking the operator for them again.

---

## When to activate

- The user asks for the company context, or asks which jurisdictions, licences or token status apply to the company they are working on.
- Any other NorthPoint skill is about to run and `.agents/crypto-company.md` does not exist, or is older than the company's last material change (a new market, a licence granted or lost, a token launched, a product line added).
- The user says "set up the company file", "update the company context", or names a fact that belongs in one of the sections below.

Do not activate this skill to answer a compliance question. Answer it with the relevant pack; this skill only supplies the facts that pack will read.

---

## Workflow

1. **Check for the existing file.** Look for `.agents/crypto-company.md` at the repository root. If it exists, read it, summarise its `Version` and the last three `Changelog` lines to the user, and ask whether anything has changed. If nothing has changed, stop; the packs read the file as it is.

2. **Auto-draft from what is already in front of you.** Read the repository (README, `package.json` or equivalent, legal or terms pages, a marketing site checked into the tree, prior audit outputs) and pre-fill every section you can with a source citation next to each fact (a file path or URL). Mark anything you inferred rather than read as `unverified`. Never invent a licence, a register entry, a number or a jurisdiction; an empty field is correct when the fact is unknown.

3. **Walk the sections the draft could not fill.** Ask one section at a time, in the order below, and accept "unknown" or "none" as complete answers. Do not push the operator toward any jurisdiction, structure or claim.

4. **Write the file** in the exact template below, at `.agents/crypto-company.md`. Create the `.agents/` directory if needed.

5. **Version it.** `Version` is semantic: a new jurisdiction, licence status change or token status change is a minor bump; a correction to a fact is a patch. Append one dated line to `Changelog` for every write, newest last. Never rewrite history.

6. **Tell the user which packs to run next**, by name, based on the jurisdictions in section 4 and the product type in section 2. Do not run them from this skill.

---

## The file template

Write `.agents/crypto-company.md` exactly in this shape. Keep the headings; leave a field empty rather than guessing.

```markdown
# Company context — <company name>

Version: 1.0.0
Written: YYYY-MM-DD
Written by: <person or agent>
Read by: every NorthPoint skill, first.

## 1. Company
- Legal name:
- Trading name(s):
- Registered in (country, register, number):
- Group / parent (if any):
- Website(s):
- Primary contact for marketing compliance:

## 2. Product type
One or more of: exchange · wallet (custodial / non-custodial) · CASP (which services) · issuer (ART / EMT / other crypto-asset) · offeror · protocol · service vendor (to the industry) · other.
- Product type(s):
- What the product does, in one sentence:
- Fiat on/off-ramp: yes / no / via partner (name)
- Earn, staking, lending or yield features: yes / no (describe)

## 3. Token status
- Native or associated token: none / planned / live
- Token name and ticker:
- Classification the company relies on (utility / ART / EMT / security / unclassified) and who made that determination:
- Whitepaper published: yes / no (URL, date, notifying authority)
- Listing venues:

## 4. Jurisdictions marketed to
For each of EU · UK · US · Singapore · UAE · other, state one of: actively marketed · reachable but not targeted · geo-blocked · not applicable.
- EU:
- UK:
- US:
- Singapore:
- UAE:
- Other (list):
- Languages of marketing material:

## 5. Licences and registrations
One line per jurisdiction: status (held / applied / not required / none) · authority · licence or registration type · reference number · register URL · date.
- 
- 

## 6. Audiences
- Retail: yes / no
- Professional / institutional: yes / no
- Ideal customer profile, in one sentence:
- Minimum age enforced and how:

## 7. Channels in use
Tick what the company actually runs: website · paid search · paid social (which platforms) · organic social (which) · email · push · affiliates / referrals · KOLs and influencers · PR · events · app stores · other.
- 

## 8. Competitors
Up to five, with the market each competes in.
- 

## 9. Public claims inventory
Every number, superlative or promise the company states publicly, one per line: the claim · where it appears (URL) · its source or evidence · date last verified.
| Claim | Where | Source / evidence | Last verified |
|---|---|---|---|
| | | | |

## 10. Do-not-say list
Phrases, claims or comparisons the company has decided not to use, with the reason (a regulator's guidance, counsel's advice, a past finding, a brand rule).
- 

## Changelog
- YYYY-MM-DD · 1.0.0 · created by <who> · sections filled: <list> · unverified fields: <list>
```

---

## Operational constraints

- **Facts only.** This file records what is true about the company. It never contains a rule, a verdict, a rewrite or a recommendation about what the company should do; those belong to the packs that read it.
- **Cite or mark unverified.** Every fact you did not take from the operator's own words carries a source. Anything inferred is marked `unverified` until the operator confirms it.
- **Never fill a licence from memory.** Licence and registration lines come from the operator or from the authority's public register, with the register URL beside them. A licence that cannot be found on a register is recorded as `unverified`.
- **The claims inventory is the company's, not yours.** List the claims the company makes; do not judge them here. The packs will.
- **Keep it in the repository.** The file is meant to be committed, versioned and read by agents. Do not store secrets, personal data beyond a work contact, or anything the company would not commit.
- This skill is a working tool for marketing operators. It is not legal advice, and filling it in does not establish that any activity is authorised in any jurisdiction.
