/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-white)",
        muted: "#9CA3AF", // gray-400
        "muted-foreground": "#6B7280", // gray-500
      },
      fontSize: {
        // Consistent typography scale
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '600' }], // 56px
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }], // 40px
        'h2': ['2rem', { lineHeight: '1.25', fontWeight: '600' }], // 32px
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }], // 24px
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }], // 20px
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // 14px
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }], // 12px
      },
    },
  },
  plugins: [],
};
