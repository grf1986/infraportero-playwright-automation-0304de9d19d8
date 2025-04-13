import { Locator, Page } from "@playwright/test";
import { waitTime } from "../statics/Text/testData";
import { context, page } from "../hooks/hooks";

export class dropDownGeneric {
    readonly parentLocator: Locator
    private readonly newTab = context.pages();
    readonly tab0 = this.newTab[0];
    readonly tab1 = this.newTab[1];
    readonly tab2 = this.newTab[2];
    readonly tab3 = this.newTab[3];
    readonly tab4 = this.newTab[4];
    readonly additionalPersonalBlok: Locator
    readonly dropDown: Locator

constructor(private page: Page) {
    this.tab1 = this.newTab[1];
    this.tab2 = this.newTab[2];
    this.tab3 = this.newTab[3];
    this.tab4 = this.newTab[4];
    this.page = page
    this.parentLocator = this.page.locator('[class="wk chrome yui-skin-sam"]');
    this.dropDown = this.page.locator('div > select').nth(0)

    this.additionalPersonalBlok = this.parentLocator.locator('[class=" flex content layout-content-stacked  content-stacked  case-action-area"]');

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

  async DropDown_Zoeken_Invullen_Generic(value: string, index: number, indexpijl: number) {
    await this.page.waitForLoadState("load");
    await this.page.waitForTimeout(200);
  
    let invoerVeldGevonden = await this.page.locator('[id="po0"] [id="poc0"]').isVisible();
  
    while (!invoerVeldGevonden) {
      // check als i.caret-down-img beschikbaar is
      let caretLocator = this.page.locator('[class="caret-down-img"]').nth(indexpijl);
      let caretVisible = await caretLocator.isVisible();
  
      // als het niet beschikbaar is
      if (caretVisible == false) {
        caretLocator = this.page.locator('[class="pi pi-caret-down"]').nth(indexpijl);
        caretVisible = await caretLocator.isVisible();
      
  
      // als selector gevonden is
      if (caretVisible == true) {
        await caretLocator.click();
      } else {
        throw new Error("Caret icon not found with either selector");
      }
    }
      await this.page.waitForTimeout(200);
      await this.page.locator('[type="text"]').nth(index).type(value, { delay: 200 });
      await this.page.waitForTimeout(2000);
  
      let resultaatOnderInvoerVeldGevonden = await this.page.locator('[id="po0"] [id="poc0"]').isVisible();
  
      if (resultaatOnderInvoerVeldGevonden) {
        await this.page.waitForTimeout(200);
        await this.page.locator('[id="po0"] [id="poc0"]').click();
        break;
      }
    }
  }
  


}
