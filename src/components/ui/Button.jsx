import { ArrowRight } from "lucide-react";

const variants = {
  primary:
    "bg-rain-500 text-white hover:bg-rain-600 shadow-[0_6px_20px_-6px_rgba(228,35,27,0.6)] hover:shadow-[0_10px_28px_-6px_rgba(228,35,27,0.7)] hover:-translate-y-0.5",

  dark:
    "bg-ink-900 text-white hover:bg-ink-800 hover:-translate-y-0.5",

  light:
    "bg-white text-ink-900 hover:bg-ink-50 shadow-sm hover:-translate-y-0.5",

  outline:
    "border border-ink-200 text-ink-800 hover:border-ink-900 hover:bg-ink-50",

  ghost:
    "text-ink-700 hover:text-ink-950 hover:bg-ink-50",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-13 px-7 text-base",
};

function Button({
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  children,
  ...props
}) {
  const classes = `
    group/btn
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    font-medium
    transition-all
    duration-200
    ease-[cubic-bezier(0.16,1,0.3,1)]
    focus-visible:outline-2
    focus-visible:outline-offset-2
    disabled:opacity-50
    disabled:pointer-events-none
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  const content = (
    <>
      {children}

      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;