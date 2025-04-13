import { Locator, Page } from "@playwright/test";
import { context } from "../../hooks/hooks";


export class dropDownGeneric {
    readonly parentLocator: Locator
    private readonly newTab = context.pages();
    readonly tab0 = this.newTab[0];
    readonly tab1 = this.newTab[1];
    readonly tab2 = this.newTab[2];
    readonly tab3 = this.newTab[3];
    readonly tab4 = this.newTab[4];
    readonly additionalPersonalBlok: Locator


constructor(private page: Page) {
    this.tab1 = this.newTab[1];
    this.tab2 = this.newTab[2];
    this.tab3 = this.newTab[3];
    this.tab4 = this.newTab[4];
    this.page = page
    this.parentLocator = this.page.locator('');
    this.additionalPersonalBlok = this.parentLocator.locator('');

}


  async SelectOptionByValue( value: string, index: number) {
    if (value != "N.v.t") {
    await this.page.waitForLoadState("load");   
    await this.page.waitForTimeout(900); 
    (await this.page.waitForSelector('div > select')).isVisible();
    await this.page.locator('div > select').nth(index).waitFor({ state: "visible" });
    await this.page.locator('div > select').nth(index).selectOption({ value: value });
  }else{

  }
  }

}
