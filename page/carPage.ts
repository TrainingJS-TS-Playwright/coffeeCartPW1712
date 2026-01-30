import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class CarPage extends BasePage {



    constructor(page: Page) {
        super(page);
    }

    async navigate(): Promise<void> {
        await this.page.goto('/cart');
    }

}