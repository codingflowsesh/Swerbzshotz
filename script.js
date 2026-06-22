const galleryRegistry = Array.isArray(window.SWERBZ_GALLERIES)
  ? window.SWERBZ_GALLERIES
  : [];

const featuredWorkItems = galleryRegistry.map((gallery) => {
  const coverAlt = gallery.coverAlt || `${gallery.title} cover image`;

  return {
    ...gallery,
    badge: gallery.badge || `${gallery.category} Gallery`,
    sessionType: gallery.sessionType || `${gallery.category} Session`,
    location: gallery.location || gallery.category,
    dateLabel: gallery.dateLabel || "",
    meta: gallery.meta || gallery.description,
    cardPrompt: gallery.cardPrompt || `Tap to open ${gallery.title}`,
    photoClass: gallery.photoClass || "photo-graduation",
    alt: coverAlt,
    images: gallery.images.map((src, index) => ({
      src,
      alt: index === 0 ? coverAlt : `${gallery.title} image ${index + 1}`,
    })),
  };
});

const exploreCategoryItems = [
  {
    category: "Graduation",
    sessionType: "Graduation Session",
    meta: "Caps, gowns, families, and campus milestones",
    photoClass: "photo-graduation",
    alt: "Graduation session preview near the UCLA fountain.",
    images: [
      {
        src: "assets/gallery/graduation/grad-janine-fountain.jpg",
        alt: "Graduation portrait session preview near the UCLA fountain.",
      },
    ],
  },
  {
    category: "Portrait",
    sessionType: "Portrait Session",
    meta: "Personal branding, lifestyle, and confident solo portraits",
    photoClass: "photo-portraits",
    alt: "Portrait session preview beside a rail fence.",
    images: [
      {
        src: "assets/galleries/portrait-session/portrait-platform-walk.jpg",
        alt: "Portrait session preview on a train platform.",
      },
    ],
  },
  {
    category: "Couples",
    sessionType: "Couples Session",
    meta: "Warm storytelling, connection, and candid moments for two",
    photoClass: "photo-couples",
    alt: "Couples session preview during wedding vows.",
    images: [
      {
        src: "assets/gallery/couples/couples-vows.jpg",
        alt: "Couples session preview during wedding vows.",
      },
    ],
  },
  {
    category: "Event",
    sessionType: "Event Session",
    meta: "Celebrations, parties, and highlight coverage",
    photoClass: "photo-events",
    alt: "Event session preview at a poolside celebration.",
    images: [
      {
        src: "assets/gallery/events/event-poolside-candid.jpg",
        alt: "Event session preview at a poolside celebration.",
      },
    ],
  },
];

const bookingData = {
  sessionType: "",
  dateTime: "",
  confirmationEmail: "",
  contactMethod: "",
  contactValue: "",
};

const featuredStage = document.getElementById("featuredStage");
const featuredDots = document.getElementById("featuredDots");
const featuredSummary = document.querySelector(".featured-summary");
const featuredSummarySession = document.getElementById(
  "featuredSummarySession",
);
const featuredSummaryTitle = document.getElementById("featuredSummaryTitle");
const featuredSummaryLocation = document.getElementById(
  "featuredSummaryLocation",
);
const featuredSummaryDate = document.getElementById("featuredSummaryDate");
const featuredSummaryButton = document.getElementById("featuredSummaryButton");
const headerNav = document.getElementById("headerNav");
const headerNavToggle = document.getElementById("headerNavToggle");
const siteHeader = document.querySelector(".site-header");
const heroPrimaryCta = document.querySelector(".hero-primary-cta");
const bookingSection = document.getElementById("booking");
const mobileBookButton = document.querySelector(".mobile-book-button");

const shootModal = document.getElementById("shootModal");
const shootModalPanel = document.getElementById("shootModalPanel");
const shootModalBody = document.getElementById("shootModalBody");
const shootModalSession = document.getElementById("shootModalSession");
const shootModalImage = document.getElementById("shootModalImage");
const shootModalThumbs = document.getElementById("shootModalThumbs");
const shootModalViewer = document.getElementById("shootModalViewer");
const shootModalViewerCard = document.querySelector(".shoot-modal-viewer-card");
const shootModalClose = document.getElementById("shootModalClose");
const shootModalPrev = document.getElementById("shootModalPrev");
const shootModalNext = document.getElementById("shootModalNext");

const categoryTrack = document.getElementById("categoryTrack");
const categoryDots = document.getElementById("categoryDots");
const pricingCards = Array.from(document.querySelectorAll(".pricing-card"));

const sessionButtons = Array.from(document.querySelectorAll("[data-session]"));
const slotButtons = Array.from(document.querySelectorAll("[data-slot]"));
const contactMethodButtons = Array.from(
  document.querySelectorAll("[data-method]"),
);
const contactFields = Array.from(document.querySelectorAll(".contact-field"));
const stepPanels = Array.from(document.querySelectorAll("[data-step-panel]"));
const stepIndicators = Array.from(
  document.querySelectorAll("[data-step-indicator]"),
);
const prefillSessionLinks = Array.from(
  document.querySelectorAll("[data-prefill-session]"),
);
const headerNavLinks = Array.from(headerNav.querySelectorAll("a"));
const headerNavSectionLinks = Array.from(
  headerNav.querySelectorAll(".header-nav-link"),
);
const bookingStepStatus = document.getElementById("bookingStepStatus");
const stepper = document.querySelector(".stepper");
const bookingLayout = document.querySelector(".booking-layout");
const bookingSummaryCard = document.querySelector(".booking-summary-card");

const summarySession = document.getElementById("summarySession");
const summaryDateTime = document.getElementById("summaryDateTime");
const summaryContact = document.getElementById("summaryContact");
const slotPreview = document.getElementById("slotPreview");

const sessionError = document.getElementById("sessionError");
const dateError = document.getElementById("dateError");
const contactError = document.getElementById("contactError");

const confirmationEmailInput = document.getElementById(
  "confirmationEmailInput",
);
const instagramInput = document.getElementById("instagramInput");
const textInput = document.getElementById("textInput");
const fullNameInput = document.getElementById("fullNameInput");
const shootNotesInput = document.getElementById("shootNotesInput");
const bookingForm = document.getElementById("bookingForm");
const bookingSessionInput = document.getElementById("bookingSessionType");
const bookingDateTimeInput = document.getElementById("bookingDateTime");
const bookingContactMethodInput = document.getElementById(
  "bookingPreferredContactMethod",
);
const bookingPhoneNumberInput = document.createElement("input");
const bookingInstagramHandleInput = document.createElement("input");

const confirmSession = document.getElementById("confirmSession");
const confirmDateTime = document.getElementById("confirmDateTime");
const confirmMethod = document.getElementById("confirmMethod");
const confirmEmail = document.getElementById("confirmEmail");
const confirmInfo = document.getElementById("confirmInfo");
const confirmName = document.getElementById("confirmName");
const confirmNotes = document.getElementById("confirmNotes");
const submitBookingButton = document.getElementById("submitBooking");

const focusableSelector =
  "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
const prefersReducedMotion = window.matchMedia?.(
  "(prefers-reduced-motion: reduce)",
) || { matches: false };
const bookingStepLabels = ["Session", "Date", "Contact", "Confirm"];

let currentStep = 1;
let categoryCards = [];
let featuredIndex = 0;
let featuredSlides = [];
let activeShootIndex = 0;
let activeShootImageIndex = 0;
let shootModalCloseTimer = 0;
let lastModalTrigger = null;
let isHeroVisible = false;
let isBookingVisible = false;
let navHighlightFrame = 0;
let featuredSummaryAnimationTimer = 0;
const shootModalTransitionMs = 920;

function createDots(container, total, options = {}) {
  if (!container) {
    return;
  }

  const {
    interactive = false,
    label = "Show slide",
    onSelect = null,
  } = options;

  container.innerHTML = "";

  for (let index = 0; index < total; index += 1) {
    if (interactive) {
      const button = document.createElement("button");
      const dot = document.createElement("span");

      button.type = "button";
      button.className = "scroll-dot-button";
      button.setAttribute("aria-label", `${label} ${index + 1}`);
      button.setAttribute("aria-pressed", "false");

      dot.className = "scroll-dot";
      button.appendChild(dot);
      button.addEventListener("click", () => {
        onSelect?.(index);
      });

      container.appendChild(button);
      continue;
    }

    const dot = document.createElement("span");
    dot.className = "scroll-dot";
    container.appendChild(dot);
  }
}

function updateDotGroup(container, activeIndex) {
  if (!container) {
    return;
  }

  Array.from(container.children).forEach((dot, index) => {
    const isActive = index === activeIndex;
    const innerDot = dot.querySelector?.(".scroll-dot");

    dot.classList.toggle("is-active", isActive);
    innerDot?.classList.toggle("is-active", isActive);

    if (dot instanceof HTMLButtonElement) {
      dot.setAttribute("aria-pressed", String(isActive));

      if (isActive) {
        dot.setAttribute("aria-current", "true");
      } else {
        dot.removeAttribute("aria-current");
      }
    }
  });
}

function getCategoryCardsPerPage() {
  if (window.matchMedia("(min-width: 1100px)").matches) {
    return categoryCards.length;
  }

  if (window.matchMedia("(min-width: 700px)").matches) {
    return 2;
  }

  return 1;
}

function getCategoryPageCount() {
  return Math.max(
    Math.ceil(categoryCards.length / getCategoryCardsPerPage()),
    0,
  );
}

function getCategoryPageIndex(cardIndex) {
  return Math.floor(cardIndex / getCategoryCardsPerPage());
}

function renderCategoryDots() {
  if (!categoryDots) {
    return;
  }

  const pageCount = getCategoryPageCount();
  const pageContainer = categoryDots.parentElement;

  if (pageContainer) {
    pageContainer.classList.toggle("is-hidden", pageCount <= 1);
  }

  categoryDots.innerHTML = "";

  if (pageCount <= 1) {
    return;
  }

  createDots(categoryDots, pageCount, {
    interactive: true,
    label: "Show category page",
    onSelect: (pageIndex) => {
      const targetIndex = Math.min(
        pageIndex * getCategoryCardsPerPage(),
        categoryCards.length - 1,
      );
      categoryCards[targetIndex]?.scrollIntoView({
        behavior: getMotionBehavior(),
        inline: "start",
        block: "nearest",
      });
      updateCategoryState(targetIndex);
    },
  });

  updateDotGroup(categoryDots, 0);
}

function updatePressedState(buttons, activeButton) {
  buttons.forEach((button) => {
    const isActive = button === activeButton;
    button.classList.toggle("is-selected", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function getMotionBehavior() {
  return prefersReducedMotion.matches ? "auto" : "smooth";
}

function setHeaderNavOpen(isOpen) {
  headerNav.classList.toggle("is-open", isOpen);
  siteHeader?.classList.toggle("is-nav-open", isOpen);
  headerNavToggle.setAttribute("aria-expanded", String(isOpen));
  headerNavToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
  syncMobileBookButtonVisibility();
}

function setMobileBookButtonHidden(isHidden) {
  if (!mobileBookButton) {
    return;
  }

  mobileBookButton.classList.toggle("is-hidden", isHidden);
}

function updateMobileBookViewportState() {
  if (heroPrimaryCta) {
    const heroCtaRect = heroPrimaryCta.getBoundingClientRect();
    const headerOffset = siteHeader?.offsetHeight || 0;
    isHeroVisible =
      heroCtaRect.bottom > headerOffset && heroCtaRect.top < window.innerHeight;
  }

  if (bookingSection) {
    const bookingRect = bookingSection.getBoundingClientRect();
    isBookingVisible =
      bookingRect.top < window.innerHeight && bookingRect.bottom > 0;
  }
}

function syncMobileBookButtonVisibility() {
  if (!mobileBookButton) {
    return;
  }

  const isMenuOpen = headerNav?.classList.contains("is-open");
  setMobileBookButtonHidden(isHeroVisible || isBookingVisible || isMenuOpen);
}

function syncCurrentNavLink() {
  if (!headerNavSectionLinks.length) {
    return;
  }

  const headerOffset =
    document.querySelector(".site-header")?.offsetHeight || 0;
  const scrollMarker =
    window.scrollY + headerOffset + window.innerHeight * 0.16;
  let activeLink = headerNavSectionLinks[0];

  headerNavSectionLinks.forEach((link) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (target && target.offsetTop <= scrollMarker) {
      activeLink = link;
    }
  });

  headerNavSectionLinks.forEach((link) => {
    const isCurrent = link === activeLink;
    link.classList.toggle("is-current", isCurrent);

    if (isCurrent) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function queueNavHighlightSync() {
  if (navHighlightFrame) {
    return;
  }

  navHighlightFrame = window.requestAnimationFrame(() => {
    navHighlightFrame = 0;
    syncCurrentNavLink();
    syncHeaderScrollState();
  });
}

function syncHeaderScrollState() {
  if (!siteHeader) {
    return;
  }

  siteHeader.classList.toggle("is-scrolled", window.scrollY > 80);
}

function setupSectionRevealAnimations() {
  const revealTargets = Array.from(
    document.querySelectorAll(".hero-grid, main > .section > .container"),
  );

  if (!revealTargets.length) {
    return;
  }

  revealTargets.forEach((target) => {
    target.classList.add("reveal-on-scroll");
  });

  if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
    revealTargets.forEach((target) => {
      target.classList.add("is-revealed");
    });
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  revealTargets.forEach((target) => {
    revealObserver.observe(target);
  });
}

function bindHorizontalSwipe(element, options) {
  if (!element) {
    return;
  }

  const {
    onNext,
    onPrev,
    threshold = 40,
    wheelThreshold = 65,
    wheelGestureReset = 180,
  } = options;

  let touchStartX = 0;
  let touchStartY = 0;
  let wheelDeltaX = 0;
  let wheelDeltaY = 0;
  let wheelResetTimer = 0;
  let wheelGestureLocked = false;

  element.addEventListener(
    "touchstart",
    (event) => {
      const touch = event.changedTouches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    },
    { passive: true },
  );

  element.addEventListener(
    "touchend",
    (event) => {
      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;

      if (Math.abs(deltaX) < threshold || Math.abs(deltaX) < Math.abs(deltaY)) {
        return;
      }

      if (deltaX < 0) {
        onNext?.();
        return;
      }

      onPrev?.();
    },
    { passive: true },
  );

  // Support horizontal trackpad gestures on laptops without hijacking normal vertical page scroll.
  element.addEventListener(
    "wheel",
    (event) => {
      const primaryDeltaX =
        Math.abs(event.deltaX) >= Math.abs(event.deltaY)
          ? event.deltaX
          : event.shiftKey
            ? event.deltaY
            : 0;

      if (!primaryDeltaX) {
        wheelDeltaX = 0;
        wheelDeltaY = 0;
        return;
      }

      wheelDeltaX += primaryDeltaX;
      wheelDeltaY += event.deltaY;

      window.clearTimeout(wheelResetTimer);
      wheelResetTimer = window.setTimeout(() => {
        wheelDeltaX = 0;
        wheelDeltaY = 0;
        wheelGestureLocked = false;
      }, wheelGestureReset);

      if (wheelGestureLocked) {
        event.preventDefault();
        return;
      }

      if (
        Math.abs(wheelDeltaX) < wheelThreshold ||
        Math.abs(wheelDeltaX) < Math.abs(wheelDeltaY)
      ) {
        return;
      }

      wheelGestureLocked = true;
      event.preventDefault();

      if (wheelDeltaX > 0) {
        onNext?.();
      } else {
        onPrev?.();
      }

      wheelDeltaX = 0;
      wheelDeltaY = 0;
    },
    { passive: false },
  );
}

function getFeaturedOffset(index, activeIndex, total) {
  let offset = index - activeIndex;
  const half = Math.floor(total / 2);

  if (offset > half) {
    offset -= total;
  }

  if (offset < -half) {
    offset += total;
  }

  return offset;
}

function buildCategoryTrack() {
  categoryTrack.innerHTML = "";

  exploreCategoryItems.forEach((item) => {
    const card = document.createElement("button");
    card.className = "category-card";
    card.type = "button";
    card.dataset.category = item.category;
    card.dataset.session = item.sessionType;
    card.setAttribute("aria-pressed", "false");

    const media = document.createElement("span");
    media.className = `photo-placeholder has-image category-card-media ${item.photoClass}`;

    const image = document.createElement("img");
    image.loading = "lazy";
    hydrateGalleryImage(image, item.images[0], item, 0);

    media.appendChild(image);

    const copy = document.createElement("span");
    copy.className = "category-copy";

    const name = document.createElement("span");
    name.className = "category-name";
    name.textContent = item.category;

    const note = document.createElement("span");
    note.className = "category-note";
    note.textContent = item.meta;

    copy.append(name, note);
    card.append(media, copy);
    categoryTrack.appendChild(card);
  });

  categoryCards = Array.from(categoryTrack.querySelectorAll(".category-card"));
}

function animateFeaturedSummary() {
  if (!featuredSummary) {
    return;
  }

  if (prefersReducedMotion.matches) {
    featuredSummary.classList.remove("is-animating");
    window.clearTimeout(featuredSummaryAnimationTimer);
    return;
  }

  featuredSummary.classList.remove("is-animating");
  window.clearTimeout(featuredSummaryAnimationTimer);

  void featuredSummary.offsetWidth;
  featuredSummary.classList.add("is-animating");

  featuredSummaryAnimationTimer = window.setTimeout(() => {
    featuredSummary.classList.remove("is-animating");
  }, 520);
}

function bindCategoryCardEvents() {
  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const clickedCategoryIndex = categoryCards.indexOf(card);
      updateCategoryState(clickedCategoryIndex);
      card.scrollIntoView({
        behavior: getMotionBehavior(),
        inline: "start",
        block: "nearest",
      });

      if (card.dataset.session) {
        setSelectedSession(card.dataset.session);
      }
    });
  });
}

function buildFeaturedCarousel() {
  featuredStage.innerHTML = "";

  featuredWorkItems.forEach((item, index) => {
    const slide = document.createElement("article");
    slide.className = "featured-slide";
    slide.dataset.index = String(index);

    const stackLayer = document.createElement("span");
    stackLayer.className = "featured-slide-stack-layer";
    stackLayer.setAttribute("aria-hidden", "true");

    const media = document.createElement("div");
    media.className = `featured-slide-media photo-placeholder has-image ${item.photoClass}`;

    const image = document.createElement("img");
    image.loading = "eager";
    const coverSource = item.coverImage
      ? { src: item.coverImage, alt: item.alt }
      : item.images[0] || { src: "", alt: item.alt };
    hydrateGalleryImage(image, coverSource, item, 0);

    media.appendChild(image);
    slide.append(stackLayer, media);

    slide.addEventListener("click", () => {
      if (index !== featuredIndex) {
        setFeaturedIndex(index);
      }
    });

    featuredStage.appendChild(slide);
  });

  featuredSlides = Array.from(
    featuredStage.querySelectorAll(".featured-slide"),
  );
}

function setFeaturedIndex(index) {
  const total = featuredWorkItems.length;
  const nextIndex = (index + total) % total;
  const shouldAnimateSummary = nextIndex !== featuredIndex;

  featuredIndex = nextIndex;
  updateFeaturedCarousel(shouldAnimateSummary);
}

function updateFeaturedCarousel(animateSummary = false) {
  const item = featuredWorkItems[featuredIndex];
  const isMobileFeaturedStack = window.innerWidth < 700;
  const activeCardYOffset = isMobileFeaturedStack ? "0rem" : "-0.1rem";
  const sideCardYOffset = isMobileFeaturedStack ? "0.8rem" : "0.6rem";
  const outerCardYOffset = isMobileFeaturedStack ? "1.45rem" : "1.15rem";
  const sideCardXOffset = isMobileFeaturedStack
    ? "clamp(4.8rem, 17vw, 7.8rem)"
    : "clamp(6.9rem, 23vw, 10.8rem)";
  const sideCardScale = isMobileFeaturedStack ? "0.8" : "0.82";
  const transformStates = {
    0: {
      x: "0rem",
      y: activeCardYOffset,
      scale: isMobileFeaturedStack ? "1.04" : "1.08",
      rotate: "0deg",
      opacity: "1",
      z: "5",
      saturation: "1",
      brightness: "1.02",
      blur: "0px",
    },
    "-1": {
      x: `calc(-1 * ${sideCardXOffset})`,
      y: sideCardYOffset,
      scale: sideCardScale,
      rotate: "-3.1deg",
      opacity: isMobileFeaturedStack ? "0.66" : "0.7",
      z: "4",
      saturation: "0.8",
      brightness: "0.78",
      blur: "0.9px",
    },
    1: {
      x: sideCardXOffset,
      y: sideCardYOffset,
      scale: sideCardScale,
      rotate: "3.1deg",
      opacity: isMobileFeaturedStack ? "0.66" : "0.7",
      z: "4",
      saturation: "0.8",
      brightness: "0.78",
      blur: "0.9px",
    },
  };

  if (!isMobileFeaturedStack) {
    transformStates["-2"] = {
      x: "calc(-1 * clamp(11.2rem, 36vw, 17.4rem))",
      y: outerCardYOffset,
      scale: "0.67",
      rotate: "-5.5deg",
      opacity: "0.3",
      z: "3",
      saturation: "0.68",
      brightness: "0.6",
      blur: "1.5px",
    };

    transformStates[2] = {
      x: "clamp(11.2rem, 36vw, 17.4rem)",
      y: outerCardYOffset,
      scale: "0.67",
      rotate: "5.5deg",
      opacity: "0.3",
      z: "3",
      saturation: "0.68",
      brightness: "0.6",
      blur: "1.5px",
    };
  }
  const hiddenState = {
    x: "0rem",
    y: "0rem",
    scale: "0.7",
    rotate: "0deg",
    opacity: "0",
    z: "1",
    saturation: "0.65",
    brightness: "0.5",
    blur: "2px",
  };

  if (featuredSummarySession) {
    featuredSummarySession.textContent = item.sessionType || item.badge;
  }

  if (featuredSummaryTitle) {
    featuredSummaryTitle.textContent = item.title;
  }

  if (featuredSummaryLocation) {
    featuredSummaryLocation.textContent =
      item.location || item.meta || item.category;
  }

  if (featuredSummaryDate) {
    const hasDate = Boolean(item.dateLabel);
    featuredSummaryDate.hidden = !hasDate;
    featuredSummaryDate.textContent = hasDate ? item.dateLabel : "";
  }

  if (featuredSummaryButton) {
    featuredSummaryButton.setAttribute(
      "aria-label",
      `View shoot: ${item.title}`,
    );
  }

  if (animateSummary) {
    animateFeaturedSummary();
  }

  updateDotGroup(featuredDots, featuredIndex);

  featuredSlides.forEach((slide, index) => {
    const offset = getFeaturedOffset(
      index,
      featuredIndex,
      featuredWorkItems.length,
    );
    const state = transformStates[offset] || hiddenState;
    const isActive = offset === 0;

    slide.style.setProperty("--featured-x", state.x);
    slide.style.setProperty("--featured-y", state.y);
    slide.style.setProperty("--featured-scale", state.scale);
    slide.style.setProperty("--featured-rotate", state.rotate);
    slide.style.setProperty("--featured-opacity", state.opacity);
    slide.style.setProperty("--featured-z", state.z);
    slide.style.setProperty("--featured-saturation", state.saturation);
    slide.style.setProperty("--featured-brightness", state.brightness);
    slide.style.setProperty("--featured-blur", state.blur);

    slide.classList.toggle("is-active", isActive);
    slide.classList.toggle("is-hidden", !transformStates[offset]);
  });
}

function getCategoryCardIndex() {
  const trackRect = categoryTrack.getBoundingClientRect();
  let closestIndex = 0;
  let closestDistance = Number.POSITIVE_INFINITY;

  categoryCards.forEach((card, index) => {
    const distance = Math.abs(
      card.getBoundingClientRect().left - trackRect.left,
    );

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  return closestIndex;
}

function updateCategoryState(activeIndex) {
  categoryCards.forEach((card, index) => {
    const isActive = index === activeIndex;
    card.classList.toggle("is-active", isActive);
    card.setAttribute("aria-pressed", String(isActive));
  });

  updateDotGroup(categoryDots, getCategoryPageIndex(activeIndex));
}

function updateSummary() {
  summarySession.textContent = bookingData.sessionType || "Not selected yet";
  summaryDateTime.textContent = bookingData.dateTime || "Choose a slot";
  summaryContact.textContent = bookingData.contactMethod
    ? `${bookingData.contactMethod}: ${bookingData.contactValue || "Waiting for details"}`
    : "Pick a method";
  slotPreview.textContent = bookingData.dateTime || "No date selected yet";
}

function showStep(stepNumber) {
  currentStep = stepNumber;

  stepPanels.forEach((panel) => {
    const isActive = Number(panel.dataset.stepPanel) === stepNumber;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });

  stepIndicators.forEach((indicator) => {
    const indicatorStep = Number(indicator.dataset.stepIndicator);
    const isActive = indicatorStep === stepNumber;

    indicator.classList.toggle("is-active", isActive);
    indicator.classList.toggle("is-complete", indicatorStep < stepNumber);

    if (isActive) {
      indicator.setAttribute("aria-current", "step");
    } else {
      indicator.removeAttribute("aria-current");
    }
  });

  if (bookingStepStatus) {
    const stepLabel = bookingStepLabels[stepNumber - 1] || "Confirm";
    bookingStepStatus.textContent = `Step ${stepNumber} of ${stepIndicators.length} - ${stepLabel}`;
  }

  if (stepper) {
    const totalSegments = Math.max(stepIndicators.length - 1, 1);
    const progress = (stepNumber - 1) / totalSegments;
    stepper.style.setProperty("--step-progress", String(progress));
  }

  const isConfirmedStep = stepNumber === 4;
  bookingLayout?.classList.toggle("is-confirmed", isConfirmedStep);
  bookingSummaryCard?.setAttribute("aria-hidden", String(isConfirmedStep));
}

function getActiveContactValue() {
  if (bookingData.contactMethod === "Instagram") {
    return instagramInput.value;
  }

  if (bookingData.contactMethod === "Text") {
    return textInput.value;
  }

  return "";
}

function validateStep(stepNumber) {
  if (stepNumber === 1) {
    sessionError.textContent = bookingData.sessionType
      ? ""
      : "Please choose a session type.";
    return Boolean(bookingData.sessionType);
  }

  if (stepNumber === 2) {
    dateError.textContent = bookingData.dateTime
      ? ""
      : "Please choose a date and time placeholder.";
    return Boolean(bookingData.dateTime);
  }

  if (stepNumber === 3) {
    const confirmationEmail = confirmationEmailInput.value.trim();
    bookingData.confirmationEmail = confirmationEmail;

    if (!confirmationEmail) {
      contactError.textContent =
        "Please add the email where the confirmation should be sent.";
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(confirmationEmail)) {
      contactError.textContent = "Enter a valid confirmation email address.";
      return false;
    }

    if (!bookingData.contactMethod) {
      contactError.textContent =
        "Please choose a contact method for follow-up.";
      return false;
    }

    const value = getActiveContactValue().trim();
    bookingData.contactValue = value;
    updateSummary();

    if (!value) {
      contactError.textContent = "Please enter your contact details.";
      return false;
    }

    if (
      bookingData.contactMethod === "Instagram" &&
      !/^@?[A-Za-z0-9._]{2,30}$/.test(value)
    ) {
      contactError.textContent = "Enter a valid Instagram handle.";
      return false;
    }

    if (
      bookingData.contactMethod === "Text" &&
      !/^[0-9+()\-\s]{7,20}$/.test(value)
    ) {
      contactError.textContent = "Enter a valid phone number.";
      return false;
    }

    contactError.textContent = "";
    return true;
  }

  return true;
}

function showContactField(method) {
  let activeInput = null;

  contactFields.forEach((field) => {
    const isActive = field.dataset.field === method;
    field.hidden = !isActive;
    field.classList.toggle("is-active", isActive);

    if (isActive) {
      activeInput = field.querySelector("input");
    }
  });

  if (activeInput) {
    window.requestAnimationFrame(() => {
      activeInput.focus({ preventScroll: true });
    });
  }
}

function resetInputsExcept(activeMethod) {
  if (activeMethod !== "Instagram") {
    instagramInput.value = "";
  }

  if (activeMethod !== "Text") {
    textInput.value = "";
  }
}

function populateConfirmation() {
  confirmName.textContent = fullNameInput.value.trim() || "-";
  confirmSession.textContent = bookingData.sessionType;
  confirmDateTime.textContent = bookingData.dateTime;
  confirmMethod.textContent = bookingData.contactMethod || "-";
  confirmInfo.textContent = bookingData.contactValue || "-";
  confirmEmail.textContent = bookingData.confirmationEmail || "-";
  confirmNotes.textContent = shootNotesInput.value.trim() || "-";
}

function updateBookingFormFields() {
  if (shootNotesInput) {
    shootNotesInput.value = shootNotesInput.value.trim();
  }
}

function getFormattedContactMethod() {
  const value = bookingData.contactValue.trim();

  if (bookingData.contactMethod === "Instagram") {
    const handle = value.startsWith("@") ? value : `@${value}`;
    return `Instagram: ${handle}`;
  }

  if (bookingData.contactMethod === "Text") {
    return `Text: ${value}`;
  }

  if (bookingData.contactMethod === "Email") {
    return "Email";
  }

  return "";
}

async function sendBookingConfirmation() {
  if (!bookingForm) {
    throw new Error("Booking form is not available.");
  }

  updateBookingFormFields();

  const fullName = fullNameInput.value.trim();
  const confirmationEmail = confirmationEmailInput.value.trim();
  const shootNotes = shootNotesInput.value.trim();
  const preferredDateTime = bookingData.dateTime;
  const sessionType = bookingData.sessionType;
  const contactMethodText = getFormattedContactMethod();

  const payload = new URLSearchParams();
  payload.append("form-name", "booking");

  if (fullName) {
    payload.append("Full Name", fullName);
  }

  if (preferredDateTime) {
    payload.append("Preferred Date/Time", preferredDateTime);
  }

  if (sessionType) {
    payload.append("Session Type", sessionType);
  }

  if (contactMethodText) {
    payload.append("Preferred Contact Method", contactMethodText);
  }

  if (confirmationEmail) {
    payload.append("Confirmation Email", confirmationEmail);
  }

  if (shootNotes) {
    payload.append("Shoot Notes", shootNotes);
  }

  const response = await fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: payload.toString(),
  });

  if (!response.ok) {
    throw new Error(
      `Booking form submission failed with status ${response.status}.`,
    );
  }
}

function setSelectedSession(sessionName) {
  bookingData.sessionType = sessionName;

  const activeButton = sessionButtons.find(
    (button) => button.dataset.session === sessionName,
  );

  if (activeButton) {
    updatePressedState(sessionButtons, activeButton);
  }

  sessionError.textContent = "";
  updateSummary();
}

function beginBookingForSession(sessionName) {
  setSelectedSession(sessionName);
  showStep(2);
}

function resetBookingFlow() {
  bookingData.sessionType = "";
  bookingData.dateTime = "";
  bookingData.confirmationEmail = "";
  bookingData.contactMethod = "";
  bookingData.contactValue = "";

  sessionButtons.forEach((button) => {
    button.classList.remove("is-selected");
    button.setAttribute("aria-pressed", "false");
  });

  slotButtons.forEach((button) => {
    button.classList.remove("is-selected");
    button.setAttribute("aria-pressed", "false");
  });

  contactMethodButtons.forEach((button) => {
    button.classList.remove("is-selected");
    button.setAttribute("aria-pressed", "false");
  });

  contactFields.forEach((field) => {
    field.hidden = true;
    field.classList.remove("is-active");
  });

  confirmationEmailInput.value = "";
  instagramInput.value = "";
  emailInput.value = "";
  textInput.value = "";

  sessionError.textContent = "";
  dateError.textContent = "";
  contactError.textContent = "";

  updateSummary();
  showStep(1);
}

function escapeSvgText(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getFallbackPalette(photoClass) {
  const paletteMap = {
    "photo-graduation": {
      start: "#dbe9ff",
      middle: "#aebfd3",
      end: "#5c6d82",
      glow: "#fff1d8",
    },
    "photo-portraits": {
      start: "#f2e3d7",
      middle: "#ddb9a9",
      end: "#8d6e62",
      glow: "#ffe7d6",
    },
    "photo-couples": {
      start: "#ffe6dd",
      middle: "#f2b993",
      end: "#6482a5",
      glow: "#ffedd9",
    },
    "photo-events": {
      start: "#ffeedb",
      middle: "#f4b27d",
      end: "#6a7a9d",
      glow: "#ffe2bc",
    },
    "photo-street": {
      start: "#dce9ff",
      middle: "#88aee0",
      end: "#2f445e",
      glow: "#f6f7ff",
    },
    "photo-details": {
      start: "#fff2da",
      middle: "#f0d08d",
      end: "#7b6440",
      glow: "#fff7e8",
    },
  };

  return paletteMap[photoClass] || paletteMap["photo-graduation"];
}

function createGalleryFallbackImage(shoot, imageIndex) {
  const palette = getFallbackPalette(shoot.photoClass);
  const title = escapeSvgText(shoot.title);
  const sessionType = escapeSvgText(shoot.sessionType);
  const previewLabel = escapeSvgText(`Preview ${imageIndex + 1}`);

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1100">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${palette.start}" />
          <stop offset="48%" stop-color="${palette.middle}" />
          <stop offset="100%" stop-color="${palette.end}" />
        </linearGradient>
        <radialGradient id="glow" cx="72%" cy="20%" r="32%">
          <stop offset="0%" stop-color="${palette.glow}" stop-opacity="0.95" />
          <stop offset="100%" stop-color="${palette.glow}" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="1100" fill="url(#bg)" />
      <rect width="1600" height="1100" fill="url(#glow)" />
      <rect x="0" y="640" width="1600" height="460" fill="rgba(12, 18, 28, 0.38)" />
      <text x="92" y="128" fill="#0f1723" font-size="34" font-family="Arial, sans-serif" font-weight="700" opacity="0.68">SwerbzShots Placeholder</text>
      <text x="92" y="872" fill="#ffffff" font-size="48" font-family="Arial, sans-serif" font-weight="700" letter-spacing="4">${sessionType}</text>
      <text x="92" y="944" fill="#ffffff" font-size="112" font-family="Arial, sans-serif" font-weight="800">${title}</text>
      <text x="92" y="1016" fill="#e5eef9" font-size="42" font-family="Arial, sans-serif">${previewLabel} • Replace this image path with a real client photo.</text>
    </svg>
  `)}`;
}

function createGalleryFallbackArt(shoot) {
  const palette = getFallbackPalette(shoot.photoClass);

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1100">
      <defs>
        <linearGradient id="bgClean" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${palette.start}" />
          <stop offset="48%" stop-color="${palette.middle}" />
          <stop offset="100%" stop-color="${palette.end}" />
        </linearGradient>
        <radialGradient id="glowClean" cx="72%" cy="20%" r="32%">
          <stop offset="0%" stop-color="${palette.glow}" stop-opacity="0.95" />
          <stop offset="100%" stop-color="${palette.glow}" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="1100" fill="url(#bgClean)" />
      <rect width="1600" height="1100" fill="url(#glowClean)" />
      <rect width="1600" height="1100" fill="rgba(255, 255, 255, 0.04)" />
      <circle cx="1280" cy="860" r="120" fill="rgba(255, 255, 255, 0.08)" />
    </svg>
  `)}`;
}

function syncShootModalViewerLayout(dimensions = {}) {
  if (!shootModalViewerCard) {
    return;
  }

  const { naturalWidth = 0, naturalHeight = 0 } = dimensions;
  const hasImageDimensions = naturalWidth > 0 && naturalHeight > 0;
  const isPortrait = hasImageDimensions && naturalHeight > naturalWidth * 1.08;
  const isLandscape = hasImageDimensions && naturalWidth > naturalHeight * 1.08;
  const isSquare = hasImageDimensions && !isPortrait && !isLandscape;

  shootModalViewerCard.classList.toggle("is-portrait", isPortrait);
  shootModalViewerCard.classList.toggle("is-landscape", isLandscape);
  shootModalViewerCard.classList.toggle("is-square", isSquare);
}

function hydrateGalleryImage(
  imageElement,
  imageData,
  shoot,
  imageIndex,
  onReady = null,
) {
  const fallbackSrc = createGalleryFallbackArt(shoot);
  const requestedSrc = imageData?.src || "";
  const finalAlt = imageData?.alt || shoot.alt;

  imageElement.alt = finalAlt;
  imageElement.dataset.requestedSrc = requestedSrc;
  imageElement.classList.add("is-loading");
  imageElement.src = fallbackSrc;

  if (!requestedSrc) {
    imageElement.classList.remove("is-loading");
    onReady?.({ naturalWidth: 4, naturalHeight: 5, isFallback: true });
    return;
  }

  const preload = new Image();

  preload.onload = () => {
    if (imageElement.dataset.requestedSrc !== requestedSrc) {
      return;
    }

    imageElement.src = requestedSrc;
    imageElement.classList.remove("is-loading");
    onReady?.({
      naturalWidth: preload.naturalWidth,
      naturalHeight: preload.naturalHeight,
      isFallback: false,
    });
  };

  preload.onerror = () => {
    if (imageElement.dataset.requestedSrc !== requestedSrc) {
      return;
    }

    imageElement.src = fallbackSrc;
    imageElement.classList.remove("is-loading");
    onReady?.({ naturalWidth: 4, naturalHeight: 5, isFallback: true });
  };

  preload.src = requestedSrc;
}

function getShootModalFocusableElements() {
  return Array.from(shootModal.querySelectorAll(focusableSelector)).filter(
    (element) => {
      return (
        !element.closest("[hidden]") && element.getClientRects().length > 0
      );
    },
  );
}

function renderShootModalThumbnails() {
  const shoot = featuredWorkItems[activeShootIndex];

  shootModalThumbs.innerHTML = "";

  shoot.images.forEach((image, index) => {
    const thumbButton = document.createElement("button");
    thumbButton.className = "shoot-modal-thumb";
    thumbButton.type = "button";
    thumbButton.setAttribute(
      "aria-label",
      `Show image ${index + 1} of ${shoot.images.length} for ${shoot.title}`,
    );
    thumbButton.setAttribute(
      "aria-pressed",
      String(index === activeShootImageIndex),
    );

    const thumbImage = document.createElement("img");
    thumbImage.loading = "lazy";

    hydrateGalleryImage(thumbImage, image, shoot, index);

    thumbButton.appendChild(thumbImage);
    thumbButton.addEventListener("click", () => {
      setShootModalImage(index);
    });

    shootModalThumbs.appendChild(thumbButton);
  });

  const activeThumb = shootModalThumbs.querySelector("[aria-pressed='true']");

  activeThumb?.scrollIntoView({
    behavior: getMotionBehavior(),
    block: "nearest",
    inline: "center",
  });
}

function renderShootModal() {
  const shoot = featuredWorkItems[activeShootIndex];
  const activeImage = shoot.images[activeShootImageIndex];

  shootModalSession.textContent = shoot.sessionType;
  syncShootModalViewerLayout();
  hydrateGalleryImage(
    shootModalImage,
    activeImage,
    shoot,
    activeShootImageIndex,
    syncShootModalViewerLayout,
  );
  renderShootModalThumbnails();
}

function setShootModalImage(index) {
  const shoot = featuredWorkItems[activeShootIndex];

  activeShootImageIndex = (index + shoot.images.length) % shoot.images.length;
  renderShootModal();
}

function cycleShootModalImage(direction) {
  setShootModalImage(activeShootImageIndex + direction);
}

function openShootModal(index, triggerButton) {
  window.clearTimeout(shootModalCloseTimer);

  activeShootIndex = index;
  activeShootImageIndex = 0;
  lastModalTrigger = triggerButton || document.activeElement;

  renderShootModal();

  shootModal.hidden = false;
  document.body.classList.add("modal-open");
  shootModalBody.scrollTop = 0;

  window.requestAnimationFrame(() => {
    shootModal.classList.add("is-open");
    shootModalClose.focus();
  });
}

function closeShootModal(options = {}) {
  const { returnFocus = true } = options;

  if (shootModal.hidden) {
    return;
  }

  shootModal.classList.remove("is-open");
  document.body.classList.remove("modal-open");

  shootModalCloseTimer = window.setTimeout(() => {
    shootModal.hidden = true;

    if (returnFocus && lastModalTrigger instanceof HTMLElement) {
      lastModalTrigger.focus();
    }
  }, shootModalTransitionMs);
}

function trapShootModalFocus(event) {
  const focusableElements = getShootModalFocusableElements();

  if (!focusableElements.length) {
    event.preventDefault();
    shootModalPanel.focus();
    return;
  }

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
    return;
  }

  if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
}

function handleShootModalKeydown(event) {
  if (shootModal.hidden) {
    return;
  }

  if (event.key === "Escape") {
    event.preventDefault();
    closeShootModal();
    return;
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    cycleShootModalImage(-1);
    return;
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    cycleShootModalImage(1);
    return;
  }

  if (event.key === "Tab") {
    trapShootModalFocus(event);
  }
}

createDots(featuredDots, featuredWorkItems.length, {
  interactive: true,
  label: "Show featured work",
  onSelect: (index) => {
    setFeaturedIndex(index);
  },
});
buildCategoryTrack();
renderCategoryDots();
bindCategoryCardEvents();
buildFeaturedCarousel();
updateFeaturedCarousel();
updateCategoryState(0);
updateSummary();
showStep(currentStep);
updateMobileBookViewportState();
setHeaderNavOpen(false);
setupSectionRevealAnimations();
syncCurrentNavLink();
syncHeaderScrollState();

featuredSummaryButton?.addEventListener("click", () => {
  openShootModal(featuredIndex, featuredSummaryButton);
});

featuredStage?.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    event.preventDefault();
    setFeaturedIndex(featuredIndex + 1);
    return;
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    setFeaturedIndex(featuredIndex - 1);
    return;
  }

  if (event.key === "Home") {
    event.preventDefault();
    setFeaturedIndex(0);
    return;
  }

  if (event.key === "End") {
    event.preventDefault();
    setFeaturedIndex(featuredWorkItems.length - 1);
  }
});

if ("IntersectionObserver" in window && (heroPrimaryCta || bookingSection)) {
  // Hide the floating CTA while the hero CTA or booking section is visible.
  const headerOffset = siteHeader?.offsetHeight || 0;
  const mobileBookObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === heroPrimaryCta) {
          isHeroVisible = entry.isIntersecting;
        }

        if (entry.target === bookingSection) {
          isBookingVisible = entry.isIntersecting;
        }
      });

      syncMobileBookButtonVisibility();
    },
    {
      threshold: 0.12,
      rootMargin: `-${headerOffset}px 0px 0px 0px`,
    },
  );

  if (heroPrimaryCta) {
    mobileBookObserver.observe(heroPrimaryCta);
  }

  if (bookingSection) {
    mobileBookObserver.observe(bookingSection);
  }
} else {
  // Fallback for older browsers: compare the hero CTA and booking section to the viewport.
  const syncMobileBookButton = () => {
    updateMobileBookViewportState();
    syncMobileBookButtonVisibility();
  };

  syncMobileBookButton();
  window.addEventListener("scroll", syncMobileBookButton, { passive: true });
  window.addEventListener("resize", syncMobileBookButton);
}

headerNavToggle.addEventListener("click", () => {
  const isOpen = headerNavToggle.getAttribute("aria-expanded") === "true";
  setHeaderNavOpen(!isOpen);
});

headerNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setHeaderNavOpen(false);
  });
});

document.addEventListener("click", (event) => {
  if (!headerNav.classList.contains("is-open")) {
    return;
  }

  if (
    headerNav.contains(event.target) ||
    headerNavToggle.contains(event.target)
  ) {
    return;
  }

  setHeaderNavOpen(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 920) {
    setHeaderNavOpen(false);
  }

  updateMobileBookViewportState();
  syncMobileBookButtonVisibility();
  queueNavHighlightSync();

  if (featuredSlides.length) {
    updateFeaturedCarousel();
  }
});

window.addEventListener("scroll", queueNavHighlightSync, { passive: true });

bindHorizontalSwipe(featuredStage, {
  threshold: 36,
  onNext: () => {
    setFeaturedIndex((featuredIndex + 1) % featuredWorkItems.length);
  },
  onPrev: () => {
    setFeaturedIndex(
      (featuredIndex - 1 + featuredWorkItems.length) % featuredWorkItems.length,
    );
  },
});

shootModal.addEventListener("click", (event) => {
  if (event.target === shootModal) {
    closeShootModal();
  }
});

shootModalClose.addEventListener("click", () => {
  closeShootModal();
});

shootModalPrev.addEventListener("click", () => {
  cycleShootModalImage(-1);
});

shootModalNext.addEventListener("click", () => {
  cycleShootModalImage(1);
});

bindHorizontalSwipe(shootModalViewer, {
  threshold: 40,
  onNext: () => {
    cycleShootModalImage(1);
  },
  onPrev: () => {
    cycleShootModalImage(-1);
  },
});

document.addEventListener("keydown", handleShootModalKeydown);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && headerNav.classList.contains("is-open")) {
    setHeaderNavOpen(false);
    headerNavToggle.focus();
  }
});

categoryTrack.addEventListener("scroll", () => {
  window.requestAnimationFrame(() => {
    updateCategoryState(getCategoryCardIndex());
  });
});

categoryTrack.addEventListener("wheel", (event) => {
  const atStart = categoryTrack.scrollLeft <= 0;
  const atEnd =
    categoryTrack.scrollLeft + categoryTrack.clientWidth >=
    categoryTrack.scrollWidth - 1;

  if (event.deltaX < 0 && atStart) {
    categoryTrack.classList.add("bounce-right");
  }

  if (event.deltaX > 0 && atEnd) {
    categoryTrack.classList.add("bounce-left");
  }
});

categoryTrack.addEventListener("animationend", () => {
  categoryTrack.classList.remove("bounce-left", "bounce-right");
});

window.addEventListener("resize", () => {
  window.requestAnimationFrame(renderCategoryDots);
});

categoryTrack.addEventListener("animationend", () => {
  categoryTrack.classList.remove("bounce-left", "bounce-right");
});

window.addEventListener("resize", () => {
  window.requestAnimationFrame(renderCategoryDots);
});

categoryTrack.addEventListener("keydown", (event) => {
  const currentIndex = categoryCards.indexOf(document.activeElement);

  if (currentIndex < 0) {
    return;
  }

  if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
    return;
  }

  event.preventDefault();

  const direction = event.key === "ArrowRight" ? 1 : -1;
  const nextIndex =
    (currentIndex + direction + categoryCards.length) % categoryCards.length;
  const nextCard = categoryCards[nextIndex];

  nextCard?.focus();
  nextCard?.scrollIntoView({
    behavior: getMotionBehavior(),
    inline: "start",
    block: "nearest",
  });
  updateCategoryState(nextIndex);

  if (nextCard?.dataset.session) {
    setSelectedSession(nextCard.dataset.session);
  }
});

sessionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    beginBookingForSession(button.dataset.session);
  });
});

slotButtons.forEach((button) => {
  button.addEventListener("click", () => {
    bookingData.dateTime = button.dataset.slot;
    updatePressedState(slotButtons, button);
    dateError.textContent = "";
    updateSummary();
  });
});

contactMethodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    bookingData.contactMethod = button.dataset.method;
    bookingData.contactValue = "";

    updatePressedState(contactMethodButtons, button);
    showContactField(button.dataset.method);
    resetInputsExcept(button.dataset.method);

    if (button.dataset.method === "Instagram") {
      if (!instagramInput.value || instagramInput.value === "") {
        instagramInput.value = "@";
      } else if (!instagramInput.value.startsWith("@")) {
        instagramInput.value = `@${instagramInput.value}`;
      }

      window.requestAnimationFrame(() => {
        instagramInput.focus({ preventScroll: true });
        instagramInput.setSelectionRange(
          instagramInput.value.length,
          instagramInput.value.length,
        );
      });
    }

    contactError.textContent = "";
    updateSummary();
  });
});

[
  confirmationEmailInput,
  instagramInput,
  textInput,
  fullNameInput,
  shootNotesInput,
].forEach((input) => {
  input.addEventListener("input", () => {
    bookingData.confirmationEmail = confirmationEmailInput.value.trim();
    bookingData.contactValue = getActiveContactValue().trim();
    updateSummary();
  });
});

prefillSessionLinks.forEach((link) => {
  link.addEventListener("click", () => {
    beginBookingForSession(link.dataset.prefillSession);
  });
});

document.querySelectorAll("[data-next-step]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!validateStep(currentStep)) {
      return;
    }

    showStep(Number(button.dataset.nextStep));
  });
});

document.querySelectorAll("[data-prev-step]").forEach((button) => {
  button.addEventListener("click", () => {
    showStep(Number(button.dataset.prevStep));
  });
});

submitBookingButton.addEventListener("click", async () => {
  if (!validateStep(3)) {
    return;
  }

  const originalLabel = submitBookingButton.textContent;
  submitBookingButton.disabled = true;
  submitBookingButton.textContent = "Sending...";
  contactError.textContent = "";

  try {
    await sendBookingConfirmation();
    populateConfirmation();
    showStep(4);
  } catch (error) {
    console.error("Booking confirmation failed:", error);
    contactError.textContent =
      "We couldn't submit your booking request right now. Please try again in a moment.";
  } finally {
    submitBookingButton.disabled = false;
    submitBookingButton.textContent = originalLabel;
  }
});

document.getElementById("startOver").addEventListener("click", () => {
  resetBookingFlow();
});

// Give pricing cards a short pressed state on touch devices.
pricingCards.forEach((card) => {
  card.addEventListener(
    "touchstart",
    () => {
      card.classList.add("is-pressed");
    },
    { passive: true },
  );

  card.addEventListener("touchend", () => {
    window.setTimeout(() => {
      card.classList.remove("is-pressed");
    }, 120);
  });

  card.addEventListener("touchcancel", () => {
    card.classList.remove("is-pressed");
  });
});
