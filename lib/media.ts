export type SitePhoto = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const MEDIA = {
  food: "/images/media/food.png",
  health: "/images/media/health.png",
  parks: "/images/media/parks.png",
  recreation: "/images/media/recreation.png",
  school: "/images/media/school.png",
  service: "/images/media/service.png",
  shopping: "/images/media/shopping.png",
  transportation: "/images/media/transportation.png",
  worship: "/images/media/worship.png",
  pattern: "/images/media/bg-pattern.png",
  digreenColour: "/images/media/digreen-colour.png",
  connected: "/images/media/connected.png",
  digreenStacked: "/images/media/digreen-stacked.png",
  splashPad: "/images/media/photo-3782.jpg",
  indoorTurf: "/images/media/photo-3790.jpg",
  pavilion: "/images/media/photo-3835.jpg",
  goStation: "/images/media/photo-3921.jpg",
  everything: "/images/media/everything.png",
  schoolsMark: "/images/media/families.png",
  familyWalk: "/images/media/happy-family.png",
  healthy: "/images/media/healthy.png",
  nature: "/images/media/nature.png",
  aerial: "/images/media/aerial.png",
  naveraBlk: "/images/media/navera-blk.png",
  naveraTag: "/images/media/navera-tag.png",
  mapPointer: "/images/media/map-pointer.png",
  kitchen: "/images/media/shutterstock.jpg",
  digreenMark: "/images/media/digreen-favicon.svg",
} as const;

export const AERIAL: SitePhoto = {
  src: MEDIA.aerial,
  width: 1294,
  height: 715,
  alt: "Builder illustration of Navera at Mayfield Village at Countryside Drive and Torbram Road, with nearby roads and places labeled",
  caption:
    "Builder illustration of the Navera at Mayfield Village area at Countryside Drive and Torbram Road. Labels on the drawing are the builder's. It is not a surveyed site plan, and a sales-centre address is still to be announced.",
};

export const AREA_PHOTOS: SitePhoto[] = [
  {
    src: MEDIA.splashPad,
    width: 717,
    height: 713,
    alt: "Splash pad with water play structures and a playground slide",
    caption:
      "Splash pad photograph supplied with the builder's area artwork. It is not a facility inside a published Navera site plan.",
  },
  {
    src: MEDIA.indoorTurf,
    width: 717,
    height: 713,
    alt: "Indoor turf field with a sports mural",
    caption:
      "Indoor recreation photograph supplied with the builder's area artwork. It is not a facility inside a published Navera site plan.",
  },
  {
    src: MEDIA.pavilion,
    width: 719,
    height: 713,
    alt: "Flower garden in front of a pavilion whose tower sign reads Fallview",
    caption:
      "Photograph of a flower garden and pavilion. The tower sign in the photo reads Fallview. It is area artwork, not a Navera site plan.",
  },
  {
    src: MEDIA.goStation,
    width: 719,
    height: 713,
    alt: "Bramalea GO Station entrance",
    caption:
      "Bramalea GO Station, the rail station named in the location notes for Navera at Mayfield Village.",
  },
];

export const LIFESTYLE_PHOTOS: SitePhoto[] = [
  {
    src: MEDIA.familyWalk,
    width: 1499,
    height: 891,
    alt: "A family walking together on a tree-lined path",
    caption: "Lifestyle photograph of a family on a path. It is not a photograph of Navera at Mayfield Village.",
  },
  {
    src: MEDIA.kitchen,
    width: 1224,
    height: 888,
    alt: "A family baking together in a kitchen",
    caption: "Stock lifestyle photograph of a family in a kitchen. It is not a Navera interior.",
  },
];

export const AREA_ICON_LINKS = [
  { src: MEDIA.connected, label: "Transit", href: "/location#transit" },
  { src: MEDIA.everything, label: "Shopping", href: "/location#shopping" },
  { src: MEDIA.schoolsMark, label: "Schools", href: "/location#schools" },
  { src: MEDIA.healthy, label: "Health", href: "/location#health" },
  { src: MEDIA.nature, label: "Parks", href: "/location#parks" },
] as const;
