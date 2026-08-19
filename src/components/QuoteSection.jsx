import Button from "./ui/Button";

export default function QuoteSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="container-x">
        <div data-reveal data-reveal-delay="0">
          <blockquote className="mx-auto max-w-4xl text-center">
            <p className="font-display text-3xl font-semibold leading-[1.2] tracking-tight text-ink-900 sm:text-4xl md:text-5xl md:leading-[1.15]">
              We don&apos;t bill hours. We take ownership — operating as <span className="text-gradient-rain">your trusted CTO</span> and steering your enterprise toward the future.
            </p>
          </blockquote>
        </div>

        <div data-reveal data-reveal-delay="120">
          <div className="mt-10 flex justify-center">
            <Button href="/company" variant="ghost" arrow>
              What drives us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}