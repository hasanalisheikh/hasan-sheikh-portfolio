import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ParticlesClient } from "@/components/particles-client";
import { WaveDivider } from "@/components/wave-divider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hasan Sheikh | Portfolio",
  description: "Software developer portfolio showcasing projects, skills, and experience",
  keywords: ["portfolio", "web developer", "software developer", "software engineer"],
  authors: [{ name: "Hasan Sheikh" }],
  openGraph: {
    title: "Hasan Sheikh | Portfolio",
    description: "Software developer portfolio showcasing projects, skills, and experience",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange={false}
        >
          <ParticlesClient />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <WaveDivider />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
