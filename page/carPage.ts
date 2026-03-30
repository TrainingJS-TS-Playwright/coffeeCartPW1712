import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';
import { expect } from "../fixtures/fixturePage";

export class CarPage extends BasePage {
    private cartList: Locator;
    private totalSum: Locator;

    constructor(page: Page) {
        super(page);
        this.cartList = page.locator('.list ul').nth(1);
        this.totalSum = page.locator('[data-test=checkout]');
    }

    async navigate(): Promise<void> {
        await this.page.goto('/cart');
    }

    private getCartItemRow(coffeeName: string): Locator {
        return this.cartList.locator('li.list-item').filter({ hasText: coffeeName });
  }

    async addOneCoffee(coffeeName: string): Promise<void> {
        const row = this.getCartItemRow(coffeeName);
        await row.locator(`button[aria-label="Add one ${coffeeName}"]`).click();
  }

    async removeOneCoffee(coffeeName: string): Promise<void> {
        const row = this.getCartItemRow(coffeeName);
        await row.locator(`button[aria-label="Remove one ${coffeeName}"]`).click();
  }


    async getPriceOfItem(coffeeName: string): Promise<{ price: number; amount: number }> {
        const row = this.getCartItemRow(coffeeName);

        const priceAndAmount = await row.locator('.unit-desc').innerText();
        const [priceText, amountText] = priceAndAmount.split(" x ");

        const price = parseFloat(priceText.replace("$", "").trim());
        const amount = parseInt(amountText.trim());

        return { price, amount };
    }



    async totalSumOfItemRowEqualsPriceAndQuantity (coffeeName: string): Promise<void> {
        const row = this.getCartItemRow(coffeeName);

        const totalSumText = await row.locator(':scope>div').nth(2).innerText();
        const totalSum = parseFloat(totalSumText.replace("$", "").trim());

        const {price, amount} = await this.getPriceOfItem(coffeeName);

        expect(totalSum).toBe(price * amount);

    }
    
    async totalSumOfCart (): Promise<number> {
        const allLists = await this.page.locator('ul').nth(2);
        const itemsList = await allLists.locator('li.list-item').all();
        let sum = 0;
        debugger;
        for (const item of itemsList){
            const totalSumText = await item.locator(':scope>div').nth(2).innerText();
            const totalSum = parseFloat(totalSumText.replace("$", "").trim());
            sum += totalSum;
        }
        return sum;
    }

    async totalSumCheckout ():Promise<number> {
        const totalSumCheckoutText = await this.totalSum.innerText();
        return parseFloat(totalSumCheckoutText.replace("Total: $", "").trim());

    }

}