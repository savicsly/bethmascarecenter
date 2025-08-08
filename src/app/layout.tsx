import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Bethmas Care Center Abuja | Special Education & Behavioral Intervention",
  description:
    "Professional special education and behavioral intervention center in Abuja. Supporting children with Autism, ADHD, Learning Disabilities through evidence-based practices.",
  keywords:
    "special education, autism therapy, ADHD treatment, learning disabilities, ABA therapy, Abuja, Nigeria",
  authors: [{ name: "Bethmas Care Center" }],
  openGraph: {
    title: "Bethmas Care Center Abuja",
    description:
      "Supporting children with special needs through evidence-based practices",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-white text-gray-900`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
