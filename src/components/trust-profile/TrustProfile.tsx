import { Rating } from "@/components/ui/rating";
import { VerdictPill, type Verdict } from "@/components/ui/verdict-pill";
import { cn } from "@/lib/utils";

/**
 * HybridBonus Trust Profile™
 *
 * Each criterion is stored as a normalized 0–5 score. Visual representation
 * (stars today, bars/dots later) is owned by <Rating /> — changing the visual
 * does not require changes here or in any consumer.
 */
export interface TrustProfileData {
  trygghet: number;
  bonusvarde: number;
  omsattningsvillkor: number;
  uttag: number;
  spelupplevelse: number;
  helhetsvarde: number;
}

export interface TrustProfileProps {
  /** Required when state === "verified". Omit for pending drafts. */
  data?: TrustProfileData;
  verdict?: Verdict;
  comment?: string;
  className?: string;
  /**
   * "verified" (default) renders ratings as usual.
   * "pending" renders the 6 category labels with a neutral
   * "Bedömning tillkommer" line — no stars, no scores, no verdict.
   * Use while a review is still being researched.
   */
  state?: "verified" | "pending";
}

const ROWS: { key: keyof TrustProfileData; label: string }[] = [
  { key: "trygghet", label: "Trygghet" },
  { key: "bonusvarde", label: "Bonusvärde" },
  { key: "omsattningsvillkor", label: "Omsättningsvillkor" },
  { key: "uttag", label: "Uttag" },
  { key: "spelupplevelse", label: "Spelupplevelse" },
  { key: "helhetsvarde", label: "Helhetsvärde" },
];

export function TrustProfile({
  data,
  verdict,
  comment,
  className,
  state = "verified",
}: TrustProfileProps) {
  const pending = state === "pending";

  if (!pending && !data) {
    if (import.meta.env.DEV) {
      console.warn(
        "<TrustProfile /> requires `data` when state is 'verified'.",
      );
    }
    return null;
  }

  return (
    <div
      className={cn(
        "rounded-2xl border border-border/70 bg-surface/60 p-5 sm:p-6",
        className,
      )}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Trust Profile
        </h3>
        {!pending && verdict && <VerdictPill verdict={verdict} />}
      </div>

      <dl className="divide-y divide-border/60">
        {ROWS.map(({ key, label }) => (
          <div
            key={key}
            className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3"
          >
            <dt className="min-w-0 text-sm text-foreground/90">{label}</dt>
            <dd className="shrink-0">
              {pending ? (
                <span className="text-xs text-muted-foreground">
                  Bedömning tillkommer
                </span>
              ) : (
                <Rating value={data![key]} />
              )}
            </dd>
          </div>
        ))}
      </dl>

      {!pending && comment && (
        <p className="mt-5 border-t border-border/60 pt-5 text-sm leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">Vårt omdöme. </span>
          {comment}
        </p>
      )}
    </div>
  );
}
