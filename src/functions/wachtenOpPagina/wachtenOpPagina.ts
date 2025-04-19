import {Locator, Page } from "@playwright/test";

import { context, page } from "../../hooks/hooks";



import { NavigeerNaarTab } from "../../functions/Navigeer/navigeerNaarTab";
import { voorbeeld } from "../../functions/DrukOpButton/voorbeeld";
import { Voorbeeld3_druk_op } from "../../functions/DrukOpButton/voorbeeld3_druk_op";





export class WachtenOpPage {
  private readonly newTab = context.pages();
  readonly tab0  = this.newTab[0];
  readonly tab1  = this.newTab[1];
  readonly tab2  = this.newTab[2];
  readonly tab3  = this.newTab[3];
  readonly tab4  = this.newTab[4];

  constructor(private page: Page) {
    this.page = page;
    this.tab1 = this.newTab[1];
    this.tab2 = this.newTab[2];
    this.tab3 = this.newTab[3];
    this.tab4 = this.newTab[4];
  }


  async WachtenOpPagina(tijd: string) {
const tijdNaarInt = Number(tijd)
await this.page.waitForTimeout(tijdNaarInt);
  }




   













}


