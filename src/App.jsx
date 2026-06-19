import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion as Motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  CircleGauge,
  Cog,
  Container,
  FileCheck2,
  FlaskConical,
  Gem,
  Globe2,
  Handshake,
  LockKeyhole,
  Menu,
  Paperclip,
  Route,
  ShieldCheck,
  Ship,
  SlidersHorizontal,
  Waves,
  X,
} from "lucide-react";

const copy = {
  en: {
    nav: {
      about: "About",
      divisions: "Divisions",
      capabilities: "Capabilities",
      industries: "Industries",
      network: "Network",
      trust: "Trust",
      contact: "Contact",
    },
    partnership: "Request Partnership",
    heroTitle: "Strategic Energy & Industrial Supply Partner",
    heroSub:
      "Oil & Gas Equipment | Petrochemical Supply | Copper Export | Offshore & Drilling Solutions",
    explore: "Explore Capabilities",
    scroll: "Discover",
    aboutTitle: "Engineering Value.\nDelivering Impact.",
    aboutP1:
      "Khobregan Energy operates at the intersection of energy, industrial supply chains and international trade.",
    aboutLink: "Discover Our Story",
    divisionsLabel: "Core Divisions",
    divisionsTitle: "Six divisions. One execution standard.",
    discoverDivision: "Discover division",
    capabilitiesLabel: "Capabilities",
    capabilitiesTitle: "Operational control.\nGlobal execution.",
    capabilitiesBody:
      "An integrated execution system governing every stage from supplier identification and technical review to delivery, finance and risk.",
    capabilitiesStatus: "Integrated execution system",
    capabilitiesCount: "06 operational controls",
    industriesLabel: "Industries Served",
    industriesTitle: "Across the industrial value chain.",
    networkLabel: "Global Network",
    networkTitle: "Connected to the World.\nCommitted to You.",
    networkBody:
      "A disciplined trading network connecting strategic supply, industrial expertise and critical logistics corridors across key global markets.",
    trustLabel: "Trust & Scale",
    trustTitle: "Built for consequential mandates.",
    contactTitle: "Let’s structure the next mandate.",
    contactBody:
      "Share your requirements with our team. We handle each inquiry with precision, discretion and urgency.",
    formTitle: "RFQ / Partnership",
    formSubtitle: "Tell us about your requirement",
    fullName: "Full Name",
    company: "Company",
    email: "Work Email",
    phone: "Phone / WhatsApp",
    interest: "Area of Interest",
    region: "Region",
    details: "Requirement Details",
    attach: "Attach RFQ or technical documents",
    submit: "Submit confidential inquiry",
    confidential:
      "All submissions are treated with strict confidentiality. Our team will respond promptly.",
    sentTitle: "Inquiry received.",
    sentBody:
      "Thank you. A Khobregan Energy representative will review your requirement and contact you directly.",
    footerLine: "Strategic Energy & Industrial Supply Partner",
    rights: "© 2026 Khobregan Energy. All rights reserved.",
    required: "Please complete the required fields.",
  },
  fa: {
    nav: {
      about: "درباره ما",
      divisions: "حوزه‌های فعالیت",
      capabilities: "توانمندی‌ها",
      industries: "صنایع",
      network: "شبکه جهانی",
      trust: "اعتماد و مقیاس",
      contact: "تماس",
    },
    partnership: "درخواست همکاری",
    heroTitle: "شریک راهبردی تأمین انرژی و صنایع",
    heroSub:
      "تجهیزات نفت و گاز | تأمین پتروشیمی | صادرات مس | راهکارهای حفاری و فراساحل",
    explore: "مشاهده توانمندی‌ها",
    scroll: "بیشتر",
    aboutTitle: "خلق ارزش مهندسی.\nتحقق اثری ماندگار.",
    aboutP1:
      "انرژی خبرگان در نقطه تلاقی انرژی، زنجیره‌های تأمین صنعتی و تجارت بین‌المللی فعالیت می‌کند.",
    aboutLink: "داستان ما را کشف کنید",
    divisionsLabel: "حوزه‌های اصلی",
    divisionsTitle: "شش حوزه. یک استاندارد اجرایی.",
    discoverDivision: "مشاهده حوزه",
    capabilitiesLabel: "توانمندی‌ها",
    capabilitiesTitle: "کنترل عملیاتی.\nاجرای جهانی.",
    capabilitiesBody:
      "سیستمی یکپارچه برای مدیریت تمام مراحل؛ از شناسایی تأمین‌کننده و بررسی فنی تا تحویل، تأمین مالی و کنترل ریسک.",
    capabilitiesStatus: "سیستم یکپارچه اجرا",
    capabilitiesCount: "۰۶ کنترل عملیاتی",
    industriesLabel: "صنایع تحت پوشش",
    industriesTitle: "در سراسر زنجیره ارزش صنعتی.",
    networkLabel: "شبکه جهانی",
    networkTitle: "متصل به جهان.\nمتعهد به شما.",
    networkBody:
      "شبکه‌ای منضبط برای اتصال تأمین راهبردی، تخصص صنعتی و کریدورهای حیاتی لجستیک در بازارهای کلیدی جهان.",
    trustLabel: "اعتماد و مقیاس",
    trustTitle: "برای مأموریت‌های بزرگ و حساس.",
    contactTitle: "مأموریت بعدی را با هم ساختار دهیم.",
    contactBody:
      "نیازمندی خود را با تیم ما در میان بگذارید. هر درخواست با دقت، محرمانگی و فوریت بررسی می‌شود.",
    formTitle: "درخواست قیمت / همکاری",
    formSubtitle: "درباره نیاز خود بگویید",
    fullName: "نام و نام خانوادگی",
    company: "شرکت",
    email: "ایمیل کاری",
    phone: "تلفن / واتس‌اپ",
    interest: "حوزه مورد نظر",
    region: "منطقه",
    details: "شرح نیازمندی",
    attach: "پیوست RFQ یا مدارک فنی",
    submit: "ارسال محرمانه درخواست",
    confidential:
      "تمامی درخواست‌ها کاملاً محرمانه بررسی می‌شوند و تیم ما در کوتاه‌ترین زمان پاسخ خواهد داد.",
    sentTitle: "درخواست شما دریافت شد.",
    sentBody:
      "سپاسگزاریم. نماینده انرژی خبرگان نیازمندی شما را بررسی کرده و مستقیماً با شما تماس خواهد گرفت.",
    footerLine: "شریک راهبردی تأمین انرژی و صنایع",
    rights: "© ۲۰۲۶ انرژی خبرگان. تمامی حقوق محفوظ است.",
    required: "لطفاً فیلدهای ضروری را تکمیل کنید.",
  },
};

const divisions = {
  en: [
    ["Oil & Gas Equipment Supply", "Mission-critical equipment, packages and spare parts for upstream, midstream and downstream operations."],
    ["Petrochemical Procurement", "Structured sourcing of process equipment, chemicals, catalysts and technical materials."],
    ["Copper & Metals Export", "Reliable access to copper and industrial metals with disciplined quality and export execution."],
    ["Drilling Rigs & Offshore Solutions", "Integrated equipment, marine support and supply solutions for drilling and offshore programs."],
    ["Industrial Project Facilitation", "Commercial and technical coordination for complex industrial packages and EPC requirements."],
    ["International Trade & Logistics", "Cross-border contract execution, multimodal logistics and document control across key corridors."],
  ],
  fa: [
    ["تأمین تجهیزات نفت و گاز", "تجهیزات، پکیج‌ها و قطعات حیاتی برای عملیات بالادست، میان‌دست و پایین‌دست."],
    ["تأمین پتروشیمی", "تأمین ساختاریافته تجهیزات فرایندی، مواد شیمیایی، کاتالیست‌ها و اقلام فنی."],
    ["صادرات مس و فلزات", "دسترسی مطمئن به مس و فلزات صنعتی با کنترل کیفیت و اجرای منضبط صادرات."],
    ["دکل‌های حفاری و راهکارهای فراساحل", "تجهیزات یکپارچه، پشتیبانی دریایی و تأمین برنامه‌های حفاری و فراساحل."],
    ["تسهیل پروژه‌های صنعتی", "هماهنگی تجاری و فنی برای پکیج‌های پیچیده صنعتی و نیازهای EPC."],
    ["تجارت بین‌المللی و لجستیک", "اجرای قراردادهای فرامرزی، لجستیک چندوجهی و کنترل اسناد در مسیرهای کلیدی."],
  ],
};

const capabilities = {
  en: [
    ["Global Sourcing", "Qualified access to manufacturers, producers and specialist supply markets across critical trade corridors.", ["Supplier intelligence", "Multi-market access"]],
    ["Technical Procurement", "Specification-led procurement coordinated with engineering, commercial and project requirements.", ["Technical evaluation", "Vendor coordination"]],
    ["Quality Control", "Structured inspection, documentation and release procedures before goods enter the delivery chain.", ["Inspection planning", "Document control"]],
    ["Logistics & Clearance", "Multimodal movement, customs coordination and shipment visibility across international borders.", ["Route engineering", "Customs readiness"]],
    ["Contract & Finance", "Commercial structures aligned with delivery milestones, payment instruments and transaction requirements.", ["Contract architecture", "Payment structuring"]],
    ["Risk Management", "Active control of counterparty, compliance, delivery and market exposure throughout execution.", ["Exposure monitoring", "Execution safeguards"]],
  ],
  fa: [
    ["تأمین جهانی", "دسترسی ارزیابی‌شده به سازندگان، تولیدکنندگان و بازارهای تخصصی در کریدورهای حیاتی تجارت.", ["شناخت تأمین‌کننده", "دسترسی چندبازاری"]],
    ["خرید فنی", "خرید مبتنی بر مشخصات فنی با هماهنگی کامل میان الزامات مهندسی، تجاری و پروژه.", ["ارزیابی فنی", "هماهنگی فروشنده"]],
    ["کنترل کیفیت", "بازرسی، مستندسازی و فرایندهای آزادسازی ساختاریافته پیش از ورود کالا به زنجیره تحویل.", ["برنامه بازرسی", "کنترل اسناد"]],
    ["لجستیک و ترخیص", "حمل‌ونقل چندوجهی، هماهنگی گمرکی و پایش محموله در مسیرهای بین‌المللی.", ["مهندسی مسیر", "آمادگی گمرکی"]],
    ["قرارداد و تأمین مالی", "ساختارهای تجاری هماهنگ با مراحل تحویل، ابزارهای پرداخت و الزامات معامله.", ["معماری قرارداد", "ساختاردهی پرداخت"]],
    ["مدیریت ریسک", "کنترل فعال ریسک طرف معامله، انطباق، تحویل و بازار در تمام مراحل اجرا.", ["پایش مواجهه", "ضمانت‌های اجرایی"]],
  ],
};

const industries = {
  en: [
    ["Oil & Gas", "Equipment and supply programs for upstream and midstream operations."],
    ["Petrochemical", "Technical procurement across complex process environments."],
    ["Mining & Metals", "Materials, machinery and export execution for industrial metals."],
    ["Refineries", "Critical equipment and materials for demanding refinery operations."],
    ["Power Plants", "Industrial components and packages supporting reliable generation."],
    ["EPC Projects", "Coordinated supply and commercial support for project delivery."],
  ],
  fa: [
    ["نفت و گاز", "برنامه‌های تأمین تجهیزات برای عملیات بالادست و میان‌دست."],
    ["پتروشیمی", "خرید فنی برای محیط‌های پیچیده فرایندی."],
    ["معدن و فلزات", "مواد، ماشین‌آلات و اجرای صادرات فلزات صنعتی."],
    ["پالایشگاه‌ها", "تجهیزات و مواد حیاتی برای عملیات دشوار پالایشی."],
    ["نیروگاه‌ها", "قطعات و پکیج‌های صنعتی برای تولید پایدار انرژی."],
    ["پروژه‌های EPC", "تأمین هماهنگ و پشتیبانی تجاری برای تحویل پروژه."],
  ],
};

const networkRegions = {
  en: [
    ["Middle East", "Strategic access across the region’s energy, industrial and logistics ecosystems.", 59, 54],
    ["Turkey", "A manufacturing and transit hub connecting Europe, the CIS and the Middle East.", 55, 47],
    ["Europe", "Specialist manufacturers, engineering partners and compliance-led sourcing.", 47, 40],
    ["CIS", "Access to industrial producers and cross-border corridors across Eurasia.", 67, 34],
    ["China", "Deep manufacturing reach across equipment, materials and industrial technology.", 76, 51],
    ["Africa", "Growing mining, infrastructure and energy relationships across key markets.", 51, 63],
  ],
  fa: [
    ["خاورمیانه", "دسترسی راهبردی به اکوسیستم‌های انرژی، صنعت و لجستیک منطقه.", 59, 54],
    ["ترکیه", "هاب تولید و ترانزیت میان اروپا، CIS و خاورمیانه.", 55, 47],
    ["اروپا", "سازندگان تخصصی، شرکای مهندسی و تأمین مبتنی بر انطباق.", 47, 40],
    ["CIS", "ارتباط با تولیدکنندگان صنعتی و کریدورهای فرامرزی اوراسیا.", 67, 34],
    ["چین", "دسترسی عمیق به تولیدکنندگان تجهیزات، مواد و فناوری صنعتی.", 76, 51],
    ["آفریقا", "روابط رو به رشد در معدن، زیرساخت و انرژی در بازارهای کلیدی.", 51, 63],
  ],
};

const trustItems = {
  en: [
    ["Strategic Access", "Trusted relationships with producers, manufacturers and decision makers across key global markets.", Handshake],
    ["Cross-Border Execution", "Seamless coordination across jurisdictions to deliver complex transactions and supply programs.", Route],
    ["Enterprise-Grade Operations", "Rigorous processes, quality control and compliance built for demanding industries.", ShieldCheck],
    ["Confidential Deal Structuring", "Discretion, integrity and tailored structures that protect sensitive mandates.", LockKeyhole],
  ],
  fa: [
    ["دسترسی راهبردی", "روابط قابل اعتماد با تولیدکنندگان، سازندگان و تصمیم‌گیران در بازارهای کلیدی جهان.", Handshake],
    ["اجرای فرامرزی", "هماهنگی یکپارچه میان حوزه‌های قضایی برای معاملات و برنامه‌های تأمین پیچیده.", Route],
    ["عملیات در مقیاس سازمانی", "فرایندهای دقیق، کنترل کیفیت و انطباق برای صنایع سخت‌گیر.", ShieldCheck],
    ["ساختاردهی محرمانه معاملات", "محرمانگی، یکپارچگی و ساختارهای اختصاصی برای حفاظت از مأموریت‌های حساس.", LockKeyhole],
  ],
};

const aboutCards = {
  en: [
    ["Reliable Supply", "/assets/about-reliable-supply.webp"],
    ["Technical Expertise", "/assets/about-technical-expertise.webp"],
    ["Global Logistics", "/assets/about-global-logistics.webp"],
    ["Trusted Partner", "/assets/about-trusted-partner.webp"],
  ],
  fa: [
    ["تأمین قابل اعتماد", "/assets/about-reliable-supply.webp"],
    ["تخصص فنی", "/assets/about-technical-expertise.webp"],
    ["لجستیک جهانی", "/assets/about-global-logistics.webp"],
    ["شریک مورد اعتماد", "/assets/about-trusted-partner.webp"],
  ],
};

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Brand({ compact = false }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""}`} href="#top" aria-label="Khobregan Energy home">
      <img src="/assets/kec-mark.png" alt="" />
      <span className="brand__divider" />
      <span className="brand__name">KHOBREGAN<br />ENERGY</span>
    </a>
  );
}

function SectionIntro({ label, title, centered = false }) {
  return (
    <div className={`section-intro ${centered ? "section-intro--centered" : ""}`} data-reveal>
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
    </div>
  );
}

function Header({ lang, setLang, t }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const close = () => setOpen(false);
  const nav = Object.entries(t.nav);
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <Brand compact />
      <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
        {nav.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={close}>{label}</a>
        ))}
        <a className="nav-partnership mobile-only" href="#contact" onClick={close}>{t.partnership}</a>
      </nav>
      <div className="header-actions">
        <button className="language-switch" onClick={() => setLang(lang === "en" ? "fa" : "en")} aria-label="Switch language">
          <span className={lang === "en" ? "active" : ""}>EN</span>
          <i />
          <span className={lang === "fa" ? "active" : ""}>فا</span>
        </button>
        <a className="nav-partnership desktop-only" href="#contact">{t.partnership}</a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function Hero({ t }) {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise) playPromise.catch(() => {});
    };
    playVideo();
    document.addEventListener("visibilitychange", playVideo);
    return () => document.removeEventListener("visibilitychange", playVideo);
  }, []);
  return (
    <section className="hero" id="top">
      <video
        ref={videoRef}
        className="hero__video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/assets/hero.webp"
        aria-hidden="true"
        onCanPlay={(event) => event.currentTarget.play().catch(() => {})}
      >
        <source src="/assets/khobregan-hero.mp4" type="video/mp4" />
      </video>
      <div className="hero__shade" />
      <div className="hero__grid" />
      <div className="hero__content">
        <h1 data-reveal>{t.heroTitle}</h1>
        <div className="hero__rule" data-reveal />
        <p data-reveal>{t.heroSub}</p>
        <div className="hero__actions" data-reveal>
          <a className="button button--gold" href="#capabilities">{t.explore}<ArrowRight /></a>
          <a className="button button--outline" href="#contact">{t.partnership}<ArrowRight /></a>
        </div>
      </div>
      <a className="hero__scroll" href="#about"><span>{t.scroll}</span><ArrowDown /></a>
      <div className="hero__rail" aria-hidden="true"><i /><i /><i /><i /></div>
    </section>
  );
}

function About({ lang, t }) {
  return (
    <section className="about section" id="about">
      <div className="about__copy" data-reveal>
        <h2>{t.aboutTitle.split("\n").map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</h2>
        <div className="about__body">
          <p>{t.aboutP1}</p>
          <a className="text-link" href="#divisions">{t.aboutLink}<ArrowRight /></a>
        </div>
      </div>
      <div className="about__cards" data-reveal>
        {aboutCards[lang].map(([title, image], index) => (
          <article className="about-card" key={title}>
            <img src={image} alt="" loading="lazy" />
            <div className="about-card__shade" />
            <div className="about-card__meta">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const divisionIcons = [Cog, FlaskConical, Gem, Waves, Building2, Container];

function Divisions({ lang, t }) {
  const items = divisions[lang];
  return (
    <section className="divisions section" id="divisions">
      <SectionIntro label={t.divisionsLabel} title={t.divisionsTitle} />
      <div className="division-cards" data-reveal>
        {items.map(([title, description], index) => {
          const DivisionIcon = divisionIcons[index];
          return (
            <a className="division-card" href="#contact" key={title}>
              <div className="division-card__top">
                <span className="division-card__number">{String(index + 1).padStart(2, "0")}</span>
                <DivisionIcon aria-hidden="true" />
              </div>
              <div className="division-card__content">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <div className="division-card__action">
                <span>{t.discoverDivision}</span>
                <ArrowRight />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

const capabilityIcons = [Globe2, SlidersHorizontal, FileCheck2, Route, Handshake, ShieldCheck];
const capabilityOrbit = [
  { x: 50, y: 7 },
  { x: 86, y: 27 },
  { x: 86, y: 73 },
  { x: 50, y: 93 },
  { x: 14, y: 73 },
  { x: 14, y: 27 },
];

function Capabilities({ lang, t }) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const [title, description, controls] = capabilities[lang][active];
  const ActiveIcon = capabilityIcons[active];

  return (
    <section className="capabilities section" id="capabilities">
      <div className="capabilities__header">
        <SectionIntro label={t.capabilitiesLabel} title={t.capabilitiesTitle} />
        <div className="capabilities__summary" data-reveal>
          <p>{t.capabilitiesBody}</p>
          <div className="capabilities__status">
            <span><i />{t.capabilitiesStatus}</span>
            <span>{t.capabilitiesCount}</span>
          </div>
        </div>
      </div>
      <div className="capability-system" data-reveal>
        <nav className="capability-rail" aria-label={t.capabilitiesLabel}>
          {capabilities[lang].map(([itemTitle], index) => (
            <button
              className={active === index ? "active" : ""}
              key={itemTitle}
              onClick={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              aria-pressed={active === index}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{itemTitle}</strong>
              {active === index ? <Motion.i layoutId="capability-rail-active" /> : null}
            </button>
          ))}
        </nav>

        <div className="capability-orbit" aria-label={`${title} — ${description}`}>
          <Motion.div
            className="capability-orbit__halo"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 36, ease: "linear", repeat: Infinity }}
          />
          <svg className="capability-orbit__links" viewBox="0 0 100 100" aria-hidden="true">
            {capabilityOrbit.map((position, index) => (
              <Motion.line
                animate={{ opacity: active === index ? 1 : 0.18, pathLength: active === index ? 1 : 0.72 }}
                initial={false}
                key={`${position.x}-${position.y}`}
                transition={{ duration: reduceMotion ? 0 : 0.55 }}
                x1="50"
                y1="50"
                x2={position.x}
                y2={position.y}
              />
            ))}
          </svg>
          <Motion.div
            className="capability-orbit__core"
            animate={reduceMotion ? undefined : { boxShadow: ["0 0 0 0 rgba(201,148,75,.1)", "0 0 0 18px rgba(201,148,75,0)", "0 0 0 0 rgba(201,148,75,.1)"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <AnimatePresence mode="wait">
              <Motion.div
                key={title}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.78, rotate: -12 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.78, rotate: 12 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <ActiveIcon aria-hidden="true" />
                <span>{String(active + 1).padStart(2, "0")}</span>
              </Motion.div>
            </AnimatePresence>
          </Motion.div>
          {capabilities[lang].map(([itemTitle], index) => {
            const Icon = capabilityIcons[index];
            const position = capabilityOrbit[index];
            return (
              <Motion.button
                animate={{ scale: active === index ? 1.12 : 1, opacity: active === index ? 1 : 0.56, x: "-50%", y: "-50%" }}
                className={active === index ? "orbit-node active" : "orbit-node"}
                key={itemTitle}
                onClick={() => setActive(index)}
                onFocus={() => setActive(index)}
                style={{ left: `${position.x}%`, top: `${position.y}%` }}
                transition={{ type: "spring", stiffness: 310, damping: 23 }}
                aria-label={itemTitle}
                aria-pressed={active === index}
              >
                <Icon aria-hidden="true" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </Motion.button>
            );
          })}
          <div className="capability-orbit__label" aria-hidden="true">KHOBREGAN / EXECUTION CORE</div>
        </div>

        <div className="capability-detail" aria-live="polite">
          <div className="capability-detail__counter">
            <span>{String(active + 1).padStart(2, "0")}</span>
            <i />
            <span>06</span>
          </div>
          <AnimatePresence mode="wait">
            <Motion.article
              key={title}
              initial={reduceMotion ? false : { opacity: 0, x: lang === "fa" ? -28 : 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, x: lang === "fa" ? 20 : -20 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <ActiveIcon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="capability-detail__controls">
                {controls.map((control) => <span key={control}><Check />{control}</span>)}
              </div>
            </Motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Industries({ lang, t }) {
  const [active, setActive] = useState(3);
  return (
    <section className="industries section" id="industries">
      <SectionIntro label={t.industriesLabel} title={t.industriesTitle} />
      <div className="industry-panels" data-reveal>
        {industries[lang].map(([title, description], index) => (
          <button
            key={title}
            className={active === index ? "active" : ""}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
            style={{ "--panel-position": `${index * 20}%` }}
          >
            <span className="industry-panels__number">0{index + 1}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

function Network({ lang, t }) {
  const regions = networkRegions[lang];
  const [networkLineOne, networkLineTwo] = t.networkTitle.split("\n");
  const networkLineOneParts = lang === "en" ? ["Connected to", "the World."] : [networkLineOne];
  return (
    <section className="network section" id="network">
      <div className="network-brand" data-reveal>
        <Brand compact />
      </div>
      <div className="network-layout">
        <div className="network-editorial" data-reveal>
          <div className="network-rail" aria-hidden="true"><i /><span /><span /><span /><span /><span /><b /></div>
          <div className="section-intro">
            <span className="section-label">{t.networkLabel}</span>
            <h2>
              <span>{networkLineOneParts.map((part) => <em key={part}>{part}</em>)}</span>
              <strong>{networkLineTwo}</strong>
            </h2>
          </div>
          <p>{t.networkBody}</p>
          <div className="network-region-list">
            {regions.map(([name], index) => (
              <div className={index === 0 ? "hub" : ""} key={name}>
                <i />
                <strong>{name}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="network-artwork" data-reveal>
          <img src="/assets/global-network-reference-map.webp" alt="Khobregan Energy trade routes from the Middle East to Turkey, Europe, CIS, China and Africa" />
        </div>
      </div>
    </section>
  );
}

function Trust({ lang, t }) {
  return (
    <section className="trust section" id="trust">
      <SectionIntro label={t.trustLabel} title={t.trustTitle} />
      <div className="trust-grid" data-reveal>
        {trustItems[lang].map(([title, description, TrustIcon], index) => (
          <article key={title}>
            <span className="trust-number">0{index + 1}</span>
            <TrustIcon />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact({ lang, t }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [file, setFile] = useState("");
  const formRef = useRef(null);
  const onSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (!form.get("name") || !form.get("company") || !form.get("email") || !form.get("details")) {
      setError(t.required);
      return;
    }
    setError("");
    setSent(true);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const options = divisions[lang].map(([title]) => title);
  const regions = networkRegions[lang].map(([name]) => name);
  return (
    <section className="contact" id="contact" ref={formRef}>
      <div className="contact-hero">
        <div className="contact-hero__image" />
        <div className="contact-hero__content" data-reveal>
          <h2>{t.contactTitle}</h2>
          <span />
          <p>{t.contactBody}</p>
        </div>
      </div>
      <div className="contact-form-wrap">
        <div className="form-heading" data-reveal>
          <h3>{t.formTitle}</h3>
          <p>{t.formSubtitle}</p>
        </div>
        {sent ? (
          <div className="success-state" data-reveal>
            <div><Check /></div>
            <h3>{t.sentTitle}</h3>
            <p>{t.sentBody}</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} data-reveal>
            <label><span>{t.fullName} *</span><input name="name" autoComplete="name" /></label>
            <label><span>{t.company} *</span><input name="company" autoComplete="organization" /></label>
            <label><span>{t.email} *</span><input name="email" type="email" autoComplete="email" /></label>
            <label><span>{t.phone}</span><input name="phone" autoComplete="tel" /></label>
            <label className="select-label">
              <span>{t.interest}</span>
              <select name="interest" defaultValue=""><option value="" disabled>—</option>{options.map((item) => <option key={item}>{item}</option>)}</select>
              <ChevronDown />
            </label>
            <label className="select-label">
              <span>{t.region}</span>
              <select name="region" defaultValue=""><option value="" disabled>—</option>{regions.map((item) => <option key={item}>{item}</option>)}</select>
              <ChevronDown />
            </label>
            <label className="form-wide"><span>{t.details} *</span><textarea name="details" rows="3" /></label>
            <label className="file-input form-wide">
              <Paperclip />
              <span>{file || t.attach}</span>
              <input type="file" onChange={(event) => setFile(event.target.files?.[0]?.name || "")} accept=".pdf,.doc,.docx,.xls,.xlsx,.dwg,.zip" />
            </label>
            {error && <p className="form-error form-wide">{error}</p>}
            <div className="form-submit form-wide">
              <button className="button button--gold" type="submit">{t.submit}<ArrowRight /></button>
              <p><LockKeyhole />{t.confidential}</p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer({ lang, setLang, t }) {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-brand">
          <Brand />
          <p>{t.footerLine}</p>
        </div>
        <div className="footer-links">
          <div><strong>{t.nav.about}</strong><a href="#about">{t.nav.about}</a><a href="#trust">{t.nav.trust}</a></div>
          <div><strong>{t.nav.divisions}</strong><a href="#divisions">{t.nav.divisions}</a><a href="#industries">{t.nav.industries}</a></div>
          <div><strong>{t.nav.capabilities}</strong><a href="#capabilities">{t.nav.capabilities}</a><a href="#network">{t.nav.network}</a></div>
          <div><strong>{t.nav.contact}</strong><a href="#contact">{t.partnership}</a></div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{t.rights}</span>
        <button className="language-switch" onClick={() => setLang(lang === "en" ? "fa" : "en")}>
          <span className={lang === "en" ? "active" : ""}>EN</span><i /><span className={lang === "fa" ? "active" : ""}>فارسی</span>
        </button>
      </div>
      <div className="footer-wordmark" aria-hidden="true">KHOBREGAN</div>
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState("en");
  const t = copy[lang];
  useReveal();
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  }, [lang]);
  return (
    <div className={`app app--${lang}`}>
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <About lang={lang} t={t} />
        <Divisions lang={lang} t={t} />
        <Capabilities lang={lang} t={t} />
        <Industries lang={lang} t={t} />
        <Network lang={lang} t={t} />
        <Trust lang={lang} t={t} />
        <Contact lang={lang} t={t} />
      </main>
      <Footer lang={lang} setLang={setLang} t={t} />
    </div>
  );
}
