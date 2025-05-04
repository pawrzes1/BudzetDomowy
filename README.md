# Budżet Domowy

Aplikacja webowa do zarządzania domowym budżetem. Umożliwia dodawanie wydatków i przychodów z podziałem na kategorie, daty i kwoty.

## Technologie

- Angular
- TypeScript
- Reactive Forms
- Bootstrap
- LocalStorage (do zapisu danych)

## Uruchomienie projektu

"```bash"
npm install
ng serve


## Funkcjonalności

Dodawanie wydatków i przychodów

Kategoryzacja wpisów (np. Jedzenie, Transport, Mieszkanie)

Walidacja formularza (wymagane pola, minimalna kwota)

Przechowywanie danych w localStorage

Resetowanie formularza po dodaniu wpisu

##  Struktura
css
Kopiuj
Edytuj
src/
├── app/
│   ├── components/
│   │   └── budget-form/
│   ├── services/
│   │   └── budget.service.ts
│   ├── app.component.ts
│   └── app.routes.ts
├── assets/
├── index.html
└── styles.css