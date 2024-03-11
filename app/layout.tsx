// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import type { Metadata } from "next";
import "./globals.css";

//Components
import Shell from "./components/shell/Shell";

export const metadata: Metadata = {
  title: "Next.js App",
  description: "Next.js App with Mantine",
  manifest: "manifest.json",
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Shell>{children}</Shell>
        </MantineProvider>
      </body>
    </html>
  );
}
