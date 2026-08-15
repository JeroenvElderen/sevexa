import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronDown,
  CircleUserRound,
  CreditCard,
  GraduationCap,
  Headphones,
  Heart,
  HeartHandshake,
  HomeIcon,
  Laptop,
  MapPin,
  Menu,
  MessageCircleMore,
  MoreHorizontal,
  Plus,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const categories = [
  { name: "Home & Repair", icon: HomeIcon, tint: "bg-[#f3ecf8]" },
  { name: "Cleaning", icon: Sparkles, tint: "bg-[#e8f3ed]" },
  { name: "Beauty & Wellness", icon: HeartHandshake, tint: "bg-[#fff0eb]" },
  { name: "Events", icon: CalendarDays, tint: "bg-[#f6f0e6]" },
  { name: "Tech & Digital", icon: Laptop, tint: "bg-[#eaf1f8]" },
  { name: "Business", icon: BriefcaseBusiness, tint: "bg-[#f1eff8]" },
  { name: "Lessons", icon: GraduationCap, tint: "bg-[#ecf4e8]" },
  { name: "More", icon: MoreHorizontal, tint: "bg-[#f1f1ed]" },
] as const;

const services = [
  { name: "House cleaning", detail: "Homes & apartments", price: "$39", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85" },
  { name: "Plumbing", detail: "Repairs & installation", price: "$59", image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=85" },
  { name: "Wellness massage", detail: "At home or in studio", price: "$79", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=85" },
  { name: "Home painting", detail: "Interior & exterior", price: "$150", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=85" },
] as const;

const providers = [
  { name: "Maya Collins", service: "Home cleaning", rating: "4.98", jobs: "312 jobs", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=85" },
  { name: "James Wilson", service: "Plumbing expert", rating: "4.96", jobs: "248 jobs", image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=85" },
  { name: "Amara Okafor", service: "Massage therapist", rating: "4.95", jobs: "189 jobs", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=85" },
  { name: "Noah Bennett", service: "Painter & decorator", rating: "4.94", jobs: "276 jobs", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=85" },
] as const;

const reviews = [
  { quote: "The whole experience felt effortless. I found a brilliant cleaner and booked her in less than five minutes.", name: "Emily Rhodes", role: "London", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=85" },
  { quote: "A plumber was at my door the next morning. Clear pricing, great communication, and no surprises.", name: "Michael Tran", role: "Manchester", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=85" },
  { quote: "I love having trusted local professionals in one place. SEVEXA is now the first place I look.", name: "Priya Kapoor", role: "Birmingham", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=85" },
] as const;

const openRequests = [
  { title: "Build a custom bookshelf", location: "Hackney", replies: 4, budget: "£350–£500", category: "Carpentry" },
  { title: "Plan a small garden party", location: "Richmond", replies: 7, budget: "Open to quotes", category: "Events" },
  { title: "Help me organise my home office", location: "Camden", replies: 3, budget: "Up to £180", category: "Custom request" },
] as const;

const faqs = ["How does SEVEXA work?", "Are the providers verified?", "How do payments work?", "Can I cancel or reschedule?", "What if I’m not satisfied?"] as const;

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#" className={`flex items-center gap-2.5 ${light ? "text-white" : "text-deep-purple"}`} aria-label="SEVEXA home">
      <span className={`grid size-9 place-items-center rounded-full text-sm font-bold ${light ? "bg-white text-deep-purple" : "bg-primary text-white"}`}>S</span>
      <span className="text-[17px] font-bold tracking-[0.2em]">SEVEXA</span>
    </a>
  );
}

function SectionHeading({ eyebrow, title, copy, action }: { eyebrow?: string; title: string; copy?: string; action?: string }) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        {eyebrow && <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-sage">{eyebrow}</p>}
        <h2 className="text-3xl font-semibold tracking-[-0.035em] text-deep-purple sm:text-4xl">{title}</h2>
        {copy && <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">{copy}</p>}
      </div>
      {action && <a className="group flex shrink-0 items-center gap-2 text-sm font-semibold text-primary" href="#">{action}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>}
    </div>
  );
}

function Feature({ icon: Icon, title, copy }: { icon: LucideIcon; title: string; copy: string }) {
  return <div className="flex items-center gap-3.5"><span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/80 text-sage shadow-sm"><Icon className="size-5" /></span><div><h3 className="text-sm font-semibold text-deep-purple">{title}</h3><p className="mt-0.5 text-xs text-muted-foreground">{copy}</p></div></div>;
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <header className="relative z-20 border-b border-deep-purple/5 bg-background/95 backdrop-blur">
        <div className="page-shell flex h-20 items-center justify-between">
          <Brand />
          <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/75 lg:flex" aria-label="Main navigation">
            <a href="#services" className="transition hover:text-primary">Explore services</a>
            <a href="#how-it-works" className="transition hover:text-primary">How it works</a>
            <a href="#providers" className="transition hover:text-primary">For providers</a>
            <a href="#reviews" className="transition hover:text-primary">Reviews</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden h-10 px-4 sm:inline-flex"><CircleUserRound /> Log in</Button>
            <Button className="h-10 rounded-full px-5 shadow-sm">Join SEVEXA</Button>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu"><Menu /></Button>
          </div>
        </div>
      </header>

      <section className="relative bg-[#f4f0f6]">
        <div className="pointer-events-none absolute -left-28 top-14 size-80 rounded-full bg-white/60 blur-3xl" />
        <div className="page-shell grid min-h-[650px] items-center gap-12 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/70 px-3.5 py-2 text-xs font-semibold text-primary shadow-sm"><ShieldCheck className="size-4 text-sage" /> Trusted by 25,000+ happy customers</div>
            <h1 className="text-[clamp(3.25rem,7vw,5.75rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-deep-purple">Life is easier<br />with the <span className="relative text-primary"><span className="relative z-10">right help.</span><span className="absolute bottom-1 left-0 -z-0 h-3 w-full rounded-full bg-soft-sage/80" /></span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-foreground/65">Book a listed service, or post exactly what you need and let trusted local professionals come to you.</p>
            <div className="mt-8 flex max-w-xl flex-col gap-2 rounded-2xl bg-white p-2.5 shadow-[0_18px_55px_rgba(62,39,83,0.13)] sm:flex-row">
              <label className="flex h-14 min-w-0 flex-1 items-center gap-3 rounded-xl px-3"><Search className="size-5 shrink-0 text-primary" /><span className="sr-only">Service</span><input className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" placeholder="What service do you need?" /></label>
              <span className="hidden w-px self-stretch bg-border sm:block" />
              <label className="flex h-14 min-w-0 flex-[0.7] items-center gap-3 rounded-xl px-3"><MapPin className="size-5 shrink-0 text-sage" /><span className="sr-only">Location</span><input className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" placeholder="Your postcode" /></label>
              <Button className="h-14 rounded-xl px-7 text-sm">Find help <ArrowRight /></Button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm"><span className="text-muted-foreground">Can’t find the right service?</span><a href="#requests" className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"><Plus className="size-4" /> Post a custom request</a></div>
            <div className="mt-7 flex items-center gap-3">
              <div className="flex -space-x-2.5" aria-label="Happy SEVEXA customers">
                {reviews.map((review) => <Image key={review.name} src={review.image} alt={review.name} width={40} height={40} className="size-10 rounded-full border-[3px] border-[#f4f0f6] object-cover" />)}
                <span className="grid size-10 place-items-center rounded-full border-[3px] border-[#f4f0f6] bg-sage text-[10px] font-bold text-white">25k+</span>
              </div>
              <p className="text-xs leading-5 text-muted-foreground"><span className="font-semibold text-foreground">4.9/5</span> from verified bookings<br /><span className="text-amber-500">★★★★★</span></p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[560px] lg:mx-0">
            <div className="relative ml-auto aspect-[4/4.45] w-[88%] overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_rgba(62,39,83,0.18)] sm:w-[82%]">
              <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90" alt="A welcoming, beautifully maintained home" fill priority sizes="(max-width: 1024px) 82vw, 44vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-purple/25 via-transparent to-transparent" />
            </div>
            <div className="absolute -left-1 top-[18%] rounded-2xl bg-white p-4 shadow-xl sm:left-2"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-soft-sage text-sage"><BadgeCheck className="size-5" /></span><div><p className="text-xs text-muted-foreground">Professionals</p><p className="text-sm font-semibold">100% verified</p></div></div></div>
            <div className="absolute -bottom-5 right-0 w-52 rounded-2xl bg-deep-purple p-4 text-white shadow-xl sm:right-5"><p className="text-xs text-white/60">Next booking</p><div className="mt-2 flex items-center gap-3"><Image src={providers[0].image} alt={providers[0].name} width={42} height={42} className="size-11 rounded-full object-cover ring-2 ring-white/20" /><div><p className="text-sm font-semibold">Home cleaning</p><p className="text-xs text-white/60">Today · 2:00 PM</p></div></div></div>
          </div>
        </div>
      </section>

      <section className="border-y border-deep-purple/5 bg-soft-stone/70"><div className="page-shell grid gap-6 py-7 sm:grid-cols-2 lg:grid-cols-4"><Feature icon={ShieldCheck} title="Vetted professionals" copy="Every provider is verified" /><Feature icon={CreditCard} title="Protected payments" copy="Pay securely on SEVEXA" /><Feature icon={Headphones} title="Real human support" copy="Here whenever you need us" /><Feature icon={HeartHandshake} title="Happiness promise" copy="Service you can count on" /></div></section>

      <section id="services" className="page-shell py-20 sm:py-24">
        <SectionHeading eyebrow="Made for real life" title="Help for every to-do" copy="From everyday upkeep to specialist support, find the right professional for the job." action="Browse all services" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {categories.map(({ name, icon: Icon, tint }) => <a key={name} href="#" className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-deep-purple/[0.07] bg-white p-3 text-center text-xs font-semibold shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"><span className={`grid size-12 place-items-center rounded-full ${tint} text-primary transition group-hover:scale-105`}><Icon className="size-5" /></span>{name}</a>)}
        </div>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => <article key={service.name} className="group overflow-hidden rounded-3xl bg-white shadow-[0_5px_25px_rgba(62,39,83,0.07)] ring-1 ring-deep-purple/[0.06]"><div className="relative aspect-[4/3] overflow-hidden"><Image src={service.image} alt={service.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" /><button className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/90 text-deep-purple shadow-sm backdrop-blur" aria-label={`Save ${service.name}`}><Heart className="size-4" /></button></div><div className="p-5"><p className="text-xs text-muted-foreground">{service.detail}</p><h3 className="mt-1 text-lg font-semibold text-deep-purple">{service.name}</h3><div className="mt-4 flex items-center justify-between text-sm"><span className="flex items-center gap-1 font-medium"><Star className="size-4 fill-amber-400 text-amber-400" />4.9 <span className="font-normal text-muted-foreground">(1.5k)</span></span><span className="text-muted-foreground">from <b className="text-foreground">{service.price}</b></span></div></div></article>)}
        </div>
      </section>

      <section id="requests" className="border-y border-deep-purple/5 bg-light-lilac/65 py-20 sm:py-24">
        <div className="page-shell grid items-start gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sage">Anything you need</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-deep-purple sm:text-4xl">Don’t see it listed?<br />Just ask.</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">Describe the result you want, add your budget and timing, then receive replies from interested providers. You choose who feels right—there’s no obligation.</p>
            <Button className="mt-7 h-11 rounded-full px-6"><Plus /> Post your request</Button>
            <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground"><ShieldCheck className="size-4 text-sage" /> Your contact details stay private until you choose.</p>
          </div>
          <div>
            <div className="mb-4 flex items-center justify-between"><p className="text-sm font-semibold text-deep-purple">Requests receiving replies now</p><span className="rounded-full bg-soft-sage px-3 py-1 text-xs font-semibold text-sage">Live marketplace</span></div>
            <div className="space-y-3">{openRequests.map((request) => <article key={request.title} className="group rounded-2xl border border-deep-purple/[0.07] bg-white p-5 shadow-sm transition hover:border-primary/20 hover:shadow-md sm:flex sm:items-center sm:justify-between"><div><div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-light-lilac px-2.5 py-1 text-[11px] font-semibold text-primary">{request.category}</span><span className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="size-3.5" />{request.location}</span></div><h3 className="mt-3 text-lg font-semibold text-deep-purple">{request.title}</h3><p className="mt-1 text-sm text-muted-foreground">Budget: <span className="font-medium text-foreground">{request.budget}</span></p></div><div className="mt-4 flex items-center justify-between gap-6 border-t border-border pt-4 sm:mt-0 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0"><div className="text-center"><p className="text-lg font-semibold text-deep-purple">{request.replies}</p><p className="text-[11px] text-muted-foreground">provider replies</p></div><span className="grid size-10 place-items-center rounded-full bg-light-lilac text-primary transition group-hover:bg-primary group-hover:text-white"><Send className="size-4" /></span></div></article>)}</div>
            <div className="mt-4 rounded-2xl border border-dashed border-primary/20 bg-white/50 p-4 text-center text-sm text-muted-foreground">Providers: <a href="#providers" className="font-semibold text-primary hover:underline">browse requests and send an offer</a></div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-deep-purple py-20 text-white sm:py-24"><div className="page-shell"><div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-soft-sage">Simple by design</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">A job well done,<br />in three easy steps.</h2><p className="mt-5 max-w-sm text-sm leading-7 text-white/60">Book something ready-made or ask for something completely unique. Either way, SEVEXA keeps it simple.</p><Button className="mt-8 h-11 rounded-full bg-white px-6 text-deep-purple hover:bg-white/90">Get started <ArrowRight /></Button></div><div className="grid gap-4 sm:grid-cols-3">{[[Search,"01","Tell us what you need","Search listed services or post a custom request for absolutely anything."],[MessageCircleMore,"02","Compare your options","Choose a service, or review replies and offers from interested providers."],[Check,"03","Book with confidence","Agree the details, book your provider, and pay safely through SEVEXA."]].map(([Icon,n,title,copy]) => { const StepIcon = Icon as LucideIcon; return <article key={title as string} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur"><span className="text-xs font-semibold text-soft-sage">{n as string}</span><StepIcon className="mt-12 size-8 text-soft-sage" /><h3 className="mt-5 text-lg font-semibold">{title as string}</h3><p className="mt-3 text-sm leading-6 text-white/55">{copy as string}</p></article>; })}</div></div></div></section>

      <section id="providers" className="page-shell py-20 sm:py-24">
        <SectionHeading eyebrow="Local favourites" title="Meet our top professionals" copy="Skilled, friendly and recommended by customers in your neighbourhood." action="Meet all providers" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{providers.map((provider) => <article key={provider.name} className="rounded-3xl border border-deep-purple/[0.07] bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="relative mx-auto w-fit"><Image src={provider.image} alt={provider.name} width={112} height={112} className="size-28 rounded-full object-cover ring-4 ring-light-lilac" /><span className="absolute bottom-1 right-0 grid size-7 place-items-center rounded-full bg-white"><BadgeCheck className="size-6 fill-sage text-white" /></span></div><h3 className="mt-5 text-lg font-semibold text-deep-purple">{provider.name}</h3><p className="mt-1 text-sm text-muted-foreground">{provider.service}</p><div className="mt-4 flex items-center justify-center gap-2 text-sm"><span className="flex items-center gap-1 font-semibold"><Star className="size-4 fill-amber-400 text-amber-400" />{provider.rating}</span><span className="size-1 rounded-full bg-border" /><span className="text-muted-foreground">{provider.jobs}</span></div><Button variant="outline" className="mt-5 h-10 w-full rounded-full border-primary/15 text-primary">View profile</Button></article>)}</div>
        <div className="mt-16 overflow-hidden rounded-[2rem] bg-soft-sage"><div className="grid items-center lg:grid-cols-[1fr_0.62fr]"><div className="p-8 sm:p-12"><p className="text-xs font-bold uppercase tracking-[0.2em] text-sage">Build your business</p><h3 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-deep-purple sm:text-4xl">Offer your services—and reply when the right request appears.</h3><p className="mt-4 max-w-lg text-sm leading-7 text-deep-purple/65">Create your own service listings so clients can book you directly, browse new customer requests, and send tailored offers for the work that suits you.</p><div className="mt-7 flex flex-wrap gap-3"><Button className="h-11 rounded-full px-6">Become a provider <ArrowRight /></Button><Button variant="outline" className="h-11 rounded-full border-deep-purple/15 bg-transparent px-6 text-deep-purple hover:bg-white/40">See customer requests</Button></div></div><div className="relative hidden h-full min-h-80 lg:block"><Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=85" alt="Service professional meeting a customer" fill className="object-cover" /></div></div></div>
      </section>

      <section id="reviews" className="border-y border-deep-purple/5 bg-light-lilac/65 py-20 sm:py-24"><div className="page-shell"><SectionHeading eyebrow="Loved by customers" title="Good help makes a difference" action="Read all reviews" /><div className="grid gap-5 md:grid-cols-3">{reviews.map((review) => <blockquote key={review.name} className="flex min-h-72 flex-col rounded-3xl bg-white p-7 shadow-sm"><div className="text-sm tracking-widest text-amber-400">★★★★★</div><p className="mt-6 flex-1 text-lg leading-8 text-deep-purple">“{review.quote}”</p><footer className="mt-7 flex items-center gap-3"><Image src={review.image} alt={review.name} width={48} height={48} className="size-12 rounded-full object-cover" /><div><p className="text-sm font-semibold">{review.name}</p><p className="text-xs text-muted-foreground">Verified customer · {review.role}</p></div></footer></blockquote>)}</div></div></section>

      <section className="page-shell max-w-4xl py-20 sm:py-24"><SectionHeading eyebrow="Need to know" title="Frequently asked questions" /><div className="divide-y divide-deep-purple/10 border-y border-deep-purple/10">{faqs.map((faq, index) => <details key={faq} className="group" open={index === 0}><summary className="flex cursor-pointer list-none items-center justify-between py-5 text-base font-semibold text-deep-purple">{faq}<span className="grid size-8 place-items-center rounded-full bg-light-lilac"><ChevronDown className="size-4 transition group-open:rotate-180" /></span></summary><p className="max-w-2xl pb-6 text-sm leading-7 text-muted-foreground">SEVEXA makes it easy to discover verified professionals, compare services, book a convenient time, and pay securely in one place.</p></details>)}</div></section>

      <section className="page-shell pb-20"><div className="relative overflow-hidden rounded-[2rem] bg-primary px-7 py-12 text-white sm:px-12 sm:py-14"><div className="absolute -right-20 -top-32 size-80 rounded-full border-[55px] border-white/[0.06]" /><div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center"><div><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Your to-do list just got easier.</h2><p className="mt-3 text-sm text-white/65">Join SEVEXA and book trusted help today.</p></div><div className="flex flex-wrap gap-3"><Button className="h-11 rounded-full bg-white px-6 text-deep-purple hover:bg-white/90">Explore services</Button><Button variant="outline" className="h-11 rounded-full border-white/30 bg-transparent px-6 text-white hover:bg-white/10">Join as a provider</Button></div></div></div></section>

      <footer className="bg-deep-purple text-white"><div className="page-shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]"><div><Brand light /><p className="mt-5 max-w-xs text-sm leading-6 text-white/50">The simpler way to discover, book, and pay trusted local professionals.</p></div>{[["Explore","All services","Popular near you","How it works"],["Company","About us","Careers","Contact"],["Support","Help centre","Safety","Provider resources"]].map(([title,...links]) => <div key={title}><h3 className="text-sm font-semibold">{title}</h3><ul className="mt-4 space-y-3 text-sm text-white/50">{links.map((link) => <li key={link}><a href="#" className="transition hover:text-white">{link}</a></li>)}</ul></div>)}</div><div className="border-t border-white/10"><div className="page-shell flex flex-col justify-between gap-2 py-5 text-xs text-white/40 sm:flex-row"><p>© 2026 SEVEXA. All rights reserved.</p><p>Privacy · Terms · English (UK)</p></div></div></footer>
    </main>
  );
}