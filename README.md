# TelecomShop

Catalogue de forfaits mobiles en Angular 22. C'est un projet d'apprentissage, construit en parallèle du tutoriel officiel [Learn Angular](https://angular.dev/tutorials/learn-angular) : chaque leçon y est appliquée.

## Lancer le projet

```bash
npm install
ng serve
```

Puis ouvrir `http://localhost:4200/`.

## Pages

| Adresse | Contenu |
|---|---|
| `/` | Présentation, forfaits avec recherche et sélection, questions fréquentes |
| `/contact` | Formulaire de contact validé, rappel du forfait sélectionné |

## Structure

```
src/app/
├── header/, footer/       En-tête avec navigation, pied de page
├── home/                  Page d'accueil
├── hero/                  Bandeau de présentation
├── plan-list/             Liste des forfaits et recherche
├── plan-card/             Carte d'un forfait
├── faq/                   Questions fréquentes (chargement différé)
├── contact/               Page Contact
├── plan.ts, faq-item.ts   Données
├── plan-store.ts          Service : forfaits et forfait sélectionné
└── data-volume-pipe.ts    Pipe : Mo → Go
```

## Notions appliquées

| Notion | Où |
|---|---|
| Composants, interpolation, `@if`, `@for` | `hero`, `plan-list`, `faq` |
| Liaison de propriété, événements | `[href]` du `hero`, bouton « Choisir » |
| Entrées et sorties | `plan-card` (`input.required`, `output`) |
| Chargement différé | `@defer (on viewport)` dans `home` |
| Images optimisées | `NgOptimizedImage` dans `hero` |
| Routage | `app.routes.ts`, `RouterLink` dans `header` |
| Formulaires | recherche avec `ngModel`, contact avec un formulaire réactif et `Validators` |
| Services, injection | `PlanStore` injecté avec `inject()` |
| Pipes | `currency`, `date` (locale `fr`), pipe `dataVolume` |
| Signaux (hors tutoriel) | `signal` et `computed` dans `plan-store` et `plan-list` |
