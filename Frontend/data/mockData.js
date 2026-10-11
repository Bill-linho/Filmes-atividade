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
  { id: "live action short film", name: "Best Live Action Short Film", group: "other" },
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

export const years = [];

for (let year = 1970; year <= 2026; year++) {
  years.push({
    id: String(year),
    year,
  });
}

export const oscars = [
  // 1. Formato Antigo (Plano com array 'nominees') - Para testar compatibilidade
  {
    year: {
      id: "1975",
      year: 1975,
      ceremony: 48,
    },
    category: {
      id: "best actor",
      name: "Best Actor",
      group: "main",
    },
    winner: {
      nominee_id: "nm0000199",
      name: "Jack Nicholson",
      film: "One Flew Over the Cuckoo's Nest",
      film_id: "tt0073486",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
      winner: true,
    },
    nominees: [
      {
        nominee_id: "nm0000199",
        name: "Jack Nicholson",
        film: "One Flew Over the Cuckoo's Nest",
        film_id: "tt0073486",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
        winner: true,
      },
      {
        nominee_id: "nm0000194",
        name: "Al Pacino",
        film: "Dog Day Afternoon",
        film_id: "tt0072890",
        photo: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500",
        winner: false,
      },
      {
        nominee_id: "nm0001570",
        name: "Walter Matthau",
        film: "The Sunshine Boys",
        film_id: "tt0073705",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500",
        winner: false,
      },
    ],
  },
  // 2. Novo Formato Agrupado (com 'results') - Ajustado para o ano 2020
  {
    year: {
      id: "2020",
      year: 2020,
      ceremony: 93,
    },
    category: {
      id: "best actor",
      name: "Best Actor",
      group: "main",
    },
    results: [
      {
        film_id: "tt10272386",
        film: "The Father",
        winner: true,
        nominees: [
          {
            nominee_id: "nm0000164",
            name: "Anthony Hopkins",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
            winner: true,
          },
        ],
      },
      {
        film_id: "tt7131622",
        film: "Ma Rainey's Black Bottom",
        winner: false,
        nominees: [
          {
            nominee_id: "nm1569276",
            name: "Chadwick Boseman",
            photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
            winner: false,
          },
        ],
      },
      {
        film_id: "tt1234567",
        film: "Mank",
        winner: false,
        nominees: [
          {
            nominee_id: "nm0000198",
            name: "Gary Oldman",
            photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500",
            winner: false,
          },
        ],
      },
    ],
  },
];