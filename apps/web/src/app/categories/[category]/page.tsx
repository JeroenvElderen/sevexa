import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Flame,
  LockKeyhole,
  MapPin,
  Search,
  ShieldCheck,
  Star,
  Tag,
} from "lucide-react";
import { Logo, SiteNavbar } from "@/components/site-navbar";

type CategoryPageProps = { params: Promise<{ category: string }> };

const serviceCards = [
  { name: "Emergency Plumber", copy: "24/7 plumbing help for urgent leaks, clogs & flooding.", price: "$99", rating: "4.8", reviews: "2,210", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=85", popular: true },
  { name: "Leak Repair", copy: "Find and fix leaking pipes, faucets & appliances.", price: "$79", rating: "4.7", reviews: "981", image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=700&q=85" },
  { name: "Drain Cleaning", copy: "Clogged drains? We clear and restore proper flow.", price: "$99", rating: "4.6", reviews: "1,451", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=700&q=85" },
  { name: "Toilet Repair", copy: "Fix running, leaking or clogged toilets.", price: "$89", rating: "4.7", reviews: "703", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=85" },
  { name: "Water Heater Repair", copy: "Repair or maintenance for all water heater brands.", price: "$129", rating: "4.6", reviews: "1,342", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=85" },
  { name: "Pipe Installation", copy: "Install new pipes for homes or businesses.", price: "$139", rating: "4.7", reviews: "501", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=85" },
] as const;

const providers = [
  ["DrainRight Plumbing", "4.9", "1,104", "5.0 mi", "15 min", "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=85"],
  ["AquaFlow Services", "4.8", "875", "4.2 mi", "26 min", "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=85"],
  ["Pipe Masters Co.", "4.8", "1,656", "6.3 mi", "20 min", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=85"],
  ["SwiftFlow Plumbing", "4.7", "943", "5.1 mi", "21 min", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=85"],
  ["PureFlow Pros", "4.7", "2,081", "7.0 mi", "19 min", "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&q=85"],
  ["TrueLevel Plumber", "4.6", "1,038", "3.8 mi", "16 min", "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=85"],
] as const;

const serviceTypes = ["Emergency Plumbing", "Leak Repair", "Drain Cleaning", "Pipe Repair", "Toilet Repair", "Faucet Installation", "Water Heater"];
const popular = ["Emergency Plumbing", "Leak Detection", "Drain Cleaning", "Toilet Repair", "Faucet Installation", "Water Heater Repair", "Garbage Disposal Repair", "Pipe Installation", "Repiping", "Sewer Drain Repair", "Bathroom Plumbing", "Kitchen Plumbing", "Whole House Plumbing", "Backflow Testing", "ADU services"];

function SectionTitle({ title, copy, action }: { title: string; copy: string; action?: string }) {
  return <div className="mb-5 flex items-end justify-between gap-4"><div><h2 className="font-serif text-2xl text-[#241146] sm:text-[28px]">{title}</h2><p className="mt-1 text-xs text-[#746d83]">{copy}</p></div>{action && <a href="#" className="hidden shrink-0 items-center gap-2 text-xs font-bold text-[#432079] sm:flex">{action}<ArrowRight className="size-4" /></a>}</div>;
}

function Footer() {
  const groups = [
    ["For Individuals", "Explore Services", "How it works", "Safety & trust", "Customer stories"],
    ["For Businesses", "Become a provider", "Business solutions", "Service categories", "Help center"],
    ["Company", "About SEVEXA", "Careers", "Press", "Blog"],
    ["Support", "Help & FAQs", "Contact us", "Trust & safety", "Accessibility"],
    ["Popular services", "Home Cleaning", "Plumbing", "Moving", "Mowing", "More"],
  ];
  return <footer className="border-t border-[#eeeaf2] bg-white"><div className="category-shell grid gap-9 py-12 sm:grid-cols-3 lg:grid-cols-[1.5fr_repeat(5,1fr)]"><div><Logo /><p className="mt-4 text-xs text-[#766f82]">Explore. Connect. Get it done.</p><div className="mt-5 flex gap-3 text-xs font-bold"><span>●</span><span>◎</span><span>◉</span><span>▶</span><span>in</span></div></div>{groups.map(([h, ...items]) => <div key={h}><b className="text-xs text-[#251646]">{h}</b>{items.map(item => <a href="#" key={item} className="mt-3 block text-[11px] text-[#756d83] hover:text-[#4a207a]">{item}</a>)}</div>)}</div><div className="category-shell flex flex-wrap justify-between gap-4 py-6 text-[10px] text-[#817a8a]"><span>© 2026 SEVEXA. All rights reserved.</span><span>United States　⌄　　　 English　⌄</span></div></footer>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const title = decodeURIComponent(category).replaceAll("-", " ");
  const displayTitle = title.charAt(0).toUpperCase() + title.slice(1);

  return <main className="min-h-screen bg-white text-[#241b35]">
    <SiteNavbar />
    <div className="category-shell py-5 text-xs text-[#766d8b]"><Link href="/">⌂</Link><span className="mx-3">›</span><Link href="/#services">Explore</Link><span className="mx-3">›</span><span>Categories</span><span className="mx-3">›</span><b className="capitalize text-[#2e1a52]">{displayTitle}</b></div>

    <section className="category-shell grid items-center gap-7 pb-7 md:grid-cols-[.78fr_1.22fr]">
      <div className="px-3 py-5 md:py-10"><h1 className="font-serif text-[clamp(2.7rem,5vw,4.6rem)] leading-[1.05] tracking-[-.035em] text-[#281551] capitalize">{displayTitle}<br />services near you</h1><p className="mt-5 max-w-md text-[15px] leading-7 text-[#766f85]">Find trusted plumbers for repairs, installations, leaks, drains, and emergencies. Fast, reliable, and available when you need them most.</p></div>
      <div className="relative min-h-64 overflow-hidden rounded-xl sm:min-h-80 md:min-h-[390px]"><Image src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=90" alt="Professional plumber working beneath a kitchen sink" fill priority className="object-cover" /></div>
    </section>

    <section className="category-shell">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {[[MapPin,"Enter location",""],[Tag,"Budget","Any"],[CalendarDays,"Availability","Anytime"],[Star,"Rating","4+ stars"],[Search,"Sort by","Best match"]].map(([Icon,label,value]) => { const I = Icon as typeof MapPin; return <button key={label as string} className="flex min-h-20 items-center gap-3 rounded-xl border border-[#e7e2ec] px-4 text-left shadow-[0_2px_9px_rgba(40,20,70,.03)]"><I className={`size-5 ${label === "Rating" ? "text-emerald-600" : "text-[#5e3990]"}`} /><span className="flex-1 text-[11px] text-[#766f82]">{label as string}{value && <b className="mt-1 block text-xs text-[#2d2142]">{value as string}</b>}</span>{value && <ChevronDown className="size-4 text-[#6e5e8d]" />}</button>})}
      </div>
      <div className="mt-5 flex gap-3 overflow-x-auto pb-2">{serviceTypes.map((item,i) => <button key={item} className={`flex shrink-0 items-center gap-3 rounded-lg border px-5 py-3.5 text-xs ${i===0 ? "border-[#3d176c] bg-[#3d176c] text-white shadow-lg" : "border-[#e5dfeb] text-[#342056]"}`}>{i===0 ? <Flame className="size-5" /> : <Droplets className="size-5 text-[#6638a0]" />}{item}</button>)}<button className="shrink-0 rounded-lg border border-[#e5dfeb] px-5 text-xs">More⌄</button></div>
    </section>

    <section className="category-shell py-11"><SectionTitle title="★  Featured plumbing services" copy="Most booked plumbing services, trusted by your neighbors." action="View all services" /><div className="relative"><button aria-label="Previous services" className="absolute -left-5 top-20 z-10 grid size-10 place-items-center rounded-full border bg-white shadow md:-left-7"><ChevronLeft className="size-5 text-[#4c2380]" /></button><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">{serviceCards.map(card => <article key={card.name} className="overflow-hidden rounded-xl border border-[#e7e1eb] bg-white shadow-[0_3px_12px_rgba(40,20,65,.04)]"><div className="relative h-44"><Image src={card.image} alt={card.name} fill className="object-cover" />{"popular" in card && card.popular && <span className="absolute left-2 top-2 rounded-full bg-[#4e9774] px-2 py-1 text-[9px] font-bold text-white">★ Popular</span>}</div><div className="p-4"><h3 className="font-serif text-base font-bold text-[#2b1852]">{card.name}</h3><p className="mt-2 min-h-12 text-[11px] leading-5 text-[#746d80]">{card.copy}</p><div className="mt-3 flex items-end justify-between text-[10px]"><span><b className="text-amber-500">★</b> <b>{card.rating}</b> <span className="text-[#8a8490]">({card.reviews})</span></span><span>From <b className="text-sm text-[#291552]">{card.price}</b></span></div></div></article>)}</div><button aria-label="Next services" className="absolute -right-5 top-20 z-10 grid size-10 place-items-center rounded-full border bg-white shadow md:-right-7"><ChevronRight className="size-5 text-[#4c2380]" /></button></div></section>

    <section className="category-shell pb-11"><SectionTitle title="Top-rated plumbers" copy="Highly rated plumbing professionals near you." action="View all providers" /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">{providers.map(([name,rating,reviews,distance,time,image]) => <article key={name} className="rounded-xl border border-[#e7e1eb] p-3"><div className="flex gap-3"><Image src={image} alt={name} width={64} height={82} className="h-[82px] w-16 rounded-lg object-cover" /><div className="min-w-0 pt-1 text-[10px]"><h3 className="truncate text-xs font-bold text-[#332153]">{name}</h3><p className="mt-2"><span className="text-amber-500">★</span> <b>{rating}</b> <span className="text-[#8b8492]">({reviews})</span></p><p className="mt-2 text-[#5b9279]">◆ {distance} away</p><p className="mt-2 text-[#726a82]">♙ Responds in {time}</p></div></div><div className="mt-3 border-t pt-2 text-[10px] text-[#58318d]"><BadgeCheck className="mr-1 inline size-4" /> Top Pro</div></article>)}</div></section>

    <section className="category-shell pb-9"><SectionTitle title="Popular in Plumbing" copy="Common plumbing service searches today." /><div className="flex flex-wrap gap-3">{popular.map(item => <a href="#" key={item} className="rounded-lg border border-[#e5e0e9] px-5 py-3 text-[11px] font-medium text-[#573083] hover:border-[#6a3d99]">{item}</a>)}</div></section>

    <section className="category-shell pb-5"><div className="grid rounded-xl border border-[#e1dbe7] bg-[#fcfbfd] sm:grid-cols-2 lg:grid-cols-4">{[[ShieldCheck,"Verified providers","All plumbers are background checked and verified."],[Tag,"Transparent pricing","Clear upfront prices with no hidden fees."],[LockKeyhole,"Secure payments","Safe & secure payments through SEVEXA."],[Star,"Real reviews","Genuine reviews from customers in your area."]].map(([Icon,h,c],i) => {const I=Icon as typeof Star; return <div key={h as string} className={`flex items-center gap-4 p-5 ${i<3 ? "lg:border-r" : ""}`}><span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#f0ebf7] text-[#54268b]"><I /></span><div><b className="text-sm text-[#2d1b50]">{h as string}</b><p className="mt-1 text-[10px] leading-4 text-[#756e82]">{c as string}</p></div></div>})}</div></section>

    <section className="category-shell pb-12"><div className="flex flex-col items-center justify-between gap-6 rounded-xl bg-gradient-to-r from-[#3b116a] to-[#321261] px-8 py-8 text-white md:flex-row"><div><h2 className="font-serif text-3xl">Need a reliable plumber fast?</h2><p className="mt-2 text-xs text-white/75">Book instantly or post a request and get matched<br className="hidden sm:block" /> with top-rated plumbers near you.</p></div><div className="grid w-full gap-4 sm:grid-cols-2 md:w-auto"><button className="min-w-64 rounded-lg bg-white px-8 py-5 text-xs font-bold text-[#462076]">Book a plumber now <ArrowRight className="ml-8 inline size-4" /></button><button className="min-w-64 rounded-lg border border-white/60 px-8 py-5 text-xs font-bold">Post a request <ArrowRight className="ml-8 inline size-4" /></button></div></div></section>
    <Footer />
  </main>;
}