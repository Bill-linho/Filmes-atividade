export const categories = [
  { id: "best picture", name: "Best Picture", group: "main" },
  { id: "best director", name: "Best Director", group: "main" },
  { id: "best actor", name: "Best Actor", group: "main" },
  { id: "best actress", name: "Best Actress", group: "main" },
  { id: "best supporting actor", name: "Best Supporting Actor", group: "main" },
  { id: "best supporting actress", name: "Best Supporting Actress", group: "main" },
  { id: "best original screenplay", name: "Best Original Screenplay", group: "main" },
  { id: "best adapted screenplay", name: "Best Adapted Screenplay", group: "main" },

  { id: "animated feature film", name: "Best Animated Feature Film", group: "other" },
  { id: "international feature film", name: "Best International Feature Film", group: "other" },
  { id: "documentary feature", name: "Best Documentary Feature", group: "other" },
  { id: "documentary short subject", name: "Best Documentary Short Subject", group: "other" },
  { id: "live-action short film", name: "Best Live Action Short Film", group: "other" },
  { id: "animated short film", name: "Best Animated Short Film", group: "other" },
  { id: "original score", name: "Best Original Score", group: "other" },
  { id: "original song", name: "Best Original Song", group: "other" },
  { id: "sound", name: "Best Sound", group: "other" },
  { id: "production design", name: "Best Production Design", group: "other" },
  { id: "cinematography", name: "Best Cinematography", group: "other" },
  { id: "makeup and hairstyling", name: "Best Makeup and Hairstyling", group: "other" },
  { id: "costume design", name: "Best Costume Design", group: "other" },
  { id: "film editing", name: "Best Film Editing", group: "other" },
  { id: "visual effects", name: "Best Visual Effects", group: "other" },
];

export const years = [
  {
    id: "1975",
    year: 1975,
    ceremony: 48,
  },

  {
    id: "2000",
    year: 2000,
    ceremony: 73,
  },

  {
    id: "2025",
    year: 2025,
    ceremony: 97,
  },
];

export const oscars = [
  {
    year: {
      id: "1975",
      year: 1975,
      ceremony: 48,
    },

    category: {
      id: "best-actor",
      name: "Best Actor",
      group: "main",
    },

    winner: {
      nominee_id: "nm0000199",
      name: "Jack Nicholson",
      film: "One Flew Over the Cuckoo's Nest",
      film_id: "tt0073486",
      photo: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500",
      winner: true,
    },

    nominees: [
      {
        nominee_id: "nm0000199",
        name: "Jack Nicholson",
        film: "One Flew Over the Cuckoo's Nest",
        film_id: "tt0073486",
        photo: "https://...",
        winner: true,
      },

      {
        nominee_id: "nm0000194",
        name: "Al Pacino",
        film: "Dog Day Afternoon",
        film_id: "tt0072890",
        photo: "https://...",
        winner: false,
      },

      {
        nominee_id: "nm0001570",
        name: "Walter Matthau",
        film: "The Sunshine Boys",
        film_id: "tt0073705",
        photo: "https://...",
        winner: false,
      },
    ],
  },

  {
    year: {
      id: "2000",
      year: 2000,
      ceremony: 73,
    },

    category: {
      id: "best-actor",
      name: "Best Actor",
      group: "main",
    },

    winner: {
      nominee_id: "nm0000158",
      name: "Russell Crowe",
      film: "Gladiator",
      film_id: "tt0172495",
      photo: "https://...", 
      winner: true,
    },

    nominees: [
      {
        nominee_id: "nm0000158",
        name: "Russell Crowe",
        film: "Gladiator",
        film_id: "tt0172495",
        photo: "https://...",
        winner: true,
      },

      {
        nominee_id: "nm0000129",
        name: "Tom Hanks",
        film: "Cast Away",
        film_id: "tt0162222",
        photo: "https://...", 
        winner: false,
      },

      {
        nominee_id: "nm0000197",
        name: "Geoffrey Rush",
        film: "Quills",
        film_id: "tt0180073",
        photo: "https://...",
        winner: false,
      },
    ],
  },
];