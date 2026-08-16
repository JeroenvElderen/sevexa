"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type LucideIcon } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  ChevronDown,
  CircleEllipsis,
  Dog,
  Flower2,
  House,
  Laptop,
  Menu,
  PackageCheck,
  Paintbrush,
  Search,
  Sparkles,
  Wrench,
} from "lucide-react";

type Category = {
  title: string;
  icon: LucideIcon;
  services: string[];
};

const categories: Category[] = [
  { title: "Home & Cleaning", icon: House, services: ["House Cleaning", "Deep Cleaning", "Move-out Cleaning", "Laundry"] },
  { title: "Repairs", icon: Wrench, services: ["Plumbing", "Electrical", "Appliance Repair", "Handyman"] },
  { title: "Wellness & Beauty", icon: Flower2, services: ["Massage", "Hair & Styling", "Nails", "Skincare"] },
  { title: "Moving & Delivery", icon: PackageCheck, services: ["Moving Help", "Delivery", "Furniture Assembly", "Packing & Unpacking"] },
  { title: "Tech Support", icon: Laptop, services: ["Computer Support", "TV & Streaming", "Wi-Fi & Networking", "Device Setup"] },
  { title: "Events", icon: CalendarDays, services: ["Catering", "Photography", "DJ & Music", "Event Planning"] },
  { title: "Lessons", icon: Sparkles, services: ["Tutoring", "Music Lessons", "Language Lessons", "Fitness Coaching"] },
  { title: "Pet Care", icon: Dog, services: ["Pet Sitting", "Dog Walking", "Grooming", "Training"] },
  { title: "Professional Services", icon: BriefcaseBusiness, services: ["Legal", "Accounting", "Consulting", "Tax Preparation"] },
  { title: "More", icon: CircleEllipsis, services: ["Senior Care", "Health & Care", "Coaching", "And more"] },
];

function getServiceHref(service: string) {
  if (service === "Plumbing") return "/categories/plumbing";
  return `/?service=${encodeURIComponent(service)}`;
}

export function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5 sm:gap-3" aria-label="SEVEXA home">
      <span className="grid size-7 rotate-45 grid-cols-2 gap-0.5 sm:size-8" aria-hidden="true">
        <i className="rounded-full bg-[#51207c]" />
        <i className="rounded-full bg-[#4b906d]" />
        <i className="rounded-full bg-[#4b906d]" />
        <i className="rounded-full bg-[#51207c]" />
      </span>
      <b className="text-sm tracking-[.2em] text-[#171323] sm:text-base sm:tracking-[.24em]">SEVEXA</b>
    </Link>
  );
}

function ExploreMenu({ close }: { close: () => void }) {
  return (
    <div id="explore-menu" className="absolute inset-x-0 top-full border-t border-[#ece8ef] bg-white px-4 pb-5 shadow-[0_18px_35px_rgba(44,24,61,0.12)] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px] pt-4">
        <p className="mb-3 text-sm font-semibold text-[#2f2640]">Browse categories</p>
        <div className="overflow-hidden rounded-2xl border border-[#e9e5eb] bg-white shadow-[0_8px_25px_rgba(50,31,65,0.04)]">
          <div className="grid lg:grid-cols-[1fr_190px]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5">
              {categories.map(({ title, icon: Icon, services }, index) => (
                <section key={title} className={`min-w-0 p-5 ${index < 5 ? "border-b" : ""} ${index % 5 !== 4 ? "lg:border-r" : ""} border-[#eeeaf0]`}>
                  <Link href={`/#${title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`} onClick={close} className="mb-3 flex items-center gap-2.5 font-semibold text-[#413451] transition hover:text-[#6a3291]">
                    <Icon className="size-6 shrink-0 stroke-[1.6] text-[#6a3291]" aria-hidden="true" />
                    <span className="truncate text-[13px]">{title}</span>
                  </Link>
                  <ul className="space-y-2 pl-8 text-xs text-[#71667b]">
                    {services.map((service) => <li key={service}><Link href={getServiceHref(service)} onClick={close} className="transition hover:text-[#51207c] hover:underline">{service}</Link></li>)}
                    <li className="pt-1"><Link href="/#services" onClick={close} className="font-medium text-[#7a50a1]">View all</Link></li>
                  </ul>
                </section>
              ))}
            </div>

            <Link href="/#services" onClick={close} className="group relative m-3 flex min-h-64 overflow-hidden rounded-xl bg-gradient-to-b from-[#f7f4f7] to-[#efebef] p-5 lg:flex-col">
              <div className="relative z-10 max-w-36">
                <p className="font-serif text-lg leading-snug text-[#3d2d4a]">Find the right service, right when you need it.</p>
                <p className="mt-2 text-xs leading-relaxed text-[#74697b]">Trusted professionals. Fair prices. Happy homes.</p>
              </div>
              <div className="absolute bottom-5 right-4 grid h-28 w-24 place-items-center rounded-[50%_50%_42%_42%] bg-[#d8c9db] text-[#51207c] shadow-inner" aria-hidden="true">
                <Paintbrush className="absolute -left-4 top-2 size-12 rotate-[-25deg] stroke-[1.4]" />
                <Wrench className="size-14 rotate-[-8deg] stroke-[1.4]" />
                <Sparkles className="absolute -right-2 top-0 size-8 text-[#5a9678]" />
              </div>
              <span className="absolute bottom-4 left-5 z-10 inline-flex items-center gap-1 text-xs font-semibold text-[#603382] group-hover:underline lg:hidden">Explore all <ArrowRight className="size-3" /></span>
            </Link>
          </div>
          <Link href="/#services" onClick={close} className="hidden items-center justify-end gap-2 border-t border-[#eeeaf0] px-6 py-3 text-xs font-semibold text-[#603382] transition hover:bg-[#faf8fb] lg:flex">Explore all categories <ArrowRight className="size-3.5" /></Link>
        </div>
      </div>
    </div>
  );
}

export function SiteNavbar({ active }: { active?: "how" | "everyone" }) {
  const [exploreOpen, setExploreOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function dismiss(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setExploreOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") setExploreOpen(false);
    }
    document.addEventListener("mousedown", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("mousedown", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="shell flex h-16 items-center justify-between gap-4 sm:h-20">
        <Logo />
        <nav className="hidden items-center gap-9 text-sm font-medium lg:flex" aria-label="Main navigation">
          <button type="button" aria-expanded={exploreOpen} aria-controls="explore-menu" onClick={() => setExploreOpen((open) => !open)} className={`relative flex h-20 items-center gap-1 transition hover:text-[#51207c] ${exploreOpen ? "text-[#51207c] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-[#51207c]" : ""}`}>
            Explore <ChevronDown className={`size-3.5 transition-transform ${exploreOpen ? "rotate-180" : ""}`} />
          </button>
          <Link href="/how-it-works" className={active === "how" ? "border-b-2 border-[#51207c] pb-2 text-[#51207c]" : ""}>How it works</Link>
          <Link href="/for-everyone" className={active === "everyone" ? "border-b-2 border-[#51207c] pb-2 text-[#51207c]" : ""}>For everyone</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/#help">Help</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden items-center gap-2 rounded-xl border border-[#e4dfe6] px-3 py-3 text-sm text-[#7b7181] xl:flex" aria-label="Search services or providers"><Search className="size-4" /><span className="w-36 text-left text-xs">Search services or providers...</span></button>
          <button className="hidden rounded-xl border px-5 py-3 text-sm font-semibold sm:block">Log in</button>
          <button className="hidden rounded-xl bg-[#3e1266] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#542080] sm:block">Get started <ArrowRight className="ml-1 inline size-4" /></button>
          <button className="grid size-10 place-items-center rounded-xl border border-black/10 lg:hidden" aria-label="Open navigation menu"><Menu /></button>
        </div>
      </div>
      {exploreOpen && <ExploreMenu close={() => setExploreOpen(false)} />}
    </header>
  );
}