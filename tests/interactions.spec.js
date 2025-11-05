const { test, expect } = require('@playwright/test');

test.describe('Interactions complexes et assertions', () => {

  // Test 1 : Formulaire multi-étapes
  test('Formulaire multi-étapes', async ({ page }) => {
    await page.goto('http://localhost:8080/form.html');

    await page.fill('#nom', 'Mehdi');
    await page.fill('#email', 'mehdi@example.com');
    await page.click('#submit');

    // Vérifie le message de confirmation
    await expect(page.locator('#confirmation')).toHaveText('Merci !');
  });

  // Test 2 : Alert JavaScript
  test('Popup JavaScript', async ({ page }) => {
    await page.goto('http://localhost:8080/alert.html');

    // Accepte automatiquement l'alerte
    page.on('dialog', dialog => dialog.accept());

    await page.click('#showAlert');
    await expect(page.locator('#message')).toHaveText('Alerte acceptée');
  });

  // Test 3 : Interaction avec iframe
  test('Interaction avec iframe', async ({ page }) => {
    await page.goto('http://localhost:8080/iframe.html');

    // Récupère l'iframe
    const frame = page.frame({ name: 'frame1' });
    await frame.waitForSelector('#inputFrame'); // attend que l'iframe soit prête

    // Remplit l'input de l'iframe pour déclencher l'événement
    await frame.fill('#inputFrame', 'Test');

    // Vérifie que le texte a changé
    await expect(frame.locator('#success')).toHaveText('Réussi');
  });

  // Test 4 : Assertions dynamiques
  test('Assertions dynamiques', async ({ page }) => {
    await page.goto('http://localhost:8080/dynamic.html');

    // Clique pour cacher l'élément
    await page.click('#toggleElement');

    // Vérifie que l'élément est caché (display none)
    const dynamicEl = page.locator('#dynamic');
    await expect(dynamicEl).toHaveCount(1); // L'élément existe toujours mais caché
    await expect(dynamicEl).toHaveCSS('display', 'none');

    // Clique pour réafficher
    await page.click('#toggleElement');
    await expect(dynamicEl).toHaveCSS('display', 'block');
  });

});
