import { Locator, Page } from '@playwright/test';
import { CoffeeCardComponent } from '../component/CoffeCardComponent';

export class MenuPage {

    private page: Page;
    private title: Locator;
    private menuLink: Locator;
    private cartLink: Locator;
    private gitHubLink: Locator;
    private totalElement: Locator;
    private cupsLocator: Array<CoffeeCardComponent>;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('title');
        this.menuLink = page.getByLabel('Menu page');
        this.cartLink = page.getByLabel('Cart page');
        this.gitHubLink = page.getByLabel('GitHub page');
        this.totalElement = page.locator('[data-test=checkout]');
        this.cupsLocator = [];
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