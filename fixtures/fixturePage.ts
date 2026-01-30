import {expect as baseExpect, test as baseTest} from "./fixtureBase";
import { MenuPage } from "../page/menuPage";
import { CarPage } from "../page/carPage";
import { GitHubPage } from "../page/gitHubPage";

type FixturesPage = {
    menuPage: MenuPage;
    cartPage: CarPage;
    gitHubPage: GitHubPage;

}

export const test = baseTest.extend<FixturesPage>({

    menuPage: async ({page}, use) => {
        const menuPage = new MenuPage(page);
        await use (menuPage);
    },

    cartPage: async ({page}, use) => {
        const cartPage = new CarPage(page);
        await use (cartPage);
    },  
    gitHubPage: async ({page}, use) => {
        const gitHubPage = new GitHubPage(page);
        await use (gitHubPage);
    }

});
export const expect = baseExpect;


