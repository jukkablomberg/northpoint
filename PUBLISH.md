# How to publish this as `jukkablomberg/northpoint`

This folder is a ready-to-push scaffold for the `jukkablomberg/northpoint` Claude skills marketplace.

## Publish steps

1. Create a new public repository on GitHub at `github.com/jukkablomberg/northpoint`.
   - Description: `Exchange-grade crypto marketing playbooks from NorthPoint. Install with npx skills add jukkablomberg/northpoint.`
   - Visibility: **Public**.
   - No README, no .gitignore, no license — we have our own.

2. From the `northpoint-repo/` directory (this folder), run:

   ```bash
   git init
   git add .
   git commit -m "Initial release: crypto-cmo-ai-stack + mica-marketing-self-audit"
   git branch -M main
   git remote add origin git@github.com:jukkablomberg/northpoint.git
   git push -u origin main
   ```

3. Verify the install works:

   ```bash
   npx skills add jukkablomberg/northpoint --list
   ```

   Should output both skills: `crypto-cmo-ai-stack` and `mica-marketing-self-audit`.

4. Add GitHub topics to the repo for discoverability:
   - `claude-skills`
   - `claude-code`
   - `crypto`
   - `marketing`
   - `mica`
   - `ai-agents`

5. (Optional) Archive or redirect the old standalone repos:
   - `github.com/jukkablomberg/crypto-cmo-ai-stack` → add a deprecation notice in the README pointing to the new marketplace.
   - `github.com/jukkablomberg/mica-marketing-self-audit` → same treatment.

   Keep the old repos live (do not delete) — they have their own indexed SEO footprint. Just point them at the new marketplace.

## After publishing

Once the repo is live, the install commands referenced in the NorthPoint website copy (Homepage Section 6, Resources page) will work as written. Nothing further required for launch.

## Structure reference

```
northpoint-repo/
├── README.md                          ← marketplace landing
├── LICENSE                            ← MIT
├── PUBLISH.md                         ← this file (remove before pushing, or keep — your call)
├── .claude-plugin/
│   └── marketplace.json               ← Claude Code plugin marketplace manifest
└── skills/
    ├── crypto-cmo-ai-stack/
    │   └── SKILL.md                   ← YAML frontmatter + the stack + judgment rules
    └── mica-marketing-self-audit/
        ├── SKILL.md                   ← YAML frontmatter + activation rules
        └── references/
            └── mica-marketing-self-audit.md   ← the full 40 rules (copied from existing repo)
```

This structure matches both:
- The `vercel-labs/skills` CLI spec (used by `npx skills add`): any directory under `/skills/` with a valid `SKILL.md` is discovered as an installable skill.
- The Claude Code plugin marketplace spec (used by `/plugin marketplace add` and `/plugin install`): the `.claude-plugin/marketplace.json` manifest lists the two plugins.

Both installation paths work from the same repo.
