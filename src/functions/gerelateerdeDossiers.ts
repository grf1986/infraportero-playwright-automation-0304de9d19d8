import {Locator, Page} from "@playwright/test";
import { ILogObj, Logger } from "tslog";
import { context } from "../hooks/hooks";
const log: Logger<ILogObj> = new Logger();


export class GerelateerdeDossiers {

    private readonly newTab = context.pages();
    readonly tab0 = this.newTab[0];
    readonly tab1 = this.newTab[1];
    readonly tab2 = this.newTab[2];
    readonly tab3 = this.newTab[3];
    readonly tab4 = this.newTab[4];
    readonly parentLocator: Locator
    readonly gerelateerdeDossiersBlock: Locator;
    readonly allesWeergeven: Locator;
    

    constructor(private page:Page) {
        this.tab1 = this.newTab[1];
        this.tab2 = this.newTab[2];
        this.tab3 = this.newTab[3];
        this.tab4 = this.newTab[4];
        this.page=page;
        this.parentLocator = this.page.locator('[class="wk chrome yui-skin-sam"]')
        this.gerelateerdeDossiersBlock = this.parentLocator.locator('[data-test-id="201810250605180888507"]');
        this.allesWeergeven = this.gerelateerdeDossiersBlock.locator("[data-test-id='2015110410023706663712']");
        
    }

    async DrukOPGerelateerdeDossiers(button: string, index: number) {
      await this.page.waitForLoadState("load");
  
      if (button === "Alles weergeven") {
          await this.page.waitForTimeout(500);
          await this.allesWeergeven.nth(index).click();
      } else {
          const dataTestId = "[data-test-id='202306081352280548138']";
  
          while (true) { 
              const links = await this.page.$$(dataTestId);
              let linkFound = false;
  
              for (const link of links) {
                  const linkText = await link.textContent();
                  if (linkText && linkText.trim().startsWith(button)) {
                      
                      await Promise.all([
                          this.page.locator(dataTestId + `:has-text("${linkText.trim()}")`).nth(index).click(),
                          this.page.waitForLoadState("domcontentloaded").catch(() => {}) 
                      ]);
                      
                      linkFound = true;
                      break; 
                  }
              }
  
              if (linkFound) break; 
              await this.page.waitForTimeout(500); 
          }
      }
  }
  
  

}