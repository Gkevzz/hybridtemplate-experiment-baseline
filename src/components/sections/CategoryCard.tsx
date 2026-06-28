import type { LucideIcon } from "lucide-react";
import { Shield, Zap, Smartphone, Banknote, LayoutGrid, Video, Gift, BookOpen } from "lucide-react";

export interface Category {
  key: string;
  title: string;
  icon: LucideIcon;
  href?: string;
}

export const POPULAR_CATEGORIES: Category[] = [
  { key: "trygga", title: "Trygga casinon", icon: Shield },
  { key: "snabba", title: "Snabba uttag", icon: Zap },
  { key: "swish", title: "Swish", icon: Smartphone },
  { key: "trustly", title: "Trustly", icon: Banknote },
  { key: "slots", title: "Slots", icon: LayoutGrid },
  { key: "live", title: "Live Casino", icon: Video },
  { key: "bonusar", title: "Bonusar", icon: Gift },
  { key: "guider", title: "Guider", icon: BookOpen },
];

export function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon;
  return (
    <a
      href={category.href ?? "#"}
      className="group flex flex-col gap-3 rounded-2xl border border-border/70 bg-card p-5 shadow-card transition-colors hover:border-primary/40"
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <span className="text-sm font-semibold text-foreground">{category.title}</span>
    </a>
  );
}

export function CategoryGrid({ items = POPULAR_CATEGORIES }: { items?: Category[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((c) => (
        <CategoryCard key={c.key} category={c} />
      ))}
    </div>
  );
}
