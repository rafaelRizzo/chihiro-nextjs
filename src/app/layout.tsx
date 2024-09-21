import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata: Metadata = {
  title: "A Viagem de Chihiro - Landing Page",
  description: "Explore a mágica e emocionante aventura de Chihiro nesta página dedicada ao premiado filme de Hayao Miyazaki, A Viagem de Chihiro.",
  keywords: "A Viagem de Chihiro, Hayao Miyazaki, Studio Ghibli, Filme de animação, Ghibli, Anime, Filme japonês",
  openGraph: {
    type: 'website',
    title: 'A Viagem de Chihiro - Landing Page',
    description: 'Aprofunde-se na história de Chihiro, uma jovem em uma aventura mágica, no universo de Hayao Miyazaki.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
