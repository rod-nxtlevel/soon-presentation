const scoreData = [
  {
    name: "Strategy",
    score: 6,
    confidence: "Medium",
    note: "Credible wedge versus spreadsheets and heavy WFM, but the first-run experience still doesn’t sharpen the obvious choice."
  },
  {
    name: "User",
    score: 7,
    confidence: "Medium",
    note: "Soon clearly understands the operator persona, but that clarity is not yet translated into onboarding."
  },
  {
    name: "Model",
    score: 5,
    confidence: "High",
    note: "Trial-first and self-serve are directionally right, but value arrives too late to fully support the model."
  },
  {
    name: "Offer",
    score: 7,
    confidence: "Medium",
    note: "The public story is strong, though not yet irresistible in the first product session."
  },
  {
    name: "Onboarding",
    score: 4,
    confidence: "High",
    note: "Verification, re-sign-in, setup wizard, and survey all appear before the product proves value."
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
    note: "Some intent is clearly captured, but there is no visible evidence of tight first-value instrumentation."
  },
  {
    name: "Process",
    score: 4,
    confidence: "Low",
    note: "The observed inconsistencies suggest the optimization loop is still loose."
  },
  {
    name: "Team",
    score: 5,
    confidence: "Low",
    note: "The outputs imply a capable team, but product-growth alignment still looks incomplete."
  }
];

const stageData = [
  {
    title: "Stage 1",
    subtitle: "Build an Unshakeable Foundation",
    score: 6.0,
    note: "The wedge and user understanding are credible, but the model still fails to deliver value early enough."
  },
  {
    title: "Stage 2",
    subtitle: "Unlock Self-Serve Customers",
    score: 5.7,
    note: "Soon’s commercial story is stronger than the onboarding reality."
  },
  {
    title: "Stage 3",
    subtitle: "Ignite Exponential Expansion",
    score: 4.7,
    note: "Data, process, and team signals still look less mature from the outside."
  }
];

const flywheelData = [
  {
    title: "Attract",
    score: 7,
    note: "Public pricing, industry pages, and comparison framing are strong enough to pull qualified traffic."
  },
  {
    title: "Activate",
    score: 4,
    note: "The value handoff from signup to usable schedule is the weakest stage."
  },
  {
    title: "Revenue",
    score: 8,
    note: "In-product upgrade and real checkout are already best-in-class for this stage."
  },
  {
    title: "Retain / Expand",
    score: 6,
    note: "The category is sticky, but expansion triggers are not showcased early."
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
    note: "Light form, but the submit state is ambiguous and gives little progress context."
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
    title: "Team + profile + challenge setup",
    friction: 8,
    note: "Company-serving setup arrives before user-serving proof."
  },
  {
    step: "06",
    title: "Empty board state",
    friction: 5,
    note: "The product shell is real, but the first board still has no demonstrated value."
  },
  {
    step: "07",
    title: "AI/manual scheduling attempt",
    friction: 7,
    note: "Promising path, but the observed result state was too slow or ambiguous to create trust."
  }
];

const quickWins = [
  "Move the “Tell us your challenge” prompt out of first-run onboarding.",
  "Auto-create a demo board with sample data instead of presenting an empty board.",
  "Fix verification so the user lands authenticated inside the product.",
  "Make the first successful action unmistakable with clear progress and guaranteed result states.",
  "Unify plan naming and currency logic across site, app, and checkout."
];

const roadmap = [
  {
    window: "0–30 days",
    title: "Remove avoidable activation drag",
    items: [
      "Simplify the signup-to-first-board sequence",
      "Delay research questions until after value",
      "Create a guided first schedule path"
    ]
  },
  {
    window: "30–90 days",
    title: "Design around one first-job-to-be-done",
    items: [
      "Create team → board → role → person → schedule",
      "Turn checklist into a reliable progress engine",
      "Ship industry-specific starter templates"
    ]
  },
  {
    window: "90+ days",
    title: "Scale the flywheel intentionally",
    items: [
      "Instrument PQL thresholds around first-value behaviors",
      "Build publishing/sharing into activation",
      "Create a cleaner SMB-to-midmarket expansion path"
    ]
  }
];

const metrics = [
  "Visitor → signup start",
  "Signup start → password set",
  "Password set → email verified",
  "Email verified → first authenticated session",
  "First authenticated session → board created",
  "Board created → first shift created",
  "Board created → first successful AI-generated schedule",
  "Board created → first teammate invited",
  "Trial start → billing page viewed",
  "Billing page viewed → checkout opened",
  "Checkout opened → paid conversion"
];

function frictionClass(score) {
  if (score <= 3) return "friction-low";
  if (score <= 5) return "friction-medium";
  return "friction-high";
}

function renderScorecards() {
  const scoreGrid = document.getElementById("score-grid");
  const stageGrid = document.getElementById("stage-grid");
  const flywheelGrid = document.getElementById("flywheel-grid");
  const quickWinsNode = document.getElementById("quick-wins");
  const roadmapGrid = document.getElementById("roadmap-grid");
  const metricsGrid = document.getElementById("metrics-grid");
  const timeline = document.getElementById("activation-timeline");

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

  quickWinsNode.innerHTML = `
    <article class="roadmap-card">
      <span class="roadmap-card__window">Quick wins</span>
      <h3>Fix the sequence before adding more product surface area.</h3>
      <ul>${quickWins.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `;

  roadmapGrid.innerHTML = roadmap.map((item) => `
    <article class="roadmap-card">
      <span class="roadmap-card__window">${item.window}</span>
      <h3>${item.title}</h3>
      <ul>${item.items.map((entry) => `<li>${entry}</li>`).join("")}</ul>
    </article>
  `).join("");

  metricsGrid.innerHTML = metrics.map((item) => `
    <article class="metric-card">
      <p>${item}</p>
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

renderScorecards();
setupNavigation();
setupLightbox();
