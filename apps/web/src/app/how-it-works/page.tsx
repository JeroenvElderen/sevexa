import Image from "next/image";
import {
  ArrowRight, CalendarDays, CheckCircle2, ChevronDown,
  Headphones, LockKeyhole, MessageSquare, Search, ShieldCheck, Star, Tags, Users,
} from "lucide-react";
import { Logo, SiteNavbar } from "@/components/site-navbar";

const steps = [
  [Search, "Search or request", "Browse services or post a request describing what you need."],
  [MessageSquare, "Receive options", "Get matched with trusted providers and receive options that fit."],
  [Users, "Compare and choose", "Compare profiles, reviews, pricing, and availability."],
  [CalendarDays, "Book & pay", "Book the service and pay securely in just a few clicks."],
  [CheckCircle2, "Get it done", "The provider gets to work. Sit back and enjoy a job well done."],
] as const;

const features = [
  [Search, "Browse services", "Find services for your home, lifestyle, and everyday needs."],
  [Users, "Compare providers", "View profiles, ratings, reviews, and pricing side by side."],
  [MessageSquare, "Message & coordinate", "Chat with providers and plan all the details in-app."],
  [CalendarDays, "Manage bookings", "Keep track of bookings, reschedule, or cancel easily."],
  [LockKeyhole, "Secure payments", "Pay securely in-app with multiple safe options."],
  [Headphones, "Help & support", "Get help when you need it from our support team."],
] as const;

const trust = [
  [ShieldCheck, "Verified providers", "Every provider is verified for your peace of mind."],
  [Tags, "Transparent pricing", "Upfront pricing with no hidden fees."],
  [LockKeyhole, "Secure payments", "Your payments are encrypted and always protected."],
  [Star, "4.9★ average rating", "Real reviews from happy customers like you."],
  [Headphones, "Friendly support", "We’re here to help, whenever you need us."],
] as const;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-center font-serif text-2xl tracking-[-.02em] sm:text-3xl">{children}</h2>;
}

export default function HowItWorks() {
  return (
    <main className="bg-white text-[#171323]">
      <SiteNavbar active="how" />

      <section className="shell grid items-stretch gap-8 py-8 md:grid-cols-2 md:py-10">
        <div className="flex flex-col justify-center py-4 lg:pl-7">
          <span className="w-fit rounded-full bg-[#eee6f7] px-3 py-1.5 text-[10px] font-bold uppercase text-[#532185]">How Sevexa works</span>
          <h1 className="mt-4 font-serif text-[clamp(2.7rem,5vw,4.2rem)] leading-[1.02] tracking-[-.04em]">
            How <span className="text-[#622797]">SEVEXA</span> works
          </h1>
          <p className="mt-3 max-w-lg font-serif text-[clamp(1.35rem,2.5vw,2rem)] italic leading-snug text-[#4b8066]">From need to done — simple, secure, and all in one place.</p>
          <p className="mt-6 max-w-lg text-sm leading-6 text-black/65">Discover services, post requests, compare trusted providers, book, pay, and manage everything in one platform. SEVEXA makes everyday life easier.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button className="rounded-xl bg-[#421267] px-5 py-3 text-sm font-semibold text-white">Get started for free <ArrowRight className="ml-2 inline size-4" /></button>
            <button className="rounded-xl border px-5 py-3 text-sm font-semibold">Explore services</button>
          </div>
        </div>
        <div className="relative min-h-80 overflow-hidden rounded-2xl sm:min-h-[28rem]">
          <Image src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2?auto=format&fit=crop&w=1400&q=90" alt="Woman using Sevexa on a laptop at home" fill priority className="object-cover" />
        </div>
      </section>

      <section className="shell py-8">
        <SectionTitle>How it works in 5 simple steps</SectionTitle>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(([Icon, title, copy], index) => (
            <article key={title} className="relative rounded-2xl border p-5 text-center shadow-[0_8px_30px_rgba(50,30,70,.03)]">
              <span className="absolute left-4 top-4 grid size-7 place-items-center rounded-full bg-[#f0ebf8] text-xs font-bold">{index + 1}</span>
              <span className={`mx-auto grid size-16 place-items-center rounded-full ${index % 2 ? "bg-[#edf3ef] text-[#41785f]" : "bg-[#f2ecfa] text-[#5a2190]"}`}><Icon className="size-8" /></span>
              <h3 className="mt-4 font-serif text-lg">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-black/60">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell py-8">
        <SectionTitle>Two easy ways to get started</SectionTitle>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl bg-gradient-to-br from-[#f3edf9] to-[#fbf9fc] p-6 sm:p-8">
            <h3 className="font-serif text-2xl">Browse services</h3><p className="mt-2 text-sm text-black/60">Find what you need from hundreds of categories.</p>
            <ul className="mt-6 space-y-4 text-sm">{["Explore popular services", "Filter by location, price, or availability", "View provider profiles and reviews"].map(x => <li key={x} className="flex gap-3"><CheckCircle2 className="size-5 shrink-0 text-[#58238b]" />{x}</li>)}</ul>
            <button className="mt-7 rounded-xl bg-[#481570] px-5 py-3 text-sm font-semibold text-white">Explore services <ArrowRight className="ml-2 inline size-4" /></button>
          </article>
          <article className="rounded-2xl bg-gradient-to-br from-[#eaf3ee] to-[#f7faf8] p-6 sm:p-8">
            <h3 className="font-serif text-2xl">Post a request</h3><p className="mt-2 text-sm text-black/60">Can’t find what you need? We’ll help you find the right match.</p>
            <ul className="mt-6 space-y-4 text-sm">{["Describe your request", "Receive offers from providers", "Compare and choose the best fit"].map(x => <li key={x} className="flex gap-3"><CheckCircle2 className="size-5 shrink-0 text-[#397458]" />{x}</li>)}</ul>
            <button className="mt-7 rounded-xl bg-[#46795f] px-5 py-3 text-sm font-semibold text-white">Create a request <ArrowRight className="ml-2 inline size-4" /></button>
          </article>
        </div>
      </section>

      <section className="shell py-8"><SectionTitle>Everything in one place</SectionTitle><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">{features.map(([Icon,t,c],i)=><article key={t} className="rounded-2xl border p-5 text-center"><span className={`mx-auto grid size-12 place-items-center rounded-full ${i%2 ? "bg-[#eaf2ed] text-[#40775c]" : "bg-[#f2ecfa] text-[#5b2390]"}`}><Icon /></span><h3 className="mt-3 font-serif">{t}</h3><p className="mt-2 text-[11px] leading-5 text-black/60">{c}</p></article>)}</div></section>

      <section className="shell py-8"><SectionTitle>Trusted by thousands</SectionTitle><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{trust.map(([Icon,t,c],i)=><article key={t} className="rounded-2xl border p-5 text-center"><span className={`mx-auto grid size-12 place-items-center rounded-full ${i%2 ? "bg-[#f2ecfa] text-[#5b2390]" : "bg-[#eaf2ed] text-[#40775c]"}`}><Icon /></span><h3 className="mt-3 font-serif">{t}</h3><p className="mt-2 text-xs leading-5 text-black/60">{c}</p></article>)}</div></section>

      <section id="help" className="shell py-8"><SectionTitle>Frequently asked questions</SectionTitle><div className="mt-5 divide-y rounded-2xl border bg-[#fbfafc]">{[
        ["How do I book a service?", "Browse or search for a service, choose a trusted provider, select a time, and confirm your booking."],
        ["Can I create a custom request?", "Yes. Describe what you need and providers can send you tailored offers."],
        ["Are providers verified?", "We verify providers and display ratings and customer reviews to help you choose confidently."],
        ["How do payments work?", "Payments are handled securely in the platform after you confirm your booking."],
      ].map(([q,a])=><details key={q} className="group px-5 py-4"><summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold">{q}<ChevronDown className="size-4 transition group-open:rotate-180" /></summary><p className="pt-3 text-sm leading-6 text-black/60">{a}</p></details>)}</div></section>

      <section className="shell py-8"><div className="rounded-2xl bg-gradient-to-r from-[#32104d] to-[#5d1c86] px-7 py-9 text-white sm:px-12"><h2 className="font-serif text-3xl">Ready to get things done?</h2><p className="mt-2 text-sm text-white/70">Join thousands of people who trust SEVEXA for everyday services.</p><div className="mt-6 flex flex-wrap gap-3"><button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#421267]">Get started for free <ArrowRight className="ml-2 inline size-4" /></button><button className="rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold">Explore services</button></div></div></section>

      <footer className="mt-4 border-t"><div className="shell grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-5"><div><Logo /><p className="mt-4 text-xs leading-5 text-black/50">All the services you need.<br />All in one place.</p></div>{[["Explore","Popular services","Categories","All services"],["For everyone","For individuals","For families","For all lifestyles"],["Company","About us","Careers","Contact us"],["Legal","Terms of service","Privacy policy","Cookie policy"]].map(([h,...links])=><div key={h}><b className="text-sm">{h}</b>{links.map(x=><a href="#" key={x} className="mt-3 block text-xs text-black/55">{x}</a>)}</div>)}</div><div className="shell flex flex-wrap justify-between gap-3 border-t py-5 text-[10px] text-black/45"><span>© 2026 SEVEXA. All rights reserved.</span><span>Dallas, TX　 English</span></div></footer>
    </main>
  );
}