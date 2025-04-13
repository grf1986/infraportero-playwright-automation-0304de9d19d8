import { Locator, Page } from "@playwright/test";
import { context } from "../../hooks/hooks";
import { NavigeerNaarTab } from "../../functions/Navigeer/navigeerNaarTab";
import { dropDownGeneric } from "../../functions/DropDowns/dropDownGeneric";


export class DropDownPage{
  readonly page: Page;
  readonly username: Locator
  readonly password: Locator;
  readonly submitbutton: Locator
  readonly dropDown_SelectByValue: Locator
  readonly dropDown_SelectOption: Locator
  private readonly newTab = context.pages();
  readonly tab0  = this.newTab[0];
  readonly tab1  = this.newTab[1];
  readonly tab2  = this.newTab[2];
  readonly tab3  = this.newTab[3];
  readonly tab4  = this.newTab[4];

  constructor(page: Page) {
    this.page = page;
    this.username = this.page.locator('[id="txtUserID"]');
    this.password = this.page.locator('[id="txtPassword"]');
    this.submitbutton = this.page.locator('[id="sub"]');
    this.tab1 = this.newTab[1];
    this.tab2 = this.newTab[2];
    this.tab3 = this.newTab[3];
    this.tab4 = this.newTab[4];
    this.dropDown_SelectByValue = this.page.locator('select>');
    this.dropDown_SelectOption = this.page.locator('[data-test-id="202301180818010983745"]');
  }


   async Dropdow_SelectOptionByValue(value: string, index: number, tab: number){
    const targetPage = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
    if(targetPage){
    const dropDown = new dropDownGeneric(targetPage);
    await dropDown.SelectOptionByValue( value, index);
    }
    else { return }  //Return ??
}

}