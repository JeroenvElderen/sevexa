import Link from "next/link";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";

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

export function SiteNavbar({ active }: { active?: "how" }) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="shell flex h-16 items-center justify-between gap-4 sm:h-20">
        <Logo />
        <nav className="hidden items-center gap-9 text-sm font-medium lg:flex" aria-label="Main navigation">
          <Link href="/#services">Explore <ChevronDown className="inline size-3" /></Link>
          <Link href="/how-it-works" className={active === "how" ? "border-b-2 border-[#51207c] pb-2 text-[#51207c]" : ""}>How it works</Link>
          <Link href="/#everyone">For everyone <ChevronDown className="inline size-3" /></Link>
          <Link href="/#providers">Become a pro</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/#help">Help</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden rounded-xl border px-5 py-3 text-sm font-semibold sm:block">Log in</button>
          <button className="hidden rounded-xl bg-[#3e1266] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#542080] sm:block">
            Get started <ArrowRight className="ml-1 inline size-4" />
          </button>
          <button className="grid size-10 place-items-center rounded-xl border border-black/10 lg:hidden" aria-label="Open navigation menu">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}