# NorthPoint

Open playbooks from [NorthPoint](https://northpoint.fi) — exchange-grade crypto marketing, run by an operator, leveraged by AI.

This repository is a skills marketplace: the operator-grade checklists, prompt libraries, and judgment rules that NorthPoint uses internally, published openly.

## Install

Install everything (both skills):

```
npx skills add jukkablomberg/northpoint
```

Or install a specific skill:

```
npx skills add jukkablomberg/northpoint --skill crypto-cmo-ai-stack
npx skills add jukkablomberg/northpoint --skill mica-marketing-self-audit
```

List what's in the marketplace before installing:

```
npx skills add jukkablomberg/northpoint --list
```

### Claude Code plugin install

For Claude Code users specifically:

```
/plugin marketplace add jukkablomberg/northpoint
/plugin install crypto-cmo-ai-stack
/plugin install mica-marketing-self-audit
```

## Skills

### `crypto-cmo-ai-stack`

The tools and judgment layer we actually use to run crypto marketing solo. The stack, the rules we apply on top, and what we deliberately don't use AI for. Exchange-grade opinions, compressed.

→ [Skill source](./skills/crypto-cmo-ai-stack/SKILL.md)

### `mica-marketing-self-audit`

A 40-rule operator-grade checklist for MiCA-compliant crypto marketing. Runs a draft ad, landing page, influencer brief, email, or promo creative against the forty rules before it ships to EU markets. Works as a human checklist or a system prompt for an LLM.

→ [Skill source](./skills/mica-marketing-self-audit/SKILL.md)

## About NorthPoint

NorthPoint is a crypto-native marketing firm. One operating system, three levels of involvement:

- **AI Crypto CMO** — monthly subscription. You run it. Our AI stack runs inside it. We review. From €2,500/mo.
- **CMO Operating System** — 90-day install. We build the marketing function inside your company and hand it over. From €55,000.
- **Fractional Crypto CMO** — ongoing retainer. We run your marketing, part-time, leveraged by AI. From €15,000/mo.

Founded by Jukka Blomberg — ex-CMO at international crypto exchanges, 30+ team lead, author of *Crypto Curious?* and *How to Profit from China*.

Learn more: [northpoint.fi](https://northpoint.fi).

## License

MIT — see [LICENSE](./LICENSE). Fork, modify, use commercially. Attribution appreciated but not required.

## Contributing

This is a public record of opinions, not a community project. Issues are welcome if something is factually wrong or broken. Pull requests that change the substance of a skill are unlikely to be merged — fork instead.
