// Business details shared across the header, footer, home, contact and
// locations pages. Update hours here and every page picks up the change.

export const PHONE = {
  display: "262-387-1485",
  href: "tel:2623871485",
};

export const ADDRESS = {
  street: "W51N731 Keup Rd",
  city: "Cedarburg, WI",
  zip: "53012",
};

/** `days` uses JS day numbers (0 = Sunday) so the current day can be highlighted. */
export const HOURS = [
  { label: "Monday – Thursday", time: "9:00am – 7:00pm", days: [1, 2, 3, 4] },
  { label: "Friday", time: "9:00am – 6:00pm", days: [5] },
  { label: "Saturday", time: "9:00am – 3:00pm", days: [6] },
  { label: "Sunday", time: "10:00am – 3:00pm", days: [0] },
];

export const SOCIAL = {
  facebook: "https://www.facebook.com/p/Northern-Lights-Tan-Spa-Inc-100063708154086/",
  instagram: "https://www.instagram.com/northern_lights_tan/",
};

export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.5590456723203!2d-87.97768252335!3d43.30255527503819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8804e5782e88d047%3A0xef8ed7d5e7706eb3!2sNorthern%20Lights%20Tan%20Spa%20Inc!5e0!3m2!1sen!2sbd!4v1769670127457!5m2!1sen!2sbd";

export const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=Northern+Lights+Tan+Spa+Inc+W51N731+Keup+Rd+Cedarburg+WI";

export const WELLNESS_LINKS = [
  { name: "SST Red Light Therapy", href: "/sst-red-light-therapy" },
  { name: "Halotherapy Sauna", href: "/halotherapy-sauna" },
  { name: "Poly Red Light Therapy", href: "/red-light-therapy" },
  { name: "Wellfit Skin Care Treatments", href: "/wellfit" },
  { name: "BleachBright Teeth Whitening", href: "/bleachbright" },
];
