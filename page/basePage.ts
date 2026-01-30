import { Page , Locator} from "@playwright/test";
import { expect } from "../fixtures/fixturePage";


export abstract class BasePage {
    protected page: Page;

    private menuLink: Locator;
    private cartLink: Locator;
    private gitHubLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menuLink = page.getByLabel('Menu page');
        this.cartLink = page.getByLabel('Cart page');
        this.gitHubLink = page.getByLabel('GitHub page');
    }

    async goToMenuPage(): Promise<void> {
        await this.menuLink.click();
    }
    async goToCartPage(): Promise<void> {
        await this.cartLink.click();
    }
    async goToGitHubPage(): Promise<void> {
        await this.gitHubLink.click();
    }
    async isMenuLinkSelected(): Promise<void> {
        await expect(this.menuLink).toHaveClass(/router-link-active/);
        await expect(this.cartLink).not.toHaveClass(/router-link-active/);
        await expect(this.gitHubLink).not.toHaveClass(/router-link-active/);
    }
    async isCartLinkSelected(): Promise<void> {
        await expect(this.cartLink).toHaveClass(/router-link-active/);
        await expect(this.menuLink).not.toHaveClass(/router-link-active/);
        await expect(this.gitHubLink).not.toHaveClass(/router-link-active/);
    }
    async isGitHubLinkSelected(): Promise<void> {
        await expect(this.gitHubLink).toHaveClass(/router-link-active/);
        await expect(this.menuLink).not.toHaveClass(/router-link-active/);
        await expect(this.cartLink).not.toHaveClass(/router-link-active/);
    }

    async getCartCount(): Promise<number> {
        const countText = await this.cartLink.innerText();
        const match = countText.match(/\d+/);
        return match ? parseInt(match[0]) : 0;
    }

    abstract navigate(): Promise<void>;
}