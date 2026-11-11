/**
 * Nov 11 2026 (owner report: the chat told a visitor it can't check guns).
 *
 * Messages that ask "can you check guns?" or mix a number with words ("gun 61050",
 * "Marlin gun F5873", "IMEI/MEID 3518...") used to go to the AI model, which said SafeOrStolen
 * doesn't cover firearms or told people on /verify to "go to safeorstolen.com/verify". These
 * helpers answer coverage questions with fixed, true wording and pull the number out of the
 * message so the check runs right in the chat.
 */

export type ChatCategory = 'firearm' | 'phone' | 'vehicle' | 'bicycle' | 'serial';

const CATEGORY_WORDS: [ChatCategory, RegExp][] = [
  ['firearm', /\b(guns?|firearms?|handguns?|pistols?|rifles?|shotguns?|revolvers?|glocks?|ruger|smith\s*(&|and)\s*wesson|sig\s*sauer|marlin|remington|mossberg|ar-?15|ak-?47|stoeger|taurus|springfield|beretta|winchester|savage)\b/i],
  ['phone', /\b(imei|meid|phones?|iphones?|android|smartphones?|cell\s*phones?|galaxy|pixel)\b/i],
  ['vehicle', /\b(vin|vins|cars?|trucks?|vehicles?|motorcycles?|license\s*plates?|plates?|suv|van|atv|dirt\s*bike)\b/i],
  ['bicycle', /\b(bikes?|bicycles?|e-?bikes?|frame\s*(number|serial))\b/i],
  ['serial', /\b(laptops?|macbooks?|ipads?|tablets?|consoles?|ps5|playstation|xbox|nintendo|switch|cameras?|drones?|tools?|dewalt|milwaukee|makita|watch(es)?|tvs?|computers?|serial\s*(numbers?)?)\b/i],
];

/** Which kind of item the message talks about, if any. */
export function categoryFromText(text: string): ChatCategory | null {
  for (const [cat, re] of CATEGORY_WORDS) if (re.test(text)) return cat;
  return null;
}

/** The type hint the check uses for this category (matches the ?type= values /verify accepts). */
export function hintForCategory(cat: ChatCategory | null): string | null {
  if (cat === 'firearm') return 'firearm';
  if (cat === 'bicycle') return 'bicycle';
  if (cat === 'serial') return 'serial';
  return null; // phones and vehicles are recognized from the number itself
}

const LABEL_WORDS = /^(imei|meid|imei\/meid|vin|serial|serial#|sn|s\/n|no|number|num|#)$/i;

function cleanToken(tok: string): string {
  return tok.replace(/^[#:(\["']+/, '').replace(/[):.,;!?\]"']+$/, '');
}

function isCandidate(tok: string): boolean {
  return tok.length >= 5 && tok.length <= 30 && /\d/.test(tok) && /^[A-Z0-9-]+$/i.test(tok);
}

export interface ExtractedIdentifier {
  /** One number to check right away. */
  identifier?: string;
  /** Several possible numbers: ask which one, offering each as a tap. */
  choices?: string[];
  category: ChatCategory | null;
}

/**
 * Pull a checkable number out of a short message that also has words in it.
 * Returns null when the message has no number worth checking.
 */
export function extractIdentifier(text: string): ExtractedIdentifier | null {
  const t = text.trim();
  if (!t || t.length > 160) return null;
  if (/https?:\/\//i.test(t)) return null;
  const words = t.split(/\s+/);
  if (words.length > 14) return null;
  const category = categoryFromText(t);

  // A phone IMEI typed with spaces, dashes or slashes ("35 629632 838383 5", "350995/41/156622/4").
  const imeiRun = t.match(/\d[\d\s/.-]{13,24}\d/);
  if (imeiRun) {
    const digits = imeiRun[0].replace(/\D/g, '');
    if (digits.length === 15 && (category === 'phone' || category === null || /[\s/.-]/.test(imeiRun[0]))) {
      return { identifier: digits, category: category ?? 'phone' };
    }
  }

  const hasLabel = words.some((w) => LABEL_WORDS.test(cleanToken(w)) || /^(serial|imei|vin)/i.test(w));
  const tokens = words.map(cleanToken).filter((w) => w && !LABEL_WORDS.test(w));
  // A short all-digit number with no item or label word next to it ("I paid 45000") is not a serial.
  const strongEnough = (w: string) => /[A-Z]/i.test(w) || w.replace(/-/g, '').length >= 7 || category !== null || hasLabel;
  const candidates = Array.from(new Set(tokens.filter((w) => isCandidate(w) && strongEnough(w))));

  // Number groups typed with a space between them ("2534 160844") may be one serial.
  const joined: string[] = [];
  for (let i = 0; i + 1 < tokens.length; i++) {
    const a = tokens[i];
    const b = tokens[i + 1];
    if (/^\d+$/.test(a) && /^\d+$/.test(b)) {
      const j = a + b;
      if (isCandidate(j) && strongEnough(j)) joined.push(j);
    }
  }
  if (candidates.length === 0 && joined.length === 0) return null;

  // Other short number groups next to the candidate may be part of the same serial.
  const shortNumbers = tokens.filter((w) => /\d/.test(w) && !isCandidate(w) && w.length >= 3);
  if (candidates.length === 1 && shortNumbers.length === 0 && joined.length === 0) {
    return { identifier: candidates[0], category };
  }

  const parts = tokens.filter((w) => isCandidate(w) && !candidates.includes(w) && joined.some((j) => j.includes(w)));
  const choices = Array.from(new Set([...candidates, ...parts, ...joined]));
  return { choices: choices.slice(0, 4), category };
}

const ASKS_ABOUT_COVERAGE =
  /\b(can|could|do|does|will|would|are|is)\b[^.?!]*\b(you|u|it|i|safeorstolen|this|site|app|y'?all)\b|\b(check|search|look\s*up|lookup|verify|scan|run|work)\b/i;

/** "can you check guns?", "do you do bikes", "check a phone": a question about what the chat covers. */
export function coverageQuestion(text: string): ChatCategory | null {
  const t = text.trim();
  if (!t || t.length > 160) return null;
  const cat = categoryFromText(t);
  if (!cat) return null;
  if (!ASKS_ABOUT_COVERAGE.test(t)) return null;
  // "my phone was stolen" or "how do I report a stolen gun" are other questions for the AI.
  if (/\b(report|was stolen|got stolen|been stolen|lost my|insurance|police report|find my|track)\b/i.test(t)) return null;
  return cat;
}

/** Fixed, true answers to "can you check X?". Wording matches what the checks really search. */
export function coverageReply(cat: ChatCategory, signedIn: boolean): { content: string; suggestions: string[] } {
  const signIn = signedIn
    ? ''
    : "\n\nYou'll sign up or sign in first, so every check you run is saved to your dashboard.";
  switch (cat) {
    case 'firearm':
      return {
        content:
          "**Yes, I can check any gun by its serial number.** Type the serial number stamped on the frame and send it here.\n\nI'll search SafeOrStolen's own theft reports, more than 220,000 police gun theft and loss reports from 33 states and Washington, DC, and live Ohio law-enforcement records, and list every source I searched." +
          signIn,
        suggestions: ['Where is the serial number on a gun?'],
      };
    case 'phone':
      return {
        content:
          "**Yes, I can check any phone by its IMEI.** Dial `*#06#` or open Settings → About to see the 15-digit IMEI, then send it here.\n\nI'll search SafeOrStolen's own theft reports and confirm the phone's make and model from the IMEI." +
          signIn,
        suggestions: ['How do I find my IMEI?'],
      };
    case 'vehicle':
      return {
        content:
          "**Yes, I can check cars, trucks and motorcycles.** Send the 17-character VIN (on the dashboard by the windshield or the driver-door sticker), or the license plate and state.\n\nI'll search SafeOrStolen's own theft reports, plus Arizona, Alaska and Chicago police stolen-vehicle records." +
          signIn,
        suggestions: ['Where is the VIN on a car?'],
      };
    case 'bicycle':
      return {
        content:
          "**Yes, I can check any bike by its frame serial number.** It's usually stamped under the frame where the pedals attach. Send it here.\n\nI'll search SafeOrStolen's own theft reports and a national stolen-bicycle registry." +
          signIn,
        suggestions: ['Where is the serial on a bike?'],
      };
    default:
      return {
        content:
          "**Yes, I can check laptops, consoles, tablets, cameras, tools and other gear by serial number.** The serial is on the label or in the device's settings screen. Send it here.\n\nI'll search SafeOrStolen's own theft reports and show every source I searched." +
          signIn,
        suggestions: ['Where is the serial number on a laptop?'],
      };
  }
}
