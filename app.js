const journeyData = [
  {
    name: "First impression",
    score: 8,
    note: "Clear category framing, credible CTA, public pricing, and no-credit-card trial promise all help Soon look like a real PLG business."
  },
  {
    name: "Signup experience",
    score: 6,
    note: "The form is light and SSO-ready, but the verification detour and ambiguous password submit state reduce confidence."
  },
  {
    name: "First product experience",
    score: 5,
    note: "The board UI looks good once reached, but three setup steps and a survey arrive before user-serving proof."
  },
  {
    name: "Time to value",
    score: 4,
    note: "Too many steps sit between signup and a clearly populated schedule or reliable first win."
  },
  {
    name: "Upgrade path",
    score: 8,
    note: "The billing path is visible, in-product, and leads directly to Stripe Checkout without a sales detour."
  }
];

const activationSteps = [
  {
    step: "01",
    title: "Landing page",
    friction: 2,
    note: "Strong self-serve CTA and clear category framing."
  },
  {
    step: "02",
    title: "Signup and password",
    friction: 5,
    note: "The form is light, but the submit state does not clearly explain progress."
  },
  {
    step: "03",
    title: "Email verification",
    friction: 6,
    note: "The user leaves the product and loses momentum."
  },
  {
    step: "04",
    title: "Second sign-in",
    friction: 6,
    note: "Verification does not cleanly authenticate the user into the app."
  },
  {
    step: "05",
    title: "Team and profile setup",
    friction: 5,
    note: "Some fields are auto-filled, but the user is still working before the product proves itself."
  },
  {
    step: "06",
    title: "Challenge question",
    friction: 8,
    note: "Soon asks a qualitative research question before delivering a user-serving result."
  },
  {
    step: "07",
    title: "Empty board state",
    friction: 5,
    note: "The product shell is real, but the board is still empty when value should be obvious."
  },
  {
    step: "08",
    title: "AI or manual scheduling attempt",
    friction: 7,
    note: "Promising path, but the observed result was too slow or ambiguous to create trust."
  }
];

const scoreData = [
  {
    name: "Strategy",
    score: 6,
    confidence: "Medium",
    note: "The wedge versus spreadsheets and heavy WFM is credible, but the first-run sequence does not sharpen the obvious choice."
  },
  {
    name: "User",
    score: 7,
    confidence: "Medium",
    note: "Soon clearly understands the operator persona, but that clarity is not yet translated into activation."
  },
  {
    name: "Model",
    score: 5,
    confidence: "High",
    note: "Trial-first and self-serve are directionally right, but the model fails to deliver value early enough."
  },
  {
    name: "Offer",
    score: 7,
    confidence: "Medium",
    note: "The public story is strong, though the first product session is not yet differentiated enough to feel irresistible."
  },
  {
    name: "Onboarding",
    score: 4,
    confidence: "High",
    note: "Verification, re-sign-in, setup wizard, and the challenge survey all show up before value is proven."
  },
  {
    name: "Pricing",
    score: 6,
    confidence: "High",
    note: "Pricing is visible and self-serve, but naming and currency logic drift across the site, app, and checkout."
  },
  {
    name: "Data",
    score: 5,
    confidence: "Low",
    note: "Intent is clearly captured, but there is no visible evidence of rigorous first-value instrumentation."
  },
  {
    name: "Process",
    score: 4,
    confidence: "Low",
    note: "Observed inconsistencies suggest the optimization loop is still loose."
  },
  {
    name: "Team",
    score: 5,
    confidence: "Low",
    note: "The output implies a capable team, but product-growth alignment still looks incomplete from the outside."
  }
];

const stageData = [
  {
    title: "Stage 1",
    subtitle: "Build an Unshakeable Foundation",
    score: 6.0,
    note: "Soon has a credible wedge and clear user category, but the model still reaches value too late."
  },
  {
    title: "Stage 2",
    subtitle: "Unlock Self-Serve Customers",
    score: 5.7,
    note: "The commercial story is stronger than the onboarding reality."
  },
  {
    title: "Stage 3",
    subtitle: "Ignite Exponential Expansion",
    score: 4.7,
    note: "Data, process, and team signals are the least visible and least mature from the outside."
  }
];

const flywheelData = [
  {
    title: "Attract",
    score: 7,
    note: "Public pricing, comparison pages, and category framing are already strong enough to pull qualified traffic."
  },
  {
    title: "Activate",
    score: 4,
    note: "The value handoff from signup to usable schedule is the weakest stage."
  },
  {
    title: "Revenue",
    score: 8,
    note: "In-product upgrade and direct checkout are already best-in-class for this stage."
  },
  {
    title: "Retain / Expand",
    score: 6,
    note: "The category is sticky, but the expansion triggers are not showcased early enough."
  }
];

const quickWins = [
  {
    title: "Move the challenge prompt out of first-run onboarding",
    impact: "High leverage",
    note: "Ask for user research after the user creates a board, shift, or first schedule."
  },
  {
    title: "Auto-create a named demo board with sample data",
    impact: "High leverage",
    note: "Do not make an empty board the first proof point. Show an editable, partially populated schedule."
  },
  {
    title: "Fix the verification-to-login handoff",
    impact: "Trust repair",
    note: "After verification, the user should land authenticated inside the app instead of signing in again."
  },
  {
    title: "Make the first successful action unmistakable",
    impact: "Activation lift",
    note: "If AI takes time, show visible progress and a guaranteed result. If manual creation has prerequisites, expose them clearly."
  },
  {
    title: "Unify plan naming and currency logic",
    impact: "Revenue clarity",
    note: "The public site, in-app billing, and checkout should speak the same commercial language."
  }
];

const roadmap = [
  {
    window: "0–30 days",
    title: "Remove avoidable activation drag",
    items: [
      "Simplify signup-to-first-board sequencing",
      "Delay research questions until after value",
      "Create a guided first schedule path with a visible completion state"
    ]
  },
  {
    window: "30–90 days",
    title: "Design around one first job-to-be-done",
    items: [
      "Create team → board → role → person → schedule",
      "Turn the checklist into a reliable progress engine",
      "Ship industry-specific starter templates"
    ]
  },
  {
    window: "90+ days",
    title: "Scale the flywheel intentionally",
    items: [
      "Instrument explicit PQL thresholds",
      "Build a publish/share loop into activation",
      "Create a cleaner SMB-to-midmarket expansion path"
    ]
  }
];

const metricGroups = [
  {
    title: "Acquisition to trial",
    items: [
      "Visitor → signup start",
      "Signup start → password set",
      "Password set → email verified",
      "Email verified → first authenticated session"
    ]
  },
  {
    title: "Activation depth",
    items: [
      "First authenticated session → board created",
      "Board created → first shift created",
      "Board created → first successful AI-generated schedule",
      "Board created → first teammate invited"
    ]
  },
  {
    title: "Revenue intent",
    items: [
      "Trial start → billing page viewed",
      "Billing page viewed → checkout opened",
      "Checkout opened → paid conversion"
    ]
  }
];

const sources = [
  { label: "soon.works homepage", href: "https://soon.works/" },
  { label: "public pricing", href: "https://soon.works/pricing/" },
  { label: "about page", href: "https://soon.works/about/" },
  { label: "LinkedIn company page", href: "https://www.linkedin.com/company/soonhq/" },
  { label: "Fresh product screenshots from the March 21, 2026 assessment run" }
];

function frictionClass(score) {
  if (score <= 3) return "friction-low";
  if (score <= 5) return "friction-medium";
  return "friction-high";
}

function renderCollections() {
  const journeyGrid = document.getElementById("journey-grid");
  const timeline = document.getElementById("activation-timeline");
  const scoreGrid = document.getElementById("score-grid");
  const stageGrid = document.getElementById("stage-grid");
  const flywheelGrid = document.getElementById("flywheel-grid");
  const quickWinsNode = document.getElementById("quick-wins");
  const roadmapGrid = document.getElementById("roadmap-grid");
  const metricsGrid = document.getElementById("metrics-grid");
  const sourceList = document.getElementById("source-list");

  journeyGrid.innerHTML = journeyData.map((item) => `
    <article class="journey-card">
      <div class="journey-card__head">
        <div class="journey-card__name">${item.name}</div>
        <div class="journey-card__value">${item.score}/10</div>
      </div>
      <div class="journey-card__bar"><span class="journey-card__fill" style="--fill: ${item.score * 10}%"></span></div>
      <p class="journey-card__note">${item.note}</p>
    </article>
  `).join("");

  timeline.innerHTML = activationSteps.map((item) => `
    <article class="timeline-step">
      <div class="timeline-step__step">${item.step}</div>
      <div>
        <div class="timeline-step__title">${item.title}</div>
        <div class="timeline-step__note">${item.note}</div>
      </div>
      <div class="timeline-step__friction ${frictionClass(item.friction)}">${item.friction}/10</div>
    </article>
  `).join("");

  scoreGrid.innerHTML = scoreData.map((item) => `
    <article class="score-card">
      <div class="score-card__head">
        <div class="score-card__name">${item.name}</div>
        <div class="score-card__value">${item.score}/10</div>
      </div>
      <span class="score-card__confidence">${item.confidence} confidence</span>
      <div class="score-card__bar"><span class="score-card__fill" style="--fill: ${item.score * 10}%"></span></div>
      <p class="score-card__note">${item.note}</p>
    </article>
  `).join("");

  stageGrid.innerHTML = stageData.map((item) => `
    <article class="stage-card">
      <div class="stage-card__head">
        <div>
          <div class="stage-card__title">${item.title}</div>
          <div class="score-card__confidence">${item.subtitle}</div>
        </div>
        <div class="stage-card__value">${item.score.toFixed(1)}</div>
      </div>
      <div class="stage-card__bar"><span class="stage-card__fill" style="--fill: ${item.score * 10}%"></span></div>
      <p class="stage-card__note">${item.note}</p>
    </article>
  `).join("");

  flywheelGrid.innerHTML = flywheelData.map((item) => `
    <article class="flywheel-card">
      <div class="flywheel-card__head">
        <div class="flywheel-card__title">${item.title}</div>
        <div class="flywheel-card__value">${item.score}/10</div>
      </div>
      <div class="flywheel-card__bar"><span class="flywheel-card__fill" style="--fill: ${item.score * 10}%"></span></div>
      <p class="flywheel-card__note">${item.note}</p>
    </article>
  `).join("");

  quickWinsNode.innerHTML = quickWins.map((item) => `
    <article class="quick-card">
      <span class="quick-card__impact">${item.impact}</span>
      <h3>${item.title}</h3>
      <p>${item.note}</p>
    </article>
  `).join("");

  roadmapGrid.innerHTML = roadmap.map((item) => `
    <article class="roadmap-card">
      <span class="roadmap-card__window">${item.window}</span>
      <h3>${item.title}</h3>
      <ul>${item.items.map((entry) => `<li>${entry}</li>`).join("")}</ul>
    </article>
  `).join("");

  metricsGrid.innerHTML = metricGroups.map((group) => `
    <article class="metric-group">
      <h3>${group.title}</h3>
      <div class="metric-list">
        ${group.items.map((item) => `
          <article class="metric-card"><p>${item}</p></article>
        `).join("")}
      </div>
    </article>
  `).join("");

  sourceList.innerHTML = sources.map((item) => item.href
    ? `<li><a href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a></li>`
    : `<li>${item.label}</li>`).join("");
}

function setupNavigation() {
  const slides = [...document.querySelectorAll(".slide")];
  const railNav = document.querySelector(".rail__nav");
  const progressBar = document.getElementById("progress-bar");
  const statusLabel = document.getElementById("status-label");

  railNav.innerHTML = slides.map((slide, index) => `
    <a class="rail__link" href="#${slide.id}" data-target="${slide.id}">
      <span class="rail__index">${String(index + 1).padStart(2, "0")}</span>
      <span class="rail__title">${slide.dataset.title}</span>
    </a>
  `).join("");

  const links = [...railNav.querySelectorAll(".rail__link")];

  const updateActive = (index) => {
    links.forEach((link, linkIndex) => {
      link.classList.toggle("is-active", index === linkIndex);
    });
    progressBar.style.width = `${((index + 1) / slides.length) * 100}%`;
    statusLabel.textContent = `Slide ${index + 1} · ${slides[index].dataset.title}`;
  };

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const index = slides.indexOf(visible.target);
    if (index >= 0) updateActive(index);
  }, { threshold: [0.45, 0.65, 0.85] });

  slides.forEach((slide) => observer.observe(slide));
  updateActive(0);

  function jump(direction) {
    const currentIndex = links.findIndex((link) => link.classList.contains("is-active"));
    const nextIndex = Math.max(0, Math.min(slides.length - 1, currentIndex + direction));
    slides[nextIndex].scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => jump(Number(button.dataset.jump)));
  });

  window.addEventListener("keydown", (event) => {
    if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) {
      event.preventDefault();
      jump(1);
    }
    if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
      event.preventDefault();
      jump(-1);
    }
  });
}

function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const image = document.getElementById("lightbox-image");
  const caption = document.getElementById("lightbox-caption");

  document.querySelectorAll("[data-lightbox]").forEach((button) => {
    button.addEventListener("click", () => {
      image.src = button.dataset.lightbox;
      image.alt = button.querySelector("img")?.alt || "";
      caption.textContent = button.dataset.caption || "";
      lightbox.showModal();
    });
  });

  lightbox.addEventListener("click", (event) => {
    const rect = lightbox.getBoundingClientRect();
    const clickedInside = rect.top <= event.clientY
      && event.clientY <= rect.top + rect.height
      && rect.left <= event.clientX
      && event.clientX <= rect.left + rect.width;
    if (!clickedInside) lightbox.close();
  });
}

renderCollections();
setupNavigation();
setupLightbox();
