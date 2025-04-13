import {Locator, Page } from "@playwright/test";
import { context } from "../../hooks/hooks";
import { DrukOpButtonMetNaam } from "../../functions/DrukOpButtonMetNaam";



export class SelectAppPage {
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

  async DrukOpApp(button: string,index: number, tab: number){
    const druk = new DrukOpButtonMetNaam(this.page);
    await druk.hasText(button,index);
  }

  }

