/**
 * Placeholder data for the HybridBonus visual shell.
 *
 * Structured so it can later be moved to a database / CMS without changing
 * component contracts. No real casino names, no fictional bonuses, no
 * fabricated verification dates.
 */

import type { TrustProfileData } from "@/components/trust-profile/TrustProfile";
import type { Verdict } from "@/components/ui/verdict-pill";

export interface CasinoInfo {
  label: string;
  value: string;
}

export interface WelcomeBonus {
  amount: string;
  type?: string;
  minDeposit?: string;
  wageringX?: number;
  maxBetDuringBonus?: string;
  timeLimit?: string;
  sourceUrl: string;
}

export interface PaymentMethod {
  name: string;
  minAmount?: string;
  maxAmount?: string;
  notes?: string;
}

export interface ReviewSource {
  label: string;
  url: string;
  retrievedAt: string;
}

export interface Casino {
  id: string;
  name: string;
  tagline: string;
  info: CasinoInfo[];
  trust: TrustProfileData;
  verdict: Verdict;
  comment: string;
  /** ISO date or null. Null = not yet verified (UI shows neutral placeholder). */
  verifiedAt: string | null;
  // Optional fields used by sourced reviews. Existing placeholder rows
  // omit these; never invent values for them.
  slug?: string;
  operator?: string;
  licenseAuthority?: string;
  licenseNumber?: string | null;
  established?: number | null;
  welcomeBonus?: WelcomeBonus;
  payments?: { deposits: PaymentMethod[]; withdrawals: PaymentMethod[] };
  withdrawalTime?: { typical: string; range?: string; sourceUrl: string };
  games?: { totalApprox?: number; providers: string[]; categories: string[] };
  mobile?: {
    iosApp: boolean;
    androidApp: boolean;
    browserOptimised: boolean;
    notes?: string;
  };
  support?: {
    channels: ("livechatt" | "e-post" | "telefon")[];
    hours: string;
    swedish: boolean;
  };
  responsibleGambling?: {
    spelpaus: true;
    depositLimits: boolean;
    lossLimits: boolean;
    sessionLimits: boolean;
    realityCheck: boolean;
  };
  prosCons?: { pros: string[]; cons: string[] };
  bestFor?: string[];
  notIdealFor?: string[];
  sources?: ReviewSource[];
  verdictComment?: string;
}

/**
 * Draft shape for in-progress reviews that have no verified facts yet.
 * Use this for review pages held back from CASINOS[] until sourced.
 */
export type DraftCasino = Partial<Casino> & Pick<Casino, "id" | "name" | "tagline">;

const NEUTRAL_INFO: CasinoInfo[] = [
  { label: "Licens", value: "Platshållare" },
  { label: "Bonus", value: "Platshållare" },
  { label: "Min. insättning", value: "Platshållare" },
  { label: "Omsättningskrav", value: "Platshållare" },
  { label: "Uttagstid", value: "Platshållare" },
  { label: "Support", value: "Platshållare" },
];

const NEUTRAL_TRUST: TrustProfileData = {
  trygghet: 0,
  bonusvarde: 0,
  omsattningsvillkor: 0,
  uttag: 0,
  spelupplevelse: 0,
  helhetsvarde: 0,
};

export const CASINOS: Casino[] = [
  { id: "a", name: "Exempelcasino A", tagline: "Platshållare för ingress." },
  { id: "b", name: "Exempelcasino B", tagline: "Platshållare för ingress." },
  { id: "c", name: "Exempelcasino C", tagline: "Platshållare för ingress." },
  { id: "d", name: "Exempelcasino D", tagline: "Platshållare för ingress." },
  { id: "e", name: "Exempelcasino E", tagline: "Platshållare för ingress." },
].map((c) => ({
  ...c,
  info: NEUTRAL_INFO,
  trust: NEUTRAL_TRUST,
  verdict: "bra" as Verdict,
  comment:
    "Redaktionellt omdöme tillkommer. Innehållet på den här sidan är en platshållare.",
  verifiedAt: null,
}));

export interface Guide {
  id: string;
  title: string;
  excerpt: string;
}

export const GUIDES: Guide[] = [
  {
    id: "kom-igang",
    title: "Kom igång med svenska casinon",
    excerpt:
      "En kort introduktion till svensk licens, registrering med BankID och insättning via Trustly.",
  },
  {
    id: "bonusar",
    title: "Så läser du bonusvillkor",
    excerpt:
      "Förstå omsättningskrav, maxinsats och tidsgränser innan du tar emot en bonus.",
  },
  {
    id: "uttag",
    title: "Snabba och säkra uttag",
    excerpt:
      "Vilka faktorer påverkar uttagstiden och vad du bör kontrollera innan första uttaget.",
  },
];

export const VERIFICATION_PLACEHOLDER = "Verifiering tillkommer";
