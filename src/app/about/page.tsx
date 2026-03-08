"use client";

import { ThemeProvider } from "@/components/theme/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import TestimonialCardTwelve from "@/components/sections/testimonial/TestimonialCardTwelve";
import { Zap, Code, CheckCircle, Users } from "lucide-react";

export default function AboutPage() {
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
      <NavbarStyleFullscreen
        navItems={[
          { name: "Home", id: "/" },
          { name: "About", id: "/about" },
        ]}
        brandName="Break Point"
        bottomLeftText="Global Community"
        bottomRightText="hello@breakpoint.studio"
      />

      {/* Opening Statement */}
      <div
        id="opening"
        data-section="opening"
        className="flex items-center justify-center min-h-screen px-6 py-20"
      >
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Breakpoints and Adaptability
          </h1>
          <p className="text-lg md:text-xl text-foreground/80">
            We believe that digital experiences should respond gracefully to every device, every screen size, and every user expectation. Just like responsive design adapts at breakpoints, we adapt our strategies to your unique challenges.
          </p>
        </div>
      </div>

      {/* Problem Section */}
      <div id="problem" data-section="problem" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            The Problem
          </h2>
          <div className="space-y-6">
            <div className="p-6 border border-accent rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Static Websites</h3>
              <p className="text-foreground/75">
                Many websites are rigid and inflexible, failing to adapt to user needs or changing market conditions. They look good on desktop but crumble on mobile, or they remain unchanged for years while competitors innovate.
              </p>
            </div>
            <div className="p-6 border border-accent rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Slow Digital Experiences</h3>
              <p className="text-foreground/75">
                Performance matters. Websites that load slowly, respond sluggishly, or fail to engage users create frustration and lost conversions. Speed and responsiveness are no longer nice-to-haves—they're essential.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div id="solution" data-section="solution" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Our Solution
          </h2>
          <div className="p-8 bg-card rounded-lg border border-accent">
            <p className="text-lg text-foreground/85 leading-relaxed">
              We create resilient digital experiences that adapt, perform, and inspire. Our approach combines strategic thinking, clean code, and aesthetic polish to deliver websites that don't just work—they thrive across every platform, every device, and every interaction.
            </p>
          </div>
        </div>
      </div>

      {/* Three-Phase Section */}
      <div id="phases" data-section="phases">
        <FeatureBorderGlow
          title="Our Three-Phase Approach"
          description="From discovery to launch, we follow a proven methodology to ensure your success."
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          features={[
            {
              icon: Zap,
              title: "Strategy: Find the Break",              description:
                "We discover the breaking points in your current digital experience. Through research and analysis, we identify where your website fails to adapt and where opportunities exist."},
            {
              icon: Code,
              title: "Craft: Clean Code Meets Aesthetic",              description:
                "We build with precision and beauty. Our code is clean, maintainable, and performant. Every pixel serves a purpose. Every interaction feels intentional."},
            {
              icon: CheckCircle,
              title: "Launch: Rigorous Testing",              description:
                "Before launch, we test across every device, every browser, every user scenario. We ensure your website doesn't just work—it excels."},
          ]}
        />
      </div>

      {/* Closing Team Quote */}
      <div id="closing-quote" data-section="closing-quote">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",              name: "Team Member 1",              imageSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=1"},
            {
              id: "2",              name: "Team Member 2",              imageSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=2"},
            {
              id: "3",              name: "Team Member 3",              imageSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=3"},
            {
              id: "4",              name: "Team Member 4",              imageSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=4"},
          ]}
          cardTitle="We love edge cases. They're where the magic happens."
          cardTag="Team Philosophy"
          useInvertedBackground={false}
        />
      </div>
    </ThemeProvider>
  );
}
