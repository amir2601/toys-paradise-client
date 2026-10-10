/**
 * Central place for premium dummy data & externally hosted imagery.
 * Unsplash URLs are hot-linked with sizing params so they load fast
 * and stay crisp on retina displays.
 *
 * Every Unsplash image was verified against the official Unsplash
 * research dataset's AI descriptions (see "ai_description").
 */

const u = (id, w = 900) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const partnerBrands = [
    'Little Dreamers',
    'PlayHub',
    'Kiddie Kingdom',
    'Mini Motors',
    'JoyBox',
    'Tiny Treasures',
    'WonderToys',
    'FunLand',
];

/**
 * Verified subjects:
 * - photo-1596461404969-9ae70f2830c1 → vintage toy train & wooden blocks
 * - photo-1494952442863-4e31b3c1eb06 → colourfully mixed toy lot (fresh arrivals)
 */
export const heroFloats = [
    {
        src: u('photo-1596461404969-9ae70f2830c1', 500),
        caption: 'Vintage finds',
        className: 'w-36 sm:w-44',
        delay: 1.35,
    },
    {
        src: u('photo-1494952442863-4e31b3c1eb06', 500),
        caption: 'Fresh drops weekly',
        className: 'w-28 sm:w-32',
        delay: 1.6,
    },
];

export const showcase = {
    // "A miniature, vintage macintosh computer toy." — playful, retro, imaginative
    image: u('photo-1744939823677-eaafa17ed879', 1400),
    kicker: 'Made for big imaginations',
    title: 'Every toy tells a story',
    body: 'Hand-picked die-cast models, timeless classics and collector-grade rides — curated so every shelf, sandbox and storytime feels special.',
};

export const newsletterBadge = u('photo-1568647383898-a57edb0ac94a', 400);

export const values = [
    {
        value: 250,
        suffix: '+',
        label: 'Toy cars in stock',
        detail: 'New drops every week',
    },
    {
        value: 5,
        suffix: 'K+',
        label: 'Happy little drivers',
        detail: 'Families who trust us',
    },
    {
        value: 4.9,
        suffix: '/5',
        decimals: 1,
        label: 'Average rating',
        detail: 'From 1,200+ reviews',
    },
    {
        value: 48,
        suffix: 'h',
        label: 'Fast delivery',
        detail: 'Doorstep in 2 days',
    },
];

/* Verified lifestyle shots that could be reused elsewhere */
export const verifiedGallery = [
    u('photo-1591288060713-22b34ea0925f', 800), // girl blowing bubbles
    u('photo-1547834754-2c47b3537aa2', 800),    // lego minifig close-up
    u('photo-1567413697149-685997231da5', 800), // lego character
    u('photo-1579097273680-ea69a20aaccd', 800), // toys lined on a shelf
    u('photo-1567056697433-b6612476dab3', 800), // yellow duck toy
    u('photo-1568647383898-a57edb0ac94a', 800), // dinosaur toys
];