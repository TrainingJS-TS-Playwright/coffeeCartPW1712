import { test, expect } from '@playwright/test';

const BASE_URL = 'https://coffee-cart.app/';


test('has title coffe cart', async ({ page }) => {
  await page.goto(BASE_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Coffee cart/);
  let espressoCup = page.locator('.cup').first(); 
  await expect(espressoCup).toHaveText(/Espresso/); 
  await espressoCup.click();
  let totalElement = page.locator('[data-test=checkout]');
  await expect(totalElement).toContainText('Total: $10.00');
  await espressoCup.click();
  await expect(totalElement).toContainText('$20.00');
  await espressoCup.click();
  await expect(totalElement).toContainText('$30.00');

});
