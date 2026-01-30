import { test, expect } from '../fixtures/fixturePage';


test.describe('Coffee Cart header Tests use Page Object Model', () => {

  test('navigate all pages', async ({ menuPage , cartPage, gitHubPage }) => {

    await menuPage.navigate();
    await menuPage.isMenuLinkSelected();
    expect(await menuPage.getCartCount()).toBe(0);
    await menuPage.goToCartPage();

    await cartPage.isCartLinkSelected();
    expect(await cartPage.getCartCount()).toBe(0);
    await cartPage.goToGitHubPage();

    await gitHubPage.isGitHubLinkSelected();
    expect(await gitHubPage.getCartCount()).toBe(0);
    await gitHubPage.goToMenuPage();

    await menuPage.isMenuLinkSelected();
    expect(await menuPage.getCartCount()).toBe(0);
  });

  test('change cart count', async ({ menuPage  }) => {

    await menuPage.navigate();
    expect(await menuPage.getCartCount()).toBe(0);
    let cups = await menuPage.getCupsLocator(); 
    let espressoCup = cups[0];
    let espressoMacchiato = cups[1];

    await espressoCup.click();
    expect(await menuPage.getCartCount()).toBe(1);
    await espressoMacchiato.click();
    expect(await menuPage.getCartCount()).toBe(2);
    await espressoCup.click();
    expect(await menuPage.getCartCount()).toBe(3);
  });
});
