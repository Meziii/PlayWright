# 📝 TP4 - Tests automatisés avec Playwright

Ce projet contient des tests automatisés pour différents scénarios web réalisés avec **Playwright**.  
Il permet de vérifier que les pages et les interactions utilisateur fonctionnent correctement.

---

## 🔹 Prérequis

- **Node.js 18** ou plus  
- **Git** (optionnel)  
- **Éditeur de code** (Visual Studio Code recommandé)  

---

## 🔹 Installation

1. Cloner ou télécharger le projet  
2. Ouvrir un terminal dans le dossier du projet  
3. Installer les dépendances :  
```bash
npm install
🔹 Lancer le serveur local
Certains tests utilisent des pages HTML locales. Pour les servir :

bash
Copier le code
npx http-server ./pages -p 8080
Le projet sera accessible à : http://localhost:8080

🔹 Exécution des tests
Lancer tous les tests :

bash
Copier le code
npx playwright test
Lancer un test spécifique :

bash
Copier le code
npx playwright test tests/nom_du_test.spec.js
Afficher le rapport HTML des tests :

bash
Copier le code
npx playwright show-report
🔹 Tester sur plusieurs navigateurs
bash
Copier le code
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
🔹 Notes importantes
Les tests attendent automatiquement que les éléments soient visibles avant d’interagir

Les iframes et éléments dynamiques sont gérés via waitForSelector pour garantir la stabilité des tests

Playwright facilite la gestion des interactions complexes et la vérification des comportements utilisateurs
