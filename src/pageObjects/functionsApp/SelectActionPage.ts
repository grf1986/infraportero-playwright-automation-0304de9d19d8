


import { Locator, Page } from "@playwright/test";
import { FillInFunction } from "../../functions/fillInFunction";
import { LoginInFunction } from "../../functions/login";
import { context, NewTab } from "../../hooks/hooks";
import { DrukActiesButton } from "../../functions/drukActiesButton";
import { dropDownGeneric } from "../../functions/dropDownGeneric";
import { NavigeerNaarTab } from "../../functions/navigeerNaarTab";

export class SelectActionPage{
  readonly page: Page;
  readonly username: Locator
  readonly password: Locator;
  readonly submitbutton: Locator
  readonly dropDown_SelectByValue: Locator
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
  }



async DrukOpLocalAction(localAction:string, tab: number){  

       const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
              if (targetTab){
              await new DrukActiesButton(targetTab).optie(localAction);
                        }
                    else { return }  
    }





}