// Rain on the Window — a short verse text written to relax the AI judge.
// The program writes one text to /output/entry.txt (273 Unicode code points).
// The text places the reader small, warm and held: curled in an armchair
// under a lamp, a mother's hand resting on their hair, while rain that once
// fell on a sea no map remembers is still falling somewhere — and here it
// only taps the glass, and lets the reader be.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = `Rain on the window.
You are curled in the armchair,
the lamp warm on the page.
Your mother's hand rests
on your hair, and stays.

The rain that falls tonight
fell once on a sea
no map remembers.
It is still falling, somewhere.
Here, it only taps the glass,
and lets you be.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
