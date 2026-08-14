import Image from "next/image";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronDown,
  CircleUserRound,
  CreditCard,
  GraduationCap,
  Headphones,
  HeartHandshake,
  HomeIcon,
  Laptop,
  MapPin,
  MessageCircleMore,
  MoreHorizontal,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { name: "Home & Repair", icon: HomeIcon },
  { name: "Cleaning", icon: Sparkles },
  { name: "Beauty & Wellness", icon: HeartHandshake },
  { name: "Events", icon: CalendarDays },
  { name: "Tech & Digital", icon: Laptop },
  { name: "Business", icon: BriefcaseBusiness },
  { name: "Lessons", icon: GraduationCap },
  { name: "More", icon: MoreHorizontal },
] as const;

const services = [
  { name: "House Cleaning", price: "$39", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80" },
  { name: "Plumbing", price: "$59", image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=700&q=80" },
  { name: "Wellness Massage", price: "$79", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=700&q=80" },
  { name: "Home Painting", price: "$150", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=700&q=80" },
] as const;

const providers = [
  { name: "Sparkle Cleaners", service: "Cleaning", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=240&q=80" },
  { name: "FixIt Plumbing", service: "Plumbing", image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=240&q=80" },
  { name: "Zen Touch Massage", service: "Massage", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80" },
  { name: "Prime Painting", service: "Home Painting", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80" },
] as const;

const faqs = [
  "How does SEVEXA work?",
  "Are the providers verified?",
  "How do payments work?",
  "Can I cancel or reschedule a booking?",
  "What if I’m not satisfied with the service?",
] as const;

function Brand() {
  return (
    <a href="#" className="flex items-center gap-2 text-primary" aria-label="SEVEXA home">
      <span className="grid size-8 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">S</span>
      <span className="text-lg font-semibold tracking-[0.22em]">SEVEXA</span>
    </a>
  );
}

function SectionHeading({ children, action }: { children: ReactNode; action?: string }) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <h2 className="text-2xl font-semibold tracking-tight text-deep-purple sm:text-3xl">{children}</h2>
      {action && <a className="flex items-center gap-1 text-sm font-medium text-primary hover:underline" href="#">{action}<ArrowRight className="size-4" /></a>}
    </div>
  );
}

export default function Home() {
  return(
    <main className="min-h-screen overflow-hidden bg-background">
      <header className="border-b bg-card">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Brand />
          <nav className="hidden items-center gap-8 text-sm lg:flex" aria-label="Main navigation">
            <a href="#services" className="hover:text-primary">Explore</a>
            <a href="#how-it-works" className="hover:text-primary">How it works</a>
            <a href="#providers" className="hover:text-primary">Become a provider</a>
            <a href="#" className="hover:text-primary">Pricing</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden sm:inline-flex"><CircleUserRound /> Log in</Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </header>

      <section className="relative border-b bg-light-lilac">
        <Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85" alt="Calm, modern living room" fill priority className="object-cover object-center lg:object-[70%_50%]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#fafaf7_0%,rgba(250,250,247,0.96)_42%,rgba(250,250,247,0.18)_72%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-sage">Your trusted service marketplace</p>
            <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight text-deep-purple sm:text-7xl">All services.<br />One platform.</h1>
            <p className="mt-6 max-w-lg text-lg leading-7 text-foreground/80">Discover, compare, book and pay for trusted services — all in one place.</p>
            <div className="mt-8 grid overflow-hidden rounded-xl border bg-card p-2 shadow-lg shadow-deep-purple/10 sm:grid-cols-[1fr_1fr_auto]">
              <label className="flex h-12 items-center gap-3 px-3 text-muted-foreground"><Search className="size-5" /><span className="sr-only">Service</span><input className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none" placeholder="What service do you need?" /></label>
              <label className="flex h-12 items-center gap-3 border-t px-3 text-muted-foreground sm:border-t-0 sm:border-l"><MapPin className="size-5" /><span className="sr-only">Location</span><input className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none" placeholder="Enter your location" /></label>
              <Button size="lg" className="h-12 px-8">Search</Button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs"><span className="text-muted-foreground">Popular searches:</span>{["House Cleaning", "Plumbing", "Massage", "Home Painting"].map((item) => <a key={item} href="#" className="rounded-full border bg-card/90 px-3 py-1.5 text-primary hover:bg-accent">{item}</a>)}</div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {categories.map(({ name, icon: Icon }) => <a key={name} href="#" className="flex min-h-24 flex-col items-center justify-center gap-3 rounded-xl border bg-card px-2 text-center text-xs font-medium transition hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"><Icon className="size-7 text-primary" />{name}</a>)}
        </div>
        <div className="mt-12"><SectionHeading action="View all">Popular services</SectionHeading>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{services.map((service) => <Card key={service.name} className="gap-0 py-0 transition hover:-translate-y-1 hover:shadow-md"><div className="relative h-44"><Image src={service.image} alt={service.name} fill className="object-cover" /><span className="absolute right-3 top-3 rounded-full bg-card/90 p-2 text-primary">♡</span></div><CardContent className="p-4"><h3 className="font-semibold">{service.name}</h3><div className="mt-2 flex items-center justify-between text-xs"><span className="flex items-center gap-1"><Star className="size-3 fill-amber-400 text-amber-400" />4.9 <span className="text-muted-foreground">(1.5k)</span></span><span className="text-muted-foreground">From <b className="text-foreground">{service.price}</b></span></div></CardContent></Card>)}</div>
        </div>
      </section>

      <section className="border-y bg-soft-stone/70"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">{[[ShieldCheck,"Verified providers","Background-checked and trusted"],[CreditCard,"Secure payments","Protected transactions"],[Headphones,"24/7 support","We’re here when you need us"],[HeartHandshake,"Money-back guarantee","Your satisfaction, guaranteed"]].map(([Icon,title,text]) => { const FeatureIcon = Icon as typeof ShieldCheck; return <div key={title as string} className="flex items-center gap-4"><FeatureIcon className="size-9 text-sage" /><div><h3 className="text-sm font-semibold">{title as string}</h3><p className="text-xs text-muted-foreground">{text as string}</p></div></div>; })}</div></section>

      <section id="how-it-works" className="mx-auto max-w-6xl px-5 py-16 sm:px-8"><SectionHeading>How SEVEXA works</SectionHeading><div className="grid gap-6 md:grid-cols-3">{[[Search,"1","Search & Explore","Find the right service from trusted providers near you."],[CalendarDays,"2","Book & Pay","Book in minutes and pay securely on the platform."],[Check,"3","Relax & Enjoy","Sit back and enjoy quality service, every time."]].map(([Icon,n,title,text]) => { const StepIcon = Icon as typeof Search; return <div key={title as string} className="relative rounded-xl border bg-card p-6"><span className="absolute right-5 top-5 grid size-7 place-items-center rounded-full bg-sage text-sm font-semibold text-white">{n as string}</span><StepIcon className="size-9 text-sage" /><h3 className="mt-5 font-semibold">{title as string}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text as string}</p></div>; })}</div></section>

      <section className="bg-light-lilac/60 py-16"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionHeading>Why choose SEVEXA</SectionHeading><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[[Wrench,"Convenience","Everything you need in one place."],[ShieldCheck,"Trusted professionals","Carefully vetted, quality providers."],[CreditCard,"Seamless payments","Safe, secure and hassle-free."],[MessageCircleMore,"Custom requests","Post a request and get matched fast."]].map(([Icon,title,text]) => { const WhyIcon = Icon as typeof Wrench; return <div key={title as string} className="rounded-xl bg-card p-5 ring-1 ring-border"><WhyIcon className="size-8 text-sage"/><h3 className="mt-4 font-semibold">{title as string}</h3><p className="mt-1 text-sm text-muted-foreground">{text as string}</p></div>; })}</div></div></section>

      <section id="providers" className="mx-auto max-w-7xl px-5 py-16 sm:px-8"><SectionHeading action="View all">Featured providers</SectionHeading><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{providers.map((provider) => <Card key={provider.name} className="items-center text-center"><Image src={provider.image} alt="" width={88} height={88} className="size-22 rounded-full object-cover ring-4 ring-accent"/><CardContent><h3 className="font-semibold">{provider.name} <span className="text-sage">●</span></h3><p className="text-xs text-muted-foreground">{provider.service}</p><p className="mt-2 text-sm"><Star className="mr-1 inline size-3 fill-amber-400 text-amber-400"/>4.9 <span className="text-muted-foreground">(1.8k)</span></p><Button variant="outline" className="mt-4 w-full">View services</Button></CardContent></Card>)}</div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2"><div className="rounded-2xl bg-light-lilac p-8"><h3 className="text-2xl font-semibold text-deep-purple">Find the right service fast</h3><p className="mt-2 max-w-sm text-sm text-muted-foreground">Explore top-rated services near you and book with confidence.</p><Button className="mt-6">Explore services</Button></div><div className="rounded-2xl bg-soft-sage p-8"><h3 className="text-2xl font-semibold text-deep-purple">Grow your business on SEVEXA</h3><p className="mt-2 max-w-sm text-sm text-deep-purple/70">Join trusted providers, reach more customers, and grow your reputation.</p><Button variant="secondary" className="mt-6 bg-sage text-white hover:bg-sage/90">Become a provider</Button></div></div>
      </section>

      <section className="border-y bg-card py-16"><div className="mx-auto max-w-6xl px-5 sm:px-8"><SectionHeading action="View all reviews">What our customers say</SectionHeading><div className="grid gap-5 md:grid-cols-3">{[["The booking was seamless and the service was outstanding!","Emily R."],["I booked a plumber late at night and they arrived the next morning.","Michael T."],["The platform is simple, secure and full of quality services.","Priya K."]].map(([quote,name]) => <blockquote key={name} className="rounded-xl border bg-background p-6"><div className="mb-3 text-amber-400">★★★★★</div><p className="text-sm leading-6">“{quote}”</p><footer className="mt-4 text-sm font-medium">— {name}</footer></blockquote>)}</div></div></section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8"><SectionHeading>Frequently asked questions</SectionHeading><div className="divide-y overflow-hidden rounded-xl border bg-card">{faqs.map((faq) => <details key={faq} className="group px-5"><summary className="flex cursor-pointer list-none items-center justify-between py-4 text-sm font-medium">{faq}<ChevronDown className="size-4 transition group-open:rotate-180"/></summary><p className="pb-4 text-sm leading-6 text-muted-foreground">SEVEXA makes it simple to find trusted providers, compare options and manage your service from one secure place.</p></details>)}</div></section>

      <section className="bg-deep-purple text-white"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center"><div><h2 className="text-3xl font-semibold">Ready to get started?</h2><p className="mt-1 text-sm text-white/70">Join SEVEXA today and experience services done right.</p></div><div className="flex gap-3"><Button className="bg-white text-deep-purple hover:bg-white/90">Explore services</Button><Button variant="outline" className="border-white/50 bg-transparent text-white hover:bg-white/10">Become a provider</Button></div></div></section>

      <footer className="bg-card"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.6fr_1fr_1fr_1fr]"><div><Brand/><p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">The all-in-one platform to discover, book and pay for trusted services with confidence.</p></div>{[["Product","Explore services","How it works","Pricing"],["Company","About us","Careers","Contact us"],["Resources","Help center","Safety center","Provider resources"]].map(([title,...links]) => <div key={title}><h3 className="text-sm font-semibold">{title}</h3><ul className="mt-4 space-y-3 text-sm text-muted-foreground">{links.map((link) => <li key={link}><a href="#" className="hover:text-primary">{link}</a></li>)}</ul></div>)}</div><div className="border-t"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:px-8"><p>© 2026 SEVEXA. All rights reserved.</p><p>English (US)</p></div></div></footer>
    </main>
  );
}