"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { BarChart3, Palette, Smartphone, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="mediumLargeSizeLargeTitles"
      background="circleGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Break Point"
          navItems={[
            { name: "Work", id: "portfolio" },
            { name: "About", id: "about" },
            { name: "Services", id: "features" },
            { name: "Contact", id: "contact" },
          ]}
          button={{ text: "Get Started", href: "#contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCentered
          title="Where Vision Meets Design Excellence"
          description="We craft minimal, modern websites that drive results. Break Point Web Studio specializes in creating beautiful, conversion-focused digital experiences that stand out."
          background={{ variant: "plain" }}
          avatars={[
            {
              src: "http://img.b2bpic.net/free-photo/serene-businessman-with-glasses_1098-719.jpg",              alt: "Team member 1"},
            {
              src: "http://img.b2bpic.net/free-photo/closeup-smiling-beautiful-adult-businesswoman_1262-1760.jpg",              alt: "Team member 2"},
            {
              src: "http://img.b2bpic.net/free-photo/smiley-front-view-business-man_23-2148763836.jpg",              alt: "Team member 3"},
          ]}
          avatarText="Trusted by 50+ brands worldwide"
          buttons={[
            { text: "View Our Work", href: "#portfolio" },
            { text: "Schedule a Call", href: "#contact" },
          ]}
          buttonAnimation="slide-up"
          ariaLabel="Hero section"
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "We believe great design is" },
            { type: "text", content: "invisible—it just works" },
          ]}
          buttons={[{ text: "Learn More", href: "#features" }]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureBorderGlow
          title="What We Deliver"
          description="Our process combines strategic thinking with creative excellence to deliver websites that convert."
          features={[
            {
              icon: Zap,
              title: "Lightning Fast",              description: "Optimized performance that loads in milliseconds. Every second counts in user experience."},
            {
              icon: Palette,
              title: "Pixel Perfect",              description: "Meticulous attention to detail in every element. Design that resonates with your audience."},
            {
              icon: Smartphone,
              title: "Fully Responsive",              description: "Beautiful on every device. Mobile-first approach ensures perfect experiences everywhere."},
            {
              icon: BarChart3,
              title: "Data Driven",              description: "Strategic design backed by analytics. Every decision supports your business goals."},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardTwo
          title="Recent Work"
          description="A selection of projects showcasing our design expertise and strategic approach."
          products={[
            {
              id: "1",              brand: "Break Point",              name: "SaaS Platform Redesign",              price: "Enterprise",              rating: 5,
              reviewCount: "12.4k views",              imageSrc: "http://img.b2bpic.net/free-psd/dark-new-year-resolutions-landing-page-template_23-2149128905.jpg",              imageAlt: "SaaS platform design"},
            {
              id: "2",              brand: "Break Point",              name: "E-Commerce Experience",              price: "Premium",              rating: 5,
              reviewCount: "8.9k views",              imageSrc: "http://img.b2bpic.net/free-psd/home-design-landing-page_23-2150443560.jpg",              imageAlt: "E-commerce website design"},
            {
              id: "3",              brand: "Break Point",              name: "Digital Agency Site",              price: "Featured",              rating: 5,
              reviewCount: "15.2k views",              imageSrc: "http://img.b2bpic.net/free-vector/flat-design-fashion-design-landing-page_23-2149909571.jpg",              imageAlt: "Agency website design"},
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Clients Say"
          description="Real feedback from brands we've partnered with to create exceptional digital experiences."
          testimonials={[
            {
              id: "1",              name: "Sarah Chen",              role: "CEO, TechFlow",              testimonial: "Break Point transformed our digital presence. Their minimal design approach increased our conversion rate by 42% in just three months.",              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1666.jpg",              imageAlt: "Sarah Chen"},
            {
              id: "2",              name: "Michael Rodriguez",              role: "Founder, CreativeHub",              testimonial: "Working with Break Point was seamless. They understood our vision instantly and delivered a website that truly represents our brand.",              imageSrc: "http://img.b2bpic.net/free-photo/african-american-young-man-wearing-jacket-checkered-shirt-looking-camera-studio_613910-21142.jpg",              imageAlt: "Michael Rodriguez"},
            {
              id: "3",              name: "Emma Watson",              role: "Marketing Director, InnovateLab",              testimonial: "The attention to detail and performance optimization was outstanding. Our site now loads 3x faster with a cleaner design.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-businessman-holding-bottle-beer-after-work-office-fun-activity-with-colleagues-cheerful-person-drinking-alcoholic-beverage-while-celebrating-with-friends-after-hours_482257-27455.jpg",              imageAlt: "Emma Watson"},
            {
              id: "4",              name: "David Kim",              role: "Product Manager, StartupXYZ",              testimonial: "Break Point doesn't just build websites—they create strategic digital assets. Highly recommended for any brand serious about growth.",              imageSrc: "http://img.b2bpic.net/free-photo/male-executive-with-glasses_1098-760.jpg",              imageAlt: "David Kim"},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Let's Connect"
          title="Ready to break the mold?"
          description="Get in touch with our team to discuss your next project. We're excited to help you create something extraordinary."
          tagIcon={Zap}
          tagAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="your@email.com"
          buttonText="Start Conversation"
          termsText="We respect your privacy. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Product",              items: [
                { label: "Services", href: "#features" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Process", href: "#about" },
              ],
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
                { label: "Blog", href: "#" },
              ],
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
              ],
            },
          ]}
          bottomLeftText="© 2025 Break Point Web Studio. All rights reserved."
          bottomRightText="Crafted with precision and passion."
        />
      </div>
    </ThemeProvider>
  );
}