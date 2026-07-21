import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { useRef } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HAZE — Making pollution impossible to ignore" },
      {
        name: "description",
        content:
          "HAZE is an open engineering initiative building electronics, sensing and machine learning systems to identify and hold pollution sources accountable.",
      },
      { property: "og:title", content: "HAZE — Making pollution impossible to ignore" },
      {
        property: "og:description",
        content:
          "An open engineering and research initiative producing evidence-based environmental monitoring.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ACCENT = "#8EA3B0";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.81 1.19 1.84 1.19 3.1 0 4.44-2.7 5.41-5.27 5.7.41.36.77 1.06.77 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function Nav() {
  const links = [
    { label: "Mission", href: "#mission" },
    { label: "Journal", href: "#journal" },
    { label: "Research", href: "#research" },
    { label: "Prototypes", href: "#status" },
  ];
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0A0A0A]/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="text-sm font-medium tracking-[0.2em] text-white">
          HAZE
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-[#A1A1AA] transition-colors duration-300 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-sm text-[#A1A1AA] transition-colors duration-300 hover:text-white"
            aria-label="GitHub"
          >
            <GithubIcon />
            <span>GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, rgba(142,163,176,0.12), transparent 60%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p
            variants={fadeUp}
            className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#A1A1AA]"
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: ACCENT }}
            />
            An open engineering initiative
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(4rem,14vw,12rem)] font-medium leading-[0.9] tracking-[-0.04em] text-white"
          >
            HAZE
          </motion.h1>
          <motion.h2
            variants={fadeUp}
            className="mt-10 max-w-3xl text-[clamp(1.5rem,3vw,2.5rem)] font-normal leading-[1.15] tracking-[-0.02em] text-white"
          >
            Making pollution impossible to ignore.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-base leading-relaxed text-[#A1A1AA] md:text-lg"
          >
            Building technology that identifies and holds pollution sources accountable through
            electronics, sensing, embedded systems and machine learning.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#mission"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0A0A0A] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Begin the Journey
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40"
            >
              <GithubIcon />
              GitHub Repository
            </a>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 right-0 hidden text-right text-xs uppercase tracking-[0.28em] text-[#A1A1AA] md:block">
          <div>v0 · Mission Log 003</div>
          <div className="mt-1" style={{ color: ACCENT }}>
            Status — Active
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      className="mb-20"
    >
      <motion.div
        variants={fadeUp}
        className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#A1A1AA]"
      >
        <span className="h-px w-8" style={{ backgroundColor: ACCENT }} />
        {eyebrow}
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1] tracking-[-0.03em] text-white"
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}

function Mission() {
  return (
    <section id="mission" className="border-t border-white/5 px-6 py-32 md:py-48">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Mission" title="Why HAZE?" />
        <div className="grid gap-16 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="md:col-span-6 md:col-start-1 text-xl leading-relaxed text-white md:text-2xl"
          >
            Existing air quality networks measure pollution in aggregate — a number on a map, a
            colour on a dashboard — but rarely name the source responsible for it.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="md:col-span-6 md:col-start-7 text-base leading-relaxed text-[#A1A1AA] md:text-lg"
          >
            HAZE bridges that gap. By combining low-cost electronics, distributed environmental
            sensing and intelligent data processing, we build the instruments and models needed to
            trace emissions back to their origin — turning ambient measurement into actionable,
            defensible evidence.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

type Stage = { label: string; state: "done" | "current" | "upcoming" };
const timeline: Stage[] = [
  { label: "Project Idea", state: "done" },
  { label: "Research Direction", state: "done" },
  { label: "First Professor Contacted", state: "done" },
  { label: "First Rejection", state: "done" },
  { label: "Learning Electronics", state: "current" },
  { label: "Prototype V0", state: "upcoming" },
  { label: "Outdoor Testing", state: "upcoming" },
  { label: "Calibration", state: "upcoming" },
  { label: "Machine Learning", state: "upcoming" },
  { label: "Source Attribution", state: "upcoming" },
  { label: "Public Dashboard", state: "upcoming" },
];

function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journal" className="border-t border-white/5 px-6 py-32 md:py-48">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Journey" title="A public logbook." />
        <div ref={ref} className="relative mx-auto max-w-3xl pl-8 md:pl-12">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-white/10 md:left-4" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-2 top-2 w-px md:left-4"
          >
            <div className="h-full w-full" style={{ backgroundColor: ACCENT }} />
          </motion.div>

          {timeline.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.04, ease: EASE }}
              className="relative flex items-center gap-6 py-5"
            >
              <div className="absolute -left-6 flex h-4 w-4 items-center justify-center md:-left-10">
                {s.state === "done" && (
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] text-[#0A0A0A]">
                    ✓
                  </div>
                )}
                {s.state === "current" && (
                  <div className="relative flex h-4 w-4 items-center justify-center">
                    <span
                      className="absolute h-4 w-4 animate-ping rounded-full opacity-40"
                      style={{ backgroundColor: ACCENT }}
                    />
                    <span
                      className="relative h-3 w-3 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                  </div>
                )}
                {s.state === "upcoming" && (
                  <div className="h-3 w-3 rounded-full border border-white/20 bg-[#0A0A0A]" />
                )}
              </div>
              <div className="flex flex-1 items-baseline justify-between gap-4">
                <span
                  className={
                    s.state === "upcoming"
                      ? "text-lg text-[#A1A1AA]"
                      : "text-lg text-white"
                  }
                >
                  {s.label}
                </span>
                <span className="text-xs uppercase tracking-[0.24em] text-[#A1A1AA]">
                  {s.state === "done"
                    ? "Complete"
                    : s.state === "current"
                      ? "In progress"
                      : "Planned"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestLog() {
  return (
    <section className="border-t border-white/5 px-6 py-32 md:py-48">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Mission Log" title="Latest entry." />
        <motion.a
          href="#journal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="group block rounded-2xl border border-white/10 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-white/25 md:p-14"
        >
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-[#A1A1AA]">
            <span>Mission Log 003</span>
            <span style={{ color: ACCENT }}>Current</span>
          </div>
          <h3 className="mt-8 text-4xl font-medium tracking-[-0.02em] text-white md:text-6xl">
            Learning Electronics
          </h3>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#A1A1AA]">
            Experience teaches more than evolving plans ever could. Before designing a sensor
            network capable of attribution, the fundamentals must be earned — one breadboard,
            oscilloscope trace, and failed prototype at a time.
          </p>
          <div className="mt-10 inline-flex items-center gap-2 text-sm text-white">
            Read entry
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </motion.a>
      </div>
    </section>
  );
}

const research = [
  {
    n: "01",
    title: "Electronics",
    body: "Analog front-ends and low-noise circuitry designed for sub-ppm detection.",
  },
  {
    n: "02",
    title: "Embedded Systems",
    body: "Firmware and edge compute for always-on, battery-operated field nodes.",
  },
  {
    n: "03",
    title: "Environmental Sensing",
    body: "Electrochemical, optical and MOX sensors evaluated under real conditions.",
  },
  {
    n: "04",
    title: "Machine Learning",
    body: "Models that fuse noisy sensor arrays into calibrated, defensible signals.",
  },
  {
    n: "05",
    title: "Air Quality",
    body: "Reference-grade methodology adapted for distributed, low-cost networks.",
  },
  {
    n: "06",
    title: "Source Attribution",
    body: "Inverse modelling and dispersion analysis to name responsible emitters.",
  },
];

function Research() {
  return (
    <section id="research" className="border-t border-white/5 px-6 py-32 md:py-48">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Research Areas" title="Six disciplines. One system." />
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-2 lg:grid-cols-3">
          {research.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
              className="group bg-[#0A0A0A] p-10 transition-colors duration-500 hover:bg-white/[0.02]"
            >
              <div className="text-xs tracking-[0.28em] text-[#A1A1AA]">{r.n}</div>
              <h3 className="mt-8 text-2xl font-medium tracking-[-0.01em] text-white">
                {r.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#A1A1AA]">{r.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const status = [
  { k: "Current Stage", v: "Learning Electronics" },
  { k: "Prototype", v: "V0" },
  { k: "Project Started", v: "July 2026" },
  { k: "Repository", v: "Public" },
  { k: "Mission Status", v: "Active" },
];

function Status() {
  return (
    <section id="status" className="border-t border-white/5 px-6 py-32 md:py-48">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Current Status" title="Where the work stands." />
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-5">
          {status.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
              className="bg-[#0A0A0A] p-8"
            >
              <div className="text-[10px] uppercase tracking-[0.28em] text-[#A1A1AA]">{s.k}</div>
              <div className="mt-4 text-lg font-medium text-white">
                {s.k === "Mission Status" ? (
                  <span className="inline-flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                    {s.v}
                  </span>
                ) : (
                  s.v
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:justify-between">
        <div className="max-w-md">
          <div className="text-sm font-medium tracking-[0.2em] text-white">HAZE</div>
          <p className="mt-4 text-sm leading-relaxed text-[#A1A1AA]">
            Building technology that identifies and holds pollution sources accountable.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm text-white transition-colors hover:text-[#A1A1AA]"
          >
            <GithubIcon />
            GitHub
          </a>
          <div className="text-xs uppercase tracking-[0.24em] text-[#A1A1AA]">
            Created by Bhavik Kapur
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white antialiased">
      <Nav />
      <Hero />
      <Mission />
      <Journey />
      <LatestLog />
      <Research />
      <Status />
      <Footer />
    </main>
  );
}
