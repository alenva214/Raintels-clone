import { useEffect } from "react";

export default function useRevealObserver() {
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");

    const elements = Array.from(
      document.querySelectorAll("[data-reveal]")
    );

    if (elements.length === 0) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        const delay = element.dataset.revealDelay ?? "0";
        element.style.transitionDelay = `${delay}ms`;
        element.classList.add("is-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target;
          const delay = element.dataset.revealDelay ?? "0";

          element.style.transitionDelay = `${delay}ms`;
          element.style.willChange = "transform, opacity";

          element.classList.add("is-visible");

          element.addEventListener(
            "transitionend",
            () => {
              element.style.willChange = "";
            },
            { once: true }
          );

          observer.unobserve(element);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);
}
