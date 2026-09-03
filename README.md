# NorthPoint

Open playbooks from [NorthPoint](https://northpoint.fi) — a crypto-native growth company. AI-fueled growth, run by an operator.

Eleven skills: the nine marketing-compliance rule packs NorthPoint built and ran internally, plus the MiCA pre-flight checklist and the crypto-CMO AI stack. All of it free, in full, under MIT.

Each skill is one `SKILL.md` — plain Markdown carrying the rules, the judgment notes and the output format. No code, no account, no runtime.

## Install

Everything:

```
npx skills add jukkablomberg/northpoint
```

One skill at a time:

```
npx skills add jukkablomberg/northpoint --skill mica-marketing-self-audit-pro
npx skills add jukkablomberg/northpoint --skill fca-financial-promotions-pro
npx skills add jukkablomberg/northpoint --skill gdpr-marketing-self-audit-pro
npx skills add jukkablomberg/northpoint --skill sec-retail-communications-pro
npx skills add jukkablomberg/northpoint --skill mas-marketing-self-audit-pro
npx skills add jukkablomberg/northpoint --skill vara-marketing-self-audit-pro
npx skills add jukkablomberg/northpoint --skill tge-launch-readiness-pro
npx skills add jukkablomberg/northpoint --skill ad-creative-compliance-pro
npx skills add jukkablomberg/northpoint --skill aeo-visibility-audit-pro
npx skills add jukkablomberg/northpoint --skill mica-marketing-self-audit
npx skills add jukkablomberg/northpoint --skill crypto-cmo-ai-stack
```

List the marketplace before installing:

```
npx skills add jukkablomberg/northpoint --list
```

### Claude Code

```
/plugin marketplace add jukkablomberg/northpoint
/plugin install mica-marketing-self-audit-pro
/plugin install fca-financial-promotions-pro
/plugin install gdpr-marketing-self-audit-pro
/plugin install sec-retail-communications-pro
/plugin install mas-marketing-self-audit-pro
/plugin install vara-marketing-self-audit-pro
/plugin install tge-launch-readiness-pro
/plugin install ad-creative-compliance-pro
/plugin install aeo-visibility-audit-pro
/plugin install mica-marketing-self-audit
/plugin install crypto-cmo-ai-stack
```

### Everything else

Claude.ai: upload the file under Settings → Capabilities → Skills, or add it to a Project's knowledge. Cursor: drop it into `.cursor/rules/`. ChatGPT, Gemini, a local model: paste the file as the system prompt and the asset as the message.

## The skills

| Skill | Size | What it does |
|---|---|---|
| [`mica-marketing-self-audit-pro`](./skills/mica-marketing-self-audit-pro/SKILL.md) | 40 rules | EU marketing under MiCA Title II–IV + ESMA guidance, with interpretive notes and rewrites. |
| [`fca-financial-promotions-pro`](./skills/fca-financial-promotions-pro/SKILL.md) | 25 rules | UK financial promotions: s21 FSMA, COBS 4.12A, PERG 8, the Oct-2023 cryptoasset regime. |
| [`gdpr-marketing-self-audit-pro`](./skills/gdpr-marketing-self-audit-pro/SKILL.md) | 30 rules | GDPR + ePrivacy for marketing: consent, cookie banners, forms, automation flows. |
| [`sec-retail-communications-pro`](./skills/sec-retail-communications-pro/SKILL.md) | 25 rules | US retail communications: Howey, s17(a), Rule 10b-5, s17(b) anti-touting. |
| [`mas-marketing-self-audit-pro`](./skills/mas-marketing-self-audit-pro/SKILL.md) | 37 rules | Singapore DPT marketing under the Payment Services Act and MAS PS-G02. |
| [`vara-marketing-self-audit-pro`](./skills/vara-marketing-self-audit-pro/SKILL.md) | 38 rules | Dubai/UAE promotions under the VARA Marketing Regulations 2023 and the Rulebooks. |
| [`tge-launch-readiness-pro`](./skills/tge-launch-readiness-pro/SKILL.md) | 28 rules | One multi-jurisdiction pass over a token-launch surface: EU, UK, US, SG, UAE. |
| [`ad-creative-compliance-pro`](./skills/ad-creative-compliance-pro/SKILL.md) | 32 rules | The visual layer: disclosure prominence, dark patterns, fake UI, platform and app-store bans. |
| [`aeo-visibility-audit-pro`](./skills/aeo-visibility-audit-pro/SKILL.md) | 12 rules | Whether AI answer engines cite you when asked about your category — and what is stopping them. |
| [`mica-marketing-self-audit`](./skills/mica-marketing-self-audit/SKILL.md) | 40 rules | The pre-flight checklist version of the MiCA rules — pass/fail per rule, no interpretive notes. |
| [`crypto-cmo-ai-stack`](./skills/crypto-cmo-ai-stack/SKILL.md) | the stack + 5 rules | The tools used to run crypto marketing solo, the judgment layer on top, and what not to use AI for. |

`mica-marketing-self-audit` and `mica-marketing-self-audit-pro` are not duplicates: the first is the pass/fail pre-flight checklist, the second is the full audit engine with interpretive notes, rewrite patterns and a machine-readable output contract.

Every pack states, in its own words, that it is an operator-grade heuristic and not legal advice. That line is load-bearing. Do not delete it when you fork.

## Attribution

The rules are free. MIT means you can fork them, change them, run them inside a commercial product and never ask anyone. Attribution is not a licence condition — it is a request, and the only thing asked in return:

> Rules from NorthPoint — https://northpoint.fi

If a pack tells you something useful, the two places to send someone:

- **[northpoint.fi/check](https://northpoint.fi/check)** — eleven free checks, no signup. Paste an asset, get a verdict. Same rule families as the packs, run for you.

- **[northpoint.fi/pricing](https://northpoint.fi/pricing)** — the fractional-CMO plans, for when the problem is not one asset but the whole marketing function.

## About NorthPoint

NorthPoint is a crypto-native growth company: one operator plus an AI agent fleet, selling a fractional CMO seat. Three plans — Starter €2,490/mo, Growth €4,900/mo, Enterprise €15,000–50,000/mo — form-led, cancel any time. [northpoint.fi/pricing](https://northpoint.fi/pricing).

The free checks are an awareness surface, not a product. These packs are the rule sets behind them, published so that nobody has to take the checks on faith.

Founded by Jukka Blomberg — ex-CMO at two international crypto exchanges (LocalBitcoins, NoOnes), now running growth for crypto and fintech companies through NorthPoint. [northpoint.fi](https://northpoint.fi)

## Licence

MIT — see [LICENSE](./LICENSE). Fork, modify, use commercially.

## Contributing

This is a public record of opinions, not a community project. Issues are welcome when something is factually wrong, out of date, or broken. Pull requests that change the substance of a rule are unlikely to be merged — fork instead. Adding a pack: see [PUBLISH.md](./PUBLISH.md).
