import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vince | Frontend Developer | Creating User-Friendly Websites", // Global title
  description:
    "Welcome to my portfolio! I'm Vince, a passionate frontend developer specializing in creating responsive, accessible, and interactive web applications.",
  openGraph: {
    type:"website",
    title: "Vince | Frontend Developer | Creating User-Friendly Websites",
    description:
      "Welcome to my portfolio! I'm Vince, a passionate frontend developer specializing in creating responsive, accessible, and interactive web applications.",
    images: [
      {
        url: "https://portfolio-one-delta-35.vercel.app", // Example Open Graph image
        width: 1200,
        height: 630,
        alt: "Vince's Portfolio",
      },
    ],
    url: "https://portfolio-one-delta-35.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://portfolio-one-delta-35.vercel.app",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="max-w-[2000px]  mx-auto bg-[#fafaf8] overflow-x-hidden">
        <Head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://portfolio-one-delta-35.vercel.app" />
        {/* Add the fb:app_id meta tag manually */}
        <meta property="fb:app_id" content="1403861607321355" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Vince",
      url: "https://portfolio-one-delta-35.vercel.app",
      image: "https://portfolio-one-delta-35.vercel.app/seo.png",
      jobTitle: "Frontend Developer",
      worksFor: {
        "@type": "Organization",
        name: "Freelance",
      },
      sameAs: [
        "https://github.com/Amon-mamon",
        "https://www.linkedin.com/in/vince-stephen-david-ab72292a0/",
        // Add other social links here
      ],
    }),
  }}
/>
        {children}
      </body>
    </html>
  );
}
