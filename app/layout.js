import localFont from "next/font/local";
import "./globals.css";
import NavLinks from "./ui/nav-links";

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
  description: "Kenny's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="p-6 bg-[--color-black] md:px-96">
          <NavLinks />
        </header>
        <main className="flex flex-col p-6 md:px-96">
          {children}
        </main>
      </body>
    </html>
  );
}
