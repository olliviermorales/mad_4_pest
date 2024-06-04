import { Azeret_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Metadata } from "next";

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
});

interface OGImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface OpenGraphMetadata {
  type: string;
  locale: string;
  url: string;
  title: string;
  description: string;
  images: OGImage[];
  site_name: string;
}

interface TwitterMetadata {
  card: string;
  site: string;
  title: string;
  description: string;
  image: string;
}

interface CustomMetadata extends Metadata {
  openGraph: OpenGraphMetadata;
  twitter: TwitterMetadata;
}

export const metadata: CustomMetadata = {
  title: "Mad4Pest",
  description:
    "PEST CONTROL SOLUTIONS Pests and viruses don't wait. Neither should you.",
  metadataBase: new URL("https://www.mad4pest.com"), // Set the base URL
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mad4pest.com/",
    title: "Mad4Pest",
    description:
      "PEST CONTROL SOLUTIONS Pests and viruses don't wait. Neither should you.",
    images: [
      {
        url: "/assets/icons/logo.png",
        width: 1200,
        height: 630,
        alt: "Mad4Pest Logo",
      },
    ],
    site_name: "Mad4Pest",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mad4pest",
    title: "Mad4Pest",
    description:
      "PEST CONTROL SOLUTIONS Pests and viruses don't wait. Neither should you.",
    image: "/assets/icons/logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description as any} />
        {metadata.openGraph && (
          <>
            <meta property="og:type" content={metadata.openGraph.type} />
            <meta property="og:locale" content={metadata.openGraph.locale} />
            <meta property="og:url" content={metadata.openGraph.url} />
            <meta property="og:title" content={metadata.openGraph.title} />
            <meta
              property="og:description"
              content={metadata.openGraph.description}
            />
            {metadata.openGraph.images[0] && (
              <>
                <meta
                  property="og:image"
                  content={metadata.openGraph.images[0].url}
                />
                <meta
                  property="og:image:width"
                  content={metadata.openGraph.images[0].width.toString()}
                />
                <meta
                  property="og:image:height"
                  content={metadata.openGraph.images[0].height.toString()}
                />
                <meta
                  property="og:image:alt"
                  content={metadata.openGraph.images[0].alt}
                />
              </>
            )}
            <meta
              property="og:site_name"
              content={metadata.openGraph.site_name}
            />
          </>
        )}
        {metadata.twitter && (
          <>
            <meta name="twitter:card" content={metadata.twitter.card} />
            <meta name="twitter:site" content={metadata.twitter.site} />
            <meta name="twitter:title" content={metadata.twitter.title} />
            <meta
              name="twitter:description"
              content={metadata.twitter.description}
            />
            <meta name="twitter:image" content={metadata.twitter.image} />
          </>
        )}
      </head>
      <body className={azeretMono.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
