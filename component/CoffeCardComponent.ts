

import { Locator } from '@playwright/test';



export class CoffeeCardComponent {
    protected rootElement: Locator;
    protected name: Locator;
    protected cost: Locator;
    protected cup: Locator;
    constructor(rootElement: Locator) {
        this.rootElement = rootElement;
        this.name = rootElement.locator('h4');
        this.cost = rootElement.locator('h4 small');
        this.cup =rootElement
    }
    async getName(): Promise<string> {
        const fullText = await this.name.innerText();
        const costText = await this.cost.innerText();
        const nameText = fullText.replace(costText, '').trim();
        return nameText;
    }
    async getCost(): Promise<string> {
        return this.cost.innerText();
    }
    async click(): Promise<void> {
        await this.cup.click();
    }
}