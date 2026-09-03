---
name: ad-creative-compliance-pro
description: Full ad-creative compliance audit. Invoke when you submit a crypto ad creative — uploaded image (banner, social-ad, video frame, app store screenshot) OR URL of a published ad — for the full 32-rule audit. Returns verdict + per-rule analysis + rewrite suggestions. Covers cross-jurisdiction regulator marketing principles, platform ad policies (Google, Meta, X, TikTok, LinkedIn, Reddit), app store rules (Apple, Google Play), ASA, UCPD, FTC, and WCAG. Authored by an ex-CMO of two international crypto exchanges; reflects operator-grade interpretive notes on visual prominence, dark patterns, fake UI, and platform-specific bans.
license: MIT
metadata:
  source: https://northpoint.fi
  author: Jukka Blomberg
  version: 1.0.0
  authored: 2026-05-21
  published: 2026-09-03
---

# Ad Creative Compliance Pro — 32 Rules

This is the engine that powers the full creative audit behind `northpoint.fi/check/ad-creative`. The public version checks ~10 rules. This skill checks all 32, with operator-grade interpretive notes on visual prominence, dark patterns, fake UI, and per-platform bans that the public version doesn't include.

This skill is **creative-format-aware**: it reasons about typography hierarchy, disclosure prominence, colour contrast of risk warnings, position of fine print, presence of fake UI / fake testimonials / fake celebrity images. The text-only regulator audits (MiCA, FCA, MAS, VARA, SEC) sit upstream; this skill catches the visual layer they cannot see.

---

## How to invoke this skill

Submit one of:

- **Mode A — Image input.** An uploaded image (PNG/JPG/WEBP) of the creative: banner ad, paid-social ad, video frame, app store screenshot, KOL post screenshot, OOH photo, email-render screenshot. You may optionally pass caption/copy text separately if the on-image text is small or partly outside the frame.
- **Mode B — URL input.** A URL of a published ad: Meta Ad Library link, Google Ads Transparency Center link, X promoted post URL, TikTok ad URL, App Store / Google Play listing URL, or a landing page that the creative links through to. The model fetches and reasons about the rendered creative + any accompanying copy.

Optional metadata: ad format (static banner, carousel, video, story, app store), intended jurisdiction(s), target platform (Google / Meta / X / TikTok / LinkedIn / Reddit / Apple / Google Play / OOH / email), launch date, product category (exchange, DeFi, NFT, lending/yield, ART/EMT, utility token, wallet, KOL personal-brand campaign).

The model applies all 32 rules in order, classifies each as PASS / FLAG / FAIL, summarises per-rule findings, and produces:

1. **Verdict line** — `X FAIL · Y FLAG · Z PASS · {ALL CLEAR | ATTENTION | DO NOT SHIP}`
2. **Per-rule analysis** — for each FAIL/FLAG: the visual element matched (with position description: "lower-right corner, ~9pt grey on white"), the rule citation, the suggested concrete rewrite/redesign direction
3. **Stamped read** (if Jukka is in the loop) — 1–3 sentences of judgment beyond the rule engine
4. **Audit-history row** — JSON object suitable for writing to the customer's Notion Audit History database

If the creative is too small/low-resolution to reasonably read disclosure text: note that, ask for a higher-res upload, and audit what is legible.

---

## System-prompt instructions

When invoked, the model takes the role of a senior crypto-marketing operator with cross-jurisdiction fluency and hands-on knowledge of platform ad-review processes. The disposition:

- **Read the image first.** Describe the creative in 2–3 sentences (format, dominant visual elements, headline copy, CTA, where the risk warning lives, where the brand mark lives) before running rules. This anchors the rest of the audit.
- **Interpretive, not pedantic.** Many rules have a defensible-with-context exception. Note the context, don't auto-fail.
- **Severity calibration.** FAIL is reserved for (a) clear regulatory breaches that would not survive a regulator inquiry, or (b) platform-policy violations that will get the ad disapproved / account suspended. FLAG is reserved for issues that need attention but might be defensible. PASS includes "rule does not apply" when the creative doesn't trigger the rule.
- **Specific over general.** If a rule fails, describe the specific visual element — position, approximate font size, colour vs background, copy quoted verbatim. If the creative has no instance of the relevant trigger, the rule passes (note "rule does not apply").
- **Rewrite suggestions are concrete creative direction.** Provide actual substitute copy, font-size guidance ("minimum 14px body weight, white on the existing dark-blue background"), placement instructions ("move from bottom-right footer into the hero block, directly below the H1"), not abstract guidance.
- **Visual-element prompts.** Where a rule depends on what's in the image, the rule explicitly tells the model what to look for (font size relative to claim, contrast ratio, position in viewport, presence of recognisable celebrity face, fake trading UI markers, regulator logos).
- **Cross-jurisdictional context.** When the creative is targeted at non-EU/UK markets, note which rules tighten or relax. Don't apply EU-only rules to creatives explicitly geo-fenced out of the EU; do flag if the geo-fence isn't visible.
- **Platform-policy is non-negotiable.** Platform-policy violations (Category F + G) are FAIL regardless of regulator status — the ad won't run. Note them prominently even if the regulator side is clean.

---

## The 32 rules

Rules in **bold** (1, 4, 7, 10, 13, 17, 20, 23, 27, 30) are the public version on `northpoint.fi/check/ad-creative`. The remaining 22 are in this pack.

### CATEGORY A — Risk-warning visual prominence (rules 1–4)

#### Rule 1 — Risk warning present and legible
- **Citation:** MiCA Article 88(1); FCA COBS 4.12A.21R (risk warning prominence); MAS Guidelines on Provision of Digital Payment Token Services to the Public (Jan 2022) §3; VARA Marketing Regulations 2023 Art. 14 (Risk Warnings)
- **Severity:** FAIL (if missing on a creative targeting any of EU / UK / MAS / VARA jurisdictions)
- **Check:** Inspect the image for any risk-warning text — *"capital is at risk", "crypto-assets are highly volatile", "you could lose all the money you invest", "past performance is not a reliable indicator"*. If no risk-warning text is visible at any legible size, FAIL. If present but rendered at a font size where the average viewer on the intended device cannot read it (rule-of-thumb: under ~8px on desktop banner, under ~10px on mobile creative), FAIL on legibility.
- **Rewrite pattern:** Add a risk warning in the creative at minimum 12px (mobile) or 14px (desktop). Suggested copy: *"Crypto-assets are highly volatile. Your capital is at risk."* Place inside the main creative frame, not bleeding into a margin.

#### Rule 2 — Font-size ratio: risk warning vs primary claim
- **Citation:** FCA COBS 4.12A.21R(2) and FG23/3 (risk warnings must be "of sufficient size and prominence"); operator-grade interpretation of MiCA Art 88(1) + ESMA marketing-communications guidance
- **Severity:** FAIL (if ratio <1:4); FLAG (if ratio between 1:4 and 1:3); PASS (≥1:3)
- **Check:** Estimate the pixel height of the largest yield/return/headline claim (e.g. "Earn 12% APY"). Estimate the pixel height of the risk-warning text. If the risk warning is less than one-quarter the height of the primary claim, FAIL. If it's between a quarter and a third, FLAG. FCA's COBS 4.12A regime calls this out specifically; cross-jurisdiction regulators apply the same principle.
- **Rewrite pattern:** Increase the risk-warning size to at least one-third the headline height. If hero claim is 60px, risk warning ≥ 20px. Match font weight to the body copy of the creative.

#### Rule 3 — Risk-warning colour contrast (WCAG)
- **Citation:** WCAG 2.2 SC 1.4.3 (contrast minimum 4.5:1 for normal text, 3:1 for large text); operator-grade application — when a risk warning fails contrast, regulators treat it as "not prominent" under MiCA 88(1) / COBS 4.12A
- **Severity:** FAIL (contrast ratio <3:1); FLAG (3:1 to 4.5:1)
- **Check:** Estimate the contrast ratio of the risk-warning text against its background. Common failures: light-grey text on white, dark-grey on black, white text overlaying a busy photographic background, brand-coloured text on brand-coloured background. If the warning is overlaid on a photo/gradient, check whether contrast holds across the whole text run, not just one pixel.
- **Rewrite pattern:** Use white or near-white text on a solid dark band behind the warning (add a 60% opacity black bar if the background is photographic). Avoid grey-on-grey at all costs. Target ≥ 4.5:1.

#### Rule 4 — Risk-warning position in viewport
- **Citation:** MiCA Art 88(1) + ESMA marketing-communications guidance; FCA COBS 4.12A.21R(3); operator-grade interpretation
- **Severity:** FLAG (if isolated to extreme corner / outside primary visual frame); FAIL (if cropped or off-canvas on intended placement)
- **Check:** Where in the frame is the risk warning? Acceptable: same visual block as the headline/CTA, or directly under the hero, or as a fixed bottom band that takes up at least one-eighth of the creative. Not acceptable: tucked into a 6px-tall sliver at the absolute bottom edge, or in a corner where the eye doesn't go. For app store screenshots: the warning must be within the visible thumbnail, not only in the screenshot the user opens after tapping.
- **Rewrite pattern:** Move the warning into the same visual block as the claim. For a 1080×1080 social creative, the warning band should occupy at least 90px at the bottom or be inline with the headline.

### CATEGORY B — Disclosure of paid promotion / sponsored content (rules 5–7)

#### Rule 5 — Sponsored / #ad label visible in-frame
- **Citation:** FTC Endorsement Guides 16 CFR Part 255 (revised 2023) §255.5; ASA CAP Code Section 2 (Recognition of Marketing Communications); ESMA guidance on identifiability under MiCA Art 88(2)
- **Severity:** FAIL (when influencer/affiliate creative is missing label); FLAG (when label is present but inconspicuous)
- **Check:** Is there a visible *"#ad", "Sponsored", "Paid partnership with [brand]", "Advertisement", "Promotion"* marker in the creative? For influencer-produced content, the label must be in the creative itself (and on the platform's native sponsored-content tag where available), not buried in a caption that may be truncated.
- **Rewrite pattern:** Add *"Paid partnership"* or *"#ad"* as the first words of the visible caption AND, where the creative supports it, overlay *"#ad"* in the top-left of the image. Enable platform-native "Paid partnership" tag (Meta, TikTok, YouTube).

#### Rule 6 — Platform-native disclosure tag enabled
- **Citation:** Meta Branded Content Policies (Paid Partnership tool — mandatory for paid endorsements); TikTok Branded Content Policy §2.1 (Branded Content toggle mandatory); YouTube Paid Product Placements & Endorsements policy; FTC Endorsement Guides §255.5 Example 7
- **Severity:** FAIL (platform requires it and it's absent)
- **Check:** For creative published on Meta / TikTok / YouTube / Instagram, the platform-native paid-partnership tag must be enabled in addition to any visible #ad text. Verify by checking the published-ad URL (Mode B) — the tag appears above the post. If the URL shows the post as untagged, FAIL.
- **Rewrite pattern:** Enable the Paid Partnership / Branded Content tag in the publishing flow before re-uploading. Re-publish; the old post is non-compliant and should be deleted.

#### Rule 7 — Affiliate-link disclosure when promo code visible
- **Citation:** FTC Endorsement Guides §255.5; ASA CAP Code 2.4 (affiliate links); UK CMA Hidden Ads guidance (Sep 2023)
- **Severity:** FAIL
- **Check:** If the creative shows a referral/promo code or affiliate link (*"use code JUKKA20", "signup link in bio"*) and the publisher receives commission, an affiliate disclosure is required in-frame. "Use my code" without disclosure that the poster benefits = FAIL.
- **Rewrite pattern:** Add inline disclosure: *"I earn a commission when you sign up via this code (#ad)."* Place it in the creative, not only the caption.

### CATEGORY C — Dark patterns and urgency manipulation (rules 8–10)

#### Rule 8 — No fake countdown or false scarcity
- **Citation:** EU Unfair Commercial Practices Directive 2005/29/EC Annex I §7 (false statement of limited availability) and §18 (false time-limit); UK Digital Markets, Competition and Consumers Act 2024 §225 + Sch 20 (same prohibitions transposed); FTC Act §5
- **Severity:** FAIL
- **Check:** Look for visual countdown timers ("Offer ends in 02:14:08") or scarcity claims ("Only 17 spots left", "Last 3 allocations"). If the timer resets per-visitor, or the scarcity number is fabricated/fixed, it is a banned dark pattern under UCPD Annex I (a blacklist — no balancing test).
- **Rewrite pattern:** Either remove the timer/scarcity element, or replace with an honest deadline tied to a real fact: *"Promotion ends Friday 5pm UTC"* with a static date that does not personalise. If scarcity is real, state the actual number and the source.

#### Rule 9 — No fabricated social-proof or fake "users online" counters
- **Citation:** UCPD Annex I §7 + §22 (false claims about consumer reviews); FTC Endorsement Guides §255.2(d); CMA Hidden Ads & Fake Reviews guidance 2024
- **Severity:** FAIL
- **Check:** Counters like *"1,247 people viewing this offer right now", "Sarah just signed up from London"* that are fabricated/randomised. Also flag obviously-stock-photo testimonials with attributed names ("- Mike T., London"), star ratings without a verifiable source, or fake review screenshots.
- **Rewrite pattern:** Remove fabricated counters. If user volume is genuinely impressive and verifiable, cite the number with a source and date: *"3.2M registered users (Q1 2026, audited by [auditor])"*.

#### Rule 10 — No hidden / pre-checked promotional opt-ins shown in creative
- **Citation:** UCPD Annex I §22; ePrivacy Directive 2002/58/EC Art 5(3) (consent must be informed and unambiguous); EDPB Guidelines 03/2022 on Deceptive Design Patterns (Mar 2023)
- **Severity:** FAIL (when the creative depicts a signup form with pre-ticked marketing/permission boxes)
- **Check:** App store screenshots and landing-page screenshots that show a signup or onboarding screen — inspect any checkboxes for marketing consent, data-sharing, or "subscribe to product updates". If any are pre-ticked in the depicted UI, FAIL. Also FAIL on "Accept all" buttons that are visually emphasised relative to "Reject all".
- **Rewrite pattern:** Update the depicted UI screenshot to show unchecked opt-ins and equally-weighted Accept/Reject buttons. If the live product still has the dark pattern, fix the product before the screenshot.

### CATEGORY D — Fake or implied endorsements (rules 11–13)

#### Rule 11 — No unauthorised celebrity / public-figure imagery
- **Citation:** ASA CAP Code 6.1 (testimonials and endorsements — written permission required); FTC Endorsement Guides §255.1(b); EU Member State personality-rights law (e.g. Germany KUG §22, France CC Art 9); MiCA Art 88(1) (misleading)
- **Severity:** FAIL
- **Check:** Does the creative show a recognisable celebrity, politician, athlete, business figure, or public figure? Particular triggers: Elon Musk, CZ, Vitalik Buterin, popular finance YouTubers, national heads of state, footballers. If shown without an active, documented endorsement deal, FAIL. Includes AI-generated likenesses and deepfakes — the AI origin is not a defence.
- **Rewrite pattern:** Remove the celebrity image. If endorsement is genuine, replace with an asset where the person consented (e.g. a stage photo from an event you co-hosted, with written permission to use the image in marketing). Add the paid-partnership marker (Rule 5).

#### Rule 12 — No fake "As seen on" / fabricated press logos
- **Citation:** ASA CAP Code 3.7 (substantiation); FTC Act §5 (deceptive practices); UCPD Annex I §4 (false claim of endorsement)
- **Severity:** FAIL
- **Check:** Logos of news outlets (Bloomberg, Forbes, CNBC, Reuters, FT, WSJ) shown under "As seen on / featured in" framing. Verify: was the coverage editorial (counts) or a paid placement / contributor-network post / press release wire (does NOT count)? Forbes Contributors and similar self-publish channels do not entitle "As seen on Forbes". If unverifiable in audit, FLAG with note; if clearly fabricated, FAIL.
- **Rewrite pattern:** Remove logos that don't represent editorial coverage. If editorial coverage exists, link the actual article. Use "Coverage:" with hyperlinks rather than logo wall.

#### Rule 13 — No fabricated user testimonials
- **Citation:** FTC Endorsement Guides §255.2 (testimonials must reflect honest opinions of actual users); UCPD Annex I §22; CMA Fake Reviews guidance 2024; ASA CAP Code 3.45
- **Severity:** FAIL
- **Check:** Testimonial quotes attributed to named "users" — check for tells: stock photo headshots, generic names without a verifiable handle, suspiciously polished sentence structure, identical phrasing across multiple "users". If the testimonial cannot be tied to a real, consenting user, FAIL.
- **Rewrite pattern:** Either remove the testimonials, or replace with verifiable quotes — link to the original review (Trustpilot, App Store), use the reviewer's actual platform handle, get written consent for marketing use.

### CATEGORY E — Fake UI / misleading screenshots (rules 14–16)

#### Rule 14 — No fake trading-UI / fake portfolio gain mockups
- **Citation:** MiCA Art 88(1) (misleading); FCA COBS 4.12A.7R (no presentation of hypothetical performance as actual); SEC Marketing Rule Rule 206(4)-1 (hypothetical performance restrictions, analogous); FTC Act §5
- **Severity:** FAIL
- **Check:** Screenshots of a trading interface showing a portfolio balance, P&L, or chart that are mocked-up rather than real. Tells: round-number balances, suspiciously smooth equity curves, unrealistic % gains over short periods, UI elements that don't match the live product, watermark "demo" stripped. Even when labelled as illustrative, depiction of specific dollar gains in a creative implies achievability and fails.
- **Rewrite pattern:** Remove the fake UI. If showing the product, use a real screenshot from a paper-trading or sandbox environment with a clear *"Illustrative — not a guarantee of returns"* watermark in legible size, and use realistic numbers including drawdowns.

#### Rule 15 — Charts must not be cropped to mislead scale
- **Citation:** MiCA Art 88(1) + ESMA marketing-communications guidance §31 (balanced presentation); FCA COBS 4.12A.7R; CFA Institute GIPS-aligned best practice
- **Severity:** FAIL (when cropping inverts the story); FLAG (when cropping is misleading but not inverting)
- **Check:** Performance charts shown in the creative. Look for: y-axis not starting at zero where appropriate, time-window cherry-picked to start at a local low, y-axis broken, log scale used to compress drawdowns, the most recent drawdown cropped out of the visible frame.
- **Rewrite pattern:** Show full time-range with y-axis from zero (or with break clearly marked). Include the most recent drawdown if any. Add date range and source on the chart itself: *"BTC/USD, Jan 2018 – May 2026, source: CoinGecko"*.

#### Rule 16 — Animated number tickers and "up only" performance visuals
- **Citation:** MiCA Art 88(1); FCA COBS 4.12A.7R; operator-grade interpretation — animated number rolls imply continuous growth
- **Severity:** FLAG (FAIL if combined with yield claim)
- **Check:** Video / motion creatives where a counter rolls upward (account balance, # of users, total volume) without showing any decrement. Implies one-way growth. Also FLAG arrow-only-up graphics, hockey-stick illustrations used as primary hero, "to the moon" rocket visuals next to a token name.
- **Rewrite pattern:** If using a counter, anchor it to a specific real metric with a label and date: *"Total volume traded since 2021: $X.Yb (as of May 2026)"* — static, not animated. Replace "up only" graphics with neutral product imagery.

### CATEGORY F — Platform ad policy compliance (rules 17–22)

#### Rule 17 — Google Ads cryptocurrency certification required
- **Citation:** Google Ads Cryptocurrencies and related products policy (latest update Apr 2024 — certification regime); applies to Google Search, Display, YouTube placements
- **Severity:** FAIL (when the advertiser is not Google-certified for the destination country)
- **Check:** Creative intended for Google Ads (Search / Display / YouTube). Verify the advertiser is certified for the destination country (the certification is country-specific — US-state-by-state, EU per Member State for CASPs, UK for FCA-registered, etc.). Without certification, the ad will be disapproved. Also check: no promotion of ICOs, "DeFi trading protocols", token-presales, or yield-aggregator promotions — these remain prohibited even with certification.
- **Rewrite pattern:** Apply for Google's crypto certification in each target country before launching. Remove ICO / presale / DeFi-yield specifics from the creative. For exchange/wallet marketing, ensure the advertised products fall within the certified categories.

#### Rule 18 — Meta (Facebook/Instagram) prohibited-category check
- **Citation:** Meta Advertising Standards — Cryptocurrency Products and Services policy (requires written permission / Meta-approved authorisation; bans certain categories outright)
- **Severity:** FAIL (when promoting prohibited categories or without written permission for permitted ones)
- **Check:** Creative for Meta placement (Facebook, Instagram, Messenger, Audience Network). Verify Meta's written permission exists. Prohibited regardless of permission: ICOs, token presales, mining hardware, binary options. Restricted (require additional disclosure): trading-signal services, yield products. Cross-check creative against the prohibited-category list.
- **Rewrite pattern:** Pull the creative if it touches a prohibited category. For permitted categories, ensure the Meta advertiser-permission application is approved and the advertiser-name matches the entity on file. Reroute prohibited-category creative to compliant channels (owned media, email to consented base).

#### Rule 19 — X (Twitter) crypto ad policy compliance
- **Citation:** X Financial services advertising policy + Cryptocurrency Ads policy (2024 update — pre-approval required, geo-restrictions, content restrictions on DeFi / yield)
- **Severity:** FAIL (without pre-approval or for restricted content categories)
- **Check:** Creative for X promoted-post / X Ads. Verify pre-approval status. Restricted content includes: DeFi protocols promising yield, on-chain perpetual-futures DEXs, leverage-trading promotions targeted at retail, anonymous-token swaps. Check creative for any of these markers. Also verify geo-targeting is set — X requires geo-restriction for crypto ads in many jurisdictions.
- **Rewrite pattern:** Complete X's pre-approval flow before launching. Remove leverage / yield specifics if not pre-cleared. Geo-target away from restricted markets.

#### Rule 20 — TikTok crypto prohibition checklist
- **Citation:** TikTok Advertising Policies — Industry Entry §7 (Cryptocurrency / Financial Services — broadly prohibited for paid ads in most markets, including all EU Member States, UK, US for crypto trading/investment products)
- **Severity:** FAIL (if creative is intended for TikTok paid placement and promotes regulated crypto products)
- **Check:** Creative intended for TikTok paid ads. TikTok's policy prohibits paid promotion of cryptocurrency exchanges, crypto trading platforms, ICOs, token sales, mining services, and most crypto investment products across most markets. A small set of educational / brand-awareness ads for licensed entities are permitted in narrow markets with pre-approval. If the creative pitches a trading/investment/yield product for TikTok paid ads, FAIL.
- **Rewrite pattern:** Do not paid-promote on TikTok for any product TikTok bans. Repurpose for organic TikTok (subject to community guidelines + creator disclosure), or for paid placement on platforms that allow it. Educational-only branded content with no product solicitation may be permitted — verify with TikTok before spending.

#### Rule 21 — LinkedIn financial-services + crypto policy
- **Citation:** LinkedIn Advertising Policies — Financial Services and Cryptocurrency (requires licensed entity, targeting restrictions, prohibition on speculative trading and ICOs)
- **Severity:** FAIL (for ICO / presale / unlicensed entity); FLAG (for permitted-but-restricted category)
- **Check:** Creative for LinkedIn Ads. LinkedIn permits crypto ads only from licensed entities, prohibits ICOs and token sales, and prohibits speculative-trading promotion to retail. B2B crypto-infrastructure ads (custody for institutions, exchange APIs, compliance tooling) generally permitted. Confirm the entity is licensed in the targeted market.
- **Rewrite pattern:** For retail-trading creative, do not run on LinkedIn — channel mismatch and policy violation. For B2B infra creative, ensure the licensed-entity name and reg-number is present in-frame.

#### Rule 22 — Reddit financial-services ad policy
- **Citation:** Reddit Advertising Policies — Financial Services section (requires advertiser identification, no get-rich-quick framing, crypto requires regulatory compliance in target geo)
- **Severity:** FAIL (for prohibited framings); FLAG (for missing advertiser identification in-creative)
- **Check:** Creative for Reddit ads. Reddit requires clear advertiser identification, prohibits get-rich-quick / guaranteed-return framing, prohibits unregulated investment promotion. Check creative for these markers. Reddit specifically scrutinises crypto creatives for risk-warning prominence.
- **Rewrite pattern:** Add clear advertiser name and licensed-entity reference in-creative. Strip any get-rich-quick framing. Ensure risk warning is present (Rule 1) — Reddit's reviewers commonly reject crypto creatives that pass other platforms.

### CATEGORY G — App store listing compliance (rules 23–25)

#### Rule 23 — Apple App Store §3.1.5 crypto compliance
- **Citation:** Apple App Store Review Guidelines §3.1.5(b) (Cryptocurrencies — exchange apps must be offered by the exchange itself or a licensed financial institution; mining apps prohibited on-device; ICO/token-offering apps must come from established banks)
- **Severity:** FAIL (when the depicted app falls outside §3.1.5 permissions)
- **Check:** App store screenshot creatives — verify the app category matches §3.1.5 permissions. Specifically prohibited in screenshots: on-device mining, ICO/token-sale UI from non-bank issuers, yield-farming UI from unlicensed entities, gambling-adjacent crypto mechanics. Also check that the depicted entity is the exchange itself (not a third-party wrapper).
- **Rewrite pattern:** Remove screenshots depicting prohibited categories. For permitted categories, ensure the listing's developer name matches the licensed entity. If the app is currently rejected, fix the underlying app before the listing.

#### Rule 24 — Apple Privacy Nutrition Label consistency
- **Citation:** Apple App Store Review Guidelines §5.1.1 + Privacy Nutrition Label requirements (App Privacy section must accurately reflect data collection shown in app screenshots)
- **Severity:** FLAG (for inconsistency); FAIL (when screenshot depicts data collection the privacy label omits)
- **Check:** App store screenshot shows a signup or onboarding flow that requests data (email, phone, ID, location, payment, contacts). Cross-check against what the Privacy Nutrition Label declares the app collects. If the screenshot shows ID upload and the label says "no identifiers collected", FAIL.
- **Rewrite pattern:** Either update the Privacy Nutrition Label to reflect actual data collection, or remove the screenshot depicting the collection. The label and the screenshots must agree.

#### Rule 25 — Google Play Financial Services + crypto policy
- **Citation:** Google Play Developer Program Policies — Financial Services §"Cryptocurrencies" (requires licensing declaration, prohibits CFDs and binary options without authorisation, crypto exchange apps require authorisation in target country)
- **Severity:** FAIL (for prohibited categories or missing authorisation declaration)
- **Check:** Google Play store-listing creative (feature graphic, screenshots, short description). Verify: developer is declared as a regulated financial-services provider in the target market, no CFD/binary-options promotion, no on-device crypto-mining UI, no token-presale UI. Short description must not contain prohibited framings (guaranteed returns, etc.).
- **Rewrite pattern:** Complete Google Play's Financial Services declaration with target-country authorisation evidence. Remove prohibited UI from screenshots and prohibited copy from the short description.

### CATEGORY H — Visual misrepresentation of returns (rule 26)

#### Rule 26 — Performance visuals require past-performance disclaimer in-frame
- **Citation:** MiCA Art 88(1); FCA COBS 4.12A.7R + COBS 4.6.2R (past performance disclaimer); ESMA Guidelines on Marketing Communications §31; ASA CAP Code 3.7
- **Severity:** FAIL
- **Check:** Any visual depiction of returns — chart, % figure, $ figure showing growth, before/after balances — requires the disclaimer *"Past performance is not a reliable indicator of future results"* in the same frame, at legible size, in the viewer's language. Footnote-only or off-canvas placement fails. (This is the visual-side companion to MiCA Rule 5 / FCA COBS 4.6.2R.)
- **Rewrite pattern:** Add the disclaimer adjacent to the performance visual, at minimum 12px on mobile / 14px on desktop, contrast ≥ 4.5:1 (Rule 3). Localise to the viewer's language.

### CATEGORY I — Target audience signals (rules 27–28)

#### Rule 27 — No creative styling that targets minors or vulnerable populations
- **Citation:** ASA CAP Code 1.3 + 18.1 (financial products must not target under-18s); UCPD Art 5(3) (vulnerable consumer protection); MiCA Art 88(1); FCA Consumer Duty PRIN 2A
- **Severity:** FAIL
- **Check:** Look for visual cues that target minors: cartoon mascots, gaming-style aesthetics borrowed from games popular with under-18s, school/classroom imagery, youth-celebrity faces (under-25 influencers with majority-minor followings), bright primary-colour palette mimicking children's media. Also flag creative targeting financially-vulnerable populations: "earn from home" with imagery of older retirees, debt-relief framing.
- **Rewrite pattern:** Redesign with an adult, investor-facing visual register. Remove cartoon mascots and gaming aesthetics. For older-audience creative, remove vulnerability-targeting framings (debt relief, retirement-income guarantees).

#### Rule 28 — No gambling-mechanics visual register
- **Citation:** ASA CAP Code 16 (gambling-adjacent advertising); UK Gambling Commission guidance on crypto/gambling crossover; MiCA Art 88(1) (misleading nature of product)
- **Severity:** FAIL (when product is not gambling-licensed but creative uses gambling visual conventions)
- **Check:** Slot-machine reels, roulette wheels, spinning lottery balls, casino-chip imagery, dice as primary motif, "spin to win" mechanics, scratch-card UI, jackpot numerals. Crypto products that adopt these visuals misrepresent their nature unless licensed as gambling.
- **Rewrite pattern:** Replace gambling visuals with neutral financial-product imagery (charts, portfolio dashboards, wallet UI). If the product genuinely has a chance-based mechanic, get a gambling licence and apply gambling rules instead.

### CATEGORY J — Logo and regulatory-mark misuse (rule 29)

#### Rule 29 — No misuse of regulator logos, exchange logos, or fake licensing seals
- **Citation:** MiCA Art 88(2) (no implication of regulator endorsement); FCA Handbook GEN 4 + GEN 5 (use of FCA name/logo restricted); ESMA, BaFin, AMF, CySEC, MAS, SFC, ASIC — all restrict use of regulator logos in marketing; UCPD Annex I §4 (false trust marks)
- **Severity:** FAIL
- **Check:** Inspect the creative for: regulator logos (FCA, BaFin, MAS, SFC, FINRA, SEC, ESMA, EU flag implying regulatory blessing), "MiCA approved" / "FCA regulated" badges that aren't accurate, fake compliance/audit seals, third-party exchange or partner logos shown without active partnership, EU flag stylised as a certification mark. Regulators do not licence their logos to authorised firms; any regulator logo in a creative is a probable violation.
- **Rewrite pattern:** Remove all regulator logos. Replace with precise plain-text status: *"[Entity] is authorised as a CASP under MiCA in [Member State], reg. no. [X]"* or *"[Entity] is registered with the FCA, FRN [X]"* (FCA permits the firm-reference-number text but not the logo). Remove third-party logos without partnership; if partnership is real, add a *"In partnership with [name]"* line under the logo with the agreement on file.

### CATEGORY K — Video / motion-specific (rules 30–31)

#### Rule 30 — Video risk-warning runtime
- **Citation:** FCA COBS 4.12A.21R + FG23/3 (broadcast warnings must be on-screen long enough to be read); ASA BCAP Code 4.7 + 14 (financial broadcast advertising); ESMA marketing-communications guidance for audiovisual content
- **Severity:** FAIL (if risk warning is on-screen <3 seconds, or <average reading time for the warning length)
- **Check:** For video creatives (TikTok ads where permitted, YouTube, Instagram Reels, paid OLV, TV). The on-screen risk-warning text must be held for at least 3 seconds AND at minimum the time required to read it at normal speed (rule of thumb: 1 second per 12 characters). A 60-character risk warning needs ≥5 seconds on-screen. Caption-only disclosure does not count.
- **Rewrite pattern:** Extend on-screen risk-warning duration to the calculated minimum. Place at full-frame size, high contrast (Rule 3), in the final 5–10 seconds of the spot or as a sustained lower-third for the duration relevant to the claim.

#### Rule 31 — Audio disclosure for spoken yield/return claims
- **Citation:** ASA BCAP Code 14.10 (financial broadcast — material risk warnings must be in the same medium as the claim); FCA COBS 4.12A.21R; FTC Endorsement Guides §255.5
- **Severity:** FAIL (when video has spoken yield/return claim without spoken or sustained-text risk warning)
- **Check:** If the audio track contains a yield claim (*"earn 12% APY", "doubled my money"*) or a return claim, the risk warning must also be delivered in audio (voice-over) OR as full-frame on-screen text held for the entire duration the claim is on-screen. Muted-autoplay video: assume the user has sound off; require strong on-screen warning regardless.
- **Rewrite pattern:** Add a voice-over risk warning at the end of the spot (*"Crypto-assets are highly volatile. Your capital is at risk. Past performance does not guarantee future results."*) OR a full-frame text card held ≥5 seconds. For muted-autoplay, lock in on-screen text from frame one.

### CATEGORY L — Influencer creative-specific (rule 32)

#### Rule 32 — KOL-produced creative meets cross-jurisdiction influencer rules
- **Citation:** FCA Finalised Guidance FG24/1 (financial promotions on social media) + COBS 4.12A; ASA CAP Code Section 2 + influencer guidance with CMA (Sep 2023); ESMA guidance on social-media marketing; MAS Guidelines on Provision of DPT Services §3.4; VARA Marketing Regulations Art. 9 (Marketing by Third Parties); FTC Endorsement Guides §255.5
- **Severity:** FAIL (when KOL creative misses platform-native paid tag, in-creative #ad, risk warning, or makes prohibited claim); FLAG (for partial compliance)
- **Check:** When the creative is KOL-produced (personality-led, posted on the KOL's handle), verify all of: (a) platform-native paid-partnership tag enabled (Rule 6); (b) visible *"#ad / Paid partnership"* in the creative itself, not only the caption (Rule 5); (c) risk warning in-creative at legible size (Rule 1) and prominence (Rules 2–4); (d) no prohibited claims — guaranteed returns, "this token will moon", price predictions; (e) KOL personally holds no undisclosed position (verify against KOL-disclosure rider in the contract). For FCA-targeted markets, the KOL must reasonably understand the product — FG24/1 expects evidence of briefing.
- **Rewrite pattern:** Have the KOL re-shoot with overlay disclosure burned into the video / image. Enable platform-native paid tag. Add the risk warning as a sustained on-screen card. Remove any price-prediction or guaranteed-return language. File the briefing-deck evidence and KOL-disclosure rider with the audit-history row.

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
=== AD CREATIVE COMPLIANCE AUDIT — {asset_id} ===
Creative format: {static banner | carousel | video | story | app store screenshot | OOH | email render}
Target platform(s): {Google | Meta | X | TikTok | LinkedIn | Reddit | App Store | Google Play | OOH | email | owned}
Jurisdictions: {target list, or "EU general" if unspecified}
Submitted: {timestamp UTC}

CREATIVE DESCRIPTION:
{2-3 sentences: format, dominant visual elements, headline copy, CTA, where the risk warning lives, where the brand mark lives}

VERDICT: {N FAIL · M FLAG · K PASS} — {ALL CLEAR | ATTENTION | DO NOT SHIP}

[For each rule that FAILED:]
  ❌ Rule {id} — {title}
    Citation: {citation}
    Visual element: "{description with position, approximate size, colour/contrast}"
    Issue: {one-sentence summary}
    Suggested rewrite: {concrete creative direction}

[For each rule that FLAGGED:]
  ⚠️ Rule {id} — {title}
    Citation: {citation}
    Visual element: "{description with position, approximate size, colour/contrast}"
    Issue: {one-sentence summary}
    Suggested action: {concrete fix}

[Summary of PASSED rules — list them by id without elaboration]
  ✓ Rules {X, Y, Z, ...} — passed.

OPERATOR'S READ:
{1-3 sentences from Jukka's perspective. Will this ad survive platform review? What single change has the highest impact? Is the regulator-side risk or platform-policy risk the bigger problem?}

AUDIT-HISTORY ROW (JSON):
{
  "asset_id": "...",
  "submitted_at": "...",
  "creative_format": "...",
  "target_platforms": ["..."],
  "asset_excerpt": "(creative description, first 200 chars)",
  "verdict": "ALL CLEAR | ATTENTION | DO NOT SHIP",
  "fail_count": N,
  "flag_count": M,
  "pass_count": K,
  "rules": [{"id": ..., "title": ..., "citation": ..., "status": "pass|flag|fail",
             "message": ..., "evidence": ..., "suggestion": ...}, ...],
  "reviewer": "AI + Jukka stamp",
  "review_url": "https://northpoint.fi/check/ad-creative/audit/{asset_id}"
}
```

---

## When to escalate to Jukka

The AI applies all 32 rules and produces the analysis. Jukka reviews and stamps before delivery to the customer. The cases where the AI should explicitly flag for Jukka's attention:

1. **The creative is intended for TikTok / Meta paid placement and touches a restricted category.** Platform rejection risk is high; Jukka confirms the channel decision.
2. **The creative depicts a celebrity face or a recognisable public figure.** Even with claimed permission, Jukka verifies the contract is on file.
3. **The creative triggers ≥3 FAILs.** Severity threshold for human review.
4. **The creative is for a token launch / TGE / airdrop / IDO landing.** High-stakes; every one gets stamped.
5. **The creative is a KOL-produced video.** Rule 32 + platform tags + briefing-deck evidence needs human verification.
6. **The creative is an app store listing (Apple or Google Play) for a regulated-financial-services app.** App store rejection cycles are slow and expensive; Jukka eyeballs before submission.
7. **The customer is in their first three weeks of using this pack.** Onboarding period — every audit gets human review for calibration.

For all other cases, the AI's output goes to the customer's Notion workspace + email digest within the SLA.

---

## Operational reminders

- **The audit is heuristic, not legal advice.** Every output must include the standard disclaimer at the top.
- **Audit-history rows are evidence.** Every audit, regardless of outcome, is logged in the customer's Notion Audit History database. The audit trail itself is one of the highest-value outputs — when a regulator or platform-policy team opens an inquiry, the customer can show "every creative was reviewed against these 32 rules at this date with this verdict."
- **Pair with the text-side audit.** This skill handles the visual layer. For the landing page or whitepaper text that the creative links through to, run `mica-marketing-self-audit-pro` (or the FCA / MAS / VARA / SEC equivalent) in addition. Cross-link both audit-history rows.
- **Update this skill when platform policies change.** Google, Meta, X, TikTok update their crypto policies multiple times per year. Quarterly review of this skill against current platform-policy text.

---

*Authored by Jukka Blomberg, ex-CMO at two international crypto exchanges. NorthPoint Marketing Solutions Oy, Helsinki, Finland.*
