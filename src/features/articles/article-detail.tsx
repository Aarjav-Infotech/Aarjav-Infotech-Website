"use client";

import React, { useState, useLayoutEffect, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Twitter,
  Linkedin,
  MessageCircle,
  Search,
  ArrowLeft,
} from "lucide-react";
import { asset } from "@/lib/cdn";

export interface ArticleData {
  id: number;
  title: string;
  date: string;
  author: string;
  image: string;
  paragraphs: string[];
  quote: string;
  tags: string[];
}

export const articlesDataset: Record<number, ArticleData> = {
  1: {
    id: 1,
    title: "LLM Agnostic Solutions: The 2026 Enterprise AI Guide",
    date: "August 24, 2026",
    author: "Aarjav Infotech",
    image: asset("/images/article-1.svg"),
    paragraphs: [
      "Enterprise AI is moving beyond the question of which language model to use. As organizations adopt AI across customer service, operations, document processing, analytics, and business applications, relying on a single model can create unnecessary limitations around performance, cost, scalability, and flexibility. An LLM-agnostic approach allows businesses to connect different AI models to their applications and workflows without rebuilding their entire technology stack whenever a new or better model becomes available.",
      "The enterprise AI landscape is evolving rapidly, with models continuously improving across reasoning, coding, multimodal capabilities, speed, and cost efficiency. A solution designed around one model can quickly become difficult to adapt as business requirements change. An LLM-agnostic architecture separates the AI application layer from the underlying model layer, allowing organizations to select the right model for each task while keeping their workflows, integrations, and business logic consistent.",
      "An LLM-agnostic architecture gives enterprises greater control over how AI is deployed across their organization. Different workflows can use different models based on factors such as reasoning capability, response speed, context requirements, security, cost, and data-handling needs.",
      "For example, a customer-support workflow may prioritize speed and cost efficiency, while a complex research or document-analysis workflow may require a model with stronger reasoning and larger context capabilities. A flexible architecture allows each use case to use the technology that fits it best.",
    ],
    quote:
      "The best enterprise AI strategy isn't choosing one model. It's building an architecture that can evolve with all of them.",
    tags: ["Enterprise AI", "LLM Agnostic", "AI Architecture", "Generative AI"],
  },
  2: {
    id: 2,
    title: "Snowflake Cortex Alternative: 2026 Evaluation Framework",
    date: "May 16, 2026",
    author: "Aarjav Infotech",
    image: asset("/images/article-2.svg"),
    paragraphs: [
      "As enterprises move from AI experimentation to production-scale deployment, choosing the right AI platform has become a critical architectural decision. Snowflake Cortex provides organizations with AI capabilities directly within the Snowflake ecosystem, but businesses with broader infrastructure, model integration, or deployment requirements may need to evaluate alternative approaches.",
      "The right alternative is not simply the platform with the largest number of AI features. Enterprises should evaluate how well each solution fits their existing technology stack, data architecture, security requirements, AI use cases, and long-term scalability goals.",
      "An effective evaluation framework should begin with model flexibility. Organizations increasingly need access to multiple LLMs rather than being restricted to a single provider or ecosystem. A model-agnostic architecture allows teams to select different models based on accuracy, latency, cost, compliance, and task complexity.",
      "Data integration and interoperability are equally important. Enterprise AI systems often need to connect with CRMs, ERPs, databases, document repositories, APIs and internal applications. The selected platform should make these connections manageable without requiring teams to redesign their existing infrastructure.",
    ],
    quote:
      "The right enterprise AI platform isn't defined by one model or feature—it's defined by how effectively it connects data, intelligence, and business workflows.",
    tags: ["Enterprise AI", "LLM Agnostic", "AI Architecture", "Generative AI"],
  },
  3: {
    id: 3,
    title: "Multi-agent vs single-agent AI systems: 2026 decision guide",
    date: "April 7, 2026",
    author: "Aarjav Infotech",
    image: asset("/images/article-3.svg"),
    paragraphs: [
      "As enterprise AI moves beyond basic chatbots and isolated automation, organizations are increasingly deciding between single-agent and multi-agent architectures. Both approaches can automate complex tasks, interact with business systems, and use large language models, but they differ significantly in architecture, coordination, scalability, and operational complexity.",
      "A single-agent system centralizes reasoning and execution within one AI agent. Multi-agent systems distribute responsibilities across specialized agents that collaborate to complete a larger workflow. Choosing between them should depend on the complexity of the business process—not simply on which architecture appears more advanced.",
      "A single-agent architecture uses one primary AI agent to understand requests, make decisions, access tools, and execute actions. It can still interact with APIs, databases, enterprise applications, and external services while maintaining a relatively straightforward workflow.",
      "This approach works well for focused use cases such as customer support assistants, document processing, internal knowledge assistants, lead qualification, and task automation. With fewer components to coordinate, single-agent systems can also be easier to develop, monitor, secure, and optimize.",
    ],
    quote:
      "The best AI architecture isn't the one with the most agents—it's the one that solves the workflow with the right level of intelligence and complexity.",
    tags: ["Enterprise AI", "LLM Agnostic", "AI Architecture", "Generative AI"],
  },
};

export default function ArticleDetail({ id = 1 }: { id?: number }) {
  const router = useRouter();
  const key = id ?? 1;
  const article = (articlesDataset[key] ?? articlesDataset[1]) as ArticleData;
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      const win = window as unknown as Window & {
        lenis?: {
          scrollTo: (target: number, options?: { immediate?: boolean }) => void;
        };
      };
      if (win.lenis && typeof win.lenis.scrollTo === "function") {
        win.lenis.scrollTo(0, { immediate: true });
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  const handleBack = () => {
    const blogElement =
      document.getElementById("articles-section") ||
      document.getElementById("blog-section");
    if (blogElement) {
      blogElement.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      router.push("/articles#articles-section");
    }
  };

  // Synchronous pre-paint scroll reset on ID change
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      scrollToTop();
    }
  }, [id]);

  // Post-mount backup scroll checks to combat image hydration and layout shifts
  useEffect(() => {
    scrollToTop();
    const t1 = setTimeout(scrollToTop, 50);
    const t2 = setTimeout(scrollToTop, 150);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [id]);

  const recentPosts = Object.values(articlesDataset).filter(
    (item) => item.id !== article.id,
  );

  return (
    <div
      key={id}
      id="article-top"
      className="w-full bg-white px-4 py-12 sm:px-6 lg:px-12"
    >
      <div className="mx-auto mt-12 max-w-full sm:mt-20">
        {/* Back to Blog Section Button */}
        <div className="mb-6 flex items-center">
          <button
            type="button"
            onClick={handleBack}
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-[#0053FA] hover:text-[#0053FA]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Articles</span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Main Article Content */}
          <div className="lg:col-span-8">
            {/* Banner Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#0d0f18] shadow-sm">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Meta Details */}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-[16px] text-black sm:gap-6">
              {/* Author */}
              <div className="flex items-center gap-1.5">
                <div className="relative size-4 shrink-0 text-black">
                  <Image
                    src={asset("/icons/user-icon.svg")}
                    alt="Author"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>{article?.author}</span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-1.5">
                <div className="relative size-4 shrink-0">
                  <Image
                    src={asset("/icons/calendar-icon.svg")}
                    alt="Date"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>{article?.date}</span>
              </div>

              {/* Comments */}
              <div className="flex items-center gap-1.5">
                <div className="relative size-4 shrink-0">
                  <Image
                    src={asset("/icons/comment-icon.svg")}
                    alt="Comments"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>No Comments</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="mt-6 text-[20px] font-semibold tracking-tight text-slate-900 sm:text-[22px] md:text-[24px]">
              {article.title}
            </h1>

            {/* Paragraphs 1 & 2 */}
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-black sm:text-[16px]">
              <p>{article.paragraphs[0]}</p>
              <p>{article.paragraphs[1]}</p>
            </div>

            {/* Highlighted Quote Box */}
            <div className="relative my-8 flex min-h-[220px] flex-col justify-center overflow-hidden rounded-2xl p-8 sm:min-h-[240px] sm:p-12">
              {/* Background Image via CDN */}
              <Image
                src={asset("/icons/quote-bg.svg")}
                alt="Quote background"
                fill
                priority={false}
                className="pointer-events-none object-cover object-right-bottom"
              />

              {/* Quote Text */}
              <p className="relative z-10 text-[16px] leading-relaxed font-medium text-white sm:text-[28px] md:text-[32px]">
                &ldquo;{article.quote}&rdquo;
              </p>
            </div>
            {/* Paragraphs 3 & 4 */}
            <div className="space-y-4 text-sm leading-relaxed text-black sm:text-[16px]">
              <p>{article.paragraphs[2]}</p>
              <p>{article.paragraphs[3]}</p>
            </div>

            {/* Tags & Social Links */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[14px] font-semibold text-black sm:text-[16px]">
                  Tags:
                </span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] px-3.5 py-1 text-[14px] font-medium text-white shadow-sm sm:text-[16px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[14px] font-semibold text-black sm:text-[16px]">
                  Share:
                </span>
                <button
                  type="button"
                  aria-label="Share on Twitter"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] text-white transition hover:opacity-90"
                >
                  <Twitter className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Share on LinkedIn"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] text-white transition hover:opacity-90"
                >
                  <Linkedin className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Share on Message"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] text-white transition hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Comments */}
            <div className="mt-14 border-t border-slate-100 pt-8">
              <h3 className="text-xl font-bold text-slate-900">Comments</h3>

              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-100">
                    <Image
                      src={asset("/images/comment-1.svg")}
                      alt="Davies"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-[14px] font-semibold text-slate-900 sm:text-[18px]">
                          Davies
                        </h4>
                        <span className="text-[14px] text-black">
                          July 8, 2025 at 7:35 am
                        </span>
                      </div>
                      <button
                        type="button"
                        className="text-[16px] font-medium text-black hover:text-blue-600"
                      >
                        Reply ↗
                      </button>
                    </div>
                    <p className="mt-2 text-[14px] text-black sm:text-[16px]">
                      &ldquo;Sed vitae velit erat. Pellentesque lobortis felis
                      vel mi congue, in sollicitudin orci tincidunt. Praesent
                      turpis justo, posuere eget justo sit amet, efficitur
                      suscipit elit.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="ml-8 flex items-start gap-4 sm:ml-12">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-100">
                    <Image
                      src={asset("/images/comment-2.svg")}
                      alt="Shin"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-[14px] font-semibold text-slate-900 sm:text-[18px]">
                          Shin
                        </h4>
                        <span className="text-[14px] text-black">
                          July 8, 2025 at 7:35 am
                        </span>
                      </div>
                      <button
                        type="button"
                        className="text-[16px] font-medium text-black hover:text-blue-600"
                      >
                        Reply ↗
                      </button>
                    </div>
                    <p className="mt-2 text-[16px] text-black">
                      &ldquo;Thank you!&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment Form */}
            <div className="mt-14 border-t border-slate-100 pt-8">
              <h3 className="text-[22px] font-semibold tracking-tight text-black sm:text-[36px]">
                Post a Comments
              </h3>
              <p className="mt-4 text-[16px] text-black">
                Your email address will not be published. Required fields are
                marked *
              </p>

              <form
                className="mt-8 space-y-7"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Your Name */}
                <div>
                  <label className="block text-[14px] font-medium text-black">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={commentForm.name}
                    onChange={(e) =>
                      setCommentForm({ ...commentForm, name: e.target.value })
                    }
                    className="mt-2 w-full border-b border-slate-200 bg-transparent pb-3 text-[18px] text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none"
                  />
                </div>

                {/* Your Email */}
                <div>
                  <label className="block text-[14px] font-semibold text-slate-900">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={commentForm.email}
                    onChange={(e) =>
                      setCommentForm({ ...commentForm, email: e.target.value })
                    }
                    className="mt-2 w-full border-b border-slate-200 bg-transparent pb-3 text-[18px] text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none"
                  />
                </div>

                {/* Messenger */}
                <div>
                  <label className="block text-[14px] font-semibold text-slate-900">
                    Messenger
                  </label>
                  <textarea
                    rows={3}
                    value={commentForm.message}
                    onChange={(e) =>
                      setCommentForm({
                        ...commentForm,
                        message: e.target.value,
                      })
                    }
                    className="mt-2 w-full resize-none border-b border-slate-200 bg-transparent pb-3 text-[18px] text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] py-3.5 text-[16px] font-semibold text-white shadow-[0_12px_24px_-6px_rgba(0,0,0,0.35)] transition-all hover:opacity-95 active:scale-[0.99]"
                  >
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-10 lg:col-span-4">
            {/* Search */}
            <div>
              <h3 className="text-[32px] font-semibold text-black">Search</h3>
              <div className="relative mt-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full border-b border-slate-200 pb-2 text-[16px] text-[#71717A] placeholder:text-slate-400 focus:border-blue-600 focus:outline-none"
                />
                <Search className="absolute top-0 right-1 h-4 w-4 text-slate-400" />
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <h3 className="text-[32px] font-semibold text-black">
                Recent posts
              </h3>
              <div className="mt-4 space-y-4">
                {recentPosts.map((item) => (
                  <Link
                    key={item.id}
                    href={`/articles?id=${item.id}`}
                    scroll={true}
                    onClick={scrollToTop}
                    className="group flex items-center gap-3"
                  >
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-slate-900">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="line-clamp-2 text-[18px] font-semibold text-slate-800 transition group-hover:text-blue-600">
                        {item.title}
                      </h4>
                      <span className="text-[14px] text-black">
                        {item.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Category */}
            <div>
              <h3 className="text-[32px] font-semibold text-black">Category</h3>
              <ul className="mt-4 space-y-2.5 text-[18px] text-black">
                <li className="flex justify-between">
                  <span>AI & Automation</span>
                  <span className="text-black">(4)</span>
                </li>
                <li className="flex justify-between">
                  <span>Enterprise AI</span>
                  <span className="text-black">(2)</span>
                </li>
                <li className="flex justify-between">
                  <span>Digital Transformation</span>
                  <span className="text-black">(1)</span>
                </li>
              </ul>
            </div>

            {/* Popular tag */}
            <div>
              <h3 className="text-[32px] font-semibold text-black">
                Popular tag
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Enterprise AI",
                  "LLM Agnostic",
                  "AI Architecture",
                  "Generative AI",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] px-3 py-1 text-[12px] font-medium text-white shadow-sm sm:text-[16px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
