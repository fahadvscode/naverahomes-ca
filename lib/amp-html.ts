import {
  BLOG_BLOCKS,
  BLOG_LEDE,
  BUILDER_COPY,
  COMPARE_WHEN_RELEASED,
  CONFIRMED,
  DISPLAY_DATE,
  DRIVE_TIMES,
  FAQS,
  FLOOR_PLAN_BLOCKS,
  FLOOR_PLAN_LEDE,
  GALLERY_COPY,
  HOME_ABOUT,
  HOME_FAQ_IDS,
  INDEPENDENCE_DISCLAIMER,
  INVESTMENT_FACTORS,
  INVESTMENT_RISKS,
  LOCATION_BLOCKS,
  LOCATION_DIAGRAM,
  LOT_DIAGRAM,
  LOT_WIDTH_COPY,
  NAV,
  NEIGHBOURHOOD,
  ONTARIO_COSTS,
  PAGES,
  PRICING_BLOCKS,
  PRICING_DISCLAIMER,
  PRIORITY_BENEFITS,
  PRIVACY_BLOCKS,
  QUICK_FACTS,
  SERIES,
  SIGNING_QUESTIONS,
  TERMS_BLOCKS,
  TO_BE_ANNOUNCED,
  WHY_REGISTER_NOTE,
  faqsById,
  type Block,
  type Faq,
  type PageDef,
} from "./content";
import { CASL_CONSENT } from "./consent";
import { AERIAL, AREA_ICON_LINKS, AREA_PHOTOS, LIFESTYLE_PHOTOS, MEDIA, type SitePhoto } from "./media";
import { ampPath, canonicalUrl } from "./amp-routes";
import {
  articleLd,
  breadcrumbLd,
  developerLd,
  faqLd,
  imageLd,
  offerLd,
  orgLd,
  projectLd,
  webPageLd,
  websiteLd,
} from "./schema";

const BOILERPLATE =
  "body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}";

const NOSCRIPT_BOILERPLATE = "body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}";

const CSS = `
*{box-sizing:border-box}
body{margin:0;background:#faf7f0;color:#1d2f25;font-family:Inter,Helvetica,Arial,sans-serif;font-size:17px;line-height:1.6}
h1,h2,h3,summary{font-family:Fraunces,Georgia,serif;font-weight:600;line-height:1.15;color:#1d2f25}
h1{font-size:2.35rem;margin:0 0 .8rem}
h2{font-size:1.8rem;margin:2.4rem 0 .7rem}
h3{font-size:1.2rem;margin:1.2rem 0 .35rem;color:#2f4a3a}
p{margin:.75rem 0}
a{color:#2f4a3a}
.wrap{max-width:1080px;margin:0 auto;padding:0 1.25rem}
.header{border-bottom:1px solid #1d2f25;padding:1rem 0 .25rem}
.bar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.75rem 1.25rem}
.logo{width:168px}
.nav{display:flex;flex-wrap:wrap;gap:.7rem 1.1rem;padding:.85rem 0 1rem;font-size:.92rem;font-weight:600}
.nav a,.crumbs a,.footer a{text-decoration:underline;text-underline-offset:3px}
.section{padding:2.4rem 0}
.hero{display:grid;gap:2rem;padding:2.2rem 0;border-bottom:1px solid #d4ccbb}
.lede{font-size:1.125rem}
.measure{max-width:68ch}
.panel{border:1px solid #1d2f25;padding:1.15rem}
.band{background:#f3eee4;border-top:1px solid #d4ccbb;border-bottom:1px solid #d4ccbb}
.muted{color:#4e5852;font-size:.92rem}
label,legend{font-size:.92rem;font-weight:600}
fieldset{border:0;margin:0;padding:0}
.fields{display:grid;gap:.85rem}
input[type="text"],input[type="email"],input[type="tel"]{width:100%;border:1px solid #1d2f25;background:#fff;color:#1d2f25;padding:.7rem .75rem;font:inherit;border-radius:0}
.choices{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-top:.45rem}
.choices label{border:1px solid #1d2f25;background:#fff;text-align:center;padding:.75rem;font-weight:600}
.check{display:flex;gap:.75rem;align-items:flex-start;font-weight:400;margin:1rem 0}
.check input{margin-top:.3rem}
button{background:#8f5b38;color:#faf7f0;border:0;width:100%;padding:.9rem 1rem;font:inherit;font-weight:600;cursor:pointer}
table{width:100%;border-collapse:collapse;margin:.8rem 0}
caption{text-align:left;font-size:.92rem;color:#4e5852;padding-bottom:.4rem}
th,td{text-align:left;vertical-align:top;border-top:1px solid #d4ccbb;padding:.7rem .6rem .7rem 0}
th{font-weight:600}
ul,ol{margin:.4rem 0 .8rem;padding-left:1.2rem}
li{margin:.35rem 0}
figure{margin:1.2rem 0}
figcaption{color:#4e5852;font-size:.92rem;margin-top:.45rem}
.crumbs{font-size:.92rem;margin-bottom:1rem}
.icons{display:flex;flex-wrap:wrap;gap:.75rem 1.1rem}
.icon{width:44px}
.row{display:grid;gap:.75rem 1rem;border-top:1px solid #d4ccbb;padding:.9rem 0}
.marks{display:flex;flex-wrap:wrap;align-items:flex-end;gap:1.25rem}
.mark{background:#1d2f25;display:inline-block;padding:.5rem}
.pin{width:8rem}
.wordmark{width:24rem;max-width:100%;background:#1d2f25;padding:1.25rem}
.wordmark figcaption{color:#e7e1d6}
.footer h2{color:#faf7f0}
.split{display:grid;gap:1.5rem}
.footer{background:#1d2f25;color:#e7e1d6;padding:2.6rem 0}
.footer a{color:#e7e1d6}
.footer-form{background:#faf7f0;color:#1d2f25;padding:1.15rem}
.rule{border-left:4px solid #8f5b38;padding-left:1rem}
details{border-bottom:1px solid #d4ccbb;padding:.85rem 0}
summary{cursor:pointer}
@media (min-width:720px){
.fields{grid-template-columns:1fr 1fr}
.row{grid-template-columns:5.5rem 1fr}
.split{grid-template-columns:1fr 1fr}
}
@media (min-width:960px){
.hero{grid-template-columns:1.05fr .95fr;align-items:start}
.hero-copy{order:2}
.hero-photo{order:1}
}
`.trim();

const SLUGS: Record<string, PageDef> = {
  "": PAGES.home,
  "floor-plans": PAGES.floorPlans,
  pricing: PAGES.pricing,
  location: PAGES.location,
  gallery: PAGES.gallery,
  faq: PAGES.faq,
  register: PAGES.register,
  privacy: PAGES.privacy,
  terms: PAGES.terms,
  "blog/brampton-pre-construction-guide": PAGES.blog,
};

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

const ALLOWED_HOSTS = new Set([
  "digreenhomes.com",
  "www.digreenhomes.com",
  "www.peelschools.org",
  "www.dpcdsb.org",
  "www.brampton.ca",
]);

function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function allowedExternal(href: string) {
  try {
    const url = new URL(href);
    return url.protocol === "https:" && ALLOWED_HOSTS.has(url.hostname);
  } catch {
    return false;
  }
}

function rich(text: string) {
  let html = "";
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const index = match.index ?? 0;
    html += esc(text.slice(last, index));
    const label = esc(match[1]);
    const href = match[2];
    if (href.startsWith("/")) html += `<a href="${esc(ampPath(href))}">${label}</a>`;
    else if (allowedExternal(href)) {
      html += `<a href="${esc(href)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    } else html += label;
    last = index + match[0].length;
  }
  html += esc(text.slice(last));
  return html;
}

function paras(items: readonly string[]) {
  return items.map((item) => `<p class="measure">${rich(item)}</p>`).join("");
}

function list(items: readonly string[], ordered = false) {
  const tag = ordered ? "ol" : "ul";
  return `<${tag}>${items.map((item) => `<li>${esc(item)}</li>`).join("")}</${tag}>`;
}

function rows(pairs: readonly (readonly [string, string])[] | { label: string; value: string }[], caption: string) {
  const body = pairs
    .map((row) => {
      const label = "label" in row ? row.label : row[0];
      const value = "label" in row ? row.value : row[1];
      return `<tr><th scope="row">${esc(label)}</th><td>${esc(value)}</td></tr>`;
    })
    .join("");
  return `<table><caption>${esc(caption)}</caption><tbody>${body}</tbody></table>`;
}

function img(src: string, alt: string, width: number, height: number, layout: "responsive" | "fixed" = "responsive") {
  return `<amp-img src="${esc(src)}" alt="${esc(alt)}" width="${width}" height="${height}" layout="${layout}"></amp-img>`;
}

function photo(item: SitePhoto) {
  return `<figure>${img(item.src, item.alt, item.width, item.height)}<figcaption>${esc(item.caption)}</figcaption></figure>`;
}

function diagram(item: { path: string; name: string; caption: string }, width: number, height: number) {
  return `<figure>${img(item.path, item.name, width, height)}<figcaption>${esc(item.caption)}</figcaption></figure>`;
}

function blocks(items: readonly Block[], after: Record<string, string> = {}) {
  return items
    .map((block) => {
      if (block.t === "h2") {
        const id = block.id ? ` id="${esc(block.id)}"` : "";
        const extra = block.id ? (after[block.id] ?? "") : "";
        return `<h2${id}>${esc(block.text)}</h2>${extra}`;
      }
      if (block.t === "h3") return `<h3>${esc(block.text)}</h3>`;
      if (block.t === "ul") return list(block.items);
      if (block.t === "ol") return list(block.items, true);
      return `<p class="measure">${rich(block.text)}</p>`;
    })
    .join("");
}

function faqs(items: readonly Faq[], level: "h2" | "h3") {
  return items
    .map(
      (faq) =>
        `<details id="${esc(faq.id)}" open><summary><${level}>${esc(faq.q)}</${level}></summary><p class="measure">${esc(faq.a)}</p></details>`,
    )
    .join("");
}

function formHtml(id: string, consentPage: string, openedAt: string) {
  const field = (name: string, label: string, type: string, auto: string) =>
    `<div><label for="${id}-${name}">${label} <span>*</span></label><input id="${id}-${name}" name="${name}" type="${type}" autocomplete="${auto}" required maxlength="${type === "email" ? 200 : 80}"></div>`;
  return `<form id="${id}" method="post" action-xhr="https://naverahomes.ca/api/lead" target="_top" custom-validation-reporting="as-you-go">
    <div class="fields">
      ${field("first_name", "First name", "text", "given-name")}
      ${field("last_name", "Last name", "text", "family-name")}
      ${field("email", "Email", "email", "email")}
      <div><label for="${id}-phone">Phone <span>*</span></label><input id="${id}-phone" name="phone" type="tel" autocomplete="tel" required minlength="10" maxlength="20" pattern="[+()\\-.\\s\\d]{10,20}"></div>
    </div>
    <fieldset>
      <legend>Are you a licensed real estate agent?</legend>
      <div class="choices">
        <label for="${id}-yes"><input id="${id}-yes" type="radio" name="is_broker" value="yes" required> Yes</label>
        <label for="${id}-no"><input id="${id}-no" type="radio" name="is_broker" value="no" required> No</label>
      </div>
    </fieldset>
    <label class="check" for="${id}-consent"><input id="${id}-consent" type="checkbox" name="casl_consent" value="true" required><span>${esc(CASL_CONSENT)}</span></label>
    <input type="hidden" name="website" value="" autocomplete="off">
    <input type="hidden" name="opened_at" value="${esc(openedAt)}">
    <input type="hidden" name="consent_page" value="${esc(consentPage)}">
    <input type="hidden" name="utm_source" value="QUERY_PARAM(utm_source)" data-amp-replace="QUERY_PARAM">
    <input type="hidden" name="utm_medium" value="QUERY_PARAM(utm_medium)" data-amp-replace="QUERY_PARAM">
    <input type="hidden" name="utm_campaign" value="QUERY_PARAM(utm_campaign)" data-amp-replace="QUERY_PARAM">
    <input type="hidden" name="utm_term" value="QUERY_PARAM(utm_term)" data-amp-replace="QUERY_PARAM">
    <input type="hidden" name="utm_content" value="QUERY_PARAM(utm_content)" data-amp-replace="QUERY_PARAM">
    <button type="submit">Get Priority Access</button>
    <div submit-success><template type="amp-mustache"><p>Registration received. Priority Access does not reserve a home or a price.</p></template></div>
    <div submit-error><template type="amp-mustache"><p>Registration could not be saved. Please review the form and try again.</p></template></div>
  </form>`;
}

function disclaimer() {
  return `<p class="muted">${esc(PRICING_DISCLAIMER)}</p>`;
}

function crumb(current: string) {
  return `<nav class="crumbs" aria-label="Breadcrumb"><a href="/amp">Navera at Mayfield Village</a> / ${esc(current)}</nav>`;
}

function baseLd(page: PageDef) {
  return [
    websiteLd,
    orgLd,
    projectLd,
    developerLd,
    webPageLd({ name: page.h1, path: page.path, description: page.description }),
  ];
}

function interior(page: PageDef, crumbLabel: string, lede: string, body: string) {
  return `<main id="main"><div class="wrap section">${crumb(crumbLabel)}<h1>${esc(page.h1)}</h1>${lede ? `<p class="lede measure">${lede}</p>` : ""}${body}</div></main>`;
}

function home(openedAt: string) {
  const family = LIFESTYLE_PHOTOS[0];
  const homeFaqs = faqsById(HOME_FAQ_IDS);
  return {
    iframe: false,
    footerForm: true,
    jsonLd: [websiteLd, orgLd, projectLd, developerLd, offerLd, faqLd(homeFaqs)],
    main: `<main id="main">
      <div class="wrap hero">
        <div class="hero-copy">
          <h1>${esc(PAGES.home.h1)}</h1>
          <p class="lede">Coming this fall from Digreen Homes, at Countryside Drive and Torbram Road in northeast Brampton. Priority Access registration is free and does not reserve a home or a price.</p>
          <div class="panel">${formHtml("hero", "/amp", openedAt)}</div>
        </div>
        <figure class="hero-photo">${img(family.src, family.alt, family.width, family.height)}<figcaption>${esc(family.caption)}</figcaption></figure>
      </div>
      <section class="section"><div class="wrap split">
        <div>
          <p class="measure">${esc(FAQS[0].a)}</p>
          <p class="measure">Use the links below to go straight to <a href="${ampPath("/floor-plans")}">Navera floor plans</a>, <a href="${ampPath("/pricing")}">Navera Brampton prices</a>, the <a href="${ampPath("/location")}">Navera at Mayfield Village location</a>, the <a href="${ampPath("/faq")}">Navera Brampton FAQ</a>, or a longer look at <a href="${ampPath("/blog/brampton-pre-construction-guide")}">pre-construction homes in Brampton</a>.</p>
        </div>
        <div>
          <h2>What is confirmed vs. still to be announced</h2>
          <p class="muted">Confirmed rows come from Digreen Homes' Navera information. Open items stay labelled until the builder publishes them.</p>
          <h3>Confirmed</h3>${list(CONFIRMED)}
          <h3>To be announced</h3>${list(TO_BE_ANNOUNCED)}
          ${disclaimer()}
        </div>
      </div></section>
      <section class="band"><div class="wrap section">
        <h2>Quick facts</h2>
        ${rows(QUICK_FACTS, "Quick facts for Navera at Mayfield Village")}
        ${disclaimer()}
      </div></section>
      <section class="section"><div class="wrap">
        <h2>38-foot vs 41-foot lots: what the difference means</h2>
        <p class="measure">${esc(LOT_WIDTH_COPY)}</p>
        ${diagram(LOT_DIAGRAM, 640, 280)}
        ${disclaimer()}
      </div></section>
      <section class="band"><div class="wrap section">
        <h2>About Navera at Mayfield Village</h2>
        ${paras(HOME_ABOUT)}
      </div></section>
      <section class="section"><div class="wrap">
        <h2>Neighbourhood at a glance</h2>
        <p class="measure">Drive times, schools, and the Regal Crest distinction are on the <a href="${ampPath("/location")}">Navera at Mayfield Village location</a> page.</p>
        ${NEIGHBOURHOOD.map((item) => `<div class="row"><div class="icons">${item.icons.map((src) => `<div class="icon">${img(src, "", item.darkIcon ? 416 : 134, item.darkIcon ? 104 : 134)}</div>`).join("")}</div><div><h3>${esc(item.title)}</h3><p class="measure">${esc(item.text)}</p></div></div>`).join("")}
        <div class="icons">${AREA_ICON_LINKS.map((item) => `<a href="${esc(ampPath(item.href))}">${img(item.src, "", 416, 104)} ${esc(item.label)}</a>`).join("")}</div>
      </div></section>
      <section class="band"><div class="wrap section">
        <h2>About the builder</h2>
        <div class="marks">
          <div class="logo">${img(MEDIA.digreenColour, "Digreen Homes", 896, 331)}</div>
          ${img(MEDIA.digreenStacked, "", 58, 64, "fixed")}
          <div class="mark">${img(MEDIA.digreenMark, "", 48, 52, "fixed")}</div>
        </div>
        <p class="muted">Digreen Homes marks, shown to identify the builder.</p>
        <p class="measure">${rich(BUILDER_COPY)}</p>
      </div></section>
      <section class="section"><div class="wrap split">
        <div>
          <h2>Why people register early</h2>
          <p>Digreen Homes describes these Priority Access benefits for Navera at Mayfield Village. They are information benefits, not a discount and not a hold.</p>
          ${list(PRIORITY_BENEFITS, true)}
          <p><strong>${esc(WHY_REGISTER_NOTE)}</strong></p>
        </div>
        <div class="panel">${formHtml("mid", "/amp", openedAt)}</div>
      </div></section>
      <section class="band"><div class="wrap section">
        <h2>Frequently asked questions</h2>
        <p class="measure">The full set of 20 is on the <a href="${ampPath("/faq")}">Navera Brampton FAQ</a>.</p>
        ${faqs(homeFaqs, "h3")}
      </div></section>
    </main>`,
  };
}

function floorPlans() {
  return {
    iframe: false,
    footerForm: true,
    jsonLd: [
      ...baseLd(PAGES.floorPlans),
      breadcrumbLd([
        { name: "Navera at Mayfield Village", path: "/" },
        { name: "Floor plans", path: "/floor-plans" },
      ]),
    ],
    main: interior(
      PAGES.floorPlans,
      "Floor plans",
      esc(FLOOR_PLAN_LEDE),
      blocks(FLOOR_PLAN_BLOCKS, {
        series: diagram(LOT_DIAGRAM, 640, 280),
        collection: SERIES.map(
          (series) =>
            `<h3>${esc(series.name)}</h3>${rows(series.rows, `${series.name} at Navera at Mayfield Village`)}`,
        ).join(""),
        compare: list(COMPARE_WHEN_RELEASED),
      }),
    ),
  };
}

function pricing() {
  const priceRows: { label: string; value: string }[] = [
    { label: "Starting price", value: "From $999,999" },
    { label: "Source", value: "Builder's Navera information page" },
    { label: "As of", value: DISPLAY_DATE },
    { label: "Applies to", value: "To be announced (series and lot not specified)" },
  ];
  const depositRows: { label: string; value: string }[] = [
    { label: "Deposit schedule", value: "To be announced" },
    { label: "Amounts", value: "To be announced" },
    { label: "Timing", value: "To be announced" },
  ];
  return {
    iframe: false,
    footerForm: true,
    jsonLd: [
      ...baseLd(PAGES.pricing),
      offerLd,
      breadcrumbLd([
        { name: "Navera at Mayfield Village", path: "/" },
        { name: "Pricing", path: "/pricing" },
      ]),
    ],
    main: interior(
      PAGES.pricing,
      "Pricing",
      esc(FAQS[3].a),
      `${disclaimer()}${blocks(PRICING_BLOCKS, {
        "starting-price": `${rows(priceRows, "Confirmed starting price for Navera at Mayfield Village")}${disclaimer()}`,
        deposit: `<p class="measure">${esc(FAQS[6].a)}</p>${rows(depositRows, "Deposit structure status for Navera at Mayfield Village")}${disclaimer()}<p class="measure">The deposit questions are also answered in the <a href="${ampPath("/faq#deposit")}">Navera Brampton FAQ</a>.</p>`,
        incentives: disclaimer(),
        "other-costs": `${list(ONTARIO_COSTS)}${disclaimer()}`,
        investment: `<p class="measure">${esc(FAQS[11].a)}</p><h3>Factors buyers weigh</h3>${list(INVESTMENT_FACTORS)}<h3>Risks to weigh</h3>${list(INVESTMENT_RISKS)}${disclaimer()}`,
      })}`,
    ),
  };
}

function location() {
  const map = `<div class="split"><div class="pin">${img(MEDIA.mapPointer, "Navera at Mayfield Village map marker", 1110, 1110)}</div><div>
    <amp-iframe width="640" height="420" layout="responsive" sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox" title="Map of the general area around Countryside Drive and Torbram Road, Brampton, Ontario" src="https://maps.google.com/maps?q=Countryside+Drive+and+Torbram+Road,+Brampton,+Ontario&amp;hl=en&amp;z=14&amp;output=embed">
      <amp-img layout="fill" src="${MEDIA.mapPointer}" placeholder alt="Navera at Mayfield Village map marker"></amp-img>
    </amp-iframe>
  </div></div>${photo(AERIAL)}${diagram(LOCATION_DIAGRAM, 640, 360)}`;
  return {
    iframe: true,
    footerForm: true,
    jsonLd: [
      ...baseLd(PAGES.location),
      breadcrumbLd([
        { name: "Navera at Mayfield Village", path: "/" },
        { name: "Location", path: "/location" },
      ]),
    ],
    main: interior(
      PAGES.location,
      "Location",
      esc(FAQS[2].a),
      blocks(LOCATION_BLOCKS, {
        map,
        "drive-times": `<table><caption>Approximate, off-peak, based on third-party estimates; actual times vary.</caption><thead><tr><th scope="col">Destination</th><th scope="col">Approx. drive</th></tr></thead><tbody>${DRIVE_TIMES.map((row) => `<tr><th scope="row">${esc(row.place)}</th><td>${esc(row.time)}</td></tr>`).join("")}</tbody></table>`,
        transit: photo(AREA_PHOTOS[3]),
        parks: `${photo(AREA_PHOTOS[0])}${photo(AREA_PHOTOS[1])}`,
        schools: `<p class="measure">School questions are also in the <a href="${ampPath("/faq#schools")}">Navera Brampton FAQ</a>.</p>`,
        "same-name": `<div class="rule"><p class="measure">${esc(FAQS[12].a)}</p><p class="measure">The same answer is in the <a href="${ampPath("/faq#regal-crest")}">Navera Brampton FAQ</a>.</p></div>`,
      }),
    ),
  };
}

function gallery() {
  const photos = [AERIAL, ...AREA_PHOTOS, ...LIFESTYLE_PHOTOS];
  return {
    iframe: false,
    footerForm: true,
    jsonLd: [
      ...baseLd(PAGES.gallery),
      breadcrumbLd([
        { name: "Navera at Mayfield Village", path: "/" },
        { name: "Gallery", path: "/gallery" },
      ]),
      ...photos.map((item) => imageLd({ path: item.src, name: item.alt, caption: item.caption })),
      imageLd(LOT_DIAGRAM),
      imageLd(LOCATION_DIAGRAM),
    ],
    main: interior(
      PAGES.gallery,
      "Gallery",
      esc(GALLERY_COPY),
      `<h2>Area illustration and photographs</h2>${photos.map(photo).join("")}
      <h2>Diagrams drawn for this page</h2>
      <p class="measure">The two drawings below were made for this page. One compares the approximate 38-foot and 41-foot lot widths. The other is a location schematic for Countryside Drive and Torbram Road. Neither is a photograph and neither is a builder rendering.</p>
      ${diagram(LOT_DIAGRAM, 640, 280)}
      ${diagram(LOCATION_DIAGRAM, 640, 360)}
      <figure class="wordmark">${img(MEDIA.naveraTag, "Navera at Mayfield Village wordmark", 800, 400)}<figcaption>Builder wordmark for Navera at Mayfield Village. It is not a photograph of a home.</figcaption></figure>`,
    ),
  };
}

function faq() {
  const lede = `Last updated ${esc(DISPLAY_DATE)}. These answers cover builder, price, lot sizes, launch, deposit, schools, and VIP access for Navera at Mayfield Village. Each one states what is known and what is still to be announced. Deposit details link with the <a href="${ampPath("/pricing#deposit")}">Navera Brampton prices</a> page. School and Regal Crest questions link with the <a href="${ampPath("/location#schools")}">Navera at Mayfield Village location</a> page.`;
  return {
    iframe: false,
    footerForm: true,
    jsonLd: [
      ...baseLd(PAGES.faq),
      faqLd(FAQS),
      breadcrumbLd([
        { name: "Navera at Mayfield Village", path: "/" },
        { name: "FAQ", path: "/faq" },
      ]),
    ],
    main: interior(PAGES.faq, "FAQ", lede, faqs(FAQS, "h2")),
  };
}

function register(openedAt: string) {
  return {
    iframe: false,
    footerForm: false,
    jsonLd: [
      ...baseLd(PAGES.register),
      breadcrumbLd([
        { name: "Navera at Mayfield Village", path: "/" },
        { name: "Register", path: "/register" },
      ]),
    ],
    main: interior(
      PAGES.register,
      "Register",
      "",
      `<div class="split"><div><h2>What registration includes</h2>${list(PRIORITY_BENEFITS, true)}<p class="measure">${esc(FAQS[9].a)}</p><p class="measure">${esc(FAQS[10].a)}</p></div><div class="panel">${formHtml("register", "/amp/register", openedAt)}</div></div>`,
    ),
  };
}

function privacy() {
  return {
    iframe: false,
    footerForm: true,
    jsonLd: [
      ...baseLd(PAGES.privacy),
      breadcrumbLd([
        { name: "Navera at Mayfield Village", path: "/" },
        { name: "Privacy", path: "/privacy" },
      ]),
    ],
    main: interior(
      PAGES.privacy,
      "Privacy",
      "",
      `${blocks(PRIVACY_BLOCKS)}<p class="measure">This AMP page does not load analytics and does not show a cookie notice. On the full page, analytics stay off until you allow them.</p>`,
    ),
  };
}

function terms() {
  return {
    iframe: false,
    footerForm: true,
    jsonLd: [
      ...baseLd(PAGES.terms),
      breadcrumbLd([
        { name: "Navera at Mayfield Village", path: "/" },
        { name: "Terms", path: "/terms" },
      ]),
    ],
    main: interior(PAGES.terms, "Terms", "", blocks(TERMS_BLOCKS)),
  };
}

function blog() {
  return {
    iframe: false,
    footerForm: true,
    jsonLd: [
      ...baseLd(PAGES.blog),
      articleLd,
      breadcrumbLd([
        { name: "Navera at Mayfield Village", path: "/" },
        { name: "Pre-construction homes in Brampton", path: PAGES.blog.path },
      ]),
    ],
    main: interior(
      PAGES.blog,
      "Buyer's guide",
      esc(BLOG_LEDE),
      blocks(BLOG_BLOCKS, {
        "lot-widths": diagram(LOT_DIAGRAM, 640, 280),
        questions: list(SIGNING_QUESTIONS, true),
      }),
    ),
  };
}

function pageParts(page: PageDef, openedAt: string) {
  if (page === PAGES.home) return home(openedAt);
  if (page === PAGES.floorPlans) return floorPlans();
  if (page === PAGES.pricing) return pricing();
  if (page === PAGES.location) return location();
  if (page === PAGES.gallery) return gallery();
  if (page === PAGES.faq) return faq();
  if (page === PAGES.register) return register(openedAt);
  if (page === PAGES.privacy) return privacy();
  if (page === PAGES.terms) return terms();
  return blog();
}

function header() {
  const links = [
    ...NAV.map((item) => ({ href: ampPath(item.href), label: item.label })),
    { href: ampPath(PAGES.blog.path), label: "Guide" },
    { href: ampPath("/privacy"), label: "Privacy" },
    { href: ampPath("/terms"), label: "Terms" },
  ];
  return `<header class="header"><div class="wrap bar"><a href="/amp" aria-label="Navera at Mayfield Village, home"><div class="logo">${img(MEDIA.naveraBlk, "Navera at Mayfield Village", 649, 165)}</div></a><a href="#main">Skip to content</a></div><nav class="wrap nav" aria-label="Primary">${links.map((item) => `<a href="${esc(item.href)}">${esc(item.label)}</a>`).join("")}</nav></header>`;
}

function footer(page: PageDef, openedAt: string, showForm: boolean) {
  const links = [
    ...NAV.map((item) => ({ href: ampPath(item.href), label: item.href === "/" ? "Navera at Mayfield Village" : item.label })),
    { href: ampPath(PAGES.blog.path), label: "Pre-construction guide" },
    { href: ampPath("/privacy"), label: "Privacy" },
    { href: ampPath("/terms"), label: "Terms" },
  ];
  const form = showForm
    ? `<div class="split"><div><h2>Register for Priority Access</h2><p>Free registration for floor plans, pricing, and release updates. It does not reserve a home or a price.</p></div><div class="footer-form">${formHtml("footer", ampPath(page.path), openedAt)}</div></div>`
    : "";
  return `<footer class="footer"><div class="wrap">${form}<nav class="nav" aria-label="Footer">${links.map((item) => `<a href="${esc(item.href)}">${esc(item.label)}</a>`).join("")}</nav><p>Last updated: ${esc(DISPLAY_DATE)}</p><p>${esc(INDEPENDENCE_DISCLAIMER)}</p><p>${esc(PRICING_DISCLAIMER)}</p><p><a href="${esc(canonicalUrl(page.path))}">Full page</a></p></div></footer>`;
}

function jsonScript(data: unknown) {
  return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;
}

export function renderAmp(slug: string[] | undefined, openedAt: string) {
  const key = (slug ?? []).join("/");
  const page = SLUGS[key];
  if (!page) return null;
  const parts = pageParts(page, openedAt);
  const iframe = parts.iframe
    ? `<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>`
    : "";
  return `<!doctype html>
<html amp lang="en-CA">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${esc(canonicalUrl(page.path))}">
<link rel="icon" href="https://naverahomes.ca/icon.svg">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fraunces:500,600%7CInter:400,600">
<script async src="https://cdn.ampproject.org/v0.js"></script>
<script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
<script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"></script>
${iframe}
<style amp-boilerplate>${BOILERPLATE}</style>
<noscript><style amp-boilerplate>${NOSCRIPT_BOILERPLATE}</style></noscript>
<style amp-custom>${CSS}</style>
${parts.jsonLd.map(jsonScript).join("")}
</head>
<body>
${header()}
${parts.main}
${footer(page, openedAt, parts.footerForm)}
</body>
</html>`;
}
