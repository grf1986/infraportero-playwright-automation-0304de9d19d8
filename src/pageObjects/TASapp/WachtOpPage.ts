import {Locator, Page } from "@playwright/test";

import { context, page } from "../../hooks/hooks";



import { NavigeerNaarTab } from "../../functions/Navigeer/navigeerNaarTab";
import { voorbeeld } from "../../functions/DrukOpButton/voorbeeld";
import { Voorbeeld3_druk_op } from "../../functions/DrukOpButton/voorbeeld3_druk_op";
import { WachtenOpPage } from "../../functions/wachtenOpPagina/wachtenOpPagina";





export class WachtenOpPagina {
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


   async WachtenOpPagina(tijd:string,tab: number){
            const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
                if (targetTab){
                await new WachtenOpPage(targetTab).WachtenOpPagina(tijd);
                }
                else { return 
                  
                }
   }











}


