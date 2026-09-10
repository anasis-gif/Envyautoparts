/* =========================================================
   OWNER CONTACT CONFIG
   Replace this with the real owner email. This is what the
   quote form sends the request to (via a mailto link).
   For a form that submits silently in the background instead
   of opening the visitor's email app, connect this form to a
   service like Formspree or EmailJS and swap the fetch call
   in place of the mailto redirect below.
========================================================= */
const OWNER_EMAIL = "hello@envymotorparts.example";

/* =========================================================
   INVENTORY DATA
========================================================= */
const ICONS = {
  gear: '<path d="M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Z" stroke="currentColor" stroke-width="1.6"/><path d="M12 2.5v2.4M12 19.1v2.4M21.5 12h-2.4M4.9 12H2.5M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7M18.4 18.4l-1.7-1.7M7.3 7.3 5.6 5.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  bolt: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  drop: '<path d="M12 3s6 7 6 11.2A6 6 0 0 1 6 14.2C6 10 12 3 12 3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  disc: '<circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="2.6" stroke="currentColor" stroke-width="1.6"/><path d="M12 6.4v1.6M12 16v1.6M17.6 12H16M8 12H6.4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',
  light: '<path d="M4 8.5h9.5A5.5 5.5 0 0 1 19 14v.5H4v-6Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 11h5.5M4 13.5h5.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',
  shield: '<path d="M12 3 5 5.6V11c0 5 3 8 7 10 4-2 7-5 7-10V5.6L12 3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 12l2 2 4-4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  filter: '<path d="M4 4h16l-6 8v6l-4 2v-8L4 4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>'
};

const PARTS_INVENTORY = [
  { name: "Engine", icon: "gear", note: "Compression tested, mileage and fitment verified before pull." },
  { name: "Transmission", icon: "gear", note: "Fluid condition checked, shift points tested on the bench." },
  { name: "Alternator", icon: "bolt", note: "Load tested for output and bearing noise before grading." },
  { name: "Carburetor", icon: "filter", note: "Cleaned and checked for float and jet condition." },
  { name: "AC compressor", icon: "drop", note: "Clutch engagement and free rotation tested." },
  { name: "AC condenser", icon: "drop", note: "Inspected for leaks, dents, and fin damage." },
  { name: "Radiator", icon: "drop", note: "Pressure tested for leaks at the seams and core." },
  { name: "Radio", icon: "bolt", note: "Power-on and display tested, faceplate condition graded." },
  { name: "Rotors & pads", icon: "disc", note: "Measured for remaining thickness and warping." },
  { name: "O2 sensor", icon: "bolt", note: "Continuity and heater circuit tested before listing." },
  { name: "Air filter", icon: "filter", note: "Visually graded for debris and remaining service life." },
  { name: "Headlights", icon: "light", note: "Lens clarity and housing seal checked, bulbs tested." },
  { name: "Taillights", icon: "light", note: "Lens, seal, and bulb function verified before shipping." },
  { name: "Struts", icon: "disc", note: "Checked for leaking fluid and rebound resistance." },
  { name: "CV axle", icon: "disc", note: "Boots and joints inspected for play and grease loss." },
  { name: "Water pump", icon: "gear", note: "Bearing play and seal condition checked before grading." },
  { name: "Power steering pump", icon: "gear", note: "Pressure and shaft seal tested for leaks and noise." },
  { name: "Air bag", icon: "shield", note: "Module and deployment history verified against records." },
  { name: "Dash pad", icon: "shield", note: "Checked for UV cracking, warping, and mounting tabs." },
  { name: "Key fob", icon: "bolt", note: "Button function and battery contact tested before sale." },
  { name: "Seatbelt", icon: "shield", note: "Retractor and buckle latch tested for smooth function." },
  { name: "Fuel pump", icon: "gear", note: "Flow and pressure tested against factory specification." },
  { name: "Ignition switch", icon: "bolt", note: "Cylinder and electrical contacts checked before listing." },
  { name: "Speedometer", icon: "bolt", note: "Cluster power-on tested, glass and needle condition graded." },
  { name: "Control arm", icon: "disc", note: "Bushings and ball joint play measured before grading." }
];

const PART_IMAGES = {
  engine: "https://commons.wikimedia.org/wiki/Special:FilePath/Car%20engine.jpg?width=900",
  gearbox: "https://commons.wikimedia.org/wiki/Special:FilePath/Gearbox.jpg?width=900",
  alternator: "https://commons.wikimedia.org/wiki/Special:FilePath/Alternator.jpg?width=900",
  radiator: "https://commons.wikimedia.org/wiki/Special:FilePath/Automobile%20radiator.jpg?width=900",
  brakes: "https://commons.wikimedia.org/wiki/Special:FilePath/Disc%20brake.jpg?width=900",
  battery: "https://commons.wikimedia.org/wiki/Special:FilePath/Car%20battery.jpg?width=900",
  wheel: "https://commons.wikimedia.org/wiki/Special:FilePath/Car%20wheel.jpg?width=900",
  service: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80"
};

function getPartVisual(partName) {
  const name = partName.toLowerCase();
  if (/engine/.test(name)) return { image: PART_IMAGES.engine, label: "ENGINE" };
  if (/transmission/.test(name)) return { image: PART_IMAGES.gearbox, label: "TRANSMISSION" };
  if (/alternator/.test(name)) return { image: PART_IMAGES.alternator, label: "ALTERNATOR" };
  if (/radiator/.test(name)) return { image: PART_IMAGES.radiator, label: "RADIATOR" };
  if (/rotors|pads/.test(name)) return { image: PART_IMAGES.brakes, label: "BRAKES" };
  if (/battery|ignition|key fob/.test(name)) return { image: PART_IMAGES.battery, label: "ELECTRICAL" };
  if (/wheel|tire/.test(name)) return { image: PART_IMAGES.wheel, label: "WHEEL / FITMENT" };
  if (/carburetor|cv axle|water pump|fuel pump|control arm/.test(name)) {
    return { image: PART_IMAGES.engine, label: "DRIVETRAIN" };
  }
  if (/alternator|radio|o2 sensor|key fob|ignition|speedometer/.test(name)) {
    return { image: PART_IMAGES.alternator, label: "ELECTRICAL" };
  }
  if (/radiator|condenser|compressor|air filter/.test(name)) {
    return { image: PART_IMAGES.radiator, label: "SERVICE" };
  }
  if (/rotors|struts|disc|seatbelt|air bag/.test(name)) {
    return { image: PART_IMAGES.brakes, label: "SAFETY / CHASSIS" };
  }
  if (/headlights|taillights|dash|power steering/.test(name)) {
    return { image: PART_IMAGES.wheel, label: "EXTERIOR" };
  }
  return { image: PART_IMAGES.service, label: "TESTED PART" };
}

/* =========================================================
   RENDER INVENTORY
========================================================= */
const inventoryGrid = document.getElementById("inventoryGrid");
const partSelect = document.getElementById("partNeeded");

PARTS_INVENTORY.forEach((part, i) => {
  const code = "PN-" + String(i + 1).padStart(3, "0");
  const visual = getPartVisual(part.name);

  // catalog card
  const card = document.createElement("article");
  card.className = "part-card";
  card.innerHTML = `
    <div class="part-image">
      <img src="${visual.image}" alt="${part.name} automotive part" loading="lazy">
      <span class="part-image-label">${visual.label} / ${String(i + 1).padStart(2, "0")}</span>
    </div>
    <div class="part-card-top">
      <span class="part-code">${code}</span>
      <span class="part-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">${ICONS[part.icon]}</svg>
      </span>
    </div>
    <h3 class="part-name">${part.name}</h3>
    <p class="part-note">${part.note}</p>
    <a href="#quote" class="part-link" data-part="${part.name}">
      Request a quote
      <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  `;
  inventoryGrid.appendChild(card);

  const partImage = card.querySelector("img");
  partImage.addEventListener("error", () => card.classList.add("image-unavailable"));

  // select option
  const opt = document.createElement("option");
  opt.value = part.name;
  opt.textContent = part.name;
  partSelect.appendChild(opt);
});

const otherOpt = document.createElement("option");
otherOpt.value = "Other / not listed";
otherOpt.textContent = "Other / not listed";
partSelect.appendChild(otherOpt);

// clicking "Request a quote" on a card pre-selects the part and focuses the form
document.querySelectorAll(".part-link").forEach(link => {
  link.addEventListener("click", () => {
    partSelect.value = link.dataset.part;
    setError(partSelect, "");
    window.setTimeout(() => document.getElementById("fullName").focus({ preventScroll: true }), 450);
  });
});

/* =========================================================
   MOBILE NAV
========================================================= */
const navToggle = document.getElementById("navToggle");
const siteHeader = document.querySelector(".site-header");

function closeNav() {
  if (siteHeader.classList.contains("nav-open")) {
    siteHeader.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
}

navToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = siteHeader.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    closeNav();
  });
});

// Keep the navigation oriented as each section enters the reading position.
const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];
const navSections = navLinks
  .map(link => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function setActiveNav(sectionId) {
  navLinks.forEach(link => {
    const isCurrent = link.getAttribute("href") === `#${sectionId}`;
    if (isCurrent) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function updateActiveNav() {
  const headerOffset = siteHeader ? siteHeader.offsetHeight + 28 : 104;
  const currentSection = navSections.reduce((current, section) => {
    return section.getBoundingClientRect().top <= headerOffset ? section : current;
  }, navSections[0]);
  if (currentSection) setActiveNav(currentSection.id);
}

window.addEventListener("scroll", updateActiveNav, { passive: true });
window.addEventListener("resize", updateActiveNav);
updateActiveNav();

document.addEventListener("click", (e) => {
  if (siteHeader.classList.contains("nav-open") && !siteHeader.contains(e.target)) {
    closeNav();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeNav();
  }
});

/* =========================================================
   FORM VALIDATION + SUBMIT
========================================================= */
const form = document.getElementById("quoteForm");
const submitBtn = document.getElementById("submitBtn");
const quoteSuccess = document.getElementById("quoteSuccess");
const newRequestBtn = document.getElementById("newRequestBtn");

const PHONE_RE = /^[0-9()+\-.\s]{7,20}$/;
const ZIP_RE = /^[0-9]{5}(-[0-9]{4})?$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const YEAR_RE = /^(19|20)[0-9]{2}$/;

function setError(field, message) {
  if (!field) return;
  const wrapper = field.closest(".field");
  const errorEl = form.querySelector(`[data-error-for="${field.id}"]`);
  if (message) {
    if (wrapper) wrapper.classList.add("invalid");
    if (errorEl) errorEl.textContent = message;
  } else {
    if (wrapper) wrapper.classList.remove("invalid");
    if (errorEl) errorEl.textContent = "";
  }
}

// Clear error status dynamically as user types or selects
form.querySelectorAll("input, select, textarea").forEach(input => {
  input.addEventListener("input", () => setError(input, ""));
  input.addEventListener("change", () => setError(input, ""));
});

function validateForm() {
  let valid = true;

  const fullName = form.fullName;
  if (!fullName.value.trim()) { setError(fullName, "Enter your name."); valid = false; }
  else setError(fullName, "");

  const phone = form.phone;
  if (!PHONE_RE.test(phone.value.trim())) { setError(phone, "Enter a valid phone number."); valid = false; }
  else setError(phone, "");

  const email = form.email;
  if (!EMAIL_RE.test(email.value.trim())) { setError(email, "Enter a valid email address."); valid = false; }
  else setError(email, "");

  const partNeeded = form.partNeeded;
  if (!partNeeded.value) { setError(partNeeded, "Select a part."); valid = false; }
  else setError(partNeeded, "");

  const zip = form.zip;
  if (!ZIP_RE.test(zip.value.trim())) { setError(zip, "Enter a 5-digit ZIP code."); valid = false; }
  else setError(zip, "");

  const year = form.year;
  const currentYearNum = new Date().getFullYear();
  const yearVal = parseInt(year.value.trim(), 10);
  if (!YEAR_RE.test(year.value.trim()) || yearVal < 1900 || yearVal > currentYearNum + 1) {
    setError(year, "Enter a valid year.");
    valid = false;
  } else setError(year, "");

  const make = form.make;
  if (!make.value.trim()) { setError(make, "Enter vehicle make."); valid = false; }
  else setError(make, "");

  const model = form.model;
  if (!model.value.trim()) { setError(model, "Enter vehicle model."); valid = false; }
  else setError(model, "");

  return valid;
}

function buildMailtoLink(data) {
  const subject = `Part quote request: ${data.partNeeded} for ${data.year} ${data.make} ${data.model}`;
  const bodyLines = [
    `Name: ${data.fullName}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `ZIP code: ${data.zip}`,
    "",
    `Part needed: ${data.partNeeded}`,
    `Vehicle: ${data.year} ${data.make} ${data.model}`,
    "",
    "Additional notes:",
    data.message ? data.message : "(none provided)"
  ];
  const body = bodyLines.join("\r\n");
  return `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateForm()) {
    const firstInvalid = form.querySelector(".invalid input, .invalid select");
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  const data = Object.fromEntries(new FormData(form).entries());
  submitBtn.classList.add("loading");
  submitBtn.disabled = true;

  window.setTimeout(() => {
    window.location.href = buildMailtoLink(data);
    submitBtn.classList.remove("loading");
    submitBtn.disabled = false;
    form.hidden = true;
    quoteSuccess.hidden = false;

    // restart the checkmark draw animation
    const checkPath = document.getElementById("checkPath");
    if (checkPath) {
      checkPath.style.animation = "none";
      void checkPath.offsetWidth;
      checkPath.style.animation = "";
    }
  }, 550);
});

newRequestBtn.addEventListener("click", () => {
  form.reset();
  form.querySelectorAll(".field").forEach(f => f.classList.remove("invalid"));
  form.querySelectorAll(".field-error").forEach(el => el.textContent = "");
  form.hidden = false;
  quoteSuccess.hidden = true;
});

/* =========================================================
   FOOTER YEAR
========================================================= */
document.getElementById("currentYear").textContent = new Date().getFullYear();

/* Reveal content as it enters the viewport without blocking the page flow. */
const revealItems = document.querySelectorAll(".section-head, .why-card, .part-card, .process-list li, .footer-col");
const revealObserver = "IntersectionObserver" in window ? new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 }) : null;

revealItems.forEach((item, index) => {
  item.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
  if (revealObserver) revealObserver.observe(item);
  else item.classList.add("is-visible");
});
