import { Locator, Page } from "@playwright/test";
import { context } from "../../hooks/hooks";


export class Voorbeeld3_druk_op {
  readonly parentLocator: Locator;
  private readonly newTab = context.pages();
  readonly tab0 = this.newTab[0];
  readonly tab1 = this.newTab[1];
  readonly tab2 = this.newTab[2];
  readonly tab3 = this.newTab[3];
  readonly tab4 = this.newTab[4];
  private  caseList: string[] = [];

  constructor(private page: Page) {
    this.tab1 = this.newTab[1];
    this.tab2 = this.newTab[2];
    this.tab3 = this.newTab[3];
    this.tab4 = this.newTab[4];
    this.page = page;
    this.parentLocator = this.page.locator('');
    
     
  }

  async VoorbeeldFunctie(type: string,text: string,index: number) {
    await this.page.waitForLoadState("load");
    
    if (type == "label" && text != "Yes" && text  != "No") {
      await this.page.waitForTimeout(200);
      await this.parentLocator.locator("" + `${type}` + ":has-text('" + `${text}` + "')").nth(index).click()  
      await this.page.waitForTimeout(200);

    }

    else if(type == "radio" ){
      await this.page.waitForTimeout(200);
      await this.page.locator("[value='" + `${text}` + "'] ").nth(index).waitFor({state: 'visible'});
      await this.page.locator("[value='" + `${text}` + "'] ").nth(index).click();  
      await this.page.waitForTimeout(200);
      
    }

    else  if (type == "button" && index == 9999){
      await this.page.waitForTimeout(200)
      await this.parentLocator.locator("" + `${type}` + ":has-text('" + `${text}` + "')").click();
      await this.page.waitForLoadState("load");
      await this.page.waitForTimeout(200);
    }
    else  if (type == "button" && index != 9999){
      await this.page.waitForTimeout(200)
      await this.parentLocator.locator("" + `${type}` + ":has-text('" + `${text}` + "')").nth(index).click();
      await this.page.waitForLoadState("load");
      await this.page.waitForTimeout(800);
    }

    else if(type == "checkbox" ){
      await this.page.waitForTimeout(500)
      const button = this.parentLocator.locator("label:has-text('" + `${text}` + "')");
      await button.nth(index).click();
      await this.page.waitForTimeout(200);
    }

    else if(type == "aria label" ){
      const button = this.parentLocator.locator("[aria-label='" + `${text}` + "']");
      await this.page.waitForLoadState("load");
      await this.page.waitForTimeout(10000);
      await button.nth(index).click();
      await this.page.waitForTimeout(200);
    }

    else if(type == "Kebab menu brieven"){
      await this.page.waitForTimeout(200)
      const button = this.parentLocator.locator(`[data-test-id='202401101750130738704']`);
      await button.nth(index).click();
      await this.page.waitForTimeout(200)
    }

    else  if (type == "Menu item"){
      await this.page.waitForTimeout(200)
      const button = this.parentLocator.locator('[class="menu menu-format-standard menu-regular"][style="display: block;"] [class="menu-item-anchor "]')
      await button.locator(":has-text('" + `${text}` + "')").nth(index).click();
      await this.page.waitForTimeout(200);
    
    }else if (type == "n.v.t"){
      
    }
  
  }

  

  

}