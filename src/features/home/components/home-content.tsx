import { Hero } from "@/components/common/hero";
import { ROUTES } from "@/lib/constants";
import { HomeHowWeWork } from "./home-how-we-work";
import { HomeIndustries } from "./home-industries";
import { HomePartners } from "./home-partners";
import { HomeProducts } from "./home-products";
import { HomeProvenResults } from "./home-proven-results";
import { HomeTechnologies } from "./home-technologies";
import { HomeSecurity } from "./home-security";
import { HomeTestimonials } from "./home-testimonials";
import { HomeWhatWeDo } from "./home-what-we-do";
import { HomeContact } from "./home-contact";
import { HomeFaq } from "./home-faq";
import { HomeArticles } from "./home-articles";

/**
 * Home page feature content with modular sections.
 */
export function HomeContent() {
  return (
    <>
      <Hero
        align="left"
        eyebrow="Workflow orchestration"
        eyebrowClassName="text-[#08388D] text-[18px] font-medium leading-[17.6px] tracking-normal normal-case"
        title={
          <>
            Automate critical workflows. <br />
            Integrate the tools you rely on.
          </>
        }
        titleClassName="text-[#000000] text-[74px] font-medium leading-[81.4px] tracking-[-3px]"
        description="End-to-end automation across Sales, Support, Finance, and Operations."
        descriptionClassName="text-[#000000] text-[20px] font-medium leading-[28px] tracking-normal"
        bgVideo="/videos/Hero_Section.mp4"
        tone="transparent"
        className="rounded-bl-[80px] bg-[#E5F0FF]/20"
        actions={[
          {
            label: "Book a discovery call",
            href: ROUTES.services,
            hasArrow: true,
          },
          {
            label: "View automation examples",
            href: ROUTES.contact,
            variant: "outline",
          },
        ]}
      />

      <HomePartners
        eyebrow="TEAMS CHOOSE US FOR RELIABLE DELIVERY"
        partners={[
          {
            src: "/svg/patners.svg",
            alt: "Our Technology Stack Partners",
            width: 1280,
            height: 100,
          },
        ]}
      />

      <HomeWhatWeDo
        eyebrow="WHAT WE DO"
        title="End-to-end automation expertise"
        subtitle="From workflow automation to system integration, we deliver outcomes that move your business forward."
        items={{
          workflow: {
            imageSrc: "/Animation/1.gif",
            title: "AI Workflow Automation",
            description:
              "Transform repetitive business processes into intelligent AI-powered workflows that eliminate bottlenecks and drive exponential efficiency.",
            features: [
              "Autonomous AI Agents",
              "Advanced Workflow Orchestration",
              "Real-time Process Optimization",
            ],
          },
          triage: {
            imageSrc: "/Animation/2.gif",
            title: "Support Triage & AI Ticketing",
            description:
              "Connect emails, WhatsApp, and websites to a unified AI system that triages, responds, and resolves customer inquiries instantly.",
          },
          tools: {
            imageSrc: "/Animation/3.gif",
            title: "AI Tools & Agents",
            description: "Build custom AI assistants tailored to your data.",
          },
          orchestration: {
            imageSrc: "/Animation/4.gif",
            title: "Data Orchestration",
            description: "Synchronize ERP, CRM, and APIs effortlessly.",
          },
          voice: {
            imageSrc: "/Animation/5.gif",
            title: "AI Voice Agent Deployment",
            description:
              "Deploy multilingual AI voice agents that handle high-volume calls with human-like natural language processing and zero latency.",
          },
          document: {
            imageSrc: "/Animation/6.gif",
            title: "AI Document Processing",
            description:
              "Automatically extract, classify, and validate data from invoices, contracts, and IDs with 99% accuracy using proprietary OCR models.",
          },
        }}
      />

      <HomeProducts
        title="AI Products Built for Real-World Impact"
        subtitle="Explore our suite of AI-powered products designed to automate operations, improve accuracy, and drive growth across industries."
        bgImageSrc="/images/mask_group.png"
        products={[
          {
            tags: ["VOICE", "AI"],
            title: "AI Voice Agent Deployment",
            inputs: "Calls/Chats/CRM/Websites",
            workflow: "Listen → Understand → Respond → Log",
            result:
              "24/7 customer support with faster resolution and higher CSAT.",
          },
          {
            tags: ["DIAMOND", "ERP"],
            title: "AI Diamond Stock Market Management",
            inputs: "Inventory/Prices/Orders/Markets",
            workflow: "Analyze → Forecast → Trade → Report",
            result:
              "Smarter trading decisions with real-time insights and accuracy.",
          },
          {
            tags: ["TEXTILE", "ERP"],
            title: "AI Textile Management",
            inputs: "Orders/Inventory/Production/Sales",
            workflow: "Plan → Produce → Track → Optimise",
            result:
              "Streamlined operations with better planning and fewer losses.",
          },
          {
            tags: ["CONSTRUCTION", "ERP"],
            title: "AI Construction",
            inputs: "Projects/BOQs/Vendors/Progress",
            workflow: "Plan → Allocate → Track → Report",
            result:
              "On-time project delivery with better resource utilisation.",
          },
          {
            tags: ["ESTIMATION", "AI AGENT"],
            title: "AI BOQ Estimation Agent",
            inputs: "Drawings/PDFs/Specifications",
            workflow: "Extract → Calculate → Estimate → Export",
            result: "Accurate BOQs in minutes, reducing manual effort by 80%.",
          },
          {
            tags: ["DOCUMENT", "ERP"],
            title: "AI Document Processing",
            inputs: "Invoices/PDFs/Emails/Forms",
            workflow: "Extract → Validate → Classify → Store",
            result: "99% data accuracy with zero manual data entry.",
          },
        ]}
      />

      <HomeHowWeWork
        eyebrow="HOW WE WORK"
        title="A process built for results"
        subtitle="Clear milestones, constant communication, and zero hand-waving. Here's how we get from idea to impact."
        centerImageSrc="/svg/layers.svg"
        leftSteps={[
          {
            step: "01",
            title: "Discovery & Success Criteria",
            desc: "We map your current workflows, identify bottlenecks, and define clear metrics for success.",
          },
          {
            step: "03",
            title: "Map Workflows + Build",
            desc: "We document every step, identify bottlenecks, and determine what data and systems need to connect. No surprises down the road.",
          },
          {
            step: "05",
            title: "Launch + Monitor",
            desc: "Go live confidently. We monitor performance, catch issues, and optimize based on data.",
          },
        ]}
        rightSteps={[
          {
            step: "02",
            title: "Data Access + Security Review",
            desc: "We build incrementally, test thoroughly, and review security at every stage. You see progress weekly and can give feedback early.",
          },
          {
            step: "04",
            title: "Deploy + Optimise + Scale",
            desc: "We deploy, optimize, and continuously enhance your AI solutions for long-term business growth.",
          },
        ]}
      />
      <HomeIndustries />
      <HomeProvenResults />
      <HomeTechnologies />
      <HomeTestimonials />
      <HomeSecurity />
      <HomeContact />
      <HomeFaq />
      <HomeArticles />
    </>
  );
}
