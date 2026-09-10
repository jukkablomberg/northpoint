#!/usr/bin/env node
/**
 * scripts/gen-citation.mjs — [NP-SKILLS-CITATION-BLOCK · 2026-09-10]
 *
 * WHY.
 * These packs are published so other people can run them, fork them and cite
 * them. Two things were missing for that:
 *
 *   1. No CITATION.cff. GitHub renders a "Cite this repository" button from
 *      that one file, and every reference manager reads it. Without it, a
 *      citation of this work is whatever the citer improvises.
 *   2. The README's per-pack rule counts are HAND-TYPED. They happen to be
 *      right today. Nothing checked them, and the last time a hand-kept copy
 *      of these packs went unchecked it drifted in all nine files and four of
 *      them ended up asserting things that were untrue
 *      ([NP-SKILLS-CANON-PUBLIC], 2026-09-09).
 *
 * So the counts are read out of the packs themselves, CITATION.cff is
 * GENERATED from that reading, and `--check` refuses when the README, the
 * generated file or the packs disagree.
 *
 * WHERE A COUNT COMES FROM, in order — the pack has to state it itself:
 *   a) the H1:            "# MiCA Marketing Self-Audit Pro — 40 Rules"
 *   b) the description:   "40-rule operator-grade pre-flight checklist..."
 *   c) nothing -> null. `crypto-cmo-ai-stack` is a stack write-up, not a rule
 *      pack, and inventing a number for it would be exactly the hand-typing
 *      this file exists to stop. Its README cell is left unchecked, and this
 *      script says so out loud rather than quietly skipping it.
 *
 * USAGE
 *   node scripts/gen-citation.mjs            write CITATION.cff
 *   node scripts/gen-citation.mjs --check    exit 1 if anything disagrees
 *   node scripts/gen-citation.mjs --json     print what it read
 *
 * `--check` is what protects this; run it after editing any SKILL.md.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SKILLS = path.join(REPO, 'skills');
const CFF = path.join(REPO, 'CITATION.cff');
const README = path.join(REPO, 'README.md');

const REPO_URL = 'https://github.com/jukkablomberg/northpoint';
const SITE = 'https://northpoint.fi';
/* The legal entity that publishes these, as it is written on the money
   surfaces (XRaydium /terms § 2, Jukka's exact wording, 2026-09-07). */
const ENTITY = 'NorthPoint Marketing Solutions Oy';

const H1_RULES = /^#[ \t]+(.+?)[ \t]*[—–-][ \t]*(\d+)[ \t]+Rules[ \t]*$/m;
const H1_ANY = /^#[ \t]+(.+?)[ \t]*$/m;
const DESC_RULES = /\b(\d+)-rule\b/i;

function frontmatter(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const out = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([a-z-]+):\s*(.*)$/i);
    if (kv) out[kv[1]] = kv[2].trim();
  }
  return out;
}

export function readPacks() {
  return fs
    .readdirSync(SKILLS, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort()
    .map((slug) => {
      const file = path.join(SKILLS, slug, 'SKILL.md');
      const md = fs.readFileSync(file, 'utf8');
      const fm = frontmatter(md);
      const h1r = md.match(H1_RULES);
      const desc = fm.description || '';
      const fromDesc = desc.match(DESC_RULES);
      const rules = h1r ? Number(h1r[2]) : fromDesc ? Number(fromDesc[1]) : null;
      return {
        slug,
        title: (h1r ? h1r[1] : (md.match(H1_ANY) || [, slug])[1]).trim(),
        rules,
        rulesFrom: h1r ? 'h1' : fromDesc ? 'description' : null,
        license: fm.license || null,
      };
    });
}

/** The tree's version is the date the packs last changed — not a typed string. */
export function treeVersion() {
  try {
    return execFileSync('git', ['log', '-1', '--format=%cs', '--', 'skills'], {
      cwd: REPO,
      encoding: 'utf8',
    }).trim();
  } catch {
    return null;
  }
}

export function renderCff(packs, version) {
  const counted = packs.filter((p) => p.rules !== null);
  const total = counted.reduce((a, p) => a + p.rules, 0);
  const lines = [
    'cff-version: 1.2.0',
    'message: "If you use these rule packs, please cite them as below."',
    'title: "NorthPoint compliance skill packs"',
    'abstract: >-',
    `  ${packs.length} operator-grade marketing-compliance rule packs published as plain`,
    `  Markdown SKILL.md files, ${total} rules across ${counted.length} counted packs.`,
    '  Information, not legal advice.',
    'type: dataset',
    'authors:',
    `  - name: "${ENTITY}"`,
    '    website: "' + SITE + '"',
    '  - family-names: Blomberg',
    '    given-names: Jukka',
    'license: MIT',
    `version: "${version || 'unversioned'}"`,
    `date-released: "${version || ''}"`,
    `url: "${SITE}/skills"`,
    `repository-code: "${REPO_URL}"`,
    'keywords:',
    '  - crypto marketing',
    '  - regulatory compliance',
    '  - MiCA',
    '  - GDPR',
    '  - financial promotions',
    '  - agent skills',
    'references:',
  ];
  for (const p of packs) {
    lines.push(
      `  - type: data`,
      `    title: "${p.title}"`,
      `    abbreviation: "${p.slug}"`,
      `    notes: "${p.rules === null ? 'rule count not stated by the pack' : `${p.rules} rules (from its ${p.rulesFrom})`}"`,
      `    url: "${REPO_URL}/blob/main/skills/${p.slug}/SKILL.md"`,
      `    license: ${p.license || 'MIT'}`
    );
  }
  return lines.join('\n') + '\n';
}

/** The README's own table, parsed back out: slug -> stated rule count. */
export function readmeCounts() {
  const md = fs.readFileSync(README, 'utf8');
  const out = new Map();
  for (const m of md.matchAll(/\|\s*\[`([a-z0-9-]+)`\][^|]*\|\s*([^|]*?)\s*\|/g)) {
    const n = m[2].match(/(\d+)\s+rules?/i);
    out.set(m[1], n ? Number(n[1]) : null);
  }
  return out;
}

function check() {
  const packs = readPacks();
  const version = treeVersion();
  const problems = [];

  if (packs.length === 0) problems.push('skills/ holds no packs at all');
  for (const p of packs) {
    if (p.license !== 'MIT') problems.push(`${p.slug}: license is ${p.license}, not MIT`);
  }

  const stated = readmeCounts();
  for (const p of packs) {
    if (!stated.has(p.slug)) {
      problems.push(`${p.slug}: shipped in skills/ but missing from the README table`);
      continue;
    }
    if (p.rules === null) continue; // uncounted by design — reported below, not enforced
    if (stated.get(p.slug) !== p.rules) {
      problems.push(
        `${p.slug}: README says ${stated.get(p.slug)} rules, the pack itself says ${p.rules} (${p.rulesFrom})`
      );
    }
  }
  for (const slug of stated.keys()) {
    if (!packs.find((p) => p.slug === slug)) problems.push(`${slug}: in the README table but not in skills/`);
  }

  const want = renderCff(packs, version);
  const have = fs.existsSync(CFF) ? fs.readFileSync(CFF, 'utf8') : null;
  if (have === null) problems.push('CITATION.cff is missing — run `node scripts/gen-citation.mjs`');
  else if (have !== want) problems.push('CITATION.cff is stale — re-run `node scripts/gen-citation.mjs`');

  const uncounted = packs.filter((p) => p.rules === null).map((p) => p.slug);
  if (uncounted.length) {
    console.log(`note: ${uncounted.join(', ')} state no rule count of their own; their README cell is not checked.`);
  }

  if (problems.length) {
    console.error('gen-citation --check FAILED:');
    for (const p of problems) console.error('  - ' + p);
    return 1;
  }
  console.log(`gen-citation --check ok — ${packs.length} packs, version ${version}, README and CITATION.cff agree.`);
  return 0;
}

if (process.argv[1] && process.argv[1].endsWith('gen-citation.mjs')) {
  const packs = readPacks();
  if (process.argv.includes('--json')) {
    console.log(JSON.stringify({ version: treeVersion(), packs }, null, 2));
  } else if (process.argv.includes('--check')) {
    process.exit(check());
  } else {
    fs.writeFileSync(CFF, renderCff(packs, treeVersion()));
    console.log(`wrote CITATION.cff — ${packs.length} packs, version ${treeVersion()}`);
  }
}
