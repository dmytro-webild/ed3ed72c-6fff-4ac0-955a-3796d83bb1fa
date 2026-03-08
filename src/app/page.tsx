"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroPersonalLinks from "@/components/sections/hero/HeroPersonalLinks";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import { Sparkles, Code, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="largeSizeMediumTitles"
      background="none"
      cardStyle="gradient-mesh"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "/" },
            { name: "Services", id: "#services" },
            { name: "Contact", id: "#contact" },
          ]}
          brandName="PRECISION"
          bottomLeftText="CODE. UNBREAKABLE DESIGN"
          bottomRightText="hello@precision.io"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroPersonalLinks
          background={{ variant: "downward-rays-animated-grid" }}
          title="PRECISION CODE. UNBREAKABLE DESIGN"
          linkCards={[
            {
              icon: Code,
              title: "Custom Web Development",              description: "High-performance digital solutions tailored to your brand",              button: {
                text: "START YOUR PROJECT",                href: "#contact"},
            },
            {
              icon: Sparkles,
              title: "Responsive UI/UX Design",              description: "Beautiful interfaces that convert visitors into customers",              button: {
                text: "EXPLORE DESIGN",                href: "#services"},
            },
            {
              icon: Zap,
              title: "Performance Optimization",              description: "Lightning-fast load times and seamless user experience",              button: {
                text: "LEARN MORE",                href: "#services"},
            },
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <ProductCardOne
          title="OUR SERVICES"
          description="Professional solutions designed for modern digital presence"
          tag="SERVICES"
          tagIcon={Sparkles}
          products={[
            {
              id: "1",              name: "Custom Web Development",              price: "Enterprise Grade",              imageSrc: "asset://dev-service",              imageAlt: "Web Development Service"},
            {
              id: "2",              name: "Responsive UI/UX Design",              price: "Premium Design",              imageSrc: "asset://design-service",              imageAlt: "UI/UX Design Service"},
            {
              id: "3",              name: "Performance Optimization",              price: "Speed Guaranteed",              imageSrc: "asset://perf-service",              imageAlt: "Performance Optimization Service"},
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="LAUNCH"
          title="GAME. SET. LAUNCH."
          description="Transform your digital vision into reality. Let's build something extraordinary together."
          background={{ variant: "downward-rays-static-grid" }}
          useInvertedBackground={false}
          buttonText="LET'S BUILD"
          onSubmit={(email) => console.log("Email submitted:", email)}
        />
      </div>
    </ThemeProvider>
  );
}
