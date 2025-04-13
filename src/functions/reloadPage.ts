
import { Locator, Page } from "@playwright/test";
import { waitTime } from "../statics/Text/testData";
import { context } from "../hooks/hooks";

export class ReloadPageFunction {

    private readonly newTab = context.pages();
    readonly tab0 = this.newTab[0];
    readonly tab1 = this.newTab[1];
    readonly tab2 = this.newTab[2];
    readonly tab3 = this.newTab[3];
    readonly tab4 = this.newTab[4];

  
    constructor(private page: Page) {
        this.page = page
        this.tab1 = this.newTab[1];
        this.tab2 = this.newTab[2];
        this.tab3 = this.newTab[3];
        this.tab4 = this.newTab[4];
    }

    async Reload() {
        await this.page.reload();
    }
}