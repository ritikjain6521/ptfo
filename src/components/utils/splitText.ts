import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextSplitter } from "../../utils/textSplitter";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: TextSplitter;
}

gsap.registerPlugin(ScrollTrigger);

// Track whether we've registered the refresh listener to prevent stacking
let refreshListenerAdded = false;

export default function setSplitText() {
  try {
  const isMobile = window.innerWidth <= 1024;

  // On mobile, skip GSAP scroll animations entirely —
  // just make everything visible via CSS so the content is always readable.
  if (isMobile) {
    const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
    const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

    paras.forEach((para: ParaElement) => {
      // Kill any lingering animation and revert split markup
      if (para.anim) {
        para.anim.kill();
        para.anim = undefined;
      }
      if (para.split) {
        para.split.revert();
        para.split = undefined;
      }
      // First set visible, then clear transforms separately
      gsap.set(para, { opacity: 1, visibility: "visible" });
      gsap.set(para, { clearProps: "transform,y,x,rotate" });
      para.classList.add("visible");
    });

    titles.forEach((title: ParaElement) => {
      if (title.anim) {
        title.anim.kill();
        title.anim = undefined;
      }
      if (title.split) {
        title.split.revert();
        title.split = undefined;
      }
      gsap.set(title, { opacity: 1, visibility: "visible" });
      gsap.set(title, { clearProps: "transform,y,x,rotate" });
    });

    return; // Skip GSAP scroll-triggered animations on mobile
  }

  // ── Desktop: full scroll-triggered split-text animations ──
  ScrollTrigger.config({ ignoreMobileResize: true });

  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
      para.split?.revert();
    }

    para.split = new TextSplitter(para, {
      type: "lines,words",
      linesClass: "split-line",
    });

    para.anim = gsap.fromTo(
      para.split.words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });

  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
      title.split?.revert();
    }
    title.split = new TextSplitter(title, {
      type: "chars,lines",
      linesClass: "split-line",
    });
    title.anim = gsap.fromTo(
      title.split.chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });

  // Register the refresh listener only once to avoid infinite recursion
  if (!refreshListenerAdded) {
    refreshListenerAdded = true;
    ScrollTrigger.addEventListener("refresh", () => {
      // Only re-run on desktop to avoid triggering mobile fallback loop
      if (window.innerWidth > 1024) {
        setSplitText();
      }
    });
  }
  } catch (err) {
    console.warn("[setSplitText] Error:", err);
  }
}
