import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/src/components/site/SiteHeader";
import SiteFooter from "@/src/components/site/SiteFooter";
import { profile } from "@/src/data/profile";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-bricolage",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} · Engenheiro de Software`,
    template: `%s · ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    "Miguel Bahia",
    "engenheiro de software",
    "full stack",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Next.js",
    "React",
    "MongoDB",
    "portfólio",
  ],
  authors: [{ name: profile.fullName, url: profile.siteUrl }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: profile.siteUrl,
    siteName: profile.name,
    title: `${profile.name} · Engenheiro de Software`,
    description: profile.tagline,
  },
  twitter: {
    card: "summary",
    title: `${profile.name} · Engenheiro de Software`,
    description: profile.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#16171d" },
    { media: "(prefers-color-scheme: light)", color: "#f7f7f7" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Aplica o tema salvo antes da primeira pintura para evitar flash.
const themeScript = `(function(){try{var t=localStorage.getItem('mb-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t)}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      suppressHydrationWarning
      className={`${bricolage.variable} ${jetbrains.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh flex flex-col">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-ink focus:text-sm"
        >
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <div id="conteudo" className="flex-1">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
