import { Locator, Page } from "@playwright/test";
import { FillInFunction } from "../../functions/fillInFunction";
import { LoginInFunction } from "../../functions/login";
import { context, NewTab } from "../../hooks/hooks";
import { Locator2String } from "../../helpers/getSelectorAsString";
import { NavigeerNaarTab } from "../../functions/navigeerNaarTab";
import { SelecteerWerkWachtRij } from "../../functions/SelecteerWachtRij";

export class SelecteerWerkWachtRijPage {
  readonly page: Page;
  
  private readonly newTab = context.pages();
  readonly tab0  = this.newTab[0];
  readonly tab1  = this.newTab[1];
  readonly tab2  = this.newTab[2];
  readonly tab3  = this.newTab[3];
  readonly tab4  = this.newTab[4];

  constructor(page: Page) {
    this.page = page;
   
    this.tab1 = this.newTab[1];
    this.tab2 = this.newTab[2];
    this.tab3 = this.newTab[3];
    this.tab4 = this.newTab[4];
  }
  
  async SelecteerWerkBak(value: string, tab: number){
    const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
    if (targetTab){
    await new SelecteerWerkWachtRij(targetTab).SelecteerWerkWachtrij(value);

    }
    {return}
}

}
