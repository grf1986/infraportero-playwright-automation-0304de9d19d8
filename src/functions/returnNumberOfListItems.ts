
import { Locator, Page, expect } from "@playwright/test";
import { Context } from "vm";
import { waitTime } from "../statics/Text/testData";
import { context } from "../hooks/hooks";
import { DrukOpButton } from "./drukOpknop";



export class Return {
    private readonly newTab = context.pages();
    readonly tab0  = this.newTab[0];
    readonly tab1  = this.newTab[1];
    readonly tab2  = this.newTab[2];
    readonly tab3  = this.newTab[3];
    readonly tab4  = this.newTab[4];
    readonly parentLocator: Locator;
    readonly actiesBlok:Locator;
    readonly locatorResult: Locator;
    readonly vernieuwenButton: Locator;
    readonly actiesButton: Locator;
   

    constructor(private page: Page) {
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

    async NumberOfListItems(locator: Locator) {
        const innerTextList: string[] = [];
        const values = await locator.innerText();
        const textParts = values.split('\n');
        textParts.forEach(part => {
            innerTextList.push(part.trim());
            
          });
          return innerTextList.length;
        
    }
    async ReturnfListItems(locator: Locator) {
        const innerTextList: string[] = [];
        const values = await locator.innerText();
        const textParts = values.split('\n');
        textParts.forEach(part => {
            innerTextList.push(part.trim());
            
          });
          return innerTextList;
        
    }

    async ReturnItemsFromLocalActtion(){
    
        const ensureActiesButtonOpened = async () => {
            if (!(await this.vernieuwenButton.isVisible())) {
                const druk = new DrukOpButton();
                await druk.Button(this.actiesButton);
                await this.page.waitForSelector('[role="menuitem"]:has-text("Vernieuwen")', { state: 'visible' });
            }
        };
                await ensureActiesButtonOpened()
                const values = new Return(this.page);
                const returnfListItems = await values.ReturnfListItems(this.locatorResult);
                return returnfListItems
    
    
    
    
    }
}