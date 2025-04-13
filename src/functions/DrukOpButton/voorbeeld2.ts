import {Locator, Page} from "@playwright/test";
import { ILogObj, Logger } from "tslog";
import { context } from "../../hooks/hooks";

const log: Logger<ILogObj> = new Logger();


export class Voorbeeld2 {

    private readonly newTab = context.pages();
    readonly tab0 = this.newTab[0];
    readonly tab1 = this.newTab[1];
    readonly tab2 = this.newTab[2];
    readonly tab3 = this.newTab[3];
    readonly tab4 = this.newTab[4];
    readonly parentLocator: Locator


    

    constructor(private page:Page) {
        this.tab1 = this.newTab[1];
        this.tab2 = this.newTab[2];
        this.tab3 = this.newTab[3];
        this.tab4 = this.newTab[4];
        this.page=page;
        this.parentLocator = this.page.locator('')
    }

    
  

}