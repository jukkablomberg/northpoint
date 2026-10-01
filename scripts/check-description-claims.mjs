#!/usr/bin/env node
/**
 * check-description-claims.mjs — [NP-SKILL-MICA-CLAIM-VERSION] 2026-10-01.
 *
 * THE NAMED FAILURE: a pack's frontmatter `description:` — the one line every skills directory, installer
 * and model reads first — makes a compliance claim ("MiCA-compliant", "certified"). The packs check
 * marketing against published rules; they never make anything compliant, and NorthPoint never says so.
 *
 * GATE: no `description:` matches CLAIM_RE. REPORT (never a gate): body lines that use the same words —
 * the rule texts legitimately say "non-compliant" / "compliant with Art. …" as findings vocabulary, and
 * this script does not ask anyone to rewrite rule text.
 *
 *   node scripts/check-description-claims.mjs              # exit 0 clean · 1 a description claims
 *   node scripts/check-description-claims.mjs --red-proof  # plants "MiCA-compliant" into one description in memory: must go RED naming that pack
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SKILLS = path.join(ROOT, 'skills');
export const CLAIM_RE = /\b(?:mica|fca|gdpr|sec|vara|mas)[- ]compliant\b|\bcompliant\b|\bcertif/i;

export function description(md) {
  const fm = md.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) return null;
  const d = fm[1].match(/^description:[ \t]*(.*)$/m);
  return d ? d[1].trim() : null;
}

export function audit(packs) {
  const fail = [], report = [];
  for (const [name, md] of packs) {
    const d = description(md);
    if (d === null) { fail.push(`${name}: no description in frontmatter`); continue; }
    const m = d.match(CLAIM_RE);
    if (m) fail.push(`${name}: description makes a compliance claim ("${m[0]}")`);
    const body = md.replace(/^---\n[\s\S]*?\n---/, '');
    const hits = (body.match(new RegExp(CLAIM_RE.source, 'gi')) || []).length;
    if (hits) report.push(`${name}: ${hits} body use(s) — findings vocabulary, reported not gated`);
  }
  return { fail, report };
}

const packs = fs.readdirSync(SKILLS, { withFileTypes: true }).filter((d) => d.isDirectory())
  .map((d) => [d.name, fs.readFileSync(path.join(SKILLS, d.name, 'SKILL.md'), 'utf8')]);

if (process.argv.includes('--red-proof')) {
  const target = packs.find(([n]) => n === 'mica-marketing-self-audit') || packs[0];
  const planted = packs.map(([n, md]) => [n, n === target[0] ? md.replace(/^description:[ \t]*/m, 'description: MiCA-compliant ') : md]);
  const clean = audit(packs).fail, red = audit(planted).fail;
  const ok = clean.length === 0 && red.length === 1 && red[0].startsWith(`${target[0]}: description makes a compliance claim ("MiCA-compliant")`);
  console.log(ok ? `red-proof ok — clean GREEN (${packs.length} packs), plant RED: ${red[0]}` : `red-proof FAILED — clean ${JSON.stringify(clean)} · plant ${JSON.stringify(red)}`);
  process.exit(ok ? 0 : 1);
}
const { fail, report } = audit(packs);
for (const r of report) console.log(`report: ${r}`);
if (fail.length) { for (const f of fail) console.error(`FAIL ${f}`); process.exit(1); }
console.log(`check-description-claims ok — ${packs.length} pack descriptions, 0 compliance claims.`);
