import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const swatches = [
  { name: "Aubergine", className: "bg-aubergine" },
  { name: "Sage", className: "bg-sage" },
  { name: "Soft Sage", className: "bg-soft-sage" },
  { name: "Light Lilac", className: "bg-light-lilac" },
  { name: "Soft Stone", className: "bg-soft-stone" },
] as const;

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16 sm:px-10">
      <section className="w-full max-w-5xl" aria-labelledby="preview-title">
        <div className="grid overflow-hidden rounded-2xl border border-border bg-card shadow-sm lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col justify-center px-7 py-12 sm:px-12 sm:py-16">
            <p className="mb-8 text-sm font-semibold tracking-[0.24em] text-primary">
              SEVEXA
            </p>
            <h1
              id="preview-title"
              className="max-w-xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
            >
              All services.
              <br />
              <span className="text-aubergine">One platform.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              A trusted marketplace connecting customers with skilled local
              professionals, all in one calm and simple experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg">Explore services</Button>
              <Button variant="secondary" size="lg">
                Become a provider
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Design-system preview · Not the final homepage
            </p>
          </div>

          <div className="flex items-center bg-accent p-6 sm:p-10">
            <Card className="w-full shadow-none">
              <CardHeader>
                <CardTitle>Built for trusted connections</CardTitle>
                <CardDescription>
                  Semantic surfaces, accessible controls, and a composed brand
                  palette ready for the SEVEXA marketplace.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 lg:grid-cols-2 xl:grid-cols-5">
                  {swatches.map((swatch) => (
                    <div key={swatch.name} className="min-w-0">
                      <div
                        className={`h-12 rounded-lg border border-border ${swatch.className}`}
                        aria-hidden="true"
                      />
                      <p className="mt-2 truncate text-xs text-muted-foreground">
                        {swatch.name}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
