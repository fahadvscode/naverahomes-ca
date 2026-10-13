export const LAST_UPDATED = "2026-10-05";

function displayDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export const DISPLAY_DATE = displayDate(LAST_UPDATED);

export const SITE_URL = "https://naverahomes.ca";

export const PROJECT = {
  name: "Navera at Mayfield Village",
  shortName: "Navera",
  builder: "Digreen Homes",
  builderStyled: "DiGreen Homes",
  place: "Countryside Drive & Torbram Road, Brampton, Ontario",
  postalReference: "L6R 0L5",
  startingPrice: "$999,999",
  status: "Coming this fall; Priority Access registration open",
} as const;

export const INDEPENDENCE_DISCLAIMER =
  "This is an independent information and registration website for Navera at Mayfield Village. It is not the official website of Digreen Homes and is not affiliated with or endorsed by the builder. All renderings, pricing, sizes, and specifications are for illustration only and are subject to change without notice. E.&O.E.";

export const PRICING_DISCLAIMER = `Prices, sizes, specifications, and availability are subject to change without notice. Lot specifications are approximate and certain lots and configurations may be subject to premiums. E.&O.E. Information current as of ${DISPLAY_DATE}.`;

export { CASL_CONSENT } from "./consent";

export const NAV = [
  { href: "/", label: "Overview" },
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/pricing", label: "Pricing" },
  { href: "/location", label: "Location" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/register", label: "Register" },
] as const;

export type PageDef = { path: string; title: string; description: string; h1: string };

export const PAGES = {
  home: {
    path: "/",
    title: "Navera at Mayfield Village, Brampton Detached Homes",
    description:
      "Navera at Mayfield Village: Digreen Homes 38 and 41 Series detached homes at Countryside Drive and Torbram Road, Brampton, Ontario, from $999,999.",
    h1: "Navera at Mayfield Village — New Detached Homes in Northeast Brampton",
  },
  floorPlans: {
    path: "/floor-plans",
    title: "Navera at Mayfield Village 38 and 41 Series, Brampton",
    description:
      "Navera at Mayfield Village floor plans for 38 and 41 Series detached homes in Brampton, Ontario are to be announced. Priority Access registration is free.",
    h1: "Navera at Mayfield Village Floor Plans",
  },
  pricing: {
    path: "/pricing",
    title: "Navera at Mayfield Village from $999,999, Brampton",
    description:
      "Navera at Mayfield Village detached homes by Digreen Homes start from $999,999 in Brampton, Ontario. Deposits, incentives, and occupancy are to be announced.",
    h1: "Navera at Mayfield Village Pricing",
  },
  location: {
    path: "/location",
    title: "Navera at Mayfield Village, Countryside and Torbram",
    description:
      "Navera at Mayfield Village is at Countryside Drive and Torbram Road in northeast Brampton, Ontario. Digreen Homes detached homes, postal reference L6R 0L5.",
    h1: "Navera at Mayfield Village Location: Countryside Drive & Torbram Road, Brampton",
  },
  gallery: {
    path: "/gallery",
    title: "Navera at Mayfield Village Gallery, Brampton Ontario",
    description:
      "Navera at Mayfield Village gallery for Countryside Drive and Torbram Road, Brampton, Ontario. Area artwork is labeled; floor plans are to be announced.",
    h1: "Navera at Mayfield Village Gallery",
  },
  faq: {
    path: "/faq",
    title: "Navera at Mayfield Village FAQ for Brampton, Ontario",
    description:
      "Navera at Mayfield Village FAQ for Digreen Homes detached homes at Countryside and Torbram, Brampton, Ontario, from $999,999. Coming this fall.",
    h1: "Navera at Mayfield Village — Frequently Asked Questions",
  },
  register: {
    path: "/register",
    title: "Navera at Mayfield Village Priority Access, Brampton",
    description:
      "Navera at Mayfield Village Priority Access is free. Digreen Homes 38 and 41 Series detached homes in Brampton, Ontario. Registration does not reserve a home.",
    h1: "Register for Navera at Mayfield Village Priority Access",
  },
  thankYou: {
    path: "/thank-you",
    title: "Navera at Mayfield Village Priority Access Received",
    description:
      "Navera at Mayfield Village Priority Access registration was received. It does not reserve a Digreen Homes detached home or a price in Brampton, Ontario.",
    h1: "You're registered for Priority Access.",
  },
  privacy: {
    path: "/privacy",
    title: "Navera at Mayfield Village Privacy Policy, Ontario",
    description:
      "Navera at Mayfield Village privacy policy for this Brampton, Ontario site: names, email, phone, consent, and cookies. Write to privacy@naverahomes.ca.",
    h1: "Privacy Policy",
  },
  terms: {
    path: "/terms",
    title: "Navera at Mayfield Village Terms of Use in Brampton",
    description:
      "Navera at Mayfield Village terms for this independent Brampton, Ontario site. Not an offer to sell. Facts can change. Governed by Ontario law.",
    h1: "Terms of Use",
  },
  blog: {
    path: "/blog/brampton-pre-construction-guide",
    title: "Navera at Mayfield Village and Brampton Pre-Construction",
    description:
      "Navera at Mayfield Village and pre-construction detached homes in Brampton, Ontario: Digreen Homes 38 and 41 Series at Countryside Drive and Torbram Road.",
    h1: "Pre-Construction Homes in Brampton: A 2026 Buyer's Guide",
  },
} as const satisfies Record<string, PageDef>;

export function pageMeta(page: PageDef) {
  const url = page.path === "/" ? SITE_URL : `${SITE_URL}${page.path}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: "website" as const,
      siteName: "Navera at Mayfield Village",
      locale: "en_CA",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: page.title,
      description: page.description,
    },
  };
}

export const QUICK_FACTS: { label: string; value: string }[] = [
  { label: "Project", value: "Navera at Mayfield Village" },
  { label: "Builder", value: "Digreen Homes (DiGreen Homes)" },
  {
    label: "Location",
    value: "Countryside Drive & Torbram Road, Brampton, Ontario (postal reference L6R 0L5)",
  },
  { label: "Home type", value: "Detached single-family" },
  { label: "Series", value: "38 and 41 Series (approx. 38 ft and 41 ft lots)" },
  { label: "Starting price", value: `From $999,999 per builder, as of ${DISPLAY_DATE}` },
  { label: "Launch", value: "Coming this fall; exact date to be announced" },
  { label: "Occupancy", value: "To be announced" },
  { label: "Deposit structure", value: "To be announced" },
  { label: "Floor plans", value: "To be released at launch" },
  { label: "Number of homes", value: "To be announced" },
  { label: "Last updated", value: DISPLAY_DATE },
];

export const CONFIRMED = [
  "Builder: Digreen Homes (styled DiGreen Homes)",
  "Location: Countryside Drive and Torbram Road, Brampton, Ontario",
  "Housing type: detached single-family homes",
  "Series: 38 and 41 Series, approximately 38 ft and 41 ft lots",
  "Starting price: from $999,999 per the builder",
  "Launch window: coming this fall",
  "Priority Access registration is open",
];

export const TO_BE_ANNOUNCED = [
  "Exact public launch date and any VIP preview date",
  "Floor plan names, sizes, bedrooms, bathrooms, and elevations",
  "Number of homes and lot count",
  "Deposit schedule and amounts",
  "Occupancy and closing date",
  "Incentives, upgrade credits, and development-charge terms",
  "Lot premiums and which lots carry them",
  "Sales centre or model home address",
  "Assignment policy",
];

export const DRIVE_TIMES: { place: string; time: string }[] = [
  { place: "Sesquicentennial Park", time: "2 min" },
  { place: "Mayfield Recreation Complex & Arena", time: "4 min" },
  { place: "Brampton Civic Hospital", time: "7 min" },
  { place: "Highway 410", time: "7 min" },
  { place: "Trinity Common", time: "10 min" },
  { place: "Heart Lake Conservation Park", time: "11 min" },
  { place: "Chinguacousy Park", time: "13 min" },
  { place: "Bramalea City Centre", time: "14 min" },
  { place: "Bramalea GO Station", time: "20 min" },
  { place: "Highway 407", time: "20 min" },
  { place: "Pearson Airport", time: "23 min" },
];

export const PRIORITY_BENEFITS = [
  "Priority access before the public release",
  "A first look at floor plans",
  "Pricing and release information",
  "Community updates and launch announcements",
  "Registrant-only opportunities",
];

export const NEIGHBOURHOOD: {
  title: string;
  text: string;
  icons: string[];
  darkIcon?: boolean;
}[] = [
  {
    title: "Parks and trails",
    icons: ["/images/media/parks.png"],
    text: "The builder points to Sesquicentennial Park, the Chinguacousy Trail System, and Torbram Sandalwood Community Park.",
  },
  {
    title: "Shopping",
    icons: ["/images/media/shopping.png"],
    text: "The builder cites Trinity Common Mall, SmartCentres Brampton Northeast, Bramalea City Centre, and plazas on Airport Road, Bramalea Road, Torbram Road, and Bovaird Drive.",
  },
  {
    title: "Food",
    icons: ["/images/media/food.png"],
    text: "Third-party neighbourhood notes name grocery stores in the wider area, including FreshCo and Fortinos. A specific store should be confirmed in person.",
  },
  {
    title: "Services",
    icons: ["/images/media/service.png"],
    text: "The builder cites plazas on Airport Road, Bramalea Road, Torbram Road, and Bovaird Drive for everyday errands.",
  },
  {
    title: "Schools",
    icons: ["/images/media/school.png"],
    text: "The builder cites 23 public schools, 8 Catholic schools, private options, French Immersion, and International Baccalaureate and vocational programs, including newer schools serving growth areas.",
  },
  {
    title: "Health and recreation",
    icons: ["/images/media/health.png", "/images/media/recreation.png"],
    text: "Save Max Sports Centre, Brampton Civic Hospital, community parks, and sports fields are named in the builder's location notes, along with walking and cycling trails.",
  },
  {
    title: "Highways",
    icons: ["/images/media/transportation.png"],
    text: "Highway 410 is described as minutes away, with Highway 407 further out. The builder also cites future Highway 413 as a long-term connection. Its timing is outside the builder's control.",
  },
  {
    title: "Transit",
    icons: ["/images/media/connected.png"],
    darkIcon: true,
    text: "Brampton Transit and Züm operate along major corridors. Bramalea GO Station, at Steeles Avenue and Bramalea Road, has rail service toward downtown Toronto.",
  },
  {
    title: "Worship",
    icons: ["/images/media/worship.png"],
    text: "The builder's area illustration labels Guruvayurappan Temple near Torbram Road. Hours and the street address are not confirmed on this page.",
  },
];

export const SERIES = [
  {
    name: "38 Series",
    rows: [
      ["Lot width", "Approximately 38 ft"],
      ["Plans", "To be released at launch"],
      ["Sizes", "To be announced"],
      ["Bedrooms and bathrooms", "To be announced"],
    ],
  },
  {
    name: "41 Series",
    rows: [
      ["Lot width", "Approximately 41 ft"],
      ["Plans", "To be released at launch"],
      ["Sizes", "To be announced"],
      ["Bedrooms and bathrooms", "To be announced"],
    ],
  },
] as const;

export const COMPARE_WHEN_RELEASED = [
  "Finished square footage, once the builder publishes it",
  "Ceiling heights",
  "Garage width and parking",
  "Whether a side entrance is offered",
  "Basement options",
  "Number of bedrooms and bathrooms",
  "Kitchen and family-room layout",
  "Elevation options",
  "Lot premiums attached to a specific homesite",
];

export const ONTARIO_COSTS = [
  "Lot premiums, where a specific lot is priced above the starting home",
  "Upgrades and finishes selected after the base specification",
  "Legal fees for review and closing",
  "Land transfer tax",
  "HST rules that apply to new homes, including any rebate the agreement describes",
  "Development charges, which must be confirmed in the agreement",
  "Closing adjustments such as property tax or utility apportionment",
  "The cost of an independent pre-delivery inspection",
];

export const INVESTMENT_FACTORS = [
  "Location in Brampton's northeast growth corridor",
  "Proximity to Highway 410 and GO transit, using approximate drive times",
  "Schools, parks, and daily shopping described by the builder",
  "Digreen Homes' earlier Brampton communities, as reported by listing sites",
  "A published starting price and an open registrant list before public release",
];

export const INVESTMENT_RISKS = [
  "Prices can change before or after release",
  "Closing dates can move with approvals, servicing, and construction",
  "Interest rates and borrowing costs can change",
  "Resale conditions are unknowable from a pre-construction announcement",
  "Floor plans, deposits, incentives, and occupancy are still to be announced",
];

export const SIGNING_QUESTIONS = [
  "What is the full deposit schedule, including amounts and due dates?",
  "What occupancy window is written in the agreement, and what extension rights exist?",
  "Which lots carry premiums, and how are those premiums shown?",
  "Who pays development charges, and is there a cap?",
  "What is the assignment policy, including fees and consent?",
  "How are upgrades priced, and when must they be chosen?",
  "What warranty coverage is enrolled, and what does it exclude?",
  "Which closing costs and adjustments are payable on the statement of adjustments?",
];

export type Faq = { id: string; q: string; a: string };

const asOf = DISPLAY_DATE;

export const FAQS: Faq[] = [
  {
    id: "what-is-navera",
    q: "What is Navera at Mayfield Village?",
    a: `Navera at Mayfield Village is a pre-construction community of detached homes by Digreen Homes at Countryside Drive and Torbram Road in northeast Brampton, Ontario. It offers 38-foot and 41-foot series lots within the larger Mayfield Village master-planned neighbourhood. Per the builder, homes start from $999,999, the community is coming this fall, and Priority Access registration is open as of ${asOf}.`,
  },
  {
    id: "builder",
    q: "Who is the builder of Navera in Brampton?",
    a: "Digreen Homes, also styled DiGreen Homes, is the builder of Navera at Mayfield Village in Brampton. The Markham-based company is described as a third-generation builder with communities across Southern Ontario, including earlier Brampton projects such as Countryside Fields and Torbram Countryside Crossing. This website is independent and is not the official site of Digreen Homes.",
  },
  {
    id: "location",
    q: "Where is Navera at Mayfield Village located?",
    a: "Navera at Mayfield Village is located at Countryside Drive and Torbram Road in northeast Brampton, Ontario, with a postal reference of L6R 0L5. The site is northwest of that intersection, in the growth corridor near Mayfield Road, about 7 minutes by car from Highway 410 and roughly 20 minutes from the Bramalea GO Station, based on third-party drive-time estimates.",
  },
  {
    id: "price",
    q: "How much do homes at Navera Brampton cost?",
    a: `According to the builder, detached homes at Navera at Mayfield Village start from $999,999, as of ${asOf}. Final pricing by lot size, floor plan, elevation, and lot premium has not been released. Prices, sizes, and availability are subject to change without notice, and certain lots may carry premiums. Registrants receive pricing information before the public release.`,
  },
  {
    id: "launch",
    q: "When does Navera Brampton launch?",
    a: `Digreen Homes describes Navera at Mayfield Village as coming this fall to Brampton, with Priority Access registration open now. An exact public launch date, sales-centre opening, and VIP preview date have not been announced as of ${asOf}. Registrants are told first when release information is available, and this site will show a visible last-updated date when details change.`,
  },
  {
    id: "lot-sizes",
    q: "What lot sizes are available at Navera in Brampton?",
    a: `Navera at Mayfield Village offers detached homes in a "38 and 41 Series," meaning lots of approximately 38 feet and 41 feet wide. Lot specifications are approximate per the builder, and certain lots and configurations may carry premiums. Floor plans, square footages, and the number of homes per series have not been published as of ${asOf} and will follow at launch.`,
  },
  {
    id: "deposit",
    q: "What is the deposit structure at Navera Brampton?",
    a: `The deposit structure for Navera at Mayfield Village has not been announced as of ${asOf}. Ontario freehold pre-construction deposits are commonly paid in instalments from signing through construction milestones, but the actual Navera schedule, amounts, and timing are set by Digreen Homes in the agreement of purchase and sale. Registrants receive the schedule before public release.`,
  },
  {
    id: "occupancy",
    q: "What is the occupancy or closing date for Navera Brampton?",
    a: `The occupancy date for Navera at Mayfield Village has not been announced; it is listed as to be announced as of ${asOf}. Closing timelines for pre-construction detached homes in Ontario depend on approvals, servicing, and construction progress, and are fixed in each purchase agreement. Priority registrants are told as soon as the builder releases an occupancy window.`,
  },
  {
    id: "schools",
    q: "What schools are near Navera at Mayfield Village?",
    a: "The builder cites 23 public schools, 8 Catholic schools, private options, French Immersion, and International Baccalaureate programs near Navera at Mayfield Village. Named nearby schools in third-party listings include Eagle Plains Public School and Mayfield Secondary School. School catchments change, so buyers should confirm boundaries directly with the Peel District School Board or the Dufferin-Peel Catholic District School Board.",
  },
  {
    id: "vip",
    q: "How do I get VIP or Priority Access to Navera Brampton?",
    a: "To get Priority Access to Navera at Mayfield Village, complete the free registration form on this site. The builder says registrants receive priority access before the public release, a first look at floor plans, pricing and release information, community updates, and registrant-only opportunities. Registration is free, carries no purchase obligation, and does not reserve a specific home.",
  },
  {
    id: "registration-cost",
    q: "Is there a cost to register for Navera Brampton?",
    a: "No. Registering for Priority Access to Navera at Mayfield Village through this website is free and does not obligate you to buy. Registration adds you to the list for floor plans, pricing, and release updates. It does not reserve a lot, a price, or a home, and all sales are made only through the builder's agreement of purchase and sale.",
  },
  {
    id: "investment",
    q: "Is Navera Brampton a good investment?",
    a: "No one can promise a return on Navera at Mayfield Village. Factors buyers weigh include location in Brampton's northeast growth corridor, proximity to Highway 410 and GO transit, nearby schools and parks, and the builder's track record, against risks such as price changes, closing-date shifts, interest rates, and market conditions. This is general information, not financial advice; consult licensed professionals.",
  },
  {
    id: "regal-crest",
    q: "Is Navera at Mayfield Village the same as Mayfield Village by Regal Crest?",
    a: "No. Navera at Mayfield Village is a Digreen Homes community at Countryside Drive and Torbram Road in Brampton. A separate community called Mayfield Village, built by Regal Crest Homes near Mayfield Road and Dixie Road, offers townhomes and singles of different sizes. The two share a neighbourhood-style name but are different projects by different builders in different locations.",
  },
  {
    id: "commute",
    q: "How far is Navera Brampton from the GO station and Highway 410?",
    a: "Based on third-party drive-time estimates, Navera at Mayfield Village is about 7 minutes from Highway 410 and about 20 minutes from Bramalea GO Station, with Highway 407 around 20 minutes and Pearson International Airport around 23 minutes. Times are approximate, off-peak, and vary with traffic. Brampton Transit and Züm bus service operate along major nearby corridors.",
  },
  {
    id: "assignment",
    q: "Are there assignment restrictions at Navera Brampton?",
    a: `The assignment policy for Navera at Mayfield Village has not been published as of ${asOf}. Builders set assignment terms, fees, and consent requirements in the agreement of purchase and sale, and these differ by project. Buyers who may want flexibility should ask for the assignment clause in writing before signing and have it reviewed by a real estate lawyer.`,
  },
  {
    id: "home-types",
    q: "What types of homes are at Navera?",
    a: `Navera at Mayfield Village offers detached single-family homes by Digreen Homes in a 38 and 41 Series, which means lots of approximately 38 feet and 41 feet. The builder has not published plan names, bedroom or bathroom counts, or elevations as of ${asOf}. This project is described as detached homes, not as a townhome or condominium release.`,
  },
  {
    id: "freehold",
    q: "Is Navera freehold?",
    a: `The builder describes Navera at Mayfield Village as detached homes. Whether each home is freehold, and whether any common-element, maintenance, or POTL fee applies, is to be confirmed in the agreement of purchase and sale. Those details had not been published as of ${asOf}. Buyers should confirm tenure and any monthly fees in writing before signing.`,
  },
  {
    id: "what-is-mayfield-village",
    q: "What is Mayfield Village?",
    a: "Mayfield Village is the name of the master-planned neighbourhood in north Brampton that includes Navera at Mayfield Village, a Digreen Homes detached community at Countryside Drive and Torbram Road. A different project, also called Mayfield Village and built by Regal Crest Homes near Mayfield Road and Dixie Road, is a separate community. The shared name does not mean the projects are the same.",
  },
  {
    id: "other-communities",
    q: "Which other Brampton communities has Digreen Homes built?",
    a: `Digreen Homes has earlier Brampton communities that listing sites describe as Countryside Fields, reported sold out by phase, Countryside Trails, reported sold out, and Torbram Countryside Crossing, a townhome project. Those reports are third-party descriptions of builder history as of ${asOf}, not a statement about Navera. Navera at Mayfield Village is a newer detached launch at Countryside Drive and Torbram Road.`,
  },
  {
    id: "brokers",
    q: "Can brokers register clients?",
    a: `Digreen Homes' materials for Navera at Mayfield Village state "Brokers protected." This independent website can note whether a registrant is a licensed real estate agent, but it does not set commission, registration steps, or protection terms. Agents should confirm the process directly with Digreen Homes before registering a client. Registration here is free and does not reserve a home.`,
  },
];

export const HOME_FAQ_IDS = ["what-is-navera", "location", "price", "launch", "lot-sizes", "vip"];

export function faqsById(ids: string[]) {
  return ids.map((id) => {
    const faq = FAQS.find((item) => item.id === id);
    if (!faq) throw new Error(`Missing FAQ ${id}`);
    return faq;
  });
}

export type Block =
  | { t: "h2"; id?: string; text: string }
  | { t: "h3"; text: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] };

export const HOME_ABOUT: string[] = [
  "Navera at Mayfield Village is a planned collection of detached homes in Brampton's northeast growth corridor, near the intersection of Countryside Drive and Torbram Road. Digreen Homes describes it as a \"38 and 41 Series\" community, meaning the homes sit on lots of roughly 38 and 41 feet in width — a size range that typically suits growing families who want a detached home without moving to a much larger lot.",
  "The community is part of the wider Mayfield Village master-planned neighbourhood in north Brampton. The builder points to nearby parks and trails, including Sesquicentennial Park and the Chinguacousy Trail System, as well as everyday shopping at Trinity Common Mall, SmartCentres Brampton Northeast, and Bramalea City Centre. Highway 410 is minutes away, with Highway 407 and the Bramalea GO Station further out.",
  "Digreen Homes is a Markham-based builder described as third-generation, with earlier Brampton communities including Countryside Fields and Torbram Countryside Crossing. Navera is one of its newer launches in the area. As of October 5, 2026, the builder has confirmed a starting price of $999,999, a fall launch window, and open Priority Access registration. It has not yet published floor plans, deposit schedules, incentives, or an occupancy date.",
  "That is why this page separates what is confirmed from what is not. Anything not yet released by the builder is marked \"To be announced\" rather than guessed, and this site shows its last-updated date so you can see how current it is.",
];

export const LOT_WIDTH_COPY =
  "A 41-foot lot is about three feet wider than a 38-foot lot. In general terms, that extra width can allow a wider floor plan, a wider garage, or a different driveway arrangement. It does not, by itself, tell you the finished size of the house, the number of bedrooms, or the price. Digreen Homes has not released floor plans, garage options, or square footages for Navera at Mayfield Village. Lot specifications are approximate, and certain lots may carry premiums. When plans are published, compare the drawings for each series rather than assuming the wider lot is simply a larger version of the narrower one. The diagram below shows the width difference only. It is not a site plan and it is not a floor plan.";

export const BUILDER_COPY =
  "Digreen Homes, which styles its name DiGreen Homes, is a Markham-based builder described as third-generation. Its communities are spread across Southern Ontario, including Markham, Richmond Hill, Vaughan, Oakville, Brampton, and Caledon. The company's motto is \"Better Your World.\" In Brampton, listing sites describe earlier Digreen communities such as Countryside Fields, reported sold out by phase, Countryside Trails, reported sold out, and Torbram Countryside Crossing, a townhome project. Those notes are context for the builder's local history. They are not a forecast for Navera at Mayfield Village. For the builder's own materials, see [Digreen Homes' official website](https://digreenhomes.com).";

export const WHY_REGISTER_NOTE =
  "Registration is free, carries no purchase obligation, and does not reserve a home or price.";

export const FLOOR_PLAN_LEDE =
  "Floor plans for Navera at Mayfield Village have not been released as of October 5, 2026. Digreen Homes describes the community as a 38 and 41 Series of detached homes, and says registered Priority Access members receive a first look at floor plans before the public release. Plan names, square footages, bedroom counts, and elevations are to be announced.";

export const FLOOR_PLAN_BLOCKS: Block[] = [
  {
    t: "p",
    text: "This page explains Navera Brampton floor plans only to the extent Digreen Homes has described them: two detached series, set on lots of about 38 feet and about 41 feet. There is no plan name, no bedroom count, and no square footage to show yet. A third-party listing template that shows condominium-style unit mixes does not describe this project and is not repeated here.",
  },
  { t: "h2", id: "series", text: "What the 38 and 41 Series means" },
  { t: "p", text: LOT_WIDTH_COPY },
  { t: "h2", id: "collection", text: "Floor plan collection" },
  {
    t: "p",
    text: "The two cards below name the series only. They are not released plans. Each row the builder has not published reads \"To be announced\" or \"To be released at launch.\" Nothing on this page invents a model name or a size.",
  },
  { t: "h2", id: "compare", text: "What to compare when plans are released" },
  {
    t: "p",
    text: "General guidance for reading a future Navera release, not a list of features the builder has promised. When drawings are published, line the series up against the same checklist so a wider lot is not mistaken for a confirmed larger house.",
  },
  { t: "h2", id: "notified", text: "How you will be notified" },
  {
    t: "p",
    text: "Priority Access registration on this site is free. Digreen Homes says registrants receive a first look at floor plans, plus pricing and release information, before the public release. The form does not hold a lot and it does not lock a price. When the builder publishes drawings, this page will be updated and the last-updated date will change. You can also review [Navera Brampton prices](/pricing) and the [Navera Brampton FAQ](/faq) while plans are still unreleased.",
  },
];

export const PRICING_BLOCKS: Block[] = [
  {
    t: "p",
    text: "Navera Brampton prices on this page use one figure: the starting price Digreen Homes has published. They do not use a third-party savings range, and they do not guess which series the starting price belongs to.",
  },
  { t: "h2", id: "starting-price", text: "Confirmed starting price" },
  {
    t: "p",
    text: "Some third-party listing sites show slightly different starting figures. This page uses the figure published by the builder.",
  },
  { t: "h2", id: "deposit", text: "Deposit structure" },
  { t: "h2", id: "incentives", text: "Incentives and credits" },
  {
    t: "p",
    text: "Incentives, upgrade credits, and any development-charge cap for Navera at Mayfield Village are to be announced. This site does not repeat unverified savings claims.",
  },
  { t: "h2", id: "other-costs", text: "Costs to plan for beyond the purchase price" },
  {
    t: "p",
    text: "General information for Ontario new-home buyers — confirm every item against the actual Navera agreement and with a lawyer. None of the items below is a published Navera fee.",
  },
  { t: "h2", id: "investment", text: "Is Navera Brampton a good investment?" },
  {
    t: "p",
    text: "A starting price and a location are not a forecast. The notes below separate what a buyer can observe today from risks that are still open. Nothing here is a recommendation to buy.",
  },
];

export const LOCATION_BLOCKS: Block[] = [
  {
    t: "p",
    text: "The Navera at Mayfield Village location is the northeast Brampton intersection of Countryside Drive and Torbram Road, northwest of the corner, with postal reference L6R 0L5. It sits in the city's northern growth corridor, south of Mayfield Road, rather than in downtown Brampton or along the Mayfield Road and Dixie Road corner used by a different community.",
  },
  { t: "h2", id: "map", text: "Map" },
  {
    t: "p",
    text: "Map shows the general area. The exact project location may vary. The pin is centred on Countryside Drive and Torbram Road, Brampton. It is not a surveyed lot line and it is not a sales-centre address. A sales centre address is to be announced.",
  },
  { t: "h2", id: "drive-times", text: "Drive times" },
  {
    t: "p",
    text: "The times below are third-party estimates published for this project, restated as approximate off-peak drives. They are a way to compare destinations, not a promise about a weekday commute. Traffic on Highway 410, Bovaird Drive, and Torbram Road changes the result.",
  },
  { t: "h2", id: "transit", text: "Transit and highways" },
  {
    t: "p",
    text: "Highway 410 is the closest 400-series highway in the builder's description, with a third-party estimate of about 7 minutes in off-peak conditions. Highway 407 is estimated at about 20 minutes. The builder cites future Highway 413 as a long-term connectivity factor; its timing is outside the builder's control and unconfirmed. Brampton Transit and Züm bus service operate along major nearby corridors, which matters for daily trips that do not require a car. Bramalea GO Station sits at Steeles Avenue and Bramalea Road and provides rail service toward downtown Toronto. The same third-party estimates put that station about 20 minutes away and Toronto Pearson International Airport about 23 minutes away.",
  },
  {
    t: "p",
    text: "For a door-to-door commute, compare the drive to Bramalea GO with the bus trip to the station and with driving the whole way. GO train frequency, bus routing, and parking rules are set by the transit agencies and can change. This page does not publish a timetable.",
  },
  { t: "h2", id: "schools", text: "Schools" },
  {
    t: "p",
    text: "Named schools in third-party project listings are Eagle Plains Public School and Mayfield Secondary School. That source note matters: the builder's own page gives counts rather than a catchment list. The builder cites 23 public schools, 8 Catholic schools, private options, French Immersion, and International Baccalaureate and vocational programs, including newer schools that serve growth areas. No school ranking is shown here.",
  },
  {
    t: "p",
    text: "Verify catchment boundaries with the [Peel District School Board](https://www.peelschools.org) and the [Dufferin-Peel Catholic District School Board](https://www.dpcdsb.org). Boundaries change when new schools open. A listing that names a school is not an enrolment guarantee. Families who need French Immersion or an International Baccalaureate program should ask the board which nearby schools currently offer it.",
  },
  { t: "h2", id: "parks", text: "Parks, trails and recreation" },
  {
    t: "p",
    text: "The builder's location notes name Sesquicentennial Park and the Chinguacousy Trail System, Torbram Sandalwood Community Park, scenic pond trails, and neighbourhood playgrounds, with Caledon countryside described as minutes away. Third-party drive estimates add Heart Lake Conservation Park at about 11 minutes, Chinguacousy Park at about 13 minutes, and the Mayfield Recreation Complex and Arena at about 4 minutes. The builder also names Save Max Sports Centre among nearby recreation. These are area amenities, not facilities inside a published Navera site plan. A site plan for the community is to be announced.",
  },
  { t: "h2", id: "shopping", text: "Shopping and daily needs" },
  {
    t: "p",
    text: "The builder names Trinity Common Mall, SmartCentres Brampton Northeast, and Bramalea City Centre, plus plazas along Airport Road, Bramalea Road, Torbram Road, and Bovaird Drive. Third-party neighbourhood notes also mention Walmart, FreshCo, and Fortinos in the wider area. Trinity Common is estimated at about 10 minutes and Bramalea City Centre at about 14 minutes, off-peak. Grocery and pharmacy choices on a specific plaza should be confirmed in person, because tenants change.",
  },
  { t: "h2", id: "health", text: "Health care" },
  {
    t: "p",
    text: "Brampton Civic Hospital is the hospital named for this area. Third-party estimates put the drive at about 7 minutes off-peak. Hospital campuses, urgent-care hours, and family-practice availability are not controlled by the builder and should be checked with the provider. Community parks and sports fields are part of the same everyday map, alongside Save Max Sports Centre.",
  },
  { t: "h2", id: "same-name", text: "Is this the same Mayfield Village as the Regal Crest community?" },
  { t: "h2", id: "about-the-area", text: "About the area" },
  {
    t: "p",
    text: "Neighbourhood guides describe a historical hamlet of Mayfield Village at Mayfield Road and Dixie Road. The wider name now covers a collection of newer subdivisions, with Highway 410 on the west side of this part of north Brampton. Navera at Mayfield Village uses that neighbourhood name and sits at Countryside Drive and Torbram Road. It is not the Regal Crest Homes community near Mayfield Road and Dixie Road. Use the builder name and the intersection together when you compare listings. The City of Brampton's own maps and planning notices remain the municipal record for roads, parks, and development applications: [brampton.ca](https://www.brampton.ca).",
  },
];

export const GALLERY_COPY =
  "The area illustration and photographs on this page come from Digreen Homes' Navera artwork. Lifestyle pictures are not photographs of a Navera home. Floor plans and a surveyed site plan are still to be announced.";

export const BLOG_LEDE =
  "Pre-construction homes in Brampton are new homes bought from a builder before or during construction, usually with a deposit schedule and a closing date set in the agreement of purchase and sale. Detached communities such as Navera at Mayfield Village, which offers 38-foot and 41-foot lots at Countryside Drive and Torbram Road, are typically launched through registrant lists before public release.";

export const BLOG_BLOCKS: Block[] = [
  { t: "h2", id: "how-buying-works", text: "How buying pre-construction works in Ontario" },
  {
    t: "p",
    text: "General information for Ontario buyers, not a description of an unpublished Navera contract. Pre-construction buying usually begins with a registrant or priority list. The builder gathers names before floor plans and prices are offered to the wider public. People on that list are told when a release is ready. Choosing a home, if one is still available, happens in the agreement of purchase and sale, not in a website form.",
  },
  {
    t: "p",
    text: "That agreement is the document that names the lot, the price, the deposit schedule, the finishes, and the closing terms. Deposits on freehold pre-construction homes are commonly paid in instalments, often with an amount on signing and later amounts tied to dates or construction milestones. The number of payments and the dollar figures differ by project. Navera at Mayfield Village has not published its schedule. Anyone who needs the Navera numbers should wait for the builder's form and have a lawyer read it.",
  },
  {
    t: "p",
    text: "Confirm warranty coverage in the agreement and in any enrolment certificate the builder provides. A warranty, where it exists, has limits and does not replace a review of the contract. Occupancy and final closing are sometimes different dates. The agreement should say when title transfers, which costs are due, and whether the builder can extend the date. Registration on a list does not create that contract and does not reserve a home.",
  },
  { t: "h2", id: "lot-widths", text: "What 38-foot and 41-foot lots mean for a family" },
  { t: "p", text: LOT_WIDTH_COPY },
  {
    t: "p",
    text: "For a household, the practical questions are about daily use: where cars park, whether a side door is part of the plan, how the kitchen sits against the backyard, and how many bedrooms the drawing actually shows. None of those answers is available for Navera yet. A family comparing 38-foot and 41-foot detached homes in Brampton should wait for both series and read them side by side. Width is one input. The floor plan, the lot depth, and the premium on a particular lot are others, and lot depth has not been published.",
  },
  {
    t: "p",
    text: "General information: on many southern Ontario detached lots in this width range, the house is designed to use most of the frontage, with setbacks fixed by zoning. A few extra feet of width can change a garage from a tighter bay to a more comfortable one, or it can add a room across the front. It can also add cost. Until Digreen Homes releases the Navera drawings, treat 38 and 41 as labels for lot width, not as model names.",
  },
  { t: "h2", id: "northeast-brampton", text: "Northeast Brampton at a glance" },
  {
    t: "p",
    text: "Northeast Brampton, around Countryside Drive and Torbram Road, is described by the builder as a growth corridor. Highway 410 is the nearby provincial highway. Highway 407 sits further south. Bramalea GO Station, at Steeles Avenue and Bramalea Road, connects the area by rail toward downtown Toronto. Third-party estimates for Navera put Highway 410 at about 7 minutes, the GO station at about 20 minutes, and Pearson International Airport at about 23 minutes, all approximate and off-peak.",
  },
  {
    t: "p",
    text: "Parks named for the area include Sesquicentennial Park, the Chinguacousy Trail System, Torbram Sandalwood Community Park, Heart Lake Conservation Park, and Chinguacousy Park. The Mayfield Recreation Complex and Arena and Save Max Sports Centre appear in recreation notes. Shopping cited by the builder includes Trinity Common Mall, SmartCentres Brampton Northeast, and Bramalea City Centre. The builder counts 23 public schools and 8 Catholic schools in the surrounding area, with French Immersion and International Baccalaureate programs among the options. Catchments have to be confirmed with the school boards.",
  },
  {
    t: "p",
    text: "Neighbourhood guides describe a historical hamlet of Mayfield Village at Mayfield Road and Dixie Road, and a later spread of subdivisions with Highway 410 along the west side of this northern area. The name is shared. The Digreen Homes project at Countryside and Torbram is not the same community as the Regal Crest Homes project near Mayfield and Dixie. The [Navera at Mayfield Village location](/location) page keeps that distinction in one place.",
  },
  { t: "h2", id: "navera-in-context", text: "Navera at Mayfield Village in context" },
  {
    t: "p",
    text: "Navera at Mayfield Village is a pre-construction detached community by Digreen Homes. Confirmed items, as of October 5, 2026, are the location at Countryside Drive and Torbram Road, the detached 38 and 41 Series, a starting price of $999,999 per the builder, a fall launch window, and open Priority Access registration. Still to be announced: the exact launch date, floor plans, home count, deposit schedule, occupancy, incentives, lot premiums, sales-centre address, and assignment policy.",
  },
  {
    t: "p",
    text: "Read the project on its own pages rather than through a city-wide average. [Navera at Mayfield Village](/) separates confirmed facts from open items. [Navera Brampton prices](/pricing) keeps the builder's starting figure and says plainly what is not priced yet. [Navera floor plans](/floor-plans) explains the series without inventing drawings. The same standard applies here: if a number is not on the builder's Navera information, it is not treated as a fact.",
  },
  {
    t: "p",
    text: "Priority Access, in the builder's words, means notice before the public release, a first look at floor plans, pricing and release information, community updates, and registrant-only opportunities. It is not a hold on a home. People who want that list can [Register for Priority Access](/register). People who want the short answers can use the [Navera Brampton FAQ](/faq).",
  },
  { t: "h2", id: "other-digreen", text: "Other Digreen Homes communities nearby" },
  {
    t: "p",
    text: "Listing sites, as of October 5, 2026, describe earlier Digreen Homes communities in Brampton. Countryside Fields is reported sold out by phase. Countryside Trails is reported sold out. Torbram Countryside Crossing is described as a townhome community. Those sentences are third-person notes from listing sites and the builder's communities materials. They are not an inventory check performed for this page, and a sold-out report can lag a release.",
  },
  {
    t: "p",
    text: "The useful comparison is about product, not about copying a result. Countryside Fields and Countryside Trails are discussed by listing sites as earlier low-rise communities. Torbram Countryside Crossing is discussed as townhomes. Navera at Mayfield Village is described by the builder as detached homes on approximately 38-foot and 41-foot lots. A buyer who liked an earlier community still needs the Navera agreement, because deposits, lot premiums, and closing dates are set per project.",
  },
  {
    t: "p",
    text: "Digreen Homes is based in Markham and is described as a third-generation builder, with communities in Markham, Richmond Hill, Vaughan, Oakville, Brampton, and Caledon. The motto published by the builder is \"Better Your World.\" This website is not Digreen Homes. The builder's own site is the place to confirm what the company currently says about its communities: [Digreen Homes' official website](https://digreenhomes.com).",
  },
  { t: "h2", id: "questions", text: "Questions to ask before you sign" },
  {
    t: "p",
    text: "General information. Take this list to the agreement and to a real estate lawyer. Do not treat a verbal answer at a sales meeting as a term unless it is written into the contract or a schedule.",
  },
  { t: "h2", id: "mistakes", text: "Common mistakes to avoid" },
  {
    t: "p",
    text: "General guidance only. The first mistake is treating a starting price as the price of a specific lot. At Navera, the builder has published \"starting from $999,999\" and has also said certain lots and configurations may be subject to premiums. Until a lot is priced in an agreement, the starting figure is a floor the builder has stated, not a quote.",
  },
  {
    t: "p",
    text: "The second is filling gaps with another website's template. Floor-plan tables built for condominiums, unsourced incentive ranges, and school rankings that were never published do not describe this project. If a page cannot point to the builder for a number, leave the number off the short list.",
  },
  {
    t: "p",
    text: "The third is signing before the deposit schedule, the occupancy window, the assignment clause, and the adjustment list have been read. A priority list is a way to receive information. It is not a reason to waive the time a lawyer needs. The fourth is assuming two communities with \"Mayfield Village\" in the name are one project. Match the builder and the intersection before comparing a price.",
  },
  { t: "h2", id: "verify", text: "Where to verify details" },
  {
    t: "p",
    text: "Verify project facts with Digreen Homes on [the builder's official website](https://digreenhomes.com). Verify roads, parks, and municipal process with the [City of Brampton](https://www.brampton.ca). Verify school boundaries with the Peel District School Board and the Dufferin-Peel Catholic District School Board. Have a real estate lawyer review any agreement before you sign. This site records what is public as of October 5, 2026, labels everything else as to be announced, and will change the last-updated date when those facts change.",
  },
];

export const PRIVACY_BLOCKS: Block[] = [
  {
    t: "p",
    text: `This policy describes the independent Navera at Mayfield Village registration site at ${SITE_URL}. It is not the privacy policy of Digreen Homes. Last updated: ${DISPLAY_DATE}.`,
  },
  { t: "h2", text: "What is collected" },
  {
    t: "p",
    text: "The registration form collects your first name, last name, email address, and phone number, and a yes or no answer for whether you are a licensed real estate agent. The form stores your express consent, the time consent was given, and the page path where you submitted it. If the address you arrived from included campaign parameters, the form stores utm_source, utm_medium, utm_campaign, utm_term, and utm_content.",
  },
  { t: "h2", text: "Why it is collected" },
  {
    t: "p",
    text: "The VIP Registration Team uses these details to send project updates about Navera at Mayfield Village and to respond to your registration. The yes or no answer is used only so broker enquiries can be handled in line with the builder's process. Campaign parameters show which page or campaign led to the registration. You will not be added to a list unless you check the consent box.",
  },
  { t: "h2", text: "Who processes it" },
  {
    t: "p",
    text: "Registration records are stored in a hosted Postgres database provided by Supabase. Access to read those records is limited to the site operator through a privileged dashboard. The public site uses a publishable key that can insert a registration and cannot read the table back. Digreen Homes is the builder of the community. This site is not the builder, and submitting the form does not by itself open an account with the builder.",
  },
  { t: "h2", text: "Cookies and analytics" },
  {
    t: "p",
    text: "Analytics load only after you accept the cookie notice. If you accept, the site may use Google Analytics 4, Google Tag Manager, and a Meta Pixel to measure visits and the registration event. Those tools can receive page paths, approximate location derived from your IP address, device and browser data, and events such as form start, form submit, and a completed registration. If you decline, those tools are not loaded. The choice is stored in local storage on your browser. The site does not sell personal information.",
  },
  { t: "h2", text: "Retention" },
  {
    t: "p",
    text: "Registration records are kept so updates can be sent and so a registration can be answered. They are deleted or de-identified when they are no longer needed for that purpose, unless the operator must keep a record for a legal obligation. Consent records are kept with the registration so the basis for sending messages can be shown.",
  },
  { t: "h2", text: "Deletion and access" },
  {
    t: "p",
    text: "To ask for access, correction, or deletion, email privacy@naverahomes.ca. The operator will need enough detail to find the registration, usually the email address you used. This mailbox is the contact route for privacy requests. It is not a sales desk and it is not a builder office.",
  },
  { t: "h2", text: "PIPEDA" },
  {
    t: "p",
    text: "The Personal Information Protection and Electronic Documents Act applies to commercial collection of personal information in Canada. You may ask what information is held about you, ask for a correction, and challenge a practice. You may also contact the Office of the Privacy Commissioner of Canada if a concern is not resolved.",
  },
  { t: "h2", text: "CASL" },
  {
    t: "p",
    text: "Canada's anti-spam law requires express or valid implied consent before commercial electronic messages are sent. The consent box on the registration form is unchecked until you check it. The wording is: I agree to emails about Navera at Mayfield Village. Unsubscribe anytime. Withdrawing consent stops further marketing messages. It does not erase a record by itself; use the privacy mailbox to ask for deletion.",
  },
  { t: "h2", text: "Accessibility" },
  {
    t: "p",
    text: "This website aims to conform to WCAG 2.1 Level AA. That standard is the benchmark referenced for private-sector websites under Ontario's Accessibility for Ontarians with Disabilities Act (AODA). Pages use written text, visible labels, keyboard access, and a skip link. If a page blocks you, email privacy@naverahomes.ca and name the page and the barrier.",
  },
];

export const TERMS_BLOCKS: Block[] = [
  {
    t: "p",
    text: `These terms govern use of the independent information and registration website at ${SITE_URL}. Last updated: ${DISPLAY_DATE}.`,
  },
  { t: "h2", text: "Independent information" },
  {
    t: "p",
    text: "This site is an independent information and registration website for Navera at Mayfield Village. It is not the official website of Digreen Homes and is not affiliated with or endorsed by the builder. Names, prices, and place descriptions are used so buyers can identify the project.",
  },
  { t: "h2", text: "Not an offer to sell" },
  {
    t: "p",
    text: "Nothing on this site is an offer to sell a home, a lot, or a price. Registration does not reserve a home, a lot, or a price, and it does not create a contract with Digreen Homes. A purchase happens only through the builder's agreement of purchase and sale.",
  },
  { t: "h2", text: "Accuracy" },
  {
    t: "p",
    text: "Project facts on this site are drawn from the builder's public Navera information and from clearly labelled third-party notes such as approximate drive times. Items the builder has not released are marked \"To be announced.\" Prices, sizes, specifications, and availability are subject to change without notice. E.&O.E.",
  },
  { t: "h2", text: "No reliance" },
  {
    t: "p",
    text: "Do not rely on this site as legal, financial, tax, or planning advice. Have a real estate lawyer review any agreement. Confirm school boundaries with the school boards and municipal facts with the City of Brampton. Investment comments on this site are general information, not a recommendation.",
  },
  { t: "h2", text: "Third-party links" },
  {
    t: "p",
    text: "Links to Digreen Homes, the City of Brampton, and school boards leave this site. Those sites have their own terms. A link is not an endorsement of every page on the destination.",
  },
  { t: "h2", text: "Governing law" },
  {
    t: "p",
    text: "These terms are governed by the laws of the Province of Ontario and the federal laws of Canada that apply there. Courts in Ontario have jurisdiction over disputes arising from use of this site.",
  },
];

export const LOT_DIAGRAM = {
  path: "/images/lot-width.svg",
  name: "Diagram of approximate 38-foot and 41-foot lot widths",
  caption:
    "Schematic comparing an approximate 38-foot lot with an approximate 41-foot lot at Navera at Mayfield Village. Not a floor plan.",
};

export const LOCATION_DIAGRAM = {
  path: "/images/location-schematic.svg",
  name: "Schematic of Countryside Drive and Torbram Road in northeast Brampton",
  caption:
    "Schematic of the Navera at Mayfield Village location near Countryside Drive and Torbram Road. Not to scale.",
};

export function llmsTxt() {
  const qaIds = [
    "what-is-navera",
    "builder",
    "location",
    "price",
    "launch",
    "lot-sizes",
    "deposit",
    "schools",
    "vip",
    "regal-crest",
    "commute",
  ];
  const qa = faqsById(qaIds)
    .map((faq) => `### ${faq.q}\n${faq.a}`)
    .join("\n\n");
  return `# Navera at Mayfield Village
> Navera at Mayfield Village is a pre-construction community of detached homes by Digreen Homes at Countryside Drive and Torbram Road in northeast Brampton, Ontario; coming this fall with Priority Access registration open.

## Key Facts
- Builder: Digreen Homes (DiGreen Homes)
- Location: Countryside Drive & Torbram Road, Brampton, Ontario
- Home types: Detached single-family; 38 and 41 Series (approx. 38 ft and 41 ft lots)
- Sizes: To be announced
- Price range: From $999,999 per builder, as of ${DISPLAY_DATE} (subject to change)
- Deposit: To be announced
- Occupancy: To be announced
- Status: Coming this fall; Priority Access registration open
- Last updated: ${LAST_UPDATED}

## Pages
- [Overview](${SITE_URL}/): Project summary, quick facts, confirmed vs to-be-announced details
- [Floor Plans](${SITE_URL}/floor-plans): 38 and 41 series explained; plans release at launch
- [Pricing](${SITE_URL}/pricing): Builder-stated starting price, deposit and incentive status
- [Location](${SITE_URL}/location): Drive times, transit, schools, parks, shopping
- [Gallery](${SITE_URL}/gallery): Area illustration and photographs; site plan to be announced
- [FAQ](${SITE_URL}/faq): 20 answered questions
- [Register](${SITE_URL}/register): Free Priority Access registration
- [Guide](${SITE_URL}/blog/brampton-pre-construction-guide): Brampton pre-construction buyer guide
- [Privacy](${SITE_URL}/privacy): Privacy policy for this registration site
- [Terms](${SITE_URL}/terms): Terms of use for this independent site

## Common Questions
${qa}

## Source
This is an independent information resource for Navera at Mayfield Village and is not the official website of Digreen Homes. Primary source: https://digreenhomes.com/navera--lp. Details are subject to change.
`;
}

function blocksToMd(blocks: Block[]) {
  return blocks
    .map((block) => {
      if (block.t === "h2" || block.t === "h3") {
        const marks = block.t === "h2" ? "##" : "###";
        return `${marks} ${block.text}`;
      }
      if (block.t === "p") return block.text;
      const marker = block.t === "ol" ? "1." : "-";
      return block.items.map((item) => `${marker} ${item}`).join("\n");
    })
    .join("\n\n");
}

export function llmsFullTxt() {
  const faqMd = FAQS.map((faq) => `### ${faq.q}\n${faq.a}`).join("\n\n");
  return `# Navera at Mayfield Village

Independent information and registration website. Not the official site of Digreen Homes.
Last updated: ${DISPLAY_DATE} (${LAST_UPDATED})

${INDEPENDENCE_DISCLAIMER}

${PRICING_DISCLAIMER}

## Overview

# ${PAGES.home.h1}

${FAQS[0].a}

${HOME_ABOUT.join("\n\n")}

${LOT_WIDTH_COPY}

${BUILDER_COPY}

${WHY_REGISTER_NOTE}

## Floor plans

# ${PAGES.floorPlans.h1}

${FLOOR_PLAN_LEDE}

${blocksToMd(FLOOR_PLAN_BLOCKS)}

## Pricing

# ${PAGES.pricing.h1}

${FAQS[3].a}

${blocksToMd(PRICING_BLOCKS)}

## Location

# ${PAGES.location.h1}

${FAQS[2].a}

${blocksToMd(LOCATION_BLOCKS)}

${FAQS[12].a}

## Gallery

# ${PAGES.gallery.h1}

${GALLERY_COPY}

## FAQ

# ${PAGES.faq.h1}

${faqMd}

## Register

# ${PAGES.register.h1}

${FAQS[9].a}

${FAQS[10].a}

## Guide

# ${PAGES.blog.h1}

${BLOG_LEDE}

${blocksToMd(BLOG_BLOCKS)}

## Privacy

${blocksToMd(PRIVACY_BLOCKS)}

## Terms

${blocksToMd(TERMS_BLOCKS)}
`;
}
