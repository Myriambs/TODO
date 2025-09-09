const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function exampleTest() {
  // 1. Lancer le navigateur Chrome
  let driver = await new Builder()
    .forBrowser('chrome')
    .build();

  try {
    // 2. Aller sur un site web (Google ici)
    await driver.get('https://www.google.com');

    // 3. Trouver la barre de recherche et taper une requête
    let searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('Selenium WebDriver');

    // 4. Soumettre la recherche
    await searchBox.submit();

    // 5. Attendre que les résultats s'affichent
    await driver.wait(until.elementLocated(By.id('search')), 5000);

    // 6. Prendre une capture d'écran (optionnel)
    await driver.takeScreenshot().then((image) => {
      require('fs').writeFileSync('google-search.png', image, 'base64');
    });

    console.log('✅ Test réussi ! Capture d\'écran sauvegardée.');

  } catch (error) {
    console.error('❌ Erreur pendant le test:', error);
  } finally {
    // 7. Fermer le navigateur
    await driver.quit();
  }
}

// Lancer le test
exampleTest();