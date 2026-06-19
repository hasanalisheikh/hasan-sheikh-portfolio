import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { FloatingParticles } from "@/components/floating-particles";
import { WaveDivider } from "@/components/wave-divider";

export const metadata: Metadata = {
  title: "Hasan Sheikh | Portfolio",
  description: "Software developer portfolio showcasing projects, skills, and experience",
  keywords: ["portfolio", "web developer", "software developer", "software engineer"],
  authors: [{ name: "Hasan Sheikh" }],
  icons: {
    icon: [
      { url: "/icon", type: "image/png", sizes: "1024x1024" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "1024x1024" }],
  },
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
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange={false}
        >
          <FloatingParticles />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <WaveDivider />
        </ThemeProvider>
      </body>
    </html>
  );
}
