// GyaanVault logo — a self-contained inline SVG (no external image fetch, crisp
// at any size, works in light & dark). The mark reads as an open book (gyaan /
// knowledge) with an ascending data-analytics spark above it, set in a rounded
// "vault" badge using the site's brand→accent gradient.
//
// Usage:
//   <GyaanVaultLogo className="w-12 h-12" />            // icon only
//   <GyaanVaultLogo withWordmark size={40} />           // icon + "GyaanVault"
//
// {/* TODO: replace with a custom logo image here if you commission one later */}
export default function GyaanVaultLogo({
  size = 48,
  className = "",
  withWordmark = false,
  title = "GyaanVault logo",
}) {
  const mark = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label={title}
      className={withWordmark ? "shrink-0" : className}
    >
      <title>{title}</title>
      <defs>
        <linearGradient id="gv-badge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="55%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>

      {/* Vault badge */}
      <rect x="1.5" y="1.5" width="45" height="45" rx="12" fill="url(#gv-badge)" />
      <rect
        x="1.5"
        y="1.5"
        width="45"
        height="45"
        rx="12"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.18"
        strokeWidth="1"
      />

      {/* Ascending data-analytics spark (data science) */}
      <path
        d="M14 20 L20.5 15 L27 18.5 L34 12"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.95"
      />
      <circle cx="14" cy="20" r="1.9" fill="#ffffff" />
      <circle cx="20.5" cy="15" r="1.9" fill="#ffffff" />
      <circle cx="27" cy="18.5" r="1.9" fill="#ffffff" />
      <circle cx="34" cy="12" r="2.1" fill="#ffffff" />

      {/* Open book (knowledge) */}
      <path
        d="M9 27.5c4.5-2.4 9-2.4 15 0 6-2.4 10.5-2.4 15 0v9c-4.5-2.4-9-2.4-15 0-6-2.4-10.5-2.4-15 0z"
        fill="#ffffff"
      />
      <path
        d="M24 27.5v9"
        stroke="#2563eb"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeOpacity="0.55"
      />
    </svg>
  );

  if (!withWordmark) return mark;

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {mark}
      <span
        className="font-display font-bold gradient-text leading-none"
        style={{ fontSize: size * 0.62 }}
      >
        GyaanVault
      </span>
    </span>
  );
}
