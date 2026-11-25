import { mkdirSync, writeFileSync } from "node:fs";

// Snooze Button Roast — one line roasting an alarm that rings at 6 AM on a Saturday.
// The line below is the tournament winner (7-0 head-to-head out of 28 drafts).
// Formula from resolved finals: short, understated, one concrete specific
// detail ("retired it in March"), twist in the last words.
const LINE =
  "My alarm doesn't know it's Saturday. It also doesn't know I retired it in March. It just shows up, loud and unemployed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
