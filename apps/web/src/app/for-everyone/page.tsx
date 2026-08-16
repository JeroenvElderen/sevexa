import Image from "next/image";
import {
  ArrowRight, BriefcaseBusiness, CalendarDays, Check,
  MessageCircle, ShieldCheck, Sparkles, Star, Users,
} from "lucide-react";
import { Logo, SiteNavbar } from "@/components/site-navbar";

type Path = "people" | "business";
const colors = { people: "#52208a", business: "#226846" };

const offers = [
  { path: "people", title: "Need a service", intro: "Find trusted people for tasks around your home and life.", items: ["Home cleaning", "Dog walking", "Tutoring", "Plumbing", "Massage", "Handyperson", "Moving help"], button: "Find services" },
  { path: "people", title: "Offer a service", intro: "Earn on your own terms by offering your skills.", items: ["Set your own schedule", "Choose your services", "Get discovered locally", "Build your reputation", "Message & book easily", "Get paid securely"], button: "Start offering" },
  { path: "business", title: "Professional services", intro: "For solo professionals and small teams.", items: ["Consultants", "Therapists & coaches", "Personal trainers", "Photographers", "Event planners", "Wellness providers", "And more"], button: "Grow with SEVEXA" },
  { path: "business", title: "Business services", intro: "For companies and service organizations.", items: ["Cleaning companies", "Repair companies", "Moving companies", "Event businesses", "Agencies", "And more"], button: "Join as a business" },
] as const;

const useCases = [
  ["Book help at home", "Find trusted help for cleaning, repairs, moving, and more.", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=500&q=85"],
  ["Earn by offering services", "Offer your skills and get paid on your terms.", "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=500&q=85"],
  ["Manage a client pipeline", "Handle inquiries, quotes, and bookings in one place.", "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=85"],
  ["Run a service business", "Manage jobs, staff, and operations with ease.", "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=500&q=85"],
  ["Deliver unforgettable events", "Plan, coordinate, and deliver events clients love.", "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=500&q=85"],
  ["Provide expert services", "Consult, advise, and support clients professionally.", "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=85"],
] as const;

function SectionTitle({ children, note }: { children: React.ReactNode; note?: string }) {
  return <header className="mb-8 text-center"><h2 className="font-serif text-[36px] leading-none text-[#11162f]">{children}</h2>{note && <p className="mt-2 text-sm text-[#6d7180]">{note}</p>}</header>;
}

function OfferCard({ index }: { index: number }) {
  const card = offers[index];
  const filled = index % 2 === 0;
  return <article className="flex min-h-[390px] flex-col rounded-xl border border-[#e4e3e5] bg-white p-6 shadow-[0_4px_18px_rgba(30,20,40,.035)]">
    <h3 className="font-serif text-lg" style={{ color: colors[card.path] }}>{card.title}</h3>
    <p className="mt-3 min-h-12 text-sm leading-5 text-[#555d70]">{card.intro}</p>
    <ul className="mt-5 space-y-2 text-sm text-[#31384d]">{card.items.map(item => <li key={item} className="flex items-center gap-2"><Check className="size-3.5 rounded-full border p-[1px]" style={{ color: colors[card.path] }}/>{item}</li>)}</ul>
    <button className="mt-auto flex h-12 items-center justify-center gap-2 rounded-md border text-xs font-semibold text-white" style={{ background: filled ? colors[card.path] : "white", borderColor: colors[card.path], color: filled ? "white" : colors[card.path] }}>{card.button}<ArrowRight className="size-3.5"/></button>
  </article>;
}

export default function ForEveryone() {
  return <main className="bg-white text-[#13182f]">
    <SiteNavbar active="everyone" />
    <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10">
      <section className="grid gap-6 py-10 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
        <div>
          <span className="rounded-full bg-[#f0eafa] px-3 py-1.5 text-sm font-bold uppercase tracking-wide text-[#52208a]">Two paths. One platform.</span>
          <h1 className="mt-5 font-serif text-[clamp(50px,5.2vw,72px)] leading-[.98] tracking-[-.03em]">Choose your path<br/><span className="text-[#54208c]">on SEVEXA.</span></h1>
          <p className="mt-4 text-[16px] leading-6 text-[#555d70]">Whether you need help or offer it,<br/>SEVEXA connects people, professionals,<br/>and businesses for life&apos;s everyday needs.</p>
          <div className="mt-8 grid grid-cols-3 gap-3">{[[ShieldCheck,"Trusted & verified","Every time"],[BriefcaseBusiness,"Secure payments","Safe and simple"],[MessageCircle,"Real people","Real support"]].map(([Icon,label,note]) => <div key={label as string} className="flex items-center gap-2"><Icon className="size-8 shrink-0 rounded-full bg-[#f4f0fa] p-2 text-[#54208c]"/><p className="text-xs font-semibold leading-5">{label as string}<span className="block font-normal text-[#747989]">{note as string}</span></p></div>)}</div>
        </div>
        <div className="relative h-[470px] overflow-hidden rounded-2xl bg-[#eee9e4]">
          <Image fill priority sizes="(min-width:1024px) 650px, 100vw" className="object-cover object-center" alt="A happy family relaxing together at home" src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1300&q=90"/>
          <div className="absolute right-5 top-[115px] w-[230px] rounded-xl bg-white p-4 shadow-[0_12px_30px_rgba(26,19,38,.18)]">
            <div className="flex items-center"><span className="tracking-[-5px]">👩🏻👨🏽👩🏾‍🦱</span><b className="ml-3 text-sm">50k+</b></div><p className="ml-[70px] text-sm leading-5 text-[#656b7b]">people already<br/>using SEVEXA</p><hr className="my-3"/><div className="flex items-start gap-3"><Star className="size-7 rounded-full bg-emerald-50 p-1.5 text-[#226846]"/><div><b className="text-sm">4.8</b><p className="text-xs font-bold tracking-wider text-[#226846]">★★★★★</p><small className="text-sm text-[#656b7b]">Average rating</small></div></div>
          </div>
        </div>
      </section>

      <section className="relative grid gap-7 lg:grid-cols-2">
        {(["people","business"] as Path[]).map((path, group) => <article key={path} className={`rounded-3xl border p-8 ${group ? "bg-[#f6f9f6]" : "bg-[#faf7fd]"}`}>
          <header className="flex items-center gap-5"><span className={`grid size-20 shrink-0 place-items-center rounded-full ${group ? "bg-[#e8f0e9]" : "bg-[#f0e8f8]"}`} style={{color:colors[path]}}>{group ? <BriefcaseBusiness size={30}/> : <Users size={30}/>}</span><div><small className="text-xs">Path {group + 1}</small><h2 className="font-serif text-[31px] leading-8" style={{color:colors[path]}}>{group ? <>For professionals &<br/>businesses</> : <>For individuals &<br/>local service providers</>}</h2><p className="mt-2 text-sm leading-5 text-[#5f6574]">{group ? "For professional providers, teams, and businesses that deliver services." : "For everyday people who need help, or want to offer services independently."}</p></div></header>
          <div className="mt-7 grid gap-5 sm:grid-cols-2"><OfferCard index={group * 2}/><OfferCard index={group * 2 + 1}/></div>
        </article>)}
        <span className="absolute left-1/2 top-1/2 z-10 hidden size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border bg-white font-serif text-lg lg:grid">or</span>
      </section>

      <section className="py-12"><SectionTitle note="Two paths. One trusted platform.">Who SEVEXA is for</SectionTitle><div className="grid overflow-hidden rounded-2xl border md:grid-cols-2">{[
        ["Individuals & local service providers", ["Book services","Offer services","Earn on your terms","Build your reputation"]],
        ["Professionals & businesses", ["Manage clients","Manage your team","Grow your business","Build trust & brand"]],
      ].map(([heading, list], group) => <div key={heading as string} className={`p-8 ${group ? "bg-[#f8faf8] md:border-l" : "bg-[#fcfafd]"}`}><h3 className="text-center font-serif text-xl" style={{color: group ? colors.business : colors.people}}>{heading as string}</h3><p className="mt-2 text-center text-sm leading-5 text-[#6d7180]">Built for people who want simple tools, trusted connections,<br/>and the freedom to grow on their terms.</p><div className="mt-6 grid grid-cols-2 gap-x-7 gap-y-5">{(list as string[]).map((item, i) => <div key={item} className="flex items-center gap-3"><span className={`grid size-11 place-items-center rounded-full ${group ? "bg-[#eaf3ec]" : "bg-[#f2ecfa]"}`}>{i % 2 ? <Sparkles size={18}/> : <Users size={18}/>}</span><p className="text-sm font-semibold">{item}<span className="mt-1 block font-normal text-[#777c8b]">Tools made for you</span></p></div>)}</div></div>)}</div></section>

      <section><SectionTitle note="Real solutions for real life.">What you can do on SEVEXA</SectionTitle><div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">{useCases.map(([title, copy, image], i) => <article key={title}><div className="relative h-[170px] overflow-hidden rounded-lg"><Image fill sizes="200px" className="object-cover" src={image} alt=""/></div><h3 className="mt-2.5 text-sm font-bold" style={{color:i<2?colors.people:colors.business}}>{title}</h3><p className="mt-1.5 text-xs leading-5 text-[#6d7180]">{copy}</p></article>)}</div></section>

      <section className="py-12"><SectionTitle note="Simple steps. Powerful outcomes.">How it works for each path</SectionTitle><div className="grid overflow-hidden rounded-2xl border md:grid-cols-2">{[
        ["For individuals & local service providers", ["Find or offer","Connect","Book & pay","Get it done"]], ["For professionals & businesses", ["Attract clients","Manage work","Get paid","Grow & scale"]],
      ].map(([heading, steps], group) => <div key={heading as string} className={`p-5 ${group ? "bg-[#f8faf8] md:border-l" : "bg-[#fcfafd]"}`}><h3 className="text-center text-sm font-bold" style={{color:group?colors.business:colors.people}}>{heading as string}</h3><div className="relative mt-4 grid grid-cols-4 gap-2 before:absolute before:left-[12%] before:right-[12%] before:top-3 before:border-t before:border-dashed before:border-[#bbb]">{(steps as string[]).map((step,i) => <div className="relative text-center" key={step}><b className="mx-auto grid size-7 place-items-center rounded-full text-xs text-white" style={{background:group?colors.business:colors.people}}>{i+1}</b><h4 className="mt-2 text-xs font-bold">{step}</h4><p className="mt-1 text-sm leading-5 text-[#727786]">Simple, secure,<br/>and seamless.</p></div>)}</div></div>)}</div></section>

      <section><SectionTitle>Powerful features for every path</SectionTitle><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{[[ShieldCheck,"Verified & trusted"],[BriefcaseBusiness,"Secure payments"],[MessageCircle,"Messaging"],[CalendarDays,"Bookings"],[Star,"Reviews"],[Sparkles,"Flexible services"]].map(([Icon,label]) => <article key={label as string} className="rounded-xl border p-4"><div className="flex gap-2"><Icon className="size-8 shrink-0 rounded-full bg-[#f1ecf8] p-1.5 text-[#54208c]"/><div><h3 className="text-sm font-bold">{label as string}</h3><p className="mt-1 text-sm leading-5 text-[#737887]">Everything you need, all in one place.</p></div></div></article>)}</div></section>

      <section className="py-12"><SectionTitle>Loved by people on both paths</SectionTitle><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{[
        ["Sarah M.","Homeowner","I found a wonderful cleaner through SEVEXA. Booking was easy and the service was amazing!"], ["David R.","Tutor","I offer tutoring on SEVEXA and get students regularly. It’s flexible, safe, and I love the community."], ["Aisha K.","Wellness Studio Owner","SEVEXA helps us manage clients, bookings, and our team in one place. Total game changer."], ["James L.","Business Owner","As a cleaning company, we get quality leads and close more jobs with SEVEXA."],
      ].map(([name,role,quote]) => <article className="rounded-xl border p-5" key={name}><p className="text-sm font-bold tracking-wide text-[#d18a00]">★★★★★</p><p className="mt-2 text-xs leading-5 text-[#444b5e]">“{quote}”</p><p className="mt-3 text-xs font-bold">{name}<span className="block font-normal text-[#7b7f8c]">{role}</span></p></article>)}</div></section>

      <section className="mb-5 flex flex-col gap-4 rounded-xl bg-gradient-to-r from-[#3c1266] to-[#53207c] px-10 py-7 text-white lg:flex-row lg:items-center"><div className="mr-auto"><h2 className="font-serif text-3xl">Ready to get started?</h2><p className="mt-1 text-sm text-white/75">Choose your path and discover everything SEVEXA can do for you.</p></div><button className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-[#52208a]">I need help or offer services <ArrowRight className="ml-3 inline size-3"/></button><button className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-[#226846]">I&apos;m a professional or business <ArrowRight className="ml-3 inline size-3"/></button></section>
    </div>

    <footer className="border-t bg-[#fdfdfc]"><div className="mx-auto grid max-w-[1360px] gap-9 px-10 py-10 sm:grid-cols-2 lg:grid-cols-6"><div><Logo/><p className="mt-4 text-xs leading-5 text-[#737887]">One platform for home, life,<br/>and everything in between.</p></div>{["For individuals","For businesses","Company","Support"].map(title => <div key={title}><h3 className="text-xs font-bold">{title}</h3><p className="mt-2 text-sm leading-5 text-[#707584]">Find services<br/>Offer services<br/>How it works<br/>Help center</p></div>)}<div><h3 className="text-xs font-bold">Stay in the loop</h3><p className="mt-2 text-sm leading-5 text-[#707584]">Get tips, new features, and offers straight to your inbox.</p><div className="mt-3 flex rounded-md border bg-white p-1"><input aria-label="Email address" placeholder="Enter your email" className="min-w-0 flex-1 px-2 text-sm outline-none"/><button aria-label="Subscribe" className="grid size-7 place-items-center rounded bg-[#4b1778] text-white"><ArrowRight size={12}/></button></div></div></div><div className="border-t px-10 py-6 text-center text-sm text-[#858994]">© 2026 SEVEXA. All rights reserved.</div></footer>
  </main>;
}