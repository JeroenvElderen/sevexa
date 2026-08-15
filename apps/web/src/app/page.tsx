import Image from "next/image";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronDown,
  CircleUserRound,
  Globe2,
  HeartHandshake,
  Leaf,
  MapPin,
  Menu,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const services = [
  {
    name: "House Cleaning",
    note: "Sparkling home, stress-free",
    price: "$45",
    rating: "4.8 (230)",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Electrician",
    note: "Fix it right, the first time",
    price: "$70",
    rating: "4.9 (180)",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Dog Walking",
    note: "Happy walks for happy dogs",
    price: "$20",
    rating: "5.0 (210)",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Restaurant Reservations",
    note: "Book the best tables in town",
    price: "$15",
    rating: "4.8 (160)",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85",
  },
] as const;

const categories = [
  [
    "Cleaning",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=700&q=80",
  ],
  [
    "Repairs",
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=700&q=80",
  ],
  [
    "Transport",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=700&q=80",
  ],
  [
    "Events & Catering",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80",
  ],
  [
    "Health & Beauty",
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=700&q=80",
  ],
  [
    "Fitness & Training",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=80",
  ],
  [
    "Freelance & Digital",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80",
  ],
] as const;

const reviews = [
  [
    "Found a great cleaner for my home and now I have more free time!",
    "Emma R.",
    "Dallas, TX",
  ],
  [
    "Amazing plumber! Fair price and super fast. Highly recommend Sevexa!",
    "Mark T.",
    "Plano, TX",
  ],
  [
    "I booked a dog walker in minutes. Luna loves her walks every day!",
    "Sofia L.",
    "Austin, TX",
  ],
  [
    "Finally, a place where I can find trusted pros in one place.",
    "James K.",
    "Houston, TX",
  ],
] as const;

function Logo() {
  return (
    <a href="#" className="flex items-center gap-3" aria-label="SEVEXA home">
      <span className="grid size-8 grid-cols-2 gap-0.5 rotate-45">
        <i className="rounded-full bg-[#51207c]" />
        <i className="rounded-full bg-[#4b906d]" />
        <i className="rounded-full bg-[#4b906d]" />
        <i className="rounded-full bg-[#51207c]" />
      </span>
      <b className="tracking-[.24em] text-[#171323]">SEVEXA</b>
    </a>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-3xl leading-tight text-[#171323] md:text-4xl">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <main className="bg-white text-[#171323]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
        <div className="shell flex h-20 items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-9 text-sm font-medium lg:flex">
            <a href="#services">
              Explore <ChevronDown className="inline size-3" />
            </a>
            <a href="#how">How it works</a>
            <a href="#everyone">
              For everyone <ChevronDown className="inline size-3" />
            </a>
            <a href="#providers">Become a pro</a>
            <a href="#pricing">Pricing</a>
            <a href="#help">Help</a>
          </nav>
          <div className="flex gap-2">
            <button className="hidden rounded-xl border px-5 py-3 text-sm font-semibold sm:block">
              Log in
            </button>
            <button className="rounded-xl bg-[#3e1266] px-5 py-3 text-sm font-semibold text-white">
              Get started <ArrowRight className="ml-1 inline size-4" />
            </button>
            <button className="lg:hidden" aria-label="Menu">
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <section className="shell pt-5">
        <div className="hero relative overflow-hidden rounded-[26px] bg-[#f4f1ef]">
          <Image
            src="https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?auto=format&fit=crop&w=1600&q=90"
            alt="Woman relaxing at home while booking a service"
            fill
            priority
            className="object-cover object-[70%_45%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8f7f5] via-[#f8f7f5]/90 to-transparent" />
          <div className="relative z-10 max-w-2xl px-8 py-16 md:px-14 md:py-20">
            <span className="rounded-full bg-[#eee6f7] px-3 py-2 text-[11px] font-bold uppercase text-[#532185]">
              All services. One platform.
            </span>
            <h1 className="mt-5 font-serif text-5xl leading-[.98] tracking-tight md:text-7xl">
              Whatever you need,
              <br />
              find it on <span className="text-[#622797]">SEVEXA.</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-black/65">
              Discover trusted, local pros and services for every part of your
              life.
            </p>
            <div className="mt-8 flex max-w-xl items-center rounded-full bg-white p-2 shadow-xl">
              <Search className="ml-3 size-5 text-[#542080]" />
              <input
                className="min-w-0 flex-1 px-3 py-3 text-sm outline-none"
                placeholder="What service do you need?"
              />
              <span className="hidden items-center gap-1 rounded-full bg-[#fafafa] px-3 py-2 text-xs font-semibold sm:flex">
                <MapPin className="size-4 text-[#542080]" /> Dallas, TX
              </span>
              <button
                className="ml-2 grid size-11 shrink-0 place-items-center rounded-full bg-[#4d1775] text-white"
                aria-label="Search"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px]">
              <b>Popular right now:</b>
              {[
                "Cleaning",
                "Handyman",
                "Massage",
                "Lawn care",
                "Home repair",
              ].map((x) => (
                <span key={x} className="rounded-full bg-white/70 px-3 py-1.5">
                  {x}
                </span>
              ))}
            </div>
            <div className="mt-12 flex gap-10 text-sm">
              <div>
                <b className="text-lg">50k+</b>
                <p className="text-xs text-black/55">Happy customers</p>
              </div>
              <div>
                <b className="text-[#27784e]">★★★★★</b>
                <p className="text-xs text-black/55">4.8 average rating</p>
              </div>
            </div>
          </div>
          <div className="absolute right-6 top-12 hidden space-y-3 xl:block">
            {services.slice(0, 3).map((s, i) => (
              <div
                key={s.name}
                className="flex w-64 items-center gap-3 rounded-2xl bg-white p-3 shadow-xl"
              >
                <Image
                  src={s.image}
                  alt=""
                  width={64}
                  height={58}
                  className="h-14 w-16 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <b className="text-sm">{s.name}</b>
                  <p className="text-xs text-black/55">From {s.price}</p>
                  <p className="mt-1 text-[10px] text-[#28794e]">
                    ★ {s.rating}
                  </p>
                </div>
                <span className="grid size-8 place-items-center rounded-full bg-[#4b906d] text-white">
                  <ArrowRight className="size-3" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="shell py-12">
        <div className="text-center">
          <Heading>Explore services</Heading>
          <div className="mt-5 flex flex-wrap justify-center gap-3 text-sm">
            {[
              "Popular",
              "Home & Living",
              "Personal",
              "Professional",
              "Lifestyle",
              "All",
            ].map((x, i) => (
              <button
                key={x}
                className={`rounded-xl px-4 py-2 ${i === 0 ? "bg-[#f1ebf8] font-semibold text-[#542080]" : ""}`}
              >
                {x}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(([name, image]) => (
            <a
              href="#"
              key={name}
              className="group relative h-32 overflow-hidden rounded-xl bg-[#f2f2f2]"
            >
              <Image
                src={image}
                alt=""
                fill
                className="object-cover transition group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/45 to-transparent" />
              <b className="absolute left-5 top-5 font-serif text-lg">{name}</b>
              <span className="absolute bottom-4 left-5 grid size-8 place-items-center rounded-full bg-white text-[#552183]">
                <ArrowRight className="size-4" />
              </span>
            </a>
          ))}
          <a
            href="#"
            className="relative h-32 rounded-xl bg-[#f2f1f3] p-5 font-serif text-lg"
          >
            More categories
            <span className="absolute bottom-4 left-5 grid size-8 place-items-center rounded-full bg-white text-[#552183]">
              •••
            </span>
          </a>
        </div>
      </section>

      <section className="shell pb-8">
        <div className="mb-5 flex items-end justify-between">
          <Heading>Popular services near you</Heading>
          <a className="text-xs font-bold text-[#542080]" href="#">
            View all →
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.name}
              className="overflow-hidden rounded-xl border bg-white shadow-sm"
            >
              <div className="relative h-40">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded-md bg-white px-2 py-1 text-[11px] font-bold text-[#28794e]">
                  ★ {s.rating}
                </span>
              </div>
              <div className="p-4">
                <b>{s.name}</b>
                <p className="mt-1 text-xs text-black/50">{s.note}</p>
                <p className="mt-4 text-sm">
                  From <b>{s.price}</b>
                </p>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-2">
                    <CircleUserRound className="size-6 text-[#542080]" /> Top
                    Rated Pro
                  </span>
                  <button className="rounded-lg border px-3 py-2">Book</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="shell py-8">
        <div className="rounded-2xl bg-[#f6f4f8] p-7 text-center">
          <Heading>How SEVEXA works</Heading>
          <p className="mt-1 text-sm text-black/55">
            From request to results — it’s just a few simple steps.
          </p>
          <div className="mt-7 grid gap-3 md:grid-cols-5">
            {[
              [Search, "Search", "Find the service you need"],
              [Send, "Request", "Share a few details"],
              [Sparkles, "Compare", "Compare profiles & prices"],
              [CalendarCheck, "Book", "Book confidently"],
              [Check, "Get it done", "Enjoy the results"],
            ].map(([Icon, title, copy], i) => {
              const I = Icon as typeof Search;
              return (
                <div
                  key={title as string}
                  className="relative rounded-xl bg-white p-4 text-left"
                >
                  <span
                    className={`grid size-11 place-items-center rounded-xl ${i === 4 ? "bg-[#e4f0e9] text-[#347558]" : "bg-[#f1ebf8] text-[#612992]"}`}
                  >
                    <I />
                  </span>
                  <span className="absolute left-16 top-4 text-[10px]">
                    {i + 1}
                  </span>
                  <b className="absolute left-16 top-8 text-sm">
                    {title as string}
                  </b>
                  <p className="mt-3 text-xs leading-5 text-black/55">
                    {copy as string}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="everyone" className="shell grid gap-5 py-4 md:grid-cols-2">
        <div className="rounded-2xl bg-gradient-to-r from-[#351052] to-[#63218b] p-8 text-white">
          <div className="flex gap-5">
            <span className="grid size-14 place-items-center rounded-full bg-white/10">
              <HeartHandshake />
            </span>
            <div>
              <h3 className="font-serif text-2xl">Can’t find what you need?</h3>
              <p className="mt-2 max-w-sm text-sm text-white/70">
                Create a request and let pros come to you with custom offers.
              </p>
              <button className="mt-5 rounded-lg bg-white px-5 py-3 text-xs font-bold text-[#421461]">
                Create a request →
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-[#deebe3] p-8">
          <div className="flex gap-5">
            <span className="grid size-14 place-items-center rounded-full bg-white/40 text-[#377158]">
              <ShieldCheck />
            </span>
            <div>
              <h3 className="font-serif text-2xl">Safe. Secure. Trusted.</h3>
              <p className="mt-2 max-w-sm text-sm text-black/60">
                We verify providers, protect payments, and keep your data
                private.
              </p>
              <button className="mt-5 rounded-lg bg-white px-5 py-3 text-xs font-bold">
                Learn more →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-8 text-center">
        <Heading>Why people choose SEVEXA</Heading>
        <div className="mt-6 grid gap-4 text-left md:grid-cols-4">
          {[
            [
              CircleUserRound,
              "For everyone",
              "A platform for people, families & communities.",
            ],
            [
              Globe2,
              "Local & global",
              "Best local or far away, we’ve got you.",
            ],
            [
              Leaf,
              "Secure & reliable",
              "Every service is verified and protected.",
            ],
            [
              Send,
              "Support that cares",
              "Friendly support whenever you need help.",
            ],
          ].map(([Icon, t, c]) => {
            const I = Icon as typeof Search;
            return (
              <div
                key={t as string}
                className="flex gap-3 rounded-xl border p-5"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#edf3ef] text-[#3f7d60]">
                  <I />
                </span>
                <div>
                  <b className="font-serif">{t as string}</b>
                  <p className="mt-1 text-xs leading-5 text-black/55">
                    {c as string}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="shell pb-8">
        <div className="mb-5 flex justify-between">
          <Heading>Real experiences</Heading>
          <a href="#" className="text-xs font-bold text-[#542080]">
            View all →
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {reviews.map(([q, n, l]) => (
            <blockquote key={n} className="rounded-xl border p-5 text-sm">
              <p className="min-h-14">“{q}”</p>
              <div className="mt-5 flex justify-between">
                <span>
                  <b>{n}</b>
                  <small className="block text-black/45">{l}</small>
                </span>
                <span className="text-[#27784e]">★★★★★</span>
              </div>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="shell pb-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#371050] to-[#5e1d87] px-10 py-10 text-white">
          <div className="absolute right-20 top-0 hidden h-48 w-56 rotate-6 rounded-[35px] border-[10px] border-white bg-[#f7f3fa] md:block" />
          <h2 className="font-serif text-4xl">Ready to SEVEXA it?</h2>
          <p className="mt-2 text-sm text-white/70">
            Join thousands who trust Sevexa.
          </p>
          <div className="mt-6 flex gap-3">
            <button className="rounded-lg bg-white px-6 py-3 text-xs font-bold text-[#431563]">
              Get started →
            </button>
            <button className="rounded-lg border border-white/30 px-6 py-3 text-xs font-bold">
              Explore services
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="shell grid gap-8 py-10 md:grid-cols-5">
          <div>
            <Logo />
            <p className="mt-4 text-xs leading-5 text-black/50">
              All the services you need.
              <br />
              All in one place.
            </p>
          </div>
          {[
            [
              "Explore",
              "Popular services",
              "Categories",
              "Near me",
              "All services",
            ],
            ["Company", "About us", "Careers", "Press", "Blog"],
            [
              "Support",
              "Help center",
              "Contact us",
              "Safety center",
              "Trust & security",
            ],
          ].map(([h, ...links]) => (
            <div key={h}>
              <b className="text-sm">{h}</b>
              {links.map((x) => (
                <a
                  href="#"
                  key={x}
                  className="mt-3 block text-xs text-black/55"
                >
                  {x}
                </a>
              ))}
            </div>
          ))}
          <div>
            <b className="text-sm">Stay updated</b>
            <p className="mt-3 text-xs text-black/50">
              Get tips, offers & more.
            </p>
            <div className="mt-4 flex rounded-xl border p-1">
              <input
                className="min-w-0 flex-1 px-2 text-xs outline-none"
                placeholder="Enter your email"
              />
              <button className="grid size-9 place-items-center rounded-full bg-[#4b176f] text-white">
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="shell flex flex-wrap justify-between border-t py-5 text-[10px] text-black/45">
          <span>© 2026 SEVEXA. All rights reserved.</span>
          <span>
            Terms of Service　 Privacy Policy　 Cookie Policy　 Accessibility
          </span>
          <span>United States (English)</span>
        </div>
      </footer>
    </main>
  );
}
