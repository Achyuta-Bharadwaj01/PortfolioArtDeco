import type { Core } from '@strapi/strapi';

type Paragraph = {
  text: string;
  emphasis?: boolean;
};

type EpisodeSeed = {
  slug: string;
  episode: number;
  title: string;
  excerpt: string;
  subtitle?: string;
  publishedOn: string;
  paragraphs: Paragraph[];
};

const SERIES = {
  slug: 'design-therapy',
  title: 'Design Therapy',
  tagline: 'The world around you is beautiful when the world within you is peaceful',
};

const EPISODES: EpisodeSeed[] = [
  {
    slug: 'stop-designing-rooms-start-designing-lifestyle',
    episode: 1,
    title: 'Stop Designing Rooms. Start Designing Lifestyle',
    excerpt:
      'A quiet revolution in interior design begins with a simple shift: designing for people, not just for how a space looks.',
    publishedOn: '2026-07-07',
    paragraphs: [
      {
        text: "There's a quiet revolution happening in how we think about interior design — and it begins with a simple but radical shift: designing for people, not just for how a space looks.",
      },
      {
        text: "A home isn't a photograph. It isn't a mood board or a Pinterest save. It's something you move through, experience, and rely on every single day. It shapes your morning routine, your evening energy, and the invisible feeling you carry from room to room. A space that looks stunning in images but exhausts you to live in isn't good design. It's decoration.",
      },
      {
        text: 'So we start somewhere different. We start with you.',
        emphasis: true,
      },
      {
        text: 'Before a single material is chosen or a layout is drawn, the most important questions are the ones most designers skip.',
      },
      {
        text: "How do you actually live? Not how you think you should live — how you do live. Where do you naturally gravitate? What does this space need to support — deep focus, genuine rest, effortless connection with the people you love?",
      },
      {
        text: "These aren't soft questions. They're the foundation everything else is built on.",
      },
      {
        text: 'From there, we map the invisible architecture of your day.',
      },
      {
        text: 'How you move through a space. Where things feel intuitive and where they quietly frustrate you. Where light falls in the morning and what you need it to do by evening. Where the energy pools and where it drains.',
      },
      {
        text: 'This is what leads to layouts that flow without you having to think about them. Lighting that responds to different moments rather than flattening them all into one. Spaces that feel effortless rather than something you have to manage.',
      },
      {
        text: "Human-centered design isn't a style. It's a practice.",
        emphasis: true,
      },
      {
        text: 'It means resisting the impulse to impose an aesthetic before understanding a life. It means asking more questions than you answer in the first meeting. It means the most beautiful outcome is one that also happens to work — deeply, daily, invisibly.',
      },
      {
        text: 'Because when a space truly fits the person living in it, something shifts. You stop noticing the design and start experiencing it. It becomes the quiet infrastructure of a life well-lived.',
      },
      {
        text: 'Good design looks good.',
        emphasis: true,
      },
      {
        text: 'Great design feels right — every morning, every evening, every ordinary moment in between.',
        emphasis: true,
      },
      {
        text: "That's what we build.",
        emphasis: true,
      },
    ],
  },
  {
    slug: 'emotions-matter-how-you-feel-in-a-space',
    episode: 2,
    title: 'Emotions Matter — How You Feel in a Space Affects How You Live, Sleep, Think, Work',
    excerpt:
      'Before you notice the furniture or finishes, your body already knows how it feels to be there — and that feeling shapes how you live.',
    publishedOn: '2026-07-07',
    paragraphs: [
      {
        text: 'Walk into a room, and before you notice the furniture or the finishes, your body already knows how it feels to be there. Shoulders drop or shoulders tense. Breath slows or breath quickens. This happens before a single conscious thought.',
      },
      {
        text: 'That\'s the part of design people forget to talk about. We obsess over the what — the sofa, the shade of green, the marble vein — and skip past the "how it makes you feel." But feeling is the whole point. A space is never just walls and objects. It\'s a mood you step into every single day.',
      },
      {
        text: "Sleep is the easiest place to see this. A bedroom that's visually loud, over-lit, or cluttered with unfinished tasks keeps the nervous system half-awake even after the lights go off. Soft textures, warm and dim light, and a sense of enclosure — these aren't just aesthetic choices. They're instructions to the body: you are safe here, you can rest.",
      },
      {
        text: "Thought works the same way. Ever notice how a cramped, harsh-lit room makes your thinking feel smaller too? Clutter isn't only visual noise — it's cognitive noise. Every object your eye lands on is a tiny decision your brain has already made without asking you. A room with breathing space gives your mind room to wander, connect, and actually think.",
      },
      {
        text: "And work — real, focused work — asks for its own emotional register. Not sterile, not stimulating for its own sake, but held. A desk by natural light. A material that feels good under the hand. Enough order that the eye isn't hunting for calm.",
      },
      {
        text: "This is why I never start a project with a mood board of pretty things. I start by asking: how do you want to feel when you walk in tired? When you're entertaining? When you're alone with your thoughts at midnight? The furniture comes later. The feeling comes first because the feeling was always the brief.",
        emphasis: true,
      },
      {
        text: "Spaces that understand you don't just look beautiful. They meet you exactly where you are, every day, without you having to ask.",
      },
      {
        text: 'Spaces should not simply look beautiful. They should influence how you feel, live, and experience your environment.',
        emphasis: true,
      },
    ],
  },
  {
    slug: 'our-senses-and-spaces',
    episode: 3,
    title: 'Our Senses and Spaces',
    subtitle: 'The quiet design decisions that make a home feel like home.',
    excerpt: 'The quiet design decisions that make a home feel like home.',
    publishedOn: '2026-07-07',
    paragraphs: [
      {
        text: "We talk a lot about how a room looks. Layout, color, furniture, finishes. But look around any space you actually love being in, and you'll notice a huge part of why it works has nothing to do with what you see.",
      },
      {
        text: "It's the things we design for almost by accident, or don't design for at all. Here's where to start paying attention.",
        emphasis: true,
      },
      {
        text: '1. Design for scent before you design for style.',
        emphasis: true,
      },
      {
        text: 'Smell reaches emotion and memory faster than any other sense — faster than sight, faster than sound. It skips straight past the analytical brain. That\'s why a hotel room can smell like "luxury" in three seconds, or why your grandmother\'s house still smells like itself years later.',
      },
      {
        text: 'Tip: Before you pick a paint color, decide what the space should smell like. A linen closet with a cedar block. Beeswax polish on wood instead of synthetic spray. Fresh cut flowers by the entry, so the first sensation on arrival is scent, not sight. Most people design a space to be photographed and forget it also needs to be smelled.',
      },
      {
        text: '2. Sound shapes a room as much as furniture does.',
        emphasis: true,
      },
      {
        text: 'An empty room with hard floors and bare walls sounds harsh — every footstep echoes, every conversation feels loud. Add a rug, drapery, upholstered furniture, even books on open shelves, and the same room suddenly sounds soft, calm, absorbed.',
      },
      {
        text: "Tip: Stand in a room with your eyes closed and clap. If it sounds sharp or hollow, you have a texture problem, not just a decor one. Soft materials aren't just cozy to look at — they're acoustically doing real work.",
      },
      {
        text: '3. Temperature and light change how "welcoming" a space feels.',
        emphasis: true,
      },
      {
        text: "Warm light (2700–3000K) reads as intimate and calming. Cool light (4000K+) reads as clinical, even in a beautifully designed room. Most people get this backwards in kitchens and bathrooms — the two rooms where warmth matters most, because they're where we're most undressed, tired, or vulnerable.",
      },
      {
        text: 'Tip: Layer three light sources in every room — ambient, task, and accent — instead of one overhead bulb. And check the Kelvin rating before you check the price.',
      },
      {
        text: '4. Texture is what makes a room feel touchable, not just viewable.',
        emphasis: true,
      },
      {
        text: 'A lot of "beautiful" spaces still feel cold, because everything in them is smooth, hard, and reflective — glass, polished stone, lacquer. The eye enjoys it, but the hand has nothing to do.',
      },
      {
        text: "Tip: In every room, include at least one surface your hand actually wants to rest on — a raw wood tabletop, a boucle chair, a linen throw. It's a small addition with a disproportionate emotional payoff.",
      },
      {
        text: '5. Give a space one "threshold moment."',
        emphasis: true,
      },
      {
        text: "The first few seconds of entering a room set the emotional tone for everything after — like the opening line of a book. Most homes spend all their design budget on the living room and completely ignore the entryway, which is actually doing the most psychological work.",
      },
      {
        text: "Tip: Even a narrow entry deserves one intentional sensory cue — a mirror to catch the light, a bowl for keys that makes a satisfying sound, a scent, a texture underfoot that's different from the rest of the house. It tells the body: you've arrived.",
      },
      {
        text: 'None of this requires a bigger budget. It requires paying attention to senses beyond sight — which is where most interiors, however well-designed, quietly fall short.',
        emphasis: true,
      },
    ],
  },
];

const PUBLIC_ACTIONS = [
  'api::blog-series.blog-series.find',
  'api::blog-series.blog-series.findOne',
  'api::blog-episode.blog-episode.find',
  'api::blog-episode.blog-episode.findOne',
  'api::portfolio-entry.portfolio-entry.find',
  'api::portfolio-entry.portfolio-entry.findOne',
];

export async function ensurePublicRead(strapi: Core.Strapi) {
  const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
    where: { type: 'public' },
  });

  if (!publicRole) {
    strapi.log.warn('Public role was not found, so blog read permissions were not set.');
    return;
  }

  for (const action of PUBLIC_ACTIONS) {
    const existing = await strapi.db.query('plugin::users-permissions.permission').findOne({
      where: { action, role: publicRole.id },
    });

    if (!existing) {
      await strapi.db.query('plugin::users-permissions.permission').create({
        data: { action, role: publicRole.id },
      });
    }
  }
}

export async function seedDesignTherapy(strapi: Core.Strapi) {
  const existing = await strapi.documents('api::blog-series.blog-series').findMany({
    filters: { slug: SERIES.slug },
    status: 'published',
  });

  if (existing.length > 0) {
    return;
  }

  const series = await strapi.documents('api::blog-series.blog-series').create({
    data: {
      title: SERIES.title,
      slug: SERIES.slug,
      tagline: SERIES.tagline,
    },
    status: 'published',
  });

  for (const episode of EPISODES) {
    await strapi.documents('api::blog-episode.blog-episode').create({
      data: {
        ...episode,
        series: series.documentId,
      },
      status: 'published',
    });
  }

  strapi.log.info('Seeded Design Therapy with the three existing essays.');
}
