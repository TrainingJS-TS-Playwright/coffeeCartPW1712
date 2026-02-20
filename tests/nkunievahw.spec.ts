import { test, expect } from '../fixtures/fixturePage';



const BASE_URL = 'https://coffee-cart.app/';

test.describe('Coffe Cart Tests NKunieva', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(BASE_URL);
    });

    test ( 'add and delete items', async ({page, menuPage, cartPage}) => {
    
    // Open menu and check that total count =0
        await menuPage.goToMenuPage();
        await menuPage.isMenuLinkSelected();
        expect(await menuPage.getCartCount()).toBe(0);

    // add 1 cappuccinos and check that total count = 1
        let cappuccino = page.locator('[data-test=Cappuccino]');
        await cappuccino.click();
        expect(await menuPage.getCartCount()).toBe(1);

    // add 1 falt whait  and check that total count = 2
        let flatWhite = page.locator('[data-test=Flat_White]');
        await flatWhite.click();
        expect(await menuPage.getCartCount()).toBe(2);

    // open cart
        await cartPage.goToCartPage();
        await cartPage.isCartLinkSelected();

        
    // check that cappuccino sum = price X amount
        await cartPage.totalSumOfItemRowEqualsPriceAndQuantity('Cappuccino');

    // add 1 cappucino, check that total count = 3, cappuccino sum = price X amount
        await cartPage.addOneCoffee('Cappuccino');
        expect(await menuPage.getCartCount()).toBe(3);
        await cartPage.totalSumOfItemRowEqualsPriceAndQuantity('Cappuccino');

     // check that total sum checkout = sum of all items
        expect(await cartPage.totalSumOfCart()).toBe(await cartPage.totalSumCheckout());

    // delete flat white and check that total count = 2
        await cartPage.removeOneCoffee('Flat White');
        expect(await menuPage.getCartCount()).toBe(2);


 
       


    
    });



});




/*

Open the Coffee Cart app.
Add a "Cappuccino" to the cart.
Add a "Flat White" to the cart.
Open the cart page.
Increase the quantity of the "Cappuccino" to 2.
Verify the total price updates correctly.
Remove the "Flat White" from the cart.
Click "Checkout."
Fill in the "Name" and "Email" fields in the modal.
Submit the form and verify the success message appears.
Close the success message and verify the cart is now empty.

*/