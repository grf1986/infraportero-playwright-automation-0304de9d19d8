import {Locator, Page } from "@playwright/test";

import { context, page } from "../../hooks/hooks";



import { NavigeerNaarTab } from "../../functions/Navigeer/navigeerNaarTab";
import { voorbeeld } from "../../functions/DrukOpButton/voorbeeld";
import { Voorbeeld3_druk_op } from "../../functions/DrukOpButton/voorbeeld3_druk_op";





export class DrukOpPage {
  readonly page: Page;
  readonly clickAanvragenApp: Locator;
  private readonly newTab = context.pages();
  readonly tab0  = this.newTab[0];
  readonly tab1  = this.newTab[1];
  readonly tab2  = this.newTab[2];
  readonly tab3  = this.newTab[3];
  readonly tab4  = this.newTab[4];

  constructor(page: Page) {
    this.page = page;
    this.clickAanvragenApp = page.locator('[class="psa psa-pega-express app-fact-logo app-logo-r"]');
    this.tab1 = this.newTab[1];
    this.tab2 = this.newTab[2];
    this.tab3 = this.newTab[3];
    this.tab4 = this.newTab[4];
  }

  async ClickOnAanvragenApp(){
    await this.page.waitForLoadState();
    await this.page.reload();
    await this.clickAanvragenApp.nth(0).click();
  }


   


   async DrukOpTypeKnop(type: string,text: string,index: number,tab: number){
            const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
                if (targetTab){
                await new Voorbeeld3_druk_op(targetTab).VoorbeeldFunctie(type,text,index);
                }
                else { return 
                  
                }
   }











}


