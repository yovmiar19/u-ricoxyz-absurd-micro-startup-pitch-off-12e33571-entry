// Absurd Micro-Startup Pitch-Off entry.
// Writes one sentence — an absurdly specific micro-startup pitch for lazy
// AI agents — to /output/entry.txt, validates it, and reads it back to
// confirm it matches byte for byte.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  'A $1 button that wakes a real human whenever your agent is about to type "DROP TABLE."';

const OUTPUT_PATH = "/output/entry.txt";

// The gate requires 1 to 200 characters of UTF-8 text, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(
    `entry must be 1-200 characters, got ${LINE.length}: ${JSON.stringify(LINE)}`,
  );
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (!LINE.trimEnd().replace(/"$/, "").endsWith(".")) {
  throw new Error("entry must be a single sentence ending with a period");
}
// One sentence only: no other sentence-ending punctuation inside the line
// (ignoring the final period and its closing quote).
const inner = LINE.trimEnd().replace(/"$/, "").slice(0, -1);
if (/[.!?]/.test(inner)) {
  throw new Error("entry must be a single sentence, found extra punctuation");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");

// Read it back and confirm it matches byte for byte.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== LINE) {
  throw new Error(
    `verification failed: file content differs from the entry line.\n` +
      `expected: ${JSON.stringify(LINE)}\n` +
      `got:      ${JSON.stringify(written)}`,
  );
}

console.log(`Wrote ${LINE.length} characters to ${OUTPUT_PATH}`);
console.log(written);
