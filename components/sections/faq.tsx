"use client";

import { useState, useId } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: "do-you-work-with-businesses-outside-cebu",
    question: "Do you work with businesses outside Cebu?",
    answer:
      "Most of my client work has been in the United States, so yes. I am based in Cebu and work remotely, and the working day is already built around US hours. For clients in Cebu or elsewhere in the Philippines, meetings run on your schedule.",
  },
  {
    id: "what-does-it-cost",
    question: "What does it cost?",
    answer:
      "It depends on scope, which is not a dodge so much as the actual answer: a single-location practice needing local SEO and an e-commerce store needing technical plus content work require very different amounts of work. A one-time technical audit is the cheapest way in and the fastest way to find out whether a longer engagement makes sense.",
  },
  {
    id: "how-long-before-i-see-anything",
    question: "How long before I see anything?",
    answer:
      "Most campaigns show measurable movement in three to six months, with the compounding results usually between six and twelve. Local SEO moves faster, because Google Business Profile and citation work can affect map pack visibility within weeks. Sites with real technical problems need those fixed first, which adds time at the front. In my own case studies the range has been wide: a flower shop with no prior web presence had indexed, search-visible pages within weeks of setup, while the dental accounts were sustained programs measured over months.",
  },
  {
    id: "do-i-work-with-you-or-a-team",
    question: "Do I work with you or a team?",
    answer:
      "Me. There is no team. That is the main advantage and also the main limit: you get one accountable person from audit through reporting, and I can only take on a certain number of accounts at once without the quality dropping.",
  },
  {
    id: "can-you-guarantee-google-ai-overviews",
    question: "Can you guarantee I will show up in Google AI Overviews?",
    answer:
      "No, and neither can anyone else. Google does not publish how AI Overviews select sources and the selection changes. What can be improved is whether your content is structured, technically accessible, and clear enough about what your business is for a system to pick it up. That has worked repeatedly across client accounts, which is different from a guarantee.",
  },
  {
    id: "what-do-you-need-from-me-to-start",
    question: "What do you need from me to start?",
    answer:
      "The domain, the searches you want to win, and Search Console and Analytics access when you are ready. That is enough for a first read. If you do not have Search Console set up, that is one of the first things I would fix anyway.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-4 w-4 shrink-0 text-white/50 transition-transform duration-300 ease-out ${
        open ? "rotate-180 text-emerald-400" : "rotate-0"
      }`}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function FaqAccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const reactId = useId();
  const buttonId = `faq-button-${reactId}`;
  const panelId = `faq-panel-${reactId}`;

  return (
    <div
      className={`group rounded-2xl border transition-colors duration-300 ${
        isOpen
          ? "border-emerald-400/30 bg-white/[0.04]"
          : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.03]"
      }`}
    >
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        >
          <span className="flex items-start gap-3 sm:gap-4">
            <span
              className={`mt-0.5 shrink-0 font-mono text-xs tabular-nums transition-colors duration-300 ${
                isOpen ? "text-emerald-400" : "text-white/30"
              }`}
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="text-sm font-medium text-white sm:text-base">
              {item.question}
            </span>
          </span>

          <ChevronIcon open={isOpen} />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <div className="px-5 pb-5 pl-[2.75rem] pr-5 text-sm leading-relaxed text-white/60 sm:px-6 sm:pb-6 sm:pl-[3.25rem] sm:pr-6">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative mx-auto w-full max-w-5xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mb-12 max-w-2xl sm:mb-16">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
          FAQ
        </span>

        <h2
          id="faq-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl"
        >
          Questions worth asking before you hire anyone.
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
          Straight answers about working together, pricing, timelines, AI
          search visibility, and what I need from you to get started.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4">
        {faqs.map((item, index) => (
          <FaqAccordionItem
            key={item.id}
            item={item}
            index={index}
            isOpen={openId === item.id}
            onToggle={() =>
              setOpenId((current) =>
                current === item.id ? null : item.id
              )
            }
          />
        ))}
      </div>
    </section>
  );
}