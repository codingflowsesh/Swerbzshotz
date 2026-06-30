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
    meta: "Graduation portraits & campus milestones",
    cta: "View gallery →",
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
    meta: "Personal branding & lifestyle portraits",
    cta: "View gallery →",
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
    meta: "Authentic connection & storytelling",
    cta: "View gallery →",
    photoClass: "photo-couples",
    alt: "Couples session preview from wedding moments.",
    images: [
      {
        src: "assets/galleries/wedding-moments/IMG_20260620_204257 (4).jpg",
        alt: "Couples session preview from wedding moments.",
      },
    ],
  },
  {
    category: "Event",
    sessionType: "Event Coverage",
    meta: "Celebrations, gatherings & highlights",
    cta: "View gallery →",
    photoClass: "photo-events",
    alt: "Event reception preview from wedding moments.",
    images: [
      {
        src: "assets/galleries/wedding-moments/IMG_20260620_204257 (1).jpg",
        alt: "Event reception preview from wedding moments.",
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
const featuredSummaryLabel = document.getElementById("featuredSummaryLabel");
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
const contactMethodButtons = Array.from(
  document.querySelectorAll("[data-method]"),
);
const contactFields = Array.from(
  document.querySelectorAll(".contact-fields [data-field]"),
);
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
const calendarMonthLabel = document.getElementById("calendarMonthLabel");
const calendarDateGrid = document.getElementById("calendarDateGrid");
const calendarPrevMonth = document.getElementById("calendarPrevMonth");
const calendarNextMonth = document.getElementById("calendarNextMonth");
const timeSlotGrid = document.getElementById("timeSlotGrid");
const timeSlotHeading = document.getElementById("timeSlotHeading");

const sessionError = document.getElementById("sessionError");
const dateError = document.getElementById("dateError");
const contactError = document.getElementById("contactError");

const confirmationEmailInput = document.getElementById(
  "confirmationEmailInput",
);
const instagramInput = document.getElementById("instagramInput");
const phoneNumberInput = document.getElementById("phoneNumberInput");
const fullNameInput = document.getElementById("fullNameInput");
const shootNotesInput = document.getElementById("shootNotesInput");
const bookingForm = document.getElementById("bookingForm");
const bookingSessionInput = document.getElementById("bookingSessionType");
const bookingDateTimeInput = document.getElementById("bookingDateTime");
const bookingContactMethodInput = document.getElementById(
  "bookingPreferredContactMethod",
);

const confirmSession = document.getElementById("confirmSession");
const confirmDateTime = document.getElementById("confirmDateTime");
const confirmMethod = document.getElementById("confirmMethod");
const confirmEmail = document.getElementById("confirmEmail");
const confirmInfoItem = document.getElementById("confirmInfoItem");
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
const bookingTimeSlots = [
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:30 PM",
];

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
const earliestBookingDate = (() => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 1);
  return date;
})();
const bookingCalendarState = {
  visibleMonth: new Date(
    earliestBookingDate.getFullYear(),
    earliestBookingDate.getMonth(),
    1,
  ),
  selectedDate: "",
  selectedTime: "",
};

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
    image.decoding = "async";
    image.fetchPriority = "low";
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
    image.loading = "lazy";
    image.decoding = "async";
    image.fetchPriority = "low";
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

  if (featuredSummaryLabel) {
    featuredSummaryLabel.textContent = `Viewing ${featuredIndex + 1} of ${featuredWorkItems.length}`;
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

function formatCalendarDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function parseCalendarDateKey(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatBookingDate(date) {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getSelectedBookingDate() {
  if (!bookingCalendarState.selectedDate) {
    return null;
  }

  return parseCalendarDateKey(bookingCalendarState.selectedDate);
}

function getSelectedDateTimeDisplay(fallbackText) {
  const selectedDate = getSelectedBookingDate();

  if (!selectedDate) {
    return fallbackText;
  }

  const dateLabel = formatBookingDate(selectedDate);

  if (!bookingCalendarState.selectedTime) {
    return `${dateLabel}\nSelect a time`;
  }

  return `${dateLabel}\n${bookingCalendarState.selectedTime}`;
}

function syncSelectedDateTime() {
  const selectedDate = getSelectedBookingDate();

  bookingData.dateTime =
    selectedDate && bookingCalendarState.selectedTime
      ? `${formatBookingDate(selectedDate)} at ${bookingCalendarState.selectedTime}`
      : "";
}

function renderTimeSlots() {
  if (!timeSlotGrid || !timeSlotHeading) {
    return;
  }

  const selectedDate = getSelectedBookingDate();

  timeSlotGrid.innerHTML = "";

  if (!selectedDate) {
    timeSlotHeading.textContent = "Select a date to view times";
    return;
  }

  timeSlotHeading.textContent = formatBookingDate(selectedDate);

  bookingTimeSlots.forEach((timeLabel) => {
    const button = document.createElement("button");
    const isSelected = bookingCalendarState.selectedTime === timeLabel;

    button.type = "button";
    button.className = "slot-button time-slot-button";
    button.textContent = timeLabel;
    button.setAttribute("aria-pressed", String(isSelected));
    button.classList.toggle("is-selected", isSelected);
    button.addEventListener("click", () => {
      bookingCalendarState.selectedTime = timeLabel;
      syncSelectedDateTime();
      dateError.textContent = "";
      renderTimeSlots();
      updateSummary();
    });

    timeSlotGrid.appendChild(button);
  });
}

function renderBookingCalendar() {
  if (!calendarDateGrid || !calendarMonthLabel) {
    return;
  }

  const monthStart = bookingCalendarState.visibleMonth;
  const firstDayOffset = (monthStart.getDay() + 6) % 7;
  const daysInMonth = new Date(
    monthStart.getFullYear(),
    monthStart.getMonth() + 1,
    0,
  ).getDate();
  const firstAvailableMonth = new Date(
    earliestBookingDate.getFullYear(),
    earliestBookingDate.getMonth(),
    1,
  );

  calendarMonthLabel.textContent = monthStart.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  calendarDateGrid.innerHTML = "";

  if (calendarPrevMonth) {
    calendarPrevMonth.disabled = monthStart <= firstAvailableMonth;
  }

  for (let index = 0; index < firstDayOffset; index += 1) {
    const spacer = document.createElement("span");
    spacer.className = "calendar-day-spacer";
    spacer.setAttribute("aria-hidden", "true");
    calendarDateGrid.appendChild(spacer);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(
      monthStart.getFullYear(),
      monthStart.getMonth(),
      day,
    );
    const dateKey = formatCalendarDateKey(date);
    const isSelected = bookingCalendarState.selectedDate === dateKey;
    const isUnavailable = date < earliestBookingDate;
    const button = document.createElement("button");

    button.type = "button";
    button.className = "calendar-day-button";
    button.textContent = String(day);
    button.disabled = isUnavailable;
    button.setAttribute("aria-pressed", String(isSelected));
    button.classList.toggle("is-selected", isSelected);

    if (!isUnavailable) {
      button.addEventListener("click", () => {
        bookingCalendarState.selectedDate = dateKey;
        bookingCalendarState.selectedTime = "";
        syncSelectedDateTime();
        dateError.textContent = "";
        renderBookingCalendar();
        renderTimeSlots();
        updateSummary();
      });
    }

    calendarDateGrid.appendChild(button);
  }

  while (calendarDateGrid.children.length % 7 !== 0) {
    const spacer = document.createElement("span");
    spacer.className = "calendar-day-spacer";
    spacer.setAttribute("aria-hidden", "true");
    calendarDateGrid.appendChild(spacer);
  }
}

function normalizeInstagramHandle(value) {
  const trimmedValue = value.trim().replace(/^@+/, "");

  if (!trimmedValue) {
    return "";
  }

  return `@${trimmedValue}`;
}

function getBookingFieldErrorElement(input, shouldCreate = false) {
  if (!input) {
    return null;
  }

  const field = input.closest(".contact-field");

  if (!field) {
    return null;
  }

  let errorElement = field.querySelector(`[data-error-for="${input.id}"]`);

  if (!errorElement && shouldCreate) {
    errorElement = document.createElement("p");
    errorElement.className = "form-error";
    errorElement.dataset.errorFor = input.id;
    errorElement.setAttribute("aria-live", "polite");
    field.append(errorElement);
  }

  return errorElement;
}

function clearBookingFieldError(input) {
  const errorElement = getBookingFieldErrorElement(input);
  input?.setCustomValidity("");
  input?.removeAttribute("aria-invalid");

  if (errorElement) {
    errorElement.remove();
  }
}

function showBookingFieldError(input, message) {
  const errorElement = getBookingFieldErrorElement(input, true);

  input?.setAttribute("aria-invalid", "true");

  if (errorElement) {
    errorElement.textContent = message;
  }
}

function syncBookingContactRequirements(method = bookingData.contactMethod) {
  instagramInput.required = method === "Instagram";
  phoneNumberInput.required = method === "Text";

  if (method !== "Instagram") {
    clearBookingFieldError(instagramInput);
  }

  if (method !== "Text") {
    clearBookingFieldError(phoneNumberInput);
  }
}

function validateBookingField(input, message) {
  const isValid = input.checkValidity();

  if (!isValid) {
    showBookingFieldError(input, message || input.validationMessage);
    return false;
  }

  clearBookingFieldError(input);
  return true;
}

function validateBookingForm() {
  const phonePattern =
    /^(?:\+1\s?)?(?:\(\d{3}\)\s?\d{3}-\d{4}|\d{3}[-\s]?\d{3}[-\s]?\d{4})$/;
  const instagramValue = instagramInput.value.trim();
  const instagramUsername = instagramValue.replace(/^@+/, "");
  const preferredContactMethod = bookingData.contactMethod;
  let firstInvalidInput = null;

  contactError.textContent = "";
  fullNameInput.value = fullNameInput.value.trim();
  confirmationEmailInput.value = confirmationEmailInput.value.trim();
  instagramInput.value = instagramValue;
  phoneNumberInput.value = phoneNumberInput.value.trim();

  [fullNameInput, confirmationEmailInput, instagramInput, phoneNumberInput]
    .forEach((input) => {
      clearBookingFieldError(input);
    });

  syncBookingContactRequirements(preferredContactMethod);

  fullNameInput.setCustomValidity(
    fullNameInput.value.length >= 2 ? "" : "Please enter your full name.",
  );

  if (!validateBookingField(fullNameInput, "Please enter your full name.")) {
    firstInvalidInput = fullNameInput;
  }

  confirmationEmailInput.setCustomValidity("");

  if (
    !validateBookingField(
      confirmationEmailInput,
      "Please enter a valid email address.",
    ) &&
    !firstInvalidInput
  ) {
    firstInvalidInput = confirmationEmailInput;
  }

  if (!preferredContactMethod) {
    contactError.textContent = "Please choose your preferred contact method.";
  }

  if (preferredContactMethod === "Instagram") {
    instagramInput.setCustomValidity(
      instagramUsername && /^[A-Za-z0-9._]{2,30}$/.test(instagramUsername)
        ? ""
        : "Please enter a valid Instagram username.",
    );

    if (
      !validateBookingField(
        instagramInput,
        "Please enter a valid Instagram username.",
      ) &&
      !firstInvalidInput
    ) {
      firstInvalidInput = instagramInput;
    }
  }

  if (preferredContactMethod === "Text") {
    phoneNumberInput.setCustomValidity(
      phonePattern.test(phoneNumberInput.value)
        ? ""
        : "Please enter a valid phone number.",
    );

    if (
      !validateBookingField(
        phoneNumberInput,
        "Please enter a valid phone number.",
      ) &&
      !firstInvalidInput
    ) {
      firstInvalidInput = phoneNumberInput;
    }
  }

  if (firstInvalidInput) {
    firstInvalidInput.focus();
  }

  if (firstInvalidInput || !preferredContactMethod) {
    return false;
  }

  const snapshot = getCurrentBookingSnapshot();

  syncBookingData(snapshot);
  updateBookingFormFields(snapshot);
  updateSummary();
  return true;
}

function getCurrentBookingSnapshot() {
  const preferredContactMethod = bookingData.contactMethod;

  syncSelectedDateTime();

  return {
    fullName: fullNameInput.value.trim(),
    confirmationEmail: confirmationEmailInput.value.trim(),
    sessionType: bookingData.sessionType.trim(),
    preferredDateTime: bookingData.dateTime.trim(),
    preferredContactMethod,
    instagramHandle:
      preferredContactMethod === "Instagram"
        ? normalizeInstagramHandle(instagramInput.value)
        : "",
    phoneNumber:
      preferredContactMethod === "Text" ? phoneNumberInput.value.trim() : "",
    shootNotes: shootNotesInput.value.trim(),
  };
}

function getContactValueForSnapshot(snapshot = getCurrentBookingSnapshot()) {
  if (snapshot.preferredContactMethod === "Instagram") {
    return snapshot.instagramHandle;
  }

  if (snapshot.preferredContactMethod === "Text") {
    return snapshot.phoneNumber;
  }

  return "";
}

function syncBookingData(snapshot = getCurrentBookingSnapshot()) {
  bookingData.confirmationEmail = snapshot.confirmationEmail;
  bookingData.contactValue = getContactValueForSnapshot(snapshot);
}

function updateBookingFormFields(snapshot = getCurrentBookingSnapshot()) {
  bookingSessionInput.value = snapshot.sessionType;
  bookingDateTimeInput.value = snapshot.preferredDateTime;
  bookingContactMethodInput.value = snapshot.preferredContactMethod;
  instagramInput.disabled = snapshot.preferredContactMethod !== "Instagram";
  phoneNumberInput.disabled = snapshot.preferredContactMethod !== "Text";
}

function getSummaryContactText(snapshot = getCurrentBookingSnapshot()) {
  if (!snapshot.preferredContactMethod) {
    return "Pick a method";
  }

  if (snapshot.preferredContactMethod === "Email") {
    return "Email";
  }

  const contactValue = getContactValueForSnapshot(snapshot);

  return contactValue
    ? `${snapshot.preferredContactMethod}: ${contactValue}`
    : `${snapshot.preferredContactMethod}: Waiting for details`;
}

function updateSummary() {
  syncSelectedDateTime();
  const snapshot = getCurrentBookingSnapshot();

  syncBookingData(snapshot);
  updateBookingFormFields(snapshot);

  summarySession.textContent = snapshot.sessionType || "Not selected yet";
  summaryDateTime.textContent = getSelectedDateTimeDisplay("Choose a slot");
  summaryContact.textContent = getSummaryContactText(snapshot);
  slotPreview.textContent = getSelectedDateTimeDisplay("No date selected yet");
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

  if (stepNumber === 2) {
    const selectedDate = getSelectedBookingDate();

    if (selectedDate) {
      bookingCalendarState.visibleMonth = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        1,
      );
    }

    renderBookingCalendar();
    renderTimeSlots();
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
    return phoneNumberInput.value;
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
      : "Please choose a preferred date and time.";
    return Boolean(bookingData.dateTime);
  }

  if (stepNumber === 3) {
    return validateBookingForm();
  }

  return true;
}

function showContactField(method) {
  let activeInput = null;

  contactFields.forEach((field) => {
    const input = field.querySelector("input");
    const isActive = field.dataset.field === method;
    field.hidden = !isActive;
    field.classList.toggle("is-active", isActive);

    if (input) {
      input.disabled = !isActive;
    }

    if (isActive) {
      activeInput = input;
    }
  });

  syncBookingContactRequirements(method);

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
    phoneNumberInput.value = "";
  }
}

function populateConfirmation(snapshot = getCurrentBookingSnapshot()) {
  const contactValue = getContactValueForSnapshot(snapshot);

  syncBookingData(snapshot);
  updateBookingFormFields(snapshot);

  confirmName.textContent = snapshot.fullName || "-";
  confirmSession.textContent = snapshot.sessionType || "-";
  confirmDateTime.textContent = snapshot.preferredDateTime || "-";
  confirmMethod.textContent = snapshot.preferredContactMethod || "-";
  confirmInfo.textContent = contactValue || "-";
  confirmEmail.textContent = snapshot.confirmationEmail || "-";
  confirmNotes.textContent = snapshot.shootNotes || "-";

  if (confirmInfoItem) {
    confirmInfoItem.hidden = !contactValue;
  }
}

async function sendBookingConfirmation() {
  if (!bookingForm) {
    throw new Error("Booking form is not available.");
  }

  const snapshot = getCurrentBookingSnapshot();

  syncBookingData(snapshot);
  updateBookingFormFields(snapshot);

  const formData = new FormData(bookingForm);
  formData.set("Full Name", snapshot.fullName);
  formData.set("email", snapshot.confirmationEmail);
  formData.set("Session Type", snapshot.sessionType);
  formData.set("Preferred Date/Time", snapshot.preferredDateTime);
  formData.set(
    "Preferred Contact Method",
    snapshot.preferredContactMethod,
  );
  formData.delete("Instagram Handle");
  formData.delete("Phone Number");

  if (
    snapshot.preferredContactMethod === "Instagram" &&
    snapshot.instagramHandle
  ) {
    formData.set("Instagram Handle", snapshot.instagramHandle);
  }

  if (snapshot.preferredContactMethod === "Text" && snapshot.phoneNumber) {
    formData.set("Phone Number", snapshot.phoneNumber);
  }

  if (snapshot.shootNotes) {
    formData.set("Shoot Notes", snapshot.shootNotes);
  } else {
    formData.delete("Shoot Notes");
  }

  const emptyFieldNames = [];
  formData.forEach((value, key) => {
    if (typeof value === "string" && !value.trim()) {
      emptyFieldNames.push(key);
    }
  });
  emptyFieldNames.forEach((key) => {
    formData.delete(key);
  });

  const response = await fetch(bookingForm.action, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error(
      `Booking form submission failed with status ${response.status}.`,
    );
  }

  return snapshot;
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

  bookingForm.reset();

  sessionButtons.forEach((button) => {
    button.classList.remove("is-selected");
    button.setAttribute("aria-pressed", "false");
  });

  contactMethodButtons.forEach((button) => {
    button.classList.remove("is-selected");
    button.setAttribute("aria-pressed", "false");
  });

  bookingCalendarState.visibleMonth = new Date(
    earliestBookingDate.getFullYear(),
    earliestBookingDate.getMonth(),
    1,
  );
  bookingCalendarState.selectedDate = "";
  bookingCalendarState.selectedTime = "";

  sessionError.textContent = "";
  dateError.textContent = "";
  contactError.textContent = "";
  [fullNameInput, confirmationEmailInput, instagramInput, phoneNumberInput]
    .forEach((input) => {
      clearBookingFieldError(input);
    });

  showContactField("");
  renderBookingCalendar();
  renderTimeSlots();
  populateConfirmation({
    fullName: "",
    confirmationEmail: "",
    sessionType: "",
    preferredDateTime: "",
    preferredContactMethod: "",
    instagramHandle: "",
    phoneNumber: "",
    shootNotes: "",
  });

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
      <text x="92" y="128" fill="#0f1723" font-size="34" font-family="Arial, sans-serif" font-weight="700" opacity="0.68">SwerbzShotz Placeholder</text>
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
  imageElement.dataset.galleryFallback = "false";
  imageElement.classList.add("is-loading");
  imageElement.decoding = "async";

  const finalizeImage = (dimensions) => {
    imageElement.classList.remove("is-loading");
    onReady?.(dimensions);
  };

  imageElement.onload = () => {
    if (imageElement.dataset.requestedSrc !== requestedSrc) {
      return;
    }

    finalizeImage({
      naturalWidth: imageElement.naturalWidth || 4,
      naturalHeight: imageElement.naturalHeight || 5,
      isFallback: imageElement.dataset.galleryFallback === "true",
    });
  };

  imageElement.onerror = () => {
    if (imageElement.dataset.requestedSrc !== requestedSrc) {
      return;
    }

    if (imageElement.src === fallbackSrc || imageElement.currentSrc === fallbackSrc) {
      finalizeImage({ naturalWidth: 4, naturalHeight: 5, isFallback: true });
      return;
    }

    imageElement.dataset.galleryFallback = "true";
    imageElement.src = fallbackSrc;
  };

  if (!requestedSrc) {
    imageElement.dataset.galleryFallback = "true";
    imageElement.src = fallbackSrc;
    finalizeImage({ naturalWidth: 4, naturalHeight: 5, isFallback: true });
    return;
  }

  imageElement.src = requestedSrc;

  if (imageElement.complete) {
    if (imageElement.naturalWidth > 0) {
      imageElement.onload();
      return;
    }

    imageElement.onerror();
  }
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
    thumbImage.decoding = "async";
    thumbImage.alt = "";

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
  shootModalImage.decoding = "async";
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
renderBookingCalendar();
renderTimeSlots();
updateSummary();
showStep(currentStep);
updateMobileBookViewportState();
setHeaderNavOpen(false);
setupSectionRevealAnimations();
syncCurrentNavLink();
syncHeaderScrollState();
window.lucide?.createIcons({
  attrs: {
    width: 28,
    height: 28,
    "stroke-width": 2,
  },
});

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

calendarPrevMonth?.addEventListener("click", () => {
  const visibleMonth = bookingCalendarState.visibleMonth;
  const previousMonth = new Date(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth() - 1,
    1,
  );

  if (previousMonth >= new Date(
    earliestBookingDate.getFullYear(),
    earliestBookingDate.getMonth(),
    1,
  )) {
    bookingCalendarState.visibleMonth = previousMonth;
    renderBookingCalendar();
  }
});

calendarNextMonth?.addEventListener("click", () => {
  const visibleMonth = bookingCalendarState.visibleMonth;

  bookingCalendarState.visibleMonth = new Date(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth() + 1,
    1,
  );
  renderBookingCalendar();
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
  phoneNumberInput,
  fullNameInput,
  shootNotesInput,
].forEach((input) => {
  input.addEventListener("input", () => {
    bookingData.confirmationEmail = confirmationEmailInput.value.trim();
    bookingData.contactValue = getActiveContactValue().trim();
    contactError.textContent = "";
    clearBookingFieldError(input);
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

async function handleBookingSubmission() {
  if (!validateStep(1)) {
    showStep(1);
    return;
  }

  if (!validateStep(2)) {
    showStep(2);
    return;
  }

  if (!validateStep(3)) {
    return;
  }

  const originalLabel = submitBookingButton.textContent;
  submitBookingButton.disabled = true;
  submitBookingButton.textContent = "Sending...";
  contactError.textContent = "";

  try {
    const submittedSnapshot = await sendBookingConfirmation();
    populateConfirmation(submittedSnapshot);
    showStep(4);
  } catch (error) {
    console.error("Booking confirmation failed:", error);
    contactError.textContent =
      "We couldn't submit your booking request right now. Please try again in a moment.";
  } finally {
    submitBookingButton.disabled = false;
    submitBookingButton.textContent = originalLabel;
  }
}

bookingForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (currentStep !== 3) {
    return;
  }

  await handleBookingSubmission();
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
