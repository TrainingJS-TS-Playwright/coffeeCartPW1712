import { test, expect } from '../fixtures/fixturePage';


test.describe('Coffee Cart Menu Tests use Page Object Model', () => {
  // let menuPage: MenuPage;

  // test.beforeEach(async ({ page }) => {
  //   await page.goto(BASE_URL);
  //   menuPage = new MenuPage(page);
  // });

  test('has title coffe cart', async ({ menuPage }) => {
    // const menuPage = new MenuPage(page);

    // Expect a title "to contain" a substring.
    await menuPage.navigate();
    let title = await menuPage.getTitle();
    await expect(title).toEqual('Coffee cart');
    let espressoCup = (await menuPage.getCupsLocator())[0];
    await expect(await espressoCup.getName()).toEqual('Espresso'); 
    await espressoCup.click();

    let total = await menuPage.getTotal();
    await expect(total).toEqual('Total: $10.00');
    await espressoCup.click();
    await expect(await menuPage.getTotal()).toEqual('Total: $20.00');
    await espressoCup.click();
    await expect(await menuPage.getTotal()).toEqual('Total: $30.00');

  });



  test('coffee carts', async ({ menuPage }) => {

    // const menuPage = new MenuPage(page);
    await menuPage.navigate();
    let title = await menuPage.getTitle();
    await expect(title).toEqual('Coffee cart');
    let cups = await menuPage.getCupsLocator(); 
    let espressoCup = cups[0];
    await expect(await espressoCup.getName()).toEqual('Espresso');
    await expect(await espressoCup.getCost()).toEqual('$10.00');  
    await espressoCup.click();

    let espressoMacchiato = cups[1];
    await expect(await espressoMacchiato.getName()).toEqual('Espresso Macchiato');
    await expect(await espressoMacchiato.getCost()).toEqual('$12.00'); 
    await espressoMacchiato.click();


    let total = await menuPage.getTotal();
    await expect(total).toEqual('Total: $10.00');
    await espressoCup.click();
    await expect(await menuPage.getTotal()).toEqual('Total: $20.00');
    await espressoCup.click();
    await expect(await menuPage.getTotal()).toEqual('Total: $30.00');

  });
});
