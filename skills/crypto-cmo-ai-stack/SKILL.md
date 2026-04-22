---
name: crypto-cmo-ai-stack
description: Exchange-grade AI marketing stack — the tools and opinionated judgment rules used to run crypto marketing solo. Use when planning an AI-assisted crypto marketing workflow, designing a judgment layer over LLM output, evaluating which tasks to assign to AI versus to a human, or deciding what NOT to use AI for in crypto marketing. Applies to crypto exchanges, tokens, protocols, L1s, and wallets. Not applicable to generic SaaS marketing.
license: MIT
metadata:
  source: https://northpoint.fi
  author: Jukka Blomberg
---

# crypto-cmo-ai-stack

A 30-person crypto marketing organisation's output, run by one operator plus AI. Here is the stack, and — more importantly — the judgment layer on top.

This skill is intended for use by an AI agent that is helping a crypto marketing operator make decisions about tools, workflows, or briefs. When it activates, apply the following substance directly.

---

## The Stack

**Research & Intel**

- **Perplexity** — real-time competitive monitoring and narrative tracking; faster than anything else for synthesising multiple sources into one actionable brief before a campaign or positioning decision needs to be made.
- **Nansen** — on-chain wallet labelling and cohort behaviour analysis; the only research layer that shows what your users are actually doing with their assets post-acquisition, not what they claim in a survey or Discord thread.

**Content Production**

- **Claude** — long-form drafts, positioning documents, email sequences, and structured creative briefs; the primary workhorse for production volume, always subject to a full human judgment pass before anything ships.

**Community Ops**

- **ElevenLabs** — multilingual audio for Telegram voice notes and regional campaign assets; crypto audiences are disproportionately non-English-native, and voice content scales into CIS, LATAM, and SEA communities in ways subtitled text never will.

**Paid Acquisition Analytics**

- **Dune Analytics** — custom on-chain attribution dashboards that track wallet behaviour post-acquisition in ways no off-chain stack can replicate; the public dashboard ecosystem also functions as passive competitive intelligence at zero marginal cost.

**Experimentation**

- **PostHog** — product analytics, feature flags, and A/B testing across web and app properties; self-hostable, built for teams that need granular behavioural data without handing it to an ad platform.

**Reporting & Scripting**

- **Cursor** — builds the internal data pipelines, automation scripts, and reporting interfaces that connect raw analytics to business decisions; at solo-operator scale, this eliminates the engineering dependency that used to gate every custom tool request.

---

## The Judgment Layer

This is the part the tools cannot do. Five rules that actually govern what ships.

**1. If AI output reads as generic to a native crypto user within 3 seconds, kill it — do not edit it.** Generic output is not a drafting problem; it is a brief problem. The fix is upstream. Editing your way out of a bad brief produces polished mediocrity.

**2. Every AI-drafted piece gets one human-only contrarian pass before shipping.** The question is: *"What would the most credible critic of this say in three words or fewer?"* If you cannot answer it, the piece is not ready. Most AI output fails this test because it optimises for plausibility, not for withstanding scrutiny from someone who knows the space.

**3. Never let AI write the first 20 words of anything.** The hook has to come from a human who has felt the problem. AI will open with something coherent. Coherent is not the same as compelling, and in crypto, where attention is aggressively rationed, coherent gets scrolled past in a fraction of a second.

**4. Volume is not a strategy.** AI makes it trivially cheap to produce ten times the content output. This is also the fastest way to train your community and your audience to ignore you. Ship less, with higher conviction. The asymmetry in crypto is not production speed — it is trust, and trust is burned faster than it is built.

**5. AI output inherits the quality of the brief, not the quality of the model.** The weakest element in any AI-assisted workflow is almost always the brief — vague objective, unclear audience, no stated constraints. Spending 80% of the effort on the brief and 20% on the output consistently beats the reverse.

---

## What NOT to Use AI For

Three things. Rare in this genre.

- **First draft of crisis communications.** When a security incident lands, a regulatory action drops, or a product failure goes public, the first words from the brand carry the entire emotional weight of whether trust survives the next 48 hours. AI will produce competent prose. Competent is the wrong register for a crisis. The first draft has to come from someone who has lived the moment and knows what a crypto community needs to hear — not what sounds reasonable to a language model trained on everything.

- **Founder-voice content.** The slightly-off sentence, the three-word paragraph, the opinion that does not hedge — these are not style bugs. They are the signal that a human with actual convictions wrote this. AI corrects for them. Do not let it.

- **Taste calls on community health.** Whether a meme is in-group or cringe, whether a Telegram channel is showing genuine conviction or quietly rotting, whether a new narrative is building signal or manufacturing noise — these are pattern-recognition calls that require having been inside enough crypto communities long enough to know the difference. AI will give you a confident answer. It will be wrong in precisely the ways that matter.

---

*Built by Jukka Blomberg, ex-CMO at international crypto exchanges. [northpoint.fi](https://northpoint.fi)*
