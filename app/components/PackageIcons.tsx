// PackageIcons — minimal single-stroke SVG icon set used across
// package/add-on feature lists. Kept in one place so pricing sections
// stay visually consistent and easy to extend.

export type PackageIconType =
  | "portraits"
  | "setup"
  | "family"
  | "macro"
  | "props"
  | "gown"
  | "home"
  | "heart"
  | "retouch"
  | "film"
  | "palette";

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PackageIcon({ type, size = 13 }: { type: PackageIconType; size?: number }) {
  const props = { width: size, height: size, viewBox: "0 0 24 24", ...common, style: { flexShrink: 0 } };

  switch (type) {
    case "portraits":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      );
    case "setup":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3" />
          <path d="M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4M3 12h2M19 12h2M12 3v2M12 19v2" />
        </svg>
      );
    case "family":
      return (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "macro":
      return (
        <svg {...props}>
          <circle cx="10" cy="10" r="6.5" />
          <path d="M19.5 19.5L15 15" />
        </svg>
      );
    case "props":
      return (
        <svg {...props}>
          <rect x="3" y="9" width="18" height="11" rx="1" />
          <path d="M3 9h18" />
          <path d="M12 9v11" />
          <path d="M12 9c-1-3-3.5-4-5-2.5S6 9 12 9z" />
          <path d="M12 9c1-3 3.5-4 5-2.5S18 9 12 9z" />
        </svg>
      );
    case "gown":
      return (
        <svg {...props}>
          <path d="M9.5 3h5l1 3.5-2 2 3.5 12.5H7L10.5 8.5l-2-2z" />
        </svg>
      );
    case "home":
      return (
        <svg {...props}>
          <path d="M3 11.5L12 4l9 7.5" />
          <path d="M5.5 10v10h13V10" />
          <path d="M10 20v-6h4v6" />
        </svg>
      );
    case "heart":
      return (
        <svg {...props}>
          <path d="M12 20.5s-7.5-4.8-9.8-9.3C.6 7.7 2.3 4.5 5.6 4c2-.3 3.7.7 4.9 2.3.5.7 1 1.5 1.5 1.5s1-.8 1.5-1.5C14.7 4.7 16.4 3.7 18.4 4c3.3.5 5 3.7 3.4 7.2C19.5 15.7 12 20.5 12 20.5z" />
        </svg>
      );
    case "retouch":
      return (
        <svg {...props}>
          <path d="M12 2.5l1.2 3.7 3.9.3-3 2.5.9 3.8-3-2.2-3 2.2.9-3.8-3-2.5 3.9-.3z" />
          <path d="M4 21l6.5-6.5" />
        </svg>
      );
    case "film":
      return (
        <svg {...props}>
          <rect x="3" y="7" width="18" height="14" rx="2" />
          <path d="M3 11h18" />
          <path d="M7 7l2-4M13 7l2-4" />
        </svg>
      );
    case "palette":
      return (
        <svg {...props}>
          <path d="M12 3a9 8 0 1 0 3 17.5c1-.4.9-1.6.2-2.3-.6-.6-.4-1.7.5-2h1.8a4 4 0 0 0 4-4C21.5 6.9 17.2 3 12 3z" />
          <circle cx="7.5" cy="11" r="1" />
          <circle cx="11" cy="7.5" r="1" />
          <circle cx="15.5" cy="9" r="1" />
        </svg>
      );
    default:
      return null;
  }
}
