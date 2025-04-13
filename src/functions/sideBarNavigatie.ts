import {Page,Locator} from "@playwright/test";
import { DrukOpButton } from "./drukOpknop";
import { waitTime } from "../statics/Text/testData";
import { ILogObj, Logger } from "tslog";
import { Return } from "./returnNumberOfListItems";
import { NavigeerNaarTab } from "./navigeerNaarTab";

export class sideBarNavigatie {

    readonly parentLocator: Locator;
    readonly sideBar: Locator;
    readonly sideBarOpties: Locator;
   
    
    

    constructor(private page: Page) {
    this.parentLocator = this.page.locator('[class="wk chrome yui-skin-sam"]');
    this.sideBar = this.parentLocator.locator('[data-test-id="201902080349360159366"] >div> div').nth(2);
    this.sideBarOpties = this.sideBar.locator('[class="menu-item-title"]');
    
    const log: Logger<ILogObj> = new Logger();
    
    }

    async drukOpSideBarOptie(text:string){
      const visible = await this.sideBar.isVisible();
      const button = this.sideBarOpties;
      await button.filter({ hasText: `${text}` }).click();
    }
    
}
