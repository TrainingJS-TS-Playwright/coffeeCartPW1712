import { Locator, Page } from '@playwright/test';
import { CoffeeCardComponent } from '../component/CoffeCardComponent';
import { BasePage } from './basePage';

export class MenuPage extends BasePage{

    private title: Locator;

    private totalElement: Locator;
    private cupsLocator: Array<CoffeeCardComponent>;

    constructor(page: Page) {
        super(page);
        this.title = page.locator('title');
        this.totalElement = page.locator('[data-test=checkout]');
        this.cupsLocator = [];
    }

    async navigate(): Promise<void> {
        await this.page.goto('/');
    }

    async getCupsLocator(): Promise<Array<CoffeeCardComponent>> {
        const locators = await this.page.locator("#app > div:nth-child(3) > ul > li").all();
        for (let locator of locators) {
            const cup = new CoffeeCardComponent(locator);
            this.cupsLocator.push(cup);
        }
        return this.cupsLocator;
    }
    async getTotal(): Promise<String> {
        return await this.totalElement.innerText();
    }
    async getTitle(): Promise<String> {
        return await this.title.innerText();
    }
}