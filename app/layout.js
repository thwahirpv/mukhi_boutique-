import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Mukhi Boutique | Premium Fashion & Bridal Wear",
  description: "Exclusive designer boutique in Trivandrum offering premium bridal wear, sarees, and customized fashion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-stone-50 text-stone-900 selection:bg-amber-200 selection:text-amber-900`}
      >
        {children}
      </body>
    </html>
  );
}
