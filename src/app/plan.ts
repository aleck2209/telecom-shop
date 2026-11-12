export interface Plan {
  id: number;
  name: string;
  description: string;
  /** Prix en francs CFA (XAF). */
  price: number;
  /** Volume de données en mégaoctets. */
  dataMb: number;
  /** Durée de validité en jours. */
  validityDays: number;
  promo: boolean;
}

export const PLANS: Plan[] = [
  {
    id: 1,
    name: 'Mini',
    description: 'Pour rester joignable et consulter ses messages.',
    price: 500,
    dataMb: 500,
    validityDays: 1,
    promo: false,
  },
  {
    id: 2,
    name: 'Hebdo',
    description: 'Une semaine de navigation et de réseaux sociaux.',
    price: 2000,
    dataMb: 2048,
    validityDays: 7,
    promo: true,
  },
  {
    id: 3,
    name: 'Confort',
    description: 'Le bon équilibre pour un usage quotidien.',
    price: 5000,
    dataMb: 6144,
    validityDays: 30,
    promo: false,
  },
  {
    id: 4,
    name: 'Max',
    description: 'Vidéo, partage de connexion et télétravail sans compter.',
    price: 10000,
    dataMb: 15360,
    validityDays: 30,
    promo: true,
  },
  {
    id: 5,
    name: 'Illimité Nuit',
    description: 'Données sans limite de minuit à six heures.',
    price: 3000,
    dataMb: 51200,
    validityDays: 30,
    promo: false,
  },
  {
    id: 6,
    name: 'Pro',
    description: 'Pour les équipes : gros volume et priorité réseau.',
    price: 25000,
    dataMb: 40960,
    validityDays: 30,
    promo: false,
  },
];
