const featuredWorkItems = [
  {
    id: "ucla-commencement",
    category: "Graduation",
    badge: "Graduation Gallery",
    title: "UCLA Commencement",
    sessionType: "Graduation Session",
    location: "UCLA, Los Angeles",
    description: "Caps, gowns, diploma moments, and family portraits across campus and commencement day.",
    meta: "Caps, gowns, families, and campus milestones",
    cardPrompt: "Tap to open the graduation gallery",
    photoClass: "photo-graduation",
    alt: "Graduate holding a diploma during a UCLA commencement portrait.",
    images: [
      { src: "assets/gallery/graduation/grad-diploma-portrait.png", alt: "Graduate holding her diploma during a UCLA portrait." },
      { src: "assets/gallery/graduation/grad-duo-portrait.jpg", alt: "Two UCLA graduates smiling together outdoors in blue stoles." },
      { src: "assets/gallery/graduation/grad-ceremony-candid.jpg", alt: "Graduate standing in the middle of the commencement crowd wearing leis." },
      { src: "assets/gallery/graduation/grad-stage-smile.jpg", alt: "Graduate smiling in a cap and gown during an evening commencement moment." },
      { src: "assets/gallery/graduation/grad-family-portrait.jpg", alt: "Graduate posing with family outdoors after commencement." },
      { src: "assets/gallery/graduation/grad-evening-duo.jpg", alt: "Two graduates seated together indoors after the ceremony." },
      { src: "assets/gallery/graduation/grad-naren-campus.jpg", alt: "Graduate posing solo in front of campus towers." },
      { src: "assets/gallery/graduation/grad-janine-fountain.jpg", alt: "Graduate posing near a campus fountain in a white dress and gown." },
      { src: "assets/gallery/graduation/grad-janine-diploma.jpg", alt: "Graduate holding her diploma in front of UCLA banners." }
    ]
  },
  {
    id: "platform-portraits",
    category: "Portraits",
    badge: "Portrait Session",
    title: "Platform Portraits",
    sessionType: "Portrait Session",
    location: "Los Angeles, California",
    description: "Lifestyle portraits with soft motion, formal styling, and editorial framing.",
    meta: "Lifestyle, editorial, and formal portraits",
    cardPrompt: "Tap to preview the portrait set",
    photoClass: "photo-portraits",
    alt: "Portrait subject standing on a train platform in a white shirt and jeans.",
    images: [
      { src: "assets/gallery/portraits/portrait-naren-seated.jpg", alt: "Formal portrait of a man seated in a dark suit under campus arches." },
      { src: "assets/gallery/portraits/portrait-photo-strip.jpg", alt: "Black-and-white photo booth strip portrait of a man in glasses and a suit." },
      { src: "assets/gallery/portraits/portrait-tracks-fence.jpg", alt: "Portrait subject leaning beside a fence along train tracks." },
      { src: "assets/gallery/portraits/portrait-platform-walk.jpg", alt: "Portrait subject walking on a train platform in a white shirt and jeans." },
      { src: "assets/gallery/portraits/portrait-bw-over-shoulder.jpg", alt: "Black-and-white over-the-shoulder portrait on train tracks." },
      { src: "assets/gallery/portraits/portrait-naren-closeup.jpg", alt: "Close portrait of a man in a black suit and tie." }
    ]
  },
  {
    id: "wedding-day-story",
    category: "Couples",
    badge: "Couples Gallery",
    title: "Wedding Day Story",
    sessionType: "Couples Session",
    location: "Private Estate Reception",
    description: "Wedding-day portraits, vows, and soft reception moments centered on connection.",
    meta: "Wedding portraits, vows, and reception connection",
    cardPrompt: "Tap to view the couples gallery",
    photoClass: "photo-couples",
    alt: "Bride holding a bouquet during a wedding portrait.",
    images: [
      { src: "assets/gallery/couples/couples-bridal-bouquet.jpg", alt: "Bride holding a bouquet during a close wedding portrait." },
      { src: "assets/gallery/couples/couples-first-dance-wide.jpg", alt: "Wide wedding reception moment with the couple on the dance floor." },
      { src: "assets/gallery/couples/couples-vows.jpg", alt: "Bride and groom during an emotional wedding speech." },
      { src: "assets/gallery/couples/couples-cake-table.jpg", alt: "Bride and groom standing together behind their wedding cake." },
      { src: "assets/gallery/couples/couples-bride-entrance.jpg", alt: "Bride stepping onto the dance floor during the wedding celebration." }
    ]
  },
  {
    id: "reception-afterglow",
    category: "Events",
    badge: "Event Session",
    title: "Reception Afterglow",
    sessionType: "Event Session",
    location: "Private Event Coverage",
    description: "Crowd energy, candid reactions, music, and the lived-in feeling of the party.",
    meta: "Crowd energy, candids, and dance floor moments",
    cardPrompt: "Tap to explore event coverage",
    photoClass: "photo-events",
    alt: "Guests gathered around a poolside reception dance floor.",
    images: [
      { src: "assets/gallery/events/event-poolside-candid.jpg", alt: "Poolside reception candid with guests adjusting attire before dancing." },
      { src: "assets/gallery/events/event-campus-party-hoodie.jpg", alt: "Casual event portrait of a guest in a UCLA hoodie indoors." },
      { src: "assets/gallery/events/event-reception-guest-candid.jpg", alt: "Reception guest smiling during a candid party moment." },
      { src: "assets/gallery/events/event-dj-candid.jpg", alt: "DJ and event lighting during a nighttime reception." },
      { src: "assets/gallery/events/event-friends-dancefloor.jpg", alt: "Friends hugging and smiling on the dance floor." }
    ]
  },
  {
    id: "detail-frames",
    category: "Details",
    badge: "Detail Gallery",
    title: "Detail Frames",
    sessionType: "Detail Gallery",
    location: "Mixed Scenes",
    description: "Texture, florals, cake, and quiet environmental frames that round out the full story.",
    meta: "Cake, florals, architecture, and atmosphere",
    cardPrompt: "Tap to see the detail gallery",
    photoClass: "photo-details",
    alt: "Close detail photograph of a flower bloom.",
    images: [
      { src: "assets/gallery/details/detail-archway-scene.jpg", alt: "Wide architectural frame beneath UCLA brick arches." },
      { src: "assets/gallery/details/detail-flower-bloom.jpg", alt: "Close detail of a white flower bloom with yellow center." },
      { src: "assets/gallery/details/detail-flower-macro.jpg", alt: "Macro photograph focused tightly on the flower stamens." },
      { src: "assets/gallery/details/detail-cake-closeup.jpg", alt: "Wedding cake detail with soft party lights in the background." }
    ]
  }
];

const bookingData = {
  sessionType: "",
  dateTime: "",
  contactMethod: "",
  contactValue: ""
};

const featuredStage = document.getElementById("featuredStage");
const headerNav = document.getElementById("headerNav");
const headerNavToggle = document.getElementById("headerNavToggle");
const heroSection = document.getElementById("top");
const bookingSection = document.getElementById("booking");
const mobileBookButton = document.querySelector(".mobile-book-button");

const shootModal = document.getElementById("shootModal");
const shootModalPanel = document.getElementById("shootModalPanel");
const shootModalBody = document.getElementById("shootModalBody");
const shootModalSession = document.getElementById("shootModalSession");
const shootModalImage = document.getElementById("shootModalImage");
const shootModalThumbs = document.getElementById("shootModalThumbs");
const shootModalViewer = document.getElementById("shootModalViewer");
const shootModalClose = document.getElementById("shootModalClose");
const shootModalPrev = document.getElementById("shootModalPrev");
const shootModalNext = document.getElementById("shootModalNext");

const featuredDots = document.getElementById("featuredDots");
const featuredSummarySession = document.getElementById("featuredSummarySession");
const featuredSummaryTitle = document.getElementById("featuredSummaryTitle");
const featuredSummaryButton = document.getElementById("featuredSummaryButton");

const categoryTrack = document.getElementById("categoryTrack");
const categoryDots = document.getElementById("categoryDots");
const pricingCards = Array.from(document.querySelectorAll(".pricing-card"));

const sessionButtons = Array.from(document.querySelectorAll("[data-session]"));
const slotButtons = Array.from(document.querySelectorAll("[data-slot]"));
const contactMethodButtons = Array.from(document.querySelectorAll("[data-method]"));
const contactFields = Array.from(document.querySelectorAll(".contact-field"));
const stepPanels = Array.from(document.querySelectorAll("[data-step-panel]"));
const stepIndicators = Array.from(document.querySelectorAll("[data-step-indicator]"));
const prefillSessionLinks = Array.from(document.querySelectorAll("[data-prefill-session]"));
const headerNavLinks = Array.from(headerNav.querySelectorAll("a"));

const summarySession = document.getElementById("summarySession");
const summaryDateTime = document.getElementById("summaryDateTime");
const summaryContact = document.getElementById("summaryContact");
const slotPreview = document.getElementById("slotPreview");

const sessionError = document.getElementById("sessionError");
const dateError = document.getElementById("dateError");
const contactError = document.getElementById("contactError");

const instagramInput = document.getElementById("instagramInput");
const emailInput = document.getElementById("emailInput");
const textInput = document.getElementById("textInput");

const confirmSession = document.getElementById("confirmSession");
const confirmDateTime = document.getElementById("confirmDateTime");
const confirmMethod = document.getElementById("confirmMethod");
const confirmInfo = document.getElementById("confirmInfo");

const focusableSelector = "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";

let featuredIndex = 0;
let currentStep = 1;
let featuredSlides = [];
let categoryCards = [];
let activeShootIndex = 0;
let activeShootImageIndex = 0;
let shootModalCloseTimer = 0;
let lastModalTrigger = null;
let isHeroVisible = false;
let isBookingVisible = false;
const shootModalTransitionMs = 920;

function createDots(container, total, options = {}) {
  if (!container) {
    return;
  }

  const {
    interactive = false,
    label = "Show slide",
    onSelect = null
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

function updatePressedState(buttons, activeButton) {
  buttons.forEach((button) => {
    const isActive = button === activeButton;
    button.classList.toggle("is-selected", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setHeaderNavOpen(isOpen) {
  headerNav.classList.toggle("is-open", isOpen);
  headerNavToggle.setAttribute("aria-expanded", String(isOpen));
  headerNavToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  syncMobileBookButtonVisibility();
}

function setMobileBookButtonHidden(isHidden) {
  if (!mobileBookButton) {
    return;
  }

  mobileBookButton.classList.toggle("is-hidden", isHidden);
}

function updateMobileBookViewportState() {
  if (heroSection) {
    const heroRect = heroSection.getBoundingClientRect();
    isHeroVisible = heroRect.top < window.innerHeight && heroRect.bottom > 0;
  }

  if (bookingSection) {
    const bookingRect = bookingSection.getBoundingClientRect();
    isBookingVisible = bookingRect.top < window.innerHeight && bookingRect.bottom > 0;
  }
}

function syncMobileBookButtonVisibility() {
  if (!mobileBookButton) {
    return;
  }

  const isMenuOpen = headerNav?.classList.contains("is-open");
  setMobileBookButtonHidden(isHeroVisible || isBookingVisible || isMenuOpen);
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
    wheelGestureReset = 180
  } = options;

  let touchStartX = 0;
  let touchStartY = 0;
  let wheelDeltaX = 0;
  let wheelDeltaY = 0;
  let wheelResetTimer = 0;
  let wheelGestureLocked = false;

  element.addEventListener("touchstart", (event) => {
    const touch = event.changedTouches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  }, { passive: true });

  element.addEventListener("touchend", (event) => {
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
  }, { passive: true });

  // Support horizontal trackpad gestures on laptops without hijacking normal vertical page scroll.
  element.addEventListener("wheel", (event) => {
    const primaryDeltaX = Math.abs(event.deltaX) >= Math.abs(event.deltaY)
      ? event.deltaX
      : (event.shiftKey ? event.deltaY : 0);

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

    if (Math.abs(wheelDeltaX) < wheelThreshold || Math.abs(wheelDeltaX) < Math.abs(wheelDeltaY)) {
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
  }, { passive: false });
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

  featuredWorkItems.forEach((item) => {
    const card = document.createElement("button");
    card.className = "category-card";
    card.type = "button";
    card.dataset.category = item.category;
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

    const arrow = document.createElement("span");
    arrow.className = "category-arrow";
    arrow.textContent = item.cardPrompt;

    copy.append(name, note, arrow);
    card.append(media, copy);
    categoryTrack.appendChild(card);
  });

  categoryCards = Array.from(categoryTrack.querySelectorAll(".category-card"));
}

function bindCategoryCardEvents() {
  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const clickedCategoryIndex = categoryCards.indexOf(card);
      updateCategoryState(clickedCategoryIndex);
      card.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest"
      });

      const matchingFeature = featuredWorkItems.findIndex((item) => item.category === card.dataset.category);

      if (matchingFeature >= 0) {
        setFeaturedIndex(matchingFeature);
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

    const media = document.createElement("div");
    media.className = `featured-slide-media photo-placeholder has-image ${item.photoClass}`;

    const image = document.createElement("img");
    image.loading = "eager";
    hydrateGalleryImage(image, item.images[0], item, 0);

    media.appendChild(image);
    slide.appendChild(media);

    slide.addEventListener("click", () => {
      if (index !== featuredIndex) {
        setFeaturedIndex(index);
      }
    });

    featuredStage.appendChild(slide);
  });

  featuredSlides = Array.from(featuredStage.querySelectorAll(".featured-slide"));
}

function setFeaturedIndex(index) {
  featuredIndex = index;
  updateFeaturedCarousel();
}

function updateFeaturedCarousel() {
  const item = featuredWorkItems[featuredIndex];
  const isMobileFeaturedStack = window.innerWidth < 700;
  const activeCardYOffset = isMobileFeaturedStack ? "0.2rem" : "0rem";
  const sideCardYOffset = isMobileFeaturedStack ? "0.72rem" : "0.45rem";
  const outerCardYOffset = isMobileFeaturedStack ? "1.35rem" : "1.05rem";
  const sideCardXOffset = isMobileFeaturedStack ? "clamp(4.45rem, 15vw, 7rem)" : "clamp(5.8rem, 21vw, 9.2rem)";
  const sideCardScale = isMobileFeaturedStack ? "0.82" : "0.84";
  const transformStates = {
    0: {
      x: "0rem",
      y: activeCardYOffset,
      scale: "1",
      rotate: "0deg",
      opacity: "1",
      z: "5",
      saturation: "1",
      brightness: "1",
      blur: "0px"
    },
    "-1": {
      x: `calc(-1 * ${sideCardXOffset})`,
      y: sideCardYOffset,
      scale: sideCardScale,
      rotate: "-2.5deg",
      opacity: "0.76",
      z: "4",
      saturation: "0.84",
      brightness: "0.74",
      blur: "0px"
    },
    1: {
      x: sideCardXOffset,
      y: sideCardYOffset,
      scale: sideCardScale,
      rotate: "2.5deg",
      opacity: "0.76",
      z: "4",
      saturation: "0.84",
      brightness: "0.74",
      blur: "0px"
    }
  };

  if (!isMobileFeaturedStack) {
    transformStates["-2"] = {
      x: "calc(-1 * clamp(10rem, 34vw, 16rem))",
      y: outerCardYOffset,
      scale: "0.72",
      rotate: "-4.6deg",
      opacity: "0.42",
      z: "3",
      saturation: "0.72",
      brightness: "0.58",
      blur: "0px"
    };

    transformStates[2] = {
      x: "clamp(10rem, 34vw, 16rem)",
      y: outerCardYOffset,
      scale: "0.72",
      rotate: "4.6deg",
      opacity: "0.42",
      z: "3",
      saturation: "0.72",
      brightness: "0.58",
      blur: "0px"
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
    blur: "2px"
  };

  const matchingCategoryIndex = categoryCards.findIndex((card) => card.dataset.category === item.category);

  if (matchingCategoryIndex >= 0) {
    updateCategoryState(matchingCategoryIndex);
  }

  if (featuredSummarySession) {
    featuredSummarySession.textContent = item.sessionType || item.badge;
  }

  if (featuredSummaryTitle) {
    featuredSummaryTitle.textContent = item.title;
  }

  if (featuredSummaryButton) {
    featuredSummaryButton.setAttribute("aria-label", `View shoot: ${item.title}`);
  }

  updateDotGroup(featuredDots, featuredIndex);

  featuredSlides.forEach((slide, index) => {
    const offset = getFeaturedOffset(index, featuredIndex, featuredWorkItems.length);
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
    const distance = Math.abs(card.getBoundingClientRect().left - trackRect.left);

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

  updateDotGroup(categoryDots, activeIndex);
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
    panel.classList.toggle("is-active", Number(panel.dataset.stepPanel) === stepNumber);
  });

  stepIndicators.forEach((indicator) => {
    const indicatorStep = Number(indicator.dataset.stepIndicator);

    indicator.classList.toggle("is-active", indicatorStep === stepNumber);
    indicator.classList.toggle("is-complete", indicatorStep < stepNumber);
  });
}

function getActiveContactValue() {
  if (bookingData.contactMethod === "Instagram") {
    return instagramInput.value;
  }

  if (bookingData.contactMethod === "Email") {
    return emailInput.value;
  }

  if (bookingData.contactMethod === "Text") {
    return textInput.value;
  }

  return "";
}

function validateStep(stepNumber) {
  if (stepNumber === 1) {
    sessionError.textContent = bookingData.sessionType ? "" : "Please choose a session type.";
    return Boolean(bookingData.sessionType);
  }

  if (stepNumber === 2) {
    dateError.textContent = bookingData.dateTime ? "" : "Please choose a date and time placeholder.";
    return Boolean(bookingData.dateTime);
  }

  if (stepNumber === 3) {
    if (!bookingData.contactMethod) {
      contactError.textContent = "Please choose a contact method.";
      return false;
    }

    const value = getActiveContactValue().trim();
    bookingData.contactValue = value;
    updateSummary();

    if (!value) {
      contactError.textContent = "Please enter your contact details.";
      return false;
    }

    if (bookingData.contactMethod === "Instagram" && !/^@?[A-Za-z0-9._]{2,30}$/.test(value)) {
      contactError.textContent = "Enter a valid Instagram handle.";
      return false;
    }

    if (bookingData.contactMethod === "Email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      contactError.textContent = "Enter a valid email address.";
      return false;
    }

    if (bookingData.contactMethod === "Text" && !/^[0-9+()\-\s]{7,20}$/.test(value)) {
      contactError.textContent = "Enter a valid phone number.";
      return false;
    }

    contactError.textContent = "";
    return true;
  }

  return true;
}

function showContactField(method) {
  contactFields.forEach((field) => {
    field.hidden = field.dataset.field !== method;
  });
}

function resetInputsExcept(activeMethod) {
  if (activeMethod !== "Instagram") {
    instagramInput.value = "";
  }

  if (activeMethod !== "Email") {
    emailInput.value = "";
  }

  if (activeMethod !== "Text") {
    textInput.value = "";
  }
}

function populateConfirmation() {
  confirmSession.textContent = bookingData.sessionType;
  confirmDateTime.textContent = bookingData.dateTime;
  confirmMethod.textContent = bookingData.contactMethod;
  confirmInfo.textContent = bookingData.contactValue;
}

function setSelectedSession(sessionName) {
  bookingData.sessionType = sessionName;

  const activeButton = sessionButtons.find((button) => button.dataset.session === sessionName);

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
  });

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
      glow: "#fff1d8"
    },
    "photo-portraits": {
      start: "#f2e3d7",
      middle: "#ddb9a9",
      end: "#8d6e62",
      glow: "#ffe7d6"
    },
    "photo-couples": {
      start: "#ffe6dd",
      middle: "#f2b993",
      end: "#6482a5",
      glow: "#ffedd9"
    },
    "photo-events": {
      start: "#ffeedb",
      middle: "#f4b27d",
      end: "#6a7a9d",
      glow: "#ffe2bc"
    },
    "photo-street": {
      start: "#dce9ff",
      middle: "#88aee0",
      end: "#2f445e",
      glow: "#f6f7ff"
    },
    "photo-details": {
      start: "#fff2da",
      middle: "#f0d08d",
      end: "#7b6440",
      glow: "#fff7e8"
    }
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

function hydrateGalleryImage(imageElement, imageData, shoot, imageIndex) {
  const fallbackSrc = createGalleryFallbackArt(shoot);
  const requestedSrc = imageData?.src || "";
  const finalAlt = imageData?.alt || shoot.alt;

  imageElement.alt = finalAlt;
  imageElement.dataset.requestedSrc = requestedSrc;
  imageElement.classList.add("is-loading");
  imageElement.src = fallbackSrc;

  if (!requestedSrc) {
    imageElement.classList.remove("is-loading");
    return;
  }

  const preload = new Image();

  preload.onload = () => {
    if (imageElement.dataset.requestedSrc !== requestedSrc) {
      return;
    }

    imageElement.src = requestedSrc;
    imageElement.classList.remove("is-loading");
  };

  preload.onerror = () => {
    if (imageElement.dataset.requestedSrc !== requestedSrc) {
      return;
    }

    imageElement.src = fallbackSrc;
    imageElement.classList.remove("is-loading");
  };

  preload.src = requestedSrc;
}

function getShootModalFocusableElements() {
  return Array.from(shootModal.querySelectorAll(focusableSelector)).filter((element) => {
    return !element.closest("[hidden]") && element.getClientRects().length > 0;
  });
}

function renderShootModalThumbnails() {
  const shoot = featuredWorkItems[activeShootIndex];

  shootModalThumbs.innerHTML = "";

  shoot.images.forEach((image, index) => {
    const thumbButton = document.createElement("button");
    thumbButton.className = "shoot-modal-thumb";
    thumbButton.type = "button";
    thumbButton.setAttribute("aria-label", `Show image ${index + 1} of ${shoot.images.length} for ${shoot.title}`);
    thumbButton.setAttribute("aria-pressed", String(index === activeShootImageIndex));

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
    behavior: "smooth",
    block: "nearest",
    inline: "center"
  });
}

function renderShootModal() {
  const shoot = featuredWorkItems[activeShootIndex];
  const activeImage = shoot.images[activeShootImageIndex];

  shootModalSession.textContent = shoot.sessionType;

  hydrateGalleryImage(shootModalImage, activeImage, shoot, activeShootImageIndex);
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
  }
});
buildCategoryTrack();
createDots(categoryDots, categoryCards.length);
bindCategoryCardEvents();
buildFeaturedCarousel();
updateFeaturedCarousel();
updateCategoryState(0);
updateSummary();
updateMobileBookViewportState();
setHeaderNavOpen(false);

featuredSummaryButton?.addEventListener("click", () => {
  openShootModal(featuredIndex, featuredSummaryButton);
});

if ("IntersectionObserver" in window && (heroSection || bookingSection)) {
  // Hide the sticky CTA when the hero or booking section is on screen.
  const mobileBookObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.target === heroSection) {
        isHeroVisible = entry.isIntersecting;
      }

      if (entry.target === bookingSection) {
        isBookingVisible = entry.isIntersecting;
      }
    });

    syncMobileBookButtonVisibility();
  }, {
    threshold: 0.12
  });

  if (heroSection) {
    mobileBookObserver.observe(heroSection);
  }

  if (bookingSection) {
    mobileBookObserver.observe(bookingSection);
  }
} else {
  // Simple fallback for older browsers: compare the hero and booking sections to the viewport.
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

  if (headerNav.contains(event.target) || headerNavToggle.contains(event.target)) {
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

  if (featuredSlides.length) {
    updateFeaturedCarousel();
  }
});

bindHorizontalSwipe(featuredStage, {
  threshold: 36,
  onNext: () => {
    setFeaturedIndex((featuredIndex + 1) % featuredWorkItems.length);
  },
  onPrev: () => {
    setFeaturedIndex((featuredIndex - 1 + featuredWorkItems.length) % featuredWorkItems.length);
  }
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
  }
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
    contactError.textContent = "";
    updateSummary();
  });
});

[instagramInput, emailInput, textInput].forEach((input) => {
  input.addEventListener("input", () => {
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

document.getElementById("submitBooking").addEventListener("click", () => {
  if (!validateStep(3)) {
    return;
  }

  populateConfirmation();
  showStep(4);

  // Future automation handoff:
  // 1. Calendly handles the live date/time booking.
  // 2. Zapier triggers when a new Calendly event is created.
  // 3. Zapier sends a Gmail notification to the photographer.
  // 4. Zapier adds a new lead row to Google Sheets.
  // 5. Google Calendar stores the shoot date and client details.
  console.log("Fake booking submitted:", bookingData);
});

document.getElementById("startOver").addEventListener("click", () => {
  resetBookingFlow();
});

// Give pricing cards a short pressed state on touch devices.
pricingCards.forEach((card) => {
  card.addEventListener("touchstart", () => {
    card.classList.add("is-pressed");
  }, { passive: true });

  card.addEventListener("touchend", () => {
    window.setTimeout(() => {
      card.classList.remove("is-pressed");
    }, 120);
  });

  card.addEventListener("touchcancel", () => {
    card.classList.remove("is-pressed");
  });
});
