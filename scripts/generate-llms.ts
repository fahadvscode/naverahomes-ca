import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { DISPLAY_DATE, llmsFullTxt, llmsTxt } from "../lib/content";

if (DISPLAY_DATE !== "October 5, 2026") {
  throw new Error(`Expected display date October 5, 2026, received ${DISPLAY_DATE}`);
}

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
writeFileSync(join(root, "public/llms.txt"), llmsTxt());
writeFileSync(join(root, "public/llms-full.txt"), llmsFullTxt());
