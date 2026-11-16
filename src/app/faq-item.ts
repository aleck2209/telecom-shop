export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: 'Comment activer un forfait ?',
    answer:
      'Choisissez un forfait, validez le paiement, et il est actif en quelques minutes. Un SMS vous confirme l’activation.',
  },
  {
    id: 2,
    question: 'Quels moyens de paiement acceptez-vous ?',
    answer: 'Le paiement se fait par Mobile Money ou par carte bancaire.',
  },
  {
    id: 3,
    question: 'Y a-t-il un engagement ?',
    answer:
      'Non. Tous nos forfaits sont sans engagement et ne se renouvellent pas automatiquement.',
  },
  {
    id: 4,
    question: 'Que se passe-t-il quand mon volume de données est épuisé ?',
    answer:
      'La connexion est suspendue jusqu’à l’achat d’un nouveau forfait. Aucun frais hors forfait n’est facturé.',
  },
  {
    id: 5,
    question: 'Puis-je changer de forfait avant la fin de la validité ?',
    answer:
      'Oui. Le nouveau forfait démarre aussitôt ; les données restantes de l’ancien ne sont pas reportées.',
  },
];
