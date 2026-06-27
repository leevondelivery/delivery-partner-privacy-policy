import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Leevon Delivery LLP - Privacy & Policy Portal",
  description: "Privacy Policy, Data Deletion Requests, and Terms of Service for the Leevon Delivery Partner Application.",
  keywords: "leevon, delivery, delivery boy, privacy policy, data deletion, play store, leevon delivery llp",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

