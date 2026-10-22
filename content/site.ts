/**
 * NJPAP site content.
 *
 * All journal text and data lives here so it can be updated without touching
 * page layouts. Edit values below and the whole site updates.
 */

export const site = {
  name: "Nigeria Journal of Pure and Applied Physics",
  shortName: "NJPAP",
  host: {
    department: "Department of Physics",
    university: "The Federal University of Technology, Akure",
    short: "Department of Physics, FUTA",
  },
  tagline: "Advancing Physics, Inspiring Innovation, Impacting Society.",
  description:
    "Nigeria Journal of Pure and Applied Physics (NJPAP) publishes papers of the highest quality and significance in specific areas of physics, pure and applied. The journal content reflects core physics disciplines, but is also open to a broad range of topics whose central theme falls within the bounds of physics.",
  about:
    "Nigeria Journal of Pure and Applied Physics (NJPAP) is a peer-reviewed journal dedicated to advancing the frontiers of physics through the publication of high-quality research. The journal promotes the dissemination of innovative theories, methodologies, and findings that contribute to scientific knowledge and technological development.",
  url: "https://www.njpap.futa.edu.ng",
  submissionUrl: "https://forms.gle/PufTc8qPHDVVwAoc6",
  frequency: "Quarterly",
  fees: {
    nigerian: { label: "Nigerian Authors", amount: "₦50,000" },
    international: { label: "International Authors", amount: "US$100" },
    per: "per accepted manuscript",
  },
  contact: {
    editorInChief: "Prof. J. S. Ojo",
    email: "njpap@futa.edu.ng",
    phone: "+234-806-653-2234",
    phoneHref: "+2348066532234",
    website: "www.njpap.futa.edu.ng",
    address: [
      "Nigeria Journal of Pure and Applied Physics (NJPAP)",
      "Department of Physics",
      "The Federal University of Technology, Akure",
      "Ondo State, Nigeria",
    ],
  },
  articleTypes: [
    "Original research papers",
    "Review articles",
    "Short communications",
    "Technical notes",
  ],
  researchAreas: [
    "Quantum physics",
    "Atomic and molecular physics",
    "Statistical physics, thermodynamics",
    "Communication/Atmospheric physics",
    "Nonlinear dynamical systems and modelling",
    "Fluid dynamics",
    "Information theory and computation",
    "Electronics, photonics, device physics",
    "Nanotechnology",
    "Nuclear physics",
    "Plasma physics",
    "Astrophysics and cosmology",
    "Biophysics",
    "Geophysics",
    "Material science and engineering",
    "Instrumentation",
    "Medical physics",
    "Environmental physics",
    "Theoretical and mathematical physics",
    "Condensed Matter Physics",
    "Interdisciplinary studies in physics",
  ],
  /**
   * Downloadable files. Set `href` to a file in /public/downloads (e.g.
   * "/downloads/njpap-template.docx") once available; `null` shows "coming soon".
   */
  downloads: {
    guidelines: null as string | null,
    template: null as string | null,
  },
  /**
   * Editorial board. Entries with `placeholder: true` are shown as
   * "to be announced" until the real list is provided.
   */
  editorialBoard: [
    {
      role: "Editor-in-Chief",
      name: "Prof. J. S. Ojo",
      affiliation:
        "Department of Physics, The Federal University of Technology, Akure",
      placeholder: false,
    },
    {
      role: "Managing Editor",
      name: "To be announced",
      affiliation: "",
      placeholder: true,
    },
    {
      role: "Associate Editor",
      name: "To be announced",
      affiliation: "",
      placeholder: true,
    },
    {
      role: "Associate Editor",
      name: "To be announced",
      affiliation: "",
      placeholder: true,
    },
    {
      role: "Editorial Board Member",
      name: "To be announced",
      affiliation: "",
      placeholder: true,
    },
    {
      role: "Editorial Board Member",
      name: "To be announced",
      affiliation: "",
      placeholder: true,
    },
  ],
} as const

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research-areas", label: "Research Areas" },
  { href: "/call-for-papers", label: "Call for Papers" },
  { href: "/author-guidelines", label: "Author Guidelines" },
  { href: "/publication-fees", label: "Fees" },
  { href: "/editorial-board", label: "Editorial Board" },
  { href: "/contact", label: "Contact" },
] as const
