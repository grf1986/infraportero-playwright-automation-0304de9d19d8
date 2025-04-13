import { Locator, Page } from "@playwright/test";
import { FillInFunction } from "../../functions/fillInFunction";
import { LoginInFunction } from "../../functions/login";
import { context, NewTab } from "../../hooks/hooks";
import { deleteJsonFile } from "../../functions/deleteFile";
import { Return } from "../../functions/returnNumberOfListItems";
import { DrukOpButton } from "../../functions/drukOpknop";
import { NavigeerNaarTab } from "../../functions/navigeerNaarTab";

export class LocalActien_Return_Items_as_ListPage {
  readonly page: Page;
  private readonly newTab = context.pages();
  readonly tab0  = this.newTab[0];
  readonly tab1  = this.newTab[1];
  readonly tab2  = this.newTab[2];
  readonly tab3  = this.newTab[3];
  readonly tab4  = this.newTab[4];
  readonly parentLocator: Locator
  readonly actiesBlok:Locator 
  readonly locatorResult: Locator
  readonly vernieuwenButton: Locator
  
  readonly actiesButton: Locator

  constructor(page: Page) {
    this.page = page;

    this.tab1 = this.newTab[1];
    this.tab2 = this.newTab[2];
    this.tab3 = this.newTab[3];
    this.tab4 = this.newTab[4];
    this.parentLocator = this.page.locator('[class="wk chrome yui-skin-sam"]');
    this.actiesBlok = this.parentLocator.locator('div>[role="menu"]')
    this.locatorResult = this.page.locator('[id="pyNavigation1723100225718"]')
    this.actiesButton = this.page.locator("div >div [class='content-item content-sub_section item-2 remove-all-spacing flex flex-row'] [node_name='CaseActionHeader'] [title='Acties']");
    this.vernieuwenButton = this.actiesBlok.locator('[role="menuitem"]:has-text("Vernieuwen")');
  }
  
    async ReturnItemsFromLocalActtion(tab: number){
        const targetPage = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
            if(targetPage){
            const returnList = new Return(targetPage);
            return await returnList.ReturnItemsFromLocalActtion();
            }
            else { return } //Return ??
    }
}


