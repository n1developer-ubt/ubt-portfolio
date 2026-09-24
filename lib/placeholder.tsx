import type { ReactNode } from "react";

export function markPlaceholders(text: string): ReactNode {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="border-primary border-b-2 border-dashed">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export function isPlaceholder(value: string) {
  return value.trim().startsWith("[") && value.trim().endsWith("]");
}
