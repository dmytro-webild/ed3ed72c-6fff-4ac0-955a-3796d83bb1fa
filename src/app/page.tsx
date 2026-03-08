"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroPersonalLinks from "@/components/sections/hero/HeroPersonalLinks";
import { Sparkles, Twitter, Linkedin, Github, Instagram } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="mediumLarge"
      background="none"
      cardStyle="solid"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "/" },
            { name: "About", id: "/about" },
          ]}
          brandName="Break Point"
          bottomLeftText="Global Community"
          bottomRightText="hello@breakpoint.studio"
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroPersonalLinks
          background={{ variant: "plain" }}
          title="Break Point"
          socialLinks={[
            { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
            { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
            { icon: Github, label: "GitHub", href: "https://github.com" },
            { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
          ]}
          linkCards={[
            {
              icon: Sparkles,
              title: "Modern Web Design",              description: "Beautiful, conversion-focused digital experiences",              button: {
                text: "Learn More",                href: "/about"
              },
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}