/* Portfolio content. Lifestyle projects are stock placeholders (Unsplash photos, Pexels video); everything else is Oceans88 Labs' own work. */
var IMG = function (id, w) {
  /* 'work/…' ids are the studio's own photos in media/work, the rest are stock in media/img */
  if (id.indexOf('work/') === 0) return 'media/' + id + (/\.\w+$/.test(id) ? '' : '.jpg');
  return 'media/img/' + id + '.jpg';
};
var VID = function (path) { return 'media/vid/' + path.split('/').pop(); };

var CATEGORIES = [
  { id: 'lifestyle', name: 'Lifestyle', line: 'People, places and the in-between moments brands are built on.', cover: 'photo-1529156069898-49953e39b3ac' },
  { id: 'events', name: 'Events', line: 'Tastings, launches and catered evenings, covered from first guest to last pour.', cover: 'work/events-ndu-teapots-redespresso' },
  { id: 'food', name: 'Food', line: 'Plates shot to be tasted, for menus, delivery apps and campaigns.', cover: 'work/food-glazed-wings' },
  { id: 'beverages', name: 'Beverages', line: 'Coffee, cocktails, juices and wine, from bean and bottle to the first sip.', cover: 'work/beverages-espresso-martini-bar-table' }
];

var PROJECTS = [
  /* Oceans88 Labs' own work (Lifestyle projects are stock placeholders). Order sets the All work grid:
     rows go large + small, three, then two halves, so tropical-grazing-table and coffee-tasting-with-ndu share a row. */
  { id: 'the-pairing-table', title: 'The Pairing Table', client: 'Sensorial Vine and Art', cat: 'food', medium: 'photo', year: 2026, place: 'Durban', layout: 'pairs',
    blurb: 'Small plates paired with drinks: bruschetta with salmon roe, rare beef and devilled eggs on walnut boards with sparkling wine and iced coffee, then espresso martinis lined up on the bar and served with chocolate and cinnamon desserts, all against the venue’s teal wall.',
    cover: 'work/food-tasting-boards',
    images: ['work/food-canapes-table', 'work/beverages-espresso-martinis-bar', 'work/food-sparkling-canape', 'work/beverages-espresso-martini-desserts', 'work/beverages-espresso-martini-bar-table'], featured: true },
  { id: 'affogato', title: 'Affogato', client: 'Sensorial Vine and Art', cat: 'beverages', medium: 'photo', year: 2026, place: 'Durban',
    blurb: 'Vanilla ice cream drowned in a shot of hot espresso, served in the house’s pink and gold cup. Shot close and low on the marble so the crema, the melting cream and the gold rim carry the frame.',
    cover: 'work/beverages-pink-cup-latte',
    images: [], featured: true },
  { id: 'avocado-iced-coffee', title: 'Italian Iced Coffee, Avocado Blend', client: 'Sensorial Vine and Art', cat: 'beverages', medium: 'photo', year: 2026, place: 'Durban',
    blurb: 'An Italian-style iced coffee built on blended avocado and cream, with espresso poured over the top at the bar. Shot low and close so the green, white and coffee layers read through the ribbed glass.',
    cover: 'work/beverages-bar-pour',
    images: ['work/beverages-iced-coffee-pour', 'work/beverages-bar-pour'], featured: true },
  { id: 'tasting-drinks-with-ndu', title: 'Tasting Drinks with Ndu', client: 'KwaMkhize Coffee and Print', cat: 'beverages', medium: 'photo', year: 2026, place: 'KwaMkhize Coffee and Print', layout: 'pairs',
    blurb: 'The drinks from the September coffee tasting with Ndu at KwaMkhize Coffee and Print: a foamy iced coffee raised against the café’s latte-art mural, an espresso tonic with lemon over ice, and flat whites poured with leaf and tulip latte art.',
    cover: 'work/beverages-ndu-iced-coffee-mural',
    images: ['work/beverages-ndu-espresso-tonic', 'work/events-ndu-two-lattes.webp'], featured: true },
  { id: 'golden-hour', title: 'Golden Hour Crew', client: 'Saltwater Apparel', cat: 'lifestyle', medium: 'both', year: 2026, place: 'Ballito',
    blurb: 'A summer lookbook shot on the beach in the last hour of light. Friends, not models, and a short film set to the sound of the shore.',
    cover: 'photo-1529156069898-49953e39b3ac',
    images: ['photo-1582298538104-fe2e74c27f59', 'photo-1511988617509-a57c8a288659', 'photo-1625283518288-00362afc8663', 'photo-1536010305525-f7aa0834e2c7'],
    video: '5935470/5935470-sd_960_540_25fps.mp4', dur: '0:58', featured: true },
  { id: 'tropical-grazing-table', title: 'Tropical Grazing Table', client: 'Sensorial Vine and Art', cat: 'food', medium: 'photo', year: 2026, place: 'Durban',
    blurb: 'A catering spread built around fresh citrus and pineapple: glazed wings, a prawn and rice-paper roll platter, wraps topped with strawberries, a macaron-crowned chocolate cake and blue lagoon cocktails, shot along the bar against the teal wall.',
    cover: 'work/food-grazing-table',
    images: ['work/food-glazed-wings', 'work/food-prawn-platter'], featured: true },
  { id: 'coffee-tasting-with-ndu', title: 'Coffee Tasting with Ndu', client: 'KwaMkhize Coffee and Print', cat: 'events', medium: 'both', vertical: 'ndu/coffee-tasting-ndu-reel.mp4', dur: '0:27', year: 2026, place: 'KwaMkhize Coffee and Print', layout: 'pairs',
    blurb: 'A September afternoon of coffee tasting with Ndu at KwaMkhize Coffee and Print: guests gathered on the patio, latte art on the sunlit couches, Coffee in a Bag beans and a Barista Pinotage on the shelf, Red Espresso rooibos poured from white teapots beside the coffee magazines, and Château Gâteaux cake samples at the door.',
    cover: 'work/events-ndu-teapots-redespresso',
    images: ['work/events-ndu-latte-sign', 'work/events-ndu-cake-table', 'work/events-ndu-shelf', 'work/events-ndu-two-lattes.webp', 'work/events-ndu-guests-patio'], featured: true },
  { id: 'portrait-series', title: 'Portrait Series', client: 'Ubuntu Collective', cat: 'lifestyle', medium: 'photo', year: 2025, place: 'Durban',
    blurb: 'Personal brand portraits for five founders, each shot in their own space.',
    cover: 'photo-1606416132922-22ab37c1231e',
    images: ['photo-1593351799227-75df2026356b', 'photo-1505421031134-e57263cae630', 'photo-1620424037570-15137a4a562d', 'photo-1523297736436-356615162cc8'] },
  { id: 'sunset-sessions', title: 'Sunset Sessions', client: 'Tidal Festival', cat: 'lifestyle', medium: 'video', year: 2026, place: 'Durban beachfront',
    blurb: 'An after-movie for a beachfront music evening, cut to the headline set.',
    cover: 'photo-1508904635850-d986b19765d0',
    images: [], video: '31948671/13612103_960_540_25fps.mp4', dur: '0:52' }
];

/* Vertical reels for the home page. The first is the studio's own; the other four are Pexels placeholders until more of their reels are added:
   drop the new .mp4 into media/vid and change path (and title, cat, dur) below. */
var REELS = [
  { title: 'Coffee tasting with Ndu', cat: 'Events', path: 'ndu/coffee-tasting-ndu-reel.mp4', dur: '0:27' }, /* the studio's own reel */
  { title: 'Latte art in one pour', cat: 'Beverages', path: '34601858/14664327_540_960_30fps.mp4', dur: '0:15' },
  { title: 'The morning cup', cat: 'Beverages', path: '27938665/12266525_540_960_60fps.mp4', dur: '0:12' },
  { title: 'Behind the bar', cat: 'Beverages', path: '30197464/12947942_540_960_30fps.mp4', dur: '0:20' },
  { title: 'The slow pour', cat: 'Beverages', path: '8676991/8676991-hd_720_1280_60fps.mp4', dur: '0:12' }
];

/* Price list 2026/27 (ZAR), from the studio's Photography & Videography Price List.
   One source for the package pages, the add-ons and terms pages, and the Packages menu.
   Each group is one card: rows are [package, what's included, price]. */
var PRICING = [
  { id: 'portraits', name: 'Portraits & lifestyle', page: 'packages-portraits.html', from: 'R350',
    em: 'You, your people, your moments.',
    intro: 'Sessions are on location in the Durban area. Edited means colour-corrected and lightly retouched.',
    groups: [
      { name: 'Individual portraits', rows: [['Mini', '30 min, 1 location, 8 edited photos', 'R650'], ['Standard', '1 hr, 2 outfits, 20 edited photos', 'R1,100'], ['Premium', '2 hrs, 3 outfits, 2 locations, 35 edited photos', 'R1,900']] },
      { name: 'Headshots (CV, LinkedIn)', rows: [['Single', '15 min, 3 edited photos', 'R350'], ['Professional', '30 min, 2 looks, 6 edited photos', 'R650']] },
      { name: 'Couples and engagement', rows: [['Mini', '45 min, 15 edited photos', 'R900'], ['Standard', '1.5 hrs, 30 edited photos', 'R1,500'], ['Engagement + save-the-date', '2 hrs, 2 locations, 40 edited photos', 'R2,200']] },
      { name: 'Family', rows: [['Mini', '45 min, up to 5 people, 15 edited photos', 'R1,000'], ['Standard', '1.5 hrs, up to 8 people, 30 edited photos', 'R1,700'], ['Extended family', '2 hrs, up to 15 people, 40 edited photos', 'R2,500']] },
      { name: 'Maternity', rows: [['Mini', '45 min, 12 edited photos', 'R1,000'], ['Standard', '1.5 hrs, 2 outfits, partner included, 25 edited photos', 'R1,800']] },
      { name: 'Newborn and baby', rows: [['Newborn lifestyle (in-home)', '1.5 hrs, 20 edited photos', 'R1,800'], ['Cake smash / first birthday', '1 hr, client supplies cake and props, 20 edited photos', 'R1,500'], ['Cake smash with styled backdrop', '1.5 hrs, backdrop set-up, 25 edited photos', 'R2,000']] },
      { name: 'Matric farewell', rows: [['Individual or couple', '1 hr, 15 edited photos', 'R900'], ['Group (up to 6)', '1.5 hrs, 25 edited photos', 'R1,500']] },
      { name: 'Graduation', rows: [['Solo', '45 min, 12 edited photos', 'R800'], ['With family', '1 hr, up to 8 people, 20 edited photos', 'R1,300']] },
      { name: 'Model and influencer portfolio', rows: [['Starter', '2 hrs, 2 looks, 25 edited photos', 'R1,600'], ['Premium', '3 hrs, 3 looks, 2 locations, 40 edited photos', 'R2,500']] },
      { name: 'Pets', rows: [['Pet portrait session', '45 min, 12 edited photos', 'R800']] }
    ] },
  { id: 'weddings', name: 'Weddings', page: 'packages-weddings.html', from: 'R1,800',
    em: 'The whole day, beautifully kept.',
    intro: 'Video is single-camera. Photo and video packages include a second person on the day.',
    groups: [
      { name: 'Photo only', rows: [['Essential', '4 hrs (ceremony + portraits), 150 edited photos, online gallery', 'R5,500'], ['Classic', '6 hrs, 250 edited photos, online gallery + USB', 'R8,000'], ['Full day', '8–10 hrs, 400 edited photos, online gallery + USB', 'R11,500']] },
      { name: 'Video only', rows: [['Highlights', '4 hrs coverage, 3–5 min highlight film', 'R6,000'], ['Classic', '6 hrs, 5–7 min highlight film + full ceremony edit', 'R9,000'], ['Full day', '8–10 hrs, 8–10 min film + full ceremony + speeches', 'R13,000']] },
      { name: 'Photo + video', rows: [['Silver', '4 hrs, 150 edited photos + 3–5 min highlight film', 'R9,500'], ['Gold', '6 hrs, 250 edited photos + 5–7 min film', 'R14,500'], ['Platinum', '8–10 hrs, 400 edited photos + 8–10 min film + speeches', 'R19,500']] },
      { name: 'Civil / courthouse', rows: [['Photo', '1 hr, 40 edited photos', 'R1,800'], ['Photo + video', '1 hr, 40 edited photos + 1–2 min film', 'R2,800']] },
      { name: 'Pre-wedding shoot', rows: [['Photo', '2 hrs, 2 locations, 40 edited photos', 'R2,200']] },
      { name: 'Traditional and cultural ceremonies', note: 'Lobola, umembeso, umabo, nikah, mehndi', rows: [['Photo', '4 hrs, 150 edited photos', 'R3,500'], ['Photo + video', '4 hrs, 150 edited photos + 3–4 min highlight film', 'R5,500']] }
    ] },
  { id: 'events', name: 'Events', page: 'packages-events.html', from: 'R1,800',
    em: 'Priced by the hours we cover.',
    intro: 'Most events are priced by coverage time. Video is a short highlight reel unless stated.',
    table: { cols: ['Coverage', 'Photo', 'Video', 'Photo + video'], rows: [
      ['Birthday / kids party', '2 hrs', 'R1,800', 'R2,200', 'R3,200'],
      ['Baby shower, bridal shower, gender reveal', '2 hrs', 'R1,800', 'R2,200', 'R3,200'],
      ['Corporate event, launch, awards', 'Half day (4 hrs)', 'R3,500', 'R4,500', 'R6,000'],
      ['Corporate event, conference, expo', 'Full day (8 hrs)', 'R5,500', 'R7,500', 'R9,500'],
      ['Church or community event', '3 hrs', 'R2,000', 'R2,500', 'R3,800'],
      ['Funeral or memorial (discreet coverage)', '3 hrs', 'R1,800', 'R2,200', 'R3,300'],
      ['School or sports day', 'Half day (4 hrs)', 'R2,500', 'R3,500', 'R5,000'],
      ['Party / club / DJ night (aftermovie)', '3 hrs', 'R1,800', 'R2,800', 'R3,800'],
      ['Fashion show or pop-up market', '3 hrs', 'R2,200', 'R3,000', 'R4,500']
    ] } },
  { id: 'commercial', name: 'Commercial', page: 'packages-commercial.html', from: 'R100',
    em: 'Products, places and brands.',
    intro: 'Product pricing is per product and drops with volume.',
    groups: [
      { name: 'Product (white background)', from: 'from R100 / product', rows: [['1–10 products', '1 hero angle each, edited', 'R200 / product'], ['11–25 products', '1 hero angle each, edited', 'R160 / product'], ['26–50 products', '1 hero angle each, edited', 'R130 / product'], ['51–100 products', '1 hero angle each, edited', 'R100 / product'], ['Extra angles', 'Per additional angle, per product', 'R60']] },
      { name: 'Styled / lifestyle product', rows: [['Half day', 'Up to 15 edited images, props sourced by client', 'R2,800']] },
      { name: 'Sneakers and streetwear', rows: [['Starter', 'Up to 5 pairs, 3 angles each, edited', 'R1,500']] },
      { name: 'Food and restaurant', rows: [['Menu shoot', '10 dishes, edited', 'R2,200'], ['Full menu', '20 dishes, edited', 'R3,800']] },
      { name: 'Real estate and Airbnb', rows: [['Apartment', 'Up to 15 edited photos', 'R900'], ['House', 'Up to 25 edited photos', 'R1,400'], ['Large home, lodge or commercial', 'Up to 40 edited photos', 'R2,200']] },
      { name: 'Automotive', rows: [['Single vehicle', '1 hr, 15 edited photos', 'R900'], ['Dealership or car-club batch', '5+ vehicles', 'R700 / vehicle']] },
      { name: 'Corporate and brand', rows: [['Team headshots', 'Minimum 5 people, 2 edited photos each', 'R250 / person'], ['Brand / website shoot', 'Half day, 30 edited photos', 'R3,000'], ['Brand / website shoot', 'Full day, 60 edited photos', 'R4,500']] }
    ] },
  { id: 'video', name: 'Videography', page: 'packages-video.html', from: 'R250',
    em: 'Stories that move.',
    intro: 'Every video includes editing, colour grading, licensed or client-supplied music, captions on request and 2 revision rounds. Wedding and event video is on those pages.',
    groups: [
      { name: 'Social media reels', rows: [['Single reel', '15–60 sec, up to 2 hrs shooting, 1 location', 'R450'], ['4-reel pack', '4 reels, 1 shoot session', 'R1,600']] },
      { name: 'Business promo / ad', rows: [['Short', '30–60 sec, half-day shoot', 'R3,500'], ['Standard', '1–2 min, full-day shoot', 'R6,000'], ['Brand story', '2–3 min, full-day shoot + interview', 'R9,500']] },
      { name: 'Testimonial / interview', rows: [['Single speaker', '1–2 min, 2 hrs, 1 location', 'R2,200']] },
      { name: 'Product video', rows: [['Single product', '15–30 sec ad', 'R1,200'], ['3 products', '15–30 sec ad each', 'R3,000']] },
      { name: 'Real estate and Airbnb', rows: [['Walkthrough', 'Up to 90 sec, up to 3 bedrooms', 'R1,800'], ['Walkthrough + drone', 'Up to 90 sec with aerial shots', 'R2,600']] },
      { name: 'Music video', rows: [['Performance clip', '1 min, 1 take, 1 location', 'R1,800'], ['Full video', '3 min, 1 location, 1 shoot day', 'R6,500'], ['Premium', '3–4 min, 2 locations, 2 shoot days', 'R11,000']] },
      { name: 'Podcast / interview recording', rows: [['Single episode', '1 hr, 2 cameras, 3 vertical clips', 'R2,200']] },
      { name: 'Editing only (your footage)', rows: [['Reel', 'Up to 60 sec', 'R250'], ['YouTube video', '3–5 min', 'R900'], ['Long-form', 'Up to 10 min', 'R1,500']] }
    ] },
  { id: 'social', name: 'Monthly social media', page: 'packages-social.html', from: 'R3,800 / month',
    em: 'Fresh content every month.',
    intro: 'Consistent photos and reels for your feed, planned around your specials and launches. Minimum term is 3 months, billed monthly in advance.',
    tiers: [
      { name: 'Starter', price: 'R3,800', inc: ['1 shoot (up to 3 hrs)', '4 reels', '8 edited photos'] },
      { name: 'Growth', price: 'R6,500', pop: true, inc: ['2 shoots (up to 3 hrs each)', '8 reels', '20 edited photos', 'Story templates'] },
      { name: 'Pro', price: 'R10,500', inc: ['4 shoots (weekly)', '12–16 reels', '30 edited photos', 'Content calendar'] }
    ],
    groups: [
      { name: 'Add-on: posting and scheduling', rows: [['Posting and scheduling', 'Captions, hashtags and scheduled posts on up to 2 platforms', 'R1,500 / month']] }
    ] }
];

var ADDONS = [
  { name: 'Extra time', rows: [['Extra hour of photography', '', 'R450'], ['Extra hour of videography', '', 'R600'], ['Custom work, photo', 'Shoot time only', 'R350 / hr'], ['Custom work, video', 'Shoot time only', 'R450 / hr'], ['Second shooter or assistant', '', 'R1,000 / event']] },
  { name: 'Photos and delivery', rows: [['10 extra edited photos', '', 'R250'], ['Heavy retouching', '', 'R100 / photo'], ['Full-resolution USB', '', 'R250'], ['Same-day sneak peek', '10 photos', 'R400'], ['Rush delivery', 'Within 48 hrs', '+30% of package']] },
  { name: 'Video extras', rows: [['Drone stills and video', 'Up to 30 min flight', 'R1,200'], ['Extra video revision round', 'After the 2 included', 'R300'], ['Vertical 9:16 re-cut', 'Of an existing video', 'R200'], ['Subtitles / captions', '', 'R150 / video']] },
  { name: 'Travel and extras', rows: [['Travel beyond 25 km of Durban CBD', 'Return trip', 'R6 / km'], ['Albums, prints, venue, stylist, hair and makeup', '', 'Quoted on request'], ['Commercial licence beyond social media', 'Billboards, TV, print ads', 'Quoted per project']] }
];

var TERMS = [
  { name: 'Booking', rows: [['Deposit', '50% deposit to book'], ['Your date', 'Held only once the deposit is paid']] },
  { name: 'Payment', rows: [['Weddings and events', '50% deposit, balance 7 days before the date'], ['Portraits, commercial and video', '50% deposit, balance on delivery'], ['Monthly social media', 'Billed monthly in advance, 3-month minimum']] },
  { name: 'Delivery times', rows: [['Portraits', '7 days'], ['Products and reels', '3–5 days'], ['Events', '7–10 days'], ['Wedding photos', '4 weeks'], ['Wedding films', '6–8 weeks']] },
  { name: 'Rescheduling', rows: [['Reschedule', 'One free reschedule with 7 days’ notice'], ['Weather', 'Outdoor sessions move free of charge for bad weather']] },
  { name: 'Usage and copyright', rows: [['Your use', 'Final images and videos for personal and social media use'], ['Copyright', 'Stays with Oceans88 Labs'], ['Portfolio', 'We may show the work unless you object in writing'], ['Commercial use', 'Billboards, TV and print ads quoted per project']] },
  { name: 'Editing and revisions', rows: [['Photos', 'Basic editing: colour correction and light retouching'], ['Videos', '2 revision rounds included'], ['Extra changes', 'See add-ons for extra rounds and heavy retouching']] },
  { name: 'Every price includes', rows: [['Shoot', 'Shooting on the day'], ['Edit', 'Basic editing or colour grading'], ['Delivery', 'Online delivery of your files'], ['Not included', 'Printing, albums and venue costs']] },
  { name: 'Prices and travel', rows: [['Currency', 'All prices in South African Rand (ZAR)'], ['Travel', 'Free within 25 km of Durban CBD, then R6 / km return']] }
];
