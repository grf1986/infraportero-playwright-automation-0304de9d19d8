
import { Locator, Page } from "@playwright/test";



export class CheckText {
    readonly parentLocator: Locator
    readonly status: Locator
   
    constructor(private page: Page) {
        this.page = page;
        this.parentLocator = this.page.locator('[class="wk chrome yui-skin-sam"]');
        this.status= this.parentLocator.locator("[data-test-id='2016083016191602341167946']")

    }

    async Status(index: number) {
        await this.page.waitForLoadState("load");
        await this.page.waitForTimeout(2000);
        await this.status.nth(index).waitFor({state: "visible"});
        const text = await this.status.nth(index).textContent();
        return text;
    }
}