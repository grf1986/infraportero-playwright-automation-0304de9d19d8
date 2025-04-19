
import { Locator, Page } from "@playwright/test";




export class CheckText {
    readonly parentLocator: Locator;
    readonly headerBlock: Locator;
    readonly accountGebruikersNaam: Locator;
    readonly status: Locator;
   
    constructor(private page: Page) {
        this.page = page;
        this.parentLocator = this.page.locator('[class="page-wrapper"]');
        this.headerBlock = this.parentLocator.locator('[class="header content"]');
        this.accountGebruikersNaam = this.headerBlock.locator('[data-bind="text: customer().fullname"]');
        this.status= this.parentLocator.locator("")

    }

    async Status(index: number) {
        await this.page.waitForLoadState("load");
        await this.page.waitForTimeout(2000);
        await this.status.nth(index).waitFor({state: "visible"});
        const text = await this.status.nth(index).textContent();
        return text;
    }

    async AccountGebruikersNaam(index: number) {
        await this.page.waitForLoadState("load");
        await this.accountGebruikersNaam.nth(index).waitFor({state: "visible"});
        const text = await this.accountGebruikersNaam.nth(index).textContent();
        return text;
    }



    
}