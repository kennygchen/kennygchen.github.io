import localFont from "next/font/local";
import "./globals.css";
import NavLinks from "./ui/nav-links";
import ScrollToTop from "./ui/scroll-to-top";
import Footer from "./ui/footer";

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
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-50 px-8 py-4 sm:p-6 bg-[--color-black] md:px-32 lg:px-48 xl:px-64">
          <div className="flex justify-between items-center md:justify-start">
            <NavLinks />
          </div>
        </header>
        <main className="flex flex-col px-8 py-4 pb-8 sm:p-6 sm:pb-12 md:px-32 md:pb-16 lg:px-48 lg:pb-20 xl:px-64 xl:pb-24">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
