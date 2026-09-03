# How to add a pack

This repository is live at `github.com/jukkablomberg/northpoint` and installable with
`npx skills add jukkablomberg/northpoint`. It does not need creating. This file is the
procedure for adding a twelfth skill, or updating one of the eleven already here.

## Add a skill

1. **Create the directory.** `skills/<skill-name>/SKILL.md`. The directory name is the
   skill name and must match the `name:` in the frontmatter. Lower-case, hyphenated.

2. **Write the frontmatter.** Every skill in this repo carries the same shape:

   ```yaml
   ---
   name: <skill-name>
   description: <one paragraph. This is what the model reads to decide whether to
     activate the skill, so it must name the trigger conditions, not just the topic.>
   license: MIT
   metadata:
     source: https://northpoint.fi
     author: Jukka Blomberg
     version: 1.0.0
     authored: YYYY-MM-DD
     published: YYYY-MM-DD
     jurisdiction: <optional>
   ---
   ```

3. **Long reference material goes in `references/`.** If the rule set is long enough to
   bloat the skill body, split it: `skills/<name>/references/<name>.md`, linked from
   `SKILL.md` with a relative link. `mica-marketing-self-audit` is the worked example.

4. **Register the plugin.** Add an entry to `.claude-plugin/marketplace.json` — `name`,
   `displayName`, `description`, `source: ./skills/<skill-name>`. `npx skills add` reads
   the directory tree and does not need this file; `/plugin install` does. A skill missing
   from the manifest installs one way and not the other, and nothing warns you.

5. **Add it to the README.** The install block lists every skill by name, and the table
   lists every skill by row. Both are hand-maintained. A skill absent from them is a skill
   nobody finds.

## Rules that apply to every pack in here

- **Nothing in a pack sells anything.** No prices, no checkout links, no gate language,
  no "this is the paid version". The packs are free and complete. Routing to
  northpoint.fi belongs in this README, not in a rule body.
- **Keep the not-advice line.** Every compliance pack states in its own words that it is
  an operator-grade heuristic and not legal advice. It is not boilerplate and it does not
  get trimmed for length.
- **Cite instruments by number and date.** A rule that names a regulation must name it
  precisely enough to check. Inventing rule text, or dressing a paraphrase as a quotation,
  is the failure mode these packs exist to prevent.

## Verify before pushing

```bash
npx skills add jukkablomberg/northpoint --list
```

Should list every directory under `skills/`. If a skill is missing, its `SKILL.md` is
absent or its frontmatter does not parse.

## Structure

```
northpoint/
├── README.md                  ← marketplace landing + install lines + attribution
├── LICENSE                    ← MIT
├── PUBLISH.md                 ← this file
├── .claude-plugin/
│   └── marketplace.json       ← Claude Code plugin manifest, one entry per skill
└── skills/
    └── <skill-name>/
        ├── SKILL.md           ← frontmatter + the skill
        └── references/        ← optional long-form rule text
```

Both installation paths read the same tree: the `vercel-labs/skills` CLI spec discovers
any directory under `skills/` holding a valid `SKILL.md`, and the Claude Code plugin
marketplace spec reads `.claude-plugin/marketplace.json`.
