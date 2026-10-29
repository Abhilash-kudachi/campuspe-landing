"use client";

import { useState } from "react";

const navLinks = [
  { label: "For Students", href: "#students" },
  { label: "For Partners", href: "#partners" },
  { label: "About Us", href: "#about" },
  { label: "FAQs", href: "#faqs" }
];

const benefits = [
  { icon: "✦", title: "Made for student life", text: "Useful tools and offers designed around the way students live, learn and grow." },
  { icon: "↗", title: "More value every day", text: "Discover opportunities that help you get more from your everyday spending." },
  { icon: "⌂", title: "Everything in one place", text: "A simpler way to explore student-focused benefits and services." }
];

const steps = [
  { number: "01", title: "Sign up in minutes", text: "Create your account with a few simple details." },
  { number: "02", title: "Explore what you need", text: "Browse student benefits, offers and useful services." },
  { number: "03", title: "Enjoy your campus life", text: "Find more ways to make your student journey count." }
];

const faqs = [
  { q: "What is CampusPe?", a: "CampusPe is a student-focused platform designed to make campus life simpler by bringing useful offers and services together." },
  { q: "Who can use CampusPe?", a: "CampusPe is designed primarily for students. The exact eligibility requirements may vary by service or offer." },
  { q: "How do I get started?", a: "Choose Get Started and follow the sign-up instructions. You can explore the platform to see the services available to you." },
  { q: "Is CampusPe available on mobile?", a: "This landing page is responsive and works on mobile, tablet and desktop. Check the official CampusPe channels for current app availability." }
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

function Button({ children, href = "#get-started", variant = "primary", onClick, ...props }) {
  return <a className={`button button-${variant}`} href={href} onClick={onClick} {...props}>{children}<Arrow diagonal={variant === "outline"} /></a>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-shell container">
        <a className="brand" href="#top" aria-label="CampusPe home">
          <span className="brand-mark">C</span><span>Campus<span className="brand-pe">Pe</span></span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          {navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
          <Button href="#get-started" onClick={() => setMenuOpen(false)}>Get Started</Button>
        </nav>
      </div>
    </header>
  );
}

function HeroArt() {
  return (
    <div className="hero-art" aria-label="Illustration of a student-friendly digital platform" role="img">
      <div className="art-orbit orbit-one"></div><div className="art-orbit orbit-two"></div>
      <div className="float-chip chip-top"><span className="chip-icon">✦</span><span><b>Student perks</b><small>Made for you</small></span></div>
      <div className="phone">
        <div className="phone-speaker"></div>
        <div className="phone-screen">
          <div className="screen-top"><span className="mini-logo">C</span><span className="screen-dots">•••</span></div>
          <p className="screen-greeting">Hey, student! 👋</p>
          <div className="screen-balance"><small>Your CampusPe benefits</small><strong>All in one place</strong><span className="balance-pill">Explore now ↗</span></div>
          <div className="screen-label">Discover for you</div>
          <div className="screen-card-row"><div className="screen-card lavender"><span>✦</span><small>Exclusive<br/>offers</small></div><div className="screen-card mint"><span>↗</span><small>Student<br/>deals</small></div></div>
          <div className="screen-line"></div><div className="screen-line short"></div>
          <div className="screen-list"><span className="list-icon">◎</span><span><b>Campus essentials</b><small>Explore useful services</small></span><span>›</span></div>
          <div className="screen-list"><span className="list-icon peach">✧</span><span><b>Offers for you</b><small>Find something new</small></span><span>›</span></div>
        </div>
      </div>
      <div className="float-chip chip-bottom"><span className="round-check">✓</span><span><b>Your campus, upgraded</b><small>Little things. Big difference.</small></span></div>
      <div className="spark spark-a">✦</div><div className="spark spark-b">✧</div><div className="spark spark-c">•</div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, text, centered = true }) {
  return <div className={`section-heading ${centered ? "centered" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function Benefits() {
  return <section className="section benefits-section" id="students"><div className="container">
    <SectionHeading eyebrow="THE CAMPUSPE DIFFERENCE" title={<>Student life, made a little <span className="text-blue">easier.</span></>} text="Your time at college should be about the experiences that matter. We help make the everyday simpler." />
    <div className="benefit-grid">{benefits.map((item, i) => <article className="benefit-card" key={item.title}><span className={`benefit-icon icon-${i}`}>{item.icon}</span><h3>{item.title}</h3><p>{item.text}</p><a href="#get-started" className="text-link">Explore more <Arrow /></a></article>)}</div>
  </div></section>;
}

function HowItWorks() {
  return <section className="section how-section" id="about"><div className="container how-grid">
    <div className="how-copy"><SectionHeading centered={false} eyebrow="GETTING STARTED" title={<>Your next chapter starts <span className="text-blue">here.</span></>} text="Getting started should be easy. A few simple steps can help you discover more of what CampusPe has to offer."/><Button href="#get-started">Let's get started</Button></div>
    <div className="steps-list">{steps.map((step, i) => <article className="step" key={step.number}><span className="step-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><span className="step-arrow">↗</span></article>)}</div>
  </div></section>;
}

function FeatureBand() {
  return <section className="feature-band" id="partners"><div className="container feature-inner"><div className="feature-copy"><span className="eyebrow eyebrow-light">BUILT AROUND YOU</span><h2>Big campus energy.<br/><span>Smarter everyday choices.</span></h2><p>From everyday essentials to new opportunities, discover a platform that keeps student life at the centre.</p><Button href="#get-started" variant="light">Discover CampusPe</Button></div><div className="feature-visual"><div className="feature-circle circle-back"></div><div className="feature-ticket"><span className="ticket-spark">✦</span><small>YOUR CAMPUS PERKS</small><strong>More of what<br/>you love.</strong><div className="ticket-footer"><span>CampusPe</span><span>✧ ✧ ✧</span></div></div><div className="feature-sticker sticker-one">For students ✦</div><div className="feature-sticker sticker-two">Make it count ↗</div></div></div></section>;
}

function Testimonial() {
  return <section className="section quote-section"><div className="container"><div className="quote-card"><div className="quote-mark">“</div><p className="quote-text">College is full of possibilities. The little things should make it easier to enjoy them.</p><div className="quote-divider"></div><div className="quote-caption"><span className="quote-avatar">C</span><span><b>The CampusPe team</b><small>Here for your campus journey</small></span></div><div className="quote-decoration deco-one"></div><div className="quote-decoration deco-two"></div></div></div></section>;
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return <section className="section faq-section" id="faqs"><div className="container faq-grid"><div><SectionHeading centered={false} eyebrow="GOT QUESTIONS?" title={<>A few things you<br/>might be <span className="text-blue">wondering.</span></>} text="Here's a little more information to help you get started."/><a className="text-link faq-contact" href="mailto:hello@campuspe.com">Still have questions? Get in touch <Arrow /></a></div><div className="faq-list">{faqs.map((faq, i) => <article className={`faq-item ${open === i ? "faq-open" : ""}`} key={faq.q}><button className="faq-question" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}><span>{faq.q}</span><span className="faq-plus">{open === i ? "−" : "+"}</span></button>{open === i && <p className="faq-answer">{faq.a}</p>}</article>)}</div></div></section>;
}

function FinalCTA() {
  return <section className="final-cta" id="get-started"><div className="container final-cta-inner"><div className="cta-orb cta-orb-one"></div><div className="cta-orb cta-orb-two"></div><span className="eyebrow eyebrow-light">YOUR CAMPUS JOURNEY</span><h2>Ready to make campus life<br/><span>more rewarding?</span></h2><p>Start exploring what CampusPe can do for you.</p><Button href="mailto:hello@campuspe.com" variant="light">Get in touch</Button><small className="cta-note">A better campus experience starts here.</small></div></section>;
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-main"><div className="footer-about"><a className="brand footer-brand" href="#top"><span className="brand-mark">C</span><span>Campus<span className="brand-pe">Pe</span></span></a><p>Making the student journey a little easier, one step at a time.</p><div className="social-links"><a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a><a href="https://www.instagram.com/" aria-label="Instagram">◎</a><a href="https://www.youtube.com/" aria-label="YouTube">▶</a></div></div><div className="footer-column"><h3>Explore</h3><a href="#students">For Students</a><a href="#partners">For Partners</a><a href="#about">About Us</a></div><div className="footer-column"><h3>Support</h3><a href="#faqs">FAQs</a><a href="mailto:hello@campuspe.com">Contact Us</a><a href="#get-started">Get Started</a></div><div className="footer-column"><h3>Legal</h3><a href="mailto:hello@campuspe.com?subject=Privacy%20Policy">Privacy Policy</a><a href="mailto:hello@campuspe.com?subject=Terms%20of%20Use">Terms of Use</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} CampusPe. All rights reserved.</span><a href="#top">Back to top ↑</a></div></footer>;
}

export default function Home() {
  return <main id="top"><Header/><section className="hero"><div className="container hero-grid"><div className="hero-copy"><span className="eyebrow"><span className="eyebrow-dot"></span> YOUR CAMPUS. YOUR WAY.</span><h1>Make your campus life <span className="hero-highlight">count.</span></h1><p className="hero-description">A smarter way to discover student benefits, explore new possibilities and make the most of every campus moment.</p><div className="hero-actions"><Button href="#get-started">Get started</Button><a className="secondary-link" href="#about">See how it works <span>↓</span></a></div><div className="hero-proof"><div className="proof-avatars"><span>A</span><span>S</span><span>R</span><span>+</span></div><div><strong>Made for the student journey</strong><small>Thoughtful tools. More possibilities.</small></div></div></div><HeroArt/></div><div className="hero-bottom container"><span>MADE FOR STUDENTS</span><span className="hero-bottom-line"></span><span>BUILT FOR WHAT'S NEXT <span className="text-blue">✦</span></span></div></section><Benefits/><HowItWorks/><FeatureBand/><Testimonial/><FAQ/><FinalCTA/><Footer/></main>;
}
