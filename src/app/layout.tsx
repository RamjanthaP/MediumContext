import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/components/StoryblokProvider";
import AppHeader from "@/components/Menu/AppHeader";
import { getStoryblokMenuData } from "@/services/getStoryBlokPage";
import { ThemeSwitcher } from "@/components/DevUtils/ThemeSwitcher";

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
});

// TODO: Säkerställ att dessa värden är korrekta
export const metadata: Metadata = {
  title: "Amaceit - Konsulter inom .NET, React, IT management och Vue",
  description:
    "En konsultbyrå som hjälper dig med IT management, .NET, React och Vue i Stockholm, Ljungby och Linköping",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuData = await getStoryblokMenuData();
  return (
    <html lang="en">
      <StoryblokProvider>
        <body className={inter.className}>
          <AppHeader blok={menuData} />
          {children}
          {process.env.NODE_ENV === "development" && <ThemeSwitcher />}
        </body>
      </StoryblokProvider>
    </html>
  );
}
