const RaintelsMark = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Raintels"
      role="img"
    >
      <path
        d="M24 3.5c1.3 0 2.4.9 2.7 2.1l.5 2a15.6 15.6 0 0 1 3.7 1.5l1.8-1c1.1-.6 2.5-.4 3.4.5s1.1 2.3.5 3.4l-1 1.8c.7 1.2 1.2 2.4 1.5 3.7l2 .5c1.2.3 2.1 1.4 2.1 2.7v3.6c0 1.3-.9 2.4-2.1 2.7l-2 .5a15.6 15.6 0 0 1-1.5 3.7l1 1.8c.6 1.1.4 2.5-.5 3.4s-2.3 1.1-3.4.5l-1.8-1c-1.2.7-2.4 1.2-3.7 1.5l-.5 2A2.75 2.75 0 0 1 24 44.5a2.75 2.75 0 0 1-2.7-2.1l-.5-2a15.6 15.6 0 0 1-3.7-1.5l-1.8 1c-1.1.6-2.5.4-3.4-.5s-1.1-2.3-.5-3.4l1-1.8a15.6 15.6 0 0 1-1.5-3.7l-2-.5A2.75 2.75 0 0 1 3.5 27.8v-3.6c0-1.3.9-2.4 2.1-2.7l2-.5c.3-1.3.8-2.5 1.5-3.7l-1-1.8c-.6-1.1-.4-2.5.5-3.4s2.3-1.1 3.4-.5l1.8 1c1.2-.7 2.4-1.2 3.7-1.5l.5-2A2.75 2.75 0 0 1 24 3.5Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
        className="opacity-90"
      />

      <path
        d="M24 15c3.6 4.2 6 7.5 6 10.6a6 6 0 1 1-12 0C18 22.5 20.4 19.2 24 15Z"
        fill="currentColor"
      />

      <circle
        cx="24"
        cy="26"
        r="2.6"
        fill="var(--color-rain-500)"
      />
    </svg>
  );
};

function Logo({
  className = "",
  tone = "dark",
  showWord = true,
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 select-none ${
        tone === "dark" ? "text-ink-900" : "text-white"
      } ${className}`}
    >
      <RaintelsMark className="h-9 w-9 shrink-0" />

      {showWord && (
        <span className="font-display text-[1.35rem] font-semibold leading-none tracking-tight">
          raintels
          <span className="text-rain-500">.</span>
        </span>
      )}
    </span>
  );
}

export default Logo;