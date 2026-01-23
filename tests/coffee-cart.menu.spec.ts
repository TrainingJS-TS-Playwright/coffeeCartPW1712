import { test, expect } from '@playwright/test';

const BASE_URL = 'https://coffee-cart.app/';


test.describe('Coffee Cart Menu Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('has title coffe cart', async ({ page }) => {


    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Coffee cart/);
    let espressoCup = page.locator('.cup').first(); 
    await expect(espressoCup).toHaveText(/espresso/); 
    await espressoCup.click();
    let totalElement = page.locator('[data-test=checkout]');
    await expect(totalElement).toContainText('Total: $10.00');
    await espressoCup.click();
    await expect(totalElement).toContainText('$20.00');
    await espressoCup.click();
    await expect(totalElement).toContainText('$30.00');

  });



  test('coffee carts', async ({ page }) => {

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Coffee cart/);
    let cups = await page.locator('.cup').all(); 
    let espressoCup = cups[0];
    let espressoMacchiato = cups[1];
    await expect(espressoCup).toHaveText(/espresso/); 
    await espressoCup.click();
    await expect(espressoMacchiato).toHaveText(/milk foam/); 
    await expect(espressoMacchiato).toHaveText(/espresso/); 
    await espressoMacchiato.click();

    let totalElement = page.locator('[data-test=checkout]');
    await expect(totalElement).toContainText('Total: $22.00');

  });
});
