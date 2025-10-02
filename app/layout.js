import localFont from "next/font/local";
import "./globals.css";
import NavLinks from "./ui/nav-links";
import ScrollToTop from "./ui/scroll-to-top";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Kenny Chen",
  description: "Portfolio of Kenny Chen: experience, projects, skills, and contact.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-50 p-4 sm:p-6 bg-[--color-black] md:px-32 lg:px-48 xl:px-64">
          <NavLinks />
        </header>
        <main className="flex flex-col p-4 sm:p-6 md:px-32 lg:px-48 xl:px-64">
          {children}
        </main>
        <ScrollToTop />
      </body>
    </html>
  );
}
