import { Rating } from "@/components/ui/rating";
import type { Casino } from "@/data/casinos";

/**
 * Comparison table — the page never scrolls horizontally; the table itself
 * scrolls inside its own overflow container on narrow screens.
 */
export function ComparisonTable({ casinos }: { casinos: Casino[] }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-card shadow-card">
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border/70 bg-surface/40 text-left">
              <Th>Casino</Th>
              <Th>Licens</Th>
              <Th>Bonus</Th>
              <Th>Uttagstid</Th>
              <Th>Helhetsvärde</Th>
            </tr>
          </thead>
          <tbody>
            {casinos.map((c) => (
              <tr
                key={c.id}
                className="border-b border-border/50 last:border-0 hover:bg-surface/30"
              >
                <Td className="font-semibold text-foreground">{c.name}</Td>
                <Td className="text-muted-foreground">{c.info[0].value}</Td>
                <Td className="text-muted-foreground">{c.info[1].value}</Td>
                <Td className="text-muted-foreground">{c.info[4].value}</Td>
                <Td>
                  <Rating value={c.trust.helhetsvarde} size="sm" />
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="whitespace-nowrap px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
      {children}
    </th>
  );
}

function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <td className={`whitespace-nowrap px-5 py-4 ${className}`}>{children}</td>;
}
