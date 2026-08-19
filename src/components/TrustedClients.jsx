const clients = [
  {
    name: "TEN",
    title: "Enterprise platform delivery",
  },
  {
    name: "TMX Transform",
    title: "Digital transformation partner",
  },
  {
    name: "KSHEC",
    title: "Kerala State Higher Education Council",
  },
  {
    name: "UNDP",
    title: "United Nations Development Programme",
  },
  {
    name: "Kerala Zoo & Museum",
    title: "Public digital experience",
  },
  {
    name: "KSSTM",
    title: "Science & technology museum",
  },
];

function TrustedClients() {
  /*
   * The original site repeats the client list so the marquee
   * can continuously scroll without an empty gap.
   */
  const marqueeClients = [...clients, ...clients];

  return (
    <section className="border-y border-ink-100 bg-white py-10">
      {/* Section heading */}
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-[0.14em] text-ink-400">
          Delivering for public institutions &amp; enterprises
        </p>
      </div>

      {/* Marquee */}
      <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-[marquee_36s_linear_infinite] items-center gap-16 group-hover:[animation-play-state:paused]">
          {marqueeClients.map((client, index) => (
            <span
              key={`${client.name}-${index}`}
              title={client.title}
              aria-hidden={index >= clients.length}
              className="whitespace-nowrap font-display text-2xl font-semibold text-ink-300 transition-colors hover:text-ink-700"
            >
              {client.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedClients;