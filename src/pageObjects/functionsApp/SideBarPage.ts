import {Page,Locator} from "@playwright/test";
import { ILogObj, Logger } from "tslog";
import { sideBarNavigatie } from "../../functions/sideBarNavigatie";
import { NavigeerNaarTab } from "../../functions/navigeerNaarTab";

export class SideBarPage {

    readonly parentLocator: Locator;
    readonly sideBar: Locator;
    readonly sideBarOpties: Locator;
   
    
    

    constructor(private page: Page) {
    this.parentLocator = this.page.locator('[class="wk chrome yui-skin-sam"]');
    this.sideBar = this.parentLocator.locator('[data-test-id="201902080349360159366"] >div> div').nth(2);
    // this.sideBarOpties = this.sideBar.locator('[class="menu-item-title-wrap"]');
    this.sideBarOpties = this.parentLocator.locator('[data-test-id="201902080349360159366"] >div> div [class="content-item content-layout item-2 remove-all-spacing flex flex-row"] >div>div>div>ul>li>a>span>span')
    
    const log: Logger<ILogObj> = new Logger();
    
    }

    async DrukOpSideBarOptie(text:string, tab:number){
      const targetTab = await new NavigeerNaarTab(this.page).navigeerNaarTab(tab);
                 if (targetTab){
      await new sideBarNavigatie(targetTab).drukOpSideBarOptie(text) }
      else { return }

    }
    
}
