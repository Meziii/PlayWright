# PlayWright
Ce projet contient des tests automatisés pour des scénarios web avec Playwright.

Prérequis

Node.js 18 ou plus

Git (optionnel pour versionner le projet)

Visual Studio Code ou autre éditeur

Installation

Cloner ou télécharger le projet

Ouvrir un terminal dans le dossier du projet

Installer les dépendances :

npm install

Lancer le serveur local

Certains tests nécessitent de servir les pages HTML localement :

npx http-server ./pages -p 8080


Le projet sera accessible à l’adresse http://localhost:8080.

Exécuter les tests

Pour lancer tous les tests :

npx playwright test


Pour exécuter un test spécifique :

npx playwright test tests/nom_du_test.spec.js


Pour ouvrir le rapport HTML des tests :

npx playwright show-report

Navigateurs

Playwright permet de tester sur plusieurs navigateurs :

npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

Notes

Les tests attendent automatiquement que les éléments soient prêts.

Les iframes et éléments dynamiques sont gérés avec des fonctions waitForSelector.
