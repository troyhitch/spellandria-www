export type GameKey = 'duelcasters' | 'realms' | 'spires';

export interface GameConfig {
  key: GameKey;
  subdomain: string;
  shortTitle: string;
  fullTitle: string;
  kicker: string;
  tagline: string;
  description: string;
  art: string;
  status: string;
  bullets: string[];
  overviewTitle: string;
  overviewBody: string;
  promiseTitle: string;
  promiseBody: string;
}

export const games: Record<GameKey, GameConfig> = {
  duelcasters: {
    key: 'duelcasters',
    subdomain: 'duelcasters.spellandria.com',
    shortTitle: 'DuelCasters',
    fullTitle: 'DuelCasters of Spellandria',
    kicker: 'The first game',
    tagline: 'Words become weapons in the dueling halls of Spellandria.',
    description: 'A one-on-one word battle game where every path you trace becomes a spell, every spell hits the board state, and every match is a test of nerve, vocabulary, and arcane timing.',
    art: '/assets/identity-thumbs/duelcasters.png',
    status: 'Coming soon',
    bullets: ['Single-player vs AI', 'Word battle combat', 'Arcane dueling fantasy', 'Mobile-first launch'],
    overviewTitle: 'A duel of language and intent',
    overviewBody: 'In DuelCasters, two rivals enter the circle and shape words into magical force. The board is your spellbook. The dictionary is your arsenal. The better caster is not just the one who knows more words, but the one who sees the right word first.',
    promiseTitle: 'Built for quick matches, deep mastery',
    promiseBody: 'The first chapter of Spellandria is designed to feel instantly readable and quietly ruthless: approachable on first touch, but rich with timing, denial, positioning, and high-stakes swings once you understand the rhythm of the board.',
  },
  realms: {
    key: 'realms',
    subdomain: 'realms.spellandria.com',
    shortTitle: 'Realms',
    fullTitle: 'Realms of Spellandria',
    kicker: 'Coming next',
    tagline: 'Journey beyond the towers into the fractured lands shaped by living language.',
    description: 'A broader adventure through the outer territories of Spellandria, where ancient orders, ruined civilizations, and unstable magic systems collide across a world far larger than the dueling halls.',
    art: '/assets/identity-thumbs/realms.png',
    status: 'In development',
    bullets: ['Expanding fantasy world', 'Lore-driven exploration', 'New regions and factions', 'Future chapter of the franchise'],
    overviewTitle: 'The world outside the spires',
    overviewBody: 'Realms opens the map. Beyond the academies and ritual chambers lies a continent of broken covenants, vanished languages, and territories that remember old wars better than the people living in them.',
    promiseTitle: 'A larger stage for Spellandria',
    promiseBody: 'Where DuelCasters introduces the logic of the world, Realms is where that world starts breathing. Expect bigger places, stranger magic, and a more expansive view of what the arcane can do when it escapes controlled spaces.',
  },
  spires: {
    key: 'spires',
    subdomain: 'spires.spellandria.com',
    shortTitle: 'Spires',
    fullTitle: 'Spires of Spellandria',
    kicker: 'On the horizon',
    tagline: 'Climb the great towers where magical knowledge, ambition, and power all converge.',
    description: 'A high-arcana ascent through the most coveted structures in the realm: living spires that function as libraries, engines, fortresses, and symbols of rule for the orders that claim them.',
    art: '/assets/identity-thumbs/spires.png',
    status: 'In concept',
    bullets: ['Vertical world design', 'Ancient arcane architecture', 'Factional power struggle', 'Future flagship chapter'],
    overviewTitle: 'The towers at the center of everything',
    overviewBody: 'The great spires are more than monuments. They are vaults of language, engines of control, and repositories of magical memory. Whoever understands a spire does not merely occupy it — they inherit a living system of power.',
    promiseTitle: 'The mythic heart of the franchise',
    promiseBody: 'Spires is the purest expression of Spellandria\'s central fantasy: that language can build civilizations, divide them, and elevate the few who dare to master it. Every ascent should feel dangerous, sacred, and transformative.',
  },
};

export function getGameByHostOrPath(hostname: string, pathname: string) {
  const host = hostname.toLowerCase();
  const path = pathname.toLowerCase().replace(/^\/+|\/+$/g, '');

  if (host.startsWith('duelcasters.')) return games.duelcasters;
  if (host.startsWith('realms.')) return games.realms;
  if (host.startsWith('spires.')) return games.spires;

  if (path === 'duelcasters') return games.duelcasters;
  if (path === 'realms') return games.realms;
  if (path === 'spires') return games.spires;

  return null;
}
