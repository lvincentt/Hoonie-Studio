import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  Sparkles,
  Heart,
  MessageCircle,
} from "lucide-react";

const HoonieStudio = () => {
  const [activeService, setActiveService] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPortfolio, setHoveredPortfolio] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Landing Page — Starter Presence",
      description:
        "A single-page website designed to clearly introduce who you are, what you do, and how clients can reach you.",
      points: [
        "1 focused page with clear content flow",
        "Hero, About, Services, Portfolio, Contact",
        "Ideal for early-stage creatives",
        "Simple structure, easy to maintain",
      ],
    },
    {
      title: "Basic Website (3 Pages) — Professional Foundation",
      description:
        "A small multi-page website that separates your story, services, and contact into clearer sections.",
      points: [
        "3 pages with clearer content separation",
        "More space to explain your work",
        "Better readability for visitors",
        "Suitable for growing freelancers",
      ],
    },
    {
      title: "Standard Website (5 Pages) — Serious Portfolio",
      description:
        "A complete portfolio website that allows deeper storytelling and clearer positioning.",
      points: [
        "5-page structure for balanced storytelling",
        "Dedicated portfolio experience",
        "Clear service explanations",
        "Designed for professionals seeking better clients",
      ],
    },
    {
      title: "Premium Website (7 Pages) — Complete Brand Presence",
      description:
        "An extended website structure for studios or creatives who need space for case studies and long-form content.",
      points: [
        "7-page structure with deeper content layers",
        "Case studies or insights pages",
        "More room for brand narrative",
        "Best for established practices",
      ],
    },
  ];

  const portfolioItems = [
    {
      id: 1,
      category: "School Profile",
      image: "/portfolio/SchoolProfile.png",
      url: "https://lvincentt.github.io/Profile-Sekolah/",
      tag: "Education",
    },
    {
      id: 2,
      category: "Makeup Artist Profile",
      image: "/portfolio/MakeupArtist.png",
      url: "https://lvincentt.github.io/Yeji-MUA/",
      tag: "Beauty",
    },
    {
      id: 3,
      category: "Dessert Brand E-commerce",
      image: "/portfolio/Chara.png",
      url: "https://lvincentt.github.io/Chara/",
      tag: "Food & Retail",
    },
    {
      id: 4,
      category: "Dessert Brand Profile + Chatbot",
      image: "/portfolio/TinyCrumbs.png",
      url: "https://lvincentt.github.io/Tiny-Crumbs/",
      tag: "Food Tech",
    },
    {
      id: 5,
      category: "Photographer Profile",
      image: "/portfolio/NicholeHong.png",
      url: "https://lvincentt.github.io/NicholeHong/",
      tag: "Photography",
    },
    {
      id: 6,
      category: "Coffee Shop Profile",
      image: "/portfolio/LumiCoffee.png",
      url: "https://lvincentt.github.io/Lumi-Coffee/",
      tag: "Hospitality",
    },
    {
      id: 7,
      category: "Yoga Studio",
      image: "/portfolio/Yoga.png",
      url: "https://lvincentt.github.io/Yoga/",
      tag: "Wellness",
    },
  ];

  const philosophyPoints = [
    "Dialogue over transactions",
    "Clarity over complexity",
    "Craft over shortcuts",
    "Trust over trends",
    "Long-term over quick wins",
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 antialiased">
      {/* Navigation dengan smooth transition */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-neutral-100/80 py-4 shadow-sm"
            : "bg-white/80 backdrop-blur-sm border-b border-neutral-100/50 py-5"
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-2xl font-serif tracking-tight hover:tracking-wider transition-all duration-300 hover:text-[#cbae9e] cursor-pointer"
          >
            Hoonie Studio
          </a>
          <nav className="hidden md:flex space-x-10 text-sm tracking-wider">
            {["Work", "Approach", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative py-2 hover:text-primary transition-colors duration-300"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="group relative text-sm border border-neutral-300 px-5 py-2.5 rounded-full text-neutral-700 hover:text-[#cbae9e] hover:border-[#cbae9e] transition-all duration-300 overflow-hidden inline-flex items-center hover:-translate-y-0.5 hover:shadow-sm"
          >
            {/* Text */}
            <span className="relative z-10">Start a Conversation</span>

            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-[#cbae9e]/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>

            {/* Underline effect */}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#cbae9e] group-hover:w-full transition-all duration-300"></div>
          </a>
        </div>
      </header>

      {/* Hero Section dengan animated elements */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
              <div className="w-12 h-px bg-primary animate-grow-x"></div>
              <span className="text-sm tracking-widest text-neutral-500 animate-fade-in-up">
                WEB DESIGN FOR CREATIVE PRACTICES
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-light leading-tight mb-8 animate-fade-in-up delay-100">
              Thoughtful digital spaces for
              <span className="block font-normal italic mt-2 animate-fade-in-up delay-200">
                independent voices.
              </span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed mb-12 max-w-2xl animate-fade-in-up delay-300">
              We are a small studio dedicated to building websites with
              intention. For creative professionals who value clarity, craft,
              and genuine connection over noise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
              {/* TOMBOL "View Our Work" - Scroll ke Work/Portfolio */}
              <a
                href="#work"
                className="group relative overflow-hidden inline-flex items-center justify-center px-10 py-4 rounded-full font-medium text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                style={{ backgroundColor: "#cbae9e" }}
              >
                {/* Background untuk efek hover gelap */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>

                <span className="flex items-center relative z-10 transform group-hover:scale-105 transition-transform duration-300">
                  View Our Work
                  <ArrowRight
                    className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    size={18}
                  />
                </span>
              </a>

              {/* TOMBOL "Our Philosophy" - Scroll ke Approach/About */}
              <a
                href="#approach"
                className="group relative overflow-hidden inline-flex items-center justify-center px-10 py-4 rounded-full font-medium border border-neutral-300 hover:border-[#cbae9e] hover:text-[#cbae9e] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="flex items-center relative z-10">
                  Our Philosophy
                  <Sparkles
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    size={16}
                  />
                </span>

                {/* Background overlay untuk hover */}
                <div className="absolute inset-0 bg-[#cbae9e]/0 group-hover:bg-[#cbae9e]/5 transition-all duration-300"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-1/4 right-0 w-1/3 h-2/3 bg-gradient-to-br from-primary/5 to-transparent -z-10 animate-float-slow"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border border-neutral-200/30 -z-10 animate-float"></div>

        {/* Floating accent dots */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-primary/20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 rounded-full bg-primary/10 animate-pulse delay-700"></div>
      </section>

      {/* Divider dengan animated line */}
      <div className="container-custom py-10">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent animate-line-grow"></div>
      </div>

      {/* About / Philosophy Section dengan interactive principles */}
      <section id="approach" className="py-32">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-serif font-light mb-10 leading-tight">
                We believe the web should feel
                <span className="block font-normal">
                  considered, not crowded.
                </span>
              </h2>

              <div className="space-y-6 text-neutral-600 leading-relaxed mb-10">
                <p>
                  In a world of templated solutions and loud sales pitches, we
                  offer a different pace. Hoonie Studio operates as a
                  collaborative partner, not just a service provider.
                </p>
                <p>
                  We take the time to understand{" "}
                  <strong className="text-neutral-900 relative inline-block">
                    your audience, your goals
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-primary/30"></span>
                  </strong>
                  , and the unique story of your work.
                </p>
                <p>
                  Our process is built on dialogue, clarity, and a shared
                  commitment to quality.
                </p>
              </div>

              {/* Interactive Principles */}
              <div className="space-y-4">
                {philosophyPoints.map((point, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-neutral-50/50 transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => {}}
                  >
                    <Heart
                      className="text-primary/40 group-hover:text-primary/60 transition-colors duration-300"
                      size={16}
                    />
                    <span className="text-sm text-neutral-700 group-hover:text-neutral-900 transition-colors duration-300">
                      {point}
                    </span>
                    <ChevronRight
                      className="ml-auto opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                      size={16}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Image dengan hover effect */}
            <div className="relative group">
              <div className="aspect-[4/5] rounded-xl overflow-hidden border border-neutral-100 transition-all duration-700 group-hover:scale-[1.02]">
                <img
                  src="/images/about.jpg"
                  alt="A calm, minimal creative workspace"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Accent card dengan animation */}
              <div className="absolute right-6 bottom-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-lg shadow-sm border border-neutral-100 animate-float-slow group-hover:scale-105 transition-transform duration-300">
                <div className="text-sm text-neutral-700 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  Crafting with care
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section dengan interactive cards */}
      <section id="services" className="py-32 bg-neutral-50/60">
        <div className="container-custom">
          {/* Section header */}
          <div className="text-center max-w-xl mx-auto mb-28">
            <h2 className="text-4xl font-serif font-light mb-6">
              Website Packages
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Thoughtfully structured website solutions designed to match
              different stages of your creative practice.
            </p>
          </div>

          {/* Packages layout */}
          <div className="grid gap-16 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={index}
                className="bg-white rounded-3xl border border-neutral-100 px-12 py-14 hover:shadow-xl transition-all duration-500"
              >
                {/* Title */}
                <h3 className="text-3xl font-serif mb-4 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 leading-relaxed max-w-md mb-6">
                  {service.description}
                </p>

                {/* Scope */}
                <ul className="space-y-4 max-w-md">
                  {service.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-sm text-neutral-700"
                    >
                      <CheckCircle
                        className="text-primary mt-0.5 flex-shrink-0"
                        size={16}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview dengan hover effects */}
      <section id="work" className="py-32">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h2 className="text-4xl font-serif font-light mb-4">
                Selected Work
              </h2>
              <p className="text-neutral-600 max-w-md">
                A selection of website types and layouts designed for different
                creative disciplines.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                onMouseEnter={() => setHoveredPortfolio(item.id)}
                onMouseLeave={() => setHoveredPortfolio(null)}
              >
                <article className="relative cursor-pointer">
                  {/* Image container dengan overlay */}
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-100 mb-6 relative">
                    <img
                      src={item.image}
                      alt={`${item.category} preview`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Visit tag */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Visit ↗
                    </div>

                    {/* Category tag */}
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                        {item.tag}
                      </div>
                    </div>
                  </div>

                  {/* Title dengan animated underline */}
                  <h3 className="text-xl font-serif text-neutral-900 group-hover:text-primary transition-colors duration-300 relative inline-block">
                    {item.category}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span>
                  </h3>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA dengan subtle animations */}
      <section
        id="contact"
        className="py-24 bg-neutral-900 text-white relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border animate-float-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border animate-float"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-primary animate-grow-x"></div>
              <span className="text-sm tracking-widest text-neutral-400 animate-fade-in">
                READY TO BEGIN?
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 leading-tight animate-fade-in-up">
              Let's discuss your project
            </h2>

            <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100">
              We typically start with a 30-minute, no-obligation conversation to
              understand your needs and see if we're the right fit.
            </p>

            {/* DUA TOMBOL: Email dan WhatsApp */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
              {/* Tombol Email */}
              <a
                href="mailto:hooniestudio.id@gmail.com?subject=Project Inquiry - Hoonie Studio&body=Hello Hoonie Studio,%0D%0A%0D%0AI'm interested in discussing a project with you.%0D%0A%0D%0AHere's a brief overview of what I need:%0D%0A%0D%0A%0D%0ABest regards,"
                className="group relative bg-white text-neutral-900 px-10 py-4 rounded-full font-medium transition-all duration-300 overflow-hidden hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center min-w-[200px]"
              >
                {/* Background overlay */}
                <div className="absolute inset-0 bg-[#cbae9e] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>

                {/* Teks */}
                <span className="relative z-10 flex items-center justify-center group-hover:text-white transition-colors duration-300">
                  <Mail className="mr-3" size={18} />
                  Send an Inquiry
                </span>
              </a>

              {/* Tombol WhatsApp */}
              <a
                href="https://wa.me/6285173484510?text=Hello%20Hoonie%20Studio,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20website%20project.%0A%0ACould%20we%20schedule%20a%20brief%20call%20to%20discuss%20further?"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#25D366] text-white px-10 py-4 rounded-full font-medium transition-all duration-300 overflow-hidden hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center min-w-[200px]"
              >
                {/* Background overlay untuk hover (sedikit lebih gelap) */}
                <div className="absolute inset-0 bg-[#128C7E] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>

                {/* Teks */}
                <span className="relative z-10 flex items-center justify-center">
                  <MessageCircle className="mr-3" size={18} />
                  Chat via WhatsApp
                </span>
              </a>
            </div>

            <div className="mt-20 pt-12 border-t border-neutral-800">
              <div className="grid sm:grid-cols-3 gap-8 text-sm text-neutral-400">
                <div className="flex items-center justify-center gap-3 group">
                  <Mail
                    size={16}
                    className="group-hover:text-[#cbae9e] transition-colors"
                  />
                  <a
                    href="mailto:hooniestudio.id@gmail.com"
                    className="hover:text-white transition-colors group-hover:translate-x-1 inline-block"
                  >
                    hooniestudio.id@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3 group">
                  <Phone
                    size={16}
                    className="group-hover:text-[#cbae9e] transition-colors"
                  />
                  <a
                    href="https://wa.me/6285173484510"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors group-hover:translate-x-1 inline-block"
                  >
                    +62 851-7348-4510
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3 group">
                  <MapPin
                    size={16}
                    className="group-hover:text-[#cbae9e] transition-colors"
                  />
                  <span className="group-hover:text-white transition-colors">
                    Based in Indonesia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-neutral-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-serif mb-6 md:mb-0 hover:tracking-wider transition-all duration-300">
              Hoonie Studio
            </div>
            <div className="text-sm text-neutral-500 text-center md:text-right">
              <p>
                © {new Date().getFullYear()} Hoonie Studio. A thoughtful digital
                practice.
              </p>
              <p className="text-xs mt-2 text-neutral-400">
                Crafted with intention
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom CSS untuk animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes growX {
          from {
            width: 0;
          }
          to {
            width: 48px;
          }
        }

        @keyframes lineGrow {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }

        .animate-grow-x {
          animation: growX 0.8s ease-out forwards;
        }

        .animate-line-grow {
          animation: lineGrow 1.2s ease-out forwards;
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-400 {
          animation-delay: 400ms;
        }
        .delay-700 {
          animation-delay: 700ms;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .button-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          padding: 1rem 2rem;
          border-radius: 9999px;
          font-weight: 500;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .button-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3);
        }

        .button-secondary {
          border: 1px solid #d1d5db;
          color: #374151;
          padding: 1rem 2rem;
          border-radius: 9999px;
          font-weight: 500;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .button-secondary:hover {
          border-color: #3b82f6;
          color: #3b82f6;
          transform: translateY(-2px);
        }

        .container-custom {
          max-width: 1280px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }

        @media (min-width: 768px) {
          .container-custom {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .container-custom {
            padding-left: 3rem;
            padding-right: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HoonieStudio;
