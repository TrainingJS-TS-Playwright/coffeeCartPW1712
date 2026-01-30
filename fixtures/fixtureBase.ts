import {expect as baseExpect, test as baseTest} from "@playwright/test";
import env from "../config/env.js";

type Fixtures = {
    baseClientUrl: string;
}
export const test = baseTest.extend<Fixtures>({
    baseClientUrl: async ({}, use) => {
        await use(env.BASE_CLIENT_URL);
    }
});
export const expect = baseExpect;