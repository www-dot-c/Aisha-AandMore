export const author = {
  name: "Aisha",
  penName: "Aisha",
  tagline: "I write the darkness you crave.",
  bio: `I've always been drawn to the stories that live in the shadows — where love is fierce, complicated, and a little dangerous. I started writing dark romance because I wanted to read books that didn't flinch, that trusted the reader to hold the tension without letting go.

I write full-time from a small apartment that smells perpetually of coffee and old paperbacks. My characters tend to be flawed, morally grey, and completely obsessed with each other. I wouldn't have it any other way.

When I'm not writing, I'm reading, watching too many crime documentaries, and talking to my cat about plot holes.`,
  location: "Chicago, IL",
  memberSince: "2019",
  profileImg: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
  coverImg: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=1400&q=70",
  stats: [
    { label: "Books Published", value: "14" },
    { label: "Total Readers", value: "2.4M" },
    { label: "Avg. Rating", value: "4.8★" },
    { label: "Years Writing", value: "6" },
  ],
  social: {
    youtube:  "https://youtube.com",
    instagram: "https://instagram.com",
    tiktok:   "https://tiktok.com",
    reddit:   "https://reddit.com",
  },
  genres: ["Dark Romance", "Mafia Romance", "Enemies to Lovers", "Forbidden Love", "Billionaire"],
};

export const books = [
  {
    id: 1, title: "Ruined", subtitle: "BY HIM",
    cover: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400&q=80",
    rating: 4.8, reads: "120K", year: 2024,
    description: "When their worlds collide in a ballroom of secrets, neither can escape what ignites between them.",
    badge: "Bestseller",
  },
  {
    id: 2, title: "Bound", subtitle: "TO HIM",
    cover: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=400&q=80",
    rating: 4.7, reads: "98K", year: 2023,
    description: "A contract of convenience becomes a chain of desire neither bargained for.",
    badge: "Fan Favourite",
  },
  {
    id: 3, title: "The Voss Heir", subtitle: "",
    cover: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80",
    rating: 4.6, reads: "86K", year: 2023,
    description: "She was hired to protect him. She was never supposed to fall.",
    badge: null,
  },
  {
    id: 4, title: "Broken", subtitle: "CROWNS",
    cover: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
    rating: 4.5, reads: "74K", year: 2022,
    description: "Two heirs. One throne. And a hatred that burns too hot to be anything but love.",
    badge: null,
  },
  {
    id: 5, title: "After", subtitle: "MIDNIGHT",
    cover: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
    rating: 4.6, reads: "91K", year: 2022,
    description: "He only came out at night. She only felt alive in the dark.",
    badge: "Series Starter",
  },
  {
    id: 6, title: "Chasing", subtitle: "SHADOWS",
    cover: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80",
    rating: 4.4, reads: "60K", year: 2021,
    description: "Running from her past, she crashed into the one man who lives in the dark.",
    badge: null,
  },
];

export const testimonials = [
  {
    id: 1,
    quote: "J. L. Black writes the kind of love stories that leave bruises. I couldn't put Ruined down — I didn't want to.",
    reader: "darkromance_addict",
    platform: "Reddit",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    id: 2,
    quote: "Every book hits differently. The tension, the slow burn, the payoff — nobody does it quite like her.",
    reader: "booksandchaos",
    platform: "Instagram",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    id: 3,
    quote: "I've read Bound to Him four times. Four. Times. I have a problem and her name is J. L. Black.",
    reader: "reading_in_ruins",
    platform: "TikTok",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
  },
];

export const timelineItems = [
  { year: "2019", title: "First Story Published", desc: "Uploaded 'Chasing Shadows' on LoveReads as a hobby. 500 readers in the first week." },
  { year: "2020", title: "Broke 100K Reads", desc: "After Midnight went viral in the dark romance community. Quit my day job." },
  { year: "2021", title: "First Series Launch", desc: "The Voss Chronicles trilogy became the most-saved series on LoveReads." },
  { year: "2022", title: "2 Million Readers", desc: "Crossed 2M total readers across all titles. Signed with a literary agent." },
  { year: "2023", title: "Fan Award Winner", desc: "Voted Best Dark Romance Author by the LoveReads community for the second year." },
  { year: "2024", title: "Ruined Drops", desc: "Latest release hits #1 trending on day one. Currently working on the sequel." },
];
