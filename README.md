Ce projet contient des tests automatisés pour différents scénarios web réalisés avec Playwright. Il permet de vérifier que les pages et les interactions utilisateur fonctionnent correctement.

Prérequis

Node.js 18 ou plus

Git (optionnel)

Un éditeur de code (Visual Studio Code recommandé)

Installation

Clonez ou téléchargez le projet

Ouvrez un terminal dans le dossier du projet

Installez les dépendances :

npm install

Lancer le serveur local

Certains tests utilisent des pages HTML locales. Pour les servir :

npx http-server ./pages -p 8080


Le projet sera accessible à : http://localhost:8080

Exécution des tests

Lancer tous les tests :

npx playwright test


Lancer un test spécifique :

npx playwright test tests/nom_du_test.spec.js


Voir le rapport HTML des tests :

npx playwright show-report

Tester sur plusieurs navigateurs
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

Notes

Les tests attendent automatiquement que les éléments soient visibles avant d’interagir

Les iframes et éléments dynamiques sont gérés via waitForSelector pour garantir la stabilité des tests
