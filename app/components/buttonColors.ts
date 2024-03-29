export type ButtonColor =
  | "gray"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

export const topLayerVariants: Record<ButtonColor, string[]> = {
  gray: [
    "bg-gray-600",
    "border-gray-700",
    "group-hover:border-gray-800",
    "group-active:border-gray-900",
  ],
  red: [
    "bg-red-600",
    "border-red-700",
    "group-hover:border-red-800",
    "group-active:border-red-900",
  ],
  orange: [
    "bg-orange-600",
    "border-orange-700",
    "group-hover:border-orange-800",
    "group-active:border-orange-900",
  ],
  amber: [
    "bg-amber-600",
    "border-amber-700",
    "group-hover:border-amber-800",
    "group-active:border-amber-900",
  ],
  yellow: [
    "bg-yellow-600",
    "border-yellow-700",
    "group-hover:border-yellow-800",
    "group-active:border-yellow-900",
  ],
  lime: [
    "bg-lime-600",
    "border-lime-700",
    "group-hover:border-lime-800",
    "group-active:border-lime-900",
  ],
  green: [
    "bg-green-600",
    "border-green-700",
    "group-hover:border-green-800",
    "group-active:border-green-900",
  ],
  emerald: [
    "bg-emerald-600",
    "border-emerald-700",
    "group-hover:border-emerald-800",
    "group-active:border-emerald-900",
  ],
  teal: [
    "bg-teal-600",
    "border-teal-700",
    "group-hover:border-teal-800",
    "group-active:border-teal-900",
  ],
  cyan: [
    "bg-cyan-600",
    "border-cyan-700",
    "group-hover:border-cyan-800",
    "group-active:border-cyan-900",
  ],
  sky: [
    "bg-sky-600",
    "border-sky-700",
    "group-hover:border-sky-800",
    "group-active:border-sky-900",
  ],
  blue: [
    "bg-blue-600",
    "border-blue-700",
    "group-hover:border-blue-800",
    "group-active:border-blue-900",
  ],
  indigo: [
    "bg-indigo-600",
    "border-indigo-700",
    "group-hover:border-indigo-800",
    "group-active:border-indigo-900",
  ],
  violet: [
    "bg-violet-600",
    "border-violet-700",
    "group-hover:border-violet-800",
    "group-active:border-violet-900",
  ],
  purple: [
    "bg-purple-600",
    "border-purple-700",
    "group-hover:border-purple-800",
    "group-active:border-purple-900",
  ],
  fuchsia: [
    "bg-fuchsia-600",
    "border-fuchsia-700",
    "group-hover:border-fuchsia-800",
    "group-active:border-fuchsia-900",
  ],
  pink: [
    "bg-pink-600",
    "border-pink-700",
    "group-hover:border-pink-800",
    "group-active:border-pink-900",
  ],
  rose: [
    "bg-rose-600",
    "border-rose-700",
    "group-hover:border-rose-800",
    "group-active:border-rose-900",
  ],
};

export const bottomLayerVariants: Record<ButtonColor, string[]> = {
  gray: [
    "from-gray-800",
    "via-gray-900",
    "to-gray-700",
    "group-active:to-gray-800",
    "border-gray-950",
  ],
  red: [
    "from-red-800",
    "via-red-900",
    "to-red-700",
    "group-active:to-red-800",
    "border-red-950",
  ],
  orange: [
    "from-orange-800",
    "via-orange-900",
    "to-orange-700",
    "group-active:to-orange-800",
    "border-orange-950",
  ],
  amber: [
    "from-amber-800",
    "via-amber-900",
    "to-amber-700",
    "group-active:to-amber-800",
    "border-amber-950",
  ],
  yellow: [
    "from-yellow-800",
    "via-yellow-900",
    "to-yellow-700",
    "group-active:to-yellow-800",
    "border-yellow-950",
  ],
  lime: [
    "from-lime-800",
    "via-lime-900",
    "to-lime-700",
    "group-active:to-lime-800",
    "border-lime-950",
  ],
  green: [
    "from-green-800",
    "via-green-900",
    "to-green-700",
    "group-active:to-green-800",
    "border-green-950",
  ],
  emerald: [
    "from-emerald-800",
    "via-emerald-900",
    "to-emerald-700",
    "group-active:to-emerald-800",
    "border-emerald-950",
  ],
  teal: [
    "from-teal-800",
    "via-teal-900",
    "to-teal-700",
    "group-active:to-teal-800",
    "border-teal-950",
  ],
  cyan: [
    "from-cyan-800",
    "via-cyan-900",
    "to-cyan-700",
    "group-active:to-cyan-800",
    "border-cyan-950",
  ],
  sky: [
    "from-sky-800",
    "via-sky-900",
    "to-sky-700",
    "group-active:to-sky-800",
    "border-sky-950",
  ],
  blue: [
    "from-blue-800",
    "via-blue-900",
    "to-blue-700",
    "group-active:to-blue-800",
    "border-blue-950",
  ],
  indigo: [
    "from-indigo-800",
    "via-indigo-900",
    "to-indigo-700",
    "group-active:to-indigo-800",
    "border-indigo-950",
  ],
  violet: [
    "from-violet-800",
    "via-violet-900",
    "to-violet-700",
    "group-active:to-violet-800",
    "border-violet-950",
  ],
  purple: [
    "from-purple-800",
    "via-purple-900",
    "to-purple-700",
    "group-active:to-purple-800",
    "border-purple-950",
  ],
  fuchsia: [
    "from-fuchsia-800",
    "via-fuchsia-900",
    "to-fuchsia-700",
    "group-active:to-fuchsia-800",
    "border-fuchsia-950",
  ],
  pink: [
    "from-pink-800",
    "via-pink-900",
    "to-pink-700",
    "group-active:to-pink-800",
    "border-pink-950",
  ],
  rose: [
    "from-rose-800",
    "via-rose-900",
    "to-rose-700",
    "group-active:to-rose-800",
    "border-rose-950",
  ],
};
