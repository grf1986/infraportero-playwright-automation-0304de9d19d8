import { Locator, Page } from "@playwright/test";
import { context } from "../../hooks/hooks";
import { NavigeerNaarTab } from "../../functions/Navigeer/navigeerNaarTab";
import { dropDownGeneric } from "../../functions/DropDowns/dropDownGeneric";


export class DropDownPage{
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


   async Dropdow_SelectOptionByValue(value: string, index: number, tab: number){
    const targetPage = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
    if(targetPage){
    const dropDown = new dropDownGeneric(targetPage);
    await dropDown.SelectOptionByValue( value, index);
    }
    else { return } 
}

}