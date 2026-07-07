export const BREAKPOINTS = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
  "2xl": "96rem",
} as const;

export const CONTAINERS = {
  narrow: "48rem",
  default: "80rem",
  wide: "90rem",
  ultra: "102.5rem",
} as const;

export const Z_INDEX = {
  base: 0,
  dropdown: 20,
  sticky: 30,
  overlay: 40,
  modal: 50,
  toast: 60,
} as const;

export const MOTION = {
  duration: {
    fast: 0.15,
    normal: 0.25,
    slow: 0.3,
  },
  easing: {
    standard: [0.25, 0.1, 0.25, 1] as const,
    emphasized: [0.2, 0, 0, 1] as const,
  },
  stagger: 0.08,
} as const;

export const RADIUS = {
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  pill: "9999px",
  panel: "1.25rem",
} as const;

export const SHADOWS = {
  xs: "0 1px 1px rgb(0 0 0 / 0.04)",
  sm: "0 1px 2px rgb(0 0 0 / 0.08)",
  md: "0 4px 12px rgb(0 0 0 / 0.08)",
  lg: "0 12px 28px rgb(0 0 0 / 0.12)",
  elevated: "0 16px 40px rgb(0 0 0 / 0.14)",
} as const;

export const SPACING = {
  gutter: "1.5rem",
  card: "1.5rem",
  control: "1rem",
  section: "5rem",
  sectionLg: "7rem",
  sectionXl: "9rem",
} as const;

export const TYPOGRAPHY = {
  fontFamily: {
    sans: "Instrument Sans",
    ui: "IBM Plex Sans",
    mono: "IBM Plex Mono",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.5rem",
    "2xl": "2rem",
    "3xl": "2.125rem",
    "4xl": "2.875rem",
    display: "4.625rem",
  },
  lineHeight: {
    tight: 1.1,
    snug: 1.2,
    normal: 1.4,
    relaxed: 1.6,
  },
  fontWeight: {
    regular: 400,
    medium: 500,
  },
  letterSpacing: {
    tight: "-0.03em",
    normal: "0em",
    wide: "0.01em",
  },
} as const;

export const BRAND = {
  primary: "#091E46",
  accent: "#075FF3",
  foreground: "#FFFFFF",
  background: "#FFFFFF",
} as const;
