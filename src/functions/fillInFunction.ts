import {Locator, Page} from "@playwright/test";
import { ILogObj, Logger } from "tslog";
import { context } from "../hooks/hooks";
const log: Logger<ILogObj> = new Logger();


export class FillInFunction {
    locator: any;

    private readonly newTab = context.pages();
    readonly tab0 = this.newTab[0];
    readonly tab1 = this.newTab[1];
    readonly tab2 = this.newTab[2];
    readonly tab3 = this.newTab[3];
    readonly tab4 = this.newTab[4];
    readonly parentLocator: Locator
    readonly fillInSelector_Veld: Locator
    readonly fillInSelector_Block: Locator
    
    constructor(private page:Page) {
        this.tab1 = this.newTab[1];
        this.tab2 = this.newTab[2];
        this.tab3 = this.newTab[3];
        this.tab4 = this.newTab[4];
        this.page=page;
        this.parentLocator = this.page.locator('[class="wk chrome yui-skin-sam"]')
        this.fillInSelector_Veld = this.page.locator('[type="text"]')
        this.fillInSelector_Block = this.page.locator('span>textarea')

    }

    async FillIn_Veld(index: number,value: string){
        await this.page.waitForLoadState("load");

        const maxRetries = 3;
        let retries = 0;
    
        do {
            await this.page.waitForTimeout(500);
            await this.fillInSelector_Veld.nth(index).click();
            await this.fillInSelector_Veld.nth(index).clear();
            await this.fillInSelector_Veld.nth(index).fill(value);
            await this.fillInSelector_Veld.nth(index).waitFor({timeout: 2000});

           const filledValue = await this.fillInSelector_Veld.nth(index).innerText();

           filledValue.length > 0;

            if (filledValue.length > 0) {
                    
                break; 
            } else if (filledValue.length == 0) {
            
                retries++;
                
            }
        } while (retries < maxRetries);
    }

    // async CallFillInFunction(elementLocator: string,value: string){
    //     const newSelector = this.page.locator(`${elementLocator}`);
    //     await this.FillIn(newSelector, value);
    // }
    

    async Type_veld(index: number,value: string){
        await this.page.waitForLoadState("load");

        await this.fillInSelector_Veld.nth(index).waitFor({ state: "visible" });

        const maxRetries = 3;
        let retries = 0;
    
        do {
           
            await this.page.waitForTimeout(500);
            await this.fillInSelector_Veld.nth(index).click();
            await this.fillInSelector_Veld.nth(index).clear();
            await this.fillInSelector_Veld.nth(index).type(value);
            await this.fillInSelector_Veld.nth(index).waitFor({timeout: 2000});
     
           const filledValue = await this.fillInSelector_Veld.nth(index).innerText();

           filledValue.length > 0;

            if (filledValue.length > 0) {
                    
                break; 
            } else if (filledValue.length == 0) {
            
                retries++;
                
            }
        } while (retries < maxRetries);
    }
    async Type_Block(index: number,value: string){
        await this.page.waitForLoadState("load");

        await this.fillInSelector_Block.waitFor({ state: "visible" });

        const maxRetries = 3;
        let retries = 0;
    
        do {
           
            await this.page.waitForTimeout(500);
            await this.fillInSelector_Block.nth(index).click();
            await this.fillInSelector_Block.nth(index).type(value);
            await this.fillInSelector_Block.nth(index).waitFor({timeout: 2000});
     
           const filledValue = await this.fillInSelector_Block.nth(index).innerText();

           filledValue.length > 0;

            if (filledValue.length > 0) {
                    
                break; 
            } else if (filledValue.length == 0) {
            
                retries++;
                
            }
        } while (retries < maxRetries);
    }

    async FillIn_Iframe(value: string, index: number){
        await this.page.waitForLoadState("load");
        await this.page.waitForTimeout(500);
       const iframeLocator = this.page.frameLocator('iframe[tabindex="0"]').nth(index);
       const editableElement = iframeLocator.locator('[contenteditable="true"]');
       await editableElement.clear();
       await editableElement.fill(value);     
    }

    async FillIn_Block(value: string, index: number){
        await this.page.waitForLoadState("load");
        
        const maxRetries = 3;
        let retries = 0;
    
        do {
            await this.page.waitForTimeout(1000);
            await this.fillInSelector_Block.nth(index).click();
            await this.fillInSelector_Block.nth(index).clear();
            await this.fillInSelector_Block.nth(index).fill(value);
            await this.fillInSelector_Block.nth(index).waitFor({timeout: 2000});

           const filledValue = await this.fillInSelector_Block.nth(index).innerText();

           filledValue.length > 0;

            if (filledValue.length > 0) {
                    
                break; 
            } else if (filledValue.length == 0) {
            
                retries++;
                
            }
        } while (retries < maxRetries);

    }

  }


      
     

  




  