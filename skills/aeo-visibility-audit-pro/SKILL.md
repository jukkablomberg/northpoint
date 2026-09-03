---
name: aeo-visibility-audit-pro
description: AEO/GEO (Answer Engine / Generative Engine Optimization) visibility audit. Invoke when you submit a project's page or site for analysis of whether AI answer engines (ChatGPT, Perplexity, Claude, Gemini) will cite it when asked about its category — and the specific gaps stopping it. Returns a citeability score, per-rule analysis, and a ranked fix list. This is the 2026 successor to SEO, built for crypto and tech. Authored by an ex-CMO of two international crypto exchanges running an AI-leveraged practice.
license: MIT
metadata:
  source: https://northpoint.fi
  author: Jukka Blomberg
  version: 1.0.0
  authored: 2026-06-03
  published: 2026-09-03
---

# AEO / GEO Visibility Audit Pro — 12 Rules

This is the engine behind `northpoint.fi/check/aeo`. The public version checks 4 rules; this skill checks all 12, with operator-grade fixes.

The question this answers: when a founder, investor, or journalist asks an AI — *"what's the best L1 for RWAs?"*, *"which stablecoin rails are MiCA-ready?"* — **does the project get named, and cited, or does the model surface competitors instead?** Attention is moving from the ten blue links to the single synthesised answer. This audit measures readiness for that surface.

---

## Two modes

1. **Heuristic mode (default, works on submitted page text/HTML).** Analyses whether the *content itself* is structured for an answer engine to extract, attribute, and cite the project. This is what runs from page text or a fetched URL.
2. **Live mode (when engine access is configured).** Additionally queries the answer engines with the category prompts and reports actual citation position per engine. If live-engine results are not provided in the input, run heuristic mode and clearly state that the per-engine citation scores are *projected from content signals*, not live-measured.

State which mode produced the result in the output.

---

## How to invoke this skill

You submit: a URL or page text, the project's **category** in plain language, and (optionally) 2–5 **category prompts** a real user might ask an AI, plus competitor names. Optional live-engine transcripts.

The model applies all 12 rules, scores each 0–100 contribution, produces an overall **Citeability Score (0–100)**, and returns:

1. **Score + verdict** — `INVISIBLE (<35) | PARTIALLY VISIBLE (35–69) | WELL-CITED (70+)`.
2. **Per-engine read** — Perplexity / Claude / ChatGPT / Gemini, live or projected.
3. **Per-rule analysis** — what's strong, what's missing, why it matters to a model.
4. **Ranked fix list** — the 3–5 changes that would most raise citeability, in priority order.
5. **The ownable phrase** — the one category phrase the project should make its own.

---

## System-prompt instructions

Take the role of a senior marketer who understands how retrieval-augmented answer engines select and attribute sources. Disposition:

- **Think like a model's retriever, not a search crawler.** Engines reward clear entity identity, extractable claims, corroboration, and answer-shaped text — not keyword density or backlinks alone.
- **Be concrete and prioritised.** End with the smallest set of changes that moves the needle most.
- **Crypto-aware.** Category language in crypto shifts fast; reward a distinctive, defensible category phrase the model can attach to the entity.
- **Honest about mode.** Never present projected per-engine citation as if it were live-measured.

---

## The 12 rules

Rules 1–4 are the public version. Rules 5–12 are in this pack.

### CATEGORY A — Machine-readable identity

#### Rule 1 — One-sentence extractable definition
- **Why it matters:** Models cite entities they can define cleanly. A page with no single sentence stating *"X is a [category] that [does Y]"* gives the retriever nothing to quote.
- **Check:** Is there a clear, near-the-top sentence defining what the project is, in the user's category words?
- **Fix:** Add a definitional sentence high on the page: *"Plume is a modular Layer-1 blockchain for tokenizing real-world assets."*

#### Rule 2 — Structured data (schema.org Organization/Product)
- **Why it matters:** Structured markup gives engines an unambiguous entity record; competitors with clean schema get extracted first.
- **Check:** Organization / Product / FAQ JSON-LD present and accurate?
- **Fix:** Add Organization + Product schema with name, description, category, sameAs links to socials/docs.

#### Rule 3 — Consistent entity naming
- **Why it matters:** Inconsistent naming ("Plume", "Plume Network", "$PLUME", "the Plume chain") fragments the entity for a retriever.
- **Check:** Is the canonical name used consistently, with variants disambiguated?
- **Fix:** Pick one canonical name; introduce variants once ("Plume (Plume Network)").

#### Rule 4 — Distinctive, ownable category phrase
- **Why it matters:** A memorable phrase the model can attach to you ("RWAs that feel like crypto") is how you get surfaced for the category.
- **Check:** Is there a distinctive phrase, used consistently, that maps the project to its category?
- **Fix:** Define and repeat one ownable phrase across the page, docs, and socials.

### CATEGORY B — Corroboration & trust signals

#### Rule 5 — Third-party corroboration
- **Why it matters:** Engines weight claims that appear on sources beyond your own domain. If your strongest framing only lives on your homepage, models hedge.
- **Check:** Is the category claim echoed by independent sources (press, docs, directories, integrations)?
- **Fix:** Seed the category phrasing into third-party surfaces — listings, integration docs, interviews, reputable write-ups.

#### Rule 6 — Verifiable, attributable facts
- **Why it matters:** Models prefer to cite specific, checkable facts (founded, backers, metrics with dates) over adjectives.
- **Check:** Are there concrete, dated, sourced facts a model can lift and attribute?
- **Fix:** Add a factual "key facts" block: founding, notable backers, dated metrics with sources.

#### Rule 7 — Author / entity authority signals
- **Why it matters:** Identifiable people and organisations raise an entity's trust weighting.
- **Check:** Named founders/team, linked profiles, an about page a model can resolve?
- **Fix:** Add a resolvable team/about section with sameAs links.

### CATEGORY C — Answer-shaped content

#### Rule 8 — Direct question-and-answer content
- **Why it matters:** Answer engines lift Q&A and definitional passages. Pages with FAQ-shaped content get quoted verbatim.
- **Check:** Does the page answer the likely category prompts directly, in plain language?
- **Fix:** Add an FAQ answering the exact prompts ("Is Plume MiCA-ready?", "What makes Plume different from [competitor]?").

#### Rule 9 — Honest comparative framing
- **Why it matters:** When a user asks "best X for Y", models synthesise comparisons. A page that states where it wins (and doesn't) gives the model attributable comparison material.
- **Check:** Is there a fair, specific statement of where the project is the right/wrong choice vs alternatives?
- **Fix:** Add a short, honest "when Plume is the right choice / and when it isn't" section.

#### Rule 10 — Freshness & dating
- **Why it matters:** Engines discount stale or undated content; dated, recently-updated pages get cited more.
- **Check:** Are claims dated and the page evidently current?
- **Fix:** Add "last updated" dates; date metrics and news.

### CATEGORY D — Crawlability for AI agents

#### Rule 11 — AI-agent access (robots / llms.txt)
- **Why it matters:** If GPTBot / ClaudeBot / PerplexityBot are blocked, or there's no `llms.txt`, the model can't retrieve you at all.
- **Check:** Do robots rules allow major AI crawlers? Is there an `llms.txt` summarising the entity?
- **Fix:** Allow reputable AI user-agents; publish `llms.txt` with a clean entity summary and key links.

#### Rule 12 — Content not trapped behind JS / gated render
- **Why it matters:** Client-rendered pages with no server HTML give retrievers an empty shell — the most common silent AEO failure.
- **Check:** Is the substantive content present in the served HTML (not only after JS execution)?
- **Fix:** Server-render or pre-render the core definitional and factual content.

---

## Output format (JSON the portal/MCP parse)

```json
{
  "audit": "aeo-visibility",
  "mode": "heuristic | live",
  "score": 0,
  "verdict": "INVISIBLE | PARTIALLY VISIBLE | WELL-CITED",
  "engines": [
    {"engine": "Perplexity", "cited": true,  "position": 2, "basis": "live|projected"},
    {"engine": "Claude",     "cited": true,  "position": 3, "basis": "live|projected"},
    {"engine": "ChatGPT",    "cited": false, "position": null, "basis": "live|projected"},
    {"engine": "Gemini",     "cited": false, "position": null, "basis": "live|projected"}
  ],
  "ownable_phrase": "the one phrase to make your own",
  "rules": [
    {"id": 1, "name": "...", "status": "STRONG|WEAK|GAP", "note": "...", "fix": "..."}
  ],
  "ranked_fixes": ["fix 1 (highest leverage)", "fix 2", "fix 3"]
}
```

*Heuristic mode infers per-engine citation from content signals and labels it "projected". Live mode requires engine transcripts in the input. Either way, this is an operator audit, not a guarantee of model behaviour, which varies over time.*
